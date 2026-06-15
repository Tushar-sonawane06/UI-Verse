/**
 * UIverse Theme Validator
 * 
 * Implements the dedicated theme validation API contract for external consumers.
 * Provides comprehensive validation, error reporting with semantic color granularity, and accessibility analysis.
 * 
 * @version 1.0.1
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
    this.initializeColorProcessingRules();
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
   * Initialize color processing rules for semantic error detection
   * @private
   */
  initializeColorProcessingRules() {
    this.colorRules = {
      supportedFormats: ['hex-3', 'hex-6', 'hex-8', 'rgb', 'rgba'],
      colorSpace: 'RGB',
      hexValidation: {
        'hex-3': /^#[0-9a-fA-F]{3}$/,
        'hex-6': /^#[0-9a-fA-F]{6}$/,
        'hex-8': /^#[0-9a-fA-F]{8}$/
      },
      rgbValidation: /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)$/,
      rgbComponentRange: [0, 255],
      alphaRange: [0, 1]
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
        message: `Field id must match pattern: ${rule.pattern}`,
        code: 'INVALID_PATTERN',
        severity: 'error',
        constraint: `pattern: ${rule.pattern}`
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
   * Validate colors field with semantic granularity
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

    const requiredColors = this.rules.colors.requiredFields;
    
    // Validate required colors
    for (const requiredColor of requiredColors) {
      if (requiredColor === 'text') {
        if (!colors.text) {
          errors.push({
            field: 'colors.text',
            message: 'Required field is missing: colors.text',
            code: 'MISSING_REQUIRED_FIELD',
            severity: 'error'
          });
          continue;
        }
        
        // Validate text colors
        for (const textKey of ['primary', 'secondary']) {
          const textColor = colors.text[textKey];
          if (!this.isValidColor(textColor)) {
            this.validateColorWithSemantics(
              textColor,
              `colors.text.${textKey}`,
              errors
            );
          }
        }
      } else {
        const colorValue = colors[requiredColor];
        if (!colorValue) {
          errors.push({
            field: `colors.${requiredColor}`,
            message: `Required field is missing: colors.${requiredColor}`,
            code: 'MISSING_REQUIRED_FIELD',
            severity: 'error'
          });
          continue;
        }

        if (!this.isValidColor(colorValue)) {
          this.validateColorWithSemantics(
            colorValue,
            `colors.${requiredColor}`,
            errors
          );
        }
      }
    }

    // Validate optional colors
    for (const [colorName, colorValue] of Object.entries(colors)) {
      if (colorName === 'text' || requiredColors.includes(colorName)) continue;
      if (!requiredColors.includes(colorName) && colorValue && !this.isValidColor(colorValue)) {
        this.validateColorWithSemantics(
          colorValue,
          `colors.${colorName}`,
          errors
        );
      }
    }
  }

  /**
   * Validate color with semantic error codes for specific failure types
   * @private
   */
  validateColorWithSemantics(color, fieldPath, errors) {
    if (typeof color !== 'string') {
      errors.push({
        field: fieldPath,
        message: `Color must be a string, received ${typeof color}`,
        code: 'INVALID_TYPE',
        severity: 'error'
      });
      return;
    }

    const trimmed = color.trim();
    
    // Detect attempted format
    if (trimmed.startsWith('#')) {
      this.validateHexColor(trimmed, fieldPath, errors);
    } else if (trimmed.startsWith('rgb')) {
      this.validateRgbColor(trimmed, fieldPath, errors);
    } else if (trimmed.startsWith('hsl')) {
      errors.push({
        field: fieldPath,
        message: `HSL color space not compatible with RGB-only theme`,
        code: 'COLOR_SPACE_INCOMPATIBLE',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'hsl',
          expectedFormats: this.colorRules.supportedFormats,
          colorValue: trimmed,
          colorSpace: 'HSL',
          failureReason: 'Theme requires RGB color space',
          suggestion: 'Convert HSL color to hex or rgb format'
        }
      });
    } else if (trimmed.startsWith('lab') || trimmed.startsWith('lch')) {
      errors.push({
        field: fieldPath,
        message: `Lab/LCH color space not compatible with RGB-only theme`,
        code: 'COLOR_SPACE_INCOMPATIBLE',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'lab/lch',
          expectedFormats: this.colorRules.supportedFormats,
          colorValue: trimmed,
          colorSpace: 'Lab/LCH',
          failureReason: 'Theme requires RGB color space',
          suggestion: 'Convert Lab/LCH color to hex or rgb format'
        }
      });
    } else {
      errors.push({
        field: fieldPath,
        message: `Color format not recognized`,
        code: 'COLOR_FORMAT_MISMATCH',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'unknown',
          expectedFormats: this.colorRules.supportedFormats,
          colorValue: trimmed,
          failureReason: 'Format does not match any supported color format',
          suggestion: `Use hex (#RRGGBB), hex with alpha (#RRGGBBAA), or rgb(r, g, b) format`
        }
      });
    }
  }

  /**
   * Validate hex color with semantic error codes
   * @private
   */
  validateHexColor(hex, fieldPath, errors) {
    // Remove hash for analysis
    const hexDigits = hex.substring(1);
    
    // Check length
    if (hexDigits.length !== 3 && hexDigits.length !== 6 && hexDigits.length !== 8) {
      errors.push({
        field: fieldPath,
        message: `Hex color length invalid: expected 3, 6, or 8 digits (after #), got ${hexDigits.length}`,
        code: 'COLOR_PARSE_ERROR',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'hex',
          expectedFormats: ['hex-3', 'hex-6', 'hex-8'],
          colorValue: hex,
          failureReason: `Invalid hex length: ${hexDigits.length} digits`,
          suggestion: 'Use 3 digits (#RGB), 6 digits (#RRGGBB), or 8 digits (#RRGGBBAA)'
        }
      });
      return;
    }

    // Find invalid hex digits
    const invalidDigits = [];
    for (const char of hexDigits) {
      if (!/[0-9a-fA-F]/.test(char) && !invalidDigits.includes(char)) {
        invalidDigits.push(char);
      }
    }

    if (invalidDigits.length > 0) {
      errors.push({
        field: fieldPath,
        message: `Hex color '${hex}' contains invalid digits`,
        code: 'HEX_DIGIT_INVALID',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'hex',
          expectedFormats: ['hex-3', 'hex-6', 'hex-8'],
          colorValue: hex,
          failureReason: `Invalid hexadecimal digits: ${invalidDigits.join(', ')}`,
          suggestion: 'Use valid hex digits (0-9, a-f) and ensure format is #RGB, #RRGGBB, or #RRGGBBAA'
        }
      });
      return;
    }
  }

  /**
   * Validate RGB color with semantic error codes
   * @private
   */
  validateRgbColor(rgb, fieldPath, errors) {
    const match = this.colorRules.rgbValidation.exec(rgb);
    
    if (!match) {
      errors.push({
        field: fieldPath,
        message: `RGB color format invalid`,
        code: 'COLOR_PARSE_ERROR',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'rgb',
          expectedFormats: ['rgb', 'rgba'],
          colorValue: rgb,
          failureReason: 'Invalid RGB/RGBA syntax',
          suggestion: 'Use rgb(r, g, b) or rgba(r, g, b, a) format with values 0-255'
        }
      });
      return;
    }

    const [, rStr, gStr, bStr, aStr] = match;
    const r = parseInt(rStr, 10);
    const g = parseInt(gStr, 10);
    const b = parseInt(bStr, 10);
    const a = aStr ? parseFloat(aStr) : undefined;

    // Check RGB component ranges
    if (r < this.colorRules.rgbComponentRange[0] || r > this.colorRules.rgbComponentRange[1]) {
      errors.push({
        field: fieldPath,
        message: `RGB component value ${r} out of range [0-255]`,
        code: 'RGB_COMPONENT_OUT_OF_RANGE',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'rgb',
          colorValue: rgb,
          failureReason: `Red component ${r} exceeds valid range [0-255]`,
          suggestion: 'Ensure all RGB components are between 0 and 255'
        }
      });
      return;
    }

    if (g < this.colorRules.rgbComponentRange[0] || g > this.colorRules.rgbComponentRange[1]) {
      errors.push({
        field: fieldPath,
        message: `RGB component value ${g} out of range [0-255]`,
        code: 'RGB_COMPONENT_OUT_OF_RANGE',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'rgb',
          colorValue: rgb,
          failureReason: `Green component ${g} exceeds valid range [0-255]`,
          suggestion: 'Ensure all RGB components are between 0 and 255'
        }
      });
      return;
    }

    if (b < this.colorRules.rgbComponentRange[0] || b > this.colorRules.rgbComponentRange[1]) {
      errors.push({
        field: fieldPath,
        message: `RGB component value ${b} out of range [0-255]`,
        code: 'RGB_COMPONENT_OUT_OF_RANGE',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'rgb',
          colorValue: rgb,
          failureReason: `Blue component ${b} exceeds valid range [0-255]`,
          suggestion: 'Ensure all RGB components are between 0 and 255'
        }
      });
      return;
    }

    // Check alpha range if present
    if (a !== undefined && (a < this.colorRules.alphaRange[0] || a > this.colorRules.alphaRange[1])) {
      errors.push({
        field: fieldPath,
        message: `Alpha value ${a} out of range [0-1]`,
        code: 'RGB_COMPONENT_OUT_OF_RANGE',
        severity: 'error',
        colorDetails: {
          attemptedFormat: 'rgba',
          colorValue: rgb,
          failureReason: `Alpha component ${a} exceeds valid range [0-1]`,
          suggestion: 'Ensure alpha is between 0 (transparent) and 1 (opaque)'
        }
      });
      return;
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

    for (const field of this.rules.typography.fields) {
      if (typography[field] && typeof typography[field] !== 'string') {
        errors.push({
          field: `typography.${field}`,
          message: `Typography.${field} must be a string`,
          code: 'INVALID_TYPE',
          severity: 'error'
        });
      }
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
    }
  }

  /**
   * Check if color is valid format
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
  hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
    return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
  }

  getRelativeLuminance(color) {
    let rgb = null;
    if (color.startsWith('#')) {
      rgb = this.hexToRgb(color);
    } else if (color.startsWith('rgb')) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) rgb = [Number(match[1]), Number(match[2]), Number(match[3])];
    } else if (color.startsWith('hsl')) {
      const match = color.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/);
      if (match) {
        rgb = this.hslToRgb(Number(match[1]), Number(match[2]), Number(match[3]));
      }
    }
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
   * Validate single color value
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
    if (color.startsWith('hsl(')) return 'hsl';
    if (color.startsWith('hsla(')) return 'hsla';
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
        valid: validCount,
        invalid: results.length - validCount,
        totalErrors: results.reduce((sum, r) => sum + r.validation.metadata.errorCount, 0),
        totalWarnings: results.reduce((sum, r) => sum + r.validation.metadata.warningCount, 0)
      }
    };
  }

  /**
   * Generate validation cache key
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
    
    if (this.validationCache.size >= this.cacheMaxSize) {
      const firstKey = this.validationCache.keys().next().value;
      this.validationCache.delete(firstKey);
    }

    this.validationCache.set(key, result);
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

  getSchema(format = 'json-schema') {
    return {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      type: 'object',
      properties: {
        id: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 50 },
        name: { type: 'string', minLength: 1, maxLength: 100 },
        isDark: { type: 'boolean' },
        colors: { type: 'object' }
      },
      required: ['id', 'name', 'isDark', 'colors']
    };
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
