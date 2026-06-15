/**
 * State DevTools - Visual DevTools Panel for StateManager
 * Features: Time-travel debugging, action log, state diff, import/export
 */

(function() {
  'use strict';

  class StateDevTools {
    constructor() {
      this.container = document.getElementById('state-devtools');
      this.isDocked = true;
      this.isVisible = true;
      this.lastSelectedIndex = -1;
      
      this.init();
    }

    init() {
      if (!this.container) {
        console.error('[StateDevTools] Container not found');
        return;
      }

      this.bindElements();
      this.bindEvents();
      this.bindStateManagerEvents();
      this.updateUI();
      
      console.log('[StateDevTools] Initialized');
    }

    bindElements() {
      // Buttons
      this.btnClose = document.getElementById('btn-close');
      this.btnDock = document.getElementById('btn-dock');
      this.btnUndo = document.getElementById('btn-undo');
      this.btnRedo = document.getElementById('btn-redo');
      this.btnCopyState = document.getElementById('btn-copy-state');
      this.btnExport = document.getElementById('btn-export');
      this.btnCopyExport = document.getElementById('btn-copy-export');
      this.btnImport = document.getElementById('btn-import');
      this.btnImportFile = document.getElementById('btn-import-file');
      this.btnComputeDiff = document.getElementById('btn-compute-diff');
      this.btnClearHistory = document.getElementById('btn-clear-history');
      this.btnResetState = document.getElementById('btn-reset-state');
      this.btnOpenDevtools = document.getElementById('btn-open-devtools');
      this.toggleBadge = document.getElementById('toggle-badge');

      // Sliders and inputs
      this.historySlider = document.getElementById('history-slider');
      this.sliderInfo = document.getElementById('slider-info');
      this.importTextarea = document.getElementById('import-textarea');
      this.importFileInput = document.getElementById('import-file-input');

      // Display elements
      this.actionLogBody = document.getElementById('action-log-body');
      this.stateViewer = document.getElementById('state-viewer');
      this.diffViewer = document.getElementById('diff-viewer');
      this.diffFrom = document.getElementById('diff-from');
      this.diffTo = document.getElementById('diff-to');
      this.statusHistory = document.getElementById('status-history');
      this.statusPaused = document.getElementById('status-paused');

      // Tabs
      this.tabBtns = document.querySelectorAll('.tab-btn');
      this.tabPanels = document.querySelectorAll('.tab-panel');
    }

    bindEvents() {
      // Close/Dock buttons
      this.btnClose?.addEventListener('click', () => this.hide());
      this.btnDock?.addEventListener('click', () => this.toggleDock());
      this.btnOpenDevtools?.addEventListener('click', () => this.show());

      // Control buttons
      this.btnUndo?.addEventListener('click', () => this.undo());
      this.btnRedo?.addEventListener('click', () => this.redo());
      this.btnCopyState?.addEventListener('click', () => this.copyState());

      // Export/Import buttons
      this.btnExport?.addEventListener('click', () => this.exportState());
      this.btnCopyExport?.addEventListener('click', () => this.copyExport());
      this.btnImport?.addEventListener('click', () => this.importState());
      this.btnImportFile?.addEventListener('click', () => this.importFileInput?.click());
      this.btnComputeDiff?.addEventListener('click', () => this.computeDiff());
      this.btnClearHistory?.addEventListener('click', () => this.clearHistory());
      this.btnResetState?.addEventListener('click', () => this.resetState());

      // File input
      this.importFileInput?.addEventListener('change', (e) => this.handleFileImport(e));

      // History slider
      this.historySlider?.addEventListener('input', (e) => this.handleSliderChange(e));

      // Tab navigation
      this.tabBtns.forEach(btn => {
        btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
      });

      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => this.handleKeyboard(e));

      // Listen for stateHistory events
      window.addEventListener('stateHistory:stateChanged', () => this.updateUI());
      window.addEventListener('stateHistory:jumped', () => this.updateUI());
      window.addEventListener('stateHistory:cleared', () => this.updateUI());
      window.addEventListener('stateHistory:paused', () => this.updateStatus());
      window.addEventListener('stateHistory:resumed', () => this.updateStatus());
    }

    bindStateManagerEvents() {
      // Subscribe to all state changes for live updates
      if (window.StateManager) {
        window.StateManager.subscribe(null, () => this.updateUI());
      }
    }

    switchTab(tabId) {
      this.tabBtns.forEach(btn => {
        const isActive = btn.dataset.tab === tabId;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive);
      });

      this.tabPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === `panel-${tabId}`);
      });

      if (tabId === 'diff') {
        this.populateDiffSelects();
      }
    }

    updateUI() {
      if (!window.StateManager) return;

      const historyInfo = window.StateManager.getHistory();
      
      // Update slider
      this.updateSlider(historyInfo);
      
      // Update action log
      this.updateActionLog(historyInfo);
      
      // Update state viewer
      this.updateStateViewer();
      
      // Update status
      this.updateStatus();
    }

    updateSlider(historyInfo) {
      const total = historyInfo.stack.length;
      const current = historyInfo.currentIndex;

      if (this.historySlider) {
        this.historySlider.max = Math.max(0, total - 1);
        this.historySlider.value = current;
        this.historySlider.disabled = total <= 1;
      }

      if (this.sliderInfo) {
        this.sliderInfo.textContent = `${current} / ${total - 1}`;
      }

      // Update undo/redo buttons
      if (this.btnUndo) {
        this.btnUndo.disabled = !historyInfo.canUndo;
      }
      if (this.btnRedo) {
        this.btnRedo.disabled = !historyInfo.canRedo;
      }
    }

    updateActionLog(historyInfo) {
      if (!this.actionLogBody) return;

      this.actionLogBody.innerHTML = '';

      historyInfo.actions.forEach((action, index) => {
        const row = document.createElement('tr');
        const isCurrent = index === historyInfo.currentIndex;
        row.className = isCurrent ? 'current' : '';
        row.dataset.index = index;

        row.innerHTML = `
          <td>${action.id}</td>
          <td><span class="action-type ${action.type}">${action.type}</span></td>
          <td class="action-path" title="${action.path || ''}">${action.path || '-'}</td>
          <td class="action-value" title="${this.formatValue(action.value)}">${this.formatValue(action.value)}</td>
          <td class="action-time">${this.formatTime(historyInfo.stack[index]?.timestamp)}</td>
        `;

        row.addEventListener('click', () => this.jumpTo(index));
        this.actionLogBody.appendChild(row);
      });

      // Scroll to current
      const currentRow = this.actionLogBody.querySelector('.current');
      if (currentRow) {
        currentRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    updateStateViewer() {
      if (!this.stateViewer || !window.StateManager) return;

      const state = window.StateManager.get();
      this.stateViewer.textContent = JSON.stringify(state, null, 2) || '{ }';
    }

    updateStatus() {
      if (!window.StateManager) return;

      const historyInfo = window.StateManager.getHistory();

      if (this.statusHistory) {
        const count = historyInfo.stack.length;
        this.statusHistory.querySelector('.status-text').textContent = `History: ${count}`;
      }

      if (this.statusPaused) {
        const dot = this.statusPaused.querySelector('.status-dot');
        const text = this.statusPaused.querySelector('.status-text');
        if (historyInfo.isPaused) {
          dot.classList.add('paused');
          text.textContent = 'Paused';
        } else {
          dot.classList.remove('paused', 'inactive');
          text.textContent = 'Recording';
        }
      }

      // Update badge
      if (this.toggleBadge) {
        const count = historyInfo.stack.length;
        if (count > 0) {
          this.toggleBadge.textContent = count > 99 ? '99+' : count;
          this.toggleBadge.style.display = 'flex';
        } else {
          this.toggleBadge.style.display = 'none';
        }
      }
    }

    undo() {
      if (window.StateManager) {
        window.StateManager.undo();
      }
    }

    redo() {
      if (window.StateManager) {
        window.StateManager.redo();
      }
    }

    jumpTo(index) {
      if (window.StateManager) {
        window.StateManager.jumpTo(index);
      }
    }

    handleSliderChange(e) {
      const index = parseInt(e.target.value, 10);
      if (index !== this.lastSelectedIndex) {
        this.lastSelectedIndex = index;
        this.jumpTo(index);
      }
    }

    copyState() {
      if (!window.StateManager) return;

      const state = window.StateManager.get();
      navigator.clipboard.writeText(JSON.stringify(state, null, 2)).then(() => {
        this.showToast('State copied to clipboard');
      });
    }

    exportState() {
      if (!window.StateManager) return;

      const data = window.StateManager.exportState();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `state-export-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      
      URL.revokeObjectURL(url);
      this.showToast('State exported successfully');
    }

    copyExport() {
      if (!window.StateManager) return;

      const data = window.StateManager.exportState();
      navigator.clipboard.writeText(data).then(() => {
        this.showToast('Exported data copied to clipboard');
      });
    }

    importState() {
      if (!window.StateManager) return;

      const text = this.importTextarea?.value?.trim();
      if (!text) {
        this.showToast('Please enter state data to import', 'error');
        return;
      }

      const result = window.StateManager.importState(text);
      if (result.success) {
        this.showToast('State imported successfully');
        this.importTextarea.value = '';
      } else {
        this.showToast(`Import failed: ${result.error}`, 'error');
      }
    }

    handleFileImport(e) {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        if (this.importTextarea) {
          this.importTextarea.value = event.target.result;
        }
        this.showToast('File loaded, click Import to apply');
      };
      reader.readAsText(file);
      
      // Reset input
      e.target.value = '';
    }

    populateDiffSelects() {
      if (!this.diffFrom || !this.diffTo || !window.StateManager) return;

      const historyInfo = window.StateManager.getHistory();
      
      [this.diffFrom, this.diffTo].forEach(select => {
        select.innerHTML = '<option value="">Select state...</option>';
        
        historyInfo.actions.forEach((action, index) => {
          const option = document.createElement('option');
          option.value = index;
          option.textContent = `#${index} - ${action.type}${action.path ? ` (${action.path})` : ''}`;
          select.appendChild(option);
        });
      });
    }

    computeDiff() {
      if (!window.StateManager) return;

      const fromIndex = parseInt(this.diffFrom?.value, 10);
      const toIndex = parseInt(this.diffTo?.value, 10);

      if (isNaN(fromIndex) || isNaN(toIndex)) {
        this.showToast('Please select two states to compare', 'error');
        return;
      }

      const fromState = window.StateManager.getStateAt(fromIndex);
      const toState = window.StateManager.getStateAt(toIndex);

      if (!fromState || !toState) {
        this.showToast('Invalid state indices', 'error');
        return;
      }

      const diff = this.computeDiffRecursive(fromState, toState);
      
      if (this.diffViewer) {
        this.diffViewer.innerHTML = diff || '<div class="diff-placeholder">No differences found</div>';
      }
    }

    computeDiffRecursive(obj1, obj2, path = '') {
      const lines = [];
      const allKeys = new Set([...Object.keys(obj1 || {}), ...Object.keys(obj2 || {})]);

      for (const key of allKeys) {
        const fullPath = path ? `${path}.${key}` : key;
        const val1 = obj1?.[key];
        const val2 = obj2?.[key];

        if (val1 === undefined && val2 !== undefined) {
          lines.push(`<div class="diff-line diff-added">+ ${fullPath}: ${this.formatJson(val2)}</div>`);
        } else if (val1 !== undefined && val2 === undefined) {
          lines.push(`<div class="diff-line diff-removed">- ${fullPath}: ${this.formatJson(val1)}</div>`);
        } else if (typeof val1 === 'object' && typeof val2 === 'object') {
          const nested = this.computeDiffRecursive(val1, val2, fullPath);
          if (nested) lines.push(nested);
        } else if (JSON.stringify(val1) !== JSON.stringify(val2)) {
          lines.push(`<div class="diff-line diff-removed">- ${fullPath}: ${this.formatJson(val1)}</div>`);
          lines.push(`<div class="diff-line diff-added">+ ${fullPath}: ${this.formatJson(val2)}</div>`);
        }
      }

      return lines.join('');
    }

    clearHistory() {
      if (!window.StateManager) return;

      if (confirm('Are you sure you want to clear the entire history?')) {
        window.StateManager.clearHistory();
        this.showToast('History cleared');
      }
    }

    resetState() {
      if (!window.StateManager) return;

      if (confirm('Are you sure you want to reset the state? This will clear all state and history.')) {
        window.StateManager.reset();
        this.showToast('State reset');
      }
    }

    toggleDock() {
      this.isDocked = !this.isDocked;
      this.container?.classList.toggle('docked', this.isDocked);
      this.container?.classList.toggle('undocked', !this.isDocked);
    }

    hide() {
      this.isVisible = false;
      this.container?.classList.add('hidden');
      this.btnOpenDevtools?.style.setProperty('display', 'flex');
    }

    show() {
      this.isVisible = true;
      this.container?.classList.remove('hidden');
      this.btnOpenDevtools?.style.setProperty('display', 'none');
    }

    handleKeyboard(e) {
      // Ctrl/Cmd + Z = Undo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        this.undo();
      }
      // Ctrl/Cmd + Shift + Z = Redo
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'z') {
        e.preventDefault();
        this.redo();
      }
    }

    formatValue(value) {
      if (value === undefined || value === null) return '-';
      if (typeof value === 'string') return value.length > 20 ? value.slice(0, 20) + '...' : value;
      if (typeof value === 'object') return JSON.stringify(value).slice(0, 30) + '...';
      return String(value);
    }

    formatJson(value) {
      const str = JSON.stringify(value);
      return str.length > 50 ? str.slice(0, 50) + '...' : str;
    }

    formatTime(timestamp) {
      if (!timestamp) return '-';
      return new Date(timestamp).toLocaleTimeString();
    }

    showToast(message, type = 'success') {
      console.log(`[StateDevTools] ${message}`);
      // Simple toast implementation
      const toast = document.createElement('div');
      toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        padding: 12px 20px;
        background: ${type === 'error' ? '#f14c4c' : '#4ec9b0'};
        color: ${type === 'error' ? '#fff' : '#000'};
        border-radius: 4px;
        font-size: 13px;
        z-index: 10001;
        animation: fadeIn 0.3s ease;
      `;
      toast.textContent = message;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 2000);
    }
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new StateDevTools());
  } else {
    new StateDevTools();
  }

  // Expose globally
  window.StateDevTools = StateDevTools;

})();