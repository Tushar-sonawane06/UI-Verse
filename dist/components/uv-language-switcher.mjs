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

export { UVLanguageSwitcher };
//# sourceMappingURL=uv-language-switcher.mjs.map
