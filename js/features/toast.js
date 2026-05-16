/**
 * Toast Notification Feature
 * Displays temporary toast messages to users
 */

const Toast = {
  /**
   * Show a toast message
   * @param {string} message - The message to display
   */
  show(message) {
    showToast(message);
  },

  /**
   * Initialize toast feature (if needed)
   */
  init() {
    // Toast initialization is passive and requires no DOM setup
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Toast;
}
