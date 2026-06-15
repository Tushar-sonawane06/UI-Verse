/**
 * UIverse Localization Endpoints Handler
 * 
 * Provides HTTP endpoints for component localization with:
 * - Language selection and content negotiation
 * - Comprehensive fallback behavior
 * - Locale-specific requirement discovery
 * - Fallback chain documentation
 * - Translation completeness tracking
 * 
 * @version 1.0.0
 * @author UIverse Community
 * @license MIT
 */

class LocalizationEndpointsHandler {
  /**
   * Initialize Localization Endpoints Handler
   * 
   * @param {Object} i18nManager - ComponentI18nManager instance
   * @param {Object} options - Configuration options
   */
  constructor(i18nManager, options = {}) {
    this.i18nManager = i18nManager;
    this.enableMetrics = options.enableMetrics !== false;
    this.enableCaching = options.enableCaching !== false;
    this.metrics = {
      totalRequests: 0,
      successfulRequests: 0,
      fallbackUsed: 0,
      notFound: 0,
      averageResponseTime: 0
    };
    
    this.requestCache = new Map();
    this.cacheSize = options.cacheSize || 1000;
    
    this.fallbackStrategy = options.fallbackStrategy || 'intelligent'; // 'strict', 'intelligent', 'permissive'
    this.supportedLanguages = options.supportedLanguages || [];
    this.localeRequirements = this.initializeLocaleRequirements();
  }

  /**
   * Initialize locale-specific requirements
   * 
   * @private
   */
  initializeLocaleRequirements() {
    return {
      'en': {
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'h:mm AM/PM',
        decimalSeparator: '.',
        thousandsSeparator: ',',
        currency: 'USD',
        currencySymbol: '$',
        direction: 'ltr',
        weekStart: 0,
        timezone: 'UTC'
      },
      'es': {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
        decimalSeparator: ',',
        thousandsSeparator: '.',
        currency: 'EUR',
        currencySymbol: '€',
        direction: 'ltr',
        weekStart: 1,
        timezone: 'Europe/Madrid'
      },
      'fr': {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
        decimalSeparator: ',',
        thousandsSeparator: ' ',
        currency: 'EUR',
        currencySymbol: '€',
        direction: 'ltr',
        weekStart: 1,
        timezone: 'Europe/Paris'
      },
      'de': {
        dateFormat: 'DD.MM.YYYY',
        timeFormat: 'HH:mm',
        decimalSeparator: ',',
        thousandsSeparator: '.',
        currency: 'EUR',
        currencySymbol: '€',
        direction: 'ltr',
        weekStart: 1,
        timezone: 'Europe/Berlin'
      },
      'ja': {
        dateFormat: 'YYYY年MM月DD日',
        timeFormat: 'HH:mm',
        decimalSeparator: '.',
        thousandsSeparator: ',',
        currency: 'JPY',
        currencySymbol: '¥',
        direction: 'ltr',
        weekStart: 0,
        timezone: 'Asia/Tokyo'
      },
      'zh': {
        dateFormat: 'YYYY年MM月DD日',
        timeFormat: 'HH:mm',
        decimalSeparator: '.',
        thousandsSeparator: ',',
        currency: 'CNY',
        currencySymbol: '¥',
        direction: 'ltr',
        weekStart: 1,
        timezone: 'Asia/Shanghai'
      },
      'pt': {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
        decimalSeparator: ',',
        thousandsSeparator: '.',
        currency: 'BRL',
        currencySymbol: 'R$',
        direction: 'ltr',
        weekStart: 0,
        timezone: 'America/Sao_Paulo'
      },
      'ru': {
        dateFormat: 'DD.MM.YYYY',
        timeFormat: 'HH:mm',
        decimalSeparator: ',',
        thousandsSeparator: ' ',
        currency: 'RUB',
        currencySymbol: '₽',
        direction: 'ltr',
        weekStart: 1,
        timezone: 'Europe/Moscow'
      },
      'ko': {
        dateFormat: 'YYYY년MM월DD일',
        timeFormat: 'HH:mm',
        decimalSeparator: '.',
        thousandsSeparator: ',',
        currency: 'KRW',
        currencySymbol: '₩',
        direction: 'ltr',
        weekStart: 0,
        timezone: 'Asia/Seoul'
      },
      'it': {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
        decimalSeparator: ',',
        thousandsSeparator: '.',
        currency: 'EUR',
        currencySymbol: '€',
        direction: 'ltr',
        weekStart: 1,
        timezone: 'Europe/Rome'
      }
    };
  }

