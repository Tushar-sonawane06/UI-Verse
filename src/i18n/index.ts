type Messages = { [key: string]: string };

const DEFAULT_LOCALE = 'en';
let currentLocale = DEFAULT_LOCALE;
let messages: Messages = {};

export function getLocale() {
  return currentLocale;
}

export async function loadLocale(locale: string): Promise<void> {
  if (locale === currentLocale && Object.keys(messages).length) return;
  try {
    // dynamic import from build-time locale files
    // when built, toolchain should copy locales to dist/locales
    // during dev, import from src/locales
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    const mod = await import(`../locales/${locale}.json`);
    messages = mod.default || mod;
    currentLocale = locale;
  } catch (e) {
    // Fallback to default
    if (locale !== DEFAULT_LOCALE) {
      await loadLocale(DEFAULT_LOCALE);
    }
  }
}

export function t(key: string, vars?: Record<string, string | number>): string {
  const raw = messages[key] ?? key;
  if (!vars) return raw;
  return raw.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => String(vars[k] ?? ''));
}

export async function setLocale(locale: string) {
  await loadLocale(locale);
}

export function availableLocales(): string[] {
  // For now, list known locales — keep in sync with src/locales
  return ['en', 'es', 'ar'];
}
