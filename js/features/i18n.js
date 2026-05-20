// Simple i18n loader for UI-Verse
// Usage: add data-i18n="key" to elements. Call I18n.init() to load default language.

const I18n = (function () {
  let current = 'en';
  const cache = {};

  async function loadLocale(lang) {
    if (cache[lang]) return cache[lang];
    try {
      const res = await fetch(`/locales/${lang}.json`);
      if (!res.ok) throw new Error('Locale not found');
      const json = await res.json();
      cache[lang] = json;
      return json;
    } catch (e) {
      console.warn('i18n load failed for', lang, e.message);
      return null;
    }
  }

  function translateElement(el, dict) {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const attr = el.getAttribute('data-i18n-attr');
    const value = dict && dict[key] ? dict[key] : key;
    if (attr) {
      el.setAttribute(attr, value);
    } else {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.textContent = value;
      }
    }
  }

  async function applyLanguage(lang) {
    const dict = await loadLocale(lang) || {};
    document.querySelectorAll('[data-i18n]').forEach((el) => translateElement(el, dict));
    current = lang;
    // Save preference
    try { localStorage.setItem('uv_lang', lang); } catch(e){}
  }

  async function init(defaultLang) {
    const stored = localStorage.getItem('uv_lang');
    const lang = defaultLang || stored || 'en';
    await applyLanguage(lang);
  }

  function t(key) {
    return cache[current] && cache[current][key] ? cache[current][key] : key;
  }

  return { init, applyLanguage, loadLocale, t, get current() { return current; } };
})();

window.I18n = I18n;
export default I18n;