  /**
   * Handle GET /api/components/:componentName/localize endpoint
   * 
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  handleLocalizeComponent(req, res) {
    const startTime = performance.now();
    const { componentName } = req.params;
    const { language, format, includeRequirements } = req.query;

    this.metrics.totalRequests++;

    try {
      // Detect language from query param or Accept-Language header
      const targetLanguage = this.selectLanguage(
        language,
        req.headers['accept-language']
      );

      const cacheKey = `localize:${componentName}:${targetLanguage}:${format}:${includeRequirements}`;
      
      if (this.enableCaching && this.requestCache.has(cacheKey)) {
        const cached = this.requestCache.get(cacheKey);
        res.setHeader('X-Cache', 'HIT');
        res.setHeader('X-Response-Time', `${performance.now() - startTime}ms`);
        return res.json(cached);
      }

      // Get component metadata
      const metadata = this.i18nManager.getComponentMetadata(componentName, targetLanguage);
      
      // Get language support info
      const languageSupport = this.i18nManager.getLanguageSupport(componentName);
      
      // Determine if fallback was used
      const fallbackUsed = targetLanguage !== language;
      if (fallbackUsed) {
        this.metrics.fallbackUsed++;
      }

      // Get locale requirements if requested
      const localeRequirements = includeRequirements === 'true' 
        ? this.getLocaleRequirements(targetLanguage)
        : null;

      const response = {
        component: componentName,
        language: targetLanguage,
        requestedLanguage: language || null,
        fallbackUsed,
        metadata,
        languageSupport: {
          supportedLanguages: languageSupport.supportedLanguages,
          completeness: languageSupport.languageSupport[targetLanguage]?.completeness,
          availableLanguages: languageSupport.supportedLanguages,
          defaultLanguage: languageSupport.defaultLanguage,
          fallbackLanguage: languageSupport.fallbackLanguage
        },
        fallbackBehavior: this.getFallbackBehaviorDoc(componentName, targetLanguage),
        localeRequirements,
        timestamp: Date.now()
      };

      this.metrics.successfulRequests++;

      if (this.enableCaching) {
        this.setCacheWithEviction(cacheKey, response);
      }

      res.setHeader('Content-Language', targetLanguage);
      res.setHeader('Vary', 'Accept-Language');
      res.setHeader('X-Response-Time', `${performance.now() - startTime}ms`);
      res.setHeader('X-Fallback-Used', fallbackUsed ? 'true' : 'false');
      
      res.json(response);
    } catch (error) {
      this.metrics.notFound++;
      res.status(404).json({
        error: error.message,
        component: componentName,
        timestamp: Date.now()
      });
    }
  }

  /**
   * Handle GET /api/locales endpoint
   * Lists all available locales and their requirements
   */
  handleGetLocales(req, res) {
    const { includeRequirements, language } = req.query;

    const locales = this.i18nManager.supportedLanguages.map(lang => ({
      code: lang,
      name: this.getLanguageName(lang),
      nativeName: this.getNativeLanguageName(lang),
      requirements: includeRequirements === 'true' 
        ? this.localeRequirements[lang]
        : undefined
    }));

    res.json({
      locales,
      total: locales.length,
      timestamp: Date.now()
    });
  }

  /**
   * Handle GET /api/locales/:language/requirements endpoint
   * Get locale-specific requirements
   */
  handleGetLocaleRequirements(req, res) {
    const { language } = req.params;
    const { detailed } = req.query;

    if (!this.localeRequirements[language]) {
      return res.status(404).json({
        error: `Locale not supported: ${language}`,
        supportedLocales: Object.keys(this.localeRequirements)
      });
    }

    const requirements = this.localeRequirements[language];

    if (detailed === 'true') {
      return res.json({
        language,
        requirements,
        metadata: this.getLocaleMetadata(language),
        timestamp: Date.now()
      });
    }

    res.json(requirements);
  }

