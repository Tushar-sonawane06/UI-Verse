/**
 * UIverse - URL State Management
 * 
 * Manages URL parameters for search state persistence
 * - Sync search query, category, and sort order to URL
 * - Restore state from URL on page load
 * - Enable sharing of filtered views
 * - Handle back/forward navigation
 */

const URLStateManager = (function () {
  const _state = {
    initialized: false,
    searchQuery: '',
    selectedCategory: 'all',
    sortOrder: 'default'
  };

  // URL parameter names
  const PARAMS = {
    SEARCH: 'search',
    CATEGORY: 'category',
    SORT: 'sort'
  };

  /**
   * Build URL search string from current state
   */
  function buildQueryString(query = '', category = 'all', sort = 'default') {
    const params = new URLSearchParams();

    if (query && query.trim()) {
      params.set(PARAMS.SEARCH, query.trim());
    }

    if (category && category !== 'all') {
      params.set(PARAMS.CATEGORY, category);
    }

    if (sort && sort !== 'default') {
      params.set(PARAMS.SORT, sort);
    }

    const queryString = params.toString();
    return queryString ? '?' + queryString : '';
  }

  /**
   * Update browser URL without page reload
   */
  function updateURL(query = '', category = 'all', sort = 'default') {
    const currentPath = window.location.pathname;
    const queryString = buildQueryString(query, category, sort);
    const newURL = currentPath + queryString;

    if (window.history && window.history.replaceState) {
      window.history.replaceState({ search: query, category, sort }, '', newURL);
    }
  }

  /**
   * Parse URL parameters into state object
   */
  function parseURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      search: params.get(PARAMS.SEARCH) || '',
      category: params.get(PARAMS.CATEGORY) || 'all',
      sort: params.get(PARAMS.SORT) || 'default'
    };
  }

  /**
   * Load state from URL and apply to page
   */
  function loadStateFromURL() {
    const urlState = parseURLParams();
    _state.searchQuery = urlState.search;
    _state.selectedCategory = urlState.category;
    _state.sortOrder = urlState.sort;

    // Restore search input if exists
    const searchInput = document.getElementById('searchInput') || 
                        document.getElementById('liveFilterInput');
    if (searchInput && urlState.search) {
      searchInput.value = urlState.search;
    }

    // Trigger filter if state exists
    if (urlState.search) {
      if (typeof window.liveFilter === 'function') {
        window.liveFilter(urlState.search);
      }
    }

    if (urlState.category && urlState.category !== 'all') {
      const categoryBtn = document.querySelector(`[data-category="${urlState.category}"], [onclick*="filterCards('${urlState.category}']`);
      if (categoryBtn) {
        categoryBtn.click();
      }
    }

    return urlState;
  }

  /**
   * Update state and URL when search changes
   */
  function onSearchChange(query) {
    _state.searchQuery = query;
    updateURL(query, _state.selectedCategory, _state.sortOrder);
    triggerStateChangeEvent();
  }

  /**
   * Update state and URL when category changes
   */
  function onCategoryChange(category) {
    _state.selectedCategory = category;
    updateURL(_state.searchQuery, category, _state.sortOrder);
    triggerStateChangeEvent();
  }

  /**
   * Update state and URL when sort order changes
   */
  function onSortChange(sort) {
    _state.sortOrder = sort;
    updateURL(_state.searchQuery, _state.selectedCategory, sort);
    triggerStateChangeEvent();
  }

  /**
   * Trigger custom event for state changes
   */
  function triggerStateChangeEvent() {
    const event = new CustomEvent('urlistatechange', {
      detail: {
        search: _state.searchQuery,
        category: _state.selectedCategory,
        sort: _state.sortOrder
      }
    });
    document.dispatchEvent(event);
  }

  /**
   * Clear all URL parameters (reset to clean state)
   */
  function clearState() {
    _state.searchQuery = '';
    _state.selectedCategory = 'all';
    _state.sortOrder = 'default';
    updateURL('', 'all', 'default');

    const searchInput = document.getElementById('searchInput') || 
                        document.getElementById('liveFilterInput');
    if (searchInput) {
      searchInput.value = '';
    }

    // Trigger reset filter
    if (typeof window.liveFilter === 'function') {
      window.liveFilter('');
    }
  }

  /**
   * Hook into existing filter UI
   */
  function hookFilterUI() {
    // Hook into search input
    const searchInputs = document.querySelectorAll('#searchInput, #liveFilterInput, [placeholder*="Search"]');
    searchInputs.forEach((input) => {
      if (input.id === 'commandPaletteInput') return; // Skip command palette input

      // Capture input changes
      input.addEventListener('input', (e) => {
        onSearchChange(e.target.value);
      });

      // Capture keydown for search shortcuts
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          onSearchChange(e.target.value);
        }
      });
    });

    // Hook into category filter buttons
    const filterButtons = document.querySelectorAll('[onclick*="filterCards"]');
    filterButtons.forEach((btn) => {
      const originalOnClick = btn.onclick;
      btn.addEventListener('click', (e) => {
        const onclickAttr = btn.getAttribute('onclick');
        const match = onclickAttr.match(/filterCards\('([^']+)'/);
        if (match) {
          onCategoryChange(match[1]);
        }
      });
    });

    // Hook into sort buttons if they exist
    const sortButtons = document.querySelectorAll('[data-sort], [onclick*="sortCards"]');
    sortButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const sortVal = btn.getAttribute('data-sort') || 
                       btn.getAttribute('onclick').match(/sortCards\('([^']+)'/)?.[1];
        if (sortVal) {
          onSortChange(sortVal);
        }
      });
    });
  }

  /**
   * Listen for browser back/forward navigation
   */
  function hookPopState() {
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.search !== undefined) {
        _state.searchQuery = event.state.search || '';
        _state.selectedCategory = event.state.category || 'all';
        _state.sortOrder = event.state.sort || 'default';

        // Restore UI
        const searchInput = document.getElementById('searchInput') || 
                            document.getElementById('liveFilterInput');
        if (searchInput) {
          searchInput.value = _state.searchQuery;
        }

        // Trigger filter
        if (typeof window.liveFilter === 'function') {
          window.liveFilter(_state.searchQuery);
        }
      }
    });
  }

  /**
   * Initialize URL state management
   */
  function init() {
    if (_state.initialized) return;

    // Load state from URL on page load
    loadStateFromURL();

    // Hook into filter UI after short delay to ensure DOM is ready
    setTimeout(() => {
      hookFilterUI();
      hookPopState();
    }, 100);

    _state.initialized = true;
    console.log('[URLStateManager] Initialized with state:', _state);
  }

  /**
   * Public API
   */
  return {
    init,
    loadStateFromURL,
    updateURL,
    parseURLParams,
    onSearchChange,
    onCategoryChange,
    onSortChange,
    clearState,
    getState: () => ({ ..._state })
  };
})();

// Expose globally
window.URLStateManager = URLStateManager;
