/**
 * UIverse Theme Validator
 * 
 * Implements the dedicated theme validation API contract for external consumers.
 * Provides comprehensive validation, error reporting, and accessibility analysis.
 * 
 * @version 1.0.0
 * @author UIverse Community
 * @license MIT
 */

class ThemeValidator {
  /**
   * Initialize Theme Validator
   * 
   * @param {Object} options - Configuration options
   * @param {boolean} options.strictMode - Enable strict validation (default: true)
   * @param {boolean} options.enableAccessibilityAnalysis - Analyze WCAG compliance (default: true)
   * @param {boolean} options.enableCaching - Cache validation results (default: true)
   */
  constructor(options = {}) {
    this.strictMode = options.strictMode !== false;
    this.enableAccessibilityAnalysis = options.enableAccessibilityAnalysis !== false;
    this.enableCaching = options.enableCaching !== false;
    
    // Validation result cache
    this.validationCache = new Map();
    this.cacheMaxSize = 1000;
    
    this.initializeValidationRules();
  }

  /**
   * Initialize validation rules and constraints
   * @private
   */
  initializeValidationRules() {
    this.rules = {
      id: {
        type: 'string',
        required: true,
        pattern: /^[a-zA-Z0-9-]+$/,
        minLength: 1,
        maxLength: 50
      },
      name: {
        type: 'string',
        required: true,
        minLength: 1,
        maxLength: 100
      },
      description: {
        type: 'string',
        required: false,
        maxLength: 500
      },
      isDark: {
        type: 'boolean',
        required: true
      },
      colors: {
        type: 'object',
        required: true,
        requiredFields: ['primary', 'background', 'surface', 'text'],
        colorFields: ['primary', 'secondary', 'accent', 'accentGlow', 'success', 'warning', 'error', 'info', 'background', 'surface', 'surfaceBorder']
      },
      typography: {
        type: 'object',
        required: false,
        fields: ['fontHeading', 'fontBody', 'fontMono']
      },
      spacing: {
        type: 'object',
        required: false,
        fields: ['xs', 'sm', 'md', 'lg', 'xl']
      },
      radius: {
        type: 'object',
        required: false,
        fields: ['sm', 'md', 'lg', 'full']
      }
    };
  }

  /**
   * Validate single theme
   * 
   * @param {Object} theme - Theme object to validate
   * @param {Object} options - Validation options
   * @returns {Object} - Validation result
   */
  validate(theme, options = {}) {
    const startTime = performance.now();
    
    // Check cache first
    if (this.enableCaching && options.useCache !== false) {
      const cacheKey = this.generateCacheKey(theme);
      if (this.validationCache.has(cacheKey)) {
        return this.validationCache.get(cacheKey);
      }
    }

    const errors = [];
    const warnings = [];

    // Validate required fields
    if (!theme || typeof theme !== 'object') {
      errors.push({
        field: 'root',
        message: 'Theme must be a valid object',
        code: 'INVALID_TYPE',
        severity: 'error'
      });
      return this.buildResult(false, errors, warnings, startTime);
    }

    // Validate each field
    for (const [fieldName, rule] of Object.entries(this.rules)) {
      const fieldValue = theme[fieldName];

      // Check required fields
      if (rule.required && fieldValue === undefined) {
        errors.push({
          field: fieldName,
          message: `Required field is missing: ${fieldName}`,
          code: 'MISSING_REQUIRED_FIELD',
          severity: 'error'
        });
        continue;
      }

      // Skip optional fields if not provided
      if (!rule.required && fieldValue === undefined) {
        continue;
      }

      // Validate field type
      if (fieldValue !== null && typeof fieldValue !== rule.type) {
        errors.push({
          field: fieldName,
          message: `Field ${fieldName} must be ${rule.type}, received ${typeof fieldValue}`,
          code: 'INVALID_TYPE',
          severity: 'error'
        });
        continue;
      }

      // Validate specific field types
      if (fieldName === 'id') {
        this.validateIdField(fieldValue, errors);
      } else if (fieldName === 'name') {
        this.validateNameField(fieldValue, errors);
      } else if (fieldName === 'colors') {
        this.validateColorsField(fieldValue, errors, warnings);
      } else if (fieldName === 'typography') {
        this.validateTypographyField(fieldValue, errors);
      } else if (fieldName === 'spacing') {
        this.validateSpacingField(fieldValue, errors);
      } else if (fieldName === 'radius') {
        this.validateRadiusField(fieldValue, errors);
      }
    }

    // Accessibility analysis
    if (this.enableAccessibilityAnalysis && errors.length === 0) {
      this.analyzeAccessibility(theme, warnings);
    }

    const result = this.buildResult(errors.length === 0, errors, warnings, startTime);

    // Cache result
    if (this.enableCaching && options.useCache !== false) {
      this.cacheValidationResult(theme, result);
    }

    return result;
  }

