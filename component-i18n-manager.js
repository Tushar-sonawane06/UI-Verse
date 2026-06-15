/**
 * UIverse Component Internationalization Manager
 * 
 * Provides comprehensive i18n support for component metadata:
 * - Multi-language component definitions with directionality
 * - Translation management with RTL/LTR metadata
 * - Bidirectional text support and BiDi control characters
 * - Language detection and routing
 * - Plural handling and formatting
 * - Translation caching and performance
 * 
 * @version 1.0.1
 * @author UIverse Community
 * @license MIT
 */

class ComponentI18nManager {
  /**
   * Initialize Component I18n Manager
   * 
   * @param {Object} options - Configuration options
   */
  constructor(options = {}) {
    this.defaultLanguage = options.defaultLanguage || 'en';
    this.supportedLanguages = options.supportedLanguages || [
      'en', 'es', 'fr', 'de', 'ja', 'zh', 'pt', 'ru', 'ko', 'it', 'ar', 'he', 'fa'
    ];
    this.fallbackLanguage = options.fallbackLanguage || 'en';
    this.translations = new Map(); // lang -> namespace -> key -> translation
    this.components = new Map(); // componentName -> i18n metadata
    this.translationCache = new Map();
    this.enableCaching = options.enableCaching !== false;
    this.cacheSize = options.cacheSize || 500;
    
    // RTL language mapping
    this.rtlLanguages = new Set(options.rtlLanguages || ['ar', 'he', 'fa', 'ur', 'yi', 'ji']);
    this.ltrLanguages = new Set(options.ltrLanguages || [
      'en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'sv', 'no', 'da', 'fi', 'pl', 'cs', 'ru', 'uk', 'bg', 'sr', 'hr', 'sk'
    ]);

    // Script and directionality mapping
    this.languageMetadata = this.initializeLanguageMetadata();
    
    this.pluralRules = {
      'en': new Intl.PluralRules('en'),
      'es': new Intl.PluralRules('es'),
      'fr': new Intl.PluralRules('fr'),
      'de': new Intl.PluralRules('de'),
      'ja': new Intl.PluralRules('ja'),
      'zh': new Intl.PluralRules('zh'),
      'pt': new Intl.PluralRules('pt'),
      'ru': new Intl.PluralRules('ru'),
      'ko': new Intl.PluralRules('ko'),
      'it': new Intl.PluralRules('it'),
      'ar': new Intl.PluralRules('ar'),
      'he': new Intl.PluralRules('he'),
      'fa': new Intl.PluralRules('fa')
    };

    this.formatters = {
      'en': new Intl.DateTimeFormat('en'),
      'es': new Intl.DateTimeFormat('es'),
      'fr': new Intl.DateTimeFormat('fr'),
      'de': new Intl.DateTimeFormat('de'),
      'ja': new Intl.DateTimeFormat('ja'),
      'zh': new Intl.DateTimeFormat('zh'),
      'pt': new Intl.DateTimeFormat('pt'),
      'ru': new Intl.DateTimeFormat('ru'),
      'ko': new Intl.DateTimeFormat('ko'),
      'it': new Intl.DateTimeFormat('it'),
      'ar': new Intl.DateTimeFormat('ar'),
      'he': new Intl.DateTimeFormat('he'),
      'fa': new Intl.DateTimeFormat('fa')
    };
  }

  /**
   * Initialize language metadata with directionality
   * @private
   */
  initializeLanguageMetadata() {
    return {
      'en': { textDirection: 'ltr', scriptCode: 'Latn', scriptDirection: 'ltr', biDiRequired: false },
      'es': { textDirection: 'ltr', scriptCode: 'Latn', scriptDirection: 'ltr', biDiRequired: false },
      'fr': { textDirection: 'ltr', scriptCode: 'Latn', scriptDirection: 'ltr', biDiRequired: false },
      'de': { textDirection: 'ltr', scriptCode: 'Latn', scriptDirection: 'ltr', biDiRequired: false },
      'it': { textDirection: 'ltr', scriptCode: 'Latn', scriptDirection: 'ltr', biDiRequired: false },
      'pt': { textDirection: 'ltr', scriptCode: 'Latn', scriptDirection: 'ltr', biDiRequired: false },
      'ja': { textDirection: 'ltr', scriptCode: 'Jpan', scriptDirection: 'ltr', biDiRequired: false },
      'zh': { textDirection: 'ltr', scriptCode: 'Hans', scriptDirection: 'ltr', biDiRequired: false },
      'ko': { textDirection: 'ltr', scriptCode: 'Hang', scriptDirection: 'ltr', biDiRequired: false },
      'ru': { textDirection: 'ltr', scriptCode: 'Cyrl', scriptDirection: 'ltr', biDiRequired: false },
      'ar': { textDirection: 'rtl', scriptCode: 'Arab', scriptDirection: 'rtl', biDiRequired: true },
      'he': { textDirection: 'rtl', scriptCode: 'Hebr', scriptDirection: 'rtl', biDiRequired: true },
      'fa': { textDirection: 'rtl', scriptCode: 'Arab', scriptDirection: 'rtl', biDiRequired: true },
      'ur': { textDirection: 'rtl', scriptCode: 'Arab', scriptDirection: 'rtl', biDiRequired: true }
    };
  }

