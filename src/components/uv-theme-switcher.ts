export class UVThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
    this._handleThemeChange = this._handleThemeChange.bind(this);
  }

  connectedCallback() {
    this.render();
    this._syncFromTokens();

    this.addEventListener('change', this._handleChange);
    window.addEventListener('design-tokens:themechange', this._handleThemeChange as EventListener);
  }

  disconnectedCallback() {
    this.removeEventListener('change', this._handleChange);
    window.removeEventListener('design-tokens:themechange', this._handleThemeChange as EventListener);
  }

  render() {
    if (this.dataset.rendered === 'true') return;

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

  _getThemeNames(): string[] {
    if ((globalThis as any).DesignTokens?.getThemeNames) {
      return (globalThis as any).DesignTokens.getThemeNames();
    }

    return ['light', 'dark'];
  }

  _getCurrentTheme(): string {
    if ((globalThis as any).DesignTokens?.getStoredTheme) {
      const stored = (globalThis as any).DesignTokens.getStoredTheme();
      if (stored) return stored;
    }

    try {
      const storedTheme = localStorage.getItem('ui-verse-theme') || localStorage.getItem('theme');
      if (storedTheme) return storedTheme;
    } catch (e) {}

    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }

    return document.documentElement.dataset.theme || 'light';
  }

  _titleCase(value: string): string {
    return String(value || '').replace(/(^|[-_\s])([a-z])/gi, (_, __, letter) => letter.toUpperCase());
  }

  _syncFromTokens() {
    const select = this.querySelector('select') as HTMLSelectElement | null;
    if (!select) return;

    const active = document.documentElement.dataset.theme || this._getCurrentTheme();
    if (select.value !== active && select.querySelector(`option[value="${active}"]`)) {
      select.value = active;
    }
  }

  _handleChange(event: Event) {
    const select = (event.target as HTMLElement).closest('select') as HTMLSelectElement | null;
    if (!select) return;

    const manager = (globalThis as any).DesignTokens;
    if (manager?.setTheme) {
      manager.setTheme(select.value);
    } else if (manager?.applyTheme) {
      manager.applyTheme(select.value);
    }
  }

  _handleThemeChange(event: CustomEvent) {
    const nextTheme = event.detail?.resolvedTheme || event.detail?.theme || 'light';
    const select = this.querySelector('select') as HTMLSelectElement | null;
    if (select && select.value !== nextTheme) {
      select.value = nextTheme;
    }
  }
}

if (typeof customElements !== 'undefined' && !customElements.get('uv-theme-switcher')) {
  customElements.define('uv-theme-switcher', UVThemeSwitcher);
}
