export class UVModal extends HTMLElement {
  private _opened = false;
  constructor() {
    super();
    const s = this.attachShadow({ mode: "open" });
    s.innerHTML = `
      <div class="modal-overlay" role="dialog" aria-modal="true">
        <div class="modal-content" tabindex="-1">
          <slot></slot>
        </div>
      </div>
    `;

    if (
      typeof CSSStyleSheet !== "undefined" &&
      "replaceSync" in CSSStyleSheet.prototype
    ) {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(`
        :host {
          display: none;
          font-family: var(--font-body, inherit);
        }
        :host([opened]) {
          display: block;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: var(--card-bg, var(--bg-secondary, #ffffff));
          color: var(--text-primary, #111111);
          padding: 24px;
          border-radius: var(--radius-md, 14px);
          box-shadow: var(--shadow-lg, 0 8px 32px rgba(0, 0, 0, 0.12));
          max-width: 500px;
          width: 100%;
          position: relative;
        }
      `);
      s.adoptedStyleSheets = [sheet];
    } else {
      const style = document.createElement("style");
      style.textContent = `
        :host {
          display: none;
          font-family: var(--font-body, inherit);
        }
        :host([opened]) {
          display: block;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: var(--card-bg, var(--bg-secondary, #ffffff));
          color: var(--text-primary, #111111);
          padding: 24px;
          border-radius: var(--radius-md, 14px);
          box-shadow: var(--shadow-lg, 0 8px 32px rgba(0, 0, 0, 0.12));
          max-width: 500px;
          width: 100%;
          position: relative;
        }
      `;
      s.appendChild(style);
    }
  }

  connectedCallback() {
    document.addEventListener("keydown", this._handleKeyDown);
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  private _handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && this.opened) {
      this.close();
      this.dispatchEvent(new CustomEvent("close"));
    }
  };

  get opened(): boolean {
    return this._opened;
  }

  set opened(val: boolean) {
    this._opened = val;
    if (val) {
      this.setAttribute("opened", "");
    } else {
      this.removeAttribute("opened");
    }
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}

if (typeof customElements !== "undefined" && !customElements.get("uv-modal")) {
  customElements.define("uv-modal", UVModal);
}
