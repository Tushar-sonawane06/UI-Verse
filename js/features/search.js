/**
 * Search Feature
 * Provides inline filtering and page routing based on search queries
 * Enhanced with Fuse.js for global component search
 */

const Search = {
  _state: {
    initialized: false,
    listener: null,
    dropdownVisible: false,
    selectedIndex: 0,
    results: []
  },

  /**
   * Initialize inline search filter using registry when available
   */
  initFilter() {
    if (this._state.listener) return;

    if (window.ComponentGallery && document.querySelector('.component-card')) {
      return;
    }

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
   * Handle search input for navbar dropdown
   */
  handleSearchInput(event) {
    const query = event.target.value.trim();
    const dropdown = document.getElementById('searchDropdown');
    const resultsContainer = document.getElementById('searchDropdownResults');

    console.log('[Search] Handling input:', query);

    if (!query) {
      this.hideDropdown();
      return;
    }

    // Use ComponentIndex for search if available
    if (window.ComponentIndex) {
      console.log('[Search] Using ComponentIndex for search');
      const results = window.ComponentIndex.search(query);
      console.log('[Search] Found results:', results);
      this._state.results = results;
      this._state.selectedIndex = 0;
      this.renderDropdownResults(results);
      this.showDropdown();
    } else {
      console.warn('[Search] ComponentIndex not available');
      this.hideDropdown();
    }
  },

  /**
   * Render search dropdown results
   */
  renderDropdownResults(results) {
    const resultsContainer = document.getElementById('searchDropdownResults');
    if (!resultsContainer) return;

    resultsContainer.innerHTML = '';

    if (results.length === 0) {
      const emptyItem = document.createElement('li');
      emptyItem.className = 'search-dropdown-empty';
      emptyItem.textContent = 'No components found';
      resultsContainer.appendChild(emptyItem);
      return;
    }

    const fragment = document.createDocumentFragment();

    results.forEach((item, idx) => {
      const resultItem = document.createElement('li');
      resultItem.className = `search-dropdown-item ${idx === this._state.selectedIndex ? 'highlighted' : ''}`;
      resultItem.dataset.index = String(idx);
      resultItem.dataset.path = item.path;

      const iconWrap = document.createElement('div');
      iconWrap.className = 'search-dropdown-item-icon';

      const icon = document.createElement('i');
      icon.className = item.icon || 'fa-solid fa-circle';
      iconWrap.appendChild(icon);

      const content = document.createElement('div');
      content.className = 'search-dropdown-item-content';

      const title = document.createElement('div');
      title.className = 'search-dropdown-item-title';
      title.textContent = item.title;

      const category = document.createElement('div');
      category.className = 'search-dropdown-item-category';
      category.textContent = item.category;

      content.appendChild(title);
      content.appendChild(category);
      resultItem.appendChild(iconWrap);
      resultItem.appendChild(content);
      fragment.appendChild(resultItem);
    });

    resultsContainer.appendChild(fragment);
  },

  /**
   * Show search dropdown
   */
  showDropdown() {
    const dropdown = document.getElementById('searchDropdown');
    if (dropdown) {
      dropdown.classList.remove('hidden');
      this._state.dropdownVisible = true;
    }
  },

  /**
   * Hide search dropdown
   */
  hideDropdown() {
    const dropdown = document.getElementById('searchDropdown');
    if (dropdown) {
      dropdown.classList.add('hidden');
      this._state.dropdownVisible = false;
      this._state.results = [];
      this._state.selectedIndex = 0;
    }
  },

  /**
   * Handle keyboard navigation in dropdown
   */
  handleKeydown(event) {
    if (!this._state.dropdownVisible) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this._state.selectedIndex = Math.min(this._state.selectedIndex + 1, this._state.results.length - 1);
        this.renderDropdownResults(this._state.results);
        break;

      case 'ArrowUp':
        event.preventDefault();
        this._state.selectedIndex = Math.max(this._state.selectedIndex - 1, 0);
        this.renderDropdownResults(this._state.results);
        break;

      case 'Enter':
        event.preventDefault();
        if (this._state.results[this._state.selectedIndex]) {
          window.location.href = this._state.results[this._state.selectedIndex].path;
        }
        break;

      case 'Escape':
        event.preventDefault();
        this.hideDropdown();
        break;
    }
  },

  /**
   * Handle click on dropdown item
   */
  handleDropdownClick(event) {
    const item = event.target.closest('.search-dropdown-item');
    if (item) {
      const path = item.dataset.path;
      if (path) {
        window.location.href = path;
      }
    }
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
        const resolution = typeof window.ComponentsRegistry.resolve === 'function' ? window.ComponentsRegistry.resolve(query) : null;
        const path = resolution ? resolution.path : window.ComponentsRegistry.findRoute(query);
        if (path) {
          if (resolution && resolution.compatibility && resolution.compatibility.fallbackUsed) {
            console.warn('[Search] Version fallback used', resolution);
          }
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
  async init() {
    if (this._state.initialized) return;

    console.log('[Search] Initializing...');

    // Initialize ComponentIndex if available
    if (window.ComponentIndex) {
      console.log('[Search] Initializing ComponentIndex...');
      await window.ComponentIndex.init();
      console.log('[Search] ComponentIndex initialized');
    } else {
      console.warn('[Search] ComponentIndex not found');
    }

    this.initFilter();

    // Initialize navbar search dropdown
    const searchInput = getElement("searchInput");
    if (searchInput) {
      console.log('[Search] Found search input, attaching event listeners');

      // Remove old event listener if exists
      if (this._state.listener) {
        searchInput.removeEventListener(this._state.listener.event, this._state.listener.handler);
      }

      // Add input event for real-time search
      searchInput.addEventListener('input', (e) => this.handleSearchInput(e));
      searchInput.addEventListener('keydown', (e) => this.handleKeydown(e));

      // Handle click outside to close dropdown
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar')) {
          this.hideDropdown();
        }
      });

      // Handle dropdown item clicks
      document.addEventListener('click', (e) => this.handleDropdownClick(e));
    } else {
      console.warn('[Search] Search input not found');
    }

    // Expose for potential use
    window.handleSearch = (event) => this.handleRouting(event);
    this._state.initialized = true;

    console.log('[Search] Initialization complete');
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
