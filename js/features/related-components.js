/**
 * ==========================================================
 * Related Components Feature
 * UIverse
 * Part 1 - Core Module, Configuration, Initialization
 * ==========================================================
 */

const RelatedComponents = {
  version: '1.0.0',

  initialized: false,

  config: {
    maxSuggestions: 6,
    minScore: 20,
    storageKey: 'uiverse-related-components-history',
    sectionClass: 'related-components-section',
    cardClass: 'related-component-card',
    titleClass: 'related-components-title',
    gridClass: 'related-components-grid',
    loadingClass: 'related-components-loading',
    emptyClass: 'related-components-empty'
  },

  state: {
    currentComponent: null,
    allComponents: [],
    relatedComponents: [],
    viewHistory: [],
    recommendationCache: {},
    lastRenderTime: null
  },

  /**
   * Initialize Feature
   */
  init() {
    if (this.initialized) {
      return;
    }

    try {
      this.loadHistory();
      this.detectCurrentComponent();
      this.collectComponents();
      this.calculateRecommendations();
      this.render();

      this.initialized = true;

      console.log(
        '[RelatedComponents] Initialized'
      );
    } catch (error) {
      console.error(
        '[RelatedComponents]',
        error
      );
    }
  },

  /**
   * Detect current component page
   */
  detectCurrentComponent() {
    const pathname =
      window.location.pathname;

    const pageName =
      pathname
        .split('/')
        .pop()
        ?.replace('.html', '');

    this.state.currentComponent =
      pageName || 'unknown';

    this.addToHistory(pageName);
  },

  /**
   * Collect component data
   */
  collectComponents() {
    const cards =
      document.querySelectorAll(
        '.component-card'
      );

    const discovered = [];

    cards.forEach(
      (card, index) => {
        const title =
          card.querySelector(
            'h2,h3,h4,.title'
          )?.textContent || '';

        const tags =
          (
            card.dataset.tags ||
            ''
          )
            .split(',')
            .map(tag =>
              tag.trim()
            );

        discovered.push({
          id:
            title
              .toLowerCase()
              .replace(
                /\s+/g,
                '-'
              ) ||
            `component-${index}`,
          title,
          tags,
          category:
            card.dataset.category ||
            'general',
          element: card
        });
      }
    );

    this.state.allComponents =
      discovered;
  },

  /**
   * Load history
   */
  loadHistory() {
    try {
      const saved =
        localStorage.getItem(
          this.config.storageKey
        );

      if (!saved) {
        this.state.viewHistory =
          [];
        return;
      }

      this.state.viewHistory =
        JSON.parse(saved);
    } catch (error) {
      this.state.viewHistory =
        [];
    }
  },

  /**
   * Save history
   */
  saveHistory() {
    try {
      localStorage.setItem(
        this.config.storageKey,
        JSON.stringify(
          this.state.viewHistory
        )
      );
    } catch (error) {
      console.warn(
        '[RelatedComponents]',
        error
      );
    }
  },

  /**
   * Add page visit
   */
  addToHistory(name) {
    if (!name) {
      return;
    }

    const history =
      this.state.viewHistory;

    history.unshift({
      component: name,
      timestamp:
        Date.now()
    });

    if (history.length > 50) {
      history.length = 50;
    }

    this.saveHistory();
  },

  /**
   * Recommendation Engine
   */
  calculateRecommendations() {
    const current =
      this.state.currentComponent;

    const suggestions = [];

    this.state.allComponents.forEach(
      component => {
        const score =
          this.calculateScore(
            component
          );

        if (
          score >=
          this.config.minScore
        ) {
          suggestions.push({
            ...component,
            score
          });
        }
      }
    );

    suggestions.sort(
      (a, b) =>
        b.score - a.score
    );

    this.state.relatedComponents =
      suggestions.slice(
        0,
        this.config.maxSuggestions
      );
  },

  /**
   * Score Component
   */
  calculateScore(
    component
  ) {
    let score = 0;

    const current =
      this.state.currentComponent;

    if (
      component.id ===
      current
    ) {
      return 0;
    }

    score +=
      this.calculateTagScore(
        component
      );

    score +=
      this.calculateCategoryScore(
        component
      );

    score +=
      this.calculateHistoryScore(
        component
      );

    score +=
      this.calculatePopularityScore(
        component
      );

    return score;
  },

  /**
   * Tag Score
   */
  calculateTagScore(
    component
  ) {
    let score = 0;

    const currentTags =
      this.getCurrentTags();

    component.tags.forEach(
      tag => {
        if (
          currentTags.includes(
            tag
          )
        ) {
          score += 10;
        }
      }
    );

    return score;
  },

  /**
   * Category Score
   */
  calculateCategoryScore(
    component
  ) {
    const category =
      this.getCurrentCategory();

    if (
      component.category ===
      category
    ) {
      return 40;
    }

    return 0;
  },

  /**
   * History Score
   */
  calculateHistoryScore(
    component
  ) {
    let score = 0;

    this.state.viewHistory.forEach(
      item => {
        if (
          item.component ===
          component.id
        ) {
          score += 5;
        }
      }
    );

    return score;
  },

  /**
   * Popularity Score
   */
  calculatePopularityScore(
    component
  ) {
    return Math.floor(
      Math.random() * 20
    );
  },

  /**
   * Current Tags
   */
  getCurrentTags() {
    const meta =
      document.querySelector(
        '[data-tags]'
      );

    if (!meta) {
      return [];
    }

    return (
      meta.dataset.tags || ''
    )
      .split(',')
      .map(tag =>
        tag.trim()
      );
  },

  /**
   * Current Category
   */
  getCurrentCategory() {
    const meta =
      document.querySelector(
        '[data-category]'
      );

    return (
      meta?.dataset.category ||
      'general'
    );
  },/**
 * ==========================================================
 * Related Components Feature
 * Part 2 - Rendering System & UI Generation
 * ==========================================================
 */

  /**
   * Render Recommendations Section
   */
  render() {
    this.removeExistingSection();

    const section =
      this.createSection();

    const title =
      this.createTitle();

    const description =
      this.createDescription();

    const grid =
      this.createGrid();

    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(grid);

    this.insertSection(section);

    this.state.lastRenderTime =
      Date.now();
  },

  /**
   * Remove Existing Section
   */
  removeExistingSection() {
    const existing =
      document.querySelector(
        `.${this.config.sectionClass}`
      );

    if (existing) {
      existing.remove();
    }
  },

  /**
   * Create Root Section
   */
  createSection() {
    const section =
      document.createElement(
        'section'
      );

    section.className =
      this.config.sectionClass;

    section.setAttribute(
      'aria-label',
      'Related Components'
    );

    return section;
  },

  /**
   * Create Title
   */
  createTitle() {
    const title =
      document.createElement(
        'h2'
      );

    title.className =
      this.config.titleClass;

    title.textContent =
      'Related Components';

    return title;
  },

  /**
   * Create Description
   */
  createDescription() {
    const paragraph =
      document.createElement(
        'p'
      );

    paragraph.className =
      'related-components-description';

    paragraph.textContent =
      'Explore similar components based on categories, tags and browsing history.';

    return paragraph;
  },

  /**
   * Create Grid
   */
  createGrid() {
    const grid =
      document.createElement(
        'div'
      );

    grid.className =
      this.config.gridClass;

    if (
      !this.state
        .relatedComponents.length
    ) {
      grid.appendChild(
        this.createEmptyState()
      );

      return grid;
    }

    this.state.relatedComponents.forEach(
      component => {
        grid.appendChild(
          this.createCard(
            component
          )
        );
      }
    );

    return grid;
  },

  /**
   * Create Empty State
   */
  createEmptyState() {
    const empty =
      document.createElement(
        'div'
      );

    empty.className =
      this.config.emptyClass;

    empty.innerHTML = `
      <h3>No Suggestions Available</h3>
      <p>
        Explore more components to improve recommendations.
      </p>
    `;

    return empty;
  },

  /**
   * Create Card
   */
  createCard(component) {
    const card =
      document.createElement(
        'article'
      );

    card.className =
      this.config.cardClass;

    card.dataset.id =
      component.id;

    card.appendChild(
      this.createCardHeader(
        component
      )
    );

    card.appendChild(
      this.createCardBody(
        component
      )
    );

    card.appendChild(
      this.createCardFooter(
        component
      )
    );

    this.attachCardEvents(
      card,
      component
    );

    return card;
  },

  /**
   * Create Header
   */
  createCardHeader(
    component
  ) {
    const header =
      document.createElement(
        'div'
      );

    header.className =
      'related-card-header';

    const title =
      document.createElement(
        'h3'
      );

    title.textContent =
      component.title ||
      component.id;

    const badge =
      document.createElement(
        'span'
      );

    badge.className =
      'related-score-badge';

    badge.textContent =
      `${component.score}`;

    header.appendChild(title);
    header.appendChild(badge);

    return header;
  },

  /**
   * Create Body
   */
  createCardBody(
    component
  ) {
    const body =
      document.createElement(
        'div'
      );

    body.className =
      'related-card-body';

    const category =
      document.createElement(
        'p'
      );

    category.className =
      'related-category';

    category.textContent =
      `Category: ${component.category}`;

    body.appendChild(
      category
    );

    body.appendChild(
      this.createTags(
        component.tags
      )
    );

    return body;
  },

  /**
   * Create Tags
   */
  createTags(tags = []) {
    const container =
      document.createElement(
        'div'
      );

    container.className =
      'related-tags';

    tags.forEach(tag => {
      const chip =
        document.createElement(
          'span'
        );

      chip.className =
        'related-tag';

      chip.textContent =
        tag;

      container.appendChild(
        chip
      );
    });

    return container;
  },

  /**
   * Create Footer
   */
  createCardFooter(
    component
  ) {
    const footer =
      document.createElement(
        'div'
      );

    footer.className =
      'related-card-footer';

    const button =
      document.createElement(
        'button'
      );

    button.className =
      'related-open-btn';

    button.textContent =
      'View Component';

    button.setAttribute(
      'aria-label',
      `Open ${component.title}`
    );

    button.addEventListener(
      'click',
      () => {
        this.openComponent(
          component
        );
      }
    );

    footer.appendChild(
      button
    );

    return footer;
  },

  /**
   * Insert Section
   */
  insertSection(section) {
    const target =
      document.querySelector(
        'main'
      ) ||
      document.body;

    target.appendChild(
      section
    );
  },

  /**
   * Open Component
   */
  openComponent(
    component
  ) {
    const url =
      `${component.id}.html`;

    window.location.href =
      url;
  },

  /**
   * Card Events
   */
  attachCardEvents(
    card,
    component
  ) {
    card.addEventListener(
      'mouseenter',
      () => {
        card.classList.add(
          'hover'
        );
      }
    );

    card.addEventListener(
      'mouseleave',
      () => {
        card.classList.remove(
          'hover'
        );
      }
    );

    card.addEventListener(
      'focus',
      () => {
        card.classList.add(
          'focus'
        );
      }
    );

    card.addEventListener(
      'blur',
      () => {
        card.classList.remove(
          'focus'
        );
      }
    );
  },

  /**
   * Refresh Recommendations
   */
  refresh() {
    this.calculateRecommendations();
    this.render();
  },

  /**
   * Force Render
   */
  rerender() {
    this.render();
  },/**
 * ==========================================================
 * Related Components Feature
 * Part 3 - Recommendation Engine, Personalization,
 * Analytics, Similarity Scoring, Caching
 * ==========================================================
 */

  /**
   * Build Recommendation Cache
   */
  buildCache() {
    this.state.allComponents.forEach(
      component => {
        this.state
          .recommendationCache[
            component.id
          ] =
          this.generateRecommendationProfile(
            component
          );
      }
    );
  },

  /**
   * Generate Profile
   */
  generateRecommendationProfile(
    component
  ) {
    return {
      id: component.id,
      category:
        component.category,
      tags:
        component.tags,
      popularity:
        this.getPopularityIndex(
          component
        ),
      freshness:
        Date.now()
    };
  },

  /**
   * Popularity Index
   */
  getPopularityIndex(
    component
  ) {
    return Math.floor(
      Math.random() * 100
    );
  },

  /**
   * Advanced Recommendation Pipeline
   */
  runRecommendationPipeline() {
    const recommendations =
      [];

    this.state.allComponents.forEach(
      component => {
        const score =
          this.computeCompositeScore(
            component
          );

        recommendations.push({
          component,
          score
        });
      }
    );

    recommendations.sort(
      (a, b) =>
        b.score - a.score
    );

    this.state.relatedComponents =
      recommendations
        .filter(
          item =>
            item.score >=
            this.config.minScore
        )
        .slice(
          0,
          this.config.maxSuggestions
        )
        .map(
          item =>
            item.component
        );
  },

  /**
   * Composite Score
   */
  computeCompositeScore(
    component
  ) {
    let score = 0;

    score +=
      this.computeCategorySimilarity(
        component
      );

    score +=
      this.computeTagSimilarity(
        component
      );

    score +=
      this.computeHistoryAffinity(
        component
      );

    score +=
      this.computePopularityAffinity(
        component
      );

    score +=
      this.computeRecencyBoost(
        component
      );

    return score;
  },

  /**
   * Category Similarity
   */
  computeCategorySimilarity(
    component
  ) {
    const currentCategory =
      this.getCurrentCategory();

    if (
      component.category ===
      currentCategory
    ) {
      return 50;
    }

    return 0;
  },

  /**
   * Tag Similarity
   */
  computeTagSimilarity(
    component
  ) {
    const currentTags =
      this.getCurrentTags();

    let score = 0;

    component.tags.forEach(
      tag => {
        if (
          currentTags.includes(
            tag
          )
        ) {
          score += 12;
        }
      }
    );

    return score;
  },

  /**
   * Browsing History Affinity
   */
  computeHistoryAffinity(
    component
  ) {
    let score = 0;

    this.state.viewHistory.forEach(
      history => {
        if (
          history.component ===
          component.id
        ) {
          score += 8;
        }
      }
    );

    return score;
  },

  /**
   * Popularity Affinity
   */
  computePopularityAffinity(
    component
  ) {
    const popularity =
      this.getPopularityIndex(
        component
      );

    return Math.floor(
      popularity / 5
    );
  },

  /**
   * Recency Boost
   */
  computeRecencyBoost(
    component
  ) {
    const randomBoost =
      Math.floor(
        Math.random() * 10
      );

    return randomBoost;
  },

  /**
   * Personalized Recommendations
   */
  getPersonalizedRecommendations() {
    return this.state.relatedComponents.filter(
      component =>
        this.matchesUserProfile(
          component
        )
    );
  },

  /**
   * Match User Profile
   */
  matchesUserProfile(
    component
  ) {
    const preferredCategories =
      this.getPreferredCategories();

    return preferredCategories.includes(
      component.category
    );
  },

  /**
   * Preferred Categories
   */
  getPreferredCategories() {
    const counts = {};

    this.state.viewHistory.forEach(
      item => {
        counts[
          item.component
        ] =
          (counts[
            item.component
          ] || 0) + 1;
      }
    );

    return Object.keys(
      counts
    );
  },

  /**
   * Similar Components
   */
  findSimilarComponents(
    componentId
  ) {
    const source =
      this.state.allComponents.find(
        component =>
          component.id ===
          componentId
      );

    if (!source) {
      return [];
    }

    return this.state.allComponents
      .map(component => ({
        component,
        similarity:
          this.calculateSimilarity(
            source,
            component
          )
      }))
      .sort(
        (a, b) =>
          b.similarity -
          a.similarity
      )
      .slice(0, 10);
  },

  /**
   * Similarity Algorithm
   */
  calculateSimilarity(
    source,
    target
  ) {
    let score = 0;

    if (
      source.category ===
      target.category
    ) {
      score += 50;
    }

    source.tags.forEach(
      tag => {
        if (
          target.tags.includes(
            tag
          )
        ) {
          score += 10;
        }
      }
    );

    return score;
  },

  /**
   * Analytics
   */
  analytics: {
    clicks: 0,
    renders: 0,
    impressions: 0,
    interactions: []
  },

  /**
   * Track Render
   */
  trackRender() {
    this.analytics.renders++;

    this.analytics.interactions.push(
      {
        type: 'render',
        timestamp:
          Date.now()
      }
    );
  },

  /**
   * Track Click
   */
  trackClick(
    component
  ) {
    this.analytics.clicks++;

    this.analytics.interactions.push(
      {
        type: 'click',
        component:
          component.id,
        timestamp:
          Date.now()
      }
    );
  },

  /**
   * Track Impression
   */
  trackImpression(
    component
  ) {
    this.analytics.impressions++;

    this.analytics.interactions.push(
      {
        type:
          'impression',
        component:
          component.id,
        timestamp:
          Date.now()
      }
    );
  },

  /**
   * Analytics Snapshot
   */
  getAnalytics() {
    return {
      renders:
        this.analytics.renders,
      clicks:
        this.analytics.clicks,
      impressions:
        this.analytics.impressions,
      interactions:
        this.analytics
          .interactions
    };
  },

  /**
   * Clear Analytics
   */
  clearAnalytics() {
    this.analytics.clicks = 0;
    this.analytics.renders = 0;
    this.analytics.impressions = 0;

    this.analytics.interactions =
      [];
  },

  /**
   * Cache Lookup
   */
  getCachedRecommendation(
    componentId
  ) {
    return this.state
      .recommendationCache[
      componentId
    ];
  },

  /**
   * Cache Refresh
   */
  refreshCache() {
    this.state
      .recommendationCache = {};

    this.buildCache();
  },
  /**
 * ==========================================================
 * Related Components Feature
 * Part 4 - Accessibility, Lazy Loading,
 * Recently Viewed, Cleanup, Destroy
 * ==========================================================
 */

  /**
   * Keyboard Navigation
   */
  enableKeyboardNavigation() {
    document.addEventListener(
      'keydown',
      event => {
        const cards =
          document.querySelectorAll(
            `.${this.config.cardClass}`
          );

        if (!cards.length) {
          return;
        }

        const active =
          document.activeElement;

        const currentIndex =
          Array.from(cards).indexOf(
            active.closest(
              `.${this.config.cardClass}`
            )
          );

        switch (event.key) {
          case 'ArrowRight':
            event.preventDefault();

            this.focusCard(
              cards[
                Math.min(
                  currentIndex + 1,
                  cards.length - 1
                )
              ]
            );
            break;

          case 'ArrowLeft':
            event.preventDefault();

            this.focusCard(
              cards[
                Math.max(
                  currentIndex - 1,
                  0
                )
              ]
            );
            break;

          case 'Enter':
            if (
              active.classList.contains(
                'related-open-btn'
              )
            ) {
              active.click();
            }
            break;

          default:
            break;
        }
      }
    );
  },

  focusCard(card) {
    if (!card) {
      return;
    }

    const button =
      card.querySelector(
        '.related-open-btn'
      );

    if (button) {
      button.focus();
    }
  },

  /**
   * Accessibility
   */
  applyAccessibility() {
    const cards =
      document.querySelectorAll(
        `.${this.config.cardClass}`
      );

    cards.forEach(card => {
      card.setAttribute(
        'role',
        'article'
      );

      card.setAttribute(
        'tabindex',
        '0'
      );
    });
  },

  /**
   * Lazy Loading
   */
  setupLazyLoading() {
    if (
      !(
        'IntersectionObserver' in
        window
      )
    ) {
      return;
    }

    const observer =
      new IntersectionObserver(
        entries => {
          entries.forEach(
            entry => {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  'visible'
                );

                observer.unobserve(
                  entry.target
                );
              }
            }
          );
        },
        {
          threshold: 0.15
        }
      );

    document
      .querySelectorAll(
        `.${this.config.cardClass}`
      )
      .forEach(card => {
        observer.observe(card);
      });

    this.state.intersectionObserver =
      observer;
  },

  /**
   * Recently Viewed
   */
  getRecentlyViewed() {
    return this.state.viewHistory
      .slice(0, 10)
      .map(
        item =>
          item.component
      );
  },

  createRecentlyViewedSection() {
    const wrapper =
      document.createElement(
        'div'
      );

    wrapper.className =
      'recently-viewed-components';

    const title =
      document.createElement(
        'h3'
      );

    title.textContent =
      'Recently Viewed';

    wrapper.appendChild(
      title
    );

    this.getRecentlyViewed().forEach(
      component => {
        const item =
          document.createElement(
            'div'
          );

        item.className =
          'recently-viewed-item';

        item.textContent =
          component;

        wrapper.appendChild(
          item
        );
      }
    );

    return wrapper;
  },

  /**
   * Fallback Recommendations
   */
  generateFallbackRecommendations() {
    return this.state.allComponents
      .slice(
        0,
        this.config.maxSuggestions
      )
      .map(component => ({
        ...component,
        score: 50
      }));
  },

  ensureRecommendations() {
    if (
      this.state
        .relatedComponents
        .length
    ) {
      return;
    }

    this.state.relatedComponents =
      this.generateFallbackRecommendations();
  },

  /**
   * Recommendation Metrics
   */
  getMetrics() {
    return {
      totalComponents:
        this.state.allComponents
          .length,
      recommendations:
        this.state
          .relatedComponents
          .length,
      history:
        this.state.viewHistory
          .length,
      cacheEntries:
        Object.keys(
          this.state
            .recommendationCache
        ).length
    };
  },

  /**
   * Export Recommendations
   */
  exportRecommendations() {
    return JSON.stringify(
      this.state.relatedComponents,
      null,
      2
    );
  },

  /**
   * Import Recommendations
   */
  importRecommendations(
    payload
  ) {
    try {
      const parsed =
        JSON.parse(payload);

      if (
        Array.isArray(
          parsed
        )
      ) {
        this.state.relatedComponents =
          parsed;

        this.render();
      }
    } catch (
      error
    ) {
      console.error(
        error
      );
    }
  },

  /**
   * Refresh Everything
   */
  fullRefresh() {
    this.collectComponents();

    this.buildCache();

    this.runRecommendationPipeline();

    this.ensureRecommendations();

    this.render();

    this.applyAccessibility();

    this.setupLazyLoading();
  },

  /**
   * Cleanup
   */
  cleanup() {
    const section =
      document.querySelector(
        `.${this.config.sectionClass}`
      );

    if (section) {
      section.remove();
    }

    if (
      this.state
        .intersectionObserver
    ) {
      this.state.intersectionObserver.disconnect();
    }
  },

  /**
   * Destroy
   */
  destroy() {
    this.cleanup();

    this.state.currentComponent =
      null;

    this.state.allComponents =
      [];

    this.state.relatedComponents =
      [];

    this.state.recommendationCache =
      {};

    this.initialized =
      false;
  },

  /**
   * Reload
   */
  reload() {
    this.destroy();

    this.init();
  },

  /**
   * Debug Helper
   */
  debug() {
    return {
      initialized:
        this.initialized,
      metrics:
        this.getMetrics(),
      analytics:
        this.getAnalytics()
    };
  }
};

/**
 * Module Export
 */
if (
  typeof module !==
    'undefined' &&
  module.exports
) {
  module.exports =
    RelatedComponents;
}