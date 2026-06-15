export class UVLanguageSwitcher extends HTMLElement {
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
    } else {
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
    this._syncSelection();
    this._syncLabel();
    this.shadowRoot?.querySelector('select')?.addEventListener('change', this._onChange as EventListener);
    window.addEventListener('uiverse:i18n-change', this._onI18nChange as EventListener);
  }

  disconnectedCallback() {
    this.shadowRoot?.querySelector('select')?.removeEventListener('change', this._onChange as EventListener);
    window.removeEventListener('uiverse:i18n-change', this._onI18nChange as EventListener);
  }

  _getCurrentLanguage() {
    return document.documentElement.lang || document.documentElement.dataset.lang || 'en';
  }

  _syncSelection() {
    const select = this.shadowRoot?.querySelector('select') as HTMLSelectElement | null;
    if (!select) return;
    select.value = this._getCurrentLanguage();
  }

  _syncLabel() {
    const label = this.shadowRoot?.querySelector('[data-role="label"]');
    if (!label) return;
    label.textContent = ((window as any).I18n && typeof (window as any).I18n.t === 'function')
      ? (window as any).I18n.t('language_label')
      : 'Language';
  }

  async _onChange(event: Event) {
    const select = event.target as HTMLSelectElement | null;
    const lang = select?.value || 'en';
    if ((window as any).I18n && typeof (window as any).I18n.applyLanguage === 'function') {
      await (window as any).I18n.applyLanguage(lang);
    } else {
      document.documentElement.lang = lang;
      document.documentElement.dataset.lang = lang;
    }
    this._syncSelection();
  }

  _onI18nChange(event: CustomEvent) {
    const nextLang = event.detail?.lang || 'en';
    this._syncSelection();
    const label = this.shadowRoot?.querySelector('[data-role="label"]');
    if (label && event.detail?.translations) {
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
