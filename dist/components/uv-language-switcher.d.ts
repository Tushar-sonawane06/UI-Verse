export declare class UVLanguageSwitcher extends HTMLElement {
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    _getCurrentLanguage(): string;
    _syncSelection(): void;
    _syncLabel(): void;
    _onChange(event: Event): Promise<void>;
    _onI18nChange(event: CustomEvent): void;
}
