/**
 * Sidebar Feature
 * Manages sidebar navigation, state, and active link highlighting
 */

const Sidebar = {
  _state: {
    initialized: false,
    listeners: []
  },

  /**
   * Toggle sidebar visibility
   */
  toggle() {
    const backdrop = document.querySelector(".sidebar-backdrop");

    if (window.innerWidth <= 900) {
      document.body.classList.toggle("sidebar-open");
      backdrop?.classList.toggle("active");
    } else {
      const isHidden = document.body.classList.toggle("sidebar-hidden");
      sessionStorage.setItem("sidebarHidden", isHidden ? "1" : "0");
    }
  },

  /**
   * Update active link in sidebar based on current page
   */
  updateActiveLink() {
    const currentPage = getCurrentPageName();

    document.querySelectorAll(".sidebar ul li").forEach((li) => {
      const anchor = li.querySelector("a");
      if (!anchor) return;

      const anchorPage = getCurrentPageName(anchor.getAttribute("href") || "index.html");

      if (anchorPage === currentPage) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  },

  /**
   * Restore sidebar state from session storage
   */
  restoreState() {
    if (window.innerWidth > 900 && sessionStorage.getItem("sidebarHidden") === "1") {
      document.body.classList.add("sidebar-hidden");
    }
  },

  /**
   * Close sidebar when link is clicked on mobile
   */
  initLinkClose() {
    if (this._state.listeners.some((entry) => entry.key === 'link-close')) return;

    const onClick = (event) => {
      const anchor = event.target.closest(".sidebar ul li a");
      if (!anchor) return;

      if (window.innerWidth <= 900) {
        document.body.classList.remove("sidebar-open");
        document.querySelector(".sidebar-backdrop")?.classList.remove("active");
      }
    };

    document.addEventListener("click", onClick);
    this._state.listeners.push({ key: 'link-close', el: document, event: "click", handler: onClick });
  },

  /**
   * Toggle menu (alternative method for backward compatibility)
   */
  toggleMenu() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
  },

  /**
   * Initialize sidebar feature
   */
  init() {
    if (this._state.initialized) return;

    this.restoreState();
    this.updateActiveLink();
    this.initLinkClose();

    // Expose to global for backward compatibility
    window.toggleSidebar = () => this.toggle();
    window.toggleMenu = () => this.toggleMenu();

    this._state.initialized = true;
  },

  destroy() {
    this._state.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this._state.listeners = [];
    this._state.initialized = false;
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Sidebar;
}
