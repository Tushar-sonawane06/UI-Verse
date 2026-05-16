const BrowserTabs = {
  _state: {
    initialized: false,
    addTabBtn: null,
    tabsHeader: null,
    listeners: []
  },

  init() {
    if (this._state.initialized) return;

    this._state.addTabBtn = document.getElementById("addTabBtn");
    this._state.tabsHeader = document.getElementById("tabsHeader");

    if (!this._state.addTabBtn || !this._state.tabsHeader) {
      this._state.initialized = true;
      return;
    }

    const onHeaderClick = (event) => {
      const closeBtn = event.target.closest(".close-btn");
      const tab = event.target.closest(".tab");

      if (closeBtn) {
        event.stopPropagation();
        const targetTab = closeBtn.closest(".tab");
        targetTab?.remove();
        return;
      }

      if (tab && this._state.tabsHeader.contains(tab)) {
        this.activateTab(tab);
      }
    };

    const onAddClick = () => {
      const newTab = document.createElement("div");
      newTab.classList.add("tab");
      newTab.innerHTML = `
        <span>New Tab</span>
        <button class="close-btn" type="button">×</button>
      `;

      this._state.tabsHeader.insertBefore(newTab, this._state.addTabBtn);
      this.activateTab(newTab);
    };

    this._state.tabsHeader.addEventListener("click", onHeaderClick);
    this._state.addTabBtn.addEventListener("click", onAddClick);
    this._state.listeners.push({ el: this._state.tabsHeader, event: "click", handler: onHeaderClick });
    this._state.listeners.push({ el: this._state.addTabBtn, event: "click", handler: onAddClick });

    this._state.initialized = true;
  },

  activateTab(tab) {
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.remove("active");
    });

    tab?.classList.add("active");
  },

  destroy() {
    this._state.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this._state.listeners = [];
    this._state.initialized = false;
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => BrowserTabs.init());
} else {
  BrowserTabs.init();
}