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
    if (this._state.listeners.some((entry) => entry.key === 'top-button')) return;
    const btn = getElement("scrollTopBtn");
    if (!btn) return;

    const onScroll = () => {
      btn.style.display = window.scrollY > 50 ? "block" : "none";
    };

    const onClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", onScroll);
    btn.addEventListener("click", onClick);
    this._state.listeners.push({ key: 'top-button', el: window, event: "scroll", handler: onScroll });
    this._state.listeners.push({ key: 'top-button', el: btn, event: "click", handler: onClick });
  },

  /**
   * Initialize scroll progress bar
   */
  initProgressBar() {
    if (this._state.listeners.some((entry) => entry.key === 'progress-bar')) return;
    const bar = getElement("progressBar");
    if (!bar) return;

    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = ((scrollTop / height) * 100) + "%";
    };

    window.addEventListener("scroll", onScroll);
    this._state.listeners.push({ key: 'progress-bar', el: window, event: "scroll", handler: onScroll });
  },

  /**
   * Initialize scroll features
   */
  init() {
    if (this._state.initialized) return;

    this.initTopButton();
    this.initProgressBar();
    
    // Expose for backward compatibility
    window.scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    this._state.initialized = true;
  },

  destroy() {
    this._state.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this._state.listeners = [];
    this._state.initialized = false;
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Scroll;
}
