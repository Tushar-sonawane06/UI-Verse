/**
 * UIverse Theme Manager
 * 
 * Backend-friendly layer for component theming configuration.
 * Provides programmatic access to theme data, theme switching,
 * and export functionality for integration with backend services.
 * 
 * @version 1.0.0
 * @author UIverse Community
 * @license MIT
 */

class ThemeManager {
  /**
   * Initialize Theme Manager
   * 
   * @param {Object} options - Configuration options
   * @param {string} options.configUrl - URL to theme-config.json
   * @param {string} options.storageKey - LocalStorage key for theme preference (default: 'uiverse-theme')
   * @param {boolean} options.autoLoad - Auto-load config on init (default: true)
   * @param {Function} options.onThemeChange - Callback when theme changes
   */
  constructor(options = {}) {
    this.configUrl = options.configUrl || 'theme-config.json';
    this.storageKey = options.storageKey || 'uiverse-theme';
    this.autoLoad = options.autoLoad !== false;
    this.onThemeChange = options.onThemeChange || null;
    
    // In-memory theme configuration
    this.config = null;
    
    // Current active theme
    this.currentTheme = null;
    
    // Theme change listeners
    this.listeners = [];
    
    if (this.autoLoad) {
      this.loadConfig();
    }
  }

  /**
   * Load theme configuration from file
   * 
   * @returns {Promise<Object>} - Theme configuration
   */
  async loadConfig() {
    try {
      const response = await fetch(this.configUrl);
      this.config = await response.json();
      
      // Load saved theme preference or use default
      const saved = this.getSavedTheme();
      if (saved && this.config.themes[saved]) {
        this.setTheme(saved, false);
      } else {
        this.setTheme('light', false);
      }
      
      return this.config;
    } catch (error) {
      console.error('Failed to load theme config:', error);
      return null;
    }
  }

  /**
   * Get current active theme
   * 
   * @returns {Object|null} - Current theme object
   */
  getCurrentTheme() {
    return this.currentTheme;
  }

  /**
   * Get theme by ID
   * 
   * @param {string} themeId - Theme identifier
   * @returns {Object|null} - Theme object or null if not found
   */
  getTheme(themeId) {
    return this.config?.themes?.[themeId] || null;
  }

  /**
   * Get all available themes
   * 
   * @returns {Object} - All themes
   */
  getAllThemes() {
    return this.config?.themes || {};
  }

  /**
   * Get list of theme IDs
   * 
   * @returns {string[]} - Array of theme IDs
   */
  getThemeIds() {
    return Object.keys(this.config?.themes || {});
  }

  /**
   * Get theme metadata
   * 
   * @returns {Object} - Theme configuration metadata
   */
  getMetadata() {
    return this.config?.metadata || {};
  }

  /**
   * Set active theme
   * 
   * @param {string} themeId - Theme identifier
   * @param {boolean} persist - Save theme preference to localStorage (default: true)
   * @returns {boolean} - Success status
   */
  setTheme(themeId, persist = true) {
    const theme = this.getTheme(themeId);
    if (!theme) {
      console.error(`Theme '${themeId}' not found`);
      return false;
    }

    this.currentTheme = theme;
    this.applyTheme(theme);
    
    if (persist) {
      this.saveTheme(themeId);
    }

    this.notifyListeners(theme);

    if (this.onThemeChange) {
      this.onThemeChange(theme);
    }

    return true;
  }

