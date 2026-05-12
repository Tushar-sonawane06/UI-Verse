/**
 * Theme Feature
 * Manages dark mode toggling and persistence
 */

const Theme = {
  /**
   * Load and apply saved theme
   */
  load() {
    const themeToggle = getElement("theme-toggle") || getElement("darkModeToggle");
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.body.classList.add("dark-mode");
      if (themeToggle) {
        themeToggle.innerText = "☀️ Light Mode";
        const icon = themeToggle.querySelector("i");
        if (icon) icon.className = "fa-solid fa-sun";
      }
    } else {
      document.body.classList.remove("dark-mode");
      if (themeToggle) {
        themeToggle.innerText = "🌙 Dark Mode";
        const icon = themeToggle.querySelector("i");
        if (icon) icon.className = "fa-solid fa-moon";
      }
    }
  },

  /**
   * Initialize theme feature
   */
  init() {
    // Apply system preference on first visit
    if (!localStorage.getItem("theme")) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
      }
    }

    this.load();

    const themeToggle = getElement("theme-toggle") || getElement("darkModeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        
        // Update icon if it exists
        const icon = themeToggle.querySelector("i");
        if (icon) {
          icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }
        themeToggle.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
      });
    }
  }
};

// Export for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Theme;
}
