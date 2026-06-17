import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "public");

const LOGIN_ID = process.env.ICU_LOGIN_ID || "";
const LOGIN_PASSWORD = process.env.ICU_LOGIN_PASSWORD || "";
const SESSION_SECRET = process.env.SESSION_SECRET || "temporary-session-secret-change-this";
const SESSION_HOURS = Number(process.env.SESSION_HOURS || 12);
const SESSION_MAX_AGE_SECONDS = Math.max(1, SESSION_HOURS) * 60 * 60;
const SESSION_COOKIE = "icu_session";

const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "missing-key" });

app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

function loadDb() {
  const jsonPath = path.join(publicDir, "icu_ai_manual_db_v2.json");
  if (!fs.existsSync(jsonPath)) {
    console.warn("DB file not found:", jsonPath);
    return { app: { name: "ICU AI Manual" }, items: [] };
  }
  return JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
}

const rawDb = loadDb();
const items = rawDb.items || [];

function normalize(text) {
  return String(text || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function flattenTableText(item) {
  const parts = [];
  for (const t of item.tables || []) {
    parts.push(t.title || "");
    parts.push(...(t.headers || []));
    for (const row of t.rows || []) parts.push(...(row || []));
  }
  return parts;
}

function flattenImageText(item) {
  const parts = [];
  for (const img of item.images || []) parts.push(img.src || "", img.alt || "", img.caption || "");
  if ((item.images || []).length) parts.push("그림", "사진", "이미지", "참고 이미지");
  if ((item.tables || []).length) parts.push("표", "테이블", "정리표");
  return parts;
}

function itemText(item) {
  return [
    item.id, item.category, item.title, item.summary, item.urgency,
    ...(item.aliases || []), ...(item.indications || []), ...(item.preparation || []),
    ...(item.steps || []), ...(item.dosage_or_mix || []), ...(item.orders_or_emr || []),
    ...(item.charting || []), ...(item.io || []), ...(item.warnings || []),
    ...(item.related || []), ...(item.tags || []),
    ...flattenTableText(item), ...flattenImageText(item)
  ].join(" ");
}

function scoreItem(query, item) {
  const q = normalize(query);
  if (!q) return 0;
  const terms = q.split(/[,\s/]+/).filter(Boolean);
  const text = normalize(itemText(item));
  let score = 0;

  if (normalize(item.title).includes(q)) score += 30;
  if (normalize(item.category).includes(q)) score += 12;

  for (const alias of item.aliases || []) {
    const a = normalize(alias);
    if (q === a) score += 35;
    if (q.includes(a) || a.includes(q)) score += 20;
  }

  if ((item.tables || []).length && /표|테이블|table|정리표/.test(q)) score += 10;
  if ((item.images || []).length && /그림|사진|이미지|image|picture|photo/.test(q)) score += 10;

  for (const term of terms) {
    if (term.length < 2) continue;
    if (text.includes(term)) score += 3;
    if (normalize(item.title).includes(term)) score += 8;
    if (normalize(item.category).includes(term)) score += 5;
    if ((item.aliases || []).some(a => normalize(a).includes(term))) score += 10;
  }

  return score;
}

function retrieveCards(query, limit = 8) {
  return items.map(item => ({ item, score: scoreItem(query, item) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(x => x.item);
}

function cardForPrompt(item) {
  return {
    id: item.id,
    category: item.category,
    title: item.title,
    aliases: item.aliases,
    summary: item.summary,
    urgency: item.urgency,
    indications: item.indications,
    preparation: item.preparation,
    steps: item.steps,
    dosage_or_mix: item.dosage_or_mix,
    orders_or_emr: item.orders_or_emr,
    charting: item.charting,
    io: item.io,
    warnings: item.warnings,
    tables: item.tables,
    images: item.images
  };
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  const out = {};
  for (const part of header.split(";")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const idx = trimmed.indexOf("=");
    if (idx < 0) continue;
    out[decodeURIComponent(trimmed.slice(0, idx))] = decodeURIComponent(trimmed.slice(idx + 1));
  }
  return out;
}

function safeEqual(a, b) {
  const aa = Buffer.from(String(a || ""));
  const bb = Buffer.from(String(b || ""));
  if (aa.length !== bb.length) return false;
  return crypto.timingSafeEqual(aa, bb);
}

function signPayload(payload) {
  return crypto.createHmac("sha256", SESSION_SECRET).update(payload).digest("base64url");
}

function createSessionToken(username) {
  const payload = Buffer.from(JSON.stringify({
    u: username,
    exp: Date.now() + SESSION_MAX_AGE_SECONDS * 1000
  })).toString("base64url");
  return `${payload}.${signPayload(payload)}`;
}

function verifySessionToken(token) {
  try {
    const [payload, sig] = String(token || "").split(".");
    if (!payload || !sig) return null;
    if (!safeEqual(sig, signPayload(payload))) return null;
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf-8"));
    if (!data.exp || Date.now() > data.exp) return null;
    return data;
  } catch {
    return null;
  }
}

function getSession(req) {
  return verifySessionToken(parseCookies(req)[SESSION_COOKIE]);
}

function setSessionCookie(res, username) {
  const token = createSessionToken(username);
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${SESSION_MAX_AGE_SECONDS}${secure}`
  );
}

function clearSessionCookie(res) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `${SESSION_COOKIE}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0${secure}`
  );
}

const failedLogin = new Map();

function clientKey(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return String(forwarded).split(",")[0].trim();
  return req.socket.remoteAddress || "unknown";
}

function isBlocked(req) {
  const rec = failedLogin.get(clientKey(req));
  return Boolean(rec && rec.blockUntil && rec.blockUntil > Date.now());
}

function recordFailed(req) {
  const key = clientKey(req);
  const rec = failedLogin.get(key) || { count: 0, blockUntil: 0 };
  rec.count += 1;
  if (rec.count >= 5) {
    rec.blockUntil = Date.now() + 10 * 60 * 1000;
    rec.count = 0;
  }
  failedLogin.set(key, rec);
}

function clearFailed(req) {
  failedLogin.delete(clientKey(req));
}

function requireAuth(req, res, next) {
  const session = getSession(req);
  if (session) {
    req.user = session.u;
    return next();
  }

  if (req.path.startsWith("/api/")) {
    return res.status(401).json({ error: "로그인이 필요합니다." });
  }

  return res.redirect(`/login?next=${encodeURIComponent(req.originalUrl || "/")}`);
}

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    version: "0.31.0-v31-login-fix",
    cards: items.length,
    loginConfigured: Boolean(LOGIN_ID && LOGIN_PASSWORD),
    hasOpenAIKey: Boolean(process.env.OPENAI_API_KEY)
  });
});

app.get("/login", (req, res) => {
  if (getSession(req)) return res.redirect("/");
  res.sendFile(path.join(publicDir, "login.html"));
});

app.get("/sw.js", (req, res) => {
  res.type("application/javascript");
  res.sendFile(path.join(publicDir, "sw.js"));
});

// 로그인 화면에 필요한 정적 파일은 로그인 전에도 접근 가능해야 합니다.
// 이 라우트가 없으면 /login_final_screen.png 요청도 /login으로 리다이렉트되어
// 배경 이미지가 연한 파란 화면처럼 보일 수 있습니다.
const publicLoginAssets = new Set([
  "/login_final_screen.png",
  "/login_hospital_bg.png",
  "/favicon-16.png",
  "/favicon-32.png",
  "/apple-touch-icon.png",
  "/icon-192.png",
  "/icon-512.png",
  "/wiltse_app_icon.png",
  "/wiltse_logo.png",
  "/manifest.json"
]);

app.get(Array.from(publicLoginAssets), (req, res) => {
  const safeName = path.basename(req.path);
  res.sendFile(path.join(publicDir, safeName));
});


app.post("/api/login", (req, res) => {
  if (!LOGIN_ID || !LOGIN_PASSWORD) {
    return res.status(500).json({
      error: "Render 환경변수 ICU_LOGIN_ID, ICU_LOGIN_PASSWORD가 설정되지 않았습니다."
    });
  }

  if (isBlocked(req)) {
    return res.status(429).json({ error: "로그인 실패가 많아 10분 동안 제한되었습니다." });
  }

  const username = String(req.body?.username || "").trim();
  const password = String(req.body?.password || "");

  if (safeEqual(username, LOGIN_ID) && safeEqual(password, LOGIN_PASSWORD)) {
    clearFailed(req);
    setSessionCookie(res, username);
    return res.json({ ok: true });
  }

  recordFailed(req);
  return res.status(401).json({ error: "아이디 또는 비밀번호가 맞지 않습니다." });
});

app.post("/api/logout", (req, res) => {
  clearSessionCookie(res);
  res.json({ ok: true });
});

app.use(requireAuth);

app.get("/api/me", (req, res) => {
  res.json({ ok: true, user: req.user, sessionHours: SESSION_HOURS });
});

app.post("/api/search", (req, res) => {
  res.json({ cards: retrieveCards(req.body?.query || "", 12) });
});

app.post("/api/ask", async (req, res) => {
  try {
    const query = String(req.body?.query || "").trim();
    if (!query) return res.status(400).json({ error: "질문을 입력하세요." });

    const cards = retrieveCards(query, 8);
    if (cards.length === 0) {
      return res.json({ answer: "해당 질문과 직접 연결되는 매뉴얼 카드를 찾지 못했습니다.", sources: [], cards: [] });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.json({
        answer: "현재 서버에 OPENAI_API_KEY가 설정되어 있지 않아 ChatGPT 답변은 생성하지 못했습니다. 대신 아래 검색된 매뉴얼 카드를 확인하세요.",
        sources: cards.map(c => ({ id: c.id, title: c.title, category: c.category })),
        cards
      });
    }

    const system = `
너는 중환자실(ICU) 업무 매뉴얼 검색 보조 AI다.
반드시 제공된 ICU 매뉴얼 카드 내용만 근거로 답한다.
제공된 카드에 없는 내용은 추측하지 말고 "매뉴얼 카드에서 확인되지 않음"이라고 말한다.
투약, 처치, 응급상황 답변에는 항상 "담당의 지시와 병원 최신 프로토콜 우선"을 포함한다.
한국어로 짧은 체크리스트 형태로 답한다.
`;

    const user = `질문: ${query}\n\nICU 매뉴얼 카드:\n${JSON.stringify(cards.map(cardForPrompt), null, 2)}`;

    const response = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      temperature: 0.1
    });

    res.json({
      answer: response.choices?.[0]?.message?.content || "답변 생성 실패",
      sources: cards.map(c => ({ id: c.id, title: c.title, category: c.category })),
      cards
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI 답변 생성 중 오류가 발생했습니다.", detail: String(err.message || err) });
  }
});

app.use(express.static(publicDir, {
  setHeaders: (res) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
  }
}));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
  console.log(`ICU AI Manual v31 login fix running on port ${port}`);
});
