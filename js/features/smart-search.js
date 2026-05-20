// =========================================================
// SMART SEARCH & FILTER SYSTEM
// Level 3 Advanced Feature
// =========================================================

const SmartSearch = (() => {
  // Component database with metadata - Comprehensive list
  const componentDatabase = [
    // Buttons (5)
    { id: 'btn-1', name: 'Primary Button', page: 'button.html', tags: ['buttons', 'primary', 'interactive', 'html', 'css', 'js'], category: 'Interactive', responsive: true },
    { id: 'btn-2', name: 'Secondary Button', page: 'button.html', tags: ['buttons', 'secondary', 'interactive', 'html', 'css'], category: 'Interactive', responsive: true },
    { id: 'btn-3', name: 'Outline Button', page: 'button.html', tags: ['buttons', 'outline', 'interactive', 'html', 'css'], category: 'Interactive', responsive: true },
    { id: 'btn-4', name: 'Ghost Button', page: 'button.html', tags: ['buttons', 'ghost', 'interactive', 'html', 'css'], category: 'Interactive', responsive: true },
    { id: 'btn-5', name: 'Icon Button', page: 'button.html', tags: ['buttons', 'icon', 'interactive', 'html', 'css'], category: 'Interactive', responsive: true },
    
    // Cards (6)
    { id: 'card-1', name: 'Basic Card', page: 'cards.html', tags: ['cards', 'layout', 'html', 'css', 'container'], category: 'Layout', responsive: true },
    { id: 'card-2', name: 'Hover Card', page: 'cards.html', tags: ['cards', 'hover', 'animation', 'html', 'css', 'js'], category: 'Animation', responsive: true },
    { id: 'card-3', name: 'Image Card', page: 'cards.html', tags: ['cards', 'image', 'layout', 'html', 'css'], category: 'Layout', responsive: true },
    { id: 'card-4', name: 'Flip Card', page: 'flipcards.html', tags: ['cards', 'flip', 'animation', 'html', 'css', 'js'], category: 'Animation', responsive: true },
    { id: 'card-5', name: 'Product Card', page: 'cards.html', tags: ['cards', 'product', 'ecommerce', 'html', 'css'], category: 'Layout', responsive: true },
    { id: 'card-6', name: '3D Card', page: 'flipcards.html', tags: ['cards', '3d', 'animation', 'html', 'css', 'js'], category: 'Animation', responsive: true },
    
    // Forms (7)
    { id: 'form-1', name: 'Input Field', page: 'forms.html', tags: ['forms', 'input', 'form-control', 'html', 'css'], category: 'Forms', responsive: true },
    { id: 'form-2', name: 'Form Group', page: 'forms.html', tags: ['forms', 'group', 'layout', 'html', 'css', 'js'], category: 'Forms', responsive: true },
    { id: 'form-3', name: 'Text Area', page: 'forms.html', tags: ['forms', 'textarea', 'input', 'html', 'css'], category: 'Forms', responsive: true },
    { id: 'form-4', name: 'Select Dropdown', page: 'forms.html', tags: ['forms', 'select', 'dropdown', 'html', 'css', 'js'], category: 'Forms', responsive: true },
    { id: 'form-5', name: 'Search Input', page: 'search.html', tags: ['forms', 'search', 'input', 'html', 'css'], category: 'Forms', responsive: true },
    { id: 'form-6', name: 'Date Picker', page: 'forms.html', tags: ['forms', 'date', 'input', 'html', 'css', 'js'], category: 'Forms', responsive: true },
    { id: 'form-7', name: 'Color Picker', page: 'color.html', tags: ['forms', 'color', 'picker', 'html', 'css', 'js'], category: 'Forms', responsive: true },
    
    // Navigation (6)
    { id: 'nav-1', name: 'Navbar', page: 'navbar.html', tags: ['navigation', 'navbar', 'menu', 'html', 'css', 'js', 'responsive'], category: 'Navigation', responsive: true },
    { id: 'nav-2', name: 'Dropdown Menu', page: 'dropdown-components.html', tags: ['navigation', 'dropdown', 'menu', 'html', 'css', 'js', 'interactive'], category: 'Navigation', responsive: true },
    { id: 'nav-3', name: 'Sidebar', page: 'sidebar.html', tags: ['navigation', 'sidebar', 'menu', 'html', 'css', 'js'], category: 'Navigation', responsive: true },
    { id: 'nav-4', name: 'Breadcrumbs', page: 'breadcrumbs.html', tags: ['navigation', 'breadcrumb', 'trail', 'html', 'css'], category: 'Navigation', responsive: true },
    { id: 'nav-5', name: 'Pagination', page: 'pagination.html', tags: ['navigation', 'pagination', 'numbers', 'html', 'css', 'js'], category: 'Navigation', responsive: true },
    { id: 'nav-6', name: 'Tabs', page: 'tabs.html', tags: ['navigation', 'tabs', 'interactive', 'html', 'css', 'js'], category: 'Navigation', responsive: true },
    
    // Alerts & Notifications (5)
    { id: 'alert-1', name: 'Alert Box', page: 'alerts.html', tags: ['alerts', 'notification', 'html', 'css', 'js', 'feedback'], category: 'Feedback', responsive: true },
    { id: 'alert-2', name: 'Toast Notification', page: 'alerts.html', tags: ['notifications', 'toast', 'feedback', 'html', 'css', 'js'], category: 'Feedback', responsive: true },
    { id: 'alert-3', name: 'Info Alert', page: 'alerts.html', tags: ['alerts', 'info', 'notification', 'html', 'css'], category: 'Feedback', responsive: true },
    { id: 'alert-4', name: 'Success Alert', page: 'alerts.html', tags: ['alerts', 'success', 'notification', 'html', 'css'], category: 'Feedback', responsive: true },
    { id: 'alert-5', name: 'Error Alert', page: 'alerts.html', tags: ['alerts', 'error', 'notification', 'html', 'css'], category: 'Feedback', responsive: true },
    
    // Loaders & Progress (5)
    { id: 'load-1', name: 'Spinner Loader', page: 'loaders.html', tags: ['loaders', 'animation', 'html', 'css', 'loading'], category: 'Animation', responsive: true },
    { id: 'load-2', name: 'Progress Bar', page: 'loaders.html', tags: ['progress', 'loading', 'html', 'css', 'js'], category: 'Feedback', responsive: true },
    { id: 'load-3', name: 'Skeleton Loader', page: 'loaders.html', tags: ['skeleton', 'loading', 'placeholder', 'html', 'css'], category: 'Animation', responsive: true },
    { id: 'load-4', name: 'Pulse Animation', page: 'loaders.html', tags: ['animation', 'pulse', 'html', 'css'], category: 'Animation', responsive: true },
    { id: 'load-5', name: 'Animated Loader', page: 'loaders.html', tags: ['animation', 'loader', 'html', 'css'], category: 'Animation', responsive: true },
    
    // Form Controls (6)
    { id: 'check-1', name: 'Checkbox', page: 'checkbox.html', tags: ['checkbox', 'form-control', 'interactive', 'html', 'css', 'js'], category: 'Forms', responsive: true },
    { id: 'radio-1', name: 'Radio Button', page: 'radiobutton.html', tags: ['radio', 'form-control', 'interactive', 'html', 'css', 'js'], category: 'Forms', responsive: true },
    { id: 'toggle-1', name: 'Toggle Switch', page: 'toggles.html', tags: ['toggle', 'switch', 'interactive', 'html', 'css', 'js'], category: 'Interactive', responsive: true },
    { id: 'toggle-2', name: 'Checkbox Group', page: 'checkbox.html', tags: ['checkbox', 'group', 'form', 'html', 'css', 'js'], category: 'Forms', responsive: true },
    { id: 'radio-2', name: 'Radio Group', page: 'radiobutton.html', tags: ['radio', 'group', 'form', 'html', 'css', 'js'], category: 'Forms', responsive: true },
    { id: 'badge-1', name: 'Badge', page: 'badges.html', tags: ['badge', 'label', 'tag', 'html', 'css'], category: 'Typography', responsive: true },
    
    // Data Display (5)
    { id: 'table-1', name: 'Data Table', page: 'table.html', tags: ['table', 'data', 'layout', 'html', 'css', 'js'], category: 'Data', responsive: true },
    { id: 'gallery-1', name: 'Image Gallery', page: 'gallery.html', tags: ['gallery', 'images', 'layout', 'html', 'css', 'js'], category: 'Layout', responsive: true },
    { id: 'timeline-1', name: 'Timeline', page: 'timeline.html', tags: ['timeline', 'history', 'layout', 'html', 'css', 'js'], category: 'Layout', responsive: true },
    { id: 'chart-1', name: 'Charts', page: 'charts.html', tags: ['charts', 'data', 'graph', 'html', 'css', 'js'], category: 'Data', responsive: true },
    { id: 'list-1', name: 'List Component', page: 'section.html', tags: ['list', 'layout', 'html', 'css'], category: 'Layout', responsive: true },
    
    // Special Sections (5)
    { id: 'hero-1', name: 'Hero Section', page: 'hero.html', tags: ['hero', 'landing', 'layout', 'html', 'css'], category: 'Layout', responsive: true },
    { id: 'pricing-1', name: 'Pricing Table', page: 'pricing.html', tags: ['pricing', 'table', 'layout', 'html', 'css'], category: 'Layout', responsive: true },
    { id: 'test-1', name: 'Testimonial Card', page: 'testimonials.html', tags: ['testimonial', 'review', 'card', 'html', 'css'], category: 'Layout', responsive: true },
    { id: 'profile-1', name: 'Profile Card', page: 'profile-components.html', tags: ['profile', 'user', 'card', 'html', 'css'], category: 'Layout', responsive: true },
    { id: 'footer-1', name: 'Footer', page: 'footer.html', tags: ['footer', 'layout', 'html', 'css'], category: 'Layout', responsive: true },
    
    // Advanced (5)
    { id: 'modal-1', name: 'Modal/Popup', page: 'Model.html', tags: ['modal', 'popup', 'interactive', 'html', 'css', 'js'], category: 'Interactive', responsive: true },
    { id: 'carousel-1', name: 'Carousel/Slider', page: 'carousel.html', tags: ['carousel', 'slider', 'animation', 'html', 'css', 'js'], category: 'Animation', responsive: true },
    { id: 'hover-1', name: 'Hover Effects', page: 'hover.html', tags: ['hover', 'animation', 'effect', 'html', 'css'], category: 'Animation', responsive: true },
    { id: 'menu-1', name: 'Context Menu', page: 'menu.html', tags: ['menu', 'context', 'interactive', 'html', 'css', 'js'], category: 'Interactive', responsive: true },
    { id: 'tooltip-1', name: 'Tooltip', page: 'tooltip.html', tags: ['tooltip', 'hover', 'interactive', 'html', 'css', 'js'], category: 'Interactive', responsive: true },
  ];

  // =========================================================
  // Debounce helper for search input
  // =========================================================
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // =========================================================
  // Score search results for relevance
  // =========================================================
  const scoreResult = (component, query) => {
    const q = query.toLowerCase();
    let score = 0;

    // Exact name match (highest priority)
    if (component.name.toLowerCase() === q) score += 100;
    // Name contains query
    else if (component.name.toLowerCase().includes(q)) score += 50;

    // Tag match
    if (component.tags.some(tag => tag.toLowerCase() === q)) score += 75;
    // Tag contains query
    else if (component.tags.some(tag => tag.toLowerCase().includes(q))) score += 40;

    // Category match
    if (component.category.toLowerCase().includes(q)) score += 30;

    return score;
  };

  // =========================================================
  // Search components by query
  // =========================================================
  const search = (query, options = {}) => {
    if (!query || query.trim() === '') {
      return componentDatabase;
    }

    const results = componentDatabase
      .map(component => ({
        ...component,
        score: scoreResult(component, query)
      }))
      .filter(component => component.score > 0)
      .sort((a, b) => b.score - a.score);

    // Apply filters if provided
    if (options.category) {
      return results.filter(c => c.category.toLowerCase() === options.category.toLowerCase());
    }
    if (options.tags) {
      return results.filter(c => options.tags.every(tag => c.tags.includes(tag)));
    }
    if (options.responsive !== undefined) {
      return results.filter(c => c.responsive === options.responsive);
    }

    return results;
  };

  // =========================================================
  // Get all unique tags
  // =========================================================
  const getAllTags = () => {
    const tags = new Set();
    componentDatabase.forEach(component => {
      component.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  };

  // =========================================================
  // Get all categories
  // =========================================================
  const getCategories = () => {
    const categories = new Set();
    componentDatabase.forEach(component => {
      categories.add(component.category);
    });
    return Array.from(categories).sort();
  };

  // =========================================================
  // Advanced filter by multiple criteria
  // =========================================================
  const advancedFilter = (filters = {}) => {
    let results = [...componentDatabase];

    if (filters.query) {
      results = search(filters.query);
    }

    if (filters.categories && filters.categories.length > 0) {
      results = results.filter(c => filters.categories.includes(c.category));
    }

    if (filters.tags && filters.tags.length > 0) {
      results = results.filter(c => 
        filters.tags.every(tag => c.tags.includes(tag))
      );
    }

    if (filters.responsive !== undefined) {
      results = results.filter(c => c.responsive === filters.responsive);
    }

    if (filters.technologiesUsed && filters.technologiesUsed.length > 0) {
      results = results.filter(c => 
        filters.technologiesUsed.every(tech => c.tags.includes(tech))
      );
    }

    return results.sort((a, b) => (b.score || 0) - (a.score || 0));
  };

  // =========================================================
  // Get suggestions based on partial query
  // =========================================================
  const getSuggestions = (query, limit = 5) => {
    if (!query || query.length < 2) return [];

    const suggestions = new Set();
    const q = query.toLowerCase();

    // Get component name suggestions
    componentDatabase.forEach(component => {
      if (component.name.toLowerCase().includes(q)) {
        suggestions.add(component.name);
      }
    });

    // Get tag suggestions
    componentDatabase.forEach(component => {
      component.tags.forEach(tag => {
        if (tag.toLowerCase().includes(q)) {
          suggestions.add(tag);
        }
      });
    });

    return Array.from(suggestions)
      .slice(0, limit)
      .sort();
  };

  // =========================================================
  // Initialize search UI
  // =========================================================
  const initSearchUI = (containerId, options = {}) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const searchInput = container.querySelector('input[type="search"]') || 
                       container.querySelector('input[type="text"]');
    if (!searchInput) return;

    const resultContainer = options.resultContainerId 
      ? document.getElementById(options.resultContainerId)
      : container.nextElementSibling;

    // Debounced search handler
    const handleSearch = debounce((e) => {
      const query = e.target.value;
      const results = search(query);

      if (options.onSearch) {
        options.onSearch(results, query);
      } else if (resultContainer) {
        displayResults(results, resultContainer);
      }
    }, options.debounceDelay || 300);

    searchInput.addEventListener('input', handleSearch);

    // Autocomplete suggestions
    if (options.autoComplete) {
      const suggestionsHandler = debounce((e) => {
        const query = e.target.value;
        const suggestions = getSuggestions(query);

        if (options.onSuggestions) {
          options.onSuggestions(suggestions, query);
        }
      }, 200);

      searchInput.addEventListener('input', suggestionsHandler);
    }
  };

  // =========================================================
  // Display search results
  // =========================================================
  const displayResults = (results, container) => {
    if (!container) return;

    if (results.length === 0) {
      container.innerHTML = '<p style="color: #9ca3af; padding: 16px;">No components found</p>';
      return;
    }

    const html = results
      .map(result => `
        <div style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,.06); cursor: pointer;">
          <strong>${result.name}</strong>
          <p style="font-size: 12px; color: #6b7280; margin-top: 4px;">${result.category} • ${result.page}</p>
          <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-top: 6px;">
            ${result.tags.slice(0, 3).map(tag => 
              `<span style="font-size: 10px; background: rgba(235,104,53,.1); color: #eb6835; padding: 2px 6px; border-radius: 4px;">${tag}</span>`
            ).join('')}
          </div>
        </div>
      `)
      .join('');

    container.innerHTML = html;
  };

  // =========================================================
  // Get component by ID
  // =========================================================
  const getComponentById = (id) => {
    return componentDatabase.find(c => c.id === id);
  };

  // =========================================================
  // Get components by category
  // =========================================================
  const getComponentsByCategory = (category) => {
    return componentDatabase.filter(c => c.category === category);
  };

  // =========================================================
  // Get components by tag
  // =========================================================
  const getComponentsByTag = (tag) => {
    return componentDatabase.filter(c => c.tags.includes(tag));
  };

  return {
    search,
    advancedFilter,
    getSuggestions,
    getAllTags,
    getCategories,
    initSearchUI,
    getComponentById,
    getComponentsByCategory,
    getComponentsByTag,
    displayResults
  };
})();

// Export for use
if (typeof window !== 'undefined') {
  window.SmartSearch = SmartSearch;
}
