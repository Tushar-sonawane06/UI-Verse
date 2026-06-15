export interface ThemeConfig {
    name: string;
    label: string;
    colorScheme: 'light' | 'dark';
    tokens: Record<string, string>;
}
export declare const THEMES: Record<string, ThemeConfig>;
export declare function getSystemTheme(): 'light' | 'dark';
export declare function getStoredTheme(): string | null;
export declare function getResolvedTheme(themeName?: string | null): string;
export declare function getTheme(themeName?: string | null): ThemeConfig;
export declare function getThemeNames(): string[];
export declare function applyTokens(tokens: Record<string, string>): void;
export declare function syncCompatibilityFlags(themeName: string): void;
export declare function persistTheme(themeName: string): void;
export declare function dispatchThemeChange(themeName: string, resolvedTheme: string): void;
export declare function applyTheme(themeName: string, options?: {
    persist?: boolean;
}): {
    theme: string;
    resolvedTheme: string;
    tokens: Record<string, string>;
};
export declare function setTheme(themeName: string, options?: {
    persist?: boolean;
}): {
    theme: string;
    resolvedTheme: string;
    tokens: Record<string, string>;
};
export declare function init(options?: {
    theme?: string;
}): {
    theme: string;
    resolvedTheme: string;
    tokens: Record<string, string>;
};
export declare function registerTheme(name: string, config: {
    label?: string;
    colorScheme?: 'light' | 'dark';
    tokens: Record<string, string>;
}): ThemeConfig;
export declare function exportTheme(themeName: string): string;
export declare const DesignTokens: {
    STORAGE_KEY: string;
    SYSTEM_THEME: string;
    THEMES: Record<string, ThemeConfig>;
    getSystemTheme: typeof getSystemTheme;
    getStoredTheme: typeof getStoredTheme;
    getResolvedTheme: typeof getResolvedTheme;
    getTheme: typeof getTheme;
    getThemeNames: typeof getThemeNames;
    applyTheme: typeof applyTheme;
    setTheme: typeof setTheme;
    init: typeof init;
    registerTheme: typeof registerTheme;
    exportTheme: typeof exportTheme;
};
