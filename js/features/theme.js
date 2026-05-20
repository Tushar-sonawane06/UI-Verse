/**
 * Theme Feature Bridge
 * Keeps backward compatibility while delegating to the centralized design token manager.
 */

(function (global) {
  function getManager() {
    if (global.DesignTokens) return global.DesignTokens;
    if (typeof module !== 'undefined' && module.exports) {
      try {
        return require('./design-tokens.js');
      } catch (_) {
        return null;
      }
    }
    return null;
  }

  function getToggle() {
    return document.getElementById('theme-toggle') || document.getElementById('darkModeToggle');
  }

  function updateToggleLabel(themeName) {
    const toggle = getToggle();
    if (!toggle) return;

    const isDark = themeName !== 'light';
    const icon = toggle.querySelector('i');

    if (icon) {
      icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    if (toggle.tagName !== 'BUTTON') return;
    toggle.innerText = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  }

  const Theme = {
    _state: {
      initialized: false,
      listener: null,
      managerListener: null,
      managerLoader: null
    },

    load() {
      const manager = getManager();
      if (!manager) return null;
      const applied = manager.init();
      updateToggleLabel(applied?.resolvedTheme || applied?.theme || manager.getSystemTheme());
      return applied;
    },

    init() {
      if (this._state.initialized) return;

      const manager = getManager();
      if (!manager) {
        if (typeof document === 'undefined') return;

        if (!this._state.managerLoader) {
          const script = document.createElement('script');
          script.src = '/js/features/design-tokens.js';
          script.defer = true;
          script.onload = () => {
            this._state.managerLoader = null;
            this.init();
          };
          script.onerror = () => {
            this._state.managerLoader = null;
          };
          this._state.managerLoader = script;
          document.head.appendChild(script);
        }
        return;
      }

      this.load();

      const themeToggle = getToggle();
      if (themeToggle) {
        if (this._state.listener) {
          themeToggle.removeEventListener('click', this._state.listener);
        }

        const onClick = () => {
          const currentTheme = document.documentElement.dataset.theme || 'light';
          const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
          manager.applyTheme(nextTheme);
          updateToggleLabel(nextTheme);
        };

        themeToggle.addEventListener('click', onClick);
        this._state.listener = onClick;
      }

      if (this._state.managerListener) {
        window.removeEventListener('design-tokens:themechange', this._state.managerListener);
      }

      const onThemeChange = (event) => {
        updateToggleLabel(event.detail?.resolvedTheme || event.detail?.theme || 'light');
      };

      window.addEventListener('design-tokens:themechange', onThemeChange);
      this._state.managerListener = onThemeChange;
      this._state.initialized = true;
    },

    destroy() {
      const themeToggle = getToggle();
      if (themeToggle && this._state.listener) {
        themeToggle.removeEventListener('click', this._state.listener);
      }
      if (this._state.managerListener) {
        window.removeEventListener('design-tokens:themechange', this._state.managerListener);
      }
      this._state.listener = null;
      this._state.managerListener = null;
      this._state.managerLoader = null;
      this._state.initialized = false;
    }
  };

  global.Theme = Theme;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Theme;
  }
})(typeof window !== 'undefined' ? window : globalThis);
