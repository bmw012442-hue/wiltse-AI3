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

const LEGACY_COMMON_LOGIN_ALLOWED = String(process.env.ALLOW_COMMON_LOGIN || "").toLowerCase() === "true";

function normalizeAccountRecord(record) {
  if (!record) return null;
  const username = String(record.username || record.id || record.name || "").trim();
  const password = String(record.password || record.pass || record.pidn || "").trim();
  if (!username || !password) return null;
  return {
    username,
    password,
    name: String(record.name || username).trim(),
    role: String(record.role || "user").trim().toLowerCase() === "admin" ? "admin" : "user",
    active: record.active !== false
  };
}

function loadIndividualAccounts() {
  const raw = String(process.env.ICU_USERS_JSON || "").trim();
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    const records = Array.isArray(parsed)
      ? parsed
      : Object.entries(parsed).map(([username, value]) => {
          if (typeof value === "string" || typeof value === "number") {
            return { username, password: String(value) };
          }
          return { username, ...value };
        });

    const seen = new Set();
    return records.map(normalizeAccountRecord).filter(account => {
      if (!account) return false;
      const key = account.username.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  } catch (err) {
    console.error("ICU_USERS_JSON parse error:", err);
    return [];
  }
}

const INDIVIDUAL_ACCOUNTS = loadIndividualAccounts();

function findLoginAccount(username) {
  const target = String(username || "").trim().toLowerCase();

  for (const account of INDIVIDUAL_ACCOUNTS) {
    if (account.active && account.username.toLowerCase() === target) return account;
  }

  // ALLOW_COMMON_LOGIN=true이면 개별 계정 목록이 있어도 기존 공용 계정도 함께 허용합니다.
  // 공용 계정은 관리용 보조 계정으로 사용하므로 role은 admin으로 둡니다.
  if (LEGACY_COMMON_LOGIN_ALLOWED && LOGIN_ID && LOGIN_PASSWORD && target === LOGIN_ID.toLowerCase()) {
    return { username: LOGIN_ID, password: LOGIN_PASSWORD, name: "ICU 공용 관리자", role: "admin", active: true };
  }

  return null;
}

function loginConfigured() {
  return INDIVIDUAL_ACCOUNTS.length > 0 || (LEGACY_COMMON_LOGIN_ALLOWED && LOGIN_ID && LOGIN_PASSWORD);
}



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
  if (!q || item.search_hidden) return 0;
  const terms = q.split(/[,\s/·]+/).filter(Boolean);
  const title = normalize(item.title);
  const category = normalize(item.category);
  const originalCategory = normalize(item.original_category);
  const aliases = (item.aliases || []).map(normalize);
  const searchTerms = (item.search_terms || []).map(normalize);
  const text = normalize(itemText(item));
  let score = 0;

  if (title === q) score += 180;
  else if (title.includes(q)) score += 135;

  for (const a of aliases) {
    if (!a) continue;
    if (q === a) score += 150;
    else if (q.includes(a) || a.includes(q)) score += 95;
  }

  for (const st of searchTerms) {
    if (!st) continue;
    if (q === st) score += 160;
    else if (q.includes(st) || st.includes(q)) score += 85;
  }

  if (category.includes(q) || originalCategory.includes(q)) score += 45;
  if (normalize(item.summary).includes(q)) score += 18;

  const directText = [title, category, originalCategory, ...aliases, ...searchTerms].join(" ");
  let directHits = 0;

  for (const term of terms) {
    if (term.length < 2) continue;
    if (directText.includes(term)) directHits += 1;
    if (title.includes(term)) score += 42;
    if (aliases.some(a => a.includes(term))) score += 36;
    if (searchTerms.some(a => a.includes(term))) score += 38;
    if (category.includes(term) || originalCategory.includes(term)) score += 16;
    if (normalize(item.summary).includes(term)) score += 8;
    if (text.includes(term)) score += 3;
  }

  if ((item.tables || []).length && /표|테이블|table|정리|종류|순서|번호|채혈|검체|수혈|보조기|기관절개관/.test(q)) score += 18;
  if ((item.images || []).length && /그림|사진|이미지|image|picture|photo|보조기|기관절개관|lab bottle|채혈|검체|tube|트라코|코켄/.test(q)) score += 18;

  if (!directText.includes(q) && directHits === 0) score -= 45;

  return Math.max(0, score);
}


