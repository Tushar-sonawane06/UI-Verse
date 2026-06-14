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
function ensureRoot() {
    return typeof document !== 'undefined' ? document.documentElement : null;
}
function safeStorage() {
    try {
        return globalThis.localStorage;
    }
    catch (_) {
        return null;
    }
}
function getSystemTheme() {
    if (typeof globalThis.matchMedia === 'function' && globalThis.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}
function getStoredTheme() {
    const storage = safeStorage();
    if (!storage)
        return null;
    try {
        return storage.getItem(STORAGE_KEY) || storage.getItem('theme');
    }
    catch (_) {
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
    return THEMES[getResolvedTheme(themeName)] || THEMES.light;
}
function getThemeNames() {
    return Object.keys(THEMES);
}
function applyTokens(tokens) {
    const root = ensureRoot();
    if (!root)
        return;
    Object.entries(tokens).forEach(([name, value]) => root.style.setProperty(name, value));
}
function syncCompatibilityFlags(themeName) {
    var _a, _b;
    const root = ensureRoot();
    if (!root)
        return;
    root.dataset.theme = themeName;
    root.style.colorScheme = ((_a = THEMES[themeName]) === null || _a === void 0 ? void 0 : _a.colorScheme) || 'light';
    (_b = document.body) === null || _b === void 0 ? void 0 : _b.classList.toggle('dark-mode', themeName !== 'light');
}
function persistTheme(themeName) {
    const storage = safeStorage();
    if (!storage)
        return;
    try {
        storage.setItem(STORAGE_KEY, themeName);
        storage.setItem('theme', themeName === 'system' ? getSystemTheme() : themeName);
    }
    catch (_) {
        // ignore storage failures
    }
}
function dispatchThemeChange(themeName, resolvedTheme) {
    if (!globalThis.window || typeof globalThis.window.dispatchEvent !== 'function')
        return;
    globalThis.window.dispatchEvent(new CustomEvent('design-tokens:themechange', {
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
function setTheme(themeName, options = {}) {
    return applyTheme(themeName, options);
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
        tokens: Object.assign({}, config.tokens)
    };
    return THEMES[name];
}
function exportTheme(themeName) {
    return Object.entries(getTheme(themeName).tokens).map(([name, value]) => `${name}: ${value};`).join('\n');
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
    setTheme,
    init,
    registerTheme,
    exportTheme
};
if (typeof globalThis !== 'undefined') {
    globalThis.DesignTokens = DesignTokens;
}

class UVButton extends HTMLElement {
    constructor() {
        super();
        const s = this.attachShadow({ mode: 'open' });
        s.innerHTML = `<button><slot></slot></button>`;
        if (typeof CSSStyleSheet !== 'undefined') {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(`
        :host {
          display: inline-block;
        }
        button {
          background-color: var(--accent, #eb6835);
          color: var(--bg-secondary, #ffffff);
          border: 1px solid var(--border-primary, transparent);
          padding: 8px 16px;
          border-radius: var(--radius-sm, 8px);
          font-family: var(--font-body, inherit);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition, 0.25s ease);
        }
        button:hover {
          filter: brightness(1.1);
        }
        button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px var(--accent);
        }
      `);
            s.adoptedStyleSheets = [sheet];
        }
        else {
            const style = document.createElement('style');
            style.textContent = `
        :host {
          display: inline-block;
        }
        button {
          background-color: var(--accent, #eb6835);
          color: var(--bg-secondary, #ffffff);
          border: 1px solid var(--border-primary, transparent);
          padding: 8px 16px;
          border-radius: var(--radius-sm, 8px);
          font-family: var(--font-body, inherit);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition, 0.25s ease);
        }
        button:hover {
          filter: brightness(1.1);
        }
        button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px var(--accent);
        }
      `;
            s.appendChild(style);
        }
    }
}
if (typeof customElements !== 'undefined' && !customElements.get('uv-button')) {
    customElements.define('uv-button', UVButton);
}

class UVModal extends HTMLElement {
    constructor() {
        super();
        this._opened = false;
        this._handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                this.close();
                this.dispatchEvent(new CustomEvent('close'));
            }
        };
        const s = this.attachShadow({ mode: 'open' });
        s.innerHTML = `
      <div class="modal-overlay" role="dialog" aria-modal="true">
        <div class="modal-content" tabindex="-1">
          <slot></slot>
        </div>
      </div>
    `;
        if (typeof CSSStyleSheet !== 'undefined') {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(`
        :host {
          display: none;
          font-family: var(--font-body, inherit);
        }
        :host([opened]) {
          display: block;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: var(--card-bg, var(--bg-secondary, #ffffff));
          color: var(--text-primary, #111111);
          padding: 24px;
          border-radius: var(--radius-md, 14px);
          box-shadow: var(--shadow-lg, 0 8px 32px rgba(0, 0, 0, 0.12));
          max-width: 500px;
          width: 100%;
          position: relative;
        }
      `);
            s.adoptedStyleSheets = [sheet];
        }
        else {
            const style = document.createElement('style');
            style.textContent = `
        :host {
          display: none;
          font-family: var(--font-body, inherit);
        }
        :host([opened]) {
          display: block;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: var(--card-bg, var(--bg-secondary, #ffffff));
          color: var(--text-primary, #111111);
          padding: 24px;
          border-radius: var(--radius-md, 14px);
          box-shadow: var(--shadow-lg, 0 8px 32px rgba(0, 0, 0, 0.12));
          max-width: 500px;
          width: 100%;
          position: relative;
        }
      `;
            s.appendChild(style);
        }
    }
    connectedCallback() {
        this.addEventListener('keydown', this._handleKeyDown);
    }
    disconnectedCallback() {
        this.removeEventListener('keydown', this._handleKeyDown);
    }
    get opened() {
        return this._opened;
    }
    set opened(val) {
        this._opened = val;
        if (val) {
            this.setAttribute('opened', '');
        }
        else {
            this.removeAttribute('opened');
        }
    }
    open() {
        this.opened = true;
    }
    close() {
        this.opened = false;
    }
}
if (typeof customElements !== 'undefined' && !customElements.get('uv-modal')) {
    customElements.define('uv-modal', UVModal);
}

class UVTooltip extends HTMLElement {
    constructor() {
        super();
        const s = this.attachShadow({ mode: 'open' });
        s.innerHTML = `
      <span><slot></slot></span>
      <div class="tooltip" hidden>Tooltip text</div>
    `;
        this._tooltipEl = s.querySelector('.tooltip');
        if (typeof CSSStyleSheet !== 'undefined') {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(`
        .tooltip {
          position: absolute;
          background: var(--surface-elevated, #333);
          color: var(--text-primary, #fff);
          padding: 4px 8px;
          border-radius: var(--radius-sm, 4px);
          font-size: 12px;
          z-index: 100;
          border: 1px solid var(--border-primary, #ebebeb);
          box-shadow: var(--shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.06));
          font-family: var(--font-body, inherit);
        }
        .tooltip[hidden] {
          display: none;
        }
      `);
            s.adoptedStyleSheets = [sheet];
        }
        else {
            const style = document.createElement('style');
            style.textContent = `
        .tooltip {
          position: absolute;
          background: var(--surface-elevated, #333);
          color: var(--text-primary, #fff);
          padding: 4px 8px;
          border-radius: var(--radius-sm, 4px);
          font-size: 12px;
          z-index: 100;
          border: 1px solid var(--border-primary, #ebebeb);
          box-shadow: var(--shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.06));
          font-family: var(--font-body, inherit);
        }
        .tooltip[hidden] {
          display: none;
        }
      `;
            s.appendChild(style);
        }
    }
    show() {
        this._tooltipEl.removeAttribute('hidden');
    }
    hide() {
        this._tooltipEl.setAttribute('hidden', '');
    }
}
if (typeof customElements !== 'undefined' && !customElements.get('uv-tooltip')) {
    customElements.define('uv-tooltip', UVTooltip);
}

class UVLanguageSwitcher extends HTMLElement {
    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
        this._onI18nChange = this._onI18nChange.bind(this);
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
      <label>
        <span data-role="label">Language</span>
        <select aria-label="Language selector">
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </label>
    `;
        if (typeof CSSStyleSheet !== 'undefined') {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(`
        :host {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font: inherit;
        }

        label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: inherit;
        }

        select {
          font: inherit;
          border: 1px solid currentColor;
          border-radius: 999px;
          padding: 0.35rem 0.75rem;
          background: transparent;
          color: inherit;
        }
      `);
            shadow.adoptedStyleSheets = [sheet];
        }
        else {
            const style = document.createElement('style');
            style.textContent = `
        :host {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font: inherit;
        }

        label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: inherit;
        }

        select {
          font: inherit;
          border: 1px solid currentColor;
          border-radius: 999px;
          padding: 0.35rem 0.75rem;
          background: transparent;
          color: inherit;
        }
      `;
            shadow.appendChild(style);
        }
    }
    connectedCallback() {
        var _a, _b;
        this._syncSelection();
        this._syncLabel();
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('select')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', this._onChange);
        window.addEventListener('uiverse:i18n-change', this._onI18nChange);
    }
    disconnectedCallback() {
        var _a, _b;
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('select')) === null || _b === void 0 ? void 0 : _b.removeEventListener('change', this._onChange);
        window.removeEventListener('uiverse:i18n-change', this._onI18nChange);
    }
    _getCurrentLanguage() {
        return document.documentElement.lang || document.documentElement.dataset.lang || 'en';
    }
    _syncSelection() {
        var _a;
        const select = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('select');
        if (!select)
            return;
        select.value = this._getCurrentLanguage();
    }
    _syncLabel() {
        var _a;
        const label = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('[data-role="label"]');
        if (!label)
            return;
        label.textContent = (window.I18n && typeof window.I18n.t === 'function')
            ? window.I18n.t('language_label')
            : 'Language';
    }
    async _onChange(event) {
        const select = event.target;
        const lang = (select === null || select === void 0 ? void 0 : select.value) || 'en';
        if (window.I18n && typeof window.I18n.applyLanguage === 'function') {
            await window.I18n.applyLanguage(lang);
        }
        else {
            document.documentElement.lang = lang;
            document.documentElement.dataset.lang = lang;
        }
        this._syncSelection();
    }
    _onI18nChange(event) {
        var _a, _b, _c;
        const nextLang = ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.lang) || 'en';
        this._syncSelection();
        const label = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('[data-role="label"]');
        if (label && ((_c = event.detail) === null || _c === void 0 ? void 0 : _c.translations)) {
            label.textContent = event.detail.translations.language_label || label.textContent;
        }
        if (document.documentElement.lang !== nextLang) {
            document.documentElement.lang = nextLang;
        }
    }
}
if (typeof customElements !== 'undefined' && !customElements.get('uv-language-switcher')) {
    customElements.define('uv-language-switcher', UVLanguageSwitcher);
}

class UVThemeSwitcher extends HTMLElement {
    constructor() {
        super();
        this._handleChange = this._handleChange.bind(this);
        this._handleThemeChange = this._handleThemeChange.bind(this);
    }
    connectedCallback() {
        this.render();
        this._syncFromTokens();
        this.addEventListener('change', this._handleChange);
        window.addEventListener('design-tokens:themechange', this._handleThemeChange);
    }
    disconnectedCallback() {
        this.removeEventListener('change', this._handleChange);
        window.removeEventListener('design-tokens:themechange', this._handleThemeChange);
    }
    render() {
        if (this.dataset.rendered === 'true')
            return;
        const themeNames = this._getThemeNames();
        const currentTheme = this._getCurrentTheme();
        this.innerHTML = `
      <label class="uv-theme-switcher" aria-label="Theme selector" aria-live="polite">
        <span class="uv-theme-switcher__label">Theme</span>
        <select class="uv-theme-switcher__select">
          ${themeNames.map((themeName) => `
            <option value="${themeName}" ${themeName === currentTheme ? 'selected' : ''}>${this._titleCase(themeName)}</option>
          `).join('')}
        </select>
      </label>
    `;
        this.dataset.rendered = 'true';
    }
    _getThemeNames() {
        var _a;
        if ((_a = globalThis.DesignTokens) === null || _a === void 0 ? void 0 : _a.getThemeNames) {
            return globalThis.DesignTokens.getThemeNames();
        }
        return ['light', 'dark'];
    }
    _getCurrentTheme() {
        var _a;
        if ((_a = globalThis.DesignTokens) === null || _a === void 0 ? void 0 : _a.getStoredTheme) {
            const stored = globalThis.DesignTokens.getStoredTheme();
            if (stored)
                return stored;
        }
        try {
            const storedTheme = localStorage.getItem('ui-verse-theme') || localStorage.getItem('theme');
            if (storedTheme)
                return storedTheme;
        }
        catch (e) { }
        if (typeof window !== 'undefined' && window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return document.documentElement.dataset.theme || 'light';
    }
    _titleCase(value) {
        return String(value || '').replace(/(^|[-_\s])([a-z])/gi, (_, __, letter) => letter.toUpperCase());
    }
    _syncFromTokens() {
        const select = this.querySelector('select');
        if (!select)
            return;
        const active = document.documentElement.dataset.theme || this._getCurrentTheme();
        if (select.value !== active && select.querySelector(`option[value="${active}"]`)) {
            select.value = active;
        }
    }
    _handleChange(event) {
        const select = event.target.closest('select');
        if (!select)
            return;
        const manager = globalThis.DesignTokens;
        if (manager === null || manager === void 0 ? void 0 : manager.setTheme) {
            manager.setTheme(select.value);
        }
        else if (manager === null || manager === void 0 ? void 0 : manager.applyTheme) {
            manager.applyTheme(select.value);
        }
    }
    _handleThemeChange(event) {
        var _a, _b;
        const nextTheme = ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.resolvedTheme) || ((_b = event.detail) === null || _b === void 0 ? void 0 : _b.theme) || 'light';
        const select = this.querySelector('select');
        if (select && select.value !== nextTheme) {
            select.value = nextTheme;
        }
    }
}
if (typeof customElements !== 'undefined' && !customElements.get('uv-theme-switcher')) {
    customElements.define('uv-theme-switcher', UVThemeSwitcher);
}

class UVDropdown extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
      <slot name="trigger"></slot>
      <slot name="content"></slot>
    `;
        if (typeof CSSStyleSheet !== 'undefined') {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(`
        :host {
          display: inline-block;
          position: relative;
        }
        ::slotted([slot="trigger"]) {
          cursor: pointer;
        }
        ::slotted([slot="content"]) {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 10;
          min-width: 160px;
          margin-top: 4px;
        }
        :host([open]) ::slotted([slot="content"]) {
          display: block;
        }
      `);
            shadow.adoptedStyleSheets = [sheet];
        }
        else {
            const style = document.createElement('style');
            style.textContent = `
        :host {
          display: inline-block;
          position: relative;
        }
        ::slotted([slot="trigger"]) {
          cursor: pointer;
        }
        ::slotted([slot="content"]) {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 10;
          min-width: 160px;
          margin-top: 4px;
        }
        :host([open]) ::slotted([slot="content"]) {
          display: block;
        }
      `;
            shadow.appendChild(style);
        }
    }
    static get observedAttributes() {
        return ['open'];
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(val) {
        if (val) {
            this.setAttribute('open', '');
        }
        else {
            this.removeAttribute('open');
        }
    }
    connectedCallback() {
        var _a;
        const triggerSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="trigger"]');
        triggerSlot === null || triggerSlot === void 0 ? void 0 : triggerSlot.addEventListener('click', this.toggle.bind(this));
        document.addEventListener('click', this.closeOutside.bind(this));
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.closeOutside.bind(this));
    }
    toggle(e) {
        e.stopPropagation();
        this.open = !this.open;
        this.dispatchEvent(new CustomEvent('uiverse:dropdown-toggle', { detail: { open: this.open }, bubbles: true }));
    }
    closeOutside(e) {
        if (!this.contains(e.target)) {
            this.open = false;
        }
    }
}
if (typeof customElements !== 'undefined' && !customElements.get('uv-dropdown')) {
    customElements.define('uv-dropdown', UVDropdown);
}