  /**
   * Handle GET /api/locales/:language/fallback-behavior endpoint
   * Get fallback behavior documentation for locale
   */
  handleGetFallbackBehavior(req, res) {
    const { language } = req.params;
    const { component } = req.query;

    const fallbackBehavior = {
      language,
      strategy: this.fallbackStrategy,
      fallbackChain: this.getFallbackChain(language),
      description: this.getFallbackStrategyDescription(),
      examples: this.getFallbackExamples(language),
      componentSpecific: component ? this.getFallbackBehaviorDoc(component, language) : null,
      timestamp: Date.now()
    };

    res.json(fallbackBehavior);
  }

  /**
   * Select language based on query parameter or Accept-Language header
   * 
   * @private
   */
  selectLanguage(queryLanguage, acceptLanguageHeader) {
    // Query parameter takes precedence
    if (queryLanguage) {
      const resolved = this.i18nManager.resolveLanguage(queryLanguage, this.i18nManager.supportedLanguages);
      return resolved;
    }

    // Detect from Accept-Language header
    if (acceptLanguageHeader) {
      return this.i18nManager.detectLanguage(acceptLanguageHeader, this.i18nManager.supportedLanguages);
    }

    // Default language
    return this.i18nManager.defaultLanguage;
  }

  /**
   * Get locale-specific requirements
   * 
   * @private
   */
  getLocaleRequirements(language) {
    return this.localeRequirements[language] || this.localeRequirements['en'];
  }

  /**
   * Get fallback behavior documentation
   * 
   * @private
   */
  getFallbackBehaviorDoc(componentName, language) {
    const component = this.i18nManager.components.get(componentName);
    if (!component) return null;

    return {
      requestedLanguage: language,
      availableLanguages: component.supportedLanguages,
      fallbackChain: this.getFallbackChain(language, component.supportedLanguages),
      strategy: this.fallbackStrategy,
      behavior: {
        'exact': 'Returns exact match if available',
        'partial': 'Returns language family match (e.g., pt for pt-BR)',
        'fallback': `Falls back to ${component.fallbackLanguage}`,
        'missing': 'Returns key name if all fallbacks exhausted'
      }
    };
  }

  /**
   * Get fallback chain for language
   * 
   * @private
   */
  getFallbackChain(language, availableLanguages = null) {
    const chain = [language];
    const baseLanguage = language.split('-')[0];
    
    if (baseLanguage !== language) {
      chain.push(baseLanguage);
    }

    if (!availableLanguages || availableLanguages.length === 0) {
      availableLanguages = this.i18nManager.supportedLanguages;
    }

    if (availableLanguages.includes(this.i18nManager.defaultLanguage) && 
        !chain.includes(this.i18nManager.defaultLanguage)) {
      chain.push(this.i18nManager.defaultLanguage);
    }

    chain.push('(missing key name)');
    return chain;
  }

  /**
   * Get fallback strategy description
   * 
   * @private
   */
  getFallbackStrategyDescription() {
    const descriptions = {
      'strict': 'Only exact matches accepted. Returns 406 if language not available.',
      'intelligent': 'Matches exact language, language family, then default with fallback chain.',
      'permissive': 'Accepts any available language. Prefers closest match, otherwise first available.'
    };
    return descriptions[this.fallbackStrategy] || descriptions['intelligent'];
  }

  /**
   * Get fallback examples
   * 
   * @private
   */
  getFallbackExamples(language) {
    const baseLanguage = language.split('-')[0];
    
    return {
      exactMatch: {
        requested: language,
        result: 'Returns exact translation',
        example: `GET /api/components/button/localize?language=${language}`
      },
      partialMatch: {
        requested: `${baseLanguage}-XX`,
        result: `Falls back to ${baseLanguage}`,
        example: `GET /api/components/button/localize?language=${baseLanguage}-XX`
      },
      notAvailable: {
        requested: 'xx-YY (not supported)',
        result: `Falls back to ${this.i18nManager.defaultLanguage}`,
        example: 'GET /api/components/button/localize?language=xx-YY'
      }
    };
  }

