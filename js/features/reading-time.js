/**
 * Reading Time Estimation Feature
 * UI-Verse Enhancement
 * Part 1
 */

const ReadingTime = {
  config: null,

  state: {
    initialized: false,
    words: 0,
    readingMinutes: 0,
    explorationMinutes: 0,
    componentCount: 0,
    scrollPercent: 0,
    currentSpeed: "average",
    sessionStart: null,
    observers: [],
    listeners: []
  },

  async init() {
    if (this.state.initialized) return;

    try {
      await this.loadConfig();

      this.state.sessionStart = Date.now();

      this.calculateMetrics();

      this.createContainer();

      this.render();

      this.attachEvents();

      this.observeChanges();

      this.state.initialized = true;

      console.info("[ReadingTime] Initialized");
    } catch (error) {
      console.error("[ReadingTime] Initialization failed", error);
    }
  },

  async loadConfig() {
    try {
      const response = await fetch(
        "data/reading-time-config.json"
      );

      if (!response.ok) {
        throw new Error("Config load failed");
      }

      this.config = await response.json();
    } catch (error) {
      console.warn(
        "[ReadingTime] Using fallback config"
      );

      this.config = {
        readingSpeeds: {
          slow: {
            wordsPerMinute: 150
          },
          average: {
            wordsPerMinute: 220
          },
          fast: {
            wordsPerMinute: 300
          }
        }
      };
    }
  },

  getPageContent() {
    const selectors = [
      "main",
      ".main-content",
      ".component-container",
      ".content",
      "body"
    ];

    for (const selector of selectors) {
      const element =
        document.querySelector(selector);

      if (
        element &&
        element.textContent.trim().length > 100
      ) {
        return element;
      }
    }

    return document.body;
  },

  countWords(text) {
    if (!text) return 0;

    return text
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
  },

  countComponents() {
    const selectors = [
      ".component-card",
      ".card",
      ".preview-box",
      ".component-preview",
      ".ui-component",
      "[data-component]"
    ];

    let count = 0;

    selectors.forEach((selector) => {
      count +=
        document.querySelectorAll(selector)
          .length;
    });

    return count;
  },

  calculateReadingTime(wordCount) {
    const speed =
      this.config.readingSpeeds[
        this.state.currentSpeed
      ];

    const wpm =
      speed.wordsPerMinute || 220;

    return Math.max(
      1,
      Math.ceil(wordCount / wpm)
    );
  },

  calculateExplorationTime(
    componentCount
  ) {
    if (!componentCount) return 1;

    return Math.max(
      1,
      Math.ceil(componentCount * 0.4)
    );
  },

  calculateMetrics() {
    const content =
      this.getPageContent();

    const text =
      content.textContent || "";

    this.state.words =
      this.countWords(text);

    this.state.componentCount =
      this.countComponents();

    this.state.readingMinutes =
      this.calculateReadingTime(
        this.state.words
      );

    this.state.explorationMinutes =
      this.calculateExplorationTime(
        this.state.componentCount
      );
  },

  getBadgeType() {
    const minutes =
      this.state.readingMinutes;

    const badges =
      this.config.badges || {};

    if (
      badges.quick &&
      minutes <= badges.quick.maxMinutes
    ) {
      return badges.quick.label;
    }

    if (
      badges.standard &&
      minutes <= badges.standard.maxMinutes
    ) {
      return badges.standard.label;
    }

    if (badges.deep) {
      return badges.deep.label;
    }

    return "Read";
  },

  createContainer() {
    if (
      document.getElementById(
        "reading-time-widget"
      )
    ) {
      return;
    }

    const container =
      document.createElement("section");

    container.id =
      "reading-time-widget";

    container.className =
      "reading-time-widget";

    const target =
      document.querySelector("main") ||
      document.body;

    target.insertBefore(
      container,
      target.firstChild
    );
  },

  getTemplate() {
    return `
      <div class="rt-card">

        <div class="rt-header">
          <h3 class="rt-title">
            Reading Estimate
          </h3>

          <span class="rt-badge">
            ${this.getBadgeType()}
          </span>
        </div>

        <div class="rt-grid">

          <div class="rt-stat">
            <span class="rt-value">
              ${this.state.readingMinutes}
            </span>

            <span class="rt-label">
              min read
            </span>
          </div>

          <div class="rt-stat">
            <span class="rt-value">
              ${this.state.explorationMinutes}
            </span>

            <span class="rt-label">
              min explore
            </span>
          </div>

          <div class="rt-stat">
            <span class="rt-value">
              ${this.state.words}
            </span>

            <span class="rt-label">
              words
            </span>
          </div>

          <div class="rt-stat">
            <span class="rt-value">
              ${this.state.componentCount}
            </span>

            <span class="rt-label">
              components
            </span>
          </div>

        </div>

        <div
          class="rt-progress-wrapper"
        >
          <div
            class="rt-progress-bar"
            id="rt-progress-bar"
          ></div>
        </div>

      </div>
    `;
  },  render() {
    const container =
      document.getElementById(
        "reading-time-widget"
      );

    if (!container) return;

    container.innerHTML =
      this.getTemplate();

    this.renderPreferences();
  },

  renderPreferences() {
    const container =
      document.getElementById(
        "reading-time-widget"
      );

    if (!container) return;

    const preferences =
      document.createElement("div");

    preferences.className =
      "rt-preferences";

    preferences.innerHTML = `
      <label
        class="rt-speed-label"
      >
        Reading Speed
      </label>

      <select
        id="rt-speed-select"
        class="rt-speed-select"
      >
        <option value="slow">
          Slow
        </option>

        <option
          value="average"
          selected
        >
          Average
        </option>

        <option value="fast">
          Fast
        </option>
      </select>
    `;

    container.appendChild(
      preferences
    );
  },

  attachEvents() {
    this.attachScrollTracking();

    this.attachSpeedSelector();

    this.attachVisibilityTracking();

    this.attachResizeTracking();
  },

  attachScrollTracking() {
    const onScroll = () => {
      const scrollTop =
        document.documentElement
          .scrollTop;

      const scrollHeight =
        document.documentElement
          .scrollHeight -
        document.documentElement
          .clientHeight;

      const percentage =
        scrollHeight <= 0
          ? 0
          : Math.round(
              (scrollTop /
                scrollHeight) *
                100
            );

      this.state.scrollPercent =
        percentage;

      this.updateProgressBar();

      this.dispatchMetricEvent(
        "reading-progress",
        {
          percentage
        }
      );
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
  },

  attachSpeedSelector() {
    document.addEventListener(
      "change",
      (event) => {
        const target =
          event.target;

        if (
          !target ||
          target.id !==
            "rt-speed-select"
        ) {
          return;
        }

        this.state.currentSpeed =
          target.value;

        this.savePreference(
          "reading-speed",
          target.value
        );

        this.calculateMetrics();

        this.render();

        this.dispatchMetricEvent(
          "reading-speed-change",
          {
            speed: target.value
          }
        );
      }
    );
  },

  attachVisibilityTracking() {
    const handler = () => {
      if (
        document.hidden
      ) {
        this.dispatchMetricEvent(
          "reading-hidden",
          {}
        );
      } else {
        this.dispatchMetricEvent(
          "reading-visible",
          {}
        );
      }
    };

    document.addEventListener(
      "visibilitychange",
      handler
    );

    this.state.listeners.push({
      el: document,
      event:
        "visibilitychange",
      handler
    });
  },

  attachResizeTracking() {
    const handler = () => {
      this.dispatchMetricEvent(
        "reading-resize",
        {
          width:
            window.innerWidth,
          height:
            window.innerHeight
        }
      );
    };

    window.addEventListener(
      "resize",
      handler
    );

    this.state.listeners.push({
      el: window,
      event: "resize",
      handler
    });
  },

  updateProgressBar() {
    const bar =
      document.getElementById(
        "rt-progress-bar"
      );

    if (!bar) return;

    bar.style.width =
      `${this.state.scrollPercent}%`;

    bar.setAttribute(
      "aria-valuenow",
      this.state.scrollPercent
    );
  },

  savePreference(
    key,
    value
  ) {
    try {
      localStorage.setItem(
        `rt-${key}`,
        JSON.stringify(value)
      );
    } catch (error) {
      console.warn(
        "[ReadingTime] Preference save failed"
      );
    }
  },

  loadPreference(key) {
    try {
      const value =
        localStorage.getItem(
          `rt-${key}`
        );

      if (!value) {
        return null;
      }

      return JSON.parse(
        value
      );
    } catch (error) {
      return null;
    }
  },

  dispatchMetricEvent(
    name,
    detail
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
    observeChanges() {
    const content =
      this.getPageContent();

    if (!content) return;

    const observer =
      new MutationObserver(
        (mutations) => {
          let shouldRefresh =
            false;

          mutations.forEach(
            (mutation) => {
              if (
                mutation.type ===
                  "childList" ||
                mutation.type ===
                  "characterData"
              ) {
                shouldRefresh =
                  true;
              }
            }
          );

          if (
            shouldRefresh
          ) {
            this.refreshMetrics();
          }
        }
      );

    observer.observe(
      content,
      {
        childList: true,
        subtree: true,
        characterData: true
      }
    );

    this.state.observers.push(
      observer
    );
  },

  refreshMetrics() {
    this.calculateMetrics();

    this.render();

    this.dispatchMetricEvent(
      "reading-refresh",
      {
        words:
          this.state.words,
        readingMinutes:
          this.state
            .readingMinutes
      }
    );
  },

  getSessionDuration() {
    if (
      !this.state
        .sessionStart
    ) {
      return 0;
    }

    return Math.round(
      (
        Date.now() -
        this.state
          .sessionStart
      ) / 1000
    );
  },

  getStatistics() {
    return {
      words:
        this.state.words,

      readingMinutes:
        this.state
          .readingMinutes,

      explorationMinutes:
        this.state
          .explorationMinutes,

      componentCount:
        this.state
          .componentCount,

      scrollPercent:
        this.state
          .scrollPercent,

      sessionDuration:
        this
          .getSessionDuration()
    };
  },

  trackAnalytics() {
    const stats =
      this.getStatistics();

    this.dispatchMetricEvent(
      "reading-analytics",
      stats
    );

    return stats;
  },

  startAnalyticsLoop() {
    const interval =
      setInterval(
        () => {
          this.trackAnalytics();
        },
        30000
      );

    this.state.listeners.push(
      {
        el: window,
        event:
          "analytics-interval",
        handler:
          interval
      }
    );
  },

  announceToScreenReader(
    message
  ) {
    let liveRegion =
      document.getElementById(
        "rt-live-region"
      );

    if (
      !liveRegion
    ) {
      liveRegion =
        document.createElement(
          "div"
        );

      liveRegion.id =
        "rt-live-region";

      liveRegion.setAttribute(
        "aria-live",
        "polite"
      );

      liveRegion.setAttribute(
        "aria-atomic",
        "true"
      );

      liveRegion.className =
        "rt-sr-only";

      document.body.appendChild(
        liveRegion
      );
    }

    liveRegion.textContent =
      "";

    setTimeout(
      () => {
        liveRegion.textContent =
          message;
      },
      50
    );
  },

  initializeAccessibility() {
    this.announceToScreenReader(
      `Estimated reading time ${this.state.readingMinutes} minutes`
    );
  },

  exportStatistics() {
    return JSON.stringify(
      this.getStatistics(),
      null,
      2
    );
  },

  resetSession() {
    this.state.sessionStart =
      Date.now();

    this.state.scrollPercent =
      0;

    this.updateProgressBar();

    this.dispatchMetricEvent(
      "reading-reset",
      {}
    );
  },

  destroy() {
    this.state.listeners.forEach(
      (
        listener
      ) => {
        if (
          listener.event ===
          "analytics-interval"
        ) {
          clearInterval(
            listener.handler
          );

          return;
        }

        listener.el.removeEventListener(
          listener.event,
          listener.handler
        );
      }
    );

    this.state.observers.forEach(
      (
        observer
      ) => {
        observer.disconnect();
      }
    );

    this.state.listeners =
      [];

    this.state.observers =
      [];

    this.state.initialized =
      false;
  }
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    ReadingTime.init();

    ReadingTime.initializeAccessibility();

    ReadingTime.startAnalyticsLoop();
  }
);

if (
  typeof module !==
    "undefined" &&
  module.exports
) {
  module.exports =
    ReadingTime;
}