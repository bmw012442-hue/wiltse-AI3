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


function resultMediaSummary(card) {
  const tableCount = (card.tables || []).length;
  const imageCount = (card.images || []).length;
  const videoCount = (card.videos || []).length;
  if (!tableCount && !imageCount && !videoCount) return "";
  return `<div class="result-media-summary">
    ${videoCount ? `<span class="media-pill video-pill">동영상 ${videoCount}개</span>` : ""}
    ${tableCount ? `<span class="media-pill table-pill">참고 표 ${tableCount}개</span>` : ""}
    ${imageCount ? `<span class="media-pill image-pill">이미지/사진 ${imageCount}개</span>` : ""}
  </div>`;
}

function renderMiniTable(card) {
  const t = (card.tables || [])[0];
  if (!t) return "";
  const headers = (t.headers || []).slice(0, 4);
  const rows = (t.rows || []).slice(0, 3).map(row => (row || []).slice(0, 4));
  if (!headers.length || !rows.length) return "";
  return `<div class="result-table-preview" aria-label="참고 표 미리보기">
    <div class="preview-title">참고 표 미리보기: ${esc(t.title || "표")}</div>
    <div class="table-wrap mini">
      <table>
        <thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
    <div class="preview-more">전체 표는 카드를 누르면 확인됩니다.</div>
  </div>`;
}


function renderMiniVideos(card) {
  const videos = (card.videos || []).slice(0, 2);
  if (!videos.length) return "";
  return `<div class="result-video-preview" aria-label="동영상 미리보기">
    ${videos.map(v => `<div class="video-preview-chip">▶ ${esc(v.title || v.caption || "동영상")}</div>`).join("")}
    ${(card.videos || []).length > 2 ? `<span class="more-images">+${(card.videos || []).length - 2}</span>` : ""}
  </div>`;
}

function renderMiniImages(card) {
  const imgs = (card.images || []).slice(0, 3);
  if (!imgs.length) return "";
  return `<div class="result-image-preview" aria-label="이미지 미리보기">
    ${imgs.map(img => `<img src="${esc(img.src)}" alt="${esc(img.alt || img.caption || "참고 이미지")}" loading="lazy" />`).join("")}
    ${(card.images || []).length > 3 ? `<span class="more-images">+${(card.images || []).length - 3}</span>` : ""}
  </div>`;
}

function renderResultStats(cards) {
  const arr = Array.isArray(cards) ? cards : [];
  const tableCards = arr.filter(c => (c.tables || []).length).length;
  const imageCards = arr.filter(c => (c.images || []).length).length;
  const videoCards = arr.filter(c => (c.videos || []).length).length;
  const tables = arr.reduce((sum, c) => sum + ((c.tables || []).length), 0);
  const images = arr.reduce((sum, c) => sum + ((c.images || []).length), 0);
  const videos = arr.reduce((sum, c) => sum + ((c.videos || []).length), 0);
  if (!arr.length) return "";
  return `<div class="result-stats">
    <span>검색 결과 ${arr.length}개</span>
    <span>동영상 포함 카드 ${videoCards}개</span>
    <span>표 포함 카드 ${tableCards}개</span>
    <span>이미지/사진 포함 카드 ${imageCards}개</span>
    <span>동영상 ${videos}개</span>
    <span>표 ${tables}개</span>
    <span>이미지/사진 ${images}개</span>
  </div>`;
}

