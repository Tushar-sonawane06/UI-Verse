/**
 * Scroll Feature
 * Manages scroll-to-top button and progress bar
 */

const Scroll = {
  _state: {
    initialized: false,
    listeners: []
  },

  /**
   * Initialize scroll-to-top button
   */
  initTopButton() {
    if (this._state.listeners.some((entry) => entry.key === "top-button")) {
      return;
    }

    const btn = getElement("scrollTopBtn");

    if (!btn) return;

    btn.setAttribute("aria-label", "Back to top");
    btn.setAttribute("title", "Back to top");

    const onClick = () => {
      const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    };

    const onScroll = () => {
      if (window.scrollY > 200) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick();
      }
    };

    window.addEventListener("scroll", onScroll);
    btn.addEventListener("click", onClick);
    btn.addEventListener("keydown", onKeyDown);

    this._state.listeners.push({
      key: "top-button",
      el: window,
      event: "scroll",
      handler: onScroll
    });

    this._state.listeners.push({
      key: "top-button",
      el: btn,
      event: "click",
      handler: onClick
    });

    this._state.listeners.push({
      key: "top-button",
      el: btn,
      event: "keydown",
      handler: onKeyDown
    });

    onScroll();
  },

  /**
   * Initialize scroll progress bar
   */
  initProgressBar() {
    if (this._state.listeners.some((entry) => entry.key === "progress-bar")) {
      return;
    }

    const bar = getElement("progressBar");

    if (!bar) return;

    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      bar.style.width =
        ((scrollTop / height) * 100) + "%";
    };

    window.addEventListener("scroll", onScroll);

    this._state.listeners.push({
      key: "progress-bar",
      el: window,
      event: "scroll",
      handler: onScroll
    });

    onScroll();
  },

  /**
   * Initialize scroll features
   */
  init() {
    if (this._state.initialized) return;

    this.initTopButton();
    this.initProgressBar();

    window.scrollToTop = () => {
      const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    };

    this._state.initialized = true;
  },

  /**
   * Cleanup listeners
   */
  destroy() {
    this._state.listeners.forEach(
      ({ el, event, handler }) => {
        el.removeEventListener(event, handler);
      }
    );

    this._state.listeners = [];
    this._state.initialized = false;
  }
};

// Export for use in bootstrap
if (typeof module !== "undefined" && module.exports) {
  module.exports = Scroll;
}