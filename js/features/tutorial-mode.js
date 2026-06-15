/**
 * Tutorial Mode
 * Guided step-by-step overlay for teaching how to use the component gallery.
 */

const TutorialMode = {
  _state: {
    initialized: false,
    steps: [],
    resolvedSteps: [],
    activeSteps: [],
    missingSteps: [],
    renderedStepCount: 0,
    currentIndex: 0,
    active: false,
    pageKey: 'global',
    categoryKey: 'general',
    overlayEl: null,
    tooltipEl: null,
    highlightEl: null,
    activeTargetEl: null,
    activeTargetDescribedBy: null,
    overlayClickHandler: null,
    keydownHandler: null,
    refreshHandler: null,
    refreshRafId: null,
    completionKey: null,
    lastOptions: null
  },

  _storageKeys: {
    completedPrefix: 'tutorialMode.completed',
    lastContext: 'tutorialMode.lastContext',
    lastSteps: 'tutorialMode.lastSteps'
  },

  _buildCompletionKey(pageKey, categoryKey) {
    const safePage = String(pageKey || 'global').toLowerCase();
    const safeCat = String(categoryKey || 'general').toLowerCase();
    return `${this._storageKeys.completedPrefix}.${safePage}.${safeCat}`;
  },

  _resolveStepTarget(step) {
    if (!step || !step.selector || typeof document === 'undefined') {
      return { targetEl: null, resolvedSelector: null };
    }

    const selectors = String(step.selector)
      .split(',')
      .map((selector) => selector.trim())
      .filter(Boolean);

    for (const selector of selectors) {
      const targetEl = document.querySelector(selector);
      if (targetEl) {
        return { targetEl, resolvedSelector: selector };
      }
    }

    return { targetEl: null, resolvedSelector: null };
  },

  _normalizeSteps(steps) {
    const resolvedSteps = [];
    const activeSteps = [];
    const missingSteps = [];

    (Array.isArray(steps) ? steps : []).forEach((step, index) => {
      const normalizedStep = step && typeof step === 'object' ? { ...step } : { selector: '' };
      const resolved = this._resolveStepTarget(normalizedStep);
      const resolvedStep = {
        ...normalizedStep,
        index,
        targetEl: resolved.targetEl,
        resolvedSelector: resolved.resolvedSelector,
        missing: !resolved.targetEl,
      };

      resolvedSteps.push(resolvedStep);

      if (resolvedStep.missing) {
        missingSteps.push(resolvedStep);
      } else {
        activeSteps.push(resolvedStep);
      }
    });

    return { resolvedSteps, activeSteps, missingSteps };
  },

  _warnMissingSteps({ pageKey, categoryKey, missingSteps } = {}) {
    if (!window.UIVERSE_DEBUG || !Array.isArray(missingSteps) || !missingSteps.length) return;

    console.warn('[TutorialMode] Skipped missing tutorial steps', {
      pageKey,
      categoryKey,
      missingSteps: missingSteps.map((step) => ({
        title: step.title || 'Step',
        selector: step.selector || '',
      })),
    });
  },

  _getTutorialStepOutcome({ activeSteps, renderedStepCount = 0 } = {}) {
    return {
      hasRenderableSteps: Array.isArray(activeSteps) && activeSteps.length > 0,
      shouldMarkCompleted: renderedStepCount > 0,
    };
  },

  _assertUsableState({ pageKey, categoryKey, steps } = {}) {
    return Boolean(
      pageKey &&
      categoryKey &&
      Array.isArray(steps) &&
      steps.length > 0
    );
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

  _getLastTutorialContext(storage = localStorage) {
    try {
      const raw = storage.getItem(this._storageKeys.lastContext);
      if (!raw) return null;

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return null;

      const pageKey = typeof parsed.pageKey === 'string' ? parsed.pageKey : '';
      const categoryKey = typeof parsed.categoryKey === 'string' ? parsed.categoryKey : '';
      if (!pageKey || !categoryKey) return null;

      return { pageKey, categoryKey };
    } catch {
      return null;
    }
  },

  _getLastTutorialSteps(storage = localStorage) {
    try {
      const raw = storage.getItem(this._storageKeys.lastSteps);
      if (!raw) return null;

      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : null;
    } catch {
      return null;
    }
  },

  _setLastTutorialContext({ pageKey, categoryKey, steps } = {}, storage = localStorage) {
    if (!pageKey || !categoryKey) return;

    try {
      storage.setItem(this._storageKeys.lastContext, JSON.stringify({ pageKey, categoryKey }));
    } catch {}

    try {
      if (Array.isArray(steps) && steps.length > 0) {
        storage.setItem(this._storageKeys.lastSteps, JSON.stringify(steps));
      } else {
        storage.removeItem(this._storageKeys.lastSteps);
      }
    } catch {}
  },

  _resolveTutorialStartOptions({ pageKey, categoryKey, steps } = {}) {
    const explicitPageKey = typeof pageKey === 'string' && pageKey ? pageKey : null;
    const explicitCategoryKey = typeof categoryKey === 'string' && categoryKey ? categoryKey : null;
    const explicitSteps = Array.isArray(steps) && steps.length > 0 ? steps : null;

    const restoredContext = this._getLastTutorialContext();
    const restoredPageKey = explicitPageKey || (restoredContext && restoredContext.pageKey) || this._state.lastOptions?.pageKey || null;
    const restoredCategoryKey = explicitCategoryKey || (restoredContext && restoredContext.categoryKey) || this._state.lastOptions?.categoryKey || null;

    let resolvedSteps = explicitSteps;
    if (!resolvedSteps) {
      resolvedSteps = Array.isArray(this._state.lastOptions?.steps) && this._state.lastOptions.steps.length > 0
        ? this._state.lastOptions.steps
        : this._getLastTutorialSteps();
    }

    if (!resolvedSteps && restoredCategoryKey && window.TutorialModeSteps) {
      resolvedSteps = window.TutorialModeSteps[restoredCategoryKey] || window.TutorialModeSteps[restoredPageKey] || window.TutorialModeSteps.default || null;
    }

    return {
      pageKey: restoredPageKey,
      categoryKey: restoredCategoryKey,
      steps: resolvedSteps,
      restored: !explicitPageKey && !explicitCategoryKey && !explicitSteps,
    };
  },

  _getOverlayClickHandler() {
    if (!this._state.overlayClickHandler) {
      this._state.overlayClickHandler = (e) => {
        const btn = e.target && e.target.closest && e.target.closest('button[data-action]');
        if (!btn) return;
        const action = btn.getAttribute('data-action');

        if (action === 'next') this.next();
        else if (action === 'back') this.back();
        else if (action === 'skip') this.skip();
        else if (action === 'restart') this.restart();
      };
    }

    return this._state.overlayClickHandler;
  },

  _getKeydownHandler() {
    if (!this._state.keydownHandler) {
      this._state.keydownHandler = (e) => {
        if (!this._state.active) return;
        if (e.key === 'Escape') {
          e.preventDefault();
          this.skip();
          return;
        }
        if (e.key === 'ArrowRight') this.next();
        if (e.key === 'ArrowLeft') this.back();
      };
    }

    return this._state.keydownHandler;
  },

  _getTooltipDescriptionIds() {
    return ['tutorialModeTitle', 'tutorialModeInstruction', 'tutorialModeProgress'];
  },

  _syncTargetDescription(el) {
    if (!el || typeof el.getAttribute !== 'function' || typeof el.setAttribute !== 'function') return;

    if (this._state.activeTargetEl && this._state.activeTargetEl !== el) {
      this._restoreTargetDescription();
    }

    const previousDescription = this._state.activeTargetEl === el && this._state.activeTargetDescribedBy !== null
      ? this._state.activeTargetDescribedBy
      : el.getAttribute('aria-describedby');
    const describedByIds = new Set(
      String(previousDescription || '')
        .split(/\s+/)
        .map((id) => id.trim())
        .filter(Boolean)
    );

    this._getTooltipDescriptionIds().forEach((id) => describedByIds.add(id));

    this._state.activeTargetEl = el;
    this._state.activeTargetDescribedBy = previousDescription;
    el.setAttribute('aria-describedby', Array.from(describedByIds).join(' '));
  },

  _restoreTargetDescription() {
    const el = this._state.activeTargetEl;
    if (!el || typeof el.setAttribute !== 'function') {
      this._state.activeTargetEl = null;
      this._state.activeTargetDescribedBy = null;
      return;
    }

    const previousDescription = this._state.activeTargetDescribedBy;
    if (previousDescription) {
      el.setAttribute('aria-describedby', previousDescription);
    } else {
      el.removeAttribute('aria-describedby');
    }

    this._state.activeTargetEl = null;
    this._state.activeTargetDescribedBy = null;
  },

  /**
   * Start tutorial for a given page/category.
   * @param {{pageKey?: string, categoryKey?: string, steps: Array, force?: boolean}} options
   */
  start({ pageKey, categoryKey, steps, force = false } = {}) {
    const startOptions = this._resolveTutorialStartOptions({ pageKey, categoryKey, steps });
    const resolvedPageKey = startOptions.pageKey || 'global';
    const resolvedCategoryKey = startOptions.categoryKey || 'general';
    const resolvedSteps = startOptions.steps;

    if (!this._assertUsableState({ pageKey: resolvedPageKey, categoryKey: resolvedCategoryKey, steps: resolvedSteps })) return;

    const normalizedSteps = this._normalizeSteps(resolvedSteps);
    const startOutcome = this._getTutorialStepOutcome({ activeSteps: normalizedSteps.activeSteps });
    if (!startOutcome.hasRenderableSteps) {
      this._warnMissingSteps({
        pageKey: resolvedPageKey,
        categoryKey: resolvedCategoryKey,
        missingSteps: normalizedSteps.missingSteps,
      });
      return;
    }

    const completionKey = this._buildCompletionKey(resolvedPageKey, resolvedCategoryKey);

    this._state.pageKey = resolvedPageKey;
    this._state.categoryKey = resolvedCategoryKey;
    this._state.completionKey = completionKey;
    this._state.lastOptions = { pageKey: resolvedPageKey, categoryKey: resolvedCategoryKey, steps: resolvedSteps };
    this._state.steps = resolvedSteps;
    this._state.resolvedSteps = normalizedSteps.resolvedSteps;
    this._state.activeSteps = normalizedSteps.activeSteps;
    this._state.missingSteps = normalizedSteps.missingSteps;

    this._setLastTutorialContext({ pageKey: resolvedPageKey, categoryKey: resolvedCategoryKey, steps: resolvedSteps });

    this._warnMissingSteps({
      pageKey: resolvedPageKey,
      categoryKey: resolvedCategoryKey,
      missingSteps: normalizedSteps.missingSteps,
    });

    if (!startOptions.restored && !force && this._isCompleted()) return;

    this._state.currentIndex = 0;
    this._state.active = true;
    this._state.renderedStepCount = 0;

    this._ensureUI();
    this._bindUIEvents();

    // Attach tutorial-mode styles (safe to inject multiple times)
    this._injectStyles();
    this._render();
  },

  restart() {
    const lastOptions = this._state.lastOptions || {};
    const pageKey = this._state.pageKey || lastOptions.pageKey;
    const categoryKey = this._state.categoryKey || lastOptions.categoryKey;
    const steps = Array.isArray(this._state.steps) && this._state.steps.length > 0
      ? this._state.steps
      : lastOptions.steps;

    if (!this._assertUsableState({ pageKey, categoryKey, steps })) return;

    const completionKey = this._buildCompletionKey(pageKey, categoryKey);
    try {
      localStorage.removeItem(completionKey);
    } catch {}
    this._state.currentIndex = 0;
    this._state.active = true;

    const restartOutcome = this._getTutorialStepOutcome({ activeSteps: this._state.activeSteps, renderedStepCount: this._state.renderedStepCount });

    if (!restartOutcome.hasRenderableSteps && Array.isArray(lastOptions.steps) && lastOptions.steps.length > 0) {
      this.start({
        pageKey,
        categoryKey,
        steps,
        force: true
      });
      return;
    }

    this._render();
  },

  _injectStyles() {
    // Inject external CSS once per page.
    if (document.getElementById('tutorial-mode-css')) return;

    const link = document.createElement('link');
    link.id = 'tutorial-mode-css';
    link.rel = 'stylesheet';
    const scriptSource = (() => {
      if (document.currentScript && document.currentScript.src) {
        return document.currentScript.src;
      }

      const scriptEl = document.querySelector('script[src*="js/features/tutorial-mode.js"]');
      return scriptEl ? scriptEl.src : '';
    })();

    link.href = scriptSource
      ? new URL('../../tutorial-mode.css', scriptSource).href
      : 'tutorial-mode.css';
    document.head.appendChild(link);
  },

  _ensureUI() {
    if (this._state.overlayEl && this._state.tooltipEl) return;

    // Overlay backdrop
    const overlay = document.createElement('div');
    overlay.id = 'tutorialModeOverlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'tutorialModeTitle');
    overlay.setAttribute('aria-describedby', 'tutorialModeInstruction tutorialModeProgress');
    overlay.style.display = 'none';

    // Tooltip panel
    const panel = document.createElement('div');
    panel.id = 'tutorialModePanel';
    panel.setAttribute('aria-live', 'polite');
    panel.setAttribute('role', 'group');
    panel.setAttribute('aria-label', 'Tutorial step');

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
  },

  _bindUIEvents() {
    if (!this._state.overlayEl) return;

    const overlayClickHandler = this._getOverlayClickHandler();
    const keydownHandler = this._getKeydownHandler();

    this._state.overlayEl.removeEventListener('click', overlayClickHandler);
    document.removeEventListener('keydown', keydownHandler);
    this._state.overlayEl.addEventListener('click', overlayClickHandler);
    document.addEventListener('keydown', keydownHandler);

  },

  _render() {
    if (!this._state.active) return;

    this._state.overlayEl.style.display = 'block';

    // Find next available step whose selector exists
    let idx = this._state.currentIndex;
    while (idx < this._state.activeSteps.length) {
      const step = this._state.activeSteps[idx];
      const el = step.targetEl && step.targetEl.isConnected ? step.targetEl : null;
      if (el) {
        this._state.currentIndex = idx;
        this._state.renderedStepCount += 1;
        this._showStep(step, el);
        return;
      }
      idx += 1;
    }

    // If we reach here, all remaining steps have missing selectors
    const renderOutcome = this._getTutorialStepOutcome({ activeSteps: this._state.activeSteps, renderedStepCount: this._state.renderedStepCount });
    this.complete(false, renderOutcome.shouldMarkCompleted);
  },

  _showStep(step, el) {
    const title = step.title || 'Step';
    const instruction = step.instruction || '';
    const i = this._state.currentIndex;
    const total = this._state.activeSteps.length;

    this._state.overlayEl.querySelector('#tutorialModeTitle').textContent = title;
    this._state.overlayEl.querySelector('#tutorialModeInstruction').textContent = instruction;
    this._state.overlayEl.querySelector('#tutorialModeProgress').textContent = `${i + 1} of ${total}`;

    this._syncTargetDescription(el);

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

    // Position the tooltip relative to the current target so it tracks layout shifts.
    this._positionPanel(el);
  },

  _positionPanel(el) {
    if (!this._state.tooltipEl) return;

    const panel = this._state.tooltipEl;

    // Fallback placement keeps the panel readable when no target is available.
    if (!el || typeof el.getBoundingClientRect !== 'function') {
      panel.style.position = 'absolute';
      panel.style.top = '84px';
      panel.style.left = '50%';
      panel.style.transform = 'translateX(-50%)';
      return;
    }

    const rect = el.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const gap = 16;
    const viewportPadding = 14;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    const panelWidth = Math.min(panelRect.width || 560, Math.max(320, viewportWidth - viewportPadding * 2));
    const panelHeight = panelRect.height || 180;

    let top = rect.bottom + gap;
    if (top + panelHeight > viewportHeight - viewportPadding && rect.top - gap - panelHeight >= viewportPadding) {
      top = rect.top - gap - panelHeight;
    }

    top = Math.max(viewportPadding, Math.min(top, Math.max(viewportPadding, viewportHeight - panelHeight - viewportPadding)));

    let left = rect.left + (rect.width / 2) - (panelWidth / 2);
    left = Math.max(viewportPadding, Math.min(left, Math.max(viewportPadding, viewportWidth - panelWidth - viewportPadding)));

    panel.style.position = 'absolute';
    panel.style.top = `${top}px`;
    panel.style.left = `${left}px`;
    panel.style.transform = 'none';
  },

  _highlightElement(el) {
    if (!this._state.highlightEl) return;
    if (!el || typeof el.getBoundingClientRect !== 'function') return;

    this._applyHighlightMetrics(el);

    if (!this._state.refreshHandler) {
      this._state.refreshHandler = () => this._scheduleHighlightRefresh();
      window.addEventListener('scroll', this._state.refreshHandler, { passive: true });
      window.addEventListener('resize', this._state.refreshHandler);
    }
  },

  _applyHighlightMetrics(el) {
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
  },

  _scheduleHighlightRefresh() {
    if (this._state.refreshRafId !== null) return;

    const schedule = typeof window.requestAnimationFrame === 'function'
      ? window.requestAnimationFrame.bind(window)
      : (fn) => window.setTimeout(fn, 16);

    this._state.refreshRafId = schedule(() => {
      this._state.refreshRafId = null;
      if (!this._state.active) return;
      const currentStep = this._state.activeSteps[this._state.currentIndex];
      if (!currentStep || !currentStep.targetEl || !currentStep.targetEl.isConnected) return;
      const target = currentStep.targetEl;
      if (!target) return;
      this._applyHighlightMetrics(target);
    });
  },

  next() {
    if (!this._state.active) return;
    this._state.currentIndex += 1;

    if (this._state.currentIndex >= this._state.activeSteps.length) {
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

  complete(skip = false, shouldMarkCompleted = true) {
    this._state.active = false;
    this._restoreTargetDescription();

    if (shouldMarkCompleted) {
      this._setCompleted();
    }

    if (this._state.refreshHandler) {
      window.removeEventListener('scroll', this._state.refreshHandler);
      window.removeEventListener('resize', this._state.refreshHandler);
      this._state.refreshHandler = null;
    }

    if (this._state.refreshRafId !== null) {
      if (typeof window.cancelAnimationFrame === 'function') {
        window.cancelAnimationFrame(this._state.refreshRafId);
      } else {
        window.clearTimeout(this._state.refreshRafId);
      }
      this._state.refreshRafId = null;
    }

    if (this._state.overlayEl && this._state.overlayClickHandler) {
      this._state.overlayEl.removeEventListener('click', this._state.overlayClickHandler);
    }

    if (this._state.keydownHandler) {
      document.removeEventListener('keydown', this._state.keydownHandler);
    }

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

