export class UVTabs extends HTMLElement {
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
    } else {
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
    const tabSlot = this.shadowRoot?.querySelector('slot[name="tab"]') as HTMLSlotElement | null;
    tabSlot?.addEventListener('slotchange', this._setupTabs.bind(this));
    this.addEventListener('click', this._handleTabClick.bind(this));
    this._setupTabs();
  }

  _setupTabs() {
    const tabs = this._getTabs();
    const panels = this._getPanels();
    
    if (tabs.length > 0 && !tabs.some(t => t.hasAttribute('active'))) {
      tabs[0].setAttribute('active', '');
      if (panels[0]) panels[0].setAttribute('active', '');
    }
  }

  _getTabs(): HTMLElement[] {
    const tabSlot = this.shadowRoot?.querySelector('slot[name="tab"]') as HTMLSlotElement | null;
    return (tabSlot?.assignedElements() || []) as HTMLElement[];
  }

  _getPanels(): HTMLElement[] {
    const panelSlot = this.shadowRoot?.querySelector('slot[name="panel"]') as HTMLSlotElement | null;
    return (panelSlot?.assignedElements() || []) as HTMLElement[];
  }

  _handleTabClick(e: Event) {
    const target = e.target as HTMLElement;
    const tabs = this._getTabs();
    
    if (tabs.includes(target)) {
      const activeIndex = tabs.indexOf(target);
      const panels = this._getPanels();

      tabs.forEach((tab, index) => {
        if (index === activeIndex) {
          tab.setAttribute('active', '');
        } else {
          tab.removeAttribute('active');
        }
      });

      panels.forEach((panel, index) => {
        if (index === activeIndex) {
          panel.setAttribute('active', '');
        } else {
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