  /**
   * Register component with i18n metadata including directionality
   * 
   * @param {string} componentName - Component identifier
   * @param {Object} i18nMetadata - Internationalization metadata
   */
  registerComponent(componentName, i18nMetadata) {
    if (!i18nMetadata.supportedLanguages || i18nMetadata.supportedLanguages.length === 0) {
      throw new Error(`Component ${componentName} must define supportedLanguages`);
    }

    // Enrich metadata with directionality information
    const enrichedTranslations = this.enrichTranslationsWithDirectionality(
      i18nMetadata.translations || {},
      i18nMetadata.supportedLanguages
    );

    this.components.set(componentName, {
      name: componentName,
      defaultLanguage: i18nMetadata.defaultLanguage || this.defaultLanguage,
      supportedLanguages: i18nMetadata.supportedLanguages,
      fallbackLanguage: i18nMetadata.fallbackLanguage || i18nMetadata.supportedLanguages[0],
      translations: enrichedTranslations,
      languageMetadata: this.extractLanguageMetadata(i18nMetadata.supportedLanguages),
      metadata: {
        author: i18nMetadata.author,
        version: i18nMetadata.version || '1.0.0',
        lastUpdated: i18nMetadata.lastUpdated || Date.now(),
        completeness: this.calculateCompleteness(i18nMetadata)
      }
    });
  }

  /**
   * Enrich translations with directionality and BiDi metadata
   * @private
   */
  enrichTranslationsWithDirectionality(translations, supportedLanguages) {
    const enriched = {};

    for (const lang of supportedLanguages) {
      enriched[lang] = translations[lang] || {};
      
      // Add directionality metadata
      const metadata = this.languageMetadata[lang];
      if (metadata) {
        enriched[lang]._directionality = {
          textDirection: metadata.textDirection,
          scriptCode: metadata.scriptCode,
          scriptDirection: metadata.scriptDirection,
          biDiRequired: metadata.biDiRequired
        };
      }
    }

    return enriched;
  }

  /**
   * Extract language metadata for component
   * @private
   */
  extractLanguageMetadata(supportedLanguages) {
    const metadata = {};

    for (const lang of supportedLanguages) {
      metadata[lang] = this.languageMetadata[lang] || {
        textDirection: 'ltr',
        scriptCode: 'Latn',
        scriptDirection: 'ltr',
        biDiRequired: false
      };
    }

    return metadata;
  }

  /**
   * Get component metadata in specific language with directionality
   * 
   * @param {string} componentName - Component identifier
   * @param {string} language - Target language code
   * @returns {Object} - Localized component metadata with directionality
   */
  getComponentMetadata(componentName, language) {
    const component = this.components.get(componentName);
    if (!component) {
      throw new Error(`Component not found: ${componentName}`);
    }

    const cacheKey = `${componentName}:${language}`;
    if (this.enableCaching && this.translationCache.has(cacheKey)) {
      return this.translationCache.get(cacheKey);
    }

    // Resolve language with fallback
    const resolvedLanguage = this.resolveLanguage(language, component.supportedLanguages);

    const metadata = {
      name: componentName,
      language: resolvedLanguage,
      fallback: resolvedLanguage !== language,
      directionality: component.languageMetadata[resolvedLanguage] || {},
      ...this.getTranslations(componentName, resolvedLanguage)
    };

    if (this.enableCaching) {
      this.setCache(cacheKey, metadata);
    }

    return metadata;
  }

  /**
   * Get translations for component
   * 
   * @private
   */
  getTranslations(componentName, language) {
    const component = this.components.get(componentName);
    if (!component) return {};

    const translations = component.translations[language] || {};
    return {
      name: translations.name || componentName,
      description: translations.description || '',
      category: translations.category || '',
      tags: translations.tags || [],
      usage: translations.usage || '',
      examples: translations.examples || [],
      notes: translations.notes || '',
      deprecationNote: translations.deprecationNote || null,
      textDirection: translations.textDirection || this.getTextDirection(language),
      scriptCode: translations.scriptCode || this.getScriptCode(language)
    };
  }

