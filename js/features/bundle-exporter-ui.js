/**
 * Bundle Exporter UI
 * Multi-select checkboxes on component cards, floating export tray,
 * preview modal, and export history.
 */

const BundleExporterUI = (function () {
  const CHECKBOX_CLASS = 'bundle-select-checkbox';
  const TRAY_ID = 'bundle-export-tray';
  const MODAL_ID = 'bundle-preview-modal';
  const SELECTED_KEY = 'uiverse_bundle_selected';

  function safeStorage() {
    try { return window.localStorage; } catch (_) { return null; }
  }

  function readJson(text, fallback) {
    try { return JSON.parse(text); } catch (_) { return fallback; }
  }

  function getSelected() {
    const storage = safeStorage();
    if (!storage) return new Set();
    try {
      const raw = storage.getItem(SELECTED_KEY);
      return new Set(raw ? readJson(raw, []) : []);
    } catch (_) { return new Set(); }
  }

  function saveSelected(selected) {
    const storage = safeStorage();
    if (!storage) return;
    try {
      storage.setItem(SELECTED_KEY, JSON.stringify(Array.from(selected)));
    } catch (_) { /* ignore */ }
  }

  function clearSelected() {
    const storage = safeStorage();
    if (storage) {
      try { storage.removeItem(SELECTED_KEY); } catch (_) { /* ignore */ }
    }
  }

  function ensureStyles() {
    if (document.getElementById('bundle-exporter-styles')) return;
    const style = document.createElement('style');
    style.id = 'bundle-exporter-styles';
    style.textContent = `
      .bundle-select-checkbox {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 22px;
        height: 22px;
        border: 2px solid rgba(123,97,255,0.3);
        border-radius: 6px;
        background: rgba(255,255,255,0.9);
        cursor: pointer;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        font-size: 12px;
        color: #7b61ff;
      }
      .bundle-select-checkbox:hover {
        border-color: #7b61ff;
        box-shadow: 0 0 0 3px rgba(123,97,255,0.1);
      }
      .bundle-select-checkbox.checked {
        background: #7b61ff;
        border-color: #7b61ff;
        color: #fff;
      }
      .bundle-select-checkbox i {
        opacity: 0;
        transition: opacity 0.2s;
      }
      .bundle-select-checkbox.checked i {
        opacity: 1;
      }
      .component-card.bundle-selected {
        box-shadow: 0 0 0 2px #7b61ff, 0 8px 24px rgba(123,97,255,0.15);
      }
      .bundle-tray {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(26,26,46,0.95);
        backdrop-filter: blur(12px);
        border-top: 1px solid rgba(123,97,255,0.2);
        padding: 16px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        z-index: 9998;
        transform: translateY(100%);
        transition: transform 0.3s ease;
      }
      .bundle-tray.visible {
        transform: translateY(0);
      }
      .bundle-tray-info {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #fff;
        font-size: 14px;
      }
      .bundle-tray-count {
        background: #7b61ff;
        color: #fff;
        padding: 2px 10px;
        border-radius: 999px;
        font-weight: 700;
        font-size: 13px;
      }
      .bundle-tray-actions {
        display: flex;
        gap: 10px;
      }
      .bundle-tray-btn {
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.2s;
      }
      .bundle-tray-btn-primary {
        background: linear-gradient(135deg, #eb6835, #7b61ff);
        color: #fff;
      }
      .bundle-tray-btn-primary:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
      .bundle-tray-btn-secondary {
        background: rgba(255,255,255,0.1);
        color: #fff;
      }
      .bundle-tray-btn-secondary:hover {
        background: rgba(255,255,255,0.2);
      }
      .bundle-modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.6);
        backdrop-filter: blur(4px);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s;
      }
      .bundle-modal-overlay.open {
        opacity: 1;
        pointer-events: auto;
      }
      .bundle-modal {
        background: var(--card-bg, #fff);
        border-radius: 16px;
        width: 90%;
        max-width: 640px;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 24px 64px rgba(0,0,0,0.3);
        transform: scale(0.95);
        transition: transform 0.3s;
      }
      .bundle-modal-overlay.open .bundle-modal {
        transform: scale(1);
      }
      .bundle-modal-header {
        padding: 20px 24px;
        border-bottom: 1px solid rgba(0,0,0,0.06);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .bundle-modal-title {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 18px;
        margin: 0;
        color: var(--text-primary, #1a1a2e);
      }
      .bundle-modal-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: var(--text-secondary, #666);
        padding: 4px;
        border-radius: 6px;
      }
      .bundle-modal-close:hover {
        background: rgba(0,0,0,0.06);
      }
      .bundle-modal-body {
        padding: 20px 24px;
        overflow-y: auto;
        flex: 1;
      }
      .bundle-preview-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 10px;
        margin-bottom: 8px;
        background: rgba(123,97,255,0.04);
        border: 1px solid rgba(123,97,255,0.08);
      }
      .bundle-preview-item i {
        color: #7b61ff;
        font-size: 16px;
      }
      .bundle-preview-item-title {
        font-weight: 600;
        font-size: 14px;
        color: var(--text-primary, #1a1a2e);
      }
      .bundle-preview-item-desc {
        font-size: 12px;
        color: var(--text-secondary, #666);
        margin-top: 2px;
      }
      .bundle-modal-footer {
        padding: 16px 24px;
        border-top: 1px solid rgba(0,0,0,0.06);
        display: flex;
        gap: 10px;
        justify-content: flex-end;
      }
      .bundle-input {
        padding: 10px 14px;
        border: 1px solid rgba(123,97,255,0.2);
        border-radius: 10px;
        font-size: 14px;
        width: 100%;
        outline: none;
      }
      .bundle-input:focus {
        border-color: #7b61ff;
        box-shadow: 0 0 0 3px rgba(123,97,255,0.1);
      }
      body.dark-mode .bundle-modal {
        background: var(--card-bg-dark, #1e1e2f);
        border-color: rgba(255,255,255,0.06);
      }
      body.dark-mode .bundle-modal-title {
        color: var(--text-primary-dark, #f0f0f5);
      }
      body.dark-mode .bundle-preview-item-title {
        color: var(--text-primary-dark, #f0f0f5);
      }
      body.dark-mode .bundle-preview-item-desc {
        color: var(--text-secondary-dark, #aaa);
      }
    `;
    document.head.appendChild(style);
  }

  function showToast(message) {
    const existing = document.querySelector('.bundle-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'bundle-toast';
    toast.textContent = message;
    toast.style.cssText = 'position:fixed;bottom:80px;right:20px;background:#111;color:#fff;padding:10px 14px;border-radius:8px;font-size:14px;z-index:10000;box-shadow:0 4px 12px rgba(0,0,0,0.2);animation:bundleFadeIn 0.3s ease;';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

  function injectCheckboxes() {
    const cards = document.querySelectorAll('.component-card');
    const selected = getSelected();

    cards.forEach((card) => {
      if (card.querySelector('.' + CHECKBOX_CLASS)) return;

      const checkbox = document.createElement('div');
      checkbox.className = CHECKBOX_CLASS;
      checkbox.innerHTML = '<i class="fa-solid fa-check"></i>';
      checkbox.title = 'Select for export';

      // Generate unique ID from card data
      const label = card.querySelector('.card-label, h3, h2, h4')?.textContent?.trim() || '';
      const cardId = card.dataset.name || label || Math.random().toString(36).slice(2);
      checkbox.dataset.cardId = cardId;

      if (selected.has(cardId)) {
        checkbox.classList.add('checked');
        card.classList.add('bundle-selected');
      }

      checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        const isChecked = checkbox.classList.toggle('checked');
        card.classList.toggle('bundle-selected', isChecked);

        const current = getSelected();
        if (isChecked) current.add(cardId);
        else current.delete(cardId);
        saveSelected(current);

        updateTray();
      });

      card.style.position = 'relative';
      card.appendChild(checkbox);
    });
  }

  function updateTray() {
    const selected = getSelected();
    let tray = document.getElementById(TRAY_ID);

    if (selected.size === 0) {
      if (tray) tray.classList.remove('visible');
      return;
    }

    if (!tray) {
      tray = document.createElement('div');
      tray.id = TRAY_ID;
      tray.className = 'bundle-tray';
      tray.innerHTML = `
        <div class="bundle-tray-info">
          <span class="bundle-tray-count">0</span>
          <span>component<span class="bundle-tray-plural">s</span> selected</span>
        </div>
        <div class="bundle-tray-actions">
          <button class="bundle-tray-btn bundle-tray-btn-secondary" id="bundlePreviewBtn">
            <i class="fa-solid fa-eye"></i> Preview
          </button>
          <button class="bundle-tray-btn bundle-tray-btn-secondary" id="bundleClearBtn">
            <i class="fa-solid fa-xmark"></i> Clear
          </button>
          <button class="bundle-tray-btn bundle-tray-btn-primary" id="bundleExportBtn">
            <i class="fa-solid fa-file-zipper"></i> Export ZIP
          </button>
        </div>
      `;
      document.body.appendChild(tray);

      document.getElementById('bundlePreviewBtn').addEventListener('click', openPreview);
      document.getElementById('bundleClearBtn').addEventListener('click', clearSelection);
      document.getElementById('bundleExportBtn').addEventListener('click', doExport);
    }

    tray.querySelector('.bundle-tray-count').textContent = selected.size;
    tray.querySelector('.bundle-tray-plural').textContent = selected.size === 1 ? '' : 's';
    tray.classList.add('visible');
  }

  function getSelectedCards() {
    const selectedIds = getSelected();
    const cards = document.querySelectorAll('.component-card');
    const result = [];

    cards.forEach((card) => {
      const checkbox = card.querySelector('.' + CHECKBOX_CLASS);
      if (!checkbox) return;
      if (selectedIds.has(checkbox.dataset.cardId)) {
        result.push(card);
      }
    });

    return result;
  }

  function extractSelectedItems() {
    const cards = getSelectedCards();
    const download = window.Download;
    if (!download || !download.extractComponentCode) {
      console.error('BundleExporterUI: Download.extractComponentCode not available');
      return [];
    }

    return cards.map((card) => download.extractComponentCode(card));
  }

  function clearSelection() {
    document.querySelectorAll('.' + CHECKBOX_CLASS).forEach((cb) => cb.classList.remove('checked'));
    document.querySelectorAll('.component-card').forEach((c) => c.classList.remove('bundle-selected'));
    clearSelected();
    updateTray();
    showToast('Selection cleared');
  }

  function openPreview() {
    const items = extractSelectedItems();
    if (!items.length) {
      showToast('No components selected');
      return;
    }

    let overlay = document.getElementById(MODAL_ID);
    if (overlay) overlay.remove();

    overlay = document.createElement('div');
    overlay.id = MODAL_ID;
    overlay.className = 'bundle-modal-overlay';

    const listHtml = items.map((item) => `
      <div class="bundle-preview-item">
        <i class="fa-solid fa-cube"></i>
        <div>
          <div class="bundle-preview-item-title">${item.label || 'Untitled'}</div>
          <div class="bundle-preview-item-desc">${item.description?.substring(0, 80) || 'No description'}</div>
        </div>
      </div>
    `).join('');

    overlay.innerHTML = `
      <div class="bundle-modal">
        <div class="bundle-modal-header">
          <h3 class="bundle-modal-title">Bundle Preview</h3>
          <button class="bundle-modal-close" id="bundleModalClose"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="bundle-modal-body">
          <p style="margin:0 0 12px;font-size:14px;color:var(--text-secondary,#666);">
            ${items.length} component${items.length !== 1 ? 's' : ''} will be included:
          </p>
          ${listHtml}
          <div style="margin-top:16px;">
            <label style="font-size:13px;font-weight:600;color:var(--text-secondary,#666);display:block;margin-bottom:6px;">
              Bundle name
            </label>
            <input type="text" class="bundle-input" id="bundleNameInput" value="my-uiverse-kit" placeholder="my-dashboard-kit">
          </div>
        </div>
        <div class="bundle-modal-footer">
          <button class="bundle-tray-btn bundle-tray-btn-secondary" id="bundleModalCancel">Cancel</button>
          <button class="bundle-tray-btn bundle-tray-btn-primary" id="bundleModalExport">
            <i class="fa-solid fa-download"></i> Download ZIP
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Trigger reflow for animation
    requestAnimationFrame(() => overlay.classList.add('open'));

    document.getElementById('bundleModalClose').addEventListener('click', closePreview);
    document.getElementById('bundleModalCancel').addEventListener('click', closePreview);
    document.getElementById('bundleModalExport').addEventListener('click', () => {
      const name = document.getElementById('bundleNameInput').value.trim() || 'uiverse-bundle';
      closePreview();
      doExport(name);
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePreview();
    });
  }

  function closePreview() {
    const overlay = document.getElementById(MODAL_ID);
    if (!overlay) return;
    overlay.classList.remove('open');
    setTimeout(() => overlay.remove(), 300);
  }

  async function doExport(customName) {
    const items = extractSelectedItems();
    if (!items.length) {
      showToast('No components selected');
      return;
    }

    const name = customName || 'uiverse-bundle';

    try {
      showToast('Generating bundle...');
      const result = await BundleExporter.generateBundle(items, { name });
      showToast(`Downloaded ${result.filename}`);
    } catch (error) {
      console.error('Bundle export failed:', error);
      showToast('Export failed ❌');
    }
  }

  function init() {
    if (!document.querySelector('.component-card')) return;
    ensureStyles();
    injectCheckboxes();
    updateTray();
  }

  return {
    init,
    clearSelection,
    getSelectedCards,
    extractSelectedItems,
    openPreview,
    closePreview
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BundleExporterUI;
}

window.BundleExporterUI = BundleExporterUI;