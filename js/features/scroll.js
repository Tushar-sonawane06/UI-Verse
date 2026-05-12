/**
 * Scroll Feature
 * Manages scroll-to-top button and progress bar
 */

const Scroll = {
  /**
   * Initialize scroll-to-top button
   */
  initTopButton() {
    const btn = getElement("scrollTopBtn");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      btn.style.display = window.scrollY > 50 ? "block" : "none";
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  },

  /**
   * Initialize scroll progress bar
   */
  initProgressBar() {
    const bar = getElement("progressBar");
    if (!bar) return;

    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = ((scrollTop / height) * 100) + "%";
    });
  },

  /**
   * Initialize scroll features
   */
  init() {
    this.initTopButton();
    this.initProgressBar();
    
    // Expose for backward compatibility
    window.scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Scroll;
}