  /**
   * Get text direction for language
   * @private
   */
  getTextDirection(language) {
    const baseLang = language.split('-')[0];
    const metadata = this.languageMetadata[baseLang];
    return metadata ? metadata.textDirection : 'ltr';
  }

  /**
   * Get script code for language
   * @private
   */
  getScriptCode(language) {
    const baseLang = language.split('-')[0];
    const metadata = this.languageMetadata[baseLang];
    return metadata ? metadata.scriptCode : 'Latn';
  }

  /**
   * Translate a key with placeholder substitution
   * 
   * @param {string} componentName - Component identifier
   * @param {string} key - Translation key (e.g., 'description')
   * @param {Object} params - Placeholder values
   * @param {string} language - Target language
   * @returns {string} - Translated and formatted string
   */
  translate(componentName, key, params = {}, language = this.defaultLanguage) {
    const component = this.components.get(componentName);
    if (!component) {
      throw new Error(`Component not found: ${componentName}`);
    }

    const resolvedLanguage = this.resolveLanguage(language, component.supportedLanguages);
    const translations = component.translations[resolvedLanguage] || {};
    let text = translations[key] || '';

    // Substitute parameters
    for (const [paramKey, paramValue] of Object.entries(params)) {
      const regex = new RegExp(`\\{${paramKey}\\}`, 'g');
      text = text.replace(regex, paramValue);
    }

    // Apply BiDi markers for RTL text
    const metadata = component.languageMetadata[resolvedLanguage];
    if (metadata && metadata.biDiRequired) {
      text = this.applyBiDiMarkers(text, metadata.textDirection);
    }

    return text;
  }

  /**
   * Apply BiDi (bidirectional) control characters
   * @private
   */
  applyBiDiMarkers(text, direction) {
    const RLM = '\u200F'; // Right-to-left mark
    const LRM = '\u200E'; // Left-to-right mark
    const RLE = '\u202A'; // Right-to-left embedding
    const LRE = '\u202D'; // Left-to-right embedding
    const PDF = '\u202C'; // Pop directional formatting

    if (direction === 'rtl') {
      return RLE + text + PDF;
    }
    return text;
  }

  /**
   * Resolve language with fallback chain
   * @private
   */
  resolveLanguage(language, supportedLanguages) {
    if (supportedLanguages.includes(language)) {
      return language;
    }

    // Try language family (e.g., es-MX -> es)
    const baseLang = language.split('-')[0];
    if (supportedLanguages.includes(baseLang)) {
      return baseLang;
    }

    // Return fallback
    return supportedLanguages[0];
  }

  /**
   * Get language support details including directionality
   * 
   * @param {string} componentName - Component identifier
   * @returns {Object} - Support details for each language
   */
  getLanguageSupport(componentName) {
    const component = this.components.get(componentName);
    if (!component) {
      throw new Error(`Component not found: ${componentName}`);
    }

    const support = {};
    for (const lang of component.supportedLanguages) {
      const translations = component.translations[lang] || {};
      const total = Object.keys(this.getTranslations(componentName, lang)).length;
      const translated = Object.keys(translations).length;
      
      support[lang] = {
        isDefault: lang === component.defaultLanguage,
        isFallback: lang === component.fallbackLanguage,
        completeness: (translated / total * 100).toFixed(2) + '%',
        directionality: component.languageMetadata[lang] || {}
      };
    }

    return support;
  }

  /**
   * Calculate translation completeness percentage
   * 
   * @private
   */
  calculateCompleteness(i18nMetadata) {
    const supportedLanguages = i18nMetadata.supportedLanguages || [];
    if (supportedLanguages.length === 0) return 0;

    const translations = i18nMetadata.translations || {};
    const defaultLang = i18nMetadata.defaultLanguage || i18nMetadata.supportedLanguages[0];
    const defaultTranslations = translations[defaultLang] || {};
    const defaultKeys = Object.keys(defaultTranslations);

    let totalCompleteness = 0;
    for (const lang of supportedLanguages) {
      const langTranslations = translations[lang] || {};
      const langKeys = Object.keys(langTranslations);
      const completeness = (langKeys.length / (defaultKeys.length || 1)) * 100;
      totalCompleteness += completeness;
    }

    return (totalCompleteness / supportedLanguages.length).toFixed(2);
  }

  /**
   * Add translation for component
   * 
   * @param {string} componentName - Component identifier
   * @param {string} language - Language code
   * @param {Object} translations - Translation key-value pairs
   */
  addTranslation(componentName, language, translations) {
    const component = this.components.get(componentName);
    if (!component) {
      throw new Error(`Component not found: ${componentName}`);
    }

    if (!component.supportedLanguages.includes(language)) {
      throw new Error(`Language ${language} not supported for component ${componentName}`);
    }

    // Preserve directionality metadata
    const existingDirMeta = component.translations[language]?._directionality;

    component.translations[language] = {
      ...component.translations[language],
      ...translations,
      _directionality: existingDirMeta || this.languageMetadata[language]
    };

    component.metadata.completeness = this.calculateCompleteness({
      supportedLanguages: component.supportedLanguages,
      defaultLanguage: component.defaultLanguage,
      translations: component.translations
    });

    // Invalidate cache
    this.translationCache.clear();
  }

