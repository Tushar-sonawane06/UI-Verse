export declare function getLocale(): string;
export declare function loadLocale(locale: string): Promise<void>;
export declare function t(key: string, vars?: Record<string, string | number>): string;
export declare function setLocale(locale: string): Promise<void>;
export declare function availableLocales(): string[];
