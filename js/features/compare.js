(function () {
  const MAX_COMPARE = 3;
  const STORAGE_KEY = 'uiVerseCompare.selectedComponentIds.v1';

  const CARD_SELECTOR = '.component-card';
  const CARD_ID_ATTR = 'data-compare-id';

  const OVERLAY_ID = 'uiverse-compare-overlay';
  const OVERLAY_GRID_ID = 'uiverse-compare-grid';

  let state = {
    selectedIds: [],
    overlayOpen: false,
  };

  function getCardElements() {
    return Array.from(document.querySelectorAll(CARD_SELECTOR));
  }

  function ensureCompareId(cardEl) {
    if (!cardEl || !(cardEl instanceof HTMLElement)) return null;
    if (cardEl.getAttribute(CARD_ID_ATTR)) return cardEl.getAttribute(CARD_ID_ATTR);

    // Prefer stable-ish identifier
    const name = (cardEl.getAttribute('data-name') || '').trim();
    const cat = (cardEl.getAttribute('data-cat') || '').trim();

    // Fallback: index within grid
    const all = getCardElements();
    const idx = all.indexOf(cardEl);

    const raw = name ? `${name}__${cat}` : `card__${idx}`;
    const safe = raw.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 80);
    const id = `${safe}__${idx}`;

    cardEl.setAttribute(CARD_ID_ATTR, id);
    return id;
  }

  function loadSelection() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.slice(0, MAX_COMPARE).filter((x) => typeof x === 'string' && x.length > 0);
    } catch (e) {
      return [];
    }
  }

  function persistSelection() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state.selectedIds));
    } catch (e) {
      // ignore
    }
  }

  function getSelectedCards() {
    if (!state.selectedIds.length) return [];
    const byId = new Map();
    getCardElements().forEach((el) => {
      const id = ensureCompareId(el);
      if (id) byId.set(id, el);
    });

    return state.selectedIds.map((id) => byId.get(id)).filter(Boolean);
  }

  function createCheckbox(cardEl) {
    const checkboxWrap = document.createElement('div');
    checkboxWrap.className = 'uiverse-compare-checkbox-wrap';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'uiverse-compare-checkbox';
    input.setAttribute('aria-label', 'Select component for compare');

    const id = ensureCompareId(cardEl);
    if (id) input.dataset.compareId = id;

    input.checked = state.selectedIds.includes(id);
    if (!input.checked && state.selectedIds.length >= MAX_COMPARE) {
      input.disabled = true;
    }

    input.addEventListener('change', () => {
      const compareId = input.dataset.compareId;
      if (!compareId) return;

      if (input.checked) {
        if (state.selectedIds.length >= MAX_COMPARE) {
          input.checked = false;
          return;
        }
        if (!state.selectedIds.includes(compareId)) state.selectedIds.push(compareId);
      } else {
        state.selectedIds = state.selectedIds.filter((x) => x !== compareId);
      }

      persistSelection();
      refreshCheckboxStates();

      // open overlay automatically once we have at least 2 selections
      if (state.selectedIds.length >= 2) {
        openOverlay();
      } else {
        closeOverlayKeepSelection();
      }
    });

    checkboxWrap.appendChild(input);
    cardEl.appendChild(checkboxWrap);
  }

  function refreshCheckboxStates() {
    const cards = getCardElements();
    const inputs = Array.from(document.querySelectorAll('.uiverse-compare-checkbox'));

    // sync selected -> inputs
    inputs.forEach((input) => {
      const id = input.dataset.compareId;
      input.checked = state.selectedIds.includes(id);
    });

    // enforce max=3
    inputs.forEach((input) => {
      const id = input.dataset.compareId;
      const isSelected = state.selectedIds.includes(id);
      input.disabled = !isSelected && state.selectedIds.length >= MAX_COMPARE;
    });
  }

  function buildPreviewCell(cardEl) {
    const cell = document.createElement('div');
    cell.className = 'uiverse-compare-cell';
    cell.tabIndex = 0;

    const label = document.createElement('div');
    label.className = 'uiverse-compare-cell-label';

    const name = cardEl.getAttribute('data-name') || '';
    const cat = cardEl.getAttribute('data-cat') || '';
    label.textContent = `${name}${cat ? ' · ' + cat : ''}`;

    const preview = cardEl.querySelector('.card-preview');

    const previewWrap = document.createElement('div');
    previewWrap.className = 'uiverse-compare-cell-preview';

    // Clone ONLY preview area if possible
    if (preview) {
      previewWrap.appendChild(preview.cloneNode(true));
    } else {
      // fallback: clone whole card
      previewWrap.appendChild(cardEl.cloneNode(true));
      // remove checkbox from clone if present
      const cloned = previewWrap.querySelector('.uiverse-compare-checkbox-wrap');
      if (cloned) cloned.remove();
    }

    cell.appendChild(label);
    cell.appendChild(previewWrap);

    // Sync hover/focus
    // - mouseenter: for pointer users
    // - focus/focusin: for keyboard + focus within cloned content
    cell.addEventListener('mouseenter', () => syncActive(cell));
    cell.addEventListener('focus', () => syncActive(cell));
    cell.addEventListener('focusin', () => syncActive(cell));

    return cell;
  }

  function syncActive(activeCell) {
    const grid = document.getElementById(OVERLAY_GRID_ID);
    if (!grid) return;

    const cells = Array.from(grid.querySelectorAll('.uiverse-compare-cell'));
    const isActiveCell = (cell) => !!activeCell && cell === activeCell;

    cells.forEach((c) => {
      if (isActiveCell(c)) c.classList.add('uiverse-compare-cell--active');
      else c.classList.remove('uiverse-compare-cell--active');
    });
  }

  function openOverlay() {
    const selectedCards = getSelectedCards();
    if (selectedCards.length < 2) return;

    let overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = OVERLAY_ID;
      overlay.className = 'uiverse-compare-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');

      overlay.innerHTML = `
        <div class="uiverse-compare-overlay__panel">
          <div class="uiverse-compare-overlay__header">
            <div class="uiverse-compare-overlay__title">
              Multi-Component Compare
              <span class="uiverse-compare-overlay__hint">(hover/focus sync)</span>
            </div>
            <div class="uiverse-compare-overlay__actions">
              <button type="button" class="uiverse-compare-clear" id="uiverse-compare-clear">Clear Compare</button>
              <button type="button" class="uiverse-compare-close" id="uiverse-compare-close">Close</button>
            </div>
          </div>
          <div class="uiverse-compare-overlay__body">
            <div class="uiverse-compare-grid" id="${OVERLAY_GRID_ID}"></div>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlayKeepSelection();
      });

      const clearBtn = document.getElementById('uiverse-compare-clear');
      const closeBtn = document.getElementById('uiverse-compare-close');

      clearBtn.addEventListener('click', () => {
        state.selectedIds = [];
        persistSelection();
        refreshCheckboxStates();
        closeOverlayClearSelection();
      });

      closeBtn.addEventListener('click', () => closeOverlayKeepSelection());

      document.addEventListener('keydown', onKeyDown);
    }

    const grid = document.getElementById(OVERLAY_GRID_ID);
    if (grid) {
      grid.innerHTML = '';
      selectedCards.slice(0, MAX_COMPARE).forEach((cardEl) => {
        grid.appendChild(buildPreviewCell(cardEl));
      });
    }

    overlay.classList.add('uiverse-compare-overlay--open');
    state.overlayOpen = true;

    // initial active styling based on first cell
    const first = grid && grid.querySelector('.uiverse-compare-cell');
    if (first) syncActive(first);
  }

  function closeOverlayKeepSelection() {
    const overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) return;
    overlay.classList.remove('uiverse-compare-overlay--open');
    state.overlayOpen = false;
  }

  function closeOverlayClearSelection() {
    const overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) return;
    overlay.classList.remove('uiverse-compare-overlay--open');
    state.overlayOpen = false;
  }

  function onKeyDown(e) {
    if (e.key !== 'Escape') return;

    // Requirement: Escape exits compare mode.
    // Close overlay but keep selections; also clear active synchronized state.
    syncActive(null);
    closeOverlayKeepSelection();
  }

  function maybeInit() {
    const cards = getCardElements();
    if (!cards.length) return;

    state.selectedIds = loadSelection();

    // Inject checkboxes once
    cards.forEach((card) => {
      if (card.querySelector('.uiverse-compare-checkbox-wrap')) return;
      createCheckbox(card);
    });

    refreshCheckboxStates();

    // Restore overlay open state when we have >=2 selections
    if (state.selectedIds.length >= 2) {
      openOverlay();
    }
  }

  // Styles injected only when needed (so compare doesn't affect other pages too much)
  function injectStylesOnce() {
    if (document.getElementById('uiverse-compare-styles')) return;
    const style = document.createElement('style');
    style.id = 'uiverse-compare-styles';
    style.textContent = `
      .uiverse-compare-checkbox-wrap{
        position:absolute;
        top:12px;
        left:12px;
        z-index:20;
        pointer-events:auto;
        display:flex;
        align-items:center;
        gap:8px;
        background:rgba(255,255,255,0.75);
        border:1px solid rgba(0,0,0,0.06);
        backdrop-filter: blur(10px);
        padding:6px 10px;
        border-radius:999px;
        box-shadow:0 8px 22px rgba(0,0,0,0.06);
      }
      body.dark-mode .uiverse-compare-checkbox-wrap{
        background:rgba(15,23,42,0.55);
        border:1px solid rgba(255,255,255,0.06);
        box-shadow:0 12px 30px rgba(0,0,0,0.18);
      }
      .uiverse-compare-overlay{
        position:fixed;
        inset:0;
        z-index:2000;
        display:none;
        background:rgba(15,23,42,0.55);
        backdrop-filter: blur(8px);
        padding:20px;
      }
      .uiverse-compare-overlay--open{ display:flex; align-items:center; justify-content:center; }
      .uiverse-compare-overlay__panel{
        width:min(1100px, 98vw);
        background:var(--body-bg, #fff);
        border:1px solid rgba(255,255,255,0.12);
        border-radius:22px;
        overflow:hidden;
        box-shadow:0 30px 80px rgba(0,0,0,0.35);
      }
      body.dark-mode .uiverse-compare-overlay__panel{ background:rgba(15,23,42,0.92); border-color: rgba(255,255,255,0.06); }
      .uiverse-compare-overlay__header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:16px 18px;
        border-bottom:1px solid rgba(255,255,255,0.08);
        gap:12px;
      }
      .uiverse-compare-overlay__title{
        font-weight:800;
        color:#fff;
        display:flex;
        flex-direction:column;
        gap:2px;
        line-height:1.15;
      }
      .uiverse-compare-overlay__hint{ font-size:12px; opacity:0.8; font-weight:600; }
      .uiverse-compare-overlay__actions{ display:flex; gap:10px; }
      .uiverse-compare-clear,
      .uiverse-compare-close{
        border:1px solid rgba(255,255,255,0.12);
        background:rgba(0,0,0,0.18);
        color:#fff;
        padding:10px 14px;
        border-radius:12px;
        cursor:pointer;
        font-weight:700;
        transition:transform .15s ease, background .15s ease;
      }
      .uiverse-compare-clear:hover,
      .uiverse-compare-close:hover{ transform: translateY(-1px); background:rgba(0,0,0,0.26); }
      .uiverse-compare-overlay__body{ padding:18px; }
      .uiverse-compare-grid{
        display:grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap:14px;
      }
      @media (max-width: 980px){ .uiverse-compare-grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      @media (max-width: 640px){ .uiverse-compare-grid{ grid-template-columns: 1fr; } }
      .uiverse-compare-cell{
        outline:none;
        border-radius:18px;
        border:1px solid rgba(255,255,255,0.10);
        background:rgba(255,255,255,0.06);
        padding:12px;
        min-height:260px;
        display:flex;
        flex-direction:column;
        gap:10px;
        transition:border-color .15s ease, box-shadow .15s ease;
      }
      body.dark-mode .uiverse-compare-cell{ background:rgba(2,6,23,0.35); border-color: rgba(255,255,255,0.06); }
      .uiverse-compare-cell--active{
        border-color: rgba(235,104,53,0.55) !important;
        box-shadow: 0 0 0 3px rgba(235,104,53,0.18);
      }
      .uiverse-compare-cell-label{
        font-size:12px;
        font-weight:800;
        color: rgba(255,255,255,0.9);
        word-break: break-word;
      }
      .uiverse-compare-cell-preview{
        flex:1;
        min-height:200px;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        border-radius:14px;
        background:rgba(255,255,255,0.05);
        padding:10px;
      }
      .uiverse-compare-cell-preview > *{
        max-width:100%;
      }
    `;
    document.head.appendChild(style);
  }

  // Only init on pages that contain cards
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectStylesOnce();
      maybeInit();
    });
  } else {
    injectStylesOnce();
    maybeInit();
  }
})();

