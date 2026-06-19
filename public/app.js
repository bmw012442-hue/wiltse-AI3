const $ = (id) => document.getElementById(id);
const allItems = window.ICU_MANUAL_DB?.items || [];
if ($("cardCount")) $("cardCount").textContent = `${allItems.length} cards`;

const fieldLabels = {
  indications: "적응증/상황", preparation: "준비물", steps: "절차",
  dosage_or_mix: "용량/Mix/기준", orders_or_emr: "처방/EMR",
  charting: "기록", io: "I/O", warnings: "주의사항",
  related: "관련 카드", source_refs: "출처"
};

function esc(s) { return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function findById(id) { return allItems.find(x => x.id === id); }
function findByTitle(title) { return allItems.find(x => x.title === title); }

function renderCategoryButtons() {
  const box = $("categoryButtons");
  if (!box) return;
  const groups = [...new Set(allItems.map(x => (x.category || "기타").split("/")[0]))].sort();
  box.innerHTML = groups.map(g => `<button data-category="${esc(g)}">${esc(g)}</button>`).join("");
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
      ${(card.aliases || []).slice(0,6).map(a => `<span class="badge">${esc(a)}</span>`).join("")}
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
  return `<section class="detail-section"><h4>${fieldLabels[key] || key}</h4><ul>${vals.map(v => `<li>${esc(v)}</li>`).join("")}</ul></section>`;
}


function renderTables(tables) {
  if (!Array.isArray(tables) || tables.length === 0) return "";
  return tables.map(t => `
    <section class="detail-section table-section">
      <h4>${esc(t.title || "표")}</h4>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>${(t.headers || []).map(h => `<th>${esc(h)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${(t.rows || []).map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `).join("");
}

function renderImages(images) {
  if (!Array.isArray(images) || images.length === 0) return "";
  return `<section class="detail-section image-section">
    <h4>그림 / 참고 이미지</h4>
    <div class="image-grid">
      ${images.map(img => `
        <figure>
          <img src="${esc(img.src)}" alt="${esc(img.alt || img.caption || "참고 이미지")}" loading="lazy" />
          ${img.caption ? `<figcaption>${esc(img.caption)}</figcaption>` : ""}
        </figure>
      `).join("")}
    </div>
  </section>`;
}

function openCard(id) {
  const card = findById(id);
  if (!card) return;
  $("detailTitle").textContent = card.title;
  $("detailMeta").textContent = `${card.id} · ${card.category} · ${card.urgency || "routine"}`;
  $("detailBody").innerHTML = `
    <p class="summary">${esc(card.summary)}</p>
    ${renderDetailList("indications", card.indications)}
    ${renderDetailList("preparation", card.preparation)}
    ${renderTables(card.tables)}
    ${renderImages(card.images)}
    ${renderDetailList("steps", card.steps)}
    ${renderDetailList("dosage_or_mix", card.dosage_or_mix)}
    ${renderDetailList("orders_or_emr", card.orders_or_emr)}
    ${renderDetailList("charting", card.charting)}
    ${renderDetailList("io", card.io)}
    ${renderDetailList("warnings", card.warnings)}
    ${renderDetailList("related", card.related)}
    ${renderDetailList("source_refs", card.source_refs)}
  `;
  $("cardDialog").showModal();
}



function setMenuActive(activeBtn) {
  document.querySelectorAll("[data-menu-q]").forEach(btn => {
    btn.classList.toggle("active", btn === activeBtn);
  });
}

function setActionActive(activeId) {
  ["askBtn", "searchBtn", "clearBtn"].forEach(id => {
    const el = $(id);
    if (!el) return;
    el.classList.toggle("active", id === activeId);
  });
}

function localSearch(query, limit = 40) {
  const q = String(query || "").toLowerCase().trim();
  if (!q) return allItems.slice(0, 12);
  const terms = q.split(/[,\s/&·()]+/).filter(Boolean);

  function hasMedia(card) {
    return (card.images || []).length > 0 || (card.tables || []).length > 0;
  }

  function score(card) {
    const text = [
      card.id, card.category, card.title, card.summary,
      ...(card.aliases || []), ...(card.steps || []), ...(card.dosage_or_mix || []),
      ...(card.preparation || []), ...(card.warnings || []), ...(card.tags || []),
      ...((card.tables || []).flatMap(t => [
        t.title || "",
        ...(t.headers || []),
        ...((t.rows || []).flatMap(row => row || []))
      ])),
      ...((card.images || []).flatMap(img => [
        img.src || "", img.alt || "", img.caption || "", "그림", "사진", "이미지", "참고 이미지"
      ])),
      ...((card.tables || []).length ? ["표", "테이블", "정리표"] : [])
    ].join(" ").toLowerCase();

    let s = 0;
    if ((card.title || "").toLowerCase().includes(q)) s += 45;
    if ((card.category || "").toLowerCase().includes(q)) s += 12;

    for (const a of card.aliases || []) {
      const aa = String(a).toLowerCase();
      if (aa === q) s += 45;
      if (aa.includes(q) || q.includes(aa)) s += 22;
    }

    for (const t of terms) {
      if (t.length < 2) continue;
      if (text.includes(t)) s += 4;
      if ((card.title || "").toLowerCase().includes(t)) s += 13;
      if ((card.category || "").toLowerCase().includes(t)) s += 6;
      if ((card.aliases || []).some(a => String(a).toLowerCase().includes(t))) s += 10;
    }

    if (hasMedia(card)) s += 12;
    if ((card.images || []).length && /(그림|사진|이미지|표|image|photo|picture|기관절개관|lab bottle|채혈|blood|culture|a-line|abga|dressing|수혈)/i.test(q)) s += 18;
    if ((card.tables || []).length && /(표|정리|종류|순서|기준|채혈|수혈|lab bottle)/i.test(q)) s += 16;

    // 원문 검색 보강 카드는 '원문'이라고 검색할 때만 위로 올라오게 함
    if ((card.category || "").includes("업로드 원문") && !/(원문|전체|보강)/.test(q)) s -= 45;

    return s;
  }

  const ranked = allItems.map(card => ({card, s: score(card)}))
    .filter(x => x.s > 0).sort((a,b) => b.s - a.s);

  return ranked.slice(0, limit).map(x => x.card);
}

function makeLocalManualAnswer(query, cards) {
  const q = String(query || "").trim();
  const used = (cards && cards.length ? cards : localSearch(q, 6)).slice(0, 5);
  if (!used.length) return "관련 매뉴얼 카드를 찾지 못했습니다. 검색어를 더 짧게 입력해보세요.";

  const lines = [];
  lines.push("AI 연결이 불안정하여, 매뉴얼 DB 기반 요약 답변을 표시합니다.");
  lines.push("");
  lines.push("질문: " + q);
  lines.push("");
  used.forEach((card, idx) => {
    lines.push(`${idx + 1}. ${card.title}`);
    if (card.summary) lines.push(`- 핵심: ${card.summary}`);
    const steps = (card.steps || []).slice(0, 5);
    steps.forEach(s => lines.push(`- ${s}`));
    if ((card.tables || []).length) lines.push(`- 표 ${card.tables.length}개 포함`);
    if ((card.images || []).length) lines.push(`- 그림/사진 ${card.images.length}개 포함: 아래 참고 카드 또는 상세보기에서 확인`);
    lines.push("");
  });
  lines.push("※ 담당의 지시와 병원 최신 프로토콜 우선");
  return lines.join("\n");
}



function setLoading(message) {
  const hint = $("loadingHint");
  const text = $("loadingText");
  if (text) text.textContent = message || "처리 중입니다...";
  if (hint) hint.classList.remove("hidden");
  if ($("status")) {
    $("status").classList.remove("hidden");
    $("status").innerHTML = `<span class="spinner"></span><span>${esc(message || "처리 중입니다...")}</span>`;
  }
}

function clearLoading() {
  const hint = $("loadingHint");
  if (hint) hint.classList.add("hidden");
  if ($("status")) {
    $("status").classList.add("hidden");
    $("status").innerHTML = "";
  }
}

function setBusyButton(buttonId, isBusy, busyText) {
  const btn = $(buttonId);
  if (!btn) return;
  if (isBusy) {
    btn.dataset.originalText = btn.dataset.originalText || btn.textContent;
    btn.textContent = busyText || "진행 중...";
    btn.disabled = true;
  } else {
    btn.textContent = btn.dataset.originalText || btn.textContent;
    btn.disabled = false;
  }
}

function showResultsArea() {
  const el = $("resultsArea");
  if (el) el.classList.remove("hidden");
  const guide = $("startGuide");
  if (guide) guide.classList.add("hidden");
}

function hideResultsArea() {
  const el = $("resultsArea");
  if (el) el.classList.add("hidden");
  const guide = $("startGuide");
  if (guide) guide.classList.remove("hidden");
  if ($("cards")) $("cards").innerHTML = "";
  if ($("status")) $("status").textContent = "";
  if ($("answerBox")) $("answerBox").classList.add("hidden");
  if ($("cardsHeading")) $("cardsHeading").textContent = "검색 결과 카드";
}

async function searchCards() {
  setActionActive("searchBtn");
  const query = $("question").value.trim();
  if (!query) {
    clearLoading();
    hideResultsArea();
    $("question").focus();
    return;
  }

  showResultsArea();
  $("answerBox").classList.add("hidden");
  setLoading("카드 검색 중입니다...");
  setBusyButton("searchBtn", true, "검색 중...");

  try {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({query})
    });

    if (!res.ok) throw new Error("서버 검색 실패");

    const data = await res.json();
    const cards = data.cards || localSearch(query, 12);
    renderCards(cards);
    $("cardsHeading").textContent = "검색 결과 카드";
    $("status").classList.remove("hidden");
    $("status").innerHTML = `<b>카드 검색 완료</b><span>${cards.length}개의 관련 카드를 찾았습니다.</span>`;
  } catch (err) {
    const cards = localSearch(query, 12);
    renderCards(cards);
    $("cardsHeading").textContent = "검색 결과 카드";
    $("status").classList.remove("hidden");
    $("status").innerHTML = `<b>카드 검색 완료</b><span>서버 검색 대신 기기 내 검색 결과 ${cards.length}개를 표시합니다.</span>`;
  } finally {
    const hint = $("loadingHint");
    if (hint) hint.classList.add("hidden");
    setBusyButton("searchBtn", false);
  }
}

async function askAI() {
  setActionActive("askBtn");
  const query = $("question").value.trim();
  if (!query) {
    $("status").textContent = "";
    hideResultsArea();
    $("question").focus();
    return;
  }
  showResultsArea();
  $("status").textContent = "매뉴얼 DB 검색 후 AI 답변 생성 중...";
  $("answerBox").classList.add("hidden");
  $("cards").innerHTML = "";
  try {
    const res = await fetch("/api/ask", {
      method: "POST", headers: {"Content-Type": "application/json"},
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
    const cards = localSearch(query, 12);
    $("answer").textContent = makeLocalManualAnswer(query, cards);
    $("sources").innerHTML = cards.slice(0, 6).map(s =>
      `<span class="source clickable" data-source-id="${esc(s.id)}">${esc(s.id)} · ${esc(s.title)}</span>`
    ).join("");
    $("answerBox").classList.remove("hidden");
    renderCards(cards);
    $("cardsHeading").textContent = "매뉴얼 DB 기반 참고 카드";
    $("status").textContent = "AI 서버 연결 오류가 있어 기기 내 매뉴얼 검색으로 답변을 표시했습니다.";
    document.querySelectorAll("[data-source-id]").forEach(el => {
      el.addEventListener("click", () => openCard(el.dataset.sourceId));
    });
  }
}


const questionBox = $("question");
if (questionBox) {
  questionBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      askAI();
    }
  });
}

$("askBtn").addEventListener("click", askAI);
$("searchBtn").addEventListener("click", searchCards);
$("clearBtn").addEventListener("click", () => {
  setActionActive("clearBtn");
  $("question").value = "";
  clearLoading();
  hideResultsArea();
  document.querySelectorAll(".action-row button").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll("[data-menu-q]").forEach(btn => btn.classList.remove("active"));
});
$("closeDialog").addEventListener("click", () => $("cardDialog").close());
document.querySelectorAll("[data-q]").forEach(btn => {
  btn.addEventListener("click", () => { $("question").value = btn.dataset.q; searchCards(); });
});
document.querySelectorAll("[data-open-title]").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = findByTitle(btn.dataset.openTitle);
    if (card) openCard(card.id);
    else {
      $("question").value = btn.textContent;
      showResultsArea();
      renderCards(localSearch(btn.textContent));
    }
  });
});
document.querySelectorAll("[data-menu-q]").forEach(btn => btn.addEventListener("click", () => {
  setMenuActive(btn);
  const q = btn.dataset.menuQ;
  $("question").value = q;
  const cards = localSearch(q, 40);
  $("cardsHeading").textContent = btn.textContent.replace(/\\s+/g, " ").trim();
  renderCards(cards);
  $("answerBox").classList.add("hidden");
  $("status").textContent = `${cards.length}개 관련 카드를 찾았습니다. 카드를 누르면 상세내용이 열립니다.`;
  document.querySelector(".ask").scrollIntoView({behavior:"smooth", block:"start"});
}));

renderCategoryButtons();
hideResultsArea();


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => registrations.forEach(reg => reg.unregister()))
      .catch(() => {});
  });
}


// V32: 로그인 보호 버전 - 로그아웃 및 이전 캐시 삭제
if ("caches" in window) {
  caches.keys()
    .then(keys => Promise.all(keys.map(key => caches.delete(key))))
    .catch(() => {});
}
const logoutBtn = $("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
    } finally {
      location.href = "/login";
    }
  });
}
