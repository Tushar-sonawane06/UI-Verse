class UVButton extends HTMLElement {
    constructor() {
        super();
        const s = this.attachShadow({ mode: 'open' });
        s.innerHTML = `<button><slot></slot></button>`;
        if (typeof CSSStyleSheet !== 'undefined') {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(`
        :host {
          display: inline-block;
        }
        button {
          background-color: var(--accent, #eb6835);
          color: var(--bg-secondary, #ffffff);
          border: 1px solid var(--border-primary, transparent);
          padding: 8px 16px;
          border-radius: var(--radius-sm, 8px);
          font-family: var(--font-body, inherit);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition, 0.25s ease);
        }
        button:hover {
          filter: brightness(1.1);
        }
        button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px var(--accent);
        }
      `);
            s.adoptedStyleSheets = [sheet];
        }
        else {
            const style = document.createElement('style');
            style.textContent = `
        :host {
          display: inline-block;
        }
        button {
          background-color: var(--accent, #eb6835);
          color: var(--bg-secondary, #ffffff);
          border: 1px solid var(--border-primary, transparent);
          padding: 8px 16px;
          border-radius: var(--radius-sm, 8px);
          font-family: var(--font-body, inherit);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition, 0.25s ease);
        }
        button:hover {
          filter: brightness(1.1);
        }
        button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px var(--accent);
        }
      `;
            s.appendChild(style);
        }
    }
}
if (typeof customElements !== 'undefined' && !customElements.get('uv-button')) {
    customElements.define('uv-button', UVButton);
}

export { UVButton };
//# sourceMappingURL=uv-button.mjs.map
