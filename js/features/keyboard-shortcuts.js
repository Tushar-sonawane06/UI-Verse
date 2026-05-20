/**
 * Keyboard Shortcuts Feature
 * Power-user keyboard navigation and discoverable shortcut hints.
 */

const KeyboardShortcuts = {
  _state: {
    initialized: false,
    listeners: [],
    helpModalOpen: false
  },

  _ids: {
    helpOverlay: 'uiv-shortcuts-overlay',
    helpModal: 'uiv-shortcuts-modal',
    styles: 'uiv-shortcuts-style'
  },

  _shortcuts: [
    { key: '/', description: 'Focus search input' },
    { key: 'Ctrl+K / Cmd+K', description: 'Open command palette or focus search' },
    { key: '?', description: 'Show keyboard shortcuts help' },
    { key: 'Esc', description: 'Close open modals/overlays' }
  ],

  init() {
    if (this._state.initialized) return;

    this._injectStyles();
    this._ensureHelpModal();
    this._attachHints();
    this._bindShortcuts();

    this._state.initialized = true;
  },

  _injectStyles() {
    if (document.getElementById(this._ids.styles)) return;

    const style = document.createElement('style');
    style.id = this._ids.styles;
    style.textContent = `
      .uiv-shortcut-hint-target {
        position: relative;
      }

      .uiv-shortcut-hint-badge {
        position: absolute;
        top: -10px;
        right: -8px;
        font-size: 10px;
        line-height: 1;
        font-weight: 700;
        letter-spacing: 0.02em;
        border-radius: 999px;
        padding: 4px 7px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        color: #f2f5ff;
        background: linear-gradient(135deg, rgba(235, 104, 53, 0.88), rgba(88, 103, 255, 0.85));
        opacity: 0;
        transform: translateY(-3px);
        transition: opacity 0.15s ease, transform 0.15s ease;
        pointer-events: none;
        z-index: 15;
      }

      .uiv-shortcut-hint-target:hover .uiv-shortcut-hint-badge,
      .uiv-shortcut-hint-target:focus-within .uiv-shortcut-hint-badge {
        opacity: 1;
        transform: translateY(0);
      }

      #uiv-shortcuts-overlay {
        position: fixed;
        inset: 0;
        z-index: 9998;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 24px;
        background: rgba(6, 8, 14, 0.68);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
      }

      #uiv-shortcuts-overlay.open {
        display: flex;
      }

      #uiv-shortcuts-modal {
        width: min(560px, 100%);
        border-radius: 18px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        background: linear-gradient(180deg, rgba(16, 20, 30, 0.98), rgba(10, 13, 20, 0.96));
        color: #f4f6ff;
        box-shadow: 0 22px 60px rgba(0, 0, 0, 0.45);
        overflow: hidden;
      }

      .uiv-shortcuts-head {
        padding: 16px 18px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .uiv-shortcuts-head h2 {
        margin: 0;
        font-size: 1.1rem;
      }

      .uiv-shortcuts-close {
        border: 1px solid rgba(255, 255, 255, 0.22);
        background: transparent;
        color: #f7f7f7;
        border-radius: 10px;
        width: 34px;
        height: 34px;
        cursor: pointer;
      }

      .uiv-shortcuts-list {
        list-style: none;
        margin: 0;
        padding: 14px 18px 18px;
        display: grid;
        gap: 10px;
      }

      .uiv-shortcuts-item {
        border: 1px solid rgba(255, 255, 255, 0.11);
        border-radius: 12px;
        padding: 11px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .uiv-shortcuts-key {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .uiv-shortcuts-kbd {
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-bottom-width: 2px;
        border-radius: 7px;
        padding: 3px 8px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background: rgba(255, 255, 255, 0.08);
      }

      .uiv-shortcuts-desc {
        color: #d0d7e7;
        font-size: 0.93rem;
      }

      .uiv-shortcuts-kicker {
        margin: 0;
        padding: 0 18px 14px;
        color: #9fa8bf;
        font-size: 0.86rem;
      }
    `;

    document.head.appendChild(style);
  },

  _ensureHelpModal() {
    if (document.getElementById(this._ids.helpOverlay)) return;

    const overlay = document.createElement('div');
    overlay.id = this._ids.helpOverlay;
    overlay.setAttribute('aria-hidden', 'true');

    const itemsHtml = this._shortcuts.map((entry) => {
      const keyParts = entry.key.split('/').map((part) => part.trim());
      const keyHtml = keyParts
        .map((part) => {
          const chunks = part.split('+').map((chunk) => chunk.trim());
          return `<span class="uiv-shortcuts-key">${chunks.map((chunk) => `<span class="uiv-shortcuts-kbd">${chunk}</span>`).join('')}</span>`;
        })
        .join('<span style="opacity:.6;">or</span>');

      return `
        <li class="uiv-shortcuts-item">
          <div>${keyHtml}</div>
          <span class="uiv-shortcuts-desc">${entry.description}</span>
        </li>
      `;
    }).join('');

    overlay.innerHTML = `
      <div id="${this._ids.helpModal}" role="dialog" aria-modal="true" aria-label="Keyboard shortcuts help">
        <div class="uiv-shortcuts-head">
          <h2>Keyboard Shortcuts</h2>
          <button type="button" class="uiv-shortcuts-close" aria-label="Close shortcuts help">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul class="uiv-shortcuts-list">${itemsHtml}</ul>
        <p class="uiv-shortcuts-kicker">Tip: press <strong>?</strong> anytime to reopen this help panel.</p>
      </div>
    `;

    document.body.appendChild(overlay);

    const onOverlayClick = (event) => {
      if (event.target === overlay || event.target.closest('.uiv-shortcuts-close')) {
        this.hideHelp();
      }
    };

    overlay.addEventListener('click', onOverlayClick);
    this._state.listeners.push({ el: overlay, event: 'click', handler: onOverlayClick });
  },

  _attachHint(target, hintText) {
    if (!target || target.closest('.uiv-shortcut-hint-target')) return;

    const wrapper = document.createElement('span');
    wrapper.className = 'uiv-shortcut-hint-target';

    target.parentNode?.insertBefore(wrapper, target);
    wrapper.appendChild(target);

    const badge = document.createElement('span');
    badge.className = 'uiv-shortcut-hint-badge';
    badge.textContent = hintText;
    wrapper.appendChild(badge);
  },

  _attachHints() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      this._attachHint(searchInput, '/');
      searchInput.setAttribute('title', 'Shortcut: /');
    }

    const commandPaletteTrigger = document.querySelector('#command-palette-trigger, [data-command-palette-trigger]');
    if (commandPaletteTrigger) {
      this._attachHint(commandPaletteTrigger, 'Ctrl+K');
      commandPaletteTrigger.setAttribute('title', 'Shortcut: Ctrl+K');
    }

    const helpAnchor = document.querySelector('#uiv-shortcuts-help-trigger');
    if (helpAnchor) {
      this._attachHint(helpAnchor, '?');
      helpAnchor.setAttribute('title', 'Shortcut: ?');
    }
  },

  _isTypingContext(target) {
    if (!target) return false;
    if (target.isContentEditable) return true;
    const tag = target.tagName ? target.tagName.toLowerCase() : '';
    return tag === 'input' || tag === 'textarea' || tag === 'select';
  },

  _focusSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return false;

    searchInput.focus({ preventScroll: false });
    if (typeof searchInput.select === 'function') {
      searchInput.select();
    }

    return true;
  },

  _handleCtrlK() {
    if (window.CommandPalette && typeof window.CommandPalette.toggle === 'function') {
      window.CommandPalette.toggle();
      return true;
    }

    return this._focusSearch();
  },

  _closeOpenUI() {
    let closedSomething = false;

    if (this._state.helpModalOpen) {
      this.hideHelp();
      closedSomething = true;
    }

    if (window.CommandPalette && typeof window.CommandPalette.close === 'function') {
      const overlay = document.getElementById('commandPaletteOverlay');
      if (overlay && overlay.classList.contains('open')) {
        window.CommandPalette.close();
        closedSomething = true;
      }
    }

    if (window.closePopup && typeof window.closePopup === 'function') {
      const popup = document.getElementById('popup');
      if (popup && popup.classList.contains('open-popup')) {
        window.closePopup();
        closedSomething = true;
      }
    }

    const closableSelectors = [
      '.modal.open',
      '.overlay.open',
      '.popup.open',
      '.playground-modal.open',
      '.playground-backdrop.visible',
      '[role="dialog"].open'
    ];

    closableSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((node) => {
        node.classList.remove('open');
        node.classList.remove('visible');
        node.classList.remove('active');
        closedSomething = true;
      });
    });

    return closedSomething;
  },

  showHelp() {
    const overlay = document.getElementById(this._ids.helpOverlay);
    if (!overlay) return;

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    this._state.helpModalOpen = true;
  },

  hideHelp() {
    const overlay = document.getElementById(this._ids.helpOverlay);
    if (!overlay) return;

    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    this._state.helpModalOpen = false;
  },

  _bindShortcuts() {
    const onKeyDown = (event) => {
      const key = event.key;
      const target = event.target;

      if ((event.ctrlKey || event.metaKey) && key.toLowerCase() === 'k') {
        const commandPaletteReady =
          Boolean(window.CommandPalette) &&
          Boolean(document.getElementById('commandPaletteOverlay'));

        if (commandPaletteReady) {
          return;
        }

        event.preventDefault();
        this._handleCtrlK();
        return;
      }

      if (key === 'Escape') {
        if (this._closeOpenUI()) {
          event.preventDefault();
        }
        return;
      }

      if (!event.ctrlKey && !event.metaKey && !event.altKey && key === '/') {
        if (!this._isTypingContext(target)) {
          event.preventDefault();
          this._focusSearch();
        }
        return;
      }

      if (!event.ctrlKey && !event.metaKey && !event.altKey && key === '?') {
        if (!this._isTypingContext(target)) {
          event.preventDefault();
          this.showHelp();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    this._state.listeners.push({ el: document, event: 'keydown', handler: onKeyDown });
  },

  destroy() {
    this._state.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this._state.listeners = [];
    this._state.helpModalOpen = false;
    this._state.initialized = false;
  }
};

if (typeof window !== 'undefined') {
  window.KeyboardShortcuts = KeyboardShortcuts;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KeyboardShortcuts;
}
