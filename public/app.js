const $ = (id) => document.getElementById(id);
const allItems = window.ICU_MANUAL_DB?.items || [];
$("cardCount").textContent = `${allItems.length} cards`;

const fieldLabels = {
  indications: "적응증/상황",
  preparation: "준비물",
  steps: "절차",
  dosage_or_mix: "용량/Mix/기준",
  orders_or_emr: "처방/EMR",
  charting: "기록",
  io: "I/O",
  warnings: "주의사항",
  related: "관련 카드",
  source_refs: "출처"
};

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function findById(id) {
  return allItems.find(x => x.id === id);
}

function findByTitle(title) {
  return allItems.find(x => x.title === title);
}

function renderCategoryButtons() {
  const groups = [...new Set(allItems.map(x => (x.category || "기타").split("/")[0]))].sort();
  $("categoryButtons").innerHTML = groups.map(g => `<button data-category="${esc(g)}">${esc(g)}</button>`).join("");
  document.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;
      const cards = allItems.filter(x => (x.category || "").startsWith(cat));
      $("cardsHeading").textContent = `${cat} 카드`;
      renderCards(cards);
      $("status").textContent = `${cat}: ${cards.length}개 카드`;
      $("answerBox").classList.add("hidden");
    });
  });
}

function urgencyBadge(card) {
  const u = card.urgency || "routine";
  return `<span class="badge ${u === "emergency" ? "emergency" : u === "urgent" ? "urgent" : ""}">${esc(u)}</span>`;
}

function renderCards(cards) {
  $("cards").innerHTML = (cards || []).map(card => `
    <article class="card" data-card-id="${esc(card.id)}">
      <h3>${esc(card.title)}</h3>
      <div class="meta">${esc(card.id)} · ${esc(card.category)}</div>
      <p class="summary">${esc(card.summary)}</p>
      ${urgencyBadge(card)}
      ${(card.aliases || []).slice(0,5).map(a => `<span class="badge">${esc(a)}</span>`).join("")}
      ${(card.dosage_or_mix || []).slice(0,2).map(a => `<span class="badge">${esc(a)}</span>`).join("")}
      <div class="meta">탭하면 상세내용 열림</div>
    </article>
  `).join("") || `<article class="card"><h3>검색 결과 없음</h3><p class="summary">다른 키워드로 검색해보세요.</p></article>`;

  document.querySelectorAll("[data-card-id]").forEach(el => {
    el.addEventListener("click", () => openCard(el.dataset.cardId));
  });
}

function renderDetailList(key, vals) {
  if (!Array.isArray(vals) || vals.length === 0) return "";
  return `<section class="detail-section">
    <h4>${fieldLabels[key] || key}</h4>
    <ul>${vals.map(v => `<li>${esc(v)}</li>`).join("")}</ul>
  </section>`;
}

function openCard(id) {
  const card = findById(id);
  if (!card) return;
  $("detailTitle").textContent = card.title;
  $("detailMeta").textContent = `${card.id} · ${card.category} · ${card.urgency || "routine"}`;

  const body = `
    <p class="summary">${esc(card.summary)}</p>
    ${renderDetailList("indications", card.indications)}
    ${renderDetailList("preparation", card.preparation)}
    ${renderDetailList("steps", card.steps)}
    ${renderDetailList("dosage_or_mix", card.dosage_or_mix)}
    ${renderDetailList("orders_or_emr", card.orders_or_emr)}
    ${renderDetailList("charting", card.charting)}
    ${renderDetailList("io", card.io)}
    ${renderDetailList("warnings", card.warnings)}
    ${renderDetailList("related", card.related)}
    ${renderDetailList("source_refs", card.source_refs)}
  `;
  $("detailBody").innerHTML = body;
  $("cardDialog").showModal();
}

