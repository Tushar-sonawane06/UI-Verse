/**
 * Sidebar Feature
 * Manages sidebar navigation, state, and active link highlighting
 */

const Sidebar = {
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
    const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

    document.querySelectorAll(".sidebar ul li").forEach((li) => {
      const anchor = li.querySelector("a");
      if (!anchor) return;

      if (anchor.getAttribute("href").toLowerCase() === currentPage) {
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
    document.querySelectorAll(".sidebar ul li a").forEach((anchor) => {
      anchor.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
          document.body.classList.remove("sidebar-open");
          document.querySelector(".sidebar-backdrop")?.classList.remove("active");
        }
      });
    });
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
    this.restoreState();
    this.updateActiveLink();
    this.initLinkClose();

    // Expose to global for backward compatibility
    window.toggleSidebar = () => this.toggle();
    window.toggleMenu = () => this.toggleMenu();
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Sidebar;
}