class UVTabs extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
      <div class="tabs-header">
        <slot name="tab"></slot>
      </div>
      <div class="tabs-content">
        <slot name="panel"></slot>
      </div>
    `;
        if (typeof CSSStyleSheet !== 'undefined') {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(`
        :host {
          display: block;
          font-family: var(--font-body, inherit);
          color: var(--text-primary, inherit);
        }
        .tabs-header {
          display: flex;
          border-bottom: 1px solid var(--border-primary, #ebebeb);
          margin-bottom: 12px;
        }
        ::slotted([slot="tab"]) {
          padding: 8px 16px;
          cursor: pointer;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-weight: 500;
          color: var(--text-secondary, #666666);
          font-family: var(--font-body, inherit);
          transition: var(--transition, 0.25s ease);
        }
        ::slotted([slot="tab"][active]) {
          border-bottom-color: var(--accent, #eb6835);
          color: var(--accent, #eb6835);
        }
        ::slotted([slot="panel"]) {
          display: none;
        }
        ::slotted([slot="panel"][active]) {
          display: block;
        }
      `);
            shadow.adoptedStyleSheets = [sheet];
        }
        else {
            const style = document.createElement('style');
            style.textContent = `
        :host {
          display: block;
          font-family: var(--font-body, inherit);
          color: var(--text-primary, inherit);
        }
        .tabs-header {
          display: flex;
          border-bottom: 1px solid var(--border-primary, #ebebeb);
          margin-bottom: 12px;
        }
        ::slotted([slot="tab"]) {
          padding: 8px 16px;
          cursor: pointer;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-weight: 500;
          color: var(--text-secondary, #666666);
          font-family: var(--font-body, inherit);
          transition: var(--transition, 0.25s ease);
        }
        ::slotted([slot="tab"][active]) {
          border-bottom-color: var(--accent, #eb6835);
          color: var(--accent, #eb6835);
        }
        ::slotted([slot="panel"]) {
          display: none;
        }
        ::slotted([slot="panel"][active]) {
          display: block;
        }
      `;
            shadow.appendChild(style);
        }
    }
    connectedCallback() {
        var _a;
        const tabSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="tab"]');
        tabSlot === null || tabSlot === void 0 ? void 0 : tabSlot.addEventListener('slotchange', this._setupTabs.bind(this));
        this.addEventListener('click', this._handleTabClick.bind(this));
        this._setupTabs();
    }
    _setupTabs() {
        const tabs = this._getTabs();
        const panels = this._getPanels();
        if (tabs.length > 0 && !tabs.some(t => t.hasAttribute('active'))) {
            tabs[0].setAttribute('active', '');
            if (panels[0])
                panels[0].setAttribute('active', '');
        }
    }
    _getTabs() {
        var _a;
        const tabSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="tab"]');
        return ((tabSlot === null || tabSlot === void 0 ? void 0 : tabSlot.assignedElements()) || []);
    }
    _getPanels() {
        var _a;
        const panelSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="panel"]');
        return ((panelSlot === null || panelSlot === void 0 ? void 0 : panelSlot.assignedElements()) || []);
    }
    _handleTabClick(e) {
        const target = e.target;
        const tabs = this._getTabs();
        if (tabs.includes(target)) {
            const activeIndex = tabs.indexOf(target);
            const panels = this._getPanels();
            tabs.forEach((tab, index) => {
                if (index === activeIndex) {
                    tab.setAttribute('active', '');
                }
                else {
                    tab.removeAttribute('active');
                }
            });
            panels.forEach((panel, index) => {
                if (index === activeIndex) {
                    panel.setAttribute('active', '');
                }
                else {
                    panel.removeAttribute('active');
                }
            });
            this.dispatchEvent(new CustomEvent('uiverse:tab-change', { detail: { index: activeIndex }, bubbles: true }));
        }
    }
}
if (typeof customElements !== 'undefined' && !customElements.get('uv-tabs')) {
    customElements.define('uv-tabs', UVTabs);
}

class UVSample extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const root = document.createElement('div');
        root.textContent = 'UV-Sample component';
        shadow.appendChild(root);
    }
}
function registerComponents() {
    if (typeof customElements !== 'undefined' && !customElements.get('uv-sample')) {
        customElements.define('uv-sample', UVSample);
    }
}
function registerUIVerseComponents() {
    if (typeof customElements !== 'undefined') {
        if (!customElements.get('uv-button'))
            customElements.define('uv-button', UVButton);
        if (!customElements.get('uv-modal'))
            customElements.define('uv-modal', UVModal);
        if (!customElements.get('uv-tooltip'))
            customElements.define('uv-tooltip', UVTooltip);
        if (!customElements.get('uv-language-switcher'))
            customElements.define('uv-language-switcher', UVLanguageSwitcher);
        if (!customElements.get('uv-theme-switcher'))
            customElements.define('uv-theme-switcher', UVThemeSwitcher);
        if (!customElements.get('uv-dropdown'))
            customElements.define('uv-dropdown', UVDropdown);
        if (!customElements.get('uv-tabs'))
            customElements.define('uv-tabs', UVTabs);
    }
    return {
        button: typeof customElements !== 'undefined' ? customElements.get('uv-button') : null,
        modal: typeof customElements !== 'undefined' ? customElements.get('uv-modal') : null,
        tooltip: typeof customElements !== 'undefined' ? customElements.get('uv-tooltip') : null,
        languageSwitcher: typeof customElements !== 'undefined' ? customElements.get('uv-language-switcher') : null,
        themeSwitcher: typeof customElements !== 'undefined' ? customElements.get('uv-theme-switcher') : null,
        dropdown: typeof customElements !== 'undefined' ? customElements.get('uv-dropdown') : null,
        tabs: typeof customElements !== 'undefined' ? customElements.get('uv-tabs') : null,
    };
}
// Auto-register for convenience in browser/UMD builds
if (typeof window !== 'undefined') {
    registerComponents();
    registerUIVerseComponents();
}
if (typeof globalThis !== 'undefined') {
    globalThis.UIVerse = {
        DesignTokens,
        registerUIVerseComponents,
        registerComponents
    };
}

export { DesignTokens, UVButton, UVDropdown, UVLanguageSwitcher, UVModal, UVSample, UVTabs, UVThemeSwitcher, UVTooltip, UVSample as default, registerComponents, registerUIVerseComponents };
//# sourceMappingURL=index.esm.js.map
