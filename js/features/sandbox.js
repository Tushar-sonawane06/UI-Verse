/**
 * Live Sandbox Feature
 * Provides live preview iframe for code examples
 */

const Sandbox = {
  _state: {
    initialized: false,
    overlayByFrame: new WeakMap(),
    previewSlots: new Set(),
    previewObserver: null,
    mutationObserver: null,
    themeListener: null,
    initStartedAt: 0,
    loadedPreviewCount: 0
  },

  _injectSandboxStyles() {
    if (document.getElementById('uiverse-sandbox-style')) return;

    const style = document.createElement('style');
    style.id = 'uiverse-sandbox-style';
    style.textContent = `
      .sandbox-preview-slot {
        position: relative;
        width: 100%;
        min-height: 164px;
        border: 1px solid #e8ebf2;
        border-radius: 10px;
        overflow: hidden;
        background: linear-gradient(180deg, rgba(248, 250, 252, 0.94), rgba(241, 245, 249, 0.88));
        transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
      }

      .sandbox-preview-slot.is-loading {
        isolation: isolate;
      }

      .sandbox-skeleton {
        position: absolute;
        inset: 0;
        display: grid;
        align-content: center;
        gap: 12px;
        padding: 18px;
        background:
          linear-gradient(90deg, rgba(148, 163, 184, 0.12), rgba(148, 163, 184, 0.06), rgba(148, 163, 184, 0.12)),
          linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(248, 250, 252, 0.92));
        animation: sandboxPulse 1.5s ease-in-out infinite;
      }

      .sandbox-skeleton-line {
        height: 12px;
        border-radius: 999px;
        background: linear-gradient(90deg, rgba(148, 163, 184, 0.18), rgba(148, 163, 184, 0.34), rgba(148, 163, 184, 0.18));
        background-size: 200% 100%;
      }

      .sandbox-skeleton-line.short {
        width: 48%;
      }

      .sandbox-skeleton-line.medium {
        width: 72%;
      }

      .sandbox-skeleton-line.long {
        width: 92%;
      }

      .sandbox-skeleton-chip-row {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .sandbox-skeleton-chip {
        width: 72px;
        height: 26px;
        border-radius: 999px;
        background: rgba(148, 163, 184, 0.16);
      }

      .sandbox-preview-load-label {
        position: absolute;
        left: 12px;
        bottom: 12px;
        z-index: 2;
        padding: 6px 10px;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.82);
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.02em;
      }

      .sandbox-preview-frame {
        width: 100%;
        min-height: 160px;
        border: 0;
        display: block;
        background: transparent;
      }

      .sandbox-preview-slot.theme-dark {
        border-color: rgba(255, 255, 255, 0.12);
      }

      .sandbox-preview-slot.theme-light {
        border-color: rgba(148, 163, 184, 0.3);
      }

      .sandbox-preview-slot[data-theme-bg-light],
      .sandbox-preview-slot[data-theme-bg-dark] {
        isolation: isolate;
      }

      @keyframes sandboxPulse {
        0%, 100% { opacity: 0.72; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  },

  _createPreviewSkeleton() {
    const skeleton = document.createElement('div');
    skeleton.className = 'sandbox-skeleton';
    skeleton.innerHTML = `
      <div class="sandbox-skeleton-line long"></div>
      <div class="sandbox-skeleton-line medium"></div>
      <div class="sandbox-skeleton-chip-row">
        <span class="sandbox-skeleton-chip"></span>
        <span class="sandbox-skeleton-chip"></span>
        <span class="sandbox-skeleton-chip"></span>
      </div>
      <div class="sandbox-skeleton-line short"></div>
    `;
    return skeleton;
  },

  _getThemePreference() {
    return document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  },

  _resolveThemeBackground(slot) {
    const isDark = this._getThemePreference() === 'dark';
    const lightBg = slot?.card?.dataset?.themeBgLight || slot?.placeholder?.dataset?.themeBgLight || '';
    const darkBg = slot?.card?.dataset?.themeBgDark || slot?.placeholder?.dataset?.themeBgDark || '';

    const chosen = isDark ? (darkBg || lightBg) : (lightBg || darkBg);
    const fallback = isDark
      ? 'linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(17, 24, 39, 0.9))'
      : 'linear-gradient(180deg, rgba(248, 250, 252, 0.94), rgba(241, 245, 249, 0.88))';

    return {
      background: chosen || fallback,
      mode: isDark ? 'dark' : 'light'
    };
  },

  _applyThemeToSlot(slot) {
    if (!slot || !slot.placeholder) return;

    const theme = this._resolveThemeBackground(slot);
    slot.placeholder.dataset.themeMode = theme.mode;
    slot.placeholder.dataset.themeBgLight = slot.placeholder.dataset.themeBgLight || slot.card?.dataset?.themeBgLight || '';
    slot.placeholder.dataset.themeBgDark = slot.placeholder.dataset.themeBgDark || slot.card?.dataset?.themeBgDark || '';
    slot.placeholder.style.background = theme.background;
    slot.placeholder.classList.toggle('theme-dark', theme.mode === 'dark');
    slot.placeholder.classList.toggle('theme-light', theme.mode === 'light');
  },

  _syncThemeAwarePreviews() {
    this._state.previewSlots.forEach((slot) => {
      this._applyThemeToSlot(slot);
    });
  },

  _bindThemeEvents() {
    if (this._state.themeListener) return;

    const onThemeChange = () => this._syncThemeAwarePreviews();
    document.addEventListener('uiverse:theme-change', onThemeChange);
    document.addEventListener('themechange', onThemeChange);
    this._state.themeListener = onThemeChange;
  },

  _cleanupSlot(slot) {
    if (!slot || slot.cleanedUp) return;

    slot.cleanedUp = true;

    if (slot.io) {
      try { slot.io.unobserve(slot.placeholder); } catch (error) {}
    }

    if (slot.frameObserver) {
      try { slot.frameObserver.disconnect(); } catch (error) {}
    }

    if (slot.placeholder && slot.placeholder.parentNode) {
      slot.placeholder.remove();
    }

    if (slot.iframe && slot.iframe.parentNode) {
      slot.iframe.remove();
    }

    if (slot.textarea && slot.textarea.parentNode) {
      slot.textarea.remove();
    }

    if (slot.removeExistingCodeBlock && typeof slot.removeExistingCodeBlock === 'function') {
      slot.removeExistingCodeBlock();
    }

    this._state.previewSlots.delete(slot);
  },

  _ensurePreviewObservers() {
    if (!this._state.previewObserver && 'IntersectionObserver' in window) {
      this._state.previewObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const slot = entry.target && entry.target.__sandboxSlot;
          if (!slot || slot.loaded || slot.cleanedUp) return;
          this._mountPreview(slot);
        });
      }, {
        rootMargin: '240px 0px',
        threshold: 0.01
      });
    }

    if (!this._state.mutationObserver && 'MutationObserver' in window) {
      this._state.mutationObserver = new MutationObserver(() => {
        this._state.previewSlots.forEach((slot) => {
          if (!slot.card.isConnected) {
            this._cleanupSlot(slot);
          }
        });
      });

      this._state.mutationObserver.observe(document.body, { childList: true, subtree: true });
    }
  },

  _mountPreview(slot) {
    if (!slot || slot.loaded || slot.cleanedUp) return;

    const start = performance.now();
    slot.loaded = true;
    this._state.loadedPreviewCount += 1;

    const iframe = document.createElement('iframe');
    iframe.className = 'sandbox-preview-frame';
    iframe.setAttribute('sandbox', 'allow-scripts');
    iframe.setAttribute('title', 'Live component preview');
    iframe.loading = 'lazy';

    iframe.addEventListener('load', () => {
      this._updatePreviewAccessibilityOverlay(iframe);
      if (slot.skeleton && slot.skeleton.parentNode) {
        slot.skeleton.remove();
      }
      if (slot.loadLabel && slot.loadLabel.parentNode) {
        slot.loadLabel.remove();
      }

      const elapsed = Math.round(performance.now() - start);
      console.info(`[Sandbox] Loaded preview #${slot.index + 1} in ${elapsed}ms`);
    }, { once: true });

    slot.iframe = iframe;
    slot.placeholder.appendChild(iframe);
    iframe.srcdoc = slot.htmlContent;

    if (this._state.previewObserver) {
      try {
        this._state.previewObserver.unobserve(slot.placeholder);
      } catch (error) {}
    }
  },

  _getThemeTokens(doc) {
    try {
      const styles = doc.defaultView.getComputedStyle(doc.documentElement);
      return {
        bg: styles.getPropertyValue('--bg').trim(),
        surface: styles.getPropertyValue('--surface').trim(),
        text: styles.getPropertyValue('--text').trim(),
        cardBg: styles.getPropertyValue('--card-bg').trim(),
        cardBorder: styles.getPropertyValue('--card-border').trim(),
        navBg: styles.getPropertyValue('--nav-bg').trim(),
        navBorder: styles.getPropertyValue('--nav-border').trim()
      };
    } catch (error) {
      return {};
    }
  },

  _parseColor(value) {
    if (!value || value === 'transparent') return null;

    const normalized = String(value).trim();
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
    const cls = el.classList && el.classList.length ? `.${Array.from(el.classList).slice(0, 2).join('.')}` : '';
    const text = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 36);
    return `${el.tagName.toLowerCase()}${id}${cls}${text ? ` “${text}”` : ''}`;
  },

  _isVisibleElement(el) {
    if (!el || typeof el.getBoundingClientRect !== 'function') return false;

    const rect = el.getBoundingClientRect();
    const style = el.ownerDocument.defaultView.getComputedStyle(el);
    return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none' && Number(style.opacity || 1) > 0;
  },

  _getEffectiveBackgroundColor(el) {
    let current = el;

    while (current) {
      const style = current.ownerDocument.defaultView.getComputedStyle(current);
      const background = this._parseColor(style.backgroundColor);
      if (background && background.a > 0) return background;
      current = current.parentElement;
    }

    return { r: 255, g: 255, b: 255, a: 1 };
  },

  _getFocusableElements(root) {
    return Array.from(root.querySelectorAll([
      'button:not([disabled])',
      'a[href]',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', '))).filter((el) => this._isVisibleElement(el));
  },

  _scanPreviewAccessibility(doc) {
    const issues = [];
    const tokens = this._getThemeTokens(doc);

    const pushIssue = (severity, rule, message, element, extra = {}) => {
      issues.push({
        severity,
        rule,
        message,
        element,
        tokens,
        ...extra
      });
    };

    const buttonCandidates = Array.from(doc.querySelectorAll('button, [role="button"]'));
    buttonCandidates.forEach((button) => {
      const hasLabel = Boolean(button.getAttribute('aria-label') || button.getAttribute('aria-labelledby') || button.getAttribute('title'));
      const visibleText = (button.textContent || '').trim();
      const iconOnly = button.querySelector('i, svg, img') && visibleText.length === 0;

      if (!hasLabel && iconOnly) {
        pushIssue('warning', 'button-label', 'Button is missing an accessible label', button, {
          fix: 'Add aria-label or visible text'
        });
      }
    });

    const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    if (headings.length > 0) {
      const levels = headings.map((heading) => Number(heading.tagName.slice(1)));
      const firstLevel = levels[0];

      if (firstLevel > 1) {
        pushIssue('warning', 'heading-hierarchy', `Heading hierarchy starts at h${firstLevel} instead of h1`, headings[0], {
          fix: 'Start the preview with an h1 or a semantically equivalent heading'
        });
      }

      for (let index = 1; index < levels.length; index += 1) {
        if (levels[index] > levels[index - 1] + 1) {
          pushIssue('warning', 'heading-hierarchy', `Heading level jumps from h${levels[index - 1]} to h${levels[index]}`, headings[index], {
            fix: 'Move through heading levels in order'
          });
        }
      }
    }

    const textSelectors = [
      'button',
      'a[href]',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'li', 'label', 'figcaption', 'small', 'strong', 'em', 'span', 'div'
    ].join(', ');

    Array.from(doc.querySelectorAll(textSelectors)).forEach((element) => {
      if (!this._isVisibleElement(element)) return;
      if ((element.textContent || '').trim().length < 3) return;

      const style = doc.defaultView.getComputedStyle(element);
      const foreground = this._parseColor(style.color);
      if (!foreground) return;

      const background = this._getEffectiveBackgroundColor(element);
      const ratio = this._contrastRatio(foreground, background);
      const tokenHints = [];

      if (tokens.text && style.color.trim() === tokens.text) tokenHints.push('--text');
      if (tokens.surface && style.backgroundColor.trim() === tokens.surface) tokenHints.push('--surface');
      if (tokens.bg && style.backgroundColor.trim() === tokens.bg) tokenHints.push('--bg');

      if (ratio < 4.5) {
        pushIssue('warning', 'contrast', `Low contrast (${ratio.toFixed(2)}:1)`, element, {
          ratio,
          fix: tokenHints.length ? `Review theme token usage: ${tokenHints.join(', ')}` : 'Adjust foreground or background colors'
        });
      }
    });

    const dialogRoots = Array.from(doc.querySelectorAll('[aria-modal="true"], [role="dialog"], [data-focus-trap]'));
    dialogRoots.forEach((dialog) => {
      const focusables = this._getFocusableElements(dialog);
      const allFocusables = this._getFocusableElements(doc.body);
      const closeButton = dialog.querySelector('button[aria-label*="close" i], button[title*="close" i], [data-close], [data-dismiss]');
      const outsideFocusables = allFocusables.filter((item) => !dialog.contains(item));

      if (focusables.length === 0) {
        pushIssue('warning', 'focus-trap', 'Dialog-like component has no focusable content', dialog, {
          fix: 'Add a focusable control inside the modal or drawer'
        });
      }

      if (!closeButton) {
        pushIssue('warning', 'focus-trap', 'Dialog-like component is missing a clear close control', dialog, {
          fix: 'Add a close button or dismiss action'
        });
      }

      if (dialog.getAttribute('aria-modal') === 'true' && outsideFocusables.length > 0) {
        pushIssue('warning', 'focus-trap', 'Focusable elements remain reachable outside the modal', dialog, {
          fix: 'Trap focus inside the modal while it is open'
        });
      }
    });

    return {
      issues: issues.slice(0, 8),
      totalIssues: issues.length,
      hasIssues: issues.length > 0
    };
  },

  _injectPreviewAuditStyles(doc) {
    if (doc.getElementById('sandbox-a11y-styles')) return;

    const style = doc.createElement('style');
    style.id = 'sandbox-a11y-styles';
    style.textContent = `
      .sandbox-a11y-overlay {
        position: fixed;
        top: 14px;
        right: 14px;
        z-index: 10000;
        width: min(320px, calc(100vw - 28px));
        display: grid;
        gap: 10px;
        padding: 14px;
        border-radius: 16px;
        border: 1px solid rgba(15, 23, 42, 0.14);
        background: rgba(255, 255, 255, 0.92);
        color: #0f172a;
        box-shadow: 0 16px 32px rgba(15, 23, 42, 0.16);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        font-family: inherit;
      }

      .sandbox-a11y-overlay[hidden] {
        display: none !important;
      }

      .sandbox-a11y-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 10px;
      }

      .sandbox-a11y-kicker {
        margin: 0 0 2px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #0ea5e9;
      }

      .sandbox-a11y-title {
        margin: 0;
        font-size: 14px;
        font-weight: 800;
      }

      .sandbox-a11y-summary {
        margin: 0;
        font-size: 12px;
        color: #475569;
      }

      .sandbox-a11y-list {
        display: grid;
        gap: 8px;
        margin: 0;
        padding: 0;
        list-style: none;
        max-height: 260px;
        overflow: auto;
      }

      .sandbox-a11y-item {
        display: grid;
        gap: 8px;
        padding: 10px 11px;
        border-radius: 12px;
        background: rgba(241, 245, 249, 0.9);
        border: 1px solid rgba(148, 163, 184, 0.24);
      }

      .sandbox-a11y-item strong {
        font-size: 12px;
      }

      .sandbox-a11y-item p {
        margin: 0;
        font-size: 12px;
        line-height: 1.5;
        color: #334155;
      }

      .sandbox-a11y-item small {
        display: block;
        color: #64748b;
        font-size: 11px;
      }

      .sandbox-a11y-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .sandbox-a11y-jump {
        border: 0;
        border-radius: 999px;
        padding: 7px 10px;
        background: #0ea5e9;
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
      }

      .sandbox-a11y-jump:hover {
        background: #0284c7;
      }

      .sandbox-a11y-highlight {
        outline: 3px solid #0ea5e9 !important;
        outline-offset: 3px !important;
        box-shadow: 0 0 0 6px rgba(14, 165, 233, 0.18) !important;
      }
    `;
    doc.head.appendChild(style);
  },

  _renderPreviewAuditOverlay(doc, report) {
    this._injectPreviewAuditStyles(doc);

    let overlay = doc.getElementById('sandbox-a11y-overlay');
    if (!report.hasIssues) {
      if (overlay) overlay.remove();
      return;
    }

    if (!overlay) {
      overlay = doc.createElement('aside');
      overlay.id = 'sandbox-a11y-overlay';
      overlay.className = 'sandbox-a11y-overlay';
      overlay.setAttribute('role', 'status');
      overlay.setAttribute('aria-live', 'polite');
      doc.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div class="sandbox-a11y-header">
        <div>
          <p class="sandbox-a11y-kicker">Accessibility audit</p>
          <h2 class="sandbox-a11y-title">${report.totalIssues} warning${report.totalIssues === 1 ? '' : 's'} found</h2>
          <p class="sandbox-a11y-summary">Warn-only overlay for beginner-friendly previews.</p>
        </div>
      </div>
      <ul class="sandbox-a11y-list">
        ${report.issues.map((issue, index) => {
          const targetLabel = this._describeElement(issue.element);
          const fixLabel = issue.fix ? `<small>${issue.fix}</small>` : '';
          return `
            <li class="sandbox-a11y-item">
              <strong>${index + 1}. ${issue.rule.replace(/-/g, ' ')}</strong>
              <p>${issue.message}</p>
              <small>${targetLabel}</small>
              ${fixLabel}
              <div class="sandbox-a11y-actions">
                <button type="button" class="sandbox-a11y-jump" data-jump-index="${index}">Jump to element</button>
              </div>
            </li>
          `;
        }).join('')}
      </ul>
    `;

    overlay.querySelectorAll('[data-jump-index]').forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.getAttribute('data-jump-index'));
        const issue = report.issues[index];
        const target = issue && issue.element;
        if (!target || typeof target.scrollIntoView !== 'function') return;

        target.classList.add('sandbox-a11y-highlight');
        target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        if (typeof target.focus === 'function') {
          try {
            target.focus({ preventScroll: true });
          } catch (error) {
            target.focus();
          }
        }

        setTimeout(() => {
          target.classList.remove('sandbox-a11y-highlight');
        }, 1800);
      });
    });
  },

  _updatePreviewAccessibilityOverlay(iframe) {
    const doc = iframe.contentDocument;
    if (!doc || !doc.body) return;

    const report = this._scanPreviewAccessibility(doc);
    this._state.overlayByFrame.set(iframe, report);
    this._renderPreviewAuditOverlay(doc, report);
  },

  /**
   * Sanitize HTML to prevent XSS and unsafe content
   */
  sanitizeHTML(html) {
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.innerHTML;
  },

  /**
   * Remove potentially dangerous elements and attributes
   */
  removeUnsafePatterns(html) {
    let sanitized = html;
    sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
    sanitized = sanitized.replace(/javascript:/gi, '');
    sanitized = sanitized.replace(/data:(?!text\/css)(?!image\/)/gi, '');
    return sanitized;
  },

  /**
   * Initialize live sandboxes (iframes with editable code)
   */
  init() {
    if (this._state.initialized) return;

    const componentCards = document.querySelectorAll(".component-card");
    if (componentCards.length === 0) return;

    this._state.initStartedAt = performance.now();
    this._state.loadedPreviewCount = 0;
    this._injectSandboxStyles();
    this._ensurePreviewObservers();

    componentCards.forEach((card, index) => {
      const h3 = card.querySelector("h3");
      const actions = card.querySelector(".actions");
      const existingCodeBlock = card.querySelector(".code-block");

      const previewNodes = Array.from(card.childNodes).filter((node) => {
        return (
          (node.nodeType === Node.ELEMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "")) &&
          node !== h3 &&
          node !== actions &&
          node !== existingCodeBlock &&
          node.nodeName !== "SCRIPT"
        );
      });

      if (previewNodes.length === 0 && !existingCodeBlock) return;

      let initialHTML = existingCodeBlock
        ? existingCodeBlock.textContent.trim()
        : previewNodes.map((n) => n.outerHTML || n.textContent).join("\n").trim();

      previewNodes.forEach((node) => node.remove());

      // Create editable textarea
      const textarea = document.createElement("textarea");
      if (existingCodeBlock) {
        textarea.id = existingCodeBlock.id;
        textarea.className = existingCodeBlock.className;
        textarea.style.display = existingCodeBlock.style.display || "none";
      } else {
        textarea.id = "live-code-" + index;
        textarea.className = "code-block";
        textarea.style.display = "none";

        if (actions) {
          const toggleBtn = actions.querySelector('button[onclick^="toggleCode"]');
          const copyBtn = actions.querySelector('button[onclick^="copyCode"]');
          if (toggleBtn) toggleBtn.setAttribute("onclick", `toggleCode("${textarea.id}")`);
          if (copyBtn) copyBtn.setAttribute("onclick", `copyCode("${textarea.id}", this)`);
        }
      }

      textarea.value = initialHTML;
      textarea.style.width = "100%";
      textarea.style.minHeight = "120px";
      textarea.style.boxSizing = "border-box";
      textarea.style.resize = "vertical";

      const placeholder = document.createElement('div');
      placeholder.className = 'sandbox-preview-slot is-loading';
      placeholder.setAttribute('aria-busy', 'true');

      const skeleton = this._createPreviewSkeleton();
      const loadLabel = document.createElement('div');
      loadLabel.className = 'sandbox-preview-load-label';
      loadLabel.textContent = 'Loading preview...';

      placeholder.appendChild(skeleton);
      placeholder.appendChild(loadLabel);

      const renderIframe = (htmlContent) => {
        const safeHTML = Sandbox.removeUnsafePatterns(Sandbox.sanitizeHTML(htmlContent));
        
        // Use complete isolation - no external styles
        iframe.srcdoc = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              /* Complete isolation - no parent styles leak */
              :root {
                color-scheme: light;
                --uiv-primary: #eb6835;
                --uiv-secondary: #6c5ce7;
              }

              * {
                box-sizing: border-box;
              }

              body {
                min-height: 100vh;
                margin: 0;
                background: transparent;
                padding: 20px;
                position: relative;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              }

              #sandbox-root {
                min-height: calc(100vh - 40px);
              }

              .sandbox-error-overlay {
                position: fixed;
                inset: 12px;
                z-index: 9999;
                display: none;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 16px;
                background: rgba(127, 29, 29, 0.94);
                color: #fff;
                border: 1px solid rgba(255, 255, 255, 0.15);
                border-radius: 12px;
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
                font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
              }

              .sandbox-error-overlay.is-visible {
                display: flex;
              }

              .sandbox-error-card {
                width: 100%;
                max-width: 100%;
              }

              .sandbox-error-title {
                margin: 0 0 8px;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 0.02em;
                text-transform: uppercase;
              }

              .sandbox-error-message {
                margin: 0;
                font-size: 13px;
                line-height: 1.6;
                white-space: pre-wrap;
                word-break: break-word;
              }

              .sandbox-error-meta {
                margin-top: 10px;
                font-size: 12px;
                opacity: 0.85;
              }

              .sandbox-error-hint {
                margin-top: 12px;
                font-size: 12px;
                opacity: 0.8;
              }
            </style>
            <script>
              (function () {
                const overlayId = 'sandbox-error-overlay';

                function getOverlay() {
                  let overlay = document.getElementById(overlayId);
                  if (overlay) return overlay;

                  overlay = document.createElement('div');
                  overlay.id = overlayId;
                  overlay.className = 'sandbox-error-overlay';
                  overlay.innerHTML = [
                    '<div class="sandbox-error-card">',
                    '<p class="sandbox-error-title">Live preview error</p>',
                    '<p class="sandbox-error-message"></p>',
                    '<div class="sandbox-error-meta"></div>',
                    '<div class="sandbox-error-hint">Fix the code in the editor below and the preview will refresh automatically.</div>',
                    '</div>'
                  ].join('');
                  document.body.appendChild(overlay);
                  return overlay;
                }

                function formatError(event) {
                  if (!event) return 'An unknown runtime error occurred.';

                  if (event.message) {
                    const location = event.filename ? ' (' + event.filename + ':' + (event.lineno || '?') + ':' + (event.colno || '?') + ')' : '';
                    return event.message + location;
                  }

                  if (event.reason) {
                    if (typeof event.reason === 'string') return event.reason;
                    if (event.reason.message) return event.reason.message;
                  }

                  return 'An unknown runtime error occurred.';
                }

                function showError(event) {
                  const overlay = getOverlay();
                  const messageEl = overlay.querySelector('.sandbox-error-message');
                  const metaEl = overlay.querySelector('.sandbox-error-meta');

                  const formatted = formatError(event);
                  messageEl.textContent = formatted;
                  metaEl.textContent = event && event.error && event.error.stack ? event.error.stack : '';
                  overlay.classList.add('is-visible');

                  // notify parent window about the error for UI integration
                  try {
                    window.parent && window.parent.postMessage && window.parent.postMessage({
                      type: 'sandbox:error',
                      message: formatted,
                      meta: metaEl.textContent
                    }, '*');
                  } catch (e) { /* ignore */ }
                }

                function clearError() {
                  const overlay = document.getElementById(overlayId);
                  if (overlay) overlay.classList.remove('is-visible');
                  try { window.parent && window.parent.postMessage && window.parent.postMessage({ type: 'sandbox:clear' }, '*'); } catch (e) {}
                }

                window.addEventListener('error', showError);
                window.addEventListener('unhandledrejection', function (event) {
                  showError(event);
                });

                window.addEventListener('load', function () {
                  clearError();
                });
              })();
            </script>
          </head>
          <body>
            <div id="sandbox-root">${safeHTML}</div>
          </body>
          </html>`;
      };

      const slot = {
        index,
        card,
        placeholder,
        skeleton,
        loadLabel,
        iframe: null,
        textarea,
        htmlContent: '',
        io: this._state.previewObserver,
        loaded: false,
        cleanedUp: false,
        removeExistingCodeBlock: null
      };

      placeholder.__sandboxSlot = slot;
      this._applyThemeToSlot(slot);
      slot.removeExistingCodeBlock = () => {
        if (existingCodeBlock) {
          existingCodeBlock.replaceWith(textarea);
        } else if (actions) {
          actions.after(textarea);
        }
      };

      renderIframe(initialHTML);

      // Debounced live update
      let timeout;
      textarea.addEventListener("input", (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          renderIframe(e.target.value);
          if (slot.loaded && slot.iframe) {
            slot.iframe.srcdoc = slot.htmlContent;
          }
        }, 300);
      });

      if (h3) {
        h3.after(placeholder);
      } else {
        card.insertBefore(placeholder, card.firstChild);
      }

      slot.htmlContent = slot.htmlContent || '';
      this._state.previewSlots.add(slot);
      this._bindThemeEvents();

      if (this._state.previewObserver) {
        this._state.previewObserver.observe(placeholder);
      } else {
        this._mountPreview(slot);
      }

      // Parent-level overlay: show iframe-reported runtime errors in the host page
      (function () {
        function getParentOverlay() {
          const id = 'parent-sandbox-error-overlay';
          let el = document.getElementById(id);
          if (el) return el;
          el = document.createElement('div');
          el.id = id;
          el.style.position = 'absolute';
          el.style.zIndex = 99999;
          el.style.pointerEvents = 'auto';
          el.style.left = iframe.offsetLeft + 'px';
          el.style.top = (iframe.offsetTop + 8) + 'px';
          el.style.right = (document.body.clientWidth - iframe.offsetWidth - iframe.offsetLeft) + 'px';
          el.style.background = 'rgba(127,29,29,0.96)';
          el.style.color = '#fff';
          el.style.padding = '12px';
          el.style.borderRadius = '8px';
          el.style.maxWidth = 'min(90%, 600px)';
          el.style.fontFamily = 'ui-monospace, SFMono-Regular, Consolas, monospace';
          el.style.display = 'none';
          el.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
          el.innerHTML = '<div class="ps-title" style="font-weight:700;margin-bottom:6px;font-size:13px">Live preview error</div><div class="ps-message" style="font-size:13px;white-space:pre-wrap"></div><div style="margin-top:8px;text-align:right"><button class="ps-close" style="background:transparent;border:1px solid rgba(255,255,255,0.12);color:#fff;padding:6px 8px;border-radius:6px;cursor:pointer">Dismiss</button></div>';
          document.body.appendChild(el);
          el.querySelector('.ps-close').addEventListener('click', () => el.style.display = 'none');
          return el;
        }

        function handleMessage(e) {
          const data = e.data || {};
          if (!data || (data.type !== 'sandbox:error' && data.type !== 'sandbox:clear')) return;
          // ensure message from this iframe
          if (e.source !== iframe.contentWindow) return;
          const overlay = getParentOverlay();
          if (data.type === 'sandbox:clear') {
            overlay.style.display = 'none';
            return;
          }
          overlay.querySelector('.ps-message').textContent = data.message + (data.meta ? '\n\n' + data.meta : '');
          // position overlay near iframe
          const rect = iframe.getBoundingClientRect();
          overlay.style.left = (rect.left + window.scrollX + 8) + 'px';
          overlay.style.top = (rect.top + window.scrollY + 8) + 'px';
          overlay.style.display = 'block';
        }

        window.addEventListener('message', handleMessage, false);
      })();
    });

    const initElapsed = Math.round(performance.now() - this._state.initStartedAt);
    console.info(`[Sandbox] Initialized ${componentCards.length} preview slot(s) in ${initElapsed}ms; eager loaded ${this._state.loadedPreviewCount}.`);

    this._state.initialized = true;
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Sandbox;
}
