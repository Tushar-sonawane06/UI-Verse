import '../dist/index.js';

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  if (!toggle) return;

  // Sync state helper
  const syncToggle = (themeName) => {
    const isDark = themeName === "dark" || themeName === "ocean" || themeName === "forest";
    toggle.checked = isDark;
  };

  // Sync checkbox on load
  const manager = window.DesignTokens;
  if (manager) {
    // Initialize design tokens immediately
    manager.init();
    
    const currentTheme = manager.getStoredTheme() || manager.getSystemTheme();
    syncToggle(currentTheme);
  }

  // Handle toggle change
  toggle.addEventListener("change", () => {
    const manager = window.DesignTokens;
    if (manager) {
      const nextTheme = toggle.checked ? "dark" : "light";
      manager.setTheme(nextTheme);
    }
  });

  // Keep toggle state in sync if theme changes elsewhere (like the dropdown)
  window.addEventListener("design-tokens:themechange", (event) => {
    const nextTheme = event.detail?.resolvedTheme || event.detail?.theme;
    syncToggle(nextTheme);
  });
});