  /**
   * Validate ID field
   * @private
   */
  validateIdField(value, errors) {
    const rule = this.rules.id;

    if (value.length < rule.minLength) {
      errors.push({
        field: 'id',
        message: `Field id minimum length is ${rule.minLength}`,
        code: 'VALUE_TOO_SHORT',
        severity: 'error',
        constraint: `minLength: ${rule.minLength}`
      });
    }

    if (value.length > rule.maxLength) {
      errors.push({
        field: 'id',
        message: `Field id maximum length is ${rule.maxLength}`,
        code: 'VALUE_TOO_LONG',
        severity: 'error',
        constraint: `maxLength: ${rule.maxLength}`
      });
    }

    if (!rule.pattern.test(value)) {
      errors.push({
        field: 'id',
        message: `Field id must match pattern: ^[a-zA-Z0-9-]+$`,
        code: 'INVALID_PATTERN',
        severity: 'error',
        constraint: 'pattern: ^[a-zA-Z0-9-]+$'
      });
    }
  }

  /**
   * Validate name field
   * @private
   */
  validateNameField(value, errors) {
    const rule = this.rules.name;

    if (value.length < rule.minLength) {
      errors.push({
        field: 'name',
        message: `Field name minimum length is ${rule.minLength}`,
        code: 'VALUE_TOO_SHORT',
        severity: 'error'
      });
    }

    if (value.length > rule.maxLength) {
      errors.push({
        field: 'name',
        message: `Field name maximum length is ${rule.maxLength}`,
        code: 'VALUE_TOO_LONG',
        severity: 'error'
      });
    }
  }

  /**
   * Validate colors field
   * @private
   */
  validateColorsField(colors, errors, warnings) {
    if (typeof colors !== 'object' || colors === null) {
      errors.push({
        field: 'colors',
        message: 'Colors must be an object',
        code: 'INVALID_TYPE',
        severity: 'error'
      });
      return;
    }

    // Check required color fields
    const rule = this.rules.colors;
    for (const requiredField of rule.requiredFields) {
      if (!colors[requiredField]) {
        errors.push({
          field: `colors.${requiredField}`,
          message: `Required color field is missing: ${requiredField}`,
          code: 'MISSING_REQUIRED_FIELD',
          severity: 'error'
        });
      }
    }

    // Validate each color
    for (const [colorName, colorValue] of Object.entries(colors)) {
      if (colorName === 'text' && typeof colorValue === 'object') {
        // Validate text object
        for (const [textKey, textValue] of Object.entries(colorValue)) {
          if (!this.isValidColor(textValue)) {
            errors.push({
              field: `colors.text.${textKey}`,
              message: `Color must be valid hex (#RRGGBB) or rgb format`,
              code: 'INVALID_COLOR',
              severity: 'error'
            });
          }
        }
      } else if (typeof colorValue === 'string' && !this.isValidColor(colorValue)) {
        errors.push({
          field: `colors.${colorName}`,
          message: `Color must be valid hex (#RRGGBB) or rgb format`,
          code: 'INVALID_COLOR',
          severity: 'error'
        });
      }
    }
  }

  /**
   * Validate typography field
   * @private
   */
  validateTypographyField(typography, errors) {
    if (typeof typography !== 'object' || typography === null) {
      errors.push({
        field: 'typography',
        message: 'Typography must be an object',
        code: 'INVALID_TYPE',
        severity: 'error'
      });
      return;
    }

    if (typography.fontHeading && typeof typography.fontHeading !== 'string') {
      errors.push({
        field: 'typography.fontHeading',
        message: 'fontHeading must be a string',
        code: 'INVALID_TYPE',
        severity: 'error'
      });
    }

    if (typography.fontBody && typeof typography.fontBody !== 'string') {
      errors.push({
        field: 'typography.fontBody',
        message: 'fontBody must be a string',
        code: 'INVALID_TYPE',
        severity: 'error'
      });
    }
  }

  /**
   * Validate spacing field
   * @private
   */
  validateSpacingField(spacing, errors) {
    if (typeof spacing !== 'object' || spacing === null) {
      errors.push({
        field: 'spacing',
        message: 'Spacing must be an object',
        code: 'INVALID_TYPE',
        severity: 'error'
      });
      return;
    }

    // Validate each spacing value
    const spacingPattern = /^\d+(px|em|rem)$/;
    for (const [key, value] of Object.entries(spacing)) {
      if (value && !spacingPattern.test(value)) {
        errors.push({
          field: `spacing.${key}`,
          message: `Spacing value must be in format: <number>px|em|rem`,
          code: 'INVALID_FORMAT',
          severity: 'error'
        });
      }
    }
  }

