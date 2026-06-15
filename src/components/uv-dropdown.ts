export class UVDropdown extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <slot name="trigger"></slot>
      <slot name="content"></slot>
    `;

    if (
      typeof CSSStyleSheet !== "undefined" &&
      "replaceSync" in CSSStyleSheet.prototype
    ) {
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
    } else {
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

  get open(): boolean {
    return this.hasAttribute("open");
  }

  set open(val: boolean) {
    if (val) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
  }

  private _toggleBind = (e: Event) => this.toggle(e);
  private _closeOutsideBind = (e: Event) => this.closeOutside(e);
  private _handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && this.open) {
      this.open = false;
      this.dispatchEvent(
        new CustomEvent("uiverse:dropdown-toggle", {
          detail: { open: false },
          bubbles: true,
        }),
      );
    }
  };
  private _handleTriggerKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.toggle(e);
    }
  };

  connectedCallback() {
    const triggerSlot = this.shadowRoot?.querySelector(
      'slot[name="trigger"]',
    ) as HTMLSlotElement | null;
    triggerSlot?.addEventListener("click", this._toggleBind);
    triggerSlot?.addEventListener("keydown", this._handleTriggerKeyDown);
    this.addEventListener("keydown", this._handleKeyDown);
    document.addEventListener("click", this._closeOutsideBind);
  }

  disconnectedCallback() {
    const triggerSlot = this.shadowRoot?.querySelector(
      'slot[name="trigger"]',
    ) as HTMLSlotElement | null;
    triggerSlot?.removeEventListener("click", this._toggleBind);
    triggerSlot?.removeEventListener("keydown", this._handleTriggerKeyDown);
    this.removeEventListener("keydown", this._handleKeyDown);
    document.removeEventListener("click", this._closeOutsideBind);
  }

  toggle(e: Event) {
    e.stopPropagation();
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent("uiverse:dropdown-toggle", {
        detail: { open: this.open },
        bubbles: true,
      }),
    );
  }

  closeOutside(e: Event) {
    if (!this.contains(e.target as Node)) {
      this.open = false;
    }
  }
}

if (
  typeof customElements !== "undefined" &&
  !customElements.get("uv-dropdown")
) {
  customElements.define("uv-dropdown", UVDropdown);
}
