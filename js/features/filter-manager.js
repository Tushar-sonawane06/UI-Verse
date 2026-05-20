// =========================================================
// FILTER MANAGER
// Manages advanced filtering with multiple criteria
// =========================================================

const FilterManager = (() => {
  let activeFilters = {
    query: '',
    categories: [],
    tags: [],
    technologies: [],
    responsive: undefined
  };

  // =========================================================
  // Update filters
  // =========================================================
  const updateFilters = (newFilters) => {
    activeFilters = { ...activeFilters, ...newFilters };
    return activeFilters;
  };

  // =========================================================
  // Get current filters
  // =========================================================
  const getFilters = () => {
    return { ...activeFilters };
  };

  // =========================================================
  // Apply filters and return results
  // =========================================================
  const applyFilters = () => {
    const filters = {
      query: activeFilters.query,
      categories: activeFilters.categories,
      tags: activeFilters.tags,
      technologiesUsed: activeFilters.technologies,
      responsive: activeFilters.responsive
    };

    return SmartSearch.advancedFilter(filters);
  };

  // =========================================================
  // Reset all filters
  // =========================================================
  const resetFilters = () => {
    activeFilters = {
      query: '',
      categories: [],
      tags: [],
      technologies: [],
      responsive: undefined
    };
    return activeFilters;
  };

  // =========================================================
  // Clear specific filter
  // =========================================================
  const clearFilter = (filterName) => {
    if (filterName === 'query') {
      activeFilters.query = '';
    } else if (Array.isArray(activeFilters[filterName])) {
      activeFilters[filterName] = [];
    } else {
      activeFilters[filterName] = undefined;
    }
    return activeFilters;
  };

  // =========================================================
  // Add tag to filter
  // =========================================================
  const addTag = (tag) => {
    if (!activeFilters.tags.includes(tag)) {
      activeFilters.tags.push(tag);
    }
    return activeFilters;
  };

  // =========================================================
  // Remove tag from filter
  // =========================================================
  const removeTag = (tag) => {
    activeFilters.tags = activeFilters.tags.filter(t => t !== tag);
    return activeFilters;
  };

  // =========================================================
  // Add category to filter
  // =========================================================
  const addCategory = (category) => {
    if (!activeFilters.categories.includes(category)) {
      activeFilters.categories.push(category);
    }
    return activeFilters;
  };

  // =========================================================
  // Remove category from filter
  // =========================================================
  const removeCategory = (category) => {
    activeFilters.categories = activeFilters.categories.filter(c => c !== category);
    return activeFilters;
  };

  // =========================================================
  // Initialize filter UI
  // =========================================================
  const initFilterUI = (options = {}) => {
    // Category checkboxes
    const categoryCheckboxes = document.querySelectorAll('[data-filter-type="category"]');
    categoryCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const category = e.target.value;
        if (e.target.checked) {
          addCategory(category);
        } else {
          removeCategory(category);
        }
        if (options.onFilterChange) {
          options.onFilterChange(applyFilters());
        }
      });
    });

    // Tag checkboxes
    const tagCheckboxes = document.querySelectorAll('[data-filter-type="tag"]');
    tagCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const tag = e.target.value;
        if (e.target.checked) {
          addTag(tag);
        } else {
          removeTag(tag);
        }
        if (options.onFilterChange) {
          options.onFilterChange(applyFilters());
        }
      });
    });

    // Responsive filter
    const responsiveRadios = document.querySelectorAll('[data-filter-type="responsive"]');
    responsiveRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (e.target.value === 'all') {
          activeFilters.responsive = undefined;
        } else {
          activeFilters.responsive = e.target.value === 'true';
        }
        if (options.onFilterChange) {
          options.onFilterChange(applyFilters());
        }
      });
    });
  };

  return {
    updateFilters,
    getFilters,
    applyFilters,
    resetFilters,
    clearFilter,
    addTag,
    removeTag,
    addCategory,
    removeCategory,
    initFilterUI
  };
})();

if (typeof window !== 'undefined') {
  window.FilterManager = FilterManager;
}
