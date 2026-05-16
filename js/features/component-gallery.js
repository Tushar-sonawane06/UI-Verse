/**
 * Component Gallery Feature
 * Manages component card filtering, searching, and collection functionality
 */

const ComponentGallery = {
  _state: {
    initialized: false,
    filterState: {
      selectedCategory: null,
      selectedTags: new Set(),
      searchQuery: ''
    },
    elementSelectors: {
      componentCard: '.component-card',
      filterBar: '.filter-bar',
      searchInput: '#searchInput',
      categoryFilter: '.category-filters',
      tagFilter: '.tag-filters'
    }
  },

  /**
   * Initialize component gallery
   */
  init() {
    if (this._state.initialized) return;

    // Only initialize if component cards exist
    if (!document.querySelector(this._state.elementSelectors.componentCard)) {
      this._state.initialized = true;
      return;
    }

    this._normalizeCardMetadata();
    this._injectCopyButtons();
    this._insertCollectionButtons();
    this._createFilterUI();
    this._initSearchFilter();
    this._injectSmartFilterStyles();
    this._state.initialized = true;
  },

  /**
   * Get all component cards
   * @private
   */
  _getComponentCards() {
    return Array.from(document.querySelectorAll(this._state.elementSelectors.componentCard));
  },

  /**
   * Normalize token for filtering
   * @private
   */
  _normalizeToken(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  },

  /**
   * Infer category from current page
   * @private
   */
  _inferCategoryFromPage() {
    const page = getCurrentPageName();
    const categories = {
      button: 'button',
      card: 'card',
      form: 'form',
      input: 'input',
      alert: 'alert',
      toggle: 'toggle',
      loader: 'loader',
      menu: 'menu',
      map: 'map',
      span: 'text',
      testimonial: 'testimonial'
    };

    for (const [keyword, category] of Object.entries(categories)) {
      if (page.includes(keyword)) return category;
    }
    return 'component';
  },

  /**
   * Infer card name from HTML content
   * @private
   */
  _inferCardName(card) {
    const label = card.querySelector('.card-label, h3, h2, h4')?.textContent;
    const desc = card.querySelector('.card-desc, p')?.textContent;
    const cat = card.dataset.cat || this._inferCategoryFromPage();
    return this._normalizeToken([cat, label, desc].filter(Boolean).join(' '));
  },

  /**
   * Infer card tags from HTML content
   * @private
   */
  _inferCardTags(card) {
    const explicitTagText = Array.from(card.querySelectorAll('.card-tag, .tag, [data-tag]'))
      .map((el) => this._normalizeToken(el.textContent || el.getAttribute('data-tag')))
      .filter(Boolean);

    if (explicitTagText.length > 0) {
      return Array.from(new Set(explicitTagText));
    }

    const tokens = this._inferCardName(card)
      .split(' ')
      .filter((token) => token.length > 3)
      .slice(0, 6);
    return Array.from(new Set(tokens));
  },

  /**
   * Normalize card metadata (data attributes)
   * @private
   */
  _normalizeCardMetadata() {
    const defaultCat = this._inferCategoryFromPage();
    this._getComponentCards().forEach((card) => {
      if (!card.dataset.cat || !card.dataset.cat.trim()) {
        card.dataset.cat = this._normalizeToken(defaultCat) || 'component';
      } else {
        card.dataset.cat = this._normalizeToken(card.dataset.cat);
      }

      if (!card.dataset.name || !card.dataset.name.trim()) {
        card.dataset.name = this._inferCardName(card);
      } else {
        card.dataset.name = this._normalizeToken(card.dataset.name);
      }

      if (!card.dataset.tags || !card.dataset.tags.trim()) {
        card.dataset.tags = this._inferCardTags(card).join(', ');
      } else {
        const normalizedTags = card.dataset.tags
          .split(',')
          .map((t) => this._normalizeToken(t))
          .filter(Boolean);
        card.dataset.tags = Array.from(new Set(normalizedTags)).join(', ');
      }
    });
  },

  /**
   * Inject copy buttons for code blocks
   * @private
   */
  _injectCopyButtons() {
    try {
      let counter = 0;
      const nodes = Array.from(document.querySelectorAll('pre.code-block, pre.playground-code, pre > code'));
      nodes.forEach(node => {
        const pre = node.tagName.toLowerCase() === 'pre' ? node : node.closest('pre');
        if (!pre || pre.dataset.copyInjected) return;
        
        pre.dataset.copyInjected = '1';

        if (!pre.id) {
          pre.id = 'code-snippet-' + (Date.now().toString(36)) + '-' + (counter++);
        }

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'action-btn copy-btn';
        btn.setAttribute('aria-label', 'Copy code');
        btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (typeof copyCode === 'function') {
            copyCode(pre.id, btn);
          }
        });

        pre.parentNode.insertBefore(btn, pre);
      });
    } catch (e) {
      if (window.UIVERSE_DEBUG) console.error('injectCopyButtons', e);
    }
  },

  /**
   * Insert collection buttons for cards
   * @private
   */
  _insertCollectionButtons() {
    try {
      this._getComponentCards().forEach(card => {
        if (card.querySelector('.add-collection-btn')) return;
        
        const actions = card.querySelector('.actions') || (() => {
          const d = document.createElement('div');
          d.className = 'actions';
          card.appendChild(d);
          return d;
        })();

        const title = card.querySelector('.card-label')?.textContent || card.dataset.name || 'Component';
        const btn = document.createElement('button');
        btn.className = 'action-btn add-collection-btn';
        btn.type = 'button';
        btn.innerHTML = '<i class="fa-solid fa-bookmark"></i> Add to My Collection';
        btn.addEventListener('click', () => this._addToCollectionFromCard(btn, title));
        actions.appendChild(btn);
      });
    } catch (e) {
      if (window.UIVERSE_DEBUG) console.error('insertCollectionButtons', e);
    }
  },

  /**
   * Add component to user collection
   * @private
   */
  _addToCollection(name, html) {
    try {
      let items = JSON.parse(localStorage.getItem('collection')) || [];
      const content = (html || '').trim();
      const title = (name || 'Component').trim();
      const newItem = { title, content, id: Date.now() };

      const exists = items.some(i => 
        i.title === newItem.title || 
        (i.content === newItem.content && i.content !== '')
      );

      if (!exists) {
        items.push(newItem);
        localStorage.setItem('collection', JSON.stringify(items));
        if (typeof showToast === 'function') {
          showToast(title + ' added to collection ✓');
        }
      } else {
        if (typeof showToast === 'function') {
          showToast('Already in collection');
        }
      }
    } catch (e) {
      if (window.UIVERSE_DEBUG) console.error('addToCollection error', e);
      if (typeof showToast === 'function') {
        showToast('Failed to add to collection');
      }
    }
  },

  /**
   * Add component card to collection
   * @private
   */
  _addToCollectionFromCard(button, name) {
    try {
      const card = button?.closest?.('.component-card');
      let html = '';

      if (card) {
        // Prefer explicit code block
        const codeBlock = card.querySelector('.code-block, pre, code, textarea');
        if (codeBlock) {
          html = codeBlock.textContent || codeBlock.value || codeBlock.innerText || '';
        }

        // Fallback: live preview areas
        if (!html) {
          const preview = card.querySelector('.card-preview, .preview, .card-top ~ .card-preview');
          if (preview) html = preview.innerHTML.trim();
        }

        // Last resort: card innerHTML
        if (!html) html = card.innerHTML.trim();
      }

      this._addToCollection(
        name || (card?.querySelector('.card-label')?.textContent || card?.dataset.name) || 'Component',
        html
      );
    } catch (e) {
      if (window.UIVERSE_DEBUG) console.error('addToCollectionFromCard', e);
      if (typeof showToast === 'function') {
        showToast('Failed to add to collection');
      }
    }
  },

  /**
   * Extract unique categories and tags
   * @private
   */
  _extractFilterMetadata() {
    const categories = new Set();
    const tags = new Set();

    this._getComponentCards().forEach(card => {
      if (card.dataset.cat) categories.add(card.dataset.cat);
      if (card.dataset.tags) {
        const cardTags = card.dataset.tags.split(',').map(t => t.trim());
        cardTags.forEach(tag => tags.add(tag));
      }
    });

    return {
      categories: Array.from(categories).sort(),
      tags: Array.from(tags).sort()
    };
  },

  /**
   * Ensure filter bar exists
   * @private
   */
  _ensureFilterBar() {
    let container = document.querySelector(this._state.elementSelectors.filterBar);
    if (container) return container;

    container = document.createElement('div');
    container.className = 'filter-bar auto-filter-bar';

    const searchInput = document.querySelector(this._state.elementSelectors.searchInput);
    if (searchInput?.parentElement) {
      searchInput.parentElement.insertAdjacentElement('afterend', container);
      return container;
    }

    const firstCard = this._getComponentCards()[0];
    if (!firstCard) return null;

    firstCard.parentElement?.insertBefore(container, firstCard);
    return container;
  },

  /**
   * Create filter UI (categories and tags)
   * @private
   */
  _createFilterUI() {
    const container = this._ensureFilterBar();
    if (!container) return;

    container.querySelectorAll('.category-filters, .tag-filters').forEach((el) => el.remove());

    const metadata = this._extractFilterMetadata();

    // Create category filter
    const categoryContainer = document.createElement('div');
    categoryContainer.className = 'category-filters';
    categoryContainer.innerHTML = '<div class="filter-label">Categories:</div>';

    const categoryChips = document.createElement('div');
    categoryChips.className = 'filter-chips';

    // "All" chip
    const allChip = document.createElement('button');
    allChip.className = 'filter-chip active';
    allChip.textContent = 'All';
    allChip.dataset.category = 'all';
    allChip.addEventListener('click', (e) => this._selectCategory(e.target.dataset.category, e.target));
    categoryChips.appendChild(allChip);

    // Category chips
    metadata.categories.forEach(cat => {
      const chip = document.createElement('button');
      chip.className = 'filter-chip';
      chip.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
      chip.dataset.category = cat;
      chip.addEventListener('click', (e) => this._selectCategory(e.target.dataset.category, e.target));
      categoryChips.appendChild(chip);
    });

    categoryContainer.appendChild(categoryChips);
    container.appendChild(categoryContainer);

    // Create tag filter
    if (metadata.tags.length > 0) {
      const tagContainer = document.createElement('div');
      tagContainer.className = 'tag-filters';
      tagContainer.innerHTML = '<div class="filter-label">Tags:</div>';

      const tagChips = document.createElement('div');
      tagChips.className = 'filter-chips';

      metadata.tags.forEach(tag => {
        const chip = document.createElement('button');
        chip.className = 'filter-chip';
        chip.textContent = tag;
        chip.dataset.tag = tag;
        chip.addEventListener('click', (e) => this._toggleTag(e.target.dataset.tag, e.target));
        tagChips.appendChild(chip);
      });

      tagContainer.appendChild(tagChips);
      container.appendChild(tagContainer);
    }
  },

  /**
   * Select a category (single select)
   * @private
   */
  _selectCategory(category, element) {
    document.querySelectorAll('.category-filters .filter-chip').forEach(chip => {
      chip.classList.remove('active');
    });

    element.classList.add('active');
    this._state.filterState.selectedCategory = category === 'all' ? null : category;
    this._applyFilters();
  },

  /**
   * Toggle a tag (multi-select)
   * @private
   */
  _toggleTag(tag, element) {
    element.classList.toggle('active');
    if (element.classList.contains('active')) {
      this._state.filterState.selectedTags.add(tag);
    } else {
      this._state.filterState.selectedTags.delete(tag);
    }
    this._applyFilters();
  },

  /**
   * Apply all active filters
   * @private
   */
  _applyFilters() {
    const cards = this._getComponentCards();

    cards.forEach(card => {
      const cardCategory = card.dataset.cat;
      const cardTags = card.dataset.tags ? card.dataset.tags.split(',').map(t => t.trim()) : [];
      const cardName = (card.dataset.name || card.innerText).toLowerCase();

      const categoryMatch = !this._state.filterState.selectedCategory ||
        cardCategory === this._state.filterState.selectedCategory;

      const tagMatch = this._state.filterState.selectedTags.size === 0 ||
        Array.from(this._state.filterState.selectedTags).some(tag => cardTags.includes(tag));

      const searchMatch = this._state.filterState.searchQuery === '' ||
        cardName.includes(this._state.filterState.searchQuery) ||
        cardTags.some((tag) => tag.includes(this._state.filterState.searchQuery)) ||
        cardCategory.includes(this._state.filterState.searchQuery);

      card.style.display = (categoryMatch && tagMatch && searchMatch) ? '' : 'none';
    });
  },

  /**
   * Focus matching card in search
   * @private
   */
  _focusMatchingCard(query) {
    const normalized = this._normalizeToken(query);
    if (!normalized) return false;

    const cards = this._getComponentCards();
    const matched = cards.find((card) => {
      const searchable = [card.dataset.name, card.dataset.cat, card.dataset.tags].join(' ').toLowerCase();
      return searchable.includes(normalized);
    });

    if (!matched) return false;

    matched.style.display = '';
    matched.classList.add('search-hit');
    matched.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => matched.classList.remove('search-hit'), 1400);
    return true;
  },

  /**
   * Initialize search filter and routing
   * @private
   */
  _initSearchFilter() {
    let searchInput = document.querySelector(this._state.elementSelectors.searchInput);
    if (!searchInput) {
      // Create search input if it doesn't exist
      const filterBar = this._ensureFilterBar();
      if (!filterBar) return;

      searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.id = 'searchInput';
      searchInput.placeholder = 'Search components and press Enter to jump...';
      filterBar.insertAdjacentElement('afterbegin', searchInput);
    }

    // Load search from URL
    const queryFromUrl = new URLSearchParams(window.location.search).get('q');
    if (queryFromUrl && !searchInput.value) {
      searchInput.value = queryFromUrl;
      this._state.filterState.searchQuery = this._normalizeToken(queryFromUrl);
    }

    // Input event listener
    searchInput.addEventListener('input', (e) => {
      this._state.filterState.searchQuery = this._normalizeToken(e.target.value);
      this._applyFilters();
    });

    // Enter key handler
    searchInput.addEventListener('keypress', (e) => this._handleSearchEnter(e));
  },

  /**
   * Handle Enter key in search input
   * @private
   */
  _handleSearchEnter(event) {
    if (event.key !== 'Enter') return;

    const query = this._normalizeToken(event.target.value || '');
    this._state.filterState.searchQuery = query;
    this._applyFilters();

    if (this._focusMatchingCard(query)) {
      return;
    }

    // Route to appropriate page
    const routes = {
      button: 'button.html',
      buttons: 'button.html',
      navbar: 'navbar.html',
      navbars: 'navbar.html',
      card: 'cards.html',
      cards: 'cards.html',
      form: 'form.html',
      forms: 'form.html',
      input: 'inputs.html',
      inputs: 'inputs.html',
      alert: 'alerts.html',
      alerts: 'alerts.html',
      toggle: 'toggles.html',
      toggles: 'toggles.html',
      loader: 'loaders.html',
      loaders: 'loaders.html',
      menu: 'menu.html',
      map: 'map.html',
      testimonial: 'testimonials.html',
      testimonials: 'testimonials.html',
      span: 'span.html',
      footer: 'footer.html',
      color: 'color.html',
      colors: 'color.html'
    };

    for (const k in routes) {
      if (query.includes(k)) {
        const target = routes[k];
        const current = getCurrentPageName();
        if (current === target.toLowerCase()) {
          if (this._focusMatchingCard(query)) return;
        } else {
          window.location.href = resolveRouteURL(target, { q: query });
        }
        return;
      }
    }

    if (typeof showToast === 'function') {
      showToast('No component found 😢');
    }
  },

  /**
   * Inject smart filter styles
   * @private
   */
  _injectSmartFilterStyles() {
    if (document.getElementById('smart-filter-style')) return;

    const style = document.createElement('style');
    style.id = 'smart-filter-style';
    style.textContent = `
      .auto-filter-bar {
        margin: 12px 0 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      #searchInput {
        width: 100%;
        max-width: 520px;
      }

      .search-hit {
        outline: 2px solid #48dbfb;
        box-shadow: 0 0 0 6px rgba(72, 219, 251, 0.18);
        transition: box-shadow 0.25s ease;
      }

      .filter-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
    `;
    document.head.appendChild(style);
  },

  /**
   * Public API: Add to collection (for backward compat)
   */
  addToCollection(name, html) {
    this._addToCollection(name, html);
  },

  destroy() {
    this._state.filterState = {
      selectedCategory: null,
      selectedTags: new Set(),
      searchQuery: ''
    };
    this._state.initialized = false;
  }
};

// Export to global
if (typeof window !== 'undefined') {
  window.ComponentGallery = ComponentGallery;
  // Legacy global function for backward compatibility
  window.addToCollection = (name, html) => ComponentGallery.addToCollection(name, html);
}

// ESM export if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ComponentGallery;
}
