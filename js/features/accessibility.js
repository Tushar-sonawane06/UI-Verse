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
  init() {
    this.ensureDocumentLanguage();
    this.injectAccessibilityStyles();
    this.ensureMainLandmark();
    this.injectSkipLink();
    this.ensureNavLabels();
    this.ensureAccessibleNames();
    this.ensureKeyboardActivation();
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
  }
};

window.Accessibility = Accessibility;
