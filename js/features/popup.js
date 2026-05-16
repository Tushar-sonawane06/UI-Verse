/**
 * Popup Feature
 * Manages modal popups in the UI
 */

const Popup = {
  element: null,

  /**
   * Open the popup
   */
  open() {
    if (this.element) {
      this.element.classList.add("open-popup");
    }
  },

  /**
   * Close the popup
   */
  close() {
    if (this.element) {
      this.element.classList.remove("open-popup");
    }
  },

  /**
   * Initialize popup feature
   */
  init() {
    this.element = getElement("popup");
    // Exposed to global for backward compatibility
    window.openPopup = () => this.open();
    window.closePopup = () => this.close();
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Popup;
}
