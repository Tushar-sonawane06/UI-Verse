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

export { UVThemeSwitcher };
//# sourceMappingURL=uv-theme-switcher.js.map