function retrieveCards(query, limit = 8) {
  const ranked = items.map(item => ({ item, score: scoreItem(query, item) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) return [];
  const top = ranked[0].score;
  const minScore = Math.max(12, top * 0.32);

  return ranked
    .filter(x => x.score >= minScore)
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

function createSessionToken(account) {
  const payload = Buffer.from(JSON.stringify({
    u: account.username || account,
    name: account.name || account.username || account,
    role: account.role || "user",
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

function setSessionCookie(res, account) {
  const token = createSessionToken(account);
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
    req.user = {
      username: session.u,
      name: session.name || session.u,
      role: session.role || "user"
    };
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
    version: "0.58.0-v58-common-login-with-individual",
    cards: items.length,
    loginConfigured: loginConfigured(),
    loginMode: INDIVIDUAL_ACCOUNTS.length > 0 ? "individual" : "legacy",
    accountCount: INDIVIDUAL_ACCOUNTS.length,
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
  if (!loginConfigured()) {
    return res.status(500).json({
      error: "Render 환경변수 ICU_USERS_JSON이 설정되지 않았습니다. 개별 계정 JSON을 Environment에 등록하세요."
    });
  }

  if (isBlocked(req)) {
    return res.status(429).json({ error: "로그인 실패가 많아 10분 동안 제한되었습니다." });
  }

  const username = String(req.body?.username || "").trim();
  const password = String(req.body?.password || "");

  const account = findLoginAccount(username);
  if (account && safeEqual(password, account.password)) {
    clearFailed(req);
    setSessionCookie(res, account);
    return res.json({
      ok: true,
      user: {
        username: account.username,
        name: account.name,
        role: account.role
      }
    });
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
  res.json({
    ok: true,
    user: req.user,
    sessionHours: SESSION_HOURS,
    loginMode: INDIVIDUAL_ACCOUNTS.length > 0 ? "individual" : "legacy"
  });
});

app.post("/api/search", (req, res) => {
  res.json({ cards: retrieveCards(req.body?.query || "", 12) });
});


function buildLocalManualAnswer(query, cards) {
  if (!cards || cards.length === 0) {
    return "해당 질문과 직접 연결되는 매뉴얼 카드를 찾지 못했습니다. 검색어를 더 짧게 입력해보세요.";
  }
  const lines = [];
  lines.push("AI 연결이 불안정하여, 매뉴얼 DB 기반 요약 답변을 표시합니다.");
  lines.push("");
  lines.push(`질문: ${query}`);
  lines.push("");
  cards.slice(0, 5).forEach((card, idx) => {
    lines.push(`${idx + 1}. ${card.title}`);
    if (card.summary) lines.push(`- 핵심: ${card.summary}`);
    (card.steps || []).slice(0, 5).forEach(step => lines.push(`- ${step}`));
    if ((card.tables || []).length) lines.push(`- 표 ${card.tables.length}개 포함`);
    if ((card.images || []).length) lines.push(`- 그림/사진 ${card.images.length}개 포함: 참고 카드 또는 상세보기에서 확인`);
    lines.push("");
  });
  lines.push("※ 담당의 지시와 병원 최신 프로토콜 우선");
  return lines.join("\n");
}

app.post("/api/ask", async (req, res) => {
  try {
    const query = String(req.body?.query || "").trim();
    if (!query) return res.status(400).json({ error: "질문을 입력하세요." });

    const cards = retrieveCards(query, 10);
    if (cards.length === 0) {
      return res.json({ answer: "해당 질문과 직접 연결되는 매뉴얼 카드를 찾지 못했습니다.", sources: [], cards: [] });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.json({
        answer: buildLocalManualAnswer(query, cards),
        sources: cards.map(c => ({ id: c.id, title: c.title, category: c.category })),
        cards,
        fallback: true
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

    try {
      const response = await client.chat.completions.create({
        model,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user }
        ],
        temperature: 0.1
      });

      return res.json({
        answer: response.choices?.[0]?.message?.content || buildLocalManualAnswer(query, cards),
        sources: cards.map(c => ({ id: c.id, title: c.title, category: c.category })),
        cards
      });
    } catch (aiErr) {
      console.error("OpenAI API fallback:", aiErr);
      return res.json({
        answer: buildLocalManualAnswer(query, cards),
        sources: cards.map(c => ({ id: c.id, title: c.title, category: c.category })),
        cards,
        fallback: true,
        ai_error: String(aiErr.message || aiErr)
      });
    }
  } catch (err) {
    console.error(err);
    const query = String(req.body?.query || "").trim();
    const cards = retrieveCards(query, 10);
    return res.json({
      answer: buildLocalManualAnswer(query, cards),
      sources: cards.map(c => ({ id: c.id, title: c.title, category: c.category })),
      cards,
      fallback: true,
      server_error: String(err.message || err)
    });
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
