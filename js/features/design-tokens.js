(function (global) {
  const STORAGE_KEY = 'ui-verse-theme';
  const SYSTEM_THEME = 'system';
  const THEMES = {
    light: {
      name: 'light',
      label: 'Light',
      colorScheme: 'light',
      tokens: {
        '--accent': '#eb6835',
        '--text-primary': '#111111',
        '--text-secondary': '#666666',
        '--bg-primary': '#f5f4f2',
        '--bg-secondary': '#ffffff',
        '--border-primary': '#ebebeb',
        '--card-bg': '#ffffff',
        '--surface-elevated': '#ffffff',
        '--surface-muted': '#f0ede9',
        '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.06)',
        '--shadow-md': '0 4px 16px rgba(0, 0, 0, 0.08)',
        '--shadow-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        '--radius-sm': '8px',
        '--radius-md': '14px',
        '--radius-lg': '20px',
        '--font-body': "'DM Sans', Arial, sans-serif",
        '--font-heading': "'Syne', sans-serif",
        '--transition': '0.25s ease',
        '--color-accent': '#eb6835',
        '--color-bg': '#f5f4f2',
        '--color-surface': '#ffffff',
        '--color-surface-2': '#f0ede9',
        '--color-text': '#111111',
        '--color-text-muted': '#666666',
        '--color-border': '#ebebeb'
      }
    },
    dark: {
      name: 'dark',
      label: 'Dark',
      colorScheme: 'dark',
      tokens: {
        '--accent': '#ff8a5b',
        '--text-primary': '#f2f2f2',
        '--text-secondary': '#a1a1aa',
        '--bg-primary': '#0f0f12',
        '--bg-secondary': '#17171c',
        '--border-primary': '#2a2a30',
        '--card-bg': '#17171c',
        '--surface-elevated': '#1d1d23',
        '--surface-muted': '#141418',
        '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.28)',
        '--shadow-md': '0 4px 16px rgba(0, 0, 0, 0.38)',
        '--shadow-lg': '0 8px 32px rgba(0, 0, 0, 0.5)',
        '--radius-sm': '8px',
        '--radius-md': '14px',
        '--radius-lg': '20px',
        '--font-body': "'DM Sans', Arial, sans-serif",
        '--font-heading': "'Syne', sans-serif",
        '--transition': '0.25s ease',
        '--color-accent': '#ff8a5b',
        '--color-bg': '#0f0f12',
        '--color-surface': '#17171c',
        '--color-surface-2': '#1d1d23',
        '--color-text': '#f2f2f2',
        '--color-text-muted': '#a1a1aa',
        '--color-border': '#2a2a30'
      }
    },
    ocean: {
      name: 'ocean',
      label: 'Ocean',
      colorScheme: 'dark',
      tokens: {
        '--accent': '#38bdf8',
        '--text-primary': '#e5f7ff',
        '--text-secondary': '#9ecfe5',
        '--bg-primary': '#04111f',
        '--bg-secondary': '#08192d',
        '--border-primary': '#16324d',
        '--card-bg': '#08192d',
        '--surface-elevated': '#0d223d',
        '--surface-muted': '#061423',
        '--shadow-sm': '0 2px 8px rgba(2, 15, 28, 0.25)',
        '--shadow-md': '0 4px 16px rgba(2, 15, 28, 0.35)',
        '--shadow-lg': '0 8px 32px rgba(2, 15, 28, 0.45)',
        '--radius-sm': '8px',
        '--radius-md': '14px',
        '--radius-lg': '20px',
        '--font-body': "'DM Sans', Arial, sans-serif",
        '--font-heading': "'Syne', sans-serif",
        '--transition': '0.25s ease',
        '--color-accent': '#38bdf8',
        '--color-bg': '#04111f',
        '--color-surface': '#08192d',
        '--color-surface-2': '#0d223d',
        '--color-text': '#e5f7ff',
        '--color-text-muted': '#9ecfe5',
        '--color-border': '#16324d'
      }
    },
    forest: {
      name: 'forest',
      label: 'Forest',
      colorScheme: 'dark',
      tokens: {
        '--accent': '#22c55e',
        '--text-primary': '#effdf3',
        '--text-secondary': '#a7cdb0',
        '--bg-primary': '#07110c',
        '--bg-secondary': '#0d1a13',
        '--border-primary': '#173324',
        '--card-bg': '#0d1a13',
        '--surface-elevated': '#11261c',
        '--surface-muted': '#09150f',
        '--shadow-sm': '0 2px 8px rgba(4, 14, 9, 0.25)',
        '--shadow-md': '0 4px 16px rgba(4, 14, 9, 0.35)',
        '--shadow-lg': '0 8px 32px rgba(4, 14, 9, 0.45)',
        '--radius-sm': '8px',
        '--radius-md': '14px',
        '--radius-lg': '20px',
        '--font-body': "'DM Sans', Arial, sans-serif",
        '--font-heading': "'Syne', sans-serif",
        '--transition': '0.25s ease',
        '--color-accent': '#22c55e',
        '--color-bg': '#07110c',
        '--color-surface': '#0d1a13',
        '--color-surface-2': '#11261c',
        '--color-text': '#effdf3',
        '--color-text-muted': '#a7cdb0',
        '--color-border': '#173324'
      }
    }
  };

  function ensureDocument() {
    return typeof document !== 'undefined' && document.documentElement;
  }

  function safeStorage() {
    try {
      return global.localStorage;
    } catch (_) {
      return null;
    }
  }

  function getSystemTheme() {
    if (typeof global.matchMedia === 'function' && global.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function getStoredTheme() {
    const storage = safeStorage();
    if (!storage) return null;
    try {
      return storage.getItem(STORAGE_KEY) || storage.getItem('theme');
    } catch (_) {
      return null;
    }
  }

  function getResolvedTheme(themeName) {
    if (!themeName || themeName === SYSTEM_THEME) {
      return getSystemTheme();
    }
    return THEMES[themeName] ? themeName : 'light';
  }

  function getTheme(themeName) {
    const resolved = getResolvedTheme(themeName);
    return THEMES[resolved] || THEMES.light;
  }

  function applyTokens(tokens) {
    const root = ensureDocument();
    if (!root) return;

    Object.entries(tokens).forEach(([name, value]) => {
      root.style.setProperty(name, value);
    });
  }

  function syncCompatibilityFlags(themeName) {
    const root = ensureDocument();
    if (!root) return;

    root.dataset.theme = themeName;
    root.style.colorScheme = THEMES[themeName]?.colorScheme || 'light';
    global.document.body.classList.toggle('dark-mode', themeName !== 'light');
  }

  function persistTheme(themeName) {
    const storage = safeStorage();
    if (!storage) return;
    try {
      storage.setItem(STORAGE_KEY, themeName);
      storage.setItem('theme', themeName === 'system' ? getSystemTheme() : themeName);
    } catch (_) {
      // ignore storage failures
    }
  }

  function dispatchThemeChange(themeName, resolvedTheme) {
    if (!global.window || typeof global.window.dispatchEvent !== 'function') return;
    global.window.dispatchEvent(new CustomEvent('design-tokens:themechange', {
      detail: {
        theme: themeName,
        resolvedTheme,
        tokens: THEMES[resolvedTheme].tokens
      }
    }));
  }

  function applyTheme(themeName, options = {}) {
    const resolvedTheme = getResolvedTheme(themeName);
    const theme = getTheme(themeName);

    applyTokens(theme.tokens);
    syncCompatibilityFlags(resolvedTheme);

    if (options.persist !== false) {
      persistTheme(themeName);
    }

    dispatchThemeChange(themeName, resolvedTheme);
    return { theme: themeName, resolvedTheme, tokens: theme.tokens };
  }

  function init(options = {}) {
    const storedTheme = getStoredTheme();
    const theme = options.theme || storedTheme || SYSTEM_THEME;
    const applied = applyTheme(theme, { persist: false });
    persistTheme(theme);
    return applied;
  }

  function registerTheme(name, config) {
    if (!name || !config || !config.tokens) {
      throw new Error('Theme registration requires a name and tokens');
    }

    THEMES[name] = {
      name,
      label: config.label || name,
      colorScheme: config.colorScheme || 'light',
      tokens: { ...config.tokens }
    };

    return THEMES[name];
  }

  function getThemeNames() {
    return Object.keys(THEMES);
  }

  function exportTheme(themeName) {
    const theme = getTheme(themeName);
    return Object.entries(theme.tokens)
      .map(([name, value]) => `${name}: ${value};`)
      .join('\n');
  }

  const DesignTokens = {
    STORAGE_KEY,
    SYSTEM_THEME,
    THEMES,
    getSystemTheme,
    getStoredTheme,
    getResolvedTheme,
    getTheme,
    getThemeNames,
    applyTheme,
    init,
    registerTheme,
    exportTheme
  };

  global.DesignTokens = DesignTokens;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DesignTokens;
  }
})(typeof window !== 'undefined' ? window : globalThis);
