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

    if (!this._state.addTabBtn && !this._state.tabsHeader) {
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
      if (!this._state.tabsHeader) return;
      const newTab = document.createElement("div");
      newTab.classList.add("tab");
      newTab.innerHTML = `
        <span>New Tab</span>
        <button class="close-btn" type="button">×</button>
      `;

      this._state.tabsHeader.insertBefore(newTab, this._state.addTabBtn);
      this.activateTab(newTab);
    };

    if (this._state.tabsHeader) {
      this._state.tabsHeader.addEventListener("click", onHeaderClick);
      this._state.listeners.push({ el: this._state.tabsHeader, event: "click", handler: onHeaderClick });
    }

    if (this._state.addTabBtn) {
      this._state.addTabBtn.addEventListener("click", onAddClick);
      this._state.listeners.push({ el: this._state.addTabBtn, event: "click", handler: onAddClick });
    }

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

const tabsHeader = document.getElementById("tabsHeader");
const addTabBtn = document.getElementById("addTabBtn");

let tabCount = 6;

const tabNames = [
  "Design",
  "Settings",
  "Portfolio",
  "Reports",
  "Studio",
  "Tasks",
  "Music",
  "Gallery"
];

const icons = [
  "fa-palette",
  "fa-gear",
  "fa-briefcase",
  "fa-chart-pie",
  "fa-laptop-code",
  "fa-list-check",
  "fa-music",
  "fa-image"
];

/* ADD TAB */

addTabBtn.addEventListener("click", () => {

  const randomName =
    tabNames[Math.floor(Math.random() * tabNames.length)];

  const randomIcon =
    icons[Math.floor(Math.random() * icons.length)];

  const tab = document.createElement("div");

  tab.classList.add("tab");

  tab.innerHTML = `
  
    <div class="tab-left">

      <div class="tab-icon">
        <i class="fa-solid ${randomIcon}"></i>
      </div>

      <span class="tab-title">
        ${randomName}
      </span>

    </div>

    <button class="close-btn">
      <i class="fa-solid fa-xmark"></i>
    </button>
  
  `;

  tabsHeader.insertBefore(tab, addTabBtn);

  setActiveTab(tab);

  attachClose(tab);

  attachActive(tab);

  tab.animate(
    [
      {
        opacity:0,
        transform:"translateY(20px)"
      },

      {
        opacity:1,
        transform:"translateY(0)"
      }
    ],
    {
      duration:400,
      easing:"ease"
    }
  );

  tabCount++;
});

/* ACTIVE TAB */

function setActiveTab(selectedTab){

  const allTabs = document.querySelectorAll(".tab");

  allTabs.forEach(tab => {
    tab.classList.remove("active");
  });

  selectedTab.classList.add("active");
}

/* ATTACH ACTIVE EVENT */

function attachActive(tab){

  tab.addEventListener("click", (e) => {

    if(e.target.closest(".close-btn")) return;

    setActiveTab(tab);
  });
}

/* CLOSE TAB */

function attachClose(tab){

  const closeBtn = tab.querySelector(".close-btn");

  closeBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    tab.animate(
      [
        {
          opacity:1,
          transform:"scale(1)"
        },

        {
          opacity:0,
          transform:"scale(0.8)"
        }
      ],
      {
        duration:250,
        easing:"ease"
      }
    );

    setTimeout(() => {

      const wasActive =
        tab.classList.contains("active");

      tab.remove();

      if(wasActive){

        const remainingTabs =
          document.querySelectorAll(".tab");

        if(remainingTabs.length > 0){

          remainingTabs[0]
            .classList.add("active");
        }
      }

    },250);

  });
}

/* INITIAL EVENTS */

document.querySelectorAll(".tab").forEach(tab => {

  attachActive(tab);

  attachClose(tab);

});