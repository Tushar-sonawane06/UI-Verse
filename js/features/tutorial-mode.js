/**
 * Tutorial Mode
 * Guided step-by-step overlay for teaching how to use the component gallery.
 */

const TutorialMode = {
  _state: {
    initialized: false,
    steps: [],
    currentIndex: 0,
    active: false,
    pageKey: 'global',
    categoryKey: 'general',
    overlayEl: null,
    tooltipEl: null,
    highlightEl: null,
    completionKey: ''
  },

  _storageKeys: {
    completedPrefix: 'tutorialMode.completed'
  },

  _buildCompletionKey(pageKey, categoryKey) {
    const safePage = String(pageKey || 'global').toLowerCase();
    const safeCat = String(categoryKey || 'general').toLowerCase();
    return `${this._storageKeys.completedPrefix}.${safePage}.${safeCat}`;
  },

  _isCompleted() {
    try {
      return localStorage.getItem(this._state.completionKey) === '1';
    } catch {
      return false;
    }
  },

  _setCompleted() {
    try {
      localStorage.setItem(this._state.completionKey, '1');
    } catch {}
  },

  /**
   * Start tutorial for a given page/category.
   * @param {{pageKey?: string, categoryKey?: string, steps: Array}} options
   */
  start({ pageKey, categoryKey, steps }) {
    this._state.pageKey = pageKey || 'global';
    this._state.categoryKey = categoryKey || 'general';
    this._state.completionKey = this._buildCompletionKey(this._state.pageKey, this._state.categoryKey);

    if (!steps || !Array.isArray(steps) || steps.length === 0) return;
    if (this._isCompleted()) return;

    this._state.steps = steps;
    this._state.currentIndex = 0;
    this._state.active = true;

    this._ensureUI();

    // Attach tutorial-mode styles (safe to inject multiple times)
    this._injectStyles();
    this._render();
  },

  restart() {
    try {
      localStorage.removeItem(this._state.completionKey);
    } catch {}
    this._state.currentIndex = 0;
    this._state.active = true;
    this._render();
  },

  _injectStyles() {
    // Inject external CSS once per page.
    if (document.getElementById('tutorial-mode-css')) return;

    const link = document.createElement('link');
    link.id = 'tutorial-mode-css';
    link.rel = 'stylesheet';
    link.href = 'tutorial-mode.css';
    document.head.appendChild(link);
  },

  _ensureUI() {
    if (this._state.overlayEl && this._state.tooltipEl) return;

    // Overlay backdrop
    const overlay = document.createElement('div');
    overlay.id = 'tutorialModeOverlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.style.display = 'none';

    // Tooltip panel
    const panel = document.createElement('div');
    panel.id = 'tutorialModePanel';
    panel.setAttribute('aria-live', 'polite');

    panel.innerHTML = `
      <div class="tutorialMode-kicker">Tutorial Mode</div>
      <div class="tutorialMode-title" id="tutorialModeTitle"></div>
      <div class="tutorialMode-instruction" id="tutorialModeInstruction"></div>
      <div class="tutorialMode-progress" id="tutorialModeProgress"></div>
      <div class="tutorialMode-actions">
        <button type="button" class="tutorialMode-btn" data-action="back">Back</button>
        <button type="button" class="tutorialMode-btn tutorialMode-btn-primary" data-action="next">Next</button>
        <button type="button" class="tutorialMode-btn" data-action="skip">Skip</button>
        <button type="button" class="tutorialMode-btn" data-action="restart">Restart</button>
      </div>
    `;

    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    // Highlight element
    const highlight = document.createElement('div');
    highlight.id = 'tutorialModeHighlight';
    highlight.setAttribute('aria-hidden', 'true');
    document.body.appendChild(highlight);

    this._state.overlayEl = overlay;
    this._state.tooltipEl = panel;
    this._state.highlightEl = highlight;

    // Actions
    overlay.addEventListener('click', (e) => {
      const btn = e.target && e.target.closest && e.target.closest('button[data-action]');
      if (!btn) return;
      const action = btn.getAttribute('data-action');

      if (action === 'next') this.next();
      else if (action === 'back') this.back();
      else if (action === 'skip') this.skip();
      else if (action === 'restart') this.restart();
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (!this._state.active) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        this.skip();
      }
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.back();
    });
  },

  _render() {
    if (!this._state.active) return;

    this._state.overlayEl.style.display = 'block';

    // Find next available step whose selector exists
    let idx = this._state.currentIndex;
    while (idx < this._state.steps.length) {
      const step = this._state.steps[idx];
      const el = step.selector ? document.querySelector(step.selector) : null;
      if (el) {
        this._state.currentIndex = idx;
        this._showStep(step, el);
        return;
      }
      idx += 1;
    }

    // If we reach here, all remaining steps have missing selectors
    this.complete();
  },

  _showStep(step, el) {
    const title = step.title || 'Step';
    const instruction = step.instruction || '';
    const i = this._state.currentIndex;

    this._state.overlayEl.querySelector('#tutorialModeTitle').textContent = title;
    this._state.overlayEl.querySelector('#tutorialModeInstruction').textContent = instruction;
    this._state.overlayEl.querySelector('#tutorialModeProgress').textContent = `${i + 1} of ${this._state.steps.length}`;

    // Highlight
    this._highlightElement(el);

    // Optional: run step hook
    if (typeof step.onEnter === 'function') {
      try { step.onEnter(el, i); } catch {}
    }

    // Scroll into view
    if (step.scroll !== false && el && typeof el.scrollIntoView === 'function') {
      try {
        el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      } catch {
        el.scrollIntoView();
      }
    }

    // Tooltip position (simple): place panel near top center
    // Could be improved to anchor near element; keep stable across layouts.
    this._positionPanel();
  },

  _positionPanel() {
    // Keep the panel fixed so it doesn't jump when scrolling.
    this._state.tooltipEl.style.transform = 'translateY(0)';
  },

  _highlightElement(el) {
    if (!this._state.highlightEl) return;
    if (!el || typeof el.getBoundingClientRect !== 'function') return;

    const rect = el.getBoundingClientRect();
    const pad = 8;
    this._state.highlightEl.style.display = 'block';
    this._state.highlightEl.style.left = `${rect.left - pad + window.scrollX}px`;
    this._state.highlightEl.style.top = `${rect.top - pad + window.scrollY}px`;
    this._state.highlightEl.style.width = `${rect.width + pad * 2}px`;
    this._state.highlightEl.style.height = `${rect.height + pad * 2}px`;
    this._state.highlightEl.style.borderRadius = getComputedStyle(el).borderRadius || '14px';

    // Update on resize/scroll for accuracy
    const refresh = () => {
      if (!this._state.active) return;
      const currentStep = this._state.steps[this._state.currentIndex];
      if (!currentStep || !currentStep.selector) return;
      const target = document.querySelector(currentStep.selector);
      if (!target) return;
      this._highlightElement(target);
    };

    // Keep a single handler to avoid leaks
    if (this._state._refreshHandler) {
      window.removeEventListener('scroll', this._state._refreshHandler);
      window.removeEventListener('resize', this._state._refreshHandler);
    }
    this._state._refreshHandler = refresh;
    window.addEventListener('scroll', refresh, { passive: true });
    window.addEventListener('resize', refresh);
  },

  next() {
    if (!this._state.active) return;
    this._state.currentIndex += 1;

    if (this._state.currentIndex >= this._state.steps.length) {
      this.complete();
      return;
    }
    this._render();
  },

  back() {
    if (!this._state.active) return;
    this._state.currentIndex = Math.max(0, this._state.currentIndex - 1);
    this._render();
  },

  skip() {
    this.complete(true);
  },

  complete(skip = false) {
    this._state.active = false;
    this._setCompleted();

    if (this._state.highlightEl) this._state.highlightEl.style.display = 'none';
    if (this._state.overlayEl) this._state.overlayEl.style.display = 'none';
  }
};

// Expose globally
if (typeof window !== 'undefined') {
  window.TutorialMode = TutorialMode;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TutorialMode;
}