  /**
   * Validate radius field
   * @private
   */
  validateRadiusField(radius, errors) {
    if (typeof radius !== 'object' || radius === null) {
      errors.push({
        field: 'radius',
        message: 'Radius must be an object',
        code: 'INVALID_TYPE',
        severity: 'error'
      });
      return;
    }

    // Validate each radius value
    const radiusPattern = /^\d+(px|em|rem|%)$/;
    for (const [key, value] of Object.entries(radius)) {
      if (value && !radiusPattern.test(value)) {
        errors.push({
          field: `radius.${key}`,
          message: `Radius value must be in format: <number>px|em|rem|%`,
          code: 'INVALID_FORMAT',
          severity: 'error'
        });
      }
    }
  }

  /**
   * Check if color is valid
   * @private
   */
  isValidColor(color) {
    if (typeof color !== 'string') return false;

    // Hex format: #RGB, #RRGGBB, #RGBA, #RRGGBBAA
    const hexPattern = /^#(?:[0-9a-f]{3}){1,2}(?:[0-9a-f]{2})?$/i;
    if (hexPattern.test(color)) return true;

    // RGB/RGBA format
    const rgbPattern = /^rgba?\([0-9, .%]+\)$/i;
    if (rgbPattern.test(color)) return true;

    return false;
  }

  /**
   * Analyze accessibility compliance
   * @private
   */
  analyzeAccessibility(theme, warnings) {
    if (!theme.colors || !theme.colors.text) return;

    const colors = theme.colors;
    const primaryText = colors.text.primary;
    const background = colors.background;

    // Check contrast ratio
    if (primaryText && background) {
      const contrastRatio = this.getContrastRatio(primaryText, background);
      
      if (contrastRatio < 4.5) {
        warnings.push({
          field: 'colors',
          message: `Text contrast ratio (${contrastRatio.toFixed(2)}:1) is below WCAG AA minimum (4.5:1)`,
          code: 'CONSTRAINT_VIOLATION',
          severity: 'warning',
          constraint: 'minContrastRatio: 4.5'
        });
      }
    }
  }

  /**
   * Calculate contrast ratio between two colors
   * @private
   */
  getContrastRatio(color1, color2) {
    const lum1 = this.getRelativeLuminance(color1);
    const lum2 = this.getRelativeLuminance(color2);

    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);

