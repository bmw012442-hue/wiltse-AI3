
import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
const publicDir = path.join(__dirname, "public");

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.static(publicDir));

const rawDb = JSON.parse(fs.readFileSync(path.join(publicDir, "icu_ai_manual_db_v2.json"), "utf-8"));
const items = rawDb.items || [];
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "missing-key" });

function normalize(text) {
  return String(text || "").toLowerCase().replace(/\s+/g, " ").trim();
}
function itemText(item) {
  return [
    item.id, item.category, item.title, item.summary, item.urgency,
    ...(item.aliases || []), ...(item.indications || []), ...(item.preparation || []),
    ...(item.steps || []), ...(item.dosage_or_mix || []), ...(item.orders_or_emr || []),
    ...(item.charting || []), ...(item.io || []), ...(item.warnings || []),
    ...(item.related || []), ...(item.tags || [])
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
  for (const term of terms) {
    if (term.length < 2) continue;
    if (text.includes(term)) score += 3;
    if (normalize(item.title).includes(term)) score += 8;
    if (normalize(item.category).includes(term)) score += 5;
    if ((item.aliases || []).some(a => normalize(a).includes(term))) score += 10;
  }
  if (item.urgency === "emergency" && /응급|cpr|심정지|code|에피|intubation|삽관|rosc/i.test(q)) score += 8;
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
    id: item.id, category: item.category, title: item.title, aliases: item.aliases,
    summary: item.summary, urgency: item.urgency, indications: item.indications,
    preparation: item.preparation, steps: item.steps, dosage_or_mix: item.dosage_or_mix,
    orders_or_emr: item.orders_or_emr, charting: item.charting, io: item.io, warnings: item.warnings
  };
}

app.get("/health", (req, res) => {
  res.json({ ok: true, app: rawDb.app?.name || "ICU AI Manual", version: "0.4.0", cards: items.length, hasOpenAIKey: Boolean(process.env.OPENAI_API_KEY) });
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
      messages: [{ role: "system", content: system }, { role: "user", content: user }],
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

app.get("*", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
  console.log(`ICU AI Manual Render v4 running on port ${port}`);
});
