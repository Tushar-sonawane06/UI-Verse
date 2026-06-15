export declare class UVThemeSwitcher extends HTMLElement {
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): void;
    _getThemeNames(): string[];
    _getCurrentTheme(): string;
    _titleCase(value: string): string;
    _syncFromTokens(): void;
    _handleChange(event: Event): void;
    _handleThemeChange(event: CustomEvent): void;
}