  /**
   * Apply theme to document
   * 
   * @private
   * @param {Object} theme - Theme object
   */
  applyTheme(theme) {
    const root = document.documentElement;
    const colors = theme.colors || {};
    const typography = theme.typography || {};
    const spacing = theme.spacing || {};
    const radius = theme.radius || {};
    const shadows = theme.shadows || {};
    const transitions = theme.transitions || {};

    // Apply colors
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--accent-glow', colors.accentGlow);
    root.style.setProperty('--success', colors.success);
    root.style.setProperty('--warning', colors.warning);
    root.style.setProperty('--error', colors.error);
    root.style.setProperty('--info', colors.info);
    root.style.setProperty('--body-bg', colors.background);
    root.style.setProperty('--card-bg', colors.surface);
    root.style.setProperty('--card-border', colors.surfaceBorder);
    root.style.setProperty('--text-primary', colors.text?.primary);
    root.style.setProperty('--text-secondary', colors.text?.secondary);

    // Apply typography
    root.style.setProperty('--font-heading', typography.fontHeading);
    root.style.setProperty('--font-body', typography.fontBody);
    root.style.setProperty('--font-mono', typography.fontMono);

    // Apply spacing
    root.style.setProperty('--spacing-xs', spacing.xs);
    root.style.setProperty('--spacing-sm', spacing.sm);
    root.style.setProperty('--spacing-md', spacing.md);
    root.style.setProperty('--spacing-lg', spacing.lg);
    root.style.setProperty('--spacing-xl', spacing.xl);
    root.style.setProperty('--spacing-2xl', spacing['2xl']);

    // Apply radius
    root.style.setProperty('--radius-sm', radius.sm);
    root.style.setProperty('--radius-md', radius.md);
    root.style.setProperty('--radius-lg', radius.lg);
    root.style.setProperty('--radius-full', radius.full);

    // Apply shadows
    root.style.setProperty('--shadow-sm', shadows.sm);
    root.style.setProperty('--shadow-md', shadows.md);
    root.style.setProperty('--shadow-lg', shadows.lg);
    root.style.setProperty('--shadow-xl', shadows.xl);

    // Apply transitions
    root.style.setProperty('--transition-default', transitions.default);
    root.style.setProperty('--transition-fast', transitions.fast);
    root.style.setProperty('--transition-slow', transitions.slow);

    // Update document class for theme detection
    document.documentElement.setAttribute('data-theme', theme.id);
    
    if (theme.isDark) {
      document.body.classList.add('dark-mode');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.remove('dark');
    }
  }

