export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
};

import { setLocale, availableLocales } from '../src/i18n';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: availableLocales().map((l) => ({ value: l, title: l })),
    },
  },
};

export const globalTypesConfig = {};

export const decorators = [
  (Story, context) => {
    const locale = context.globals.locale || 'en';
    // set direction for RTL locales
    if (locale === 'ar') document.documentElement.setAttribute('dir', 'rtl');
    else document.documentElement.setAttribute('dir', 'ltr');
    // load translations
    // not awaited to avoid blocking story render; stories can await if needed
    setLocale(locale).catch(() => {});
    return Story();
  },
];
