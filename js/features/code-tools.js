/**
 * Code Tools Feature
 * Provides copy, toggle, and color picker functionality for code blocks
 */

const CodeTools = {
  /**
   * Toggle visibility of a code block
   * @param {string} id - Code block element ID
   */
  toggleCode(id) {
    const codeBlock = getElement(id);
    if (!codeBlock) return;

    if (codeBlock.classList.contains("show")) {
      codeBlock.style.display = "none";
      codeBlock.classList.remove("show");
    } else {
      codeBlock.style.display = "block";
      codeBlock.classList.add("show");
    }
  },

  /**
   * Copy code to clipboard
   * @param {string} id - Code block element ID
   * @param {HTMLElement} btn - Button element (for feedback)
   */
  copyCode(id, btn) {
    const element = getElement(id);
    if (!element) return;

    // Support both <textarea>/<input> (use .value) and any other element (use .innerText)
    const code = (element.tagName === "TEXTAREA" || element.tagName === "INPUT")
      ? element.value
      : element.innerText;

    navigator.clipboard.writeText(code)
      .then(() => {
        showToast("Code copied!");

        if (btn) {
          const originalText = btn.innerText;
          btn.innerText = "Copied ✓";
          btn.classList.add("copied");

          setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove("copied");
          }, 1500);
        }
      })
      .catch(() => {
        showToast("Failed to copy ❌");
        if (btn) btn.innerText = "Error";
      });
  },

  /**
   * Copy a color value to clipboard
   * @param {string} color - Color string
   */
  copyColor(color) {
    navigator.clipboard.writeText(color);
    showToast(color + " copied!");
  },

  /**
   * Copy RGB value to clipboard
   * @param {string} value - RGB value
   */
  copyRGB(value) {
    navigator.clipboard.writeText(`rgb(${value})`);
    showToast(`rgb(${value}) copied!`);
  },

  /**
   * Initialize code tools feature
   */
  init() {
    // Expose to global for backward compatibility with inline onclick handlers
    window.toggleCode = (id) => this.toggleCode(id);
    window.copyCode = (id, btn) => this.copyCode(id, btn);
    window.copyColor = (color) => this.copyColor(color);
    window.copyRGB = (value) => this.copyRGB(value);
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CodeTools;
}
