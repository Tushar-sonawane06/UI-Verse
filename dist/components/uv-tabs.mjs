class UVTabs extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
      <div class="tabs-header">
        <slot name="tab"></slot>
      </div>
      <div class="tabs-content">
        <slot name="panel"></slot>
      </div>
    `;
        if (typeof CSSStyleSheet !== 'undefined') {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(`
        :host {
          display: block;
          font-family: var(--font-body, inherit);
          color: var(--text-primary, inherit);
        }
        .tabs-header {
          display: flex;
          border-bottom: 1px solid var(--border-primary, #ebebeb);
          margin-bottom: 12px;
        }
        ::slotted([slot="tab"]) {
          padding: 8px 16px;
          cursor: pointer;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-weight: 500;
          color: var(--text-secondary, #666666);
          font-family: var(--font-body, inherit);
          transition: var(--transition, 0.25s ease);
        }
        ::slotted([slot="tab"][active]) {
          border-bottom-color: var(--accent, #eb6835);
          color: var(--accent, #eb6835);
        }
        ::slotted([slot="panel"]) {
          display: none;
        }
        ::slotted([slot="panel"][active]) {
          display: block;
        }
      `);
            shadow.adoptedStyleSheets = [sheet];
        }
        else {
            const style = document.createElement('style');
            style.textContent = `
        :host {
          display: block;
          font-family: var(--font-body, inherit);
          color: var(--text-primary, inherit);
        }
        .tabs-header {
          display: flex;
          border-bottom: 1px solid var(--border-primary, #ebebeb);
          margin-bottom: 12px;
        }
        ::slotted([slot="tab"]) {
          padding: 8px 16px;
          cursor: pointer;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-weight: 500;
          color: var(--text-secondary, #666666);
          font-family: var(--font-body, inherit);
          transition: var(--transition, 0.25s ease);
        }
        ::slotted([slot="tab"][active]) {
          border-bottom-color: var(--accent, #eb6835);
          color: var(--accent, #eb6835);
        }
        ::slotted([slot="panel"]) {
          display: none;
        }
        ::slotted([slot="panel"][active]) {
          display: block;
        }
      `;
            shadow.appendChild(style);
        }
    }
    connectedCallback() {
        var _a;
        const tabSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="tab"]');
        tabSlot === null || tabSlot === void 0 ? void 0 : tabSlot.addEventListener('slotchange', this._setupTabs.bind(this));
        this.addEventListener('click', this._handleTabClick.bind(this));
        this._setupTabs();
    }
    _setupTabs() {
        const tabs = this._getTabs();
        const panels = this._getPanels();
        if (tabs.length > 0 && !tabs.some(t => t.hasAttribute('active'))) {
            tabs[0].setAttribute('active', '');
            if (panels[0])
                panels[0].setAttribute('active', '');
        }
    }
    _getTabs() {
        var _a;
        const tabSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="tab"]');
        return ((tabSlot === null || tabSlot === void 0 ? void 0 : tabSlot.assignedElements()) || []);
    }
    _getPanels() {
        var _a;
        const panelSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="panel"]');
        return ((panelSlot === null || panelSlot === void 0 ? void 0 : panelSlot.assignedElements()) || []);
    }
    _handleTabClick(e) {
        const target = e.target;
        const tabs = this._getTabs();
        if (tabs.includes(target)) {
            const activeIndex = tabs.indexOf(target);
            const panels = this._getPanels();
            tabs.forEach((tab, index) => {
                if (index === activeIndex) {
                    tab.setAttribute('active', '');
                }
                else {
                    tab.removeAttribute('active');
                }
            });
            panels.forEach((panel, index) => {
                if (index === activeIndex) {
                    panel.setAttribute('active', '');
                }
                else {
                    panel.removeAttribute('active');
                }
            });
            this.dispatchEvent(new CustomEvent('uiverse:tab-change', { detail: { index: activeIndex }, bubbles: true }));
        }
    }
}
if (typeof customElements !== 'undefined' && !customElements.get('uv-tabs')) {
    customElements.define('uv-tabs', UVTabs);
}

export { UVTabs };
//# sourceMappingURL=uv-tabs.mjs.map
