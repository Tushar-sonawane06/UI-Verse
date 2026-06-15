import { DesignTokens } from './design-tokens';
import { UVButton } from './components/uv-button';
import { UVModal } from './components/uv-modal';
import { UVTooltip } from './components/uv-tooltip';
import { UVLanguageSwitcher } from './components/uv-language-switcher';
import { UVThemeSwitcher } from './components/uv-theme-switcher';
import { UVDropdown } from './components/uv-dropdown';
import { UVTabs } from './components/uv-tabs';

export { DesignTokens };
export { UVButton };
export { UVModal };
export { UVTooltip };
export { UVLanguageSwitcher };
export { UVThemeSwitcher };
export { UVDropdown };
export { UVTabs };

export class UVSample extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const root = document.createElement('div');
    root.textContent = 'UV-Sample component';
    shadow.appendChild(root);
  }
}

export function registerComponents() {
  if (typeof customElements !== 'undefined' && !customElements.get('uv-sample')) {
    customElements.define('uv-sample', UVSample);
  }
}

export function registerUIVerseComponents() {
  if (typeof customElements !== 'undefined') {
    if (!customElements.get('uv-button')) customElements.define('uv-button', UVButton);
    if (!customElements.get('uv-modal')) customElements.define('uv-modal', UVModal);
    if (!customElements.get('uv-tooltip')) customElements.define('uv-tooltip', UVTooltip);
    if (!customElements.get('uv-language-switcher')) customElements.define('uv-language-switcher', UVLanguageSwitcher);
    if (!customElements.get('uv-theme-switcher')) customElements.define('uv-theme-switcher', UVThemeSwitcher);
    if (!customElements.get('uv-dropdown')) customElements.define('uv-dropdown', UVDropdown);
    if (!customElements.get('uv-tabs')) customElements.define('uv-tabs', UVTabs);
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
  (globalThis as any).UIVerse = {
    DesignTokens,
    registerUIVerseComponents,
    registerComponents
  };
}

export default UVSample;
