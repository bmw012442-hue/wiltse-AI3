// V47_BOOT_ERROR_HANDLER
window.addEventListener("error", (event) => {
  const status = document.getElementById("status");
  if (status) {
    status.classList.remove("hidden");
    status.textContent = "앱 스크립트 오류: 새로고침 후 다시 시도하세요.";
  }
  console.error(event.error || event.message);
});

// V124_MOBILE_STABILIZER: 모바일 화면 흔들림/좌우 밀림 방지
(function injectV124MobileStabilizer() {
  try {
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement("meta");
      viewport.name = "viewport";
      document.head.appendChild(viewport);
    }
    viewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
    );

    if (document.getElementById("v124-mobile-stabilizer-style")) return;
    const style = document.createElement("style");
    style.id = "v124-mobile-stabilizer-style";
    style.textContent = `
      html, body {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        overflow-x: hidden !important;
        overscroll-behavior-x: none !important;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        position: relative;
      }
      body {
        margin-left: 0 !important;
        margin-right: 0 !important;
        touch-action: pan-y;
      }
      *, *::before, *::after {
        box-sizing: border-box !important;
      }
      body.modal-open,
      html.modal-open {
        overflow: hidden !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      #app, main, .app, .page, .shell, .container, .wrap, .content,
      #cards, .cards, .card, article.card,
      #answerBox, .answer-box, .ai-answer, .result-stats,
      .structured-card, .simple-core-card, .detail-section,
      .result-table-preview, .result-video-preview, .result-image-preview,
      .alias-chips, .related-cards, .action-row, .category-row, .menu-grid,
      .menu-card, .category-card {
        max-width: 100% !important;
        min-width: 0 !important;
        overflow-wrap: anywhere;
      }
      .card, article.card, .detail-section {
        overflow-x: hidden !important;
      }
      img, video, canvas, svg {
        max-width: 100% !important;
        height: auto !important;
      }
      .result-image-preview img {
        max-width: 100% !important;
        object-fit: cover;
      }
      .table-wrap, .v115-table-scroll, .result-table-preview,
      .mini, .table-section {
        max-width: 100% !important;
        overflow-x: auto !important;
        -webkit-overflow-scrolling: touch !important;
      }
      table {
        max-width: 100%;
      }
      #cardDialog {
        width: min(960px, calc(100vw - 12px)) !important;
        max-width: calc(100vw - 12px) !important;
        max-height: calc(100dvh - 10px) !important;
        margin: auto !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 18px !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
      }
      #cardDialog::backdrop {
        background: rgba(15, 23, 42, .58);
      }
      #detailBody {
        max-width: 100% !important;
        width: 100% !important;
        overflow-x: hidden !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        max-height: calc(100dvh - 128px) !important;
        padding-left: max(12px, env(safe-area-inset-left)) !important;
        padding-right: max(12px, env(safe-area-inset-right)) !important;
      }
      #detailTitle, #detailMeta {
        max-width: calc(100% - 70px) !important;
        overflow-wrap: anywhere;
      }
      #closeDialog {
        flex: 0 0 auto;
      }
      .image-grid {
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: hidden !important;
      }
      .image-grid figure,
      .v115-readable-images figure {
        width: 100% !important;
        max-width: 100% !important;
        overflow: hidden !important;
      }
      .image-grid img,
      .v115-readable-images img {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        display: block !important;
      }
      @media (max-width: 640px) {
        body {
          font-size: 16px;
        }
        #cardDialog {
          width: calc(100vw - 8px) !important;
          max-width: calc(100vw - 8px) !important;
          max-height: calc(100dvh - 8px) !important;
          border-radius: 16px !important;
        }
        #detailBody {
          max-height: calc(100dvh - 116px) !important;
        }
        .result-stats {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          gap: 6px !important;
        }
        .result-stats span {
          min-width: 0 !important;
          white-space: normal !important;
        }
        .action-row, .search-actions {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          gap: 8px !important;
        }
        input, textarea, select, button {
          max-width: 100% !important;
        }
      }
    `;
    document.head.appendChild(style);

    window.__v124ClampScroll = function __v124ClampScroll() {
      if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    };

    window.addEventListener("load", window.__v124ClampScroll, { passive: true });
    window.addEventListener("resize", window.__v124ClampScroll, { passive: true });
    window.addEventListener("orientationchange", () => setTimeout(window.__v124ClampScroll, 250), { passive: true });
  } catch (e) {
    console.warn("V124 mobile stabilizer failed", e);
  }
})();


