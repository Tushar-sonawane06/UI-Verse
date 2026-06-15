/**
 * Sticky Category Navigation
 * UI-Verse Enhancement
 * Part 1
 */

const StickyCategoryNav = {
  config: null,

  state: {
    initialized: false,
    sections: [],
    activeSection: null,
    observer: null,
    scrollPosition: 0,
    navVisible: true,
    keyboardEnabled: true,
    mobileMenuOpen: false,
    listeners: [],
    metrics: {
      clicks: 0,
      sectionChanges: 0
    }
  },

  async init() {
    if (this.state.initialized) return;

    try {
      await this.loadConfig();

      this.collectSections();

      if (
        this.state.sections.length === 0
      ) {
        console.warn(
          "[StickyNav] No sections found"
        );
        return;
      }

      this.createNavigation();

      this.render();

      this.attachEvents();

      this.setupObserver();

      this.state.initialized = true;

      console.info(
        "[StickyNav] Initialized"
      );
    } catch (error) {
      console.error(
        "[StickyNav] Failed",
        error
      );
    }
  },

  async loadConfig() {
    try {
      const response =
        await fetch(
          "data/sticky-category-config.json"
        );

      if (!response.ok) {
        throw new Error(
          "Failed to load config"
        );
      }

      this.config =
        await response.json();
    } catch (error) {
      console.warn(
        "[StickyNav] Using fallback config"
      );

      this.config = {
        stickyOffset: 80,
        enableProgress: true,
        enableKeyboard: true,
        enableSectionCount: true,
        smoothScroll: true
      };
    }
  },

  collectSections() {
    const selectors = [
      "section",
      ".category-section",
      ".component-section",
      "[data-category]",
      "[data-section]"
    ];

    const found = [];

    selectors.forEach(
      (selector) => {
        document
          .querySelectorAll(selector)
          .forEach((element) => {
            if (
              element.offsetHeight > 50
            ) {
              found.push(element);
            }
          });
      }
    );

    const unique =
      [...new Set(found)];

    this.state.sections =
      unique.map(
        (section, index) => ({
          id:
            section.id ||
            `sticky-section-${index}`,

          title:
            this.extractTitle(
              section,
              index
            ),

          element:
            section,

          index
        })
      );

    this.state.sections.forEach(
      (section) => {
        section.element.id =
          section.id;
      }
    );
  },

  extractTitle(
    section,
    index
  ) {
    const heading =
      section.querySelector(
        "h1,h2,h3,h4,h5,h6"
      );

    if (
      heading &&
      heading.textContent.trim()
    ) {
      return heading.textContent
        .trim();
    }

    if (
      section.dataset.category
    ) {
      return section.dataset
        .category;
    }

    return `Section ${
      index + 1
    }`;
  },

  createNavigation() {
    if (
      document.getElementById(
        "sticky-category-nav"
      )
    ) {
      return;
    }

    const nav =
      document.createElement(
        "nav"
      );

    nav.id =
      "sticky-category-nav";

    nav.className =
      "sticky-category-nav";

    nav.setAttribute(
      "aria-label",
      "Category Navigation"
    );

    document.body.appendChild(
      nav
    );
  },

  render() {
    const nav =
      document.getElementById(
        "sticky-category-nav"
      );

    if (!nav) return;

    nav.innerHTML = `
      <div class="scn-container">

        <div class="scn-header">

          <span class="scn-title">
            Categories
          </span>

          ${
            this.config
              .enableSectionCount
              ? `
            <span class="scn-count">
              ${this.state.sections.length}
            </span>
          `
              : ""
          }

        </div>

        <div
          class="scn-links"
          id="scn-links"
        >
          ${this.renderLinks()}
        </div>

        ${
          this.config
            .enableProgress
            ? `
          <div
            class="scn-progress"
          >
            <div
              class="scn-progress-bar"
              id="scn-progress-bar"
            ></div>
          </div>
        `
            : ""
        }

      </div>
    `;
  },

  renderLinks() {
    return this.state.sections
      .map(
        (section) => `
        <button
          class="scn-link"
          data-section-id="${section.id}"
          aria-label="Go to ${section.title}"
        >
          ${section.title}
        </button>
      `
      )
      .join("");
  },
    attachEvents() {
    const links =
      document.querySelectorAll(
        ".scn-link"
      );

    links.forEach((link) => {
      const onClick = () => {
        const sectionId =
          link.dataset.sectionId;

        this.scrollToSection(
          sectionId
        );

        this.state.metrics.clicks++;
      };

      link.addEventListener(
        "click",
        onClick
      );

      this.state.listeners.push({
        el: link,
        event: "click",
        handler: onClick
      });
    });

    const onScroll = () => {
      this.state.scrollPosition =
        window.scrollY;

      this.updateProgress();

      this.updateStickyState();
    };

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true
      }
    );

    this.state.listeners.push({
      el: window,
      event: "scroll",
      handler: onScroll
    });

    if (
      this.config.enableKeyboard
    ) {
      this.attachKeyboardNavigation();
    }
  },

  scrollToSection(
    sectionId
  ) {
    const target =
      document.getElementById(
        sectionId
      );

    if (!target) return;

    const offset =
      this.config
        .stickyOffset || 80;

    const top =
      target.getBoundingClientRect()
        .top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior:
        this.config
          .smoothScroll
          ? "smooth"
          : "auto"
    });
  },

  attachKeyboardNavigation() {
    const onKeyDown = (
      event
    ) => {
      const currentIndex =
        this.state.sections.findIndex(
          (section) =>
            section.id ===
            this.state
              .activeSection
        );

      if (
        event.key ===
        "ArrowRight"
      ) {
        event.preventDefault();

        const next =
          this.state.sections[
            Math.min(
              currentIndex + 1,
              this.state.sections
                .length - 1
            )
          ];

        if (next) {
          this.scrollToSection(
            next.id
          );
        }
      }

      if (
        event.key ===
        "ArrowLeft"
      ) {
        event.preventDefault();

        const previous =
          this.state.sections[
            Math.max(
              currentIndex - 1,
              0
            )
          ];

        if (previous) {
          this.scrollToSection(
            previous.id
          );
        }
      }

      if (
        event.key === "Home"
      ) {
        event.preventDefault();

        if (
          this.state.sections[0]
        ) {
          this.scrollToSection(
            this.state.sections[0]
              .id
          );
        }
      }

      if (
        event.key === "End"
      ) {
        event.preventDefault();

        const last =
          this.state.sections[
            this.state.sections
              .length - 1
          ];

        if (last) {
          this.scrollToSection(
            last.id
          );
        }
      }
    };

    document.addEventListener(
      "keydown",
      onKeyDown
    );

    this.state.listeners.push({
      el: document,
      event: "keydown",
      handler: onKeyDown
    });
  },

  setupObserver() {
    if (
      !(
        "IntersectionObserver" in
        window
      )
    ) {
      return;
    }

    this.state.observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                const section =
                  this.state.sections.find(
                    (item) =>
                      item.element ===
                      entry.target
                  );

                if (
                  section
                ) {
                  this.setActiveSection(
                    section.id
                  );
                }
              }
            }
          );
        },
        {
          root: null,
          threshold: 0.4,
          rootMargin:
            "-80px 0px -40% 0px"
        }
      );

    this.state.sections.forEach(
      (section) => {
        this.state.observer.observe(
          section.element
        );
      }
    );
  },

  setActiveSection(
    sectionId
  ) {
    if (
      this.state
        .activeSection ===
      sectionId
    ) {
      return;
    }

    this.state.activeSection =
      sectionId;

    this.state.metrics
      .sectionChanges++;

    document
      .querySelectorAll(
        ".scn-link"
      )
      .forEach((link) => {
        link.classList.toggle(
          "active",
          link.dataset
            .sectionId ===
            sectionId
        );
      });

    this.scrollActiveLinkIntoView();
  },
    scrollActiveLinkIntoView() {
    const activeLink =
      document.querySelector(
        ".scn-link.active"
      );

    if (!activeLink) return;

    activeLink.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  },

  updateProgress() {
    const bar =
      document.getElementById(
        "scn-progress-bar"
      );

    if (!bar) return;

    const scrollTop =
      window.scrollY;

    const height =
      document.documentElement
        .scrollHeight -
      window.innerHeight;

    const progress =
      height > 0
        ? (scrollTop / height) * 100
        : 0;

    bar.style.width =
      `${Math.min(
        progress,
        100
      )}%`;
  },

  updateStickyState() {
    const nav =
      document.getElementById(
        "sticky-category-nav"
      );

    if (!nav) return;

    const threshold =
      this.config
        .stickyOffset || 80;

    if (
      window.scrollY >
      threshold
    ) {
      nav.classList.add(
        "scn-sticky-active"
      );
    } else {
      nav.classList.remove(
        "scn-sticky-active"
      );
    }
  },

  getAnalytics() {
    return {
      clicks:
        this.state.metrics
          .clicks,

      sectionChanges:
        this.state.metrics
          .sectionChanges,

      sections:
        this.state.sections
          .length,

      activeSection:
        this.state
          .activeSection
    };
  },

  exportAnalytics() {
    return JSON.stringify(
      this.getAnalytics(),
      null,
      2
    );
  },

  createMobileToggle() {
    if (
      document.getElementById(
        "scn-mobile-toggle"
      )
    ) {
      return;
    }

    const button =
      document.createElement(
        "button"
      );

    button.id =
      "scn-mobile-toggle";

    button.className =
      "scn-mobile-toggle";

    button.type =
      "button";

    button.setAttribute(
      "aria-label",
      "Toggle category navigation"
    );

    button.innerHTML =
      "☰";

    document.body.appendChild(
      button
    );

    const onClick = () => {
      this.state.mobileMenuOpen =
        !this.state
          .mobileMenuOpen;

      const nav =
        document.getElementById(
          "sticky-category-nav"
        );

      if (nav) {
        nav.classList.toggle(
          "scn-mobile-open",
          this.state
            .mobileMenuOpen
        );
      }
    };

    button.addEventListener(
      "click",
      onClick
    );

    this.state.listeners.push({
      el: button,
      event: "click",
      handler: onClick
    });
  },

  dispatchEvent(
    name,
    detail = {}
  ) {
    document.dispatchEvent(
      new CustomEvent(
        name,
        {
          detail
        }
      )
    );
  },

  refresh() {
    this.state.sections =
      [];

    this.collectSections();

    this.render();

    this.dispatchEvent(
      "sticky-nav-refresh",
      {
        sections:
          this.state.sections
            .length
      }
    );
  },

  destroy() {
    this.state.listeners.forEach(
      ({
        el,
        event,
        handler
      }) => {
        el.removeEventListener(
          event,
          handler
        );
      }
    );

    this.state.listeners =
      [];

    if (
      this.state.observer
    ) {
      this.state.observer.disconnect();
    }

    const nav =
      document.getElementById(
        "sticky-category-nav"
      );

    if (
      nav &&
      nav.parentNode
    ) {
      nav.parentNode.removeChild(
        nav
      );
    }

    const toggle =
      document.getElementById(
        "scn-mobile-toggle"
      );

    if (
      toggle &&
      toggle.parentNode
    ) {
      toggle.parentNode.removeChild(
        toggle
      );
    }

    this.state.initialized =
      false;
  }
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    StickyCategoryNav.init();

    StickyCategoryNav.createMobileToggle();
  }
);

if (
  typeof module !==
    "undefined" &&
  module.exports
) {
  module.exports =
    StickyCategoryNav;
}