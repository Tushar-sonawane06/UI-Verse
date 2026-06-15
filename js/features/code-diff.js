// =========================================================
// CODE DIFF VIEWER
// Side-by-side line-level HTML/CSS diff between two
// component code blocks. Uses Myers diff algorithm.
// Reuses: splitHTMLandCSS() from script.js
// Naming: mirrors uiverse-compare-* convention
// =========================================================

const CodeDiff = (() => {

  // ── Myers diff algorithm ──────────────────────────────
  // Returns an array of ops: { type: 'equal'|'insert'|'delete', value: string }

  function myersDiff(aLines, bLines) {
    const n = aLines.length;
    const m = bLines.length;
    const max = n + m;
    const v = new Array(2 * max + 1).fill(0);
    const trace = [];

    for (let d = 0; d <= max; d++) {
      trace.push(v.slice());
      for (let k = -d; k <= d; k += 2) {
        const idx = k + max;
        let x;
        if (k === -d || (k !== d && v[idx - 1] < v[idx + 1])) {
          x = v[idx + 1];
        } else {
          x = v[idx - 1] + 1;
        }
        let y = x - k;
        while (x < n && y < m && aLines[x] === bLines[y]) { x++; y++; }
        v[idx] = x;
        if (x >= n && y >= m) {
          return _backtrack(trace, aLines, bLines, max, d);
        }
      }
    }
    return _backtrack(trace, aLines, bLines, max, max);
  }

  function _backtrack(trace, aLines, bLines, max, d) {
    const ops = [];
    let x = aLines.length;
    let y = bLines.length;

    for (let step = d; step > 0; step--) {
      const v   = trace[step];
      const k   = x - y;
      const idx = k + max;
      const prevK = (k === -step || (k !== step && v[idx - 1] < v[idx + 1]))
        ? k + 1
        : k - 1;
      const prevX = v[prevK + max];
      const prevY = prevX - prevK;

      while (x > prevX + 1 && y > prevY + 1) { x--; y--; ops.unshift({ type: 'equal',  value: aLines[x] }); }
      if (x > prevX + 1 || (x === prevX + 1 && y === prevY)) {
        x--;
        ops.unshift({ type: 'delete', value: aLines[x] });
      } else if (y > prevY + 1 || (y === prevY + 1 && x === prevX)) {
        y--;
        ops.unshift({ type: 'insert', value: bLines[y] });
      }
      while (x > prevX && y > prevY) { x--; y--; ops.unshift({ type: 'equal', value: aLines[x] }); }
    }
    while (x > 0 && y > 0) { x--; y--; ops.unshift({ type: 'equal',  value: aLines[x] }); }
    while (x > 0)           { x--;      ops.unshift({ type: 'delete', value: aLines[x] }); }
    while (y > 0)           { y--;      ops.unshift({ type: 'insert', value: bLines[y] }); }
    return ops;
  }

  // ── Helpers ───────────────────────────────────────────

  function escHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function splitCode(preEl) {
    const raw = preEl ? (preEl.innerText || preEl.textContent || '') : '';
    if (typeof splitHTMLandCSS === 'function') return splitHTMLandCSS(raw);
    // Inline fallback
    const lines     = raw.split('\n');
    const CSS_START = /^\s*[\.\#\*\@a-zA-Z\[:].*\{/;
    let split = -1, seen = false;
    for (let i = 0; i < lines.length; i++) {
      if (!seen && lines[i].trim()) seen = true;
      if (seen && CSS_START.test(lines[i])) { split = i; break; }
    }
    return split === -1
      ? { html: raw.trim(), css: '' }
      : { html: lines.slice(0, split).join('\n').trim(), css: lines.slice(split).join('\n').trim() };
  }

  // ── Render a unified split-diff table ─────────────────
  // Returns HTML string for one side (left or right).

  function renderSide(ops, side) {
    // side: 'left' shows deletes+equals, 'right' shows inserts+equals
    let lineNum = 0;
    const rows  = [];

    ops.forEach(op => {
      if (op.type === 'equal') {
        lineNum++;
        rows.push(
          `<tr class="uiverse-diff-row uiverse-diff-equal">` +
          `<td class="uiverse-diff-ln">${lineNum}</td>` +
          `<td class="uiverse-diff-gutter"></td>` +
          `<td class="uiverse-diff-code">${escHtml(op.value)}</td></tr>`
        );
      } else if (op.type === 'delete' && side === 'left') {
        lineNum++;
        rows.push(
          `<tr class="uiverse-diff-row uiverse-diff-delete">` +
          `<td class="uiverse-diff-ln">${lineNum}</td>` +
          `<td class="uiverse-diff-gutter">−</td>` +
          `<td class="uiverse-diff-code">${escHtml(op.value)}</td></tr>`
        );
      } else if (op.type === 'insert' && side === 'right') {
        lineNum++;
        rows.push(
          `<tr class="uiverse-diff-row uiverse-diff-insert">` +
          `<td class="uiverse-diff-ln">${lineNum}</td>` +
          `<td class="uiverse-diff-gutter">+</td>` +
          `<td class="uiverse-diff-code">${escHtml(op.value)}</td></tr>`
        );
      } else {
        // Placeholder row to keep line alignment
        rows.push(
          `<tr class="uiverse-diff-row uiverse-diff-placeholder">` +
          `<td class="uiverse-diff-ln"></td>` +
          `<td class="uiverse-diff-gutter"></td>` +
          `<td class="uiverse-diff-code"></td></tr>`
        );
      }
    });

    return `<table class="uiverse-diff-table"><tbody>${rows.join('')}</tbody></table>`;
  }

  function buildDiffHTML(textA, textB, label) {
    const aLines = textA.split('\n');
    const bLines = textB.split('\n');
    const ops    = myersDiff(aLines, bLines);

    const adds = ops.filter(o => o.type === 'insert').length;
    const dels = ops.filter(o => o.type === 'delete').length;

    return `
      <div class="uiverse-diff-section">
        <div class="uiverse-diff-section-header">
          <span class="uiverse-diff-section-label">${escHtml(label)}</span>
          <span class="uiverse-diff-stat uiverse-diff-stat--add">+${adds}</span>
          <span class="uiverse-diff-stat uiverse-diff-stat--del">−${dels}</span>
          ${adds === 0 && dels === 0
            ? '<span class="uiverse-diff-identical">Identical</span>'
            : ''}
        </div>
        <div class="uiverse-diff-split">
          <div class="uiverse-diff-pane uiverse-diff-pane--left">
            <div class="uiverse-diff-pane-label">Component A</div>
            ${renderSide(ops, 'left')}
          </div>
          <div class="uiverse-diff-pane uiverse-diff-pane--right">
            <div class="uiverse-diff-pane-label">Component B</div>
            ${renderSide(ops, 'right')}
          </div>
        </div>
      </div>`;
  }

  // ── Modal ─────────────────────────────────────────────

  function injectStyles() {
    if (document.getElementById('uiverse-diff-styles')) return;
    const s = document.createElement('style');
    s.id = 'uiverse-diff-styles';
    s.textContent = `
      #uiverse-diff-overlay {
        position: fixed;
        inset: 0;
        z-index: 9998;
        background: rgba(0,0,0,0.55);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        animation: udFadeIn 0.18s ease;
      }
      @keyframes udFadeIn { from { opacity:0 } to { opacity:1 } }

      #uiverse-diff-modal {
        width: 100%;
        max-width: 1140px;
        height: 90vh;
        max-height: 840px;
        background: #fff;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 24px 64px rgba(0,0,0,0.22);
        animation: udSlideUp 0.2s ease;
        font-family: 'DM Sans', system-ui, sans-serif;
      }
      @keyframes udSlideUp {
        from { transform: translateY(20px); opacity:0 }
        to   { transform: translateY(0);    opacity:1 }
      }

      body.dark-mode #uiverse-diff-modal {
        background: #16161a;
        color: #f0f0f5;
      }
      body.dark-mode .uiverse-diff-header {
        background: #1e1e24;
        border-color: rgba(255,255,255,0.06);
      }
      body.dark-mode .uiverse-diff-section-header {
        background: #1e1e24;
        border-color: rgba(255,255,255,0.06);
      }
      body.dark-mode .uiverse-diff-pane-label {
        background: #1e1e24;
        border-color: rgba(255,255,255,0.06);
        color: #8888a0;
      }
      body.dark-mode .uiverse-diff-table { background: #0d0d0f; color: #f0f0f5; }
      body.dark-mode .uiverse-diff-ln    { color: #444460; border-color: rgba(255,255,255,0.04); }
      body.dark-mode .uiverse-diff-equal td { background: #0d0d0f; }
      body.dark-mode .uiverse-diff-delete td { background: rgba(239,68,68,0.12); }
      body.dark-mode .uiverse-diff-insert td { background: rgba(34,197,94,0.10); }
      body.dark-mode .uiverse-diff-placeholder td { background: rgba(255,255,255,0.02); }

      /* Header */
      .uiverse-diff-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 18px;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        flex-shrink: 0;
        flex-wrap: wrap;
      }
      .uiverse-diff-title {
        font-family: 'Syne', sans-serif;
        font-size: 14px;
        font-weight: 700;
        flex: 1;
      }

      /* Selectors */
      .uiverse-diff-selectors {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
      }
      .uiverse-diff-selectors label {
        font-size: 12px;
        color: #64748b;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .uiverse-diff-selectors select {
        padding: 4px 8px;
        border: 1.5px solid #e2e8f0;
        border-radius: 8px;
        font-size: 12px;
        font-family: 'DM Sans', sans-serif;
        background: #fff;
        cursor: pointer;
        outline: none;
      }
      .uiverse-diff-selectors select:focus { border-color: #eb6835; }

      /* Swap + close */
      .uiverse-diff-actions { display: flex; gap: 6px; }
      .uiverse-diff-actions button {
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
      .uiverse-diff-actions button:hover { border-color: #eb6835; background: rgba(235,104,53,0.06); }
      #uiverse-diff-close { font-size: 14px; border-color: transparent; }
      #uiverse-diff-close:hover { background: rgba(239,68,68,0.08); border-color: #ef4444; color: #ef4444; }

      /* Body */
      #uiverse-diff-body {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }

      /* Section */
      .uiverse-diff-section { border-bottom: 1px solid #e2e8f0; }
      .uiverse-diff-section:last-child { border-bottom: none; }

      .uiverse-diff-section-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 16px;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        font-size: 12px;
        font-weight: 700;
        position: sticky;
        top: 0;
        z-index: 2;
      }
      .uiverse-diff-section-label { flex: 1; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; }
      .uiverse-diff-stat { font-size: 11px; font-weight: 700; padding: 1px 7px; border-radius: 999px; }
      .uiverse-diff-stat--add { background: rgba(34,197,94,0.12); color: #16a34a; }
      .uiverse-diff-stat--del { background: rgba(239,68,68,0.10); color: #dc2626; }
      .uiverse-diff-identical { font-size: 11px; color: #94a3b8; font-style: italic; }

      /* Split panes */
      .uiverse-diff-split {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .uiverse-diff-pane { overflow-x: auto; }
      .uiverse-diff-pane--left { border-right: 2px solid #e2e8f0; }

      .uiverse-diff-pane-label {
        padding: 4px 12px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        color: #64748b;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        position: sticky;
        top: 33px;
        z-index: 1;
      }

      /* Diff table */
      .uiverse-diff-table {
        width: 100%;
        border-collapse: collapse;
        font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;
        font-size: 12.5px;
        line-height: 1.6;
      }
      .uiverse-diff-ln {
        width: 36px;
        min-width: 36px;
        padding: 0 8px;
        text-align: right;
        color: #94a3b8;
        border-right: 1px solid #e2e8f0;
        user-select: none;
        font-size: 11px;
      }
      .uiverse-diff-gutter {
        width: 18px;
        min-width: 18px;
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        padding: 0 2px;
      }
      .uiverse-diff-code {
        padding: 0 12px 0 6px;
        white-space: pre;
        width: 100%;
      }
      .uiverse-diff-equal td      { background: #fff; }
      .uiverse-diff-delete td     { background: rgba(254,202,202,0.45); }
      .uiverse-diff-delete .uiverse-diff-gutter { color: #dc2626; }
      .uiverse-diff-insert td     { background: rgba(187,247,208,0.45); }
      .uiverse-diff-insert .uiverse-diff-gutter { color: #16a34a; }
      .uiverse-diff-placeholder td { background: rgba(0,0,0,0.02); min-height: 21px; height: 21px; }

      /* Empty state */
      .uiverse-diff-empty {
        text-align: center;
        padding: 60px 20px;
        color: #94a3b8;
        font-size: 14px;
      }

      /* Inject button on cards */
      .uiverse-diff-open-btn {
        background: rgba(235,104,53,0.08) !important;
        color: #eb6835 !important;
        border: 1.5px solid rgba(235,104,53,0.25) !important;
      }
      .uiverse-diff-open-btn:hover {
        background: rgba(235,104,53,0.18) !important;
        border-color: #eb6835 !important;
      }
    `;
    document.head.appendChild(s);
  }

  // ── State ─────────────────────────────────────────────

  const _s = {
    open:      false,
    components: [],   // { id, title, html, css }
    slotA:     0,
    slotB:     1
  };

  // ── Collect components from page ──────────────────────

  function collectComponents() {
    const cards = document.querySelectorAll('.component-card');
    const list  = [];
    cards.forEach((card, idx) => {
      const pre   = card.querySelector('.code-block');
      if (!pre) return;
      const title = card.querySelector('.card-label, h2, h3')?.textContent?.trim()
                    || ('Component ' + (idx + 1));
      const id    = card.dataset.name?.toLowerCase().replace(/\s+/g, '-')
                    || card.dataset.componentId
                    || ('comp-' + idx);
      const { html, css } = splitCode(pre);
      list.push({ id, title, html, css });
    });
    return list;
  }

  // ── Render diff body ──────────────────────────────────

  function renderDiff(body) {
    const a = _s.components[_s.slotA];
    const b = _s.components[_s.slotB];

    if (!a || !b) {
      body.innerHTML = '<div class="uiverse-diff-empty">Select two components to compare.</div>';
      return;
    }

    if (a.id === b.id) {
      body.innerHTML = '<div class="uiverse-diff-empty">Select two different components to compare.</div>';
      return;
    }

    let html = '';
    html += buildDiffHTML(a.html, b.html, 'HTML');
    if (a.css || b.css) {
      html += buildDiffHTML(a.css, b.css, 'CSS');
    }
    body.innerHTML = html;
  }

  // ── Build modal ───────────────────────────────────────

  function buildModal(components) {
    const opts = components.map((c, i) =>
      `<option value="${i}">${escHtml(c.title)}</option>`
    ).join('');

    const el = document.createElement('div');
    el.id = 'uiverse-diff-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Component Code Diff');
    el.innerHTML = `
      <div id="uiverse-diff-modal">
        <div class="uiverse-diff-header">
          <span class="uiverse-diff-title">⇄ Code Diff Viewer</span>

          <div class="uiverse-diff-selectors">
            <label>
              A:
              <select id="uiverse-diff-select-a">${opts}</select>
            </label>
            <label>
              B:
              <select id="uiverse-diff-select-b">${opts}</select>
            </label>
          </div>

          <div class="uiverse-diff-actions">
            <button id="uiverse-diff-swap" title="Swap A and B">⇆ Swap</button>
            <button id="uiverse-diff-close" title="Close" aria-label="Close">✕</button>
          </div>
        </div>

        <div id="uiverse-diff-body">
          <div class="uiverse-diff-empty">Loading diff…</div>
        </div>
      </div>
    `;
    return el;
  }

  // ── Open ──────────────────────────────────────────────

  function open(initialA, initialB) {
    if (_s.open) close();

    injectStyles();

    _s.components = collectComponents();

    if (_s.components.length < 2) {
      if (typeof showToast === 'function') {
        showToast('Need at least 2 components with code blocks to compare.');
      } else {
        alert('Need at least 2 components with code blocks to compare.');
      }
      return;
    }

    _s.slotA = typeof initialA === 'number' ? initialA : 0;
    _s.slotB = typeof initialB === 'number' ? initialB : Math.min(1, _s.components.length - 1);

    const overlay = buildModal(_s.components);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    _s.open = true;

    const selA  = document.getElementById('uiverse-diff-select-a');
    const selB  = document.getElementById('uiverse-diff-select-b');
    const body  = document.getElementById('uiverse-diff-body');

    selA.value = String(_s.slotA);
    selB.value = String(_s.slotB);

    renderDiff(body);

    selA.addEventListener('change', () => {
      _s.slotA = Number(selA.value);
      renderDiff(body);
    });
    selB.addEventListener('change', () => {
      _s.slotB = Number(selB.value);
      renderDiff(body);
    });

    document.getElementById('uiverse-diff-swap').addEventListener('click', () => {
      const tmp  = _s.slotA;
      _s.slotA   = _s.slotB;
      _s.slotB   = tmp;
      selA.value = String(_s.slotA);
      selB.value = String(_s.slotB);
      renderDiff(body);
    });

    document.getElementById('uiverse-diff-close').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', _onKey);
  }

  function _onKey(e) { if (e.key === 'Escape') close(); }

  function close() {
    const el = document.getElementById('uiverse-diff-overlay');
    if (el) el.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', _onKey);
    _s.open = false;
  }

  // ── Auto-inject "Diff" buttons on component cards ─────

  function injectDiffButtons() {
    const components = collectComponents();
    if (components.length < 2) return; // need at least 2 to diff

    document.querySelectorAll('.component-card').forEach((card, idx) => {
      if (card.querySelector('.uiverse-diff-open-btn')) return;
      const actions = card.querySelector('.actions');
      if (!actions) return;

      const btn = document.createElement('button');
      btn.className = 'action-btn uiverse-diff-open-btn';
      btn.title     = 'Compare with another component';
      btn.setAttribute('aria-label', 'Open Code Diff');
      btn.innerHTML = '<i class="fa-solid fa-code-compare"></i> Diff';
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        // Open with this card as slot A, next card as slot B
        const aIdx = components.findIndex(c =>
          c.id === (card.dataset.name?.toLowerCase().replace(/\s+/g, '-') || card.dataset.componentId)
        );
        const bIdx = aIdx === -1 ? 0 : (aIdx + 1) % components.length;
        open(aIdx === -1 ? idx : aIdx, bIdx);
      });

      actions.appendChild(btn);
    });
  }

  // ── Init ──────────────────────────────────────────────

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', injectDiffButtons);
    } else {
      injectDiffButtons();
    }
  }

  // ── Expose ────────────────────────────────────────────

  return { init, open, close };

})();

window.CodeDiff = CodeDiff;