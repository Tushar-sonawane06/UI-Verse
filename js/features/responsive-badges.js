const ResponsiveBadges = {
  config: {
    cardSelector: '.component-card',
    badgeContainerClass: 'responsive-badges',
    metadata: {}
  },

  state: {
    initialized: false,
    observedCards: new WeakSet(),
    resizeObserver: null,
    mutationObserver: null
  },

  init() {
    if (this.state.initialized) return;

    this.state.initialized = true;

    this.injectStyles();
    this.loadMetadata();
    this.scanCards();
    this.setupMutationObserver();
    this.setupResizeObserver();

    window.addEventListener('resize', () => {
      this.updateAllCards();
    });

    console.log('[ResponsiveBadges] initialized');
  },

  loadMetadata() {
    this.config.metadata = {
      button: {
        mobile: true,
        tablet: true,
        desktop: true
      },
      card: {
        mobile: true,
        tablet: true,
        desktop: true
      },
      form: {
        mobile: true,
        tablet: true,
        desktop: true
      },
      navbar: {
        mobile: true,
        tablet: true,
        desktop: true
      }
    };
  },

  scanCards() {
    const cards = document.querySelectorAll(
      this.config.cardSelector
    );

    cards.forEach(card => {
      this.decorateCard(card);
    });
  },

  decorateCard(card) {
    if (
      this.state.observedCards.has(card)
    ) {
      return;
    }

    this.state.observedCards.add(card);

    const type =
      this.detectComponentType(card);

    const compatibility =
      this.calculateCompatibility(
        card,
        type
      );

    const badgeContainer =
      this.createBadgeContainer(
        compatibility
      );

    this.insertBadges(
      card,
      badgeContainer
    );
  },

  detectComponentType(card) {
    const text =
      card.textContent.toLowerCase();

    if (text.includes('button'))
      return 'button';

    if (text.includes('card'))
      return 'card';

    if (text.includes('form'))
      return 'form';

    if (text.includes('navbar'))
      return 'navbar';

    return 'generic';
  },

  calculateCompatibility(
    card,
    type
  ) {
    const metadata =
      this.config.metadata[type];

    if (metadata) {
      return metadata;
    }

    const width =
      card.offsetWidth;

    return {
      mobile: width <= 480,
      tablet: width <= 768,
      desktop: true
    };
  },

  createBadgeContainer(
    compatibility
  ) {
    const container =
      document.createElement('div');

    container.className =
      this.config.badgeContainerClass;

    if (
      compatibility.mobile
    ) {
      container.appendChild(
        this.createBadge(
          '📱',
          'Mobile',
          'mobile'
        )
      );
    }

    if (
      compatibility.tablet
    ) {
      container.appendChild(
        this.createBadge(
          '📲',
          'Tablet',
          'tablet'
        )
      );
    }

    if (
      compatibility.desktop
    ) {
      container.appendChild(
        this.createBadge(
          '🖥',
          'Desktop',
          'desktop'
        )
      );
    }

    return container;
  },

  createBadge(
    icon,
    label,
    variant
  ) {
    const badge =
      document.createElement('span');

    badge.className =
      `rb-badge rb-${variant}`;

    badge.setAttribute(
      'aria-label',
      `${label} compatible`
    );

    badge.title =
      `${label} compatible`;

    badge.innerHTML = `
      <span class="rb-icon">
        ${icon}
      </span>
      <span class="rb-label">
        ${label}
      </span>
    `;

    return badge;
  },

  insertBadges(
    card,
    badgeContainer
  ) {
    const existing =
      card.querySelector(
        '.responsive-badges'
      );

    if (existing) {
      existing.remove();
    }

    card.prepend(
      badgeContainer
    );
  },

  updateAllCards() {
    document
      .querySelectorAll(
        this.config.cardSelector
      )
      .forEach(card => {
        const type =
          this.detectComponentType(
            card
          );

        const compatibility =
          this.calculateCompatibility(
            card,
            type
          );

        const badges =
          this.createBadgeContainer(
            compatibility
          );

        this.insertBadges(
          card,
          badges
        );
      });
  },

  setupMutationObserver() {
    this.state.mutationObserver =
      new MutationObserver(
        mutations => {
          mutations.forEach(
            mutation => {
              mutation
                .addedNodes
                .forEach(node => {
                  if (
                    node.nodeType !== 1
                  ) {
                    return;
                  }

                  if (
                    node.matches &&
                    node.matches(
                      this.config
                        .cardSelector
                    )
                  ) {
                    this.decorateCard(
                      node
                    );
                  }

                  const cards =
                    node.querySelectorAll
                      ? node.querySelectorAll(
                          this.config
                            .cardSelector
                        )
                      : [];

                  cards.forEach(card =>
                    this.decorateCard(
                      card
                    )
                  );
                });
            }
          );
        }
      );

    this.state.mutationObserver.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );
  },

  setupResizeObserver() {
    if (
      !window.ResizeObserver
    ) {
      return;
    }

    this.state.resizeObserver =
      new ResizeObserver(() => {
        this.updateAllCards();
      });

    document
      .querySelectorAll(
        this.config.cardSelector
      )
      .forEach(card => {
        this.state.resizeObserver.observe(
          card
        );
      });
  },

  injectStyles() {
    if (
      document.getElementById(
        'responsive-badges-inline'
      )
    ) {
      return;
    }

    const style =
      document.createElement(
        'style'
      );

    style.id =
      'responsive-badges-inline';

    style.textContent = `
      .responsive-badges{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin-bottom:10px;
      }

      .rb-badge{
        display:flex;
        align-items:center;
        gap:6px;
        padding:4px 10px;
        border-radius:999px;
        font-size:12px;
        font-weight:600;
      }

      .rb-mobile{
        background:#dcfce7;
      }

      .rb-tablet{
        background:#dbeafe;
      }

      .rb-desktop{
        background:#ede9fe;
      }

      .rb-icon{
        line-height:1;
      }
    `;

    document.head.appendChild(
      style
    );
  },

  destroy() {
    if (
      this.state.resizeObserver
    ) {
      this.state.resizeObserver.disconnect();
    }

    if (
      this.state.mutationObserver
    ) {
      this.state.mutationObserver.disconnect();
    }

    this.state.initialized =
      false;
  }
};

window.ResponsiveBadges =
  ResponsiveBadges;