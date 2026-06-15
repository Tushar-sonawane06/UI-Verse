/**
 * Lightweight inline diff viewer for HTML/CSS
 * No external dependencies — pure JS diff algorithm
 */

const CodeDiffViewer = {
  diffText(oldText, newText) {
    const oldLines = oldText.split('\n');
    const newLines = newText.split('\n');
    const matrix = [];
    for (let i = 0; i <= oldLines.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= newLines.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= oldLines.length; i++) {
      for (let j = 1; j <= newLines.length; j++) {
        if (oldLines[i - 1] === newLines[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1);
        }
      }
    }

    const diff = [];
    let i = oldLines.length, j = newLines.length;
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
        diff.unshift({ type: 'same', line: oldLines[i - 1] });
        i--; j--;
      } else if (j > 0 && (i === 0 || matrix[i][j - 1] < matrix[i - 1][j])) {
        diff.unshift({ type: 'add', line: newLines[j - 1] });
        j--;
      } else {
        diff.unshift({ type: 'remove', line: oldLines[i - 1] });
        i--;
      }
    }
    return diff;
  },

  renderDiff(container, oldText, newText, options = {}) {
    const diff = this.diffText(oldText, newText);
    const oldLabel = options.oldLabel || 'Previous';
    const newLabel = options.newLabel || 'Current';

    const grouped = [];
    let currentGroup = [];
    diff.forEach((d, i) => {
      if (i > 0 && diff[i - 1].type !== d.type && d.type !== 'same') {
        if (currentGroup.length) grouped.push(currentGroup);
        currentGroup = [];
      }
      currentGroup.push(d);
      if (i === diff.length - 1 && currentGroup.length) grouped.push(currentGroup);
    });
    if (!grouped.length && currentGroup.length) grouped.push(currentGroup);

    const lines = diff.map((d, i) => {
      const num = i + 1;
      const prefix = d.type === 'add' ? '+' : d.type === 'remove' ? '−' : ' ';
      const escaped = d.line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const cls = d.type === 'add' ? 'diff-add' : d.type === 'remove' ? 'diff-remove' : 'diff-same';
      return `<div class="diff-line ${cls}"><span class="diff-num">${num}</span><span class="diff-prefix">${prefix}</span><span class="diff-code">${escaped}</span></div>`;
    }).join('');

    const stats = {
      added: diff.filter(d => d.type === 'add').length,
      removed: diff.filter(d => d.type === 'remove').length,
      same: diff.filter(d => d.type === 'same').length
    };

    container.innerHTML = `
      <div class="diff-viewer">
        <div class="diff-header">
          <div class="diff-labels">
            <span class="diff-label old">${oldLabel}</span>
            <span class="diff-arrow">→</span>
            <span class="diff-label new">${newLabel}</span>
          </div>
          <div class="diff-stats">
            <span class="diff-stat add">+${stats.added}</span>
            <span class="diff-stat remove">−${stats.removed}</span>
            <span class="diff-stat same">${stats.same} unchanged</span>
          </div>
        </div>
        <div class="diff-body">${lines}</div>
      </div>
    `;
  },

  injectStyles() {
    if (document.getElementById('code-diff-styles')) return;
    const style = document.createElement('style');
    style.id = 'code-diff-styles';
    style.textContent = `
      .diff-viewer { font-family: 'Courier New', monospace; font-size: 12px; background: #0f0f1a; border: 1px solid #2a2a4a; border-radius: 8px; overflow: hidden; }
      .diff-header { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #1a1a2e; border-bottom: 1px solid #2a2a4a; }
      .diff-labels { display: flex; align-items: center; gap: 8px; }
      .diff-label { padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; }
      .diff-label.old { background: #ef444422; color: #ef4444; }
      .diff-label.new { background: #22c55e22; color: #22c55e; }
      .diff-arrow { color: #888; }
      .diff-stats { display: flex; gap: 10px; }
      .diff-stat { font-size: 11px; }
      .diff-stat.add { color: #22c55e; }
      .diff-stat.remove { color: #ef4444; }
      .diff-stat.same { color: #888; }
      .diff-body { max-height: 400px; overflow-y: auto; padding: 8px 0; }
      .diff-line { display: flex; padding: 1px 14px; white-space: pre; }
      .diff-line:hover { background: #1a1a2e; }
      .diff-num { width: 36px; color: #555; text-align: right; padding-right: 12px; flex-shrink: 0; user-select: none; }
      .diff-prefix { width: 16px; text-align: center; flex-shrink: 0; user-select: none; }
      .diff-code { flex: 1; color: #e0e0e0; }
      .diff-add { background: rgba(34,197,94,0.08); }
      .diff-add .diff-prefix { color: #22c55e; }
      .diff-remove { background: rgba(239,68,68,0.08); }
      .diff-remove .diff-prefix { color: #ef4444; }
      .diff-same .diff-prefix { color: #555; }
      .diff-same .diff-code { color: #888; }
    `;
    document.head.appendChild(style);
  }
};

window.CodeDiffViewer = CodeDiffViewer;