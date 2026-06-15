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
export declare class UVSample extends HTMLElement {
    constructor();
}
export declare function registerComponents(): void;
export declare function registerUIVerseComponents(): {
    button: CustomElementConstructor | null | undefined;
    modal: CustomElementConstructor | null | undefined;
    tooltip: CustomElementConstructor | null | undefined;
    languageSwitcher: CustomElementConstructor | null | undefined;
    themeSwitcher: CustomElementConstructor | null | undefined;
    dropdown: CustomElementConstructor | null | undefined;
    tabs: CustomElementConstructor | null | undefined;
};
export default UVSample;
