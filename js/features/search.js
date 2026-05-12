/**
 * Search Feature
 * Provides inline filtering and page routing based on search queries
 */

const Search = {
  /**
   * Initialize inline search filter using registry when available
   */
  initFilter() {
    const searchInput = getElement("searchInput");
    if (!searchInput) return;

    searchInput.addEventListener("keyup", (e) => {
      const value = e.target.value.toLowerCase().trim();

      document.querySelectorAll(".component-card").forEach((item) => {
        const text = (item.dataset.name || item.innerText).toLowerCase();
        item.style.display = text.includes(value) ? "block" : "none";
      });
    });
  },

  /**
   * Handle search routing (Enter key navigation)
   * Uses the ComponentsRegistry if available
   */
  async handleRouting(event) {
    if (event.key !== "Enter") return;

    const query = event.target.value.toLowerCase().trim();

    try {
      if (window.ComponentsRegistry) {
        await window.ComponentsRegistry.load();
        const path = window.ComponentsRegistry.findRoute(query);
        if (path) {
          window.location.href = path;
          return;
        }
      }
    } catch (err) {
      console.warn('[Search] Registry lookup failed', err);
    }

    showToast("No component found 😢");
  },

  /**
   * Initialize search feature
   */
  init() {
    this.initFilter();

    // Expose for potential use
    window.handleSearch = (event) => this.handleRouting(event);
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Search;
}
