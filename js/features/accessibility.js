/**
 * UIverse - Accessibility Hardening Feature
 *
 * Provides page-safe WCAG-oriented enhancements:
 * - Skip link injection
 * - Landmark normalization (main/nav)
 * - Focus-visible styling
 * - Accessible names for icon-only controls
 * - Keyboard activation for click-only non-semantic controls
 */

const Accessibility = {
  _state: {
    initialized: false,
    modeEnabled: false,
    toggleSelector: '[data-accessibility-toggle], #accessibilityToggle, #a11yToggle, #a11yModeToggle',
    storageKey: 'uiverseAccessibilityMode',
    scrollLockCount: 0,
    previousBodyOverflow: '',
    activeModalCleanup: null
  },

  init() {
    if (this._state.initialized) return;

    this.ensureDocumentLanguage();
    this.injectAccessibilityStyles();
    this.ensureMainLandmark();
    this.injectSkipLink();
    this.ensureNavLabels();
    this.ensureAccessibleNames();
    this.ensureKeyboardActivation();
    this.initAccessibilityMode();

    this._state.initialized = true;
  },

  openModal(container, options = {}) {
    if (!container) return () => {};

    container.setAttribute('role', container.getAttribute('role') || 'dialog');
    container.setAttribute('aria-modal', 'true');

    this.lockBodyScroll();

    const cleanup = this._trapFocus(container, options);
    this._state.activeModalCleanup = cleanup;
    return cleanup;
  },

  closeModal(container) {
    if (this._state.activeModalCleanup) {
      this._state.activeModalCleanup();
      this._state.activeModalCleanup = null;
    }

    this.unlockBodyScroll();

    if (container && container.getAttribute('role') === 'dialog') {
      container.removeAttribute('aria-modal');
    }
  },

  lockBodyScroll() {
    if (this._state.scrollLockCount === 0 && document.body) {
      this._state.previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }

    this._state.scrollLockCount += 1;
  },

  unlockBodyScroll() {
    this._state.scrollLockCount = Math.max(0, this._state.scrollLockCount - 1);

    if (this._state.scrollLockCount === 0 && document.body) {
      document.body.style.overflow = this._state.previousBodyOverflow || '';
      this._state.previousBodyOverflow = '';
    }
  },

  _trapFocus(container, options = {}) {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const escapeHandler = typeof options.onEscape === 'function' ? options.onEscape : null;
    const restoreTarget = options.restoreFocusTo instanceof HTMLElement ? options.restoreFocusTo : previousFocus;

    const focusableSelector = [
      'button:not([disabled])',
      'a[href]',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    const getFocusableElements = () => Array.from(container.querySelectorAll(focusableSelector)).filter((el) => el.offsetParent !== null || el === document.activeElement);

    const focusInitial = () => {
      const target = typeof options.initialFocus === 'string'
        ? container.querySelector(options.initialFocus)
        : options.initialFocus;
      const focusTarget = target instanceof HTMLElement ? target : getFocusableElements()[0] || container;

      if (focusTarget === container && !container.hasAttribute('tabindex')) {
        container.setAttribute('tabindex', '-1');
      }

      focusTarget.focus({ preventScroll: true });
    };

    const onKeydown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (escapeHandler) escapeHandler();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusables = getFocusableElements();
      if (focusables.length === 0) {
        event.preventDefault();
        focusInitial();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || active === container) {
          event.preventDefault();
          last.focus({ preventScroll: true });
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    };

    const onFocusIn = (event) => {
      if (!container.contains(event.target)) {
        focusInitial();
      }
    };

    document.addEventListener('keydown', onKeydown, true);
    document.addEventListener('focusin', onFocusIn);

    setTimeout(focusInitial, 0);

    return () => {
      document.removeEventListener('keydown', onKeydown, true);
      document.removeEventListener('focusin', onFocusIn);

      if (restoreTarget && document.contains(restoreTarget)) {
        restoreTarget.focus({ preventScroll: true });
      }
    };
  },

  initAccessibilityMode() {
    const toggle = this._getModeToggle();
    const savedValue = this._readStoredMode();
    const hasExplicitSetting = savedValue !== null;

    this._state.modeEnabled = hasExplicitSetting ? savedValue : Boolean(document.body?.dataset?.accessibilityMode === 'on');
    this._applyAccessibilityMode(this._state.modeEnabled, { persist: false, notify: false });

    if (toggle && !toggle.dataset.a11yModeBound) {
      toggle.addEventListener('click', () => {
        this.toggleAccessibilityMode();
      });
      toggle.dataset.a11yModeBound = '1';
    }

    if (this._state.modeEnabled) {
      this.scanA11yIssues();
    }

    return this._state.modeEnabled;
  },

  toggleAccessibilityMode(forceValue) {
    const nextValue = typeof forceValue === 'boolean' ? forceValue : !this._state.modeEnabled;
    this._applyAccessibilityMode(nextValue, { persist: true, notify: true });
    return this._state.modeEnabled;
  },

  scanA11yIssues(root = document) {
    const report = {
      passed: [],
      warnings: [],
      errors: [],
      summary: {
        total: 0,
        passed: 0,
        warnings: 0,
        errors: 0
      }
    };

    if (!root || typeof root.querySelectorAll !== 'function') {
      return report;
    }

    const safeQueryAll = (selector) => {
      try {
        return Array.from(root.querySelectorAll(selector));
      } catch (error) {
        report.errors.push({ rule: 'selector-error', message: `Selector failed: ${selector}`, detail: String(error) });
        return [];
      }
    };

    const mainLandmarks = safeQueryAll('main, [role="main"]');
    if (mainLandmarks.length > 0) {
      report.passed.push({ rule: 'main-landmark', message: 'Main landmark present' });
    } else {
      report.errors.push({ rule: 'main-landmark', message: 'Page lacks a <main> element or role="main" landmark' });
    }

    const skipLinks = safeQueryAll('.skip-link, a[href="#main-content"]');
    if (skipLinks.length > 0) {
      report.passed.push({ rule: 'skip-link', message: 'Skip link present' });
    } else {
      report.warnings.push({ rule: 'skip-link', message: 'No skip link detected' });
    }

    safeQueryAll('button, a, [role="button"]').forEach((el) => {
      if (this._hasAccessibleName(el)) {
        report.passed.push({ rule: 'accessible-name', element: this._describeElement(el), message: 'Element has an accessible name' });
      } else {
        report.errors.push({ rule: 'accessible-name', element: this._describeElement(el), message: 'Interactive element is missing an accessible name' });
      }
    });

    safeQueryAll('input, textarea, select').forEach((field) => {
      if (field.type === 'hidden') return;
      if (this._hasFieldLabel(field)) {
        report.passed.push({ rule: 'form-label', element: this._describeElement(field), message: 'Form control has a label' });
      } else {
        report.errors.push({ rule: 'form-label', element: this._describeElement(field), message: 'Form control is missing a label' });
      }
    });

    safeQueryAll('button, a, input, textarea, select, [tabindex], [role="button"]').forEach((el) => {
      if (!this._isFocusable(el)) return;
      const focusStyle = window.getComputedStyle ? window.getComputedStyle(el) : null;
      if (focusStyle && focusStyle.outlineStyle === 'none' && focusStyle.boxShadow === 'none') {
        report.warnings.push({ rule: 'focus-visible', element: this._describeElement(el), message: 'Focusable element may not have a visible focus indicator' });
      }
    });

    safeQueryAll('button, a, [role="button"], input, textarea, select').forEach((el) => {
      const contrast = this._checkContrast(el);
      if (!contrast) return;
      if (contrast.ratio < 4.5) {
        report.warnings.push({
          rule: 'contrast',
          element: this._describeElement(el),
          message: `Text contrast may be too low (${contrast.ratio.toFixed(2)}:1)`
        });
      } else {
        report.passed.push({ rule: 'contrast', element: this._describeElement(el), message: `Contrast ${contrast.ratio.toFixed(2)}:1` });
      }
    });

    report.summary.total = report.passed.length + report.warnings.length + report.errors.length;
    report.summary.passed = report.passed.length;
    report.summary.warnings = report.warnings.length;
    report.summary.errors = report.errors.length;

    if (window.UIVERSE_DEBUG) {
      console.info('[Accessibility] Scan complete', report.summary, report);
    }

    return report;
  },

  ensureDocumentLanguage() {
    const html = document.documentElement;
    if (html && !html.getAttribute('lang')) {
      html.setAttribute('lang', 'en');
    }
  },

  injectAccessibilityStyles() {
    if (document.getElementById('uiverse-a11y-style')) return;

    const style = document.createElement('style');
    style.id = 'uiverse-a11y-style';
    style.textContent = `
      .skip-link {
        position: absolute;
        top: -48px;
        left: 12px;
        z-index: 10000;
        background: #111;
        color: #fff;
        padding: 10px 14px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: top 0.2s ease;
      }

      .skip-link:focus,
      .skip-link:focus-visible {
        top: 12px;
        outline: 2px solid #74b9ff;
        outline-offset: 2px;
      }

      :focus-visible {
        outline: 3px solid #74b9ff;
        outline-offset: 2px;
      }
    `;

    document.head.appendChild(style);
  },

  ensureMainLandmark() {
    const existingMain = document.querySelector('main, [role="main"]');
    if (existingMain) {
      if (!existingMain.id) existingMain.id = 'main-content';
      if (existingMain.tagName.toLowerCase() !== 'main' && !existingMain.getAttribute('role')) {
        existingMain.setAttribute('role', 'main');
      }
      return;
    }

    const fallback = document.querySelector('section') || document.body.firstElementChild;
    if (fallback) {
      if (!fallback.id) fallback.id = 'main-content';
      fallback.setAttribute('role', 'main');
    }
  },

  injectSkipLink() {
    if (document.querySelector('.skip-link')) return;

    const target = document.querySelector('#main-content, main, [role="main"]');
    if (!target) return;

    if (!target.id) {
      target.id = 'main-content';
    }

    const link = document.createElement('a');
    link.href = '#main-content';
    link.className = 'skip-link';
    link.textContent = 'Skip to main content';

    document.body.insertBefore(link, document.body.firstChild);
  },

  ensureNavLabels() {
    document.querySelectorAll('nav').forEach((nav, index) => {
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', index === 0 ? 'Primary navigation' : `Navigation ${index + 1}`);
      }
    });
  },

  ensureAccessibleNames() {
    document.querySelectorAll('button, a, [role="button"]').forEach((el) => {
      const hasLabel = !!el.getAttribute('aria-label');
      const hasTitle = !!el.getAttribute('title');
      const visibleText = (el.textContent || '').trim();
      const iconOnly = !!el.querySelector('i, svg, img') && visibleText.length === 0;

      if (!hasLabel && !hasTitle && iconOnly) {
        const fallback = el.getAttribute('data-label') || 'Action';
        el.setAttribute('aria-label', fallback);
      }
    });

    document.querySelectorAll('input, textarea, select').forEach((field) => {
      if (field.type === 'hidden') return;

      const ariaLabel = field.getAttribute('aria-label');
      const labelledBy = field.getAttribute('aria-labelledby');
      const hasForLabel = field.id ? document.querySelector(`label[for="${field.id}"]`) : null;

      if (ariaLabel || labelledBy || hasForLabel) return;

      const fallback = field.getAttribute('placeholder') || field.getAttribute('name') || 'Input field';
      field.setAttribute('aria-label', fallback);
    });

    document.querySelectorAll('img').forEach((img) => {
      if (img.hasAttribute('alt')) return;
      img.setAttribute('alt', '');
    });
  },

  ensureKeyboardActivation() {
    document.querySelectorAll('[onclick]').forEach((el) => {
      const tag = el.tagName.toLowerCase();
      const nativeInteractive = ['button', 'a', 'input', 'select', 'textarea', 'summary'].includes(tag);
      if (nativeInteractive) return;

      if (!el.getAttribute('role')) {
        el.setAttribute('role', 'button');
      }

      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
      }

      if (el.dataset.a11yKeybound === '1') return;

      el.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          el.click();
        }
      });

      el.dataset.a11yKeybound = '1';
    });
  },

  _getModeToggle() {
    try {
      return document.querySelector(this._state.toggleSelector);
    } catch (error) {
      return null;
    }
  },

  _readStoredMode() {
    try {
      const stored = window.localStorage?.getItem(this._state.storageKey);
      if (stored === null) return null;
      return stored === '1' || stored === 'true';
    } catch (error) {
      return null;
    }
  },

  _applyAccessibilityMode(enabled, options = {}) {
    const persist = options.persist !== false;
    const notify = options.notify !== false;
    this._state.modeEnabled = Boolean(enabled);

    if (document.body) {
      document.body.dataset.accessibilityMode = this._state.modeEnabled ? 'on' : 'off';
      document.body.classList.toggle('accessibility-mode', this._state.modeEnabled);
    }

    const toggle = this._getModeToggle();
    if (toggle) {
      toggle.setAttribute('aria-pressed', this._state.modeEnabled ? 'true' : 'false');
      toggle.setAttribute('aria-label', this._state.modeEnabled ? 'Disable accessibility mode' : 'Enable accessibility mode');
      toggle.title = this._state.modeEnabled ? 'Disable accessibility mode' : 'Enable accessibility mode';
    }

    if (persist) {
      try {
        window.localStorage?.setItem(this._state.storageKey, this._state.modeEnabled ? '1' : '0');
      } catch (error) {
        // Ignore storage failures in private mode or locked-down browsers.
      }
    }

    if (notify) {
      document.dispatchEvent(new CustomEvent('uiverse:accessibility-mode-change', {
        detail: { enabled: this._state.modeEnabled }
      }));
    }
  },

  _hasAccessibleName(el) {
    const ariaLabel = el.getAttribute('aria-label');
    const ariaLabelledBy = el.getAttribute('aria-labelledby');
    const title = el.getAttribute('title');
    const text = (el.textContent || '').trim();
    return Boolean(ariaLabel || ariaLabelledBy || title || text);
  },

  _hasFieldLabel(field) {
    const ariaLabel = field.getAttribute('aria-label');
    const ariaLabelledBy = field.getAttribute('aria-labelledby');
    if (ariaLabel || ariaLabelledBy) return true;

    if (field.id) {
      try {
        return Boolean(document.querySelector(`label[for="${CSS.escape(field.id)}"]`));
      } catch (error) {
        return Boolean(document.querySelector(`label[for="${field.id.replace(/"/g, '\\"')}"]`));
      }
    }

    return Boolean(field.closest('label'));
  },

  _isFocusable(el) {
    if (!el || typeof el.matches !== 'function') return false;
    if (el.hasAttribute('disabled')) return false;
    return el.matches('button, a[href], input, textarea, select, [tabindex], [role="button"]');
  },

  _checkContrast(el) {
    try {
      if (!window.getComputedStyle) return null;
      const style = window.getComputedStyle(el);
      const color = this._parseColor(style.color);
      const background = this._getEffectiveBackgroundColor(el);

      if (!color || !background) return null;

      return { ratio: this._contrastRatio(color, background) };
    } catch (error) {
      return null;
    }
  },

  _getEffectiveBackgroundColor(el) {
    let current = el;
    while (current) {
      const style = window.getComputedStyle(current);
      const background = this._parseColor(style.backgroundColor);
      if (background && background.a > 0) {
        return background;
      }
      current = current.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  },

  _parseColor(value) {
    if (!value || value === 'transparent') return null;
    const normalized = value.trim();

    const rgba = normalized.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i);
    if (rgba) {
      return {
        r: Number(rgba[1]),
        g: Number(rgba[2]),
        b: Number(rgba[3]),
        a: rgba[4] === undefined ? 1 : Number(rgba[4])
      };
    }

    const hex = normalized.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hex) {
      const raw = hex[1].length === 3
        ? hex[1].split('').map((ch) => ch + ch).join('')
        : hex[1];
      return {
        r: parseInt(raw.slice(0, 2), 16),
        g: parseInt(raw.slice(2, 4), 16),
        b: parseInt(raw.slice(4, 6), 16),
        a: 1
      };
    }

    return null;
  },

  _relativeLuminance(color) {
    const channel = (value) => {
      const normalized = value / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4);
    };

    return (0.2126 * channel(color.r)) + (0.7152 * channel(color.g)) + (0.0722 * channel(color.b));
  },

  _contrastRatio(foreground, background) {
    const light = Math.max(this._relativeLuminance(foreground), this._relativeLuminance(background));
    const dark = Math.min(this._relativeLuminance(foreground), this._relativeLuminance(background));
    return (light + 0.05) / (dark + 0.05);
  },

  _describeElement(el) {
    if (!el || !el.tagName) return 'unknown';
    const id = el.id ? `#${el.id}` : '';
    const cls = el.classList && el.classList.length ? `.${Array.from(el.classList).slice(0, 3).join('.')}` : '';
    return `${el.tagName.toLowerCase()}${id}${cls}`;
  }
};

window.Accessibility = Accessibility;
