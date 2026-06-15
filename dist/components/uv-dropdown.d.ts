export declare class UVDropdown extends HTMLElement {
    constructor();
    static get observedAttributes(): string[];
    get open(): boolean;
    set open(val: boolean);
    private _toggleBind;
    private _closeOutsideBind;
    private _handleKeyDown;
    private _handleTriggerKeyDown;
    connectedCallback(): void;
    disconnectedCallback(): void;
    toggle(e: Event): void;
    closeOutside(e: Event): void;
}
