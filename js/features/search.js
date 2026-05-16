/**
 * Search Feature
 * Provides inline filtering and page routing based on search queries
 */

const Search = {
  _state: {
    initialized: false,
    listener: null
  },

  /**
   * Initialize inline search filter using registry when available
   */
  initFilter() {
    if (this._state.listener) return;

    const searchInput = getElement("searchInput");
    if (!searchInput) return;

    const onKeyUp = (e) => {
      const value = e.target.value.toLowerCase().trim();

      document.querySelectorAll(".component-card").forEach((item) => {
        const text = (item.dataset.name || item.innerText).toLowerCase();
        item.style.display = text.includes(value) ? "block" : "none";
      });
    };

    searchInput.addEventListener("keyup", onKeyUp);
    this._state.listener = { el: searchInput, event: "keyup", handler: onKeyUp };
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
          window.location.href = resolveRouteURL(path);
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
    if (this._state.initialized) return;

    this.initFilter();

    // Expose for potential use
    window.handleSearch = (event) => this.handleRouting(event);
    this._state.initialized = true;
  },

  destroy() {
    if (this._state.listener) {
      this._state.listener.el.removeEventListener(this._state.listener.event, this._state.listener.handler);
    }
    this._state.listener = null;
    this._state.initialized = false;
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Search;
}