// V125_LAYOUT_TUNER: PC 폭 복원 + 모바일 버튼 3개 한 줄 + 흔들림 추가 안정화
(function injectV125LayoutTuner() {
  try {
    if (document.getElementById("v125-layout-tuner-style")) return;
    const style = document.createElement("style");
    style.id = "v125-layout-tuner-style";
    style.textContent = `
      :root {
        --v125-desktop-width: 1180px;
        --v125-mobile-card-radius: 18px;
      }

      /* PC: V124에서 너무 넓어진 화면을 다시 보기 좋은 교육자료 폭으로 제한 */
      @media (min-width: 900px) {
        body {
          background: #f3f7fb !important;
        }

        body > header,
        body > main,
        body > section,
        body > footer,
        body > div:not(#status):not(#toast):not(.toast):not(.modal):not(.dialog),
        #app,
        .app,
        .page,
        .shell,
        .wrap,
        .container,
        main {
          max-width: var(--v125-desktop-width) !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        /* 상단 병원/ICU 배너가 PC에서 과하게 커지는 현상 보정 */
        .hero,
        .app-hero,
        .top-hero,
        .main-hero,
        .brand-hero,
        .header-banner,
        .top-banner,
        .hospital-banner,
        header.hero,
        header .hero,
        header img,
        .hero img,
        .app-hero img,
        .top-banner img,
        .header-banner img,
        img[src*="banner"],
        img[src*="hero"],
        img[alt*="ICU"],
        img[alt*="업무"],
        img[alt*="윌스"] {
          max-height: 170px !important;
          width: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
        }

        .search-panel,
        .search-card,
        .card,
        article.card,
        .accordion,
        .calculator,
        .menu-section,
        .category-section {
          max-width: var(--v125-desktop-width) !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
      }

      /* 모바일: 전체 화면은 고정하되 버튼 3개는 한 줄로 */
      @media (max-width: 640px) {
        html,
        body {
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: hidden !important;
        }

        body {
          background: #f3f7fb !important;
        }

        #app,
        main,
        .app,
        .page,
        .shell,
        .wrap,
        .container {
          width: 100% !important;
          max-width: 100% !important;
          padding-left: 10px !important;
          padding-right: 10px !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }

        .search-card,
        .search-panel,
        .card,
        article.card,
        .accordion,
        .calculator,
        .menu-section,
        .category-section {
          width: 100% !important;
          max-width: 100% !important;
          border-radius: var(--v125-mobile-card-radius) !important;
        }

        /* AI 답변 / 카드 검색 / 초기화: 모바일에서도 3개 한 줄 */
        .action-row,
        .search-actions,
        .search-action-row,
        .button-row,
        .actions {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          gap: 6px !important;
          width: 100% !important;
          max-width: 100% !important;
          align-items: stretch !important;
        }

        .action-row button,
        .search-actions button,
        .search-action-row button,
        .button-row button,
        .actions button,
        #aiBtn,
        #searchBtn,
        #resetBtn,
        #aiAnswerBtn,
        #cardSearchBtn {
          min-width: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          white-space: nowrap !important;
          font-size: 0.88rem !important;
          line-height: 1.15 !important;
          padding: 10px 4px !important;
          min-height: 44px !important;
          border-radius: 14px !important;
        }

        textarea,
        input[type="text"],
        input[type="search"] {
          width: 100% !important;
          max-width: 100% !important;
          font-size: 16px !important;
        }

        /* 상단 배너는 모바일에서 과도하게 길어지지 않게 */
        .hero,
        .app-hero,
        .top-hero,
        .main-hero,
        .brand-hero,
        .header-banner,
        .top-banner,
        .hospital-banner,
        header img,
        .hero img,
        .app-hero img,
        .top-banner img,
        .header-banner img,
        img[src*="banner"],
        img[src*="hero"] {
          width: 100% !important;
          max-width: 100% !important;
          max-height: 96px !important;
          object-fit: cover !important;
          object-position: center !important;
          border-radius: 12px !important;
        }

        /* 검색 결과/상세 카드가 미세하게 좌우로 밀리지 않도록 */
        #cards,
        .cards,
        .answer-box,
        #answerBox,
        .ai-answer,
        #cardDialog,
        #detailBody,
        .structured-card,
        .detail-section,
        .image-grid,
        .v115-readable-images {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          overflow-x: hidden !important;
        }

        .table-wrap,
        .v115-table-scroll,
        .result-table-preview,
        .table-section {
          overflow-x: auto !important;
          max-width: 100% !important;
          -webkit-overflow-scrolling: touch !important;
        }

        .alias-chips,
        .example-chips,
        .chips {
          max-width: 100% !important;
          overflow-x: auto !important;
          -webkit-overflow-scrolling: touch !important;
        }
      }

      /* 아주 좁은 화면에서도 3개 버튼 유지 */
      @media (max-width: 360px) {
        .action-row button,
        .search-actions button,
        .search-action-row button,
        .button-row button,
        .actions button,
        #aiBtn,
        #searchBtn,
        #resetBtn,
        #aiAnswerBtn,
        #cardSearchBtn {
          font-size: 0.8rem !important;
          padding-left: 2px !important;
          padding-right: 2px !important;
        }
      }
    `;
    document.head.appendChild(style);

    const clamp = () => {
      if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
      document.documentElement.scrollLeft = 0;
      if (document.body) document.body.scrollLeft = 0;
    };
    window.addEventListener("load", clamp, { passive: true });
    window.addEventListener("resize", clamp, { passive: true });
    window.addEventListener("orientationchange", () => setTimeout(clamp, 200), { passive: true });
  } catch (e) {
    console.warn("V125 layout tuner failed", e);
  }
})();

