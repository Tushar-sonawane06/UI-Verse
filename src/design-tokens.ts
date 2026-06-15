const STORAGE_KEY = 'ui-verse-theme';
const SYSTEM_THEME = 'system';

export interface ThemeConfig {
  name: string;
  label: string;
  colorScheme: 'light' | 'dark';
  tokens: Record<string, string>;
}

export const THEMES: Record<string, ThemeConfig> = {
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
      '--color-border': '#ebebeb',
      '--breakpoint-sm': '640px',
      '--breakpoint-md': '768px',
      '--breakpoint-lg': '1024px',
      '--breakpoint-xl': '1280px'
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
      '--color-border': '#2a2a30',
      '--breakpoint-sm': '640px',
      '--breakpoint-md': '768px',
      '--breakpoint-lg': '1024px',
      '--breakpoint-xl': '1280px'
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
      '--color-border': '#16324d',
      '--breakpoint-sm': '640px',
      '--breakpoint-md': '768px',
      '--breakpoint-lg': '1024px',
      '--breakpoint-xl': '1280px'
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
      '--color-border': '#173324',
      '--breakpoint-sm': '640px',
      '--breakpoint-md': '768px',
      '--breakpoint-lg': '1024px',
      '--breakpoint-xl': '1280px'
    }
  }
};

function ensureRoot(): HTMLElement | null {
  return typeof document !== 'undefined' ? document.documentElement : null;
}

function safeStorage(): Storage | null {
  try {
    return globalThis.localStorage;
  } catch (_) {
    return null;
  }
}

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof globalThis.matchMedia === 'function' && globalThis.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function getStoredTheme(): string | null {
  const storage = safeStorage();
  if (!storage) return null;
  try {
    return storage.getItem(STORAGE_KEY) || storage.getItem('theme');
  } catch (_) {
    return null;
  }
}

export function getResolvedTheme(themeName?: string | null): string {
  if (!themeName || themeName === SYSTEM_THEME) {
    return getSystemTheme();
  }
  return THEMES[themeName] ? themeName : 'light';
}

export function getTheme(themeName?: string | null): ThemeConfig {
  return THEMES[getResolvedTheme(themeName)] || THEMES.light;
}

export function getThemeNames(): string[] {
  return Object.keys(THEMES);
}

export function applyTokens(tokens: Record<string, string>): void {
  const root = ensureRoot();
  if (!root) return;
  Object.entries(tokens).forEach(([name, value]) => root.style.setProperty(name, value));
}

export function syncCompatibilityFlags(themeName: string): void {
  const root = ensureRoot();
  if (!root) return;
  root.dataset.theme = themeName;
  root.style.colorScheme = THEMES[themeName]?.colorScheme || 'light';
  document.body?.classList.toggle('dark-mode', themeName !== 'light');
}

export function persistTheme(themeName: string): void {
  const storage = safeStorage();
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEY, themeName);
    storage.setItem('theme', themeName === 'system' ? getSystemTheme() : themeName);
  } catch (_) {
    // ignore storage failures
  }
}

export function dispatchThemeChange(themeName: string, resolvedTheme: string): void {
  if (!globalThis.window || typeof globalThis.window.dispatchEvent !== 'function') return;
  globalThis.window.dispatchEvent(new CustomEvent('design-tokens:themechange', {
    detail: {
      theme: themeName,
      resolvedTheme,
      tokens: THEMES[resolvedTheme].tokens
    }
  }));
}

export function applyTheme(themeName: string, options: { persist?: boolean } = {}): { theme: string; resolvedTheme: string; tokens: Record<string, string> } {
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

export function setTheme(themeName: string, options: { persist?: boolean } = {}): { theme: string; resolvedTheme: string; tokens: Record<string, string> } {
  return applyTheme(themeName, options);
}

export function init(options: { theme?: string } = {}): { theme: string; resolvedTheme: string; tokens: Record<string, string> } {
  const storedTheme = getStoredTheme();
  const theme = options.theme || storedTheme || SYSTEM_THEME;
  const applied = applyTheme(theme, { persist: false });
  persistTheme(theme);
  return applied;
}

export function registerTheme(name: string, config: { label?: string; colorScheme?: 'light' | 'dark'; tokens: Record<string, string> }): ThemeConfig {
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

export function exportTheme(themeName: string): string {
  return Object.entries(getTheme(themeName).tokens).map(([name, value]) => `${name}: ${value};`).join('\n');
}

export const DesignTokens = {
  STORAGE_KEY,
  SYSTEM_THEME,
  THEMES,
  getSystemTheme,
  getStoredTheme,
  getResolvedTheme,
  getTheme,
  getThemeNames,
  applyTheme,
  setTheme,
  init,
  registerTheme,
  exportTheme
};

if (typeof globalThis !== 'undefined') {
  (globalThis as any).DesignTokens = DesignTokens;
}
