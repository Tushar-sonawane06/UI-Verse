export declare class UVTabs extends HTMLElement {
    constructor();
    connectedCallback(): void;
    _setupTabs(): void;
    _getTabs(): HTMLElement[];
    _getPanels(): HTMLElement[];
    _handleTabClick(e: Event): void;
}
