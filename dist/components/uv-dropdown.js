class UVDropdown extends HTMLElement {
    constructor() {
        super();
        this._toggleBind = (e) => this.toggle(e);
        this._closeOutsideBind = (e) => this.closeOutside(e);
        this._handleKeyDown = (e) => {
            if (e.key === "Escape" && this.open) {
                this.open = false;
                this.dispatchEvent(new CustomEvent("uiverse:dropdown-toggle", {
                    detail: { open: false },
                    bubbles: true,
                }));
            }
        };
        this._handleTriggerKeyDown = (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                this.toggle(e);
            }
        };
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
      <slot name="trigger"></slot>
      <slot name="content"></slot>
    `;
        if (typeof CSSStyleSheet !== "undefined" &&
            "replaceSync" in CSSStyleSheet.prototype) {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(`
        :host {
          display: inline-block;
          position: relative;
        }
        ::slotted([slot="trigger"]) {
          cursor: pointer;
        }
        ::slotted([slot="content"]) {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 10;
          min-width: 160px;
          margin-top: 4px;
        }
        :host([open]) ::slotted([slot="content"]) {
          display: block;
        }
      `);
            shadow.adoptedStyleSheets = [sheet];
        }
        else {
            const style = document.createElement("style");
            style.textContent = `
        :host {
          display: inline-block;
          position: relative;
        }
        ::slotted([slot="trigger"]) {
          cursor: pointer;
        }
        ::slotted([slot="content"]) {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 10;
          min-width: 160px;
          margin-top: 4px;
        }
        :host([open]) ::slotted([slot="content"]) {
          display: block;
        }
      `;
            shadow.appendChild(style);
        }
    }
    static get observedAttributes() {
        return ["open"];
    }
    get open() {
        return this.hasAttribute("open");
    }
    set open(val) {
        if (val) {
            this.setAttribute("open", "");
        }
        else {
            this.removeAttribute("open");
        }
    }
    connectedCallback() {
        var _a;
        const triggerSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="trigger"]');
        triggerSlot === null || triggerSlot === void 0 ? void 0 : triggerSlot.addEventListener("click", this._toggleBind);
        triggerSlot === null || triggerSlot === void 0 ? void 0 : triggerSlot.addEventListener("keydown", this._handleTriggerKeyDown);
        this.addEventListener("keydown", this._handleKeyDown);
        document.addEventListener("click", this._closeOutsideBind);
    }
    disconnectedCallback() {
        var _a;
        const triggerSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="trigger"]');
        triggerSlot === null || triggerSlot === void 0 ? void 0 : triggerSlot.removeEventListener("click", this._toggleBind);
        triggerSlot === null || triggerSlot === void 0 ? void 0 : triggerSlot.removeEventListener("keydown", this._handleTriggerKeyDown);
        this.removeEventListener("keydown", this._handleKeyDown);
        document.removeEventListener("click", this._closeOutsideBind);
    }
    toggle(e) {
        e.stopPropagation();
        this.open = !this.open;
        this.dispatchEvent(new CustomEvent("uiverse:dropdown-toggle", {
            detail: { open: this.open },
            bubbles: true,
        }));
    }
    closeOutside(e) {
        if (!this.contains(e.target)) {
            this.open = false;
        }
    }
}
if (typeof customElements !== "undefined" &&
    !customElements.get("uv-dropdown")) {
    customElements.define("uv-dropdown", UVDropdown);
}

export { UVDropdown };
//# sourceMappingURL=uv-dropdown.js.map
