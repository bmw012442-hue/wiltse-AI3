// V47_BOOT_ERROR_HANDLER
window.addEventListener("error", (event) => {
  const status = document.getElementById("status");
  if (status) {
    status.classList.remove("hidden");
    status.textContent = "앱 스크립트 오류: 새로고침 후 다시 시도하세요.";
  }
  console.error(event.error || event.message);
});
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


function renderSimpleLines(lines) {
  const arr = Array.isArray(lines) ? lines.filter(Boolean) : [];
  if (arr.length === 0) return `<div class="empty-line">해당 항목 없음</div>`;
  return `<ul class="detail-list">${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
}

function renderAliasChips(aliases) {
  const arr = Array.isArray(aliases) ? aliases.filter(Boolean).slice(0, 24) : [];
  if (arr.length === 0) return `<div class="empty-line">해당 항목 없음</div>`;
  return `<div class="alias-chips">${arr.map(a => `<span>${esc(a)}</span>`).join("")}</div>`;
}

function renderRelatedCards(related) {
  const arr = Array.isArray(related) ? related.filter(Boolean) : [];
  if (arr.length === 0) return `<div class="empty-line">해당 항목 없음</div>`;
  return `<div class="related-cards">
    ${arr.map(r => {
      const found = findByTitle(r) || findById(r);
      if (found) return `<button type="button" data-related-id="${esc(found.id)}">${esc(found.title)}</button>`;
      return `<span>${esc(r)}</span>`;
    }).join("")}
  </div>`;
}

function renderSourceRefs(card) {
  const refs = Array.isArray(card.source_refs) ? card.source_refs.filter(Boolean) : [];
  const review = card.review && card.review.status ? [`검토상태: ${card.review.status}`] : [];
  const arr = [...refs, ...review];
  if (arr.length === 0) return `<div class="empty-line">해당 항목 없음</div>`;
  return `<ul class="detail-list source-list">${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
}

function renderTables(tables) {
  if (!Array.isArray(tables) || tables.length === 0) return "";
  return tables.map(t => `
    <section class="detail-section table-section">
      <h4>참고 표: ${esc(t.title || "표")}</h4>
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
    <h4>참고 이미지 / 사진</h4>
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

function mergeRecordPoints(card) {
  const out = [];
  if (Array.isArray(card.charting)) out.push(...card.charting);
  if (Array.isArray(card.io)) out.push(...card.io.map(x => `I/O: ${x}`));
  return out.filter(Boolean);
}

function renderStructuredCard(card) {
  const whenToUse = [
    card.summary ? card.summary : "",
    ...((card.indications || []).filter(Boolean))
  ].filter(Boolean);

  const coreSteps = [
    ...((card.steps || []).filter(Boolean)),
    ...((card.dosage_or_mix || []).map(x => `Mix/용량: ${x}`)),
    ...((card.orders_or_emr || []).map(x => `처방/EMR: ${x}`))
  ];

  return `
    <div class="structured-card">
      <section class="detail-section title-section">
        <h4>카드 제목</h4>
        <div class="card-main-title">${esc(card.title || "")}</div>
      </section>

      <section class="detail-section">
        <h4>검색어 / 별칭</h4>
        ${renderAliasChips(card.aliases)}
      </section>

      <section class="detail-section">
        <h4>언제 보는 카드인가</h4>
        ${renderSimpleLines(whenToUse)}
      </section>

      <section class="detail-section">
        <h4>준비물</h4>
        ${renderSimpleLines(card.preparation)}
      </section>

      <section class="detail-section">
        <h4>핵심 절차</h4>
        ${renderSimpleLines(coreSteps)}
      </section>

      ${renderTables(card.tables)}
      ${renderImages(card.images)}

      <section class="detail-section warning-section">
        <h4>주의사항</h4>
        ${renderSimpleLines(card.warnings)}
      </section>

      <section class="detail-section">
        <h4>기록 포인트</h4>
        ${renderSimpleLines(mergeRecordPoints(card))}
      </section>

      <section class="detail-section">
        <h4>관련 카드</h4>
        ${renderRelatedCards(card.related)}
      </section>

      <section class="detail-section source-section">
        <h4>출처 / 기준</h4>
        ${renderSourceRefs(card)}
      </section>
    </div>
  `;
}

function openCard(id) {
  const card = findById(id);
  if (!card) return;
  $("detailTitle").textContent = card.title;
  $("detailMeta").textContent = `${card.id} · ${card.category} · ${card.urgency || "routine"}`;
  $("detailBody").innerHTML = renderStructuredCard(card);
  $("cardDialog").showModal();

  document.querySelectorAll("[data-related-id]").forEach(el => {
    el.addEventListener("click", () => openCard(el.dataset.relatedId));
  });
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

function bindClick(id, handler) {
  const el = $(id);
  if (!el) return;
  el.addEventListener("click", (event) => {
    event.preventDefault();
    handler(event);
  });
}

bindClick("askBtn", askAI);
bindClick("searchBtn", searchCards);
bindClick("clearBtn", () => {
  setActionActive("clearBtn");
  $("question").value = "";
  clearLoading();
  hideResultsArea();
  document.querySelectorAll(".action-row button").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll("[data-menu-q]").forEach(btn => btn.classList.remove("active"));
});
bindClick("closeDialog", () => $("cardDialog").close());
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