const $ = (id) => document.getElementById(id);
const allItems = window.ICU_MANUAL_DB?.items || [];
const isUiHiddenCard = (card) => !!(card && (card.search_hidden || card.internal_only || card.hidden_from_ui));
const visibleItems = allItems.filter(card => !isUiHiddenCard(card));
if ($("cardCount")) $("cardCount").textContent = `${visibleItems.length} cards`;

const fieldLabels = {
  indications: "적응증/상황", preparation: "준비물", steps: "절차",
  dosage_or_mix: "용량/Mix/기준", orders_or_emr: "처방/EMR",
  charting: "기록", io: "I/O", warnings: "주의사항",
  related: "관련 카드", source_refs: "출처"
};

function esc(s) { return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function findById(id) { return allItems.find(x => x.id === id); }
function findByTitle(title) { return allItems.find(x => x.title === title); }
function findVisibleById(id) { return visibleItems.find(x => x.id === id); }
function findVisibleByTitle(title) { return visibleItems.find(x => x.title === title); }

function renderCategoryButtons() {
  const box = $("categoryButtons");
  if (!box) return;
  const groups = [...new Set(visibleItems.map(x => (x.category || "기타").split("/")[0]))].sort();
  box.innerHTML = groups.map(g => `<button data-category="${esc(g)}">${esc(g)}</button>`).join("");
  document.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;
      const cards = visibleItems.filter(x => (x.category || "").startsWith(cat));
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
      const found = findVisibleByTitle(r) || findVisibleById(r);
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
    <section class="detail-section table-section v115-readable-tables">
      <h4 style="font-size:1.2rem;line-height:1.4;margin-bottom:10px;">참고 표: ${esc(t.title || "표")}</h4>
      ${t.caption ? `<p style="font-size:1rem;line-height:1.5;margin:0 0 10px 0;color:#475569;">${esc(t.caption)}</p>` : ""}
      <div class="v115-table-scroll" style="overflow-x:auto;-webkit-overflow-scrolling:touch;width:100%;border:1px solid #cfe0f5;border-radius:14px;background:#fff;">
        <table style="width:100%;min-width:680px;border-collapse:collapse;font-size:1.02rem;line-height:1.45;">
          <thead>
            <tr>
              ${(t.headers || []).map(h => `<th style="text-align:left;background:#e8f2ff;color:#0f3b73;font-weight:800;padding:12px 14px;border:1px solid #cfe0f5;white-space:nowrap;">${esc(h)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${(t.rows || []).map(row => `
              <tr>
                ${(row || []).map(cell => `<td style="padding:12px 14px;border:1px solid #dbe7f6;vertical-align:top;color:#111827;white-space:pre-line;">${esc(cell)}</td>`).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <p style="font-size:.9rem;color:#64748b;margin:8px 0 0 0;">휴대폰에서 표가 좁으면 좌우로 밀어서 보세요.</p>
    </section>
  `).join("");
}

function renderImages(images) {
  if (!Array.isArray(images) || images.length === 0) return "";
  return `<section class="detail-section image-section v115-readable-images">
    <h4 style="font-size:1.22rem;line-height:1.4;margin-bottom:10px;">참고 이미지 / 사진</h4>
    <p style="font-size:.98rem;line-height:1.5;color:#475569;margin:0 0 12px 0;">이미지를 누르면 원본 크기로 열립니다. 휴대폰에서는 원본 화면에서 확대해서 보세요.</p>
    <div class="image-grid" style="display:grid;grid-template-columns:1fr;gap:18px;width:100%;">
      ${images.map(img => `
        <figure style="margin:0;border:1px solid #cfe0f5;border-radius:18px;padding:12px;background:#fff;box-shadow:0 1px 3px rgba(15,23,42,.08);width:100%;box-sizing:border-box;">
          <a href="${esc(img.src)}" target="_blank" rel="noopener noreferrer" style="display:block;width:100%;">
            <img src="${esc(img.src)}" alt="${esc(img.alt || img.caption || "참고 이미지")}" loading="lazy" style="display:block;width:100%;max-width:100%;height:auto;max-height:none;object-fit:contain;border-radius:12px;background:#f8fafc;" />
          </a>
          ${img.caption ? `<figcaption style="font-size:1rem;line-height:1.45;margin-top:9px;color:#111827;font-weight:600;">${esc(img.caption)}</figcaption>` : ""}
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
  if (!card || isUiHiddenCard(card)) return;
  $("detailTitle").textContent = card.title;
  $("detailMeta").textContent = `${card.id} · ${card.category} · ${card.urgency || "routine"}`;
  $("detailBody").innerHTML = renderStructuredCard(card);
  $("cardDialog").showModal();
  document.documentElement.classList.add("modal-open");
  document.body.classList.add("modal-open");
  setTimeout(() => {
    window.__v124ClampScroll && window.__v124ClampScroll();
    const dlg = $("cardDialog");
    const body = $("detailBody");
    if (dlg) dlg.scrollLeft = 0;
    if (body) body.scrollLeft = 0;
  }, 0);

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
    "검사검체": ["Lab bottle", "채혈순서", "CBC", "Chemistry", "Coagulation", "ABGA", "culture", "검체"],
    "방사선검사": ["X-ray", "CT", "MRI", "SONO", "ultrasound", "Angio", "TFCA", "영상검사"],
    "라인드레인": ["Line", "Drain", "Dressing", "IV line", "C-line", "A-line", "Foley", "L-tube", "PCD", "EVD", "SDD"],
    "다제내성균": ["MDRO", "CRE", "CPE", "VRE", "MRSA", "MSSA", "MRPA", "MRAB", "접촉주의"],
    "공급실기구": ["CSR", "소독기구", "sterile tools", "forcep", "kelly", "mosquito", "needle holder"],
    "병원전산": ["EMR", "전산 이미지", "처방 화면", "검사 픽업", "응급발행", "카멜레온"],
    "엑스레이튜브": ["ET tube", "C-line", "CVC", "L-tube", "NGT", "chest tube", "PCD", "catheter", "metal"],

    "약물계산": ["drug calculator", "계산기", "mcg/kg/min", "mg/hr", "unit/hr", "mL/hr"],
    "수액속도": ["fluid rate", "mL/hr", "수액 주입속도", "총량 나누기 시간"],
    "gtt": ["gtt/min", "drop factor", "drops per minute", "몇 방울"],
    "dropfactor": ["drop factor", "gtt", "수액세트", "방울수"],
    "주입속도": ["mL/hr", "infusion rate", "수액속도", "약물속도"],

    "항생제": ["AST", "antibiotics", "배양", "TDM", "de-escalation", "감수성"],
    "수액": ["fluid", "NS", "LR", "3% NaCl", "albumin", "maintenance", "resuscitation"],
    "고위험약물": ["high alert", "승압제", "인슐린", "항응고제", "전해질", "진정제", "진통제"],
    "마약": ["향정", "narcotic", "count", "잔량", "반환", "폐기", "투약 오류"],
    "수혈": ["transfusion", "RBC", "FFP", "platelet", "blood product", "crossmatch"],
    "혈액제제": ["RBC", "PC", "A-PLT", "FFP", "Cryo"],
    "수혈부작용": ["TRALI", "TACO", "용혈", "발열성", "알레르기", "아나필락시스"],
    "응고검사": ["DIC", "coagulation", "PT", "aPTT", "INR", "fibrinogen", "D-dimer"],

    "수술명": ["수술명 약어", "NS 수술명", "OS 수술명", "operation name"],
    "수술약어": ["ORIF", "CRIF", "TKRA", "THRA", "Burr hole", "EVD", "SDD", "Coil"],
    "수술전검사": ["pre op exam", "CBC", "chemistry", "coagulation", "Chest PA", "EKG"],
    "NS수술": ["Burr hole", "Craniotomy", "EVD", "SDD", "Coil embolization", "TFCA"],
    "OS수술": ["ORIF", "CRIF", "CRPP", "IM nail", "TKRA", "THRA", "PLIF", "TLIF"],
    "CMS": ["color", "movement", "sensation", "말초순환", "감각", "운동"],

    "신경계": ["neuro", "GCS", "Mental", "Pupil", "Motor", "EVD", "SDD", "Burr hole"],
    "의식사정": ["Mental", "GCS", "LOC"],
    "동공반사": ["Pupil reflex", "pupil", "anisocoria"],
    "운동능력": ["Motor power", "motor grade", "편측약화"],
    "뇌압": ["ICP", "IICP", "EVD", "두개내압"],
    "요추천자": ["spinal tapping", "spinal tap", "lumbar puncture", "CSF study", "뇌척수액"],
    "spinal tapping": ["요추천자", "lumbar puncture", "CSF study", "뇌척수액 검사"],
    "csf": ["CSF study", "뇌척수액", "cell count", "protein", "glucose", "culture"],
    "버홀": ["Burr hole", "EVD", "SDD"],
    "코일": ["Coil embolization", "Angio", "radial", "puncture site"],
    "수술시술": ["pre-op", "post-op", "동의서", "금식", "TFCA", "EGD", "ERCP", "CFS"],

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
  if (!q || card.search_hidden || card.internal_only) return 0;

  const topicSeed = normalizeText([
    card.id || "",
    card.title || "",
    (card.aliases || []).join(" "),
    (card.search_terms || []).join(" "),
    card.summary || "",
    card.search_index || ""
  ].join(" "));

  const topicRules = [
    { q: /ventilator|인공호흡기|dräger|savina|호흡|hfnc|산소요법|흡인|tracheostomy|기관절개|spo2/, keep: /ventilator|인공호흡기|dräger|savina|호흡|hfnc|산소|흡인|tracheostomy|기관절개|spo2|abga|respiratory/ },
    { q: /항생제|ast|vancomycin|meropenem|cefepime|aminoglycoside|tdm|antibiotic/, keep: /항생제|ast|antibiotic|vancomycin|meropenem|cefepime|aminoglycoside|tdm|감염|약물/ },
    { q: /수혈|혈액제제|rbc|ffp|platelet|plt|dic|coagulation|pt|aptt|hb/, keep: /수혈|혈액제제|transfusion|rbc|ffp|platelet|plt|dic|coagulation|pt|aptt|hb|혈액/ },
    { q: /cpr|코드블루|e-cart|ecart|응급카트|응급약물|응급약물표|응급상황|응급간호|제세동|defib|shock|쇼크|저혈압|intubation|기관삽관|삽관|경련|seizure/, keep: /cpr|코드블루|e-cart|ecart|응급카트|응급약물|응급약물표|응급|제세동|defib|shock|쇼크|저혈압|intubation|기관삽관|삽관|경련|seizure|emergency/ },
    { q: /brain ct|brain mri|브레인|뇌ct|뇌 ct|뇌mri|뇌 mri/, keep: /brain|ct|mri|브레인|뇌|신경|영상/ },
    { q: /ns 수술|os 수술|ns\/os|수술명|수술 전 검사|수술전 검사|약어|관찰표|보조기/, keep: /ns|os|수술명|수술 전 검사|수술전 검사|약어|관찰표|보조기|neuro sign|cms/ },
    { q: /검사 검체|검체|lab bottle|채혈|blood culture|sputum culture|urine culture|tip culture|cre|cpe|vre|rat/, keep: /검사\/검체|검체|lab bottle|채혈|culture|cre|cpe|vre|rat|abga 검체|specimen/ },
    { q: /공급실|csr|소독기구|기구 사진|dressing\/suture/, keep: /공급실|csr|소독기구|기구 사진|dressing\/suture|sterile/ },
    { q: /crrt|fmc|신장|dka|bst|인슐린|저혈당|고혈당/, keep: /crrt|fmc|신장|renal|bst|dka|인슐린|저혈당|고혈당|dm/ }
  ];
  for (const rule of topicRules) {
    if (rule.q.test(q) && !rule.keep.test(topicSeed)) return 0;
  }

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

  if (category === q || originalCategory === q) score += 18;
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
  if (((card.id || '').startsWith('V87_') || (card.id || '').startsWith('V88_')) && /욕창|상처|드레싱|보호대|매듭|xray|엑스레이|체크리스트|요약표|폐렴|기흉|폐부종|흉수|무기폐|체위변경|예방|대체수단|ROM/.test(query)) score += 26;

  if (!directText.includes(q) && !media.includes(q) && directHits === 0) score -= 45;

  if ((card.id || "").startsWith("V95_") && /응급|cpr|code blue|제세동기|defibrillator|shock|쇼크|저혈압|경련|seizure|항경련제|응급약물|e-cart|intubation|기관삽관|삽관/.test(q)) score += 35;
  if ((card.id || "") === "V95_INTUBATION_PREP_ASSIST" && /intubation|기관삽관|삽관|ett|기도확보/.test(q)) score += 80;
  if ((card.id || "").startsWith("V98_") && /원내|프로토콜|병동간호팀|142|149|응급간호|e-cart|응급카트|제세동기|aed|ekg|역할분담|dr\.?\s*call|6114|코드블루|전원/.test(q)) score += 90;

  
  if ((card.id || "").startsWith("V99_") && /순환|모니터링|혈압|vital|에이라인|a-line|arterial line|waveform|zeroing|씨라인|c-line|cvp|ekg|ecg|tachy|brady|i\/o|섭취량|배설량|소변량|승압제|vasopressor|말초순환|perfusion/.test(q)) score += 95;


  if ((card.id || "").startsWith("V100_") && /신경|neuro|mental|gcs|pupil|motor|seizure|항경련|뇌압|icp|iicp|evd|sdd|burr|coil|수술|시술|tfca|tracheostomy|egd|ercp|cfs|spinal|요추천자|lumbar|csf|뇌척수액/.test(q)) score += 110;


  if ((card.id || "") === "V101_BRACE_ORIGINAL_IMAGES" && /보조기|brace|splint|l-sling|엘슬링|팔걸이/.test(q)) score += 120;


  if ((card.id || "").startsWith("V102_") && /ns|os|수술명|수술약어|약어|수술전검사|pre.?op|preop|orif|crif|tkra|thra|burr|evd|sdd|coil|tfca|cms|drain pressure|보조기/.test(q)) score += 130;


  if ((card.id || "").startsWith("V103_") && /crrt|fmc|renal|신장|bst|dm|dka|인슐린|혈당|sliding|hypogly|hypergly|electrolyte|k replacement|mg replacement|p replacement|ketone/.test(q)) score += 130;


  if ((card.id || "").startsWith("V104_") && /항생|ast|antibi|배양|tdm|de-escalation|수액|fluid|고위험|승압|진정|진통|항경련|lasix|heparin|마약|향정|narcotic|잔량|반환|오류|수혈|transfusion|rbc|ffp|platelet|혈액제제|dic|coag|pt|aptt|fibrinogen/.test(q)) score += 140;


  if ((card.id || "").startsWith("V105_") && /계산|계산기|수액속도|주입속도|gtt|drop factor|mcg\/kg\/min|mg\/hr|unit\/hr|ml\/hr|mL\/hr|약물계산/.test(q)) score += 150;


  if ((card.id || "").startsWith("V106_") && /검사|검체|lab|bottle|채혈|culture|cbc|chemistry|coag|abga|cre|cpe|vre|rat|tip|x-ray|xray|ct|mri|sono|tfca|angio|내시경|line|drain|dressing|foley|l-tube|pcd|evd|sdd|욕창|장루|다제내성|mdro|공급실|csr|전산|emr|카테터|catheter/.test(q)) score += 160;



  // V165: NS/Spine 보조기 1·2가 검색어와 관계없이 같이 보이도록 hub 카드 우선 노출
  if ((item.id || "") === "V165_NS_SPINE_BRACE_HUB_BOTH_IMAGES" && /ns\/?spine|ns spine|spine brace|ns 보조기|보조기|목보조기|목 보조기|경추|cervical|philadelphia|atlas|아틀라스|팔자붕대|8자붕대|tlso|콜셋|코르셋|허리보조기|허리 보조기|척추 보조기|lumbar brace|corset/i.test(q)) score += 1200;
  if ((item.id || "") === "V164_NS_SPINE_BRACE_OVERVIEW_1" && /ns\/?spine|ns spine|spine brace|ns 보조기|보조기|목보조기|목 보조기|경추|cervical|philadelphia|atlas|아틀라스|팔자붕대|8자붕대/i.test(q)) score += 900;
  if ((item.id || "") === "V164_NS_SPINE_BRACE_OVERVIEW_2" && /ns\/?spine|ns spine|spine brace|ns 보조기|보조기|tlso|콜셋|코르셋|허리보조기|허리 보조기|척추 보조기|lumbar brace|corset/i.test(q)) score += 900;

  return Math.max(0, score);
}

function localSearch(query, limit = 6) {
  const q = normalizeText(query);
  if (!q) return visibleItems.slice(0, 12);

  const medicationFocusRulesV172 = [
    {
      q: /고주의|고위험|high alert|승압제|vasopressor|인슐린|heparin|헤파린|kcl|전해질|아미오다론|아데노신|항부정맥/,
      ids: ["V115_MENU_HUB_07", "V76_ICU_MEDICATION_OVERVIEW"]
    },
    {
      q: /마약|향정|narcotic|opioid|controlled drug|fentanyl|morphine|remifentanil|midazolam|propofol|ketamine|dexmedetomidine|count|잔량|폐기/,
      ids: ["V115_MENU_HUB_07", "V76_CONTROLLED_SEDATION_ANALGESIA"]
    },
    {
      q: /항생제 체크리스트|culture|renal dose|line compatibility|c\. difficile|review/,
      ids: ["V115_MENU_HUB_07", "V171_ICU_ANTIBIOTIC_CHECKLIST"]
    },
    {
      q: /항생제 사용|고위험 항생제|de-?escalation|stop date|stewardship/,
      ids: ["V115_MENU_HUB_07", "V171_ICU_ANTIBIOTIC_USAGE_CORE"]
    },
    {
      q: /ast 1:?5000|1:?5000|희석|피부반응|skin test/,
      ids: ["V115_MENU_HUB_07", "UPD43___AST_1_5000"]
    },
    {
      q: /ast 시행|ast 미시행|ast 여부|routine ast|시행 항생제|미시행 항생제/,
      ids: ["V115_MENU_HUB_07", "DRUG030"]
    },
    {
      q: /항생제|antibiotic|vancomycin|반코마이신|meropenem|메로페넴|cefepime|세페핌|aminoglycoside|아미노글리코사이드|tdm/,
      ids: ["V115_MENU_HUB_07", "V76_ANTIBIOTICS_ICU_STEWARDSHIP", "V171_ICU_ANTIBIOTIC_CHECKLIST", "V171_ICU_ANTIBIOTIC_USAGE_CORE", "DRUG030", "UPD43___AST_1_5000"]
    },
    {
      q: /수액|iv fluid|normal saline|n\/s|d5w|hartmann|albumin|3% nacl|fluid therapy|i\/o/,
      ids: ["V115_MENU_HUB_07", "V76_ICU_FLUID_THERAPY"]
    }
  ];

  let searchPool = visibleItems;
  for (const rule of medicationFocusRulesV172) {
    if (rule.q.test(q)) {
      const focused = visibleItems.filter(card => rule.ids.includes(card.id));
      if (focused.length) searchPool = focused;
      break;
    }
  }

  const hierarchyFocusRulesV172 = [
    {
      q: /신경계|neuro|mental|gcs|pupil|동공|motor|운동능력|seizure|경련|iicp|icp|두개내압/,
      ids: ["V115_MENU_HUB_04", "V172_NEURO_ASSESSMENT_UNIFIED"]
    },
    {
      q: /evd|sdd|csf|뇌척수액|배액|leveling|oscillation|뇌실외배액|icp/,
      ids: ["V115_MENU_HUB_04", "V172_NEURO_EVD_SDD_UNIFIED", "V172_NEURO_ASSESSMENT_UNIFIED"]
    },
    {
      q: /burr hole|craniotomy|coil|tfca|craniectomy|ns postop|신경계 수술|수술 후 관찰/,
      ids: ["V115_MENU_HUB_04", "V172_NEURO_POSTOP_PROCEDURE_UNIFIED"]
    },
    {
      q: /검사 검체|검체|lab bottle|채혈|blood culture|sputum culture|urine culture|tip culture|culture|abga|cbc|chemistry|coagulation/,
      ids: ["V115_MENU_HUB_09", "V172_TEST_SPECIMEN_UNIFIED"]
    },
    {
      q: /crrt|fmc|신장|renal|kidney|aki|투석|dialysis|tmp|filter|kit change|blood return|net uf/,
      ids: ["V115_MENU_HUB_05", "V103_RENAL_CRRT_MANUAL_57_59"]
    },
    {
      q: /혈당|bst|당뇨|dm|diabetes|내분비|endocrine|인슐린|sliding|저혈당|고혈당|dka|hhs|glucose|hba1c/,
      ids: ["V115_MENU_HUB_06", "V103_BST_DM_OVERVIEW"]
    },
    {
      q: /line|라인|catheter|카테터|drain|drainage|배액|dressing|드레싱|foley|l-tube|ng tube|pcd|chest drain|a-line|c-line|cvc/,
      ids: ["V115_MENU_HUB_10", "V170_LINE_CATH_DRAIN_DRESSING_OVERVIEW", "V170_TUBE_LINE_CATHETER_POSITION_CHECK", "V170_DISINFECTION_DRESSING_OVERVIEW"]
    },
    {
      q: /영상검사|방사선|radiology|x-ray|xray|엑스레이|ct|mri|sono|초음파|angio|tfca|내시경/,
      ids: ["V115_MENU_HUB_09", "V170_RADIOLOGY_EXAM_REFERENCE", "V170_TUBE_LINE_CATHETER_POSITION_CHECK"]
    },
    {
      q: /공급실|csr|소독기구|sterile tools|forcep|scissors|kelly|mosquito|needle holder|dressing set|suture set|irrigation set/,
      ids: ["V115_MENU_HUB_10", "V170_STERILE_SUPPLY_TOOLS_OVERVIEW"]
    },
    {
      q: /부착기구|attached device|hd cath|trialysis|mahurkar|마후카|perm cath|cadex|flow sheet|bundle|lumen/,
      ids: ["V115_MENU_HUB_10", "V170_ATTACHED_DEVICE_INPUT_MANAGEMENT"]
    }
  ];

  for (const rule of hierarchyFocusRulesV172) {
    if (rule.q.test(q)) {
      const focused = visibleItems.filter(card => rule.ids.includes(card.id));
      if (focused.length) searchPool = focused;
      break;
    }
  }

  const focusQueryRules = [
    {
      q: /crrt|fmc|신장|renal|kidney|aki|투석|dialysis|tmp|access pressure|return pressure|blood leak|air alarm|filter|kit change|blood return|return|line 연결|net uf|bfr|uf|dialysis catheter/,
      ids: ["V103_RENAL_CRRT_MANUAL_57_59"]
    },
    {
      q: /혈당|bst|당뇨|dm|diabetes|내분비|endocrine|인슐린|insulin|sliding|regular insulin|ri|oha|metformin|sulfonylurea|sglt2|저혈당|고혈당|hypoglycemia|hyperglycemia|dka|hhs|glucose|hba1c/,
      ids: ["V103_BST_DM_OVERVIEW"]
    },
    {
      q: /공급실|csr|소독기구|sterile tools|forcep|scissors|kelly|mosquito|needle holder|dressing set|suture set|irrigation set|sharps count|기구 이름|기구 생김새/,
      ids: ["V170_STERILE_SUPPLY_TOOLS_OVERVIEW"]
    },
    {
      q: /부착기구|attached device|hd cath|trialysis|mahurkar|마후카|perm cath|cadex|flow sheet|bundle|lumen|2 lumen|3 lumen/,
      ids: ["V170_ATTACHED_DEVICE_INPUT_MANAGEMENT"]
    },
    {
      q: /(x-ray|xray|엑스레이|영상).*(ett|c-line|cvc|l-tube|ng tube|chest tube|pcd|튜브|라인|카테터|삽입|위치)|((ett|c-line|cvc|l-tube|ng tube|chest tube|pcd|튜브|라인|카테터).*(x-ray|xray|엑스레이|영상|삽입|위치|carina|svc|ra junction|고정 길이|삽입 깊이))/,
      ids: ["V170_TUBE_LINE_CATHETER_POSITION_CHECK"]
    },
    {
      q: /영상검사|방사선|radiology|x-ray|xray|엑스레이|ct|mri|sono|초음파|angio|tfca|내시경|egd|ercp|cfs|normal chest|정상 흉부|consolidation|폐경화|tuberculosis|결핵|pleural effusion|흉수|pneumothorax|기흉|metastasis|전이|pneumonia|폐렴|brain ct|chest ct|abdomen ct|brain mri|spine mri/,
      ids: ["V170_RADIOLOGY_EXAM_REFERENCE"]
    },
    {
      q: /(line|라인).*(drain|배액|dressing|드레싱|catheter|카테터)|(drain|배액).*(dressing|드레싱|line|라인|catheter|카테터)|line \/ drain|line drain|line catheter|catheter drainage|라인 드레싱|배액 드레싱/,
      ids: ["V170_LINE_CATH_DRAIN_DRESSING_OVERVIEW"]
    },
    {
      q: /소독|dressing|드레싱|상처|wound|욕창|압박상처|pressure injury|pressure ulcer|saline|생리식염수|chlorhexidine|클로르헥시딘|betadine|베타딘|povidone|거즈|gauze|transparent film|투명 드레싱|foam dressing|폼 드레싱|hydrocolloid|하이드로콜로이드|alginate|알지네이트|삼출물|exudate/,
      ids: ["V170_DISINFECTION_DRESSING_OVERVIEW"]
    },
    {
      q: /iv line|c-line|cvc|a-line|foley|l-tube|ng tube|pcd|chest drain|evd|sdd|drainage|drain|라인|카테터|배액|배액관|urine meter|infiltration|extravasation|occlusion|kink|air leak|patency/,
      ids: ["V170_LINE_CATH_DRAIN_DRESSING_OVERVIEW"]
    }
  ];

  for (const rule of focusQueryRules) {
    if (rule.q.test(q)) {
      const focused = visibleItems.filter(card => rule.ids.includes(card.id));
      if (focused.length) searchPool = focused;
      break;
    }
  }

  const ranked = searchPool
    .map(card => ({card, s: scoreCard(q, card)}))
    .filter(x => x.s > 0)
    .sort((a,b) => b.s - a.s);

  if (!ranked.length) return [];
  const top = ranked[0].s;
  const minScore = Math.max(35, top * 0.58);
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
    const cards = data.cards || localSearch(query, 6);
    renderCards(cards);
    $("cardsHeading").textContent = "검색 결과 카드";
    $("status").classList.remove("hidden");
    const tableCards = cards.filter(c => (c.tables || []).length).length;
    const imageCards = cards.filter(c => (c.images || []).length).length;
    $("status").innerHTML = `<b>카드 검색 완료</b><span>${cards.length}개 관련 카드 · 표 포함 ${tableCards}개 · 이미지/사진 포함 ${imageCards}개</span>`;
  } catch (err) {
    const cards = localSearch(query, 6);
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
    const cards = localSearch(query, 6);
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
bindClick("closeDialog", () => {
  $("cardDialog").close();
  document.documentElement.classList.remove("modal-open");
  document.body.classList.remove("modal-open");
  window.__v124ClampScroll && window.__v124ClampScroll();
});
const __v124Dialog = $("cardDialog");
if (__v124Dialog) {
  __v124Dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");
    window.__v124ClampScroll && window.__v124ClampScroll();
  });
}
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



document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-menu-query], [data-category], .menu-card, .category-card");
  if (!btn) return;
  const query = btn.dataset.menuQuery || btn.dataset.category || btn.textContent.trim();
  if (!query) return;
  const searchInput = document.getElementById("searchInput") || document.querySelector("input[type='search'], input[name='q'], #queryInput");
  if (searchInput) searchInput.value = query;
  if (typeof runSearch === "function") {
    runSearch(query);
  } else if (typeof doSearch === "function") {
    doSearch(query);
  } else {
    const cards = typeof localSearch === "function" ? localSearch(query, 6) : [];
    if (typeof renderCards === "function") renderCards(cards);
    const heading = document.getElementById("cardsHeading");
    if (heading) heading.textContent = "검색 결과 카드";
  }
});