function renderCards(cards) {
  const arr = cards || [];
  $("cards").innerHTML = renderResultStats(arr) + (arr.map(card => `
    <article class="card" data-card-id="${esc(card.id)}">
      <h3>${esc(card.title)}</h3>
      <div class="meta">${esc(card.id)} · ${esc(card.category)}</div>
      <p class="summary">${esc(card.summary)}</p>
      ${urgencyBadge(card)}
      ${resultMediaSummary(card)}
      ${renderMiniVideos(card)}
      ${renderMiniTable(card)}
      ${renderMiniImages(card)}
      <div class="meta">탭하면 상세내용에서 핵심 절차, 참고 표, 이미지/사진을 확인할 수 있습니다.</div>
    </article>
  `).join("") || `<article class="card"><h3>검색 결과 없음</h3><p class="summary">다른 키워드로 검색해보세요.</p></article>`);

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


function renderSearchChips(card) {
  const arr = [...new Set([...(card.aliases || []), ...(card.search_terms || [])].filter(Boolean))].slice(0, 32);
  return renderAliasChips(arr);
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


function renderVideos(videos) {
  if (!Array.isArray(videos) || videos.length === 0) return "";
  return `<section class="detail-section video-section">
    <h4>참고 동영상</h4>
    <div class="video-list">
      ${videos.map((v, idx) => {
        const title = v.title || v.caption || `동영상 ${idx + 1}`;
        const href = v.href || v.url || v.link || "";
        const src = v.src || "";
        const isExternal = href || /^https?:\/\//.test(src);
        if (isExternal) {
          const target = href || src;
          return `<div class="video-link-item">
            <a class="video-link-button" href="${esc(target)}" target="_blank" rel="noopener noreferrer">▶ ${esc(title)}</a>
            ${v.caption ? `<div class="video-link-caption">${esc(v.caption)}</div>` : ""}
          </div>`;
        }
        return `<figure class="video-item">
          <video controls preload="metadata" playsinline src="${esc(src)}"></video>
          <figcaption>${esc(title)}</figcaption>
        </figure>`;
      }).join("")}
    </div>
    <div class="video-note">동영상은 Google Drive 링크로 새 창에서 열립니다. 재생이 안 되면 Drive 공유 설정을 확인하세요.</div>
  </section>`;
}

function mergeRecordPoints(card) {
  const out = [];
  if (Array.isArray(card.charting)) out.push(...card.charting);
  if (Array.isArray(card.io)) out.push(...card.io.map(x => `I/O: ${x}`));
  return out.filter(Boolean);
}


function hasMeaningfulList(arr) {
  return Array.isArray(arr) && arr.filter(Boolean).length > 0;
}

function renderOptionalSection(title, htmlContent, show = true, extraClass = "") {
  if (!show) return "";
  return `<section class="detail-section ${extraClass}">
    <h4>${esc(title)}</h4>
    ${htmlContent}
  </section>`;
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

  const recordPoints = mergeRecordPoints(card);
  const hasPrep = hasMeaningfulList(card.preparation);
  const hasWarnings = hasMeaningfulList(card.warnings);
  const hasRecords = hasMeaningfulList(recordPoints);
  const hasMedia = (Array.isArray(card.tables) && card.tables.length) || (Array.isArray(card.images) && card.images.length) || (Array.isArray(card.videos) && card.videos.length);
  const preferMediaFirst = !!card.prefer_media_first || hasMedia;
  const hideRawSteps = !!card.hide_raw_steps && hasMedia;
  const stepsSection = hideRawSteps ? "" : `<section class="detail-section core-section">
        <h4>핵심 절차</h4>
        ${renderSimpleLines(coreSteps)}
      </section>`;
  const mediaBlock = `${renderVideos(card.videos)}${renderTables(card.tables)}${renderImages(card.images)}`;

  return `
    <div class="structured-card simple-core-card">
      <section class="detail-section title-section">
        <h4>카드 제목</h4>
        <div class="card-main-title">${esc(card.title || "")}</div>
      </section>

      <section class="detail-section">
        <h4>언제 보는 카드인가</h4>
        ${renderSimpleLines(whenToUse)}
      </section>

      <section class="detail-section">
        <h4>검색어 / 별칭</h4>
        ${renderSearchChips(card)}
      </section>

      ${preferMediaFirst ? mediaBlock : ""}
      ${renderOptionalSection("준비물", renderSimpleLines(card.preparation), hasPrep)}
      ${stepsSection}
      ${preferMediaFirst ? "" : mediaBlock}

      ${renderOptionalSection("주의사항", renderSimpleLines(card.warnings), hasWarnings, "warning-section")}

      ${renderOptionalSection("기록 포인트", renderSimpleLines(recordPoints), hasRecords)}

      <section class="detail-section related-section">
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





function normalizeText(v) {
  return String(v ?? "")
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
    "위관": ["ng tube", "l-tube"],
    "검체": ["specimen", "bottle", "tube"],
    "채혈": ["blood", "specimen", "tube"],
    "드레싱": ["dressing", "wound"],
    "소독": ["sterile", "disinfection"],
    "낙상": ["fall", "fall risk"],
    "욕창": ["pressure injury", "pressure ulcer", "braden", "상처", "드레싱", "체위변경", "예방"],
    "통증": ["pain", "nrs", "cpot"],
    "보조기": ["brace", "splint", "positioning", "보호대", "restraint"],
    "펌프": ["pump", "infusion pump", "syringe pump"],
    "보호대": ["restraint", "손목보호대", "장갑형", "매듭", "대체수단", "모니터링", "ROM"],
    "매듭": ["knot", "square knot", "slip knot", "clove hitch", "정방향 매듭", "고리 매듭", "클로브 히치"],
    "상처": ["wound", "pressure injury", "dressing", "소독", "드레싱"],
    "드레싱": ["dressing", "wound", "상처", "소독", "드레싱재료", "폼드레싱"],
    "소독": ["disinfection", "sterile", "wound cleansing"],
    "엑스레이": ["x-ray", "xray", "radiograph", "chest xray", "폐렴", "기흉", "폐부종", "흉수", "무기폐"],
    "xray": ["x-ray", "radiograph", "엑스레이", "pneumonia", "pneumothorax", "edema", "effusion", "atelectasis"]
  };
  const out = [...rawTerms];
  rawTerms.forEach(t => {
    Object.keys(synonymMap).forEach(k => {
      if (t.includes(k)) out.push(...synonymMap[k]);
    });
  });
  return [...new Set(out.map(normalizeText).filter(x => x.length >= 2))];
}

function mediaSearchText(card) {
  const tableText = (card.tables || []).flatMap(t => [
    t.title || "", t.caption || "", ...(t.search_terms || []), ...(t.headers || []),
    ...(t.include_rows_in_search ? ((t.rows || []).flatMap(row => row || [])) : [])
  ]);
  const imageText = (card.images || []).flatMap(img => [
    img.alt || "", img.caption || "", ...(img.search_terms || [])
  ]);
  const videoText = (card.videos || []).flatMap(v => [
    v.title || "", v.caption || "", ...(v.search_terms || []), v.src || "", v.href || "", v.url || "", v.link || ""
  ]);
  return [...tableText, ...imageText, ...videoText].join(" " );
}

function cardSearchText(card) {
  return [
    ...(card.search_terms || []), card.search_index || "",
    card.id, card.category, card.original_category, card.title, card.summary,
    ...(card.aliases || []), ...(card.indications || []), ...(card.preparation || []),
    ...(card.steps || []), ...(card.dosage_or_mix || []), ...(card.orders_or_emr || []),
    ...(card.charting || []), ...(card.warnings || []), ...(card.tags || []),
    mediaSearchText(card)
  ].join(" " );
}

function scoreCard(query, card) {
  const q = normalizeText(query);
  if (!q || card.search_hidden) return 0;
  const excluded = (card.exclude_queries || []).map(normalizeText).filter(Boolean);
  if (excluded.some(x => q.includes(x) || x.includes(q))) return 0;
  const rawTerms = q.split(/[, \n\t/&·]+/).filter(t => t.length >= 2);
  const terms = expandSearchTerms(rawTerms);
  const title = normalizeText(card.title);
  const category = normalizeText(card.category);
  const originalCategory = normalizeText(card.original_category);
  const aliases = (card.aliases || []).map(normalizeText);
  const searchTerms = (card.search_terms || []).map(normalizeText);
  const summary = normalizeText(card.summary);
  const media = normalizeText(mediaSearchText(card));
  const full = normalizeText(cardSearchText(card));
  let score = 0;

  if (title === q) score += 180;
  else if (title.includes(q)) score += 135;

  for (const a of aliases) {
    if (!a) continue;
    if (a === q) score += 150;
    else if (a.includes(q) || q.includes(a)) score += 95;
  }

  for (const st of searchTerms) {
    if (!st) continue;
    if (st === q) score += 160;
    else if (st.includes(q) || q.includes(st)) score += 85;
  }

  if (category.includes(q) || originalCategory.includes(q)) score += 45;
  if (summary.includes(q)) score += 18;

  let directHits = 0;
  const directText = [title, category, originalCategory, ...aliases, ...searchTerms].join(" ");
  for (const t of terms) {
    if (directText.includes(t)) directHits += 1;
    if (title.includes(t)) score += 42;
    if (aliases.some(a => a.includes(t))) score += 36;
    if (searchTerms.some(a => a.includes(t))) score += 38;
    if (category.includes(t) || originalCategory.includes(t)) score += 16;
    if (summary.includes(t)) score += 8;
    if (media.includes(t)) score += 16;
    if (full.includes(t)) score += 5;
  }

  if ((card.tables || []).length && media && /표|table|정리|종류|순서|번호|채혈|검체|수혈|보조기|기관절개관|체크리스트|요약표|욕창|드레싱|매듭|xray|엑스레이/i.test(query)) score += 18;
  if ((card.images || []).length && media && /그림|사진|이미지|image|photo|보조기|기관절개관|lab bottle|채혈|검체|tube|트라코|코켄|욕창|상처|드레싱|보호대|매듭|xray|x-ray|엑스레이/.test(query)) score += 26;
  if ((card.images || []).length && /욕창|상처|드레싱|보호대|매듭|xray|x-ray|엑스레이|사진|이미지|그림|폐렴|기흉|폐부종|흉수|무기폐|체위변경|예방|ROM|모니터링/.test(query)) score += 22;
  if (((card.id || '').startsWith('V87_') || (card.id || '').startsWith('V88_')) && /욕창|상처|드레싱|보호대|매듭|xray|엑스레이|체크리스트|요약표|폐렴|기흉|폐부종|흉수|무기폐|체위변경|예방|대체수단|ROM/.test(query)) score += 26;
  if ((card.tables || []).length && /체크리스트|기록|예시|순서도|예방|대체수단|모니터링|폐렴|기흉|폐부종|흉수|무기폐/.test(query)) score += 12;

  if (!directText.includes(q) && !media.includes(q) && directHits === 0) score -= 45;

  if ((card.id || "").startsWith("V95_") && /응급|cpr|code blue|제세동기|defibrillator|shock|쇼크|저혈압|경련|seizure|항경련제|응급약물|e-cart|intubation|기관삽관|삽관/.test(q)) score += 35;
  if ((card.id || "") === "V95_INTUBATION_PREP_ASSIST" && /intubation|기관삽관|삽관|ett|기도확보/.test(q)) score += 80;

  return Math.max(0, score);
}

function localSearch(query, limit = 40) {
  const q = normalizeText(query);
  if (!q) return allItems.slice(0, 12);
  const ranked = allItems
    .map(card => ({card, s: scoreCard(q, card)}))
    .filter(x => x.s > 0)
    .sort((a,b) => b.s - a.s);

  if (!ranked.length) return [];
  const top = ranked[0].s;
  const minScore = Math.max(12, top * 0.32);
  return ranked.filter(x => x.s >= minScore).slice(0, limit).map(x => x.card);
}

function makeLocalManualAnswer(query, cards) {
  const q = String(query || "").trim();
  const used = (cards && cards.length ? cards : localSearch(q, 8)).slice(0, 8);
  if (!used.length) return "관련 매뉴얼 카드를 찾지 못했습니다. 검색어를 더 짧게 입력해보세요.";

  const lines = [];
  lines.push("매뉴얼 DB 기반 AI 검색 요약");
  lines.push("질문: " + q);
  lines.push("");
  lines.push("순위 | 카드 | 먼저 볼 내용 | 표/이미지");
  lines.push("--- | --- | --- | ---");
  used.forEach((card, idx) => {
    const firstStep = (card.steps || card.indications || ["상세 카드 확인"])[0] || "상세 카드 확인";
    const media = `표 ${(card.tables || []).length}개 / 이미지 ${(card.images || []).length}개`;
    lines.push(`${idx + 1} | ${card.title} | ${firstStep} | ${media}`);
  });
  lines.push("");
  lines.push("관련 카드를 눌러 한눈에 보기 표, 검색어 연결표, 관련카드를 확인하세요.");
  lines.push("※ 담당의 지시와 병원 최신 프로토콜 우선");
  return lines.join("\n");
}



function setActionActive(buttonId) {
  document.querySelectorAll(".action-row button").forEach(btn => {
    btn.classList.remove("active");
    btn.classList.remove("is-active");
    btn.setAttribute("aria-pressed", "false");
  });
  const btn = $(buttonId);
  if (btn) {
    btn.classList.add("active");
    btn.classList.add("is-active");
    btn.setAttribute("aria-pressed", "true");
  }
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
  setActionActive("searchBtn");

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
    const tableCards = cards.filter(c => (c.tables || []).length).length;
    const imageCards = cards.filter(c => (c.images || []).length).length;
    $("status").innerHTML = `<b>카드 검색 완료</b><span>${cards.length}개 관련 카드 · 표 포함 ${tableCards}개 · 이미지/사진 포함 ${imageCards}개</span>`;
  } catch (err) {
    const cards = localSearch(query, 12);
    renderCards(cards);
    $("cardsHeading").textContent = "검색 결과 카드";
    $("status").classList.remove("hidden");
    const tableCards = cards.filter(c => (c.tables || []).length).length;
    const imageCards = cards.filter(c => (c.images || []).length).length;
    $("status").innerHTML = `<b>카드 검색 완료</b><span>기기 내 검색 결과 ${cards.length}개 · 표 포함 ${tableCards}개 · 이미지/사진 포함 ${imageCards}개</span>`;
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
  setActionActive("askBtn");
  $("status").classList.remove("hidden");
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
  const heading = btn.textContent.replace(/\s+/g, " ").trim();
  $("question").value = heading.replace(/^\d+\.\s*/, "");
  const cards = localSearch(q, 40);
  $("cardsHeading").textContent = heading;
  renderCards(cards);
  $("answerBox").classList.add("hidden");
  $("status").classList.remove("hidden");
  $("status").textContent = `${cards.length}개 관련 카드를 찾았습니다. 세부 항목은 검색 결과 카드에서 확인하세요.`;
  showResultsArea();
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


/* V55: 약물 계산기 */
const drugPresets = {
  norepinephrine: { amount: 20, volume: 500, unit: "mcg/kg/min", note: "예시 농도입니다. 실제 처방/희석 기준을 확인하세요." },
  dopamine: { amount: 400, volume: 250, unit: "mcg/kg/min", note: "예시 농도입니다. 실제 처방/희석 기준을 확인하세요." },
  dobutamine: { amount: 250, volume: 250, unit: "mcg/kg/min", note: "예시 농도입니다. 실제 처방/희석 기준을 확인하세요." },
  nicardipine: { amount: 20, volume: 200, unit: "mg/hr", note: "예시 농도입니다. 실제 처방/희석 기준을 확인하세요." },
  midazolam: { amount: 50, volume: 50, unit: "mg/hr", note: "예시 농도입니다. 실제 처방/희석 기준을 확인하세요." },
  propofol: { amount: 1000, volume: 100, unit: "mg/kg/hr", note: "예시 농도입니다. 실제 처방/희석 기준을 확인하세요." }
};

function nval(id) {
  const el = $(id);
  const value = Number(el?.value);
  return Number.isFinite(value) ? value : NaN;
}

function fmt(num, digits = 2) {
  if (!Number.isFinite(num)) return "-";
  if (Math.abs(num) >= 100) return num.toFixed(1).replace(/\.0$/, "");
  if (Math.abs(num) >= 10) return num.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  return num.toFixed(digits).replace(/0+$/, "").replace(/\.$/, "");
}

function showDrugCalcResult(html, isError = false) {
  const box = $("drugCalcResult");
  if (!box) return;
  box.classList.remove("hidden");
  box.classList.toggle("error", !!isError);
  box.innerHTML = html;
}

function updateCalcModeUI() {
  const mode = $("calcMode")?.value || "rate";
  const doseWrap = $("targetDoseWrap");
  const rateWrap = $("infusionRateWrap");
  if (doseWrap) doseWrap.classList.toggle("hidden", mode !== "rate");
  if (rateWrap) rateWrap.classList.toggle("hidden", mode !== "dose");
}

function updateDoseUnitLabel() {
  const unit = $("doseUnit")?.value || "mcg/kg/min";
  const label = $("targetDoseUnitLabel");
  if (label) label.textContent = unit;
}

function applyDrugPreset() {
  const key = $("drugPreset")?.value;
  const preset = drugPresets[key];
  if (!preset) return;
  $("drugAmount").value = preset.amount;
  $("totalVolume").value = preset.volume;
  $("doseUnit").value = preset.unit;
  updateDoseUnitLabel();
  showDrugCalcResult(`<b>예시 농도 불러옴</b><br>${preset.note}`, false);
}

function calculateDrug() {
  const mode = $("calcMode")?.value || "rate";
  const amountMg = nval("drugAmount");
  const volumeMl = nval("totalVolume");
  const weightKg = nval("patientWeight");
  const unit = $("doseUnit")?.value || "mcg/kg/min";

  if (!(amountMg > 0) || !(volumeMl > 0)) {
    showDrugCalcResult("약물 총량과 희석 후 총량을 0보다 큰 숫자로 입력하세요.", true);
    return;
  }

  const concMgMl = amountMg / volumeMl;
  const concMcgMl = concMgMl * 1000;
  const needWeight = unit.includes("/kg/");
  if (needWeight && !(weightKg > 0)) {
    showDrugCalcResult("kg 단위 용량 계산에는 체중을 0보다 큰 숫자로 입력해야 합니다.", true);
    return;
  }

  let result = NaN;
  let mainLine = "";
  let subLine = "";

  if (mode === "rate") {
    const dose = nval("targetDose");
    if (!(dose > 0)) {
      showDrugCalcResult("목표 용량을 0보다 큰 숫자로 입력하세요.", true);
      return;
    }

    if (unit === "mcg/kg/min") result = dose * weightKg * 60 / concMcgMl;
    if (unit === "mcg/min") result = dose * 60 / concMcgMl;
    if (unit === "mg/hr") result = dose / concMgMl;
    if (unit === "mg/kg/hr") result = dose * weightKg / concMgMl;

    mainLine = `<div class="calc-main-value">${fmt(result)} <span>mL/hr</span></div>`;
    subLine = `목표 용량 ${fmt(dose)} ${unit} 기준 주입속도`;
  } else {
    const rate = nval("infusionRate");
    if (!(rate > 0)) {
      showDrugCalcResult("현재 주입속도를 0보다 큰 숫자로 입력하세요.", true);
      return;
    }

    if (unit === "mcg/kg/min") result = rate * concMcgMl / (weightKg * 60);
    if (unit === "mcg/min") result = rate * concMcgMl / 60;
    if (unit === "mg/hr") result = rate * concMgMl;
    if (unit === "mg/kg/hr") result = rate * concMgMl / weightKg;

    mainLine = `<div class="calc-main-value">${fmt(result, 3)} <span>${unit}</span></div>`;
    subLine = `주입속도 ${fmt(rate)} mL/hr 기준 실제 용량`;
  }

  const html = `
    <b>계산 결과</b>
    ${mainLine}
    <div class="calc-sub">${subLine}</div>
    <div class="calc-meta">
      농도: ${fmt(concMgMl, 4)} mg/mL = ${fmt(concMcgMl, 1)} mcg/mL<br>
      입력값: 약물 ${fmt(amountMg)} mg / 총량 ${fmt(volumeMl)} mL${Number.isFinite(weightKg) && weightKg > 0 ? ` / 체중 ${fmt(weightKg)} kg` : ""}
    </div>
    <div class="calc-caution">반드시 처방, 약물 라벨, 병원 희석 기준과 대조하세요.</div>
  `;
  showDrugCalcResult(html, false);
}

function copyDrugCalcResult() {
  const box = $("drugCalcResult");
  const text = box?.innerText?.trim();
  if (!text) return;
  navigator.clipboard?.writeText(text).then(() => {
    const btn = $("drugCalcCopy");
    if (btn) {
      const old = btn.textContent;
      btn.textContent = "복사됨";
      setTimeout(() => btn.textContent = old, 1200);
    }
  }).catch(() => {});
}

function resetDrugCalc() {
  ["drugAmount", "totalVolume", "patientWeight", "targetDose", "infusionRate"].forEach(id => {
    const el = $(id);
    if (el) el.value = "";
  });
  if ($("drugPreset")) $("drugPreset").value = "";
  if ($("doseUnit")) $("doseUnit").value = "mcg/kg/min";
  if ($("calcMode")) $("calcMode").value = "rate";
  updateCalcModeUI();
  updateDoseUnitLabel();
  const box = $("drugCalcResult");
  if (box) {
    box.classList.add("hidden");
    box.innerHTML = "";
  }
}

function bindDrugCalculator() {
  const ids = ["calcMode", "doseUnit", "drugPreset", "drugAmount", "totalVolume", "patientWeight", "targetDose", "infusionRate"];
  ids.forEach(id => {
    const el = $(id);
    if (!el) return;
    el.addEventListener("input", () => {
      updateDoseUnitLabel();
      updateCalcModeUI();
    });
    el.addEventListener("change", () => {
      updateDoseUnitLabel();
      updateCalcModeUI();
    });
  });
  $("drugPreset")?.addEventListener("change", applyDrugPreset);
  $("drugCalcBtn")?.addEventListener("click", calculateDrug);
  $("drugCalcCopy")?.addEventListener("click", copyDrugCalcResult);
  $("drugCalcReset")?.addEventListener("click", resetDrugCalc);
  updateCalcModeUI();
  updateDoseUnitLabel();
}

bindDrugCalculator();