  /**
   * Subscribe to theme changes
   * 
   * @param {Function} callback - Function to call on theme change
   * @returns {Function} - Unsubscribe function
   */
  subscribe(callback) {
    this.listeners.push(callback);
    
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  /**
   * Notify all listeners of theme change
   * 
   * @private
   */
  notifyListeners(theme) {
    this.listeners.forEach(callback => {
      try {
        callback(theme);
      } catch (error) {
        console.error('Error in theme listener:', error);
      }
    });
  }

  /**
   * Save theme preference to localStorage
   * 
   * @private
   */
  saveTheme(themeId) {
    try {
      localStorage.setItem(this.storageKey, themeId);
    } catch (error) {
      console.error('Failed to save theme preference:', error);
    }
  }

  /**
   * Get saved theme preference from localStorage
   * 
   * @private
   * @returns {string|null} - Saved theme ID or null
   */
  getSavedTheme() {
    try {
      return localStorage.getItem(this.storageKey);
    } catch (error) {
      console.error('Failed to get saved theme:', error);
      return null;
    }
  }

  /**
   * Get theme as CSS variables string
   * 
   * @param {string} themeId - Theme identifier
   * @returns {string} - CSS variables as string
   */
  getThemeAsCSS(themeId) {
    const theme = this.getTheme(themeId);
    if (!theme) return '';

    let css = `:root {\n`;
    
    const colors = theme.colors || {};
    css += `  --primary: ${colors.primary};\n`;
    css += `  --secondary: ${colors.secondary};\n`;
    css += `  --accent: ${colors.accent};\n`;
    css += `  --body-bg: ${colors.background};\n`;
    css += `  --card-bg: ${colors.surface};\n`;
    css += `  --text-primary: ${colors.text?.primary};\n`;
    css += `  --text-secondary: ${colors.text?.secondary};\n`;

    const spacing = theme.spacing || {};
    Object.entries(spacing).forEach(([key, value]) => {
      css += `  --spacing-${key}: ${value};\n`;
    });

    const radius = theme.radius || {};
    Object.entries(radius).forEach(([key, value]) => {
      css += `  --radius-${key}: ${value};\n`;
    });

    css += `}\n`;
    return css;
  }

  /**
   * Get theme as JSON object for backend
   * 
   * @param {string} themeId - Theme identifier
   * @returns {Object|null} - Theme as JSON object
   */
  getThemeAsJSON(themeId) {
    return this.getTheme(themeId);
  }

  /**
   * Get theme as SCSS variables
   * 
   * @param {string} themeId - Theme identifier
   * @returns {string} - SCSS variables as string
   */
  getThemeAsSCSS(themeId) {
    const theme = this.getTheme(themeId);
    if (!theme) return '';

    let scss = `// Theme: ${theme.name}\n`;
    scss += `// Generated from UIverse Theme Manager\n\n`;

    const colors = theme.colors || {};
    scss += `// Colors\n`;
    scss += `$primary: ${colors.primary};\n`;
    scss += `$secondary: ${colors.secondary};\n`;
    scss += `$accent: ${colors.accent};\n`;
    scss += `$background: ${colors.background};\n`;
    scss += `$surface: ${colors.surface};\n`;
    scss += `$text-primary: ${colors.text?.primary};\n`;
    scss += `$text-secondary: ${colors.text?.secondary};\n\n`;

    const spacing = theme.spacing || {};
    scss += `// Spacing\n`;
    Object.entries(spacing).forEach(([key, value]) => {
      scss += `$spacing-${key}: ${value};\n`;
    });

    scss += `\n// Radius\n`;
    const radius = theme.radius || {};
    Object.entries(radius).forEach(([key, value]) => {
      scss += `$radius-${key}: ${value};\n`;
    });

    return scss;
  }

  /**
   * Get theme as Tailwind config format
   * 
   * @param {string} themeId - Theme identifier
   * @returns {string} - JavaScript Tailwind config as string
   */
  getThemeAsTailwind(themeId) {
    const theme = this.getTheme(themeId);
    if (!theme) return '';

    const colors = theme.colors || {};
    const radius = theme.radius || {};
    const spacing = theme.spacing || {};

    let config = `module.exports = {\n`;
    config += `  theme: {\n`;
    config += `    extend: {\n`;
    config += `      colors: {\n`;
    config += `        primary: '${colors.primary}',\n`;
    config += `        secondary: '${colors.secondary}',\n`;
    config += `        accent: '${colors.accent}',\n`;
    config += `        background: '${colors.background}',\n`;
    config += `        surface: '${colors.surface}',\n`;
    config += `      },\n`;
    config += `      borderRadius: {\n`;
    Object.entries(radius).forEach(([key, value]) => {
      config += `        '${key}': '${value}',\n`;
    });
    config += `      },\n`;
    config += `      spacing: {\n`;
    Object.entries(spacing).forEach(([key, value]) => {
      config += `        '${key}': '${value}',\n`;
    });
    config += `      },\n`;
    config += `    },\n`;
    config += `  },\n`;
    config += `};\n`;

    return config;
  }

  /**
   * Get color palette by ID
   * 
   * @param {string} paletteId - Palette identifier
   * @returns {Object|null} - Color palette or null
   */
  getColorPalette(paletteId) {
    return this.config?.colorPalettes?.[paletteId] || null;
  }

  /**
   * Get all color palettes
   * 
   * @returns {Object} - All color palettes
   */
  getAllColorPalettes() {
    return this.config?.colorPalettes || {};
  }

  /**
   * Get gradient by ID
   * 
   * @param {string} gradientId - Gradient identifier
   * @returns {Object|null} - Gradient or null
   */
  getGradient(gradientId) {
    return this.config?.gradients?.[gradientId] || null;
  }

  /**
   * Get all gradients
   * 
   * @returns {Object} - All gradients
   */
  getAllGradients() {
    return this.config?.gradients || {};
  }

  /**
   * Get component default styles
   * 
   * @param {string} componentType - Component type (button, card, input, etc.)
   * @returns {Object|null} - Component defaults or null
   */
  getComponentDefaults(componentType) {
    return this.config?.componentDefaults?.[componentType] || null;
  }

  /**
   * Get breakpoints
   * 
   * @returns {Object} - Breakpoints object
   */
  getBreakpoints() {
    return this.config?.breakpoints || {};
  }

  /**
   * Get accessibility guidelines
   * 
   * @returns {Object} - Accessibility settings
   */
  getAccessibilityGuidelines() {
    return this.config?.accessibility || {};
  }

  /**
   * Export complete theme configuration
   * 
   * @param {string} themeId - Theme identifier
   * @param {string} format - Export format (css-variables, json, scss, tailwind, css-in-js)
   * @returns {string|Object} - Exported theme data
   */
  exportTheme(themeId, format = 'json') {
    switch (format) {
      case 'css-variables':
      case 'css':
        return this.getThemeAsCSS(themeId);
      case 'json':
        return JSON.stringify(this.getThemeAsJSON(themeId), null, 2);
      case 'scss':
        return this.getThemeAsSCSS(themeId);
      case 'tailwind':
        return this.getThemeAsTailwind(themeId);
      case 'css-in-js':
        return JSON.stringify(this.getThemeAsJSON(themeId), null, 2);
      default:
        return this.getThemeAsJSON(themeId);
    }
  }

  /**
   * Get supported export formats
   * 
   * @returns {Array} - Array of supported export formats
   */
  getSupportedFormats() {
    return this.config?.exports?.formats || [];
  }

  /**
   * Validate theme object structure
   * 
   * @param {Object} theme - Theme object to validate
   * @returns {Object} - Validation result { valid: boolean, errors: string[] }
   */
  validateTheme(theme) {
    const errors = [];

    if (!theme.id) errors.push('Missing required field: id');
    if (!theme.name) errors.push('Missing required field: name');
    if (!theme.colors) errors.push('Missing required field: colors');
    
    if (theme.colors) {
      if (!theme.colors.primary) errors.push('Missing required color: primary');
      if (!theme.colors.background) errors.push('Missing required color: background');
      if (!theme.colors.surface) errors.push('Missing required color: surface');
      if (!theme.colors.text) errors.push('Missing required field: text colors');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Get theme statistics
   * 
   * @returns {Object} - Theme statistics
   */
  getStatistics() {
    const themes = this.getAllThemes();
    const palettes = this.getAllColorPalettes();
    const gradients = this.getAllGradients();

    return {
      totalThemes: Object.keys(themes).length,
      totalPalettes: Object.keys(palettes).length,
      totalGradients: Object.keys(gradients).length,
      currentTheme: this.currentTheme?.id || 'none',
      supportedFormats: this.getSupportedFormats().length
    };
  }

  /**
   * Get API documentation for backend integration
   * 
   * @returns {Object} - API documentation
   */
  getAPIDocumentation() {
    return {
      version: this.config?.metadata?.apiVersion || '1.0.0',
      endpoints: [
        {
          path: '/api/themes',
          method: 'GET',
          description: 'Get all available themes'
        },
        {
          path: '/api/themes/:id',
          method: 'GET',
          description: 'Get specific theme by ID'
        },
        {
          path: '/api/themes/:id/export',
          method: 'GET',
          description: 'Export theme in specified format',
          queryParams: ['format']
        },
        {
          path: '/api/palettes',
          method: 'GET',
          description: 'Get all color palettes'
        },
        {
          path: '/api/gradients',
          method: 'GET',
          description: 'Get all gradients'
        },
        {
          path: '/api/components/:type',
          method: 'GET',
          description: 'Get component default styles'
        }
      ]
    };
  }
}

// Initialize global instance
const UIVerseThemeManager = new ThemeManager({
  configUrl: 'theme-config.json',
  storageKey: 'uiverse-theme',
  autoLoad: true
});

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UIVerseThemeManager;
}
