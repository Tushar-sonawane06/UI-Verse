// =========================================================
// COMPONENT PLAYGROUND
// Live in-browser HTML/CSS editor with real-time preview,
// responsive viewport toggle, export, and localStorage persistence.
// Reuses: splitHTMLandCSS() from script.js,
//         SandboxExporter from export-sandbox.js,
//         CodeTools.copyText() from code-tools.js
// =========================================================

const ComponentPlayground = (() => {

  // ── Constants ─────────────────────────────────────────
  const STORAGE_PREFIX = 'uiv-playground-';
  const DEBOUNCE_MS    = 280;

  const VIEWPORTS = {
    desktop: { width: '100%',  label: 'Desktop', icon: '🖥' },
    tablet:  { width: '768px', label: 'Tablet',  icon: '📱' },
    mobile:  { width: '375px', label: 'Mobile',  icon: '📲' }
  };

  // ── State ─────────────────────────────────────────────
  const _s = {
    open:        false,
    componentId: null,
    originalHtml:'',
    originalCss: '',
    viewport:    'desktop',
    debounceTimer: null
  };

  // ── Helpers ───────────────────────────────────────────

  function escHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function storageKey(id) {
    return STORAGE_PREFIX + String(id || 'default');
  }

  function saveToStorage(id, html, css) {
    try {
      localStorage.setItem(storageKey(id), JSON.stringify({ html, css, savedAt: Date.now() }));
    } catch (_) {}
  }

  function loadFromStorage(id) {
    try {
      const raw = localStorage.getItem(storageKey(id));
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  // ── Split HTML/CSS from a code block ──────────────────
  // Uses global splitHTMLandCSS() if available (from script.js),
  // otherwise falls back to a lightweight inline version.

  function extractCode(preElement) {
    const raw = preElement ? (preElement.innerText || preElement.textContent || '') : '';

    if (typeof splitHTMLandCSS === 'function') {
      return splitHTMLandCSS(raw);
    }

    // Inline fallback
    const lines      = raw.split('\n');
    const CSS_START  = /^\s*[\.\#\*\@a-zA-Z\[:].*\{/;
    let splitIndex   = -1;
    let seenContent  = false;

    for (let i = 0; i < lines.length; i++) {
      if (!seenContent && lines[i].trim()) seenContent = true;
      if (seenContent && CSS_START.test(lines[i])) { splitIndex = i; break; }
    }

    if (splitIndex === -1) {
      return { html: raw.trim(), css: '' };
    }

    return {
      html: lines.slice(0, splitIndex).join('\n').trim(),
      css:  lines.slice(splitIndex).join('\n').trim()
    };
  }

  // ── Build iframe srcdoc ───────────────────────────────

  function buildSrcdoc(html, css) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    font-family: 'DM Sans', system-ui, sans-serif;
    background: #f8fafc;
  }
  ${css}
</style>
</head>
<body>${html}</body>
</html>`;
  }

  // ── Update preview ────────────────────────────────────

  function refreshPreview() {
    const iframe  = document.getElementById('pg-preview-frame');
    const htmlVal = document.getElementById('pg-html-editor').value;
    const cssVal  = document.getElementById('pg-css-editor').value;
    if (!iframe) return;
    iframe.srcdoc = buildSrcdoc(htmlVal, cssVal);
    saveToStorage(_s.componentId, htmlVal, cssVal);
  }

  function scheduleRefresh() {
    clearTimeout(_s.debounceTimer);
    _s.debounceTimer = setTimeout(refreshPreview, DEBOUNCE_MS);
  }

  // ── Viewport ──────────────────────────────────────────

  function setViewport(key) {
    _s.viewport = key;
    const wrap   = document.getElementById('pg-preview-wrap');
    const frame  = document.getElementById('pg-preview-frame');
    if (!wrap || !frame) return;

    const vp = VIEWPORTS[key];
    frame.style.width = vp.width;

    document.querySelectorAll('.pg-vp-btn').forEach(b => {
      b.classList.toggle('pg-vp-btn--active', b.dataset.vp === key);
    });
  }

  // ── Render modal HTML ─────────────────────────────────

  function buildModal() {
    const el = document.createElement('div');
    el.id = 'pg-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Component Playground');
    el.innerHTML = `
      <div id="pg-modal">

        <!-- Header -->
        <div id="pg-header">
          <span id="pg-title">⚡ Component Playground</span>

          <div id="pg-viewport-btns">
            ${Object.entries(VIEWPORTS).map(([k, v]) => `
              <button class="pg-vp-btn ${k === 'desktop' ? 'pg-vp-btn--active' : ''}"
                data-vp="${k}" title="${v.label}" aria-label="${v.label}">
                ${v.icon}
              </button>
            `).join('')}
          </div>

          <div id="pg-actions">
            <button id="pg-btn-reset"  title="Reset to original">↺ Reset</button>
            <button id="pg-btn-copy"   title="Copy full code">📋 Copy</button>
            <button id="pg-btn-export" title="Export to CodePen">↗ CodePen</button>
            <button id="pg-btn-dl"     title="Download as HTML">⬇ Download</button>
            <button id="pg-btn-close"  title="Close playground" aria-label="Close">✕</button>
          </div>
        </div>

        <!-- Body -->
        <div id="pg-body">

          <!-- Editors -->
          <div id="pg-editors">
            <div class="pg-editor-pane">
              <div class="pg-editor-label">HTML</div>
              <textarea
                id="pg-html-editor"
                class="pg-editor"
                spellcheck="false"
                autocorrect="off"
                autocapitalize="off"
                placeholder="<!-- HTML goes here -->"
              ></textarea>
            </div>
            <div class="pg-editor-pane">
              <div class="pg-editor-label">CSS</div>
              <textarea
                id="pg-css-editor"
                class="pg-editor"
                spellcheck="false"
                autocorrect="off"
                autocapitalize="off"
                placeholder="/* CSS goes here */"
              ></textarea>
            </div>
          </div>

          <!-- Preview -->
          <div id="pg-preview-wrap">
            <iframe
              id="pg-preview-frame"
              sandbox="allow-scripts"
              title="Component preview"
            ></iframe>
          </div>

        </div>

        <!-- Restore banner (shown if stored edits differ from original) -->
        <div id="pg-restore-bar" hidden>
          <span>You have unsaved edits from a previous session.</span>
          <button id="pg-btn-restore">Restore</button>
          <button id="pg-btn-discard">Discard</button>
        </div>

      </div>
    `;
    return el;
  }

  // ── Inject styles ─────────────────────────────────────

  function injectStyles() {
    if (document.getElementById('pg-styles')) return;
    const style = document.createElement('style');
    style.id = 'pg-styles';
    style.textContent = `
      #pg-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(0,0,0,0.55);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        animation: pgFadeIn 0.18s ease;
      }

      @keyframes pgFadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }

      #pg-modal {
        width: 100%;
        max-width: 1100px;
        height: 90vh;
        max-height: 820px;
        background: #fff;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 24px 64px rgba(0,0,0,0.22);
        animation: pgSlideUp 0.2s ease;
      }

      @keyframes pgSlideUp {
        from { transform: translateY(20px); opacity: 0; }
        to   { transform: translateY(0);    opacity: 1; }
      }

      /* Dark mode */
      body.dark-mode #pg-modal {
        background: #16161a;
        color: #f0f0f5;
      }

      body.dark-mode .pg-editor {
        background: #0d0d0f;
        color: #f0f0f5;
        border-color: rgba(255,255,255,0.08);
      }

      body.dark-mode .pg-editor-label {
        background: #1e1e24;
        color: #8888a0;
        border-color: rgba(255,255,255,0.06);
      }

      body.dark-mode #pg-header {
        background: #1e1e24;
        border-color: rgba(255,255,255,0.06);
      }

      body.dark-mode #pg-preview-wrap {
        background: #0d0d0f;
      }

      /* Header */
      #pg-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 16px;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        flex-shrink: 0;
        flex-wrap: wrap;
      }

      #pg-title {
        font-family: 'Syne', sans-serif;
        font-size: 14px;
        font-weight: 700;
        flex: 1;
        white-space: nowrap;
      }

      /* Viewport buttons */
      #pg-viewport-btns {
        display: flex;
        gap: 4px;
      }

      .pg-vp-btn {
        padding: 4px 10px;
        border: 1.5px solid #e2e8f0;
        border-radius: 8px;
        background: #fff;
        cursor: pointer;
        font-size: 14px;
        transition: border-color 0.15s, background 0.15s;
      }

      .pg-vp-btn:hover         { border-color: #eb6835; }
      .pg-vp-btn--active       { border-color: #eb6835; background: rgba(235,104,53,0.08); }

      /* Action buttons */
      #pg-actions {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }

      #pg-actions button {
        padding: 5px 12px;
        border: 1.5px solid #e2e8f0;
        border-radius: 8px;
        background: #fff;
        font-size: 12px;
        font-family: 'DM Sans', sans-serif;
        cursor: pointer;
        transition: border-color 0.15s, background 0.15s;
        white-space: nowrap;
      }

      #pg-actions button:hover   { border-color: #eb6835; background: rgba(235,104,53,0.06); }
      #pg-btn-close              { border-color: transparent; font-size: 14px; }
      #pg-btn-close:hover        { background: rgba(239,68,68,0.08); border-color: #ef4444; color: #ef4444; }

      /* Body */
      #pg-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex: 1;
        overflow: hidden;
      }

      @media (max-width: 700px) {
        #pg-body { grid-template-columns: 1fr; grid-template-rows: 1fr 1fr; }
      }

      /* Editors */
      #pg-editors {
        display: flex;
        flex-direction: column;
        border-right: 1px solid #e2e8f0;
        overflow: hidden;
      }

      .pg-editor-pane {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
      }

      .pg-editor-pane + .pg-editor-pane {
        border-top: 1px solid #e2e8f0;
      }

      .pg-editor-label {
        padding: 4px 12px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: #64748b;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        flex-shrink: 0;
      }

      .pg-editor {
        flex: 1;
        width: 100%;
        border: none;
        outline: none;
        resize: none;
        padding: 12px 14px;
        font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
        font-size: 13px;
        line-height: 1.6;
        tab-size: 2;
        background: #fff;
        color: #1a2332;
        overflow: auto;
      }

      /* Preview */
      #pg-preview-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f1f5f9;
        overflow: auto;
        padding: 16px;
      }

      #pg-preview-frame {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        transition: width 0.25s ease;
      }

      /* Restore bar */
      #pg-restore-bar {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 16px;
        background: rgba(123,97,255,0.08);
        border-top: 1px solid rgba(123,97,255,0.2);
        font-size: 12px;
        color: #7b61ff;
        flex-shrink: 0;
      }

      #pg-restore-bar[hidden] { display: none; }

      #pg-btn-restore, #pg-btn-discard {
        padding: 3px 10px;
        border-radius: 6px;
        border: 1.5px solid rgba(123,97,255,0.4);
        background: transparent;
        color: #7b61ff;
        font-size: 11px;
        cursor: pointer;
        font-family: 'DM Sans', sans-serif;
      }

      #pg-btn-restore:hover { background: rgba(123,97,255,0.15); }
      #pg-btn-discard       { border-color: transparent; color: #64748b; }
      #pg-btn-discard:hover { color: #ef4444; }
    `;
    document.head.appendChild(style);
  }

  // ── Open playground ───────────────────────────────────

  function open(options) {
    if (_s.open) close();

    const componentId = options.id    || 'default';
    const rawHtml     = options.html  || '';
    const rawCss      = options.css   || '';
    const title       = options.title || 'Component Playground';

    _s.open         = true;
    _s.componentId  = componentId;
    _s.originalHtml = rawHtml;
    _s.originalCss  = rawCss;
    _s.viewport     = 'desktop';

    injectStyles();

    const overlay = buildModal();
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Set title
    document.getElementById('pg-title').textContent = '⚡ ' + title;

    // Pre-fill editors
    const htmlEditor = document.getElementById('pg-html-editor');
    const cssEditor  = document.getElementById('pg-css-editor');

    // Check for stored edits
    const stored = loadFromStorage(componentId);
    if (stored && (stored.html !== rawHtml || stored.css !== rawCss)) {
      htmlEditor.value = rawHtml;
      cssEditor.value  = rawCss;
      const bar = document.getElementById('pg-restore-bar');
      bar.removeAttribute('hidden');

      document.getElementById('pg-btn-restore').onclick = () => {
        htmlEditor.value = stored.html;
        cssEditor.value  = stored.css;
        bar.setAttribute('hidden', '');
        refreshPreview();
      };
      document.getElementById('pg-btn-discard').onclick = () => {
        bar.setAttribute('hidden', '');
        localStorage.removeItem(storageKey(componentId));
      };
    } else {
      htmlEditor.value = stored ? stored.html : rawHtml;
      cssEditor.value  = stored ? stored.css  : rawCss;
    }

    // Live preview
    refreshPreview();

    // Editor events
    htmlEditor.addEventListener('input', scheduleRefresh);
    cssEditor.addEventListener('input',  scheduleRefresh);

    // Tab key inserts 2 spaces instead of losing focus
    [htmlEditor, cssEditor].forEach(ta => {
      ta.addEventListener('keydown', e => {
        if (e.key !== 'Tab') return;
        e.preventDefault();
        const start = ta.selectionStart;
        const end   = ta.selectionEnd;
        ta.value = ta.value.substring(0, start) + '  ' + ta.value.substring(end);
        ta.selectionStart = ta.selectionEnd = start + 2;
      });
    });

    // Viewport buttons
    overlay.querySelectorAll('.pg-vp-btn').forEach(btn => {
      btn.addEventListener('click', () => setViewport(btn.dataset.vp));
    });

    // Reset
    document.getElementById('pg-btn-reset').addEventListener('click', () => {
      htmlEditor.value = _s.originalHtml;
      cssEditor.value  = _s.originalCss;
      localStorage.removeItem(storageKey(componentId));
      refreshPreview();
    });

    // Copy full code
    document.getElementById('pg-btn-copy').addEventListener('click', () => {
      const full = htmlEditor.value + (cssEditor.value ? '\n\n<style>\n' + cssEditor.value + '\n</style>' : '');
      const copyFn = (window.CodeTools && window.CodeTools.copyText)
        ? window.CodeTools.copyText(full)
        : navigator.clipboard.writeText(full);
      copyFn.then(() => {
        const btn = document.getElementById('pg-btn-copy');
        const orig = btn.textContent;
        btn.textContent = '✓ Copied!';
        setTimeout(() => { btn.textContent = orig; }, 1800);
      }).catch(() => {});
    });

    // Export to CodePen
    document.getElementById('pg-btn-export').addEventListener('click', () => {
      if (window.SandboxExporter && typeof window.SandboxExporter.exportToCodePen === 'function') {
        window.SandboxExporter.exportToCodePen(htmlEditor.value, cssEditor.value);
      } else {
        // Inline fallback
        const data  = { title: 'UI-Verse Component', html: htmlEditor.value, css: cssEditor.value };
        const form  = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://codepen.io/pen/define';
        form.target = '_blank';
        const input = document.createElement('input');
        input.type  = 'hidden';
        input.name  = 'data';
        input.value = JSON.stringify(data);
        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
      }
    });

    // Download as .html
    document.getElementById('pg-btn-dl').addEventListener('click', () => {
      const fullDoc = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escHtml(title)}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; font-family: system-ui, sans-serif; }
  ${cssEditor.value}
</style>
</head>
<body>
${htmlEditor.value}
</body>
</html>`;
      const blob = new Blob([fullDoc], { type: 'text/html' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = (componentId || 'component') + '.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    // Close
    document.getElementById('pg-btn-close').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', _onKeyDown);
  }

  function _onKeyDown(e) {
    if (e.key === 'Escape') close();
  }

  function close() {
    const overlay = document.getElementById('pg-overlay');
    if (overlay) overlay.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', _onKeyDown);
    clearTimeout(_s.debounceTimer);
    _s.open = false;
  }

  // ── openFromCard ──────────────────────────────────────
  // Convenience: given a component card element, extract its
  // code block, split HTML/CSS, and open the playground.

  function openFromCard(cardEl) {
    if (!cardEl) return;

    const pre   = cardEl.querySelector('.code-block');
    const title = cardEl.querySelector('.card-label, h2, h3')?.textContent?.trim()
                  || 'Component Playground';
    const id    = cardEl.dataset.name?.toLowerCase().replace(/\s+/g, '-')
                  || cardEl.dataset.componentId
                  || 'default';

    const { html, css } = extractCode(pre);

    open({ id, html, css, title });
  }

  // ── Auto-inject "Open in Playground" buttons ──────────

  function injectPlaygroundButtons() {
    document.querySelectorAll('.component-card').forEach(card => {
      if (card.querySelector('.pg-open-btn')) return; // already injected

      const actions = card.querySelector('.actions');
      if (!actions) return;

      const btn = document.createElement('button');
      btn.className   = 'action-btn pg-open-btn';
      btn.title       = 'Open in Playground';
      btn.setAttribute('aria-label', 'Open in Playground');
      btn.innerHTML   = '<i class="fa-solid fa-play"></i> Playground';
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        openFromCard(card);
      });

      actions.appendChild(btn);
    });

    injectButtonStyle();
  }

  function injectButtonStyle() {
    if (document.getElementById('pg-btn-style')) return;
    const style = document.createElement('style');
    style.id = 'pg-btn-style';
    style.textContent = `
      .pg-open-btn {
        background: rgba(123, 97, 255, 0.08);
        color: #7b61ff;
        border: 1.5px solid rgba(123, 97, 255, 0.25) !important;
      }
      .pg-open-btn:hover {
        background: rgba(123, 97, 255, 0.18) !important;
        border-color: #7b61ff !important;
      }
      .pg-open-btn i { margin-right: 3px; }
    `;
    document.head.appendChild(style);
  }

  // ── Init ──────────────────────────────────────────────

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', injectPlaygroundButtons);
    } else {
      injectPlaygroundButtons();
    }
  }

  // ── Expose ────────────────────────────────────────────

  return { init, open, openFromCard, close };

})();

window.ComponentPlayground = ComponentPlayground;