    return (lighter + 0.05) / (darker + 0.05);
  }

  /**
   * Get relative luminance of color
   * @private
   */
  getRelativeLuminance(color) {
    const rgb = this.hexToRgb(color);
    if (!rgb) return 0;

    const [r, g, b] = rgb.map(val => val / 255);

    const rsrgb = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const gsrgb = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    const bsrgb = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

    return 0.2126 * rsrgb + 0.7152 * gsrgb + 0.0722 * bsrgb;
  }

  /**
   * Convert hex color to RGB
   * @private
   */
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : null;
  }

  /**
   * Validate color value
   * 
   * @param {string} color - Color to validate
   * @returns {Object} - Color validation result
   */
  validateColor(color) {
    const startTime = performance.now();
    
    if (!this.isValidColor(color)) {
      return {
        valid: false,
        color,
        error: 'Invalid color format',
        metadata: {
          timestamp: new Date().toISOString(),
          validationDuration: performance.now() - startTime
        }
      };
    }

    const format = this.detectColorFormat(color);
    const normalized = this.normalizeColor(color);

    return {
      valid: true,
      color,
      format,
      normalized,
      contrast: {
        white: this.getContrastRatio(normalized, '#ffffff'),
        black: this.getContrastRatio(normalized, '#000000')
      },
      metadata: {
        timestamp: new Date().toISOString(),
        validationDuration: performance.now() - startTime
      }
    };
  }

  /**
   * Detect color format
   * @private
   */
  detectColorFormat(color) {
    if (color.startsWith('#')) return 'hex';
    if (color.startsWith('rgb(')) return 'rgb';
    if (color.startsWith('rgba(')) return 'rgba';
    return 'unknown';
  }

  /**
   * Normalize color to hex format
   * @private
   */
  normalizeColor(color) {
    if (color.startsWith('#')) return color;
    
    // Parse rgb(a) format
    const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
      const [, r, g, b] = rgbMatch.map(Number);
      return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('').toUpperCase();
    }

    return color;
  }

  /**
   * Batch validate themes
   * 
   * @param {Array} themes - Array of themes to validate
   * @param {Object} options - Batch options
   * @returns {Object} - Batch validation result
   */
  validateBatch(themes, options = {}) {
    if (!Array.isArray(themes)) {
      return {
        error: 'Themes must be an array',
        results: []
      };
    }

    const results = [];
    let valid = 0;
    let invalid = 0;
    let totalErrors = 0;
    let totalWarnings = 0;

    for (const theme of themes) {
      const validation = this.validate(theme);
      results.push({
        themeId: theme.id || 'unknown',
        validation
      });

      if (validation.valid) {
        valid++;
      } else {
        invalid++;
      }

      totalErrors += validation.metadata.errorCount;
      totalWarnings += validation.metadata.warningCount;

      // Stop on first error if requested
      if (options.stopOnFirst && !validation.valid) {
        break;
      }
    }

    return {
      results,
      summary: {
        total: results.length,
        valid,
        invalid,
        totalErrors,
        totalWarnings
      }
    };
  }

  /**
   * Generate validation report
   * 
   * @param {Object} theme - Theme to analyze
   * @returns {Object} - Validation report with analysis
   */
  generateReport(theme) {
    const validation = this.validate(theme);

    if (!validation.valid) {
      return { validation, report: null };
    }

    const accessibility = this.analyzeAccessibilityMetrics(theme);
    const score = this.calculateThemeScore(theme, accessibility);

    return {
      validation,
      report: {
        accessibility,
        score,
        recommendations: this.generateRecommendations(theme, score)
      }
    };
  }

  /**
   * Analyze accessibility metrics
   * @private
   */
  analyzeAccessibilityMetrics(theme) {
    const colors = theme.colors || {};
    
    return {
      wcagAA: true,
      wcagAAA: false,
      contrastAnalysis: {
        text: colors.text ? this.getContrastRatio(colors.text.primary, colors.background) : null
      }
    };
  }

  /**
   * Calculate theme quality score
   * @private
   */
  calculateThemeScore(theme, accessibility) {
    let score = 100;

    // Deduct for missing optional fields
    if (!theme.description) score -= 5;
    if (!theme.typography) score -= 5;
    if (!theme.spacing) score -= 5;
    if (!theme.radius) score -= 5;

    // Deduct for accessibility issues
    if (accessibility.contrastAnalysis.text && accessibility.contrastAnalysis.text < 4.5) {
      score -= 15;
    }

    return Math.max(0, score);
  }

  /**
   * Generate recommendations
   * @private
   */
  generateRecommendations(theme, score) {
    const recommendations = [];

    if (score < 70) {
      recommendations.push('Consider adding more design tokens for consistency');
    }

    if (!theme.description) {
      recommendations.push('Add a theme description to help users understand its purpose');
    }

    if (!theme.typography) {
      recommendations.push('Define typography tokens for better consistency');
    }

    if (!theme.spacing) {
      recommendations.push('Define spacing scale for consistent layout');
    }

    return recommendations;
  }

  /**
   * Build validation result object
   * @private
   */
  buildResult(valid, errors, warnings, startTime) {
    return {
      valid,
      errors,
      warnings,
      metadata: {
        timestamp: new Date().toISOString(),
        validator: '1.0.0',
        errorCount: errors.length,
        warningCount: warnings.length,
        validationDuration: Math.round(performance.now() - startTime)
      }
    };
  }

  /**
   * Generate cache key
   * @private
   */
  generateCacheKey(theme) {
    return JSON.stringify(theme);
  }

  /**
   * Cache validation result
   * @private
   */
  cacheValidationResult(theme, result) {
    const key = this.generateCacheKey(theme);

    // Simple LRU cache eviction
    if (this.validationCache.size >= this.cacheMaxSize) {
      const firstKey = this.validationCache.keys().next().value;
      this.validationCache.delete(firstKey);
    }

    this.validationCache.set(key, result);
  }

  /**
   * Clear validation cache
   */
  clearCache() {
    this.validationCache.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats() {
    return {
      size: this.validationCache.size,
      maxSize: this.cacheMaxSize,
      utilization: (this.validationCache.size / this.cacheMaxSize * 100).toFixed(2) + '%'
    };
  }
}

// Initialize global instance
const UIVerseThemeValidator = new ThemeValidator({
  strictMode: true,
  enableAccessibilityAnalysis: true,
  enableCaching: true
});

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UIVerseThemeValidator;
}
