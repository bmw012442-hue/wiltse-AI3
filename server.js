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
  return String(text || "")
    .toLowerCase()
    .replace(/dräger/g, "drager")
    .replace(/fi\s*o2/g, "fio2")
    .replace(/sp\s*o2/g, "spo2")
    .replace(/[·•]/g, " ")
    .replace(/[()[\]{}<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function expandSearchTerms(rawTerms) {
  const synonymMap = {
    "순환모니터링": ["순환", "모니터링", "중환자실 순환", "혈역학"],
    "혈압저하": ["BP 저하", "저혈압", "MAP", "hypotension"],
    "에이라인": ["A-line", "arterial line", "zeroing", "waveform"],
    "씨라인": ["C-line", "central line", "CVP", "중심정맥라인"],
    "부정맥": ["EKG", "ECG", "tachycardia", "bradycardia", "이상 리듬"],
    "말초순환": ["perfusion", "capillary refill", "청색증", "말초관류"],
    "승압제": ["vasopressor", "MAP 목표", "norepinephrine", "dopamine"],

    "원내응급간호": ["병동간호팀", "142페이지", "149페이지", "29 응급간호", "E-cart", "제세동기", "Dr call"],
    "응급카트": ["E-cart", "Emergency-cart", "응급약물", "응급물품"],
    "제세동기위치": ["AED 위치", "defibrillator location", "배치장소"],
    "코드블루": ["Code blue", "6114", "CPR방송"],
    "역할분담": ["응급상황시 간호 분담 역할", "지원간호사", "최초발견간호사"],
    "전원절차": ["전원 기준", "진료의뢰서", "검사결과지", "CD COPY"],

    "사비나": ["savina", "drager", "dräger"],
    "드레거": ["drager", "dräger", "savina"],
    "인공호흡기": ["ventilator", "기계환기"],
    "intubation": ["기관삽관", "삽관", "ETT", "기도확보"],
    "기관삽관": ["intubation", "삽관", "ETT", "기도확보"],
    "제세동기": ["defibrillator", "AED", "shock", "제세동"],
    "응급약물": ["E-cart", "emergency drug", "epinephrine", "norepinephrine", "lorazepam"],
    "경련": ["seizure", "항경련제", "status epilepticus", "lorazepam", "midazolam"],
    "항경련제": ["seizure", "lorazepam", "midazolam", "diazepam", "keppra"],
    "쇼크": ["shock", "저혈압", "hypotension", "MAP", "norepinephrine"],
    "흡인": ["suction"],
    "혈역학": ["hemodynamic", "map", "cvp"],
    "저혈압": ["hypotension", "map", "shock"],
    "투석": ["crrt", "dialysis"],
    "신장": ["renal", "aki", "crrt"],
    "위관": ["ng tube", "l-tube", "ngt"],
    "검체": ["specimen", "bottle", "tube"],
    "채혈": ["blood", "specimen", "tube"],
    "수혈": ["transfusion", "blood transfusion", "혈액제제", "rbc", "ffp", "cryo", "plt"],
    "혈액제제": ["rbc", "ffp", "pc", "aplt", "cryo", "blood product"],
    "응고인자": ["pt", "inr", "aptt", "fibrinogen", "d-dimer"],
    "드레싱": ["dressing", "wound", "상처", "소독", "드레싱재료", "폼드레싱"],
    "소독": ["disinfection", "sterile", "wound cleansing"],
    "낙상": ["fall", "fall risk"],
    "욕창": ["pressure injury", "pressure ulcer", "braden", "상처", "드레싱", "체위변경", "예방"],
    "통증": ["pain", "nrs", "cpot"],
    "보조기": ["brace", "splint", "positioning", "보호대", "restraint"],
    "펌프": ["pump", "infusion pump", "syringe pump"],
    "보호대": ["restraint", "손목보호대", "장갑형", "매듭", "대체수단", "모니터링", "ROM"],
    "매듭": ["knot", "square knot", "slip knot", "clove hitch", "정방향 매듭", "고리 매듭", "클로브 히치"],
    "상처": ["wound", "pressure injury", "dressing", "소독", "드레싱"],
    "엑스레이": ["x-ray", "xray", "radiograph", "chest xray", "폐렴", "기흉", "폐부종", "흉수", "무기폐"],
    "xray": ["x-ray", "radiograph", "엑스레이", "pneumonia", "pneumothorax", "edema", "effusion", "atelectasis"]
  };
  const out = [...rawTerms];
  rawTerms.forEach(t => {
    Object.keys(synonymMap).forEach(k => {
      if (t.includes(k)) out.push(...synonymMap[k]);
    });
  });
  return [...new Set(out.map(normalize).filter(x => x.length >= 2))];
}

function flattenTableText(item) {
  const parts = [];
  for (const t of item.tables || []) {
    parts.push(t.title || "", t.caption || "");
    parts.push(...(t.search_terms || []), ...(t.headers || []));
    if (t.include_rows_in_search) {
      for (const row of t.rows || []) parts.push(...(row || []));
    }
  }
  if ((item.tables || []).length) parts.push("표", "테이블", "정리표", "체크리스트", "요약표");
  return parts;
}

function flattenImageText(item) {
  const parts = [];
  for (const img of item.images || []) {
    parts.push(img.src || "", img.alt || "", img.caption || "");
    parts.push(...(img.search_terms || []));
  }
  if ((item.images || []).length) parts.push("그림", "사진", "이미지", "참고 이미지", "교육용 이미지");
  return parts;
}

function flattenVideoText(item) {
  const parts = [];
  for (const v of item.videos || []) {
    parts.push(v.title || "", v.caption || "", v.src || "", v.href || "", v.url || "", v.link || "");
    parts.push(...(v.search_terms || []));
  }
  if ((item.videos || []).length) parts.push("동영상", "영상", "video");
  return parts;
}

function mediaText(item) {
  return [...flattenTableText(item), ...flattenImageText(item), ...flattenVideoText(item)].join(" ");
}

function itemText(item) {
  return [
    item.id, item.category, item.original_category, item.title, item.summary, item.urgency,
    item.search_index || "",
    ...(item.search_terms || []),
    ...(item.aliases || []), ...(item.indications || []), ...(item.preparation || []),
    ...(item.steps || []), ...(item.dosage_or_mix || []), ...(item.orders_or_emr || []),
    ...(item.charting || []), ...(item.io || []), ...(item.warnings || []),
    ...(item.related || []), ...(item.tags || []),
    mediaText(item)
  ].join(" ");
}

function scoreItem(query, item) {
  const q = normalize(query);
  if (!q || item.search_hidden) return 0;
  const excluded = (item.exclude_queries || []).map(normalize).filter(Boolean);
  if (excluded.some(x => q.includes(x) || x.includes(q))) return 0;

  const rawTerms = q.split(/[, \n\t/&·]+/).filter(t => t.length >= 2);
  const terms = expandSearchTerms(rawTerms);
  const title = normalize(item.title);
  const category = normalize(item.category);
  const originalCategory = normalize(item.original_category);
  const aliases = (item.aliases || []).map(normalize);
  const searchTerms = (item.search_terms || []).map(normalize);
  const summary = normalize(item.summary);
  const media = normalize(mediaText(item));
  const full = normalize(itemText(item));
  const directText = [title, category, originalCategory, ...aliases, ...searchTerms, normalize(item.search_index)].join(" ");
  let score = 0;

  if (title === q) score += 220;
  else if (title.includes(q)) score += 150;

  for (const a of aliases) {
    if (!a) continue;
    if (q === a) score += 170;
    else if (q.includes(a) || a.includes(q)) score += 95;
  }

  for (const st of searchTerms) {
    if (!st) continue;
    if (q === st) score += 180;
    else if (q.includes(st) || st.includes(q)) score += 90;
  }

  if (category.includes(q) || originalCategory.includes(q)) score += 45;
  if (summary.includes(q)) score += 20;
  if (media.includes(q)) score += 30;

  let directHits = 0;
  for (const term of terms) {
    if (term.length < 2) continue;
    if (directText.includes(term)) directHits += 1;
    if (title.includes(term)) score += 44;
    if (aliases.some(a => a.includes(term))) score += 38;
    if (searchTerms.some(a => a.includes(term))) score += 40;
    if (category.includes(term) || originalCategory.includes(term)) score += 18;
    if (summary.includes(term)) score += 10;
    if (media.includes(term)) score += 12;
    if (full.includes(term)) score += 3;
  }

  if ((item.tables || []).length && /표|테이블|table|정리|종류|순서|번호|채혈|검체|수혈|혈액제제|응고인자|보조기|기관절개관|체크리스트|요약표|욕창|드레싱|매듭|xray|엑스레이/.test(q)) score += 22;
  if ((item.images || []).length && /그림|사진|이미지|image|picture|photo|수혈|혈액제제|응고인자|보조기|기관절개관|lab bottle|채혈|검체|tube|트라코|코켄|욕창|상처|드레싱|보호대|매듭|xray|x-ray|엑스레이|폐렴|기흉|폐부종|흉수|무기폐/.test(q)) score += 30;
  if ((item.images || []).length && /욕창|상처|드레싱|보호대|매듭|수혈|혈액제제|응고인자|xray|x-ray|엑스레이|사진|이미지|그림|폐렴|기흉|폐부종|흉수|무기폐|체위변경|예방|ROM|모니터링/.test(q)) score += 24;
  if (((item.id || "").startsWith("V87_") || (item.id || "").startsWith("V88_")) && /욕창|상처|드레싱|보호대|매듭|xray|엑스레이|체크리스트|요약표|폐렴|기흉|폐부종|흉수|무기폐|체위변경|예방|대체수단|ROM/.test(q)) score += 28;
  if (item.prefer_media_first && /표|이미지|사진|그림|수혈|혈액제제|응고인자/.test(q)) score += 20;

  if (!directText.includes(q) && !media.includes(q) && directHits === 0) score -= 45;

  if ((item.id || "").startsWith("V95_") && /응급|cpr|code blue|제세동기|defibrillator|shock|쇼크|저혈압|경련|seizure|항경련제|응급약물|e-cart|intubation|기관삽관|삽관/.test(q)) score += 35;
  if ((item.id || "") === "V95_INTUBATION_PREP_ASSIST" && /intubation|기관삽관|삽관|ett|기도확보/.test(q)) score += 80;
  if ((item.id || "").startsWith("V98_") && /원내|프로토콜|병동간호팀|142|149|응급간호|e-cart|응급카트|제세동기|aed|ekg|역할분담|dr\.?\s*call|6114|코드블루|전원/.test(q)) score += 90;

  
  if ((item.id || "").startsWith("V99_") && /순환|모니터링|혈압|vital|에이라인|a-line|arterial line|waveform|zeroing|씨라인|c-line|cvp|ekg|ecg|tachy|brady|i\/o|섭취량|배설량|소변량|승압제|vasopressor|말초순환|perfusion/.test(q)) score += 95;

  return Math.max(0, score);
}

function retrieveCards(query, limit = 8) {
  const ranked = items.map(item => ({ item, score: scoreItem(query, item) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) return [];
  const top = ranked[0].score;
  const minScore = Math.max(12, top * 0.30);

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
    steps: item.hide_raw_steps ? [] : item.steps,
    dosage_or_mix: item.dosage_or_mix,
    orders_or_emr: item.orders_or_emr,
    charting: item.charting,
    io: item.io,
    warnings: item.warnings,
    tables: item.tables,
    images: item.images,
    videos: item.videos
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
    version: "1.99.0-v99-circulation-monitoring-protocol",
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

  const username = String(req.body?.username || "").trim();
  const password = String(req.body?.password || "");

  const account = findLoginAccount(username);
  if (account && safeEqual(password, account.password)) {
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
  console.log(`ICU AI Manual v99 circulation monitoring protocol running on port ${port}`);
});
