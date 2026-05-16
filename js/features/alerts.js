/**
 * Alerts Feature
 * Manages alert closing and subscription
 */

const Alerts = {
  /**
   * Close an alert by ID
   * @param {string} alertId - Alert element ID
   */
  close(alertId) {
    const alert = getElement(alertId);
    if (alert) {
      alert.style.display = "none";
    }
  },

  /**
   * Handle subscription
   * @param {Event} e - Form submit event
   */
  subscribe(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    showToast("Subscribed successfully! 🎉");
  },

  /**
   * Initialize alerts feature
   */
  init() {
    // Expose to global for backward compatibility
    window.closeAlert = (alertId) => this.close(alertId);
    window.subscribe = (e) => this.subscribe(e);
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Alerts;
}