function localSearch(query, limit = 30) {
  const q = String(query || "").toLowerCase().trim();
  if (!q) return allItems.slice(0, 12);
  const terms = q.split(/[,\s/]+/).filter(Boolean);

  function score(card) {
    const text = [
      card.id, card.category, card.title, card.summary,
      ...(card.aliases || []),
      ...(card.steps || []),
      ...(card.dosage_or_mix || []),
      ...(card.preparation || []),
      ...(card.warnings || [])
    ].join(" ").toLowerCase();
    let s = 0;
    if ((card.title || "").toLowerCase().includes(q)) s += 30;
    if ((card.category || "").toLowerCase().includes(q)) s += 10;
    for (const a of card.aliases || []) {
      const aa = String(a).toLowerCase();
      if (aa === q) s += 35;
      if (aa.includes(q) || q.includes(aa)) s += 15;
    }
    for (const t of terms) {
      if (t.length < 2) continue;
      if (text.includes(t)) s += 3;
      if ((card.title || "").toLowerCase().includes(t)) s += 8;
      if ((card.category || "").toLowerCase().includes(t)) s += 5;
    }
    return s;
  }
  return allItems.map(card => ({card, s: score(card)}))
    .filter(x => x.s > 0)
    .sort((a,b) => b.s - a.s)
    .slice(0, limit)
    .map(x => x.card);
}

async function searchCards() {
  const query = $("question").value.trim();
  if (!query) return;
  $("status").textContent = "카드 검색 중...";
  $("answerBox").classList.add("hidden");
  $("cardsHeading").textContent = "검색 결과 카드";

  try {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query })
    });
    const data = await res.json();
    const serverCards = data.cards || [];
    const cards = serverCards.length ? serverCards : localSearch(query);
    renderCards(cards);
    $("status").textContent = `${cards.length}개 카드를 찾았습니다. 카드를 누르면 상세내용이 열립니다.`;
  } catch {
    const cards = localSearch(query);
    renderCards(cards);
    $("status").textContent = `${cards.length}개 카드를 찾았습니다. 카드를 누르면 상세내용이 열립니다.`;
  }
}

async function askAI() {
  const query = $("question").value.trim();
  if (!query) return;
  $("status").textContent = "매뉴얼 DB 검색 후 AI 답변 생성 중...";
  $("answerBox").classList.add("hidden");
  $("cards").innerHTML = "";

  try {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || data.detail || "오류 발생");

    $("answer").textContent = data.answer || "";
    $("sources").innerHTML = (data.sources || []).map(s =>
      `<span class="source clickable" data-source-id="${esc(s.id)}">${esc(s.id)} · ${esc(s.title)}</span>`
    ).join("");
    $("answerBox").classList.remove("hidden");

    const cards = data.cards && data.cards.length ? data.cards : localSearch(query, 12);
    renderCards(cards);
    $("cardsHeading").textContent = "AI가 참고한 카드";
    $("status").textContent = "완료. 아래 카드 또는 참고카드를 누르면 상세내용이 열립니다.";

    document.querySelectorAll("[data-source-id]").forEach(el => {
      el.addEventListener("click", () => openCard(el.dataset.sourceId));
    });
  } catch (err) {
    $("answer").textContent = "오류: " + err.message + "\n\nRender 환경변수 OPENAI_API_KEY 설정과 배포 로그를 확인하세요.";
    $("sources").innerHTML = "";
    $("answerBox").classList.remove("hidden");
    $("status").textContent = "오류 발생";
  }
}

$("askBtn").addEventListener("click", askAI);
$("searchBtn").addEventListener("click", searchCards);
$("clearBtn").addEventListener("click", () => {
  $("question").value = "";
  $("status").textContent = "";
  $("answerBox").classList.add("hidden");
  $("cardsHeading").textContent = "검색 결과 카드";
  renderCards(allItems.slice(0, 10));
});

$("closeDialog").addEventListener("click", () => $("cardDialog").close());

document.querySelectorAll("[data-q]").forEach(btn => {
  btn.addEventListener("click", () => {
    $("question").value = btn.dataset.q;
    askAI();
  });
});

document.querySelectorAll("[data-open-title]").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = findByTitle(btn.dataset.openTitle);
    if (card) {
      openCard(card.id);
    } else {
      $("question").value = btn.textContent;
      renderCards(localSearch(btn.textContent));
    }
  });
});

renderCategoryButtons();
renderCards(allItems.slice(0, 10));
