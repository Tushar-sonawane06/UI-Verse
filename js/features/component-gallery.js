/**
 * Component Gallery Feature
 * Manages component card filtering, searching, collection, and favorites functionality
 */

const ComponentGallery = {
  _state: {
    initialized: false,
    filterState: {
      selectedCategory: null,
      selectedTags: new Set(),
      searchQuery: ''
    },
    searchState: {
      results: [],
      activeIndex: -1,
      panelOpen: false
    },
    searchIndex: [],
    elementSelectors: {
      componentCard: '.component-card',
      filterBar: '.filter-bar',
      searchInput: '#searchInput',
      searchResults: '#componentSearchResults',
      categoryFilter: '.category-filters',
      tagFilter: '.tag-filters'
    }
  },

  _storageKeys: {
    favorites: 'uiVerseFavorites'
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
    this._ensureCardIdentifiers();
    this._buildSearchIndex();
    this._insertCollectionButtons();
    this._insertFavoriteButtons();
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

  _normalizeId(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  _splitTerms(value) {
    return String(value || '')
      .split(/[,|;]/g)
      .map((item) => this._normalizeToken(item))
      .filter(Boolean);
  },

  _levenshteinDistance(a, b) {
    const left = String(a || '');
    const right = String(b || '');
    if (!left.length) return right.length;
    if (!right.length) return left.length;

    const matrix = Array.from({ length: left.length + 1 }, () => new Array(right.length + 1).fill(0));
    for (let i = 0; i <= left.length; i += 1) matrix[i][0] = i;
    for (let j = 0; j <= right.length; j += 1) matrix[0][j] = j;

    for (let i = 1; i <= left.length; i += 1) {
      for (let j = 1; j <= right.length; j += 1) {
        const cost = left[i - 1] === right[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }

    return matrix[left.length][right.length];
  },

  _similarityScore(query, candidate) {
    const normalizedQuery = this._normalizeToken(query);
    const normalizedCandidate = this._normalizeToken(candidate);
    if (!normalizedQuery || !normalizedCandidate) return 0;

    if (normalizedCandidate === normalizedQuery) return 1;

    if (normalizedCandidate.includes(normalizedQuery)) {
      return Math.max(0.82, normalizedQuery.length / normalizedCandidate.length);
    }

    const distance = this._levenshteinDistance(normalizedQuery, normalizedCandidate);
    const longest = Math.max(normalizedQuery.length, normalizedCandidate.length);
    return longest ? Math.max(0, 1 - distance / longest) : 0;
  },

  _buildSearchIndex() {
    this._state.searchIndex = this._getComponentCards().map((card, index) => {
      const title = card.querySelector('.card-label, h3, h2, h4')?.textContent || card.dataset.name || 'Component';
      const aliases = this._splitTerms(card.dataset.aliases || card.dataset.alias || card.dataset.keywords || '');
      const tags = this._splitTerms(card.dataset.tags || '');
      const category = this._normalizeToken(card.dataset.cat || 'component');
      const description = this._normalizeToken(card.querySelector('.card-desc, p')?.textContent || '');
      const searchableText = this._normalizeToken([title, category, description, tags.join(' '), aliases.join(' ')].join(' '));

      return {
        id: card.dataset.componentId || String(index),
        card,
        index,
        title: this._normalizeToken(title),
        displayTitle: title,
        category,
        tags,
        aliases,
        description,
        searchableText,
        rawText: [title, category, description, tags.join(' '), aliases.join(' ')].join(' ')
      };
    });
  },

  _scoreSearchEntry(query, entry) {
    const normalizedQuery = this._normalizeToken(query);
    if (!normalizedQuery) return 0;

    let score = 0;
    const queryTerms = normalizedQuery.split(' ').filter(Boolean);
    const candidateText = entry.searchableText;

    if (candidateText.includes(normalizedQuery)) {
      score += 80;
      score += Math.max(0, 20 - candidateText.indexOf(normalizedQuery));
    }

    queryTerms.forEach((term) => {
      if (candidateText.includes(term)) {
        score += 15;
        return;
      }

      const bestMatch = [entry.title, entry.category, entry.description, ...entry.tags, ...entry.aliases]
        .reduce((best, candidate) => Math.max(best, this._similarityScore(term, candidate)), 0);
      score += bestMatch * 12;
    });

    const titleScore = this._similarityScore(normalizedQuery, entry.title) * 26;
    const categoryScore = this._similarityScore(normalizedQuery, entry.category) * 14;
    const tagScore = entry.tags.reduce((best, tag) => Math.max(best, this._similarityScore(normalizedQuery, tag) * 18), 0);
    const aliasScore = entry.aliases.reduce((best, alias) => Math.max(best, this._similarityScore(normalizedQuery, alias) * 22), 0);

    return score + titleScore + categoryScore + tagScore + aliasScore;
  },

  _getSuggestedEntries(query, limit = 4) {
    return this._state.searchIndex
      .map((entry) => ({ entry, score: this._scoreSearchEntry(query, entry) }))
      .filter(({ score }) => score > 0)
      .sort((left, right) => right.score - left.score)
      .slice(0, limit)
      .map(({ entry }) => entry);
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

  _ensureCardIdentifiers() {
    const pageKey = typeof getCurrentPageName === 'function'
      ? getCurrentPageName()
      : window.location.pathname.split('/').pop() || 'component';

    this._getComponentCards().forEach((card, index) => {
      if (!card.dataset.componentId || !card.dataset.componentId.trim()) {
        const label = card.querySelector('.card-label, h3, h2, h4')?.textContent || card.dataset.name || `component ${index + 1}`;
        const tags = card.dataset.tags || '';
        card.dataset.componentId = this._normalizeId([pageKey, label, tags].filter(Boolean).join(' '));
      } else {
        card.dataset.componentId = this._normalizeId(card.dataset.componentId);
      }
    });
  },

  _getFavorites() {
    if (window.Favorites && typeof window.Favorites.getFavoriteIds === 'function') {
      return window.Favorites.getFavoriteIds();
    }

    try {
      const raw = localStorage.getItem(this._storageKeys.favorites);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];

      return parsed
        .map((item) => {
          if (typeof item === 'string') return this._normalizeId(item);
          if (item && typeof item === 'object') return this._normalizeId(item.id || item.componentId);
          return '';
        })
        .filter(Boolean);
    } catch (e) {
      if (window.UIVERSE_DEBUG) console.error('getFavorites error', e);
      return [];
    }
  },

  _setFavorites(favorites) {
    const normalized = Array.from(new Set((favorites || []).map((id) => this._normalizeId(id)).filter(Boolean)));
    localStorage.setItem(this._storageKeys.favorites, JSON.stringify(normalized));
    return normalized;
  },

  _isFavorite(componentId) {
    const normalizedId = this._normalizeId(componentId);
    if (!normalizedId) return false;
    return this._getFavorites().includes(normalizedId);
  },

  _updateFavoriteButtonState(button, isActive) {
    if (!button) return;

    button.classList.toggle('is-favorited', Boolean(isActive));
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    button.innerHTML = isActive
      ? '<i class="fa-solid fa-star"></i> Favorite'
      : '<i class="fa-regular fa-star"></i> Favorite';
  },

  _syncFavoriteButtons() {
    this._getComponentCards().forEach((card) => {
      const favoriteButton = card.querySelector('.favorite-btn');
      if (!favoriteButton) return;

      this._updateFavoriteButtonState(favoriteButton, this._isFavorite(card.dataset.componentId));
    });
  },

  _toggleFavoriteFromCard(button) {
    const card = button?.closest?.('.component-card');
    if (!card) return;

    if (window.Favorites && typeof window.Favorites.toggleFromCard === 'function') {
      window.Favorites.toggleFromCard(card);
      this._syncFavoriteButtons();
      this._applyFilters();
      return;
    }

    try {
      const componentId = this._normalizeId(card.dataset.componentId);
      if (!componentId) return;

      const title = card.querySelector('.card-label')?.textContent || card.dataset.name || 'Component';
      const favorites = this._getFavorites();
      const exists = favorites.includes(componentId);

      if (exists) {
        this._setFavorites(favorites.filter((id) => id !== componentId));
        if (typeof showToast === 'function') {
          showToast(title + ' removed from favorites');
        }
      } else {
        this._setFavorites([...favorites, componentId]);
        if (typeof showToast === 'function') {
          showToast(title + ' added to favorites');
        }
      }

      this._syncFavoriteButtons();
      this._applyFilters();
    } catch (e) {
      if (window.UIVERSE_DEBUG) console.error('toggleFavoriteFromCard error', e);
      if (typeof showToast === 'function') {
        showToast('Failed to update favorites');
      }
    }
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

        const versionBtn = document.createElement('a');
        versionBtn.className = 'action-btn version-history-btn';
        versionBtn.href = `component-version-history.html?component=${encodeURIComponent(card.dataset.componentId || '')}`;
        versionBtn.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i> Version History';
        actions.appendChild(versionBtn);
      });
    } catch (e) {
      if (window.UIVERSE_DEBUG) console.error('insertCollectionButtons', e);
    }
  },

  _insertFavoriteButtons() {
    try {
      this._getComponentCards().forEach((card) => {
        if (card.querySelector('.favorite-btn')) return;

        const actions = card.querySelector('.actions') || (() => {
          const container = document.createElement('div');
          container.className = 'actions';
          card.appendChild(container);
          return container;
        })();

        const favoriteButton = document.createElement('button');
        favoriteButton.className = 'action-btn favorite-btn';
        favoriteButton.type = 'button';
        favoriteButton.setAttribute('aria-pressed', 'false');
        favoriteButton.addEventListener('click', () => this._toggleFavoriteFromCard(favoriteButton));

        this._updateFavoriteButtonState(favoriteButton, this._isFavorite(card.dataset.componentId));
        actions.insertBefore(favoriteButton, actions.firstChild || null);
      });
    } catch (e) {
      if (window.UIVERSE_DEBUG) console.error('insertFavoriteButtons', e);
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
      categories: Array.from(new Set(['favorites', ...Array.from(categories).sort()])),
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
    allChip.addEventListener('click', (e) => this._selectCategory(e.currentTarget.dataset.category, e.currentTarget));
    categoryChips.appendChild(allChip);

    // Category chips
    metadata.categories.forEach(cat => {
      const chip = document.createElement('button');
      chip.className = 'filter-chip';
      chip.innerHTML = cat === 'favorites'
        ? '<i class="fa-solid fa-star"></i> Favorites'
        : cat.charAt(0).toUpperCase() + cat.slice(1);
      chip.dataset.category = cat;
      chip.addEventListener('click', (e) => this._selectCategory(e.currentTarget.dataset.category, e.currentTarget));
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
        chip.addEventListener('click', (e) => this._toggleTag(e.currentTarget.dataset.tag, e.currentTarget));
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

  _passesFacetFilters(entry) {
    const selectedCategory = this._state.filterState.selectedCategory;
    const selectedTags = this._state.filterState.selectedTags;

    const categoryMatch = !selectedCategory ||
      (selectedCategory === 'favorites'
        ? this._isFavorite(entry.id)
        : entry.category === selectedCategory);

    const tagMatch = selectedTags.size === 0 ||
      Array.from(selectedTags).some((tag) => entry.tags.includes(tag));

    return categoryMatch && tagMatch;
  },

  _getFilteredSearchEntries(query) {
    const normalizedQuery = this._normalizeToken(query);
    return this._state.searchIndex
      .filter((entry) => this._passesFacetFilters(entry))
      .map((entry) => ({ entry, score: normalizedQuery ? this._scoreSearchEntry(normalizedQuery, entry) : 1 }))
      .filter(({ score }) => normalizedQuery === '' ? true : score > 0)
      .sort((left, right) => right.score - left.score || left.entry.index - right.entry.index);
  },

  _ensureSearchResultsPanel() {
    let panel = document.querySelector(this._state.elementSelectors.searchResults);
    if (panel) return panel;

    const filterBar = this._ensureFilterBar();
    if (!filterBar) return null;

    panel = document.createElement('div');
    panel.id = 'componentSearchResults';
    panel.className = 'search-results-panel';
    filterBar.insertAdjacentElement('afterend', panel);
    return panel;
  },

  _setActiveSearchIndex(index) {
    const items = Array.from(document.querySelectorAll('.search-result-item'));
    if (items.length === 0) {
      this._state.searchState.activeIndex = -1;
      return;
    }

    const maxIndex = items.length - 1;
    const nextIndex = Math.max(0, Math.min(index, maxIndex));
    this._state.searchState.activeIndex = nextIndex;

    items.forEach((item, itemIndex) => {
      const isActive = itemIndex === nextIndex;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) item.scrollIntoView({ block: 'nearest' });
    });
  },

  _selectSearchResult(result) {
    if (!result) return;

    const card = result.entry.card;
    if (!card) return;

    card.style.display = '';
    card.classList.add('search-hit');
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => card.classList.remove('search-hit'), 1400);

    this._state.searchState.panelOpen = false;
    const panel = document.querySelector(this._state.elementSelectors.searchResults);
    panel?.classList.remove('open');
  },

  _renderSearchResults(query) {
    const panel = this._ensureSearchResultsPanel();
    if (!panel) return [];

    const normalizedQuery = this._normalizeToken(query);
    const entries = this._getFilteredSearchEntries(normalizedQuery);
    const results = entries.map((item) => item.entry);
    const similarResults = normalizedQuery ? this._getSuggestedEntries(normalizedQuery, 4) : [];
    const visibleResults = results.slice(0, 8);
    const noResults = normalizedQuery && visibleResults.length === 0;

    const renderedResults = noResults ? similarResults : visibleResults;

    this._state.searchState.results = renderedResults;
    this._state.searchState.activeIndex = renderedResults.length > 0 ? Math.min(this._state.searchState.activeIndex, renderedResults.length - 1) : -1;
    this._state.searchState.panelOpen = Boolean(normalizedQuery);

    if (!normalizedQuery) {
      panel.innerHTML = '';
      panel.classList.remove('open');
      return visibleResults;
    }

    const titleText = noResults ? 'No results' : 'Results';
    const itemsHtml = renderedResults.map((entry, index) => {
      const scoreMeta = normalizedQuery ? Math.round(noResults ? this._scoreSearchEntry(normalizedQuery, entry) : entries[index]?.score || 0) : 0;
      const tags = entry.tags.slice(0, 3).map((tag) => `<span class="search-result-tag">${tag}</span>`).join('');
      return `
        <button type="button" class="search-result-item" data-result-index="${index}" aria-selected="${index === 0 ? 'true' : 'false'}">
          <span class="search-result-main">
            <span class="search-result-title">${entry.displayTitle}</span>
            <span class="search-result-meta">${entry.category}${scoreMeta ? ` • ${scoreMeta}` : ''}</span>
          </span>
          <span class="search-result-tags">${tags}</span>
        </button>
      `;
    }).join('');

    panel.innerHTML = `
      <div class="search-results-header">
        <span>${titleText}</span>
        <span class="search-results-count">${normalizedQuery ? visibleResults.length : 0}</span>
      </div>
      ${noResults ? '<div class="search-no-results">No matches found. Similar items are shown below.</div>' : ''}
      <div class="search-results-list" role="listbox" aria-label="Component search results">
        ${itemsHtml || '<div class="search-no-results">No matching components.</div>'}
      </div>
    `;

    panel.classList.add('open');
    const items = Array.from(panel.querySelectorAll('.search-result-item'));
    items.forEach((item) => {
      item.addEventListener('click', () => {
        const resultIndex = Number(item.dataset.resultIndex || 0);
        const result = renderedResults[resultIndex];
        this._selectSearchResult({ entry: result });
      });
    });

    if (items.length > 0) {
      this._setActiveSearchIndex(Math.max(0, Math.min(this._state.searchState.activeIndex, items.length - 1)));
    }

    return visibleResults;
  },

  _moveSearchSelection(direction) {
    const items = Array.from(document.querySelectorAll('.search-result-item'));
    if (items.length === 0) return;

    const currentIndex = this._state.searchState.activeIndex < 0 ? 0 : this._state.searchState.activeIndex;
    const nextIndex = Math.max(0, Math.min(items.length - 1, currentIndex + direction));
    this._setActiveSearchIndex(nextIndex);
  },

  /**
   * Apply all active filters
   * @private
   */
  _applyFilters() {
    const query = this._state.filterState.searchQuery;
    const rankedResults = this._getFilteredSearchEntries(query);
    const visibleCards = new Set(rankedResults.map(({ entry }) => entry.card));
    const hasQuery = Boolean(this._normalizeToken(query));

    this._getComponentCards().forEach((card) => {
      const shouldShow = !hasQuery || visibleCards.has(card);
      card.style.display = shouldShow ? '' : 'none';
    });

    if (hasQuery) {
      this._renderSearchResults(query);
      if (rankedResults.length === 0) {
        const panel = this._ensureSearchResultsPanel();
        if (panel) panel.classList.add('open');
      }
    } else {
      this._state.searchState.results = [];
      this._state.searchState.activeIndex = -1;
      const panel = this._ensureSearchResultsPanel();
      panel?.classList.remove('open');
      panel && (panel.innerHTML = '');
    }
  },

  /**
   * Focus matching card in search
   * @private
   */
  _focusMatchingCard(query) {
    const normalized = this._normalizeToken(query);
    if (!normalized) return false;

    const result = this._getFilteredSearchEntries(normalized)[0];
    const matched = result?.entry?.card;
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

    // Keyboard navigation and Enter selection
    searchInput.addEventListener('keydown', (e) => this._handleSearchKeyboard(e));
  },

  _handleSearchKeyboard(event) {
    const normalized = this._normalizeToken(event.target?.value || '');

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!normalized) return;
      this._moveSearchSelection(1);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!normalized) return;
      this._moveSearchSelection(-1);
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      this._state.filterState.searchQuery = normalized;
      this._applyFilters();

      const activeResult = this._state.searchState.results[this._state.searchState.activeIndex] || this._state.searchState.results[0];
      if (activeResult) {
        this._selectSearchResult({ entry: activeResult });
        return;
      }

      if (this._focusMatchingCard(normalized)) return;

      showToast('No results found. Try a broader term.');
    }
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

      .search-results-panel {
        display: none;
        margin: 0 0 18px;
        padding: 12px;
        border: 1px solid var(--card-border);
        border-radius: 16px;
        background: var(--surface);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
      }

      .search-results-panel.open {
        display: block;
      }

      .search-results-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 10px;
        font-size: 13px;
        font-weight: 700;
        color: var(--text-primary);
      }

      .search-results-count {
        color: var(--text-secondary);
        font-weight: 600;
      }

      .search-results-list {
        display: grid;
        gap: 8px;
      }

      .search-result-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 10px 12px;
        border: 1px solid var(--card-border);
        border-radius: 12px;
        background: var(--surface);
        color: var(--text-primary);
        cursor: pointer;
        text-align: left;
        transition: all 0.2s ease;
      }

      .search-result-item:hover,
      .search-result-item.active {
        border-color: var(--accent);
        box-shadow: 0 0 0 3px var(--focus-ring);
        transform: translateY(-1px);
      }

      .search-result-main {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .search-result-title {
        font-size: 13px;
        font-weight: 700;
        color: var(--text-primary);
      }

      .search-result-meta {
        font-size: 11px;
        color: var(--text-secondary);
      }

      .search-result-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        justify-content: flex-end;
      }

      .search-result-tag {
        font-size: 10px;
        padding: 2px 8px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--accent) 10%, transparent);
        color: var(--accent);
        white-space: nowrap;
      }

      .search-no-results {
        padding: 10px 12px;
        border-radius: 12px;
        background: rgba(235, 104, 53, 0.08);
        color: var(--text-primary);
        font-size: 13px;
        font-weight: 600;
      }

      .filter-chip i,
      .favorite-btn i {
        margin-right: 6px;
      }

      .favorite-btn.is-favorited {
        border-color: rgba(255, 193, 7, 0.45);
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.18), rgba(255, 171, 0, 0.24));
        color: #ffcf54;
      }

      .favorite-btn.is-favorited:hover {
        transform: translateY(-1px);
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
    this._state.searchState = {
      results: [],
      activeIndex: -1,
      panelOpen: false
    };
    this._state.searchIndex = [];
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