  /**
   * Get all components with language metadata
   * 
   * @returns {Array} - Array of components with metadata
   */
  getAllComponents() {
    const components = [];
    for (const [name, data] of this.components) {
      components.push({
        name,
        ...data
      });
    }
    return components;
  }

  /**
   * Export translations for external tools with BiDi metadata
   * 
   * @param {string} format - Export format (json, csv, xliff)
   * @returns {string} - Exported translations with directionality
   */
  exportTranslations(format = 'json') {
    const data = {};
    
    for (const [componentName, component] of this.components) {
      data[componentName] = {
        languages: component.supportedLanguages,
        languageMetadata: component.languageMetadata,
        translations: component.translations
      };
    }

    switch (format) {
      case 'csv':
        return this.exportAsCSV(data);
      case 'xliff':
        return this.exportAsXLIFF(data);
      case 'json':
      default:
        return JSON.stringify(data, null, 2);
    }
  }

  /**
   * Export as CSV with directionality column
   * 
   * @private
   */
  exportAsCSV(data) {
    let csv = 'Component,Language,TextDirection,ScriptCode,Key,Value\n';
    
    for (const [componentName, component] of Object.entries(data)) {
      for (const [lang, translations] of Object.entries(component.translations)) {
        const metadata = component.languageMetadata[lang] || {};
        const textDirection = metadata.textDirection || 'ltr';
        const scriptCode = metadata.scriptCode || 'Latn';

        for (const [key, value] of Object.entries(translations)) {
          if (key === '_directionality') continue;
          const escapedValue = String(value).replace(/"/g, '""');
          csv += `${componentName},${lang},${textDirection},${scriptCode},${key},"${escapedValue}"\n`;
        }
      }
    }

    return csv;
  }

  /**
   * Export as XLIFF with xml:lang and BiDi attributes
   * 
   * @private
   */
  exportAsXLIFF(data) {
    let xliff = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xliff += '<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">\n';

    for (const [componentName, component] of Object.entries(data)) {
      for (const [lang, translations] of Object.entries(component.translations)) {
        const metadata = component.languageMetadata[lang] || {};
        const textDirection = metadata.textDirection || 'ltr';
        const scriptCode = metadata.scriptCode || 'Latn';
        const biDiRequired = metadata.biDiRequired ? 'true' : 'false';

        xliff += `  <file original="${componentName}" source-language="en" target-language="${lang}" `;
        xliff += `xml:lang="${lang}" `;
        xliff += `dir="${textDirection}" `;
        xliff += `>\n`;
        xliff += `    <!-- Script: ${scriptCode}, BiDi Required: ${biDiRequired} -->\n`;
        xliff += '    <body>\n';
        
        for (const [key, value] of Object.entries(translations)) {
          if (key === '_directionality') continue;
          xliff += `      <trans-unit id="${componentName}.${lang}.${key}" `;
          xliff += `xml:lang="${lang}" dir="${textDirection}">\n`;
          xliff += `        <source>${this.escapeXML(value)}</source>\n`;
          xliff += `        <target>${this.escapeXML(value)}</target>\n`;
          xliff += '      </trans-unit>\n';
        }

        xliff += '    </body>\n';
        xliff += '  </file>\n';
      }
    }

    xliff += '</xliff>';
    return xliff;
  }

  /**
   * Escape XML special characters
   * @private
   */
  escapeXML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  /**
   * Set cache value with LRU eviction
   * @private
   */
  setCache(key, value) {
    if (this.translationCache.size >= this.cacheSize) {
      const firstKey = this.translationCache.keys().next().value;
      this.translationCache.delete(firstKey);
    }
    this.translationCache.set(key, value);
  }

  /**
   * Clear all caches
   */
  clearCache() {
    this.translationCache.clear();
  }

  /**
   * Get manager statistics
   * 
   * @returns {Object} - Manager statistics
   */
  getStats() {
    return {
      totalComponents: this.components.size,
      cacheSize: this.translationCache.size,
      maxCacheSize: this.cacheSize,
      supportedLanguages: this.supportedLanguages,
      defaultLanguage: this.defaultLanguage,
      rtlLanguages: Array.from(this.rtlLanguages),
      languageMetadata: this.languageMetadata
    };
  }
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ComponentI18nManager;
}
