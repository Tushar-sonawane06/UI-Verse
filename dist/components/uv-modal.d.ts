export declare class UVModal extends HTMLElement {
    private _opened;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleKeyDown;
    get opened(): boolean;
    set opened(val: boolean);
    open(): void;
    close(): void;
}