  /**
   * Get language name in English
   * 
   * @private
   */
  getLanguageName(code) {
    const names = {
      'en': 'English',
      'es': 'Spanish',
      'fr': 'French',
      'de': 'German',
      'ja': 'Japanese',
      'zh': 'Chinese',
      'pt': 'Portuguese',
      'ru': 'Russian',
      'ko': 'Korean',
      'it': 'Italian'
    };
    return names[code] || code;
  }

  /**
   * Get native language name
   * 
   * @private
   */
  getNativeLanguageName(code) {
    const names = {
      'en': 'English',
      'es': 'Español',
      'fr': 'Français',
      'de': 'Deutsch',
      'ja': '日本語',
      'zh': '中文',
      'pt': 'Português',
      'ru': 'Русский',
      'ko': '한국어',
      'it': 'Italiano'
    };
    return names[code] || code;
  }

  /**
   * Get locale metadata
   * 
   * @private
   */
  getLocaleMetadata(language) {
    return {
      language,
      englishName: this.getLanguageName(language),
      nativeName: this.getNativeLanguageName(language),
      regionCodes: this.getRegionCodesForLanguage(language),
      supportedRegions: this.getSupportedRegions(language)
    };
  }

  /**
   * Get region codes for language
   * 
   * @private
   */
  getRegionCodesForLanguage(language) {
    const regionMap = {
      'en': ['US', 'GB', 'AU', 'CA'],
      'es': ['ES', 'MX', 'AR', 'CO'],
      'fr': ['FR', 'CA', 'BE', 'CH'],
      'de': ['DE', 'AT', 'CH'],
      'pt': ['PT', 'BR'],
      'zh': ['CN', 'TW', 'HK'],
      'ja': ['JP'],
      'ru': ['RU'],
      'ko': ['KR'],
      'it': ['IT']
    };
    return regionMap[language] || [];
  }

  /**
   * Get supported regions
   * 
   * @private
   */
  getSupportedRegions(language) {
    const regions = {
      'en': ['en-US', 'en-GB', 'en-AU'],
      'es': ['es-ES', 'es-MX'],
      'fr': ['fr-FR', 'fr-CA'],
      'de': ['de-DE', 'de-AT'],
      'pt': ['pt-PT', 'pt-BR'],
      'zh': ['zh-CN', 'zh-TW'],
      'ja': ['ja-JP'],
      'ru': ['ru-RU'],
      'ko': ['ko-KR'],
      'it': ['it-IT']
    };
    return regions[language] || [language];
  }

  /**
   * Set cache with LRU eviction
   * 
   * @private
   */
  setCacheWithEviction(key, value) {
    if (this.requestCache.size >= this.cacheSize) {
      const firstKey = this.requestCache.keys().next().value;
      this.requestCache.delete(firstKey);
    }
    this.requestCache.set(key, value);
  }

  /**
   * Get endpoint metrics
   */
  getMetrics() {
    const totalTime = this.metrics.totalRequests > 0 
      ? this.metrics.totalWriteTime / this.metrics.totalRequests 
      : 0;

    return {
      ...this.metrics,
      successRate: ((this.metrics.successfulRequests / this.metrics.totalRequests) * 100).toFixed(2),
      fallbackUsageRate: ((this.metrics.fallbackUsed / this.metrics.totalRequests) * 100).toFixed(2),
      cacheSize: this.requestCache.size,
      maxCacheSize: this.cacheSize
    };
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.requestCache.clear();
  }

  /**
   * Reset metrics
   */
  resetMetrics() {
    this.metrics = {
      totalRequests: 0,
      successfulRequests: 0,
      fallbackUsed: 0,
      notFound: 0,
      averageResponseTime: 0
    };
  }
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LocalizationEndpointsHandler;
}
