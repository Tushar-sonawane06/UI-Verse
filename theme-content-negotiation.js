/**
 * UIverse Theme HTTP Content Negotiation
 * 
 * Implements HTTP content negotiation (Accept headers, format selection) for theme delivery.
 * Supports multiple content types and formats:
 * - application/json
 * - text/css
 * - application/x-scss
 * - application/javascript
 * - text/plain
 * - application/xml
 * - application/yaml
 * 
 * @version 1.0.0
 * @author UIverse Community
 * @license MIT
 */

class ThemeContentNegotiator {
  /**
   * Initialize Content Negotiator
   * 
   * @param {Object} options - Configuration options
   */
  constructor(options = {}) {
    this.supportedTypes = {
      'application/json': { priority: 1.0, extension: '.json', serializer: this.serializeJSON },
      'text/css': { priority: 0.9, extension: '.css', serializer: this.serializeCSS },
      'application/x-scss': { priority: 0.8, extension: '.scss', serializer: this.serializeSCSS },
      'application/javascript': { priority: 0.7, extension: '.js', serializer: this.serializeJavaScript },
      'text/plain': { priority: 0.6, extension: '.txt', serializer: this.serializePlainText },
      'application/xml': { priority: 0.5, extension: '.xml', serializer: this.serializeXML },
      'application/yaml': { priority: 0.4, extension: '.yaml', serializer: this.serializeYAML },
      'application/x-ndjson': { priority: 0.3, extension: '.ndjson', serializer: this.serializeNDJSON },
      'text/html': { priority: 0.2, extension: '.html', serializer: this.serializeHTML }
    };

    this.encodings = {
      'gzip': { priority: 1.0, supported: true },
      'deflate': { priority: 0.8, supported: true },
      'br': { priority: 0.9, supported: true, algorithm: 'brotli' },
      'identity': { priority: 0.5, supported: true }
    };

    this.languages = {
      'en': { priority: 1.0 },
      'en-US': { priority: 0.9 },
      'es': { priority: 0.8 },
      'fr': { priority: 0.7 },
      'de': { priority: 0.6 }
    };

    this.charsets = {
      'utf-8': { priority: 1.0 },
      'utf-16': { priority: 0.5 },
      'iso-8859-1': { priority: 0.3 }
    };

    // Canonical charset mappings for normalization (RFC 2978)
    this.charsetCanonical = {
      'utf-8': 'utf-8',
      'utf8': 'utf-8',
      'UTF-8': 'utf-8',
      'UTF8': 'utf-8',
      'utf_8': 'utf-8',
      'utf_16': 'utf-16',
      'utf-16': 'utf-16',
      'utf16': 'utf-16',
      'UTF-16': 'utf-16',
      'UTF16': 'utf-16',
      'UTF_16': 'utf-16',
      'iso-8859-1': 'iso-8859-1',
      'iso8859-1': 'iso-8859-1',
      'iso_8859-1': 'iso-8859-1',
      'iso-8859_1': 'iso-8859-1',
      'iso8859_1': 'iso-8859-1',
      'latin1': 'iso-8859-1',
      'latin-1': 'iso-8859-1',
      'LATIN1': 'iso-8859-1',
      'LATIN-1': 'iso-8859-1'
    };

    this.enableCaching = options.enableCaching !== false;
    this.cacheSize = options.cacheSize || 100;
    this.negotiationCache = new Map();
    this.defaultType = options.defaultType || 'application/json';

    // Statistical tracking for cache performance
    this.cacheStats = {
      hits: 0,
      misses: 0,
      evictions: 0,
      localeGroups: new Map(),  // Track stats per locale grouping
      accessLog: []             // Track access patterns
    };

    this.trackingEnabled = options.trackingEnabled !== false;
    this.maxAccessLogSize = options.maxAccessLogSize || 1000;
  }

  /**
   * Negotiate content type from Accept header
   * 
   * @param {string} acceptHeader - Accept header value
   * @returns {Object} - Negotiated content type info
   */
  negotiateContentType(acceptHeader) {
    if (!acceptHeader || acceptHeader === '*/*') {
      return {
        contentType: this.defaultType,
        quality: 1.0,
        parameters: {}
      };
    }

    const cacheKey = `ct:${acceptHeader}`;
    if (this.enableCaching && this.negotiationCache.has(cacheKey)) {
      if (this.trackingEnabled) {
        this.cacheStats.hits++;
        this.recordAccessLog(cacheKey, 'hit');
      }
      return this.negotiationCache.get(cacheKey);
    }

    if (this.trackingEnabled) {
      this.cacheStats.misses++;
      this.recordAccessLog(cacheKey, 'miss');
    }

    // Parse Accept header
    const mediaRanges = this.parseAcceptHeader(acceptHeader);
    
    // Find best match
    let bestMatch = null;
    let bestQuality = -1;
    let bestPriority = -1;

    for (const range of mediaRanges) {
      for (const [contentType, info] of Object.entries(this.supportedTypes)) {
        if (this.isMediaRangeMatch(range, contentType)) {
          const quality = range.quality;
          const priority = info.priority;
          
          if (quality > bestQuality || (quality === bestQuality && priority > bestPriority)) {
            bestMatch = contentType;
            bestQuality = quality;
            bestPriority = priority;
          }
        }
      }
    }

    const result = {
      contentType: bestMatch || this.defaultType,
      quality: bestQuality > 0 ? bestQuality : 1.0,
      parameters: this.extractParameters(acceptHeader)
    };

    if (this.enableCaching) {
      this.setCache(cacheKey, result);
    }

    return result;
  }

  /**
   * Negotiate encoding from Accept-Encoding header
   * 
   * @param {string} acceptEncodingHeader - Accept-Encoding header value
   * @returns {Object} - Negotiated encoding info
   */
  negotiateEncoding(acceptEncodingHeader) {
    if (!acceptEncodingHeader) {
      return {
        encoding: 'identity',
        quality: 1.0
      };
    }

    const cacheKey = `enc:${acceptEncodingHeader}`;
    if (this.enableCaching && this.negotiationCache.has(cacheKey)) {
      if (this.trackingEnabled) {
        this.cacheStats.hits++;
        this.recordAccessLog(cacheKey, 'hit');
      }
      return this.negotiationCache.get(cacheKey);
    }

    if (this.trackingEnabled) {
      this.cacheStats.misses++;
      this.recordAccessLog(cacheKey, 'miss');
    }

    const encodings = this.parseAcceptEncodingHeader(acceptEncodingHeader);
    let bestMatch = null;
    let bestQuality = -1;

    for (const encoding of encodings) {
      const encName = encoding.value === '*' ? 'identity' : encoding.value;
      if (this.encodings[encName] && this.encodings[encName].supported) {
        if (encoding.quality > bestQuality) {
          bestMatch = encName;
          bestQuality = encoding.quality;
        }
      }
    }

    const result = {
      encoding: bestMatch || 'identity',
      quality: bestQuality > 0 ? bestQuality : 1.0
    };

    if (this.enableCaching) {
      this.setCache(cacheKey, result);
    }

    return result;
  }

  /**
   * Negotiate language from Accept-Language header
   * 
   * @param {string} acceptLanguageHeader - Accept-Language header value
   * @returns {Object} - Negotiated language info
   */
  negotiateLanguage(acceptLanguageHeader) {
    if (!acceptLanguageHeader) {
      return {
        language: 'en',
        quality: 1.0
      };
    }

    const cacheKey = `lang:${acceptLanguageHeader}`;
    
    // Track cache hit
    if (this.enableCaching && this.negotiationCache.has(cacheKey)) {
      if (this.trackingEnabled) {
        this.cacheStats.hits++;
        this.recordAccessLog(cacheKey, 'hit');
      }
      return this.negotiationCache.get(cacheKey);
    }

    // Track cache miss
    if (this.trackingEnabled) {
      this.cacheStats.misses++;
      this.recordAccessLog(cacheKey, 'miss');
    }

    const languages = this.parseAcceptLanguageHeader(acceptLanguageHeader);
    let bestMatch = null;
    let bestQuality = -1;

    for (const lang of languages) {
      if (this.languages[lang.value] && lang.quality > bestQuality) {
        bestMatch = lang.value;
        bestQuality = lang.quality;
      }
    }

    const result = {
      language: bestMatch || 'en',
      quality: bestQuality > 0 ? bestQuality : 1.0
    };

    if (this.enableCaching) {
      this.setCache(cacheKey, result);
      
      // Track locale grouping stats
      if (this.trackingEnabled) {
        const localeGroup = this.extractLocaleGroup(result.language);
        this.updateLocaleGroupStats(localeGroup, true);
      }
    }

    return result;
  }

  /**
   * Perform full content negotiation
   * 
   * @param {Object} headers - HTTP headers object
   * @returns {Object} - Full negotiation result
   */
  negotiate(headers) {
    const contentType = this.negotiateContentType(headers.accept || '*/*');
    const encoding = this.negotiateEncoding(headers['accept-encoding'] || '');
    const language = this.negotiateLanguage(headers['accept-language'] || '');
    const charset = this.negotiateCharset(headers['accept-charset'] || 'utf-8');

    return {
      contentType: contentType.contentType,
      contentQuality: contentType.quality,
      encoding: encoding.encoding,
      encodingQuality: encoding.quality,
      language: language.language,
      languageQuality: language.quality,
      charset: charset.charset,
      charsetQuality: charset.quality,
      timestamp: Date.now(),
      isAcceptable: contentType.quality > 0 && encoding.quality > 0
    };
  }

  /**
   * Normalize charset name to canonical form (RFC 2978)
   * 
   * Handles variations like UTF-8, utf8, UTF8, UTF_8, etc. and maps to canonical form
   * 
   * @private
   * @param {string} charsetName - Charset name to normalize
   * @returns {string} - Canonical charset name
   */
  normalizeCharset(charsetName) {
    if (!charsetName) return 'utf-8';
    
    // Direct lookup in canonical map
    if (this.charsetCanonical[charsetName]) {
      return this.charsetCanonical[charsetName];
    }
    
    // Fallback: normalize to lowercase and replace underscores with hyphens
    const normalized = charsetName.toLowerCase().replace(/_/g, '-');
    return this.charsetCanonical[normalized] || normalized;
  }

  /**
   * Negotiate charset from Accept-Charset header
   * 
   * @private
   */
  negotiateCharset(acceptCharsetHeader) {
    if (!acceptCharsetHeader || acceptCharsetHeader === '*') {
      return { charset: 'utf-8', quality: 1.0 };
    }

    const cacheKey = `charset:${acceptCharsetHeader}`;
    if (this.enableCaching && this.negotiationCache.has(cacheKey)) {
      if (this.trackingEnabled) {
        this.cacheStats.hits++;
        this.recordAccessLog(cacheKey, 'hit');
      }
      return this.negotiationCache.get(cacheKey);
    }

    if (this.trackingEnabled) {
      this.cacheStats.misses++;
      this.recordAccessLog(cacheKey, 'miss');
    }

    const charsets = this.parseAcceptCharsetHeader(acceptCharsetHeader);
    let bestMatch = null;
    let bestQuality = -1;

    for (const charset of charsets) {
      // Normalize charset name to canonical form
      const normalizedCharset = this.normalizeCharset(charset.value);
      if (this.charsets[normalizedCharset] && charset.quality > bestQuality) {
        bestMatch = normalizedCharset;
        bestQuality = charset.quality;
      }
    }

    const result = {
      charset: bestMatch || 'utf-8',
      quality: bestQuality > 0 ? bestQuality : 1.0
    };

    if (this.enableCaching) {
      this.setCache(cacheKey, result);
    }

    return result;
  }

  /**
   * Parse Accept header
   * 
   * @private
   */
  parseAcceptHeader(acceptHeader) {
    const ranges = [];
    const parts = acceptHeader.split(',');

    for (const part of parts) {
      const [mediaType, ...params] = part.trim().split(';');
      const [type, subtype] = mediaType.trim().split('/');
      
      let quality = 1.0;
      const parameters = {};

      for (const param of params) {
        const [key, value] = param.trim().split('=');
        if (key === 'q') {
          quality = parseFloat(value) || 1.0;
        } else {
          parameters[key] = value;
        }
      }

      // Sanitize inputs to prevent script injection in response headers
      const cleanType = type.trim().replace(/[^a-zA-Z0-9/*+-]/g, '');
      const cleanSubtype = subtype.trim().replace(/[^a-zA-Z0-9/*+-]/g, '');
      ranges.push({
        type: cleanType,
        subtype: cleanSubtype,
        quality: Math.min(1.0, Math.max(0, quality)),
        parameters
      });
    }

    return ranges.sort((a, b) => Number(b.quality) - Number(a.quality));
  }

  /**
   * Parse Accept-Encoding header
   * 
   * @private
   */
  parseAcceptEncodingHeader(header) {
    const encodings = [];
    const parts = header.split(',');

    for (const part of parts) {
      const [encoding, ...params] = part.trim().split(';');
      let quality = 1.0;

      for (const param of params) {
        const [key, value] = param.trim().split('=');
        if (key === 'q') {
          quality = parseFloat(value) || 1.0;
        }
      }

      encodings.push({
        value: encoding.trim(),
        quality: Math.min(1.0, Math.max(0, quality))
      });
    }

    return encodings.sort((a, b) => Number(b.quality) - Number(a.quality));
  }

  /**
   * Parse Accept-Language header
   * 
   * @private
   */
  parseAcceptLanguageHeader(header) {
    const languages = [];
    const parts = header.split(',');

    for (const part of parts) {
      const [lang, ...params] = part.trim().split(';');
      let quality = 1.0;

      for (const param of params) {
        const [key, value] = param.trim().split('=');
        if (key === 'q') {
          quality = parseFloat(value) || 1.0;
        }
      }

      languages.push({
        value: lang.trim(),
        quality: Math.min(1.0, Math.max(0, quality))
      });
    }

    return languages.sort((a, b) => Number(b.quality) - Number(a.quality));
  }

  /**
   * Parse Accept-Charset header
   * 
   * @private
   */
  parseAcceptCharsetHeader(header) {
    const charsets = [];
    const parts = header.split(',');

    for (const part of parts) {
      const [charset, ...params] = part.trim().split(';');
      let quality = 1.0;

      for (const param of params) {
        const [key, value] = param.trim().split('=');
        if (key === 'q') {
          quality = parseFloat(value) || 1.0;
        }
      }

      // Normalize charset name during parsing
      const normalizedCharset = this.normalizeCharset(charset.trim());
      charsets.push({
        value: normalizedCharset,
        quality: Math.min(1.0, Math.max(0, quality))
      });
    }

    return charsets.sort((a, b) => Number(b.quality) - Number(a.quality));
  }

  /**
   * Check if media range matches content type
   * 
   * @private
   */
  isMediaRangeMatch(range, contentType) {
    const [ctType, ctSubtype] = contentType.split('/');
    
    if (range.type === '*') return true;
    if (range.type !== ctType) return false;
    if (range.subtype === '*') return true;
    return range.subtype === ctSubtype;
  }

  /**
   * Extract parameters from header
   * 
   * @private
   */
  extractParameters(header) {
    const params = {};
    const parts = header.split(';');
    
    for (let i = 1; i < parts.length; i++) {
      const [key, value] = parts[i].trim().split('=');
      if (key && key !== 'q') {
        params[key] = value || true;
      }
    }
    
    return params;
  }

  /**
   * Serialize theme data as JSON
   * 
   * @private
   */
  serializeJSON(theme) {
    return JSON.stringify(theme, null, 2);
  }

  /**
   * Serialize theme data as CSS
   * 
   * @private
   */
  serializeCSS(theme) {
    let css = ':root {\n';
    
    if (theme.colors) {
      for (const [key, value] of Object.entries(theme.colors)) {
        css += `  --color-${key}: ${value};\n`;
      }
    }
    
    if (theme.typography) {
      for (const [key, value] of Object.entries(theme.typography)) {
        css += `  --typography-${key}: ${value};\n`;
      }
    }
    
    css += '}\n';
    return css;
  }

  /**
   * Serialize theme data as SCSS
   * 
   * @private
   */
  serializeSCSS(theme) {
    let scss = '// UIverse Theme - SCSS Format\n\n';
    
    if (theme.colors) {
      scss += '$colors: (\n';
      for (const [key, value] of Object.entries(theme.colors)) {
        scss += `  ${key}: ${value},\n`;
      }
      scss += ');\n\n';
    }
    
    if (theme.typography) {
      scss += '$typography: (\n';
      for (const [key, value] of Object.entries(theme.typography)) {
        scss += `  ${key}: ${value},\n`;
      }
      scss += ');\n\n';
    }
    
    return scss;
  }

  /**
   * Serialize theme data as JavaScript
   * 
   * @private
   */
  serializeJavaScript(theme) {
    return `export const theme = ${JSON.stringify(theme, null, 2)};`;
  }

  /**
   * Serialize theme data as plain text
   * 
   * @private
   */
  serializePlainText(theme) {
    let text = 'UIverse Theme Configuration\n';
    text += '============================\n\n';
    
    if (theme.colors) {
      text += 'Colors:\n';
      for (const [key, value] of Object.entries(theme.colors)) {
        text += `  ${key}: ${value}\n`;
      }
      text += '\n';
    }
    
    return text;
  }

  /**
   * Serialize theme data as XML
   * 
   * @private
   */
  serializeXML(theme) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<theme>\n';
    
    if (theme.colors) {
      xml += '  <colors>\n';
      for (const [key, value] of Object.entries(theme.colors)) {
        xml += `    <color key="${key}">${this.escapeXML(value)}</color>\n`;
      }
      xml += '  </colors>\n';
    }
    
    xml += '</theme>';
    return xml;
  }

  /**
   * Serialize theme data as YAML
   * 
   * @private
   */
  serializeYAML(theme) {
    let yaml = '# UIverse Theme Configuration\n\n';
    
    if (theme.colors) {
      yaml += 'colors:\n';
      for (const [key, value] of Object.entries(theme.colors)) {
        yaml += `  ${key}: ${value}\n`;
      }
    }
    
    return yaml;
  }

  /**
   * Serialize theme data as NDJSON
   * 
   * @private
   */
  serializeNDJSON(theme) {
    let ndjson = '';
    
    if (theme.colors) {
      for (const [key, value] of Object.entries(theme.colors)) {
        ndjson += JSON.stringify({ type: 'color', key, value }) + '\n';
      }
    }
    
    return ndjson;
  }

  /**
   * Serialize theme data as HTML
   * 
   * @private
   */
  serializeHTML(theme) {
    let html = '<!DOCTYPE html>\n<html>\n<head>\n<title>Theme</title>\n</head>\n<body>\n';
    html += '<pre>' + this.escapeHTML(JSON.stringify(theme, null, 2)) + '</pre>\n';
    html += '</body>\n</html>';
    return html;
  }

  /**
   * Escape XML special characters
   * 
   * @private
   */
  escapeXML(str) {
    return str.replace(/[<>&'"]/g, c => {
      const chars = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' };
      return chars[c];
    });
  }

  /**
   * Escape HTML special characters
   * 
   * @private
   */
  escapeHTML(str) {
    return str.replace(/[<>&]/g, c => {
      const chars = { '<': '&lt;', '>': '&gt;', '&': '&amp;' };
      return chars[c];
    });
  }

  /**
   * Set cache with LRU eviction
   * 
   * @private
   */
  setCache(key, value) {
    if (this.negotiationCache.size >= this.cacheSize) {
      const firstKey = this.negotiationCache.keys().next().value;
      this.negotiationCache.delete(firstKey);
    }
    this.negotiationCache.set(key, value);
  }

  /**
   * Clear all caches
   */
  clearCache() {
    this.negotiationCache.clear();
  }

  /**
   * Get supported content types
   * 
   * @returns {string[]} - Array of supported MIME types
   */
  getSupportedTypes() {
    return Object.keys(this.supportedTypes);
  }

  /**
   * Get supported encodings
   * 
   * @returns {string[]} - Array of supported encodings
   */
  getSupportedEncodings() {
    return Object.keys(this.encodings).filter(enc => this.encodings[enc].supported);
  }

  /**
   * Get supported languages
   * 
   * @returns {string[]} - Array of supported languages
   */
  getSupportedLanguages() {
    return Object.keys(this.languages);
  }

  /**
   * Get supported charsets
   * 
   * @returns {string[]} - Array of supported charsets (canonical form)
   */
  getSupportedCharsets() {
    return Object.keys(this.charsets);
  }

  /**
   * Get cache statistics
   * 
   * @returns {Object} - Cache statistics
   */
  getCacheStats() {
    return {
      cacheSize: this.negotiationCache.size,
      maxCacheSize: this.cacheSize,
      cacheHitRate: 0,
      cacheEnabled: this.enableCaching
    };
  }

  /**
   * Extract locale group from language code (e.g., "en-US" -> "en")
   * 
   * @private
   * @param {string} language - Language code
   * @returns {string} - Locale group base language
   */
  extractLocaleGroup(language) {
    if (!language) return 'unknown';
    return language.split('-')[0].toLowerCase();
  }

  /**
   * Record access log for tracking access patterns
   * 
   * @private
   * @param {string} cacheKey - Cache key accessed
   * @param {string} hitType - Either 'hit' or 'miss'
   */
  recordAccessLog(cacheKey, hitType) {
    if (!this.trackingEnabled) return;
    
    this.cacheStats.accessLog.push({
      key: cacheKey,
      type: hitType,
      timestamp: Date.now()
    });

    // Maintain max access log size
    if (this.cacheStats.accessLog.length > this.maxAccessLogSize) {
      this.cacheStats.accessLog.shift();
    }
  }

  /**
   * Update locale group statistics
   * 
   * @private
   * @param {string} localeGroup - Locale group code
   * @param {boolean} isHit - Whether this was a cache hit or miss
   */
  updateLocaleGroupStats(localeGroup, isHit) {
    if (!this.trackingEnabled) return;

    if (!this.cacheStats.localeGroups.has(localeGroup)) {
      this.cacheStats.localeGroups.set(localeGroup, {
        hits: 0,
        misses: 0,
        evictions: 0,
        totalAccesses: 0,
        languages: new Set()
      });
    }

    const stats = this.cacheStats.localeGroups.get(localeGroup);
    stats.totalAccesses++;

    if (isHit) {
      stats.hits++;
    } else {
      stats.misses++;
    }
  }

  /**
   * Track eviction for a locale group
   * 
   * @private
   * @param {string} evictedKey - Key being evicted
   */
  trackEviction(evictedKey) {
    if (!this.trackingEnabled) return;

    this.cacheStats.evictions++;

    // Extract locale group from evicted key if possible
    if (evictedKey.startsWith('lang:')) {
      const cacheKey = evictedKey.substring(5);
      const parts = cacheKey.split('-');
      if (parts.length > 0) {
        const localeGroup = parts[0];
        const stats = this.cacheStats.localeGroups.get(localeGroup);
        if (stats) {
          stats.evictions++;
        }
      }
    }
  }

  /**
   * Calculate access frequency score for a cache key
   * Higher frequency = higher score
   * 
   * @private
   * @param {string} cacheKey - Cache key to score
   * @returns {number} - Access frequency score (0-1)
   */
  calculateAccessFrequency(cacheKey) {
    if (!this.trackingEnabled || this.cacheStats.accessLog.length === 0) {
      return 0.5; // Default neutral score
    }

    // Count recent accesses within last hour
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    let recentAccesses = 0;

    for (const log of this.cacheStats.accessLog) {
      if (log.key === cacheKey && log.timestamp > oneHourAgo) {
        recentAccesses++;
      }
    }

    // Normalize to 0-1 scale based on average accesses
    const avgAccesses = this.cacheStats.accessLog.length / Math.max(1, this.negotiationCache.size);
    return Math.min(1, recentAccesses / Math.max(1, avgAccesses * 5));
  }

  /**
   * Find best candidate for eviction based on access distribution
   * Evicts least frequently accessed items
   * 
   * @private
   * @returns {string|null} - Cache key to evict, or null if cache is empty
   */
  findEvictionCandidate() {
    if (this.negotiationCache.size === 0) return null;

    let worstKey = null;
    let lowestScore = 1.0;

    // Check all keys and find the one with lowest access frequency
    for (const key of this.negotiationCache.keys()) {
      const score = this.calculateAccessFrequency(key);
      if (score < lowestScore) {
        lowestScore = score;
        worstKey = key;
      }
    }

    return worstKey;
  }

  /**
   * Set cache with access distribution-based eviction
   * 
   * @private
   */
  setCache(key, value) {
    if (this.negotiationCache.size >= this.cacheSize) {
      // Use access distribution-based eviction instead of simple LRU
      const evictKey = this.trackingEnabled ? 
        this.findEvictionCandidate() : 
        this.negotiationCache.keys().next().value;

      if (evictKey) {
        this.trackEviction(evictKey);
        this.negotiationCache.delete(evictKey);
      }
    }
    this.negotiationCache.set(key, value);
  }

  /**
   * Get metrics by locale grouping
   * Returns hit/miss ratios per locale group
   * 
   * @returns {Object} - Metrics for each locale group
   */
  getMetricsByLocaleGroup() {
    const metrics = {};

    for (const [localeGroup, stats] of this.cacheStats.localeGroups.entries()) {
      const total = stats.hits + stats.misses;
      metrics[localeGroup] = {
        hits: stats.hits,
        misses: stats.misses,
        evictions: stats.evictions,
        totalAccesses: stats.totalAccesses,
        hitRatio: total > 0 ? stats.hits / total : 0,
        missRatio: total > 0 ? stats.misses / total : 0,
        evictionRate: stats.totalAccesses > 0 ? stats.evictions / stats.totalAccesses : 0
      };
    }

    return metrics;
  }

  /**
   * Get high-churn language combinations
   * Identifies language combinations with frequent evictions
   * 
   * @param {number} threshold - Eviction rate threshold (0-1) to consider high-churn
   * @returns {Array} - Language combinations sorted by eviction rate (descending)
   */
  getHighChurnLanguages(threshold = 0.1) {
    const churnLanguages = [];

    for (const [localeGroup, stats] of this.cacheStats.localeGroups.entries()) {
      const evictionRate = stats.totalAccesses > 0 ? 
        stats.evictions / stats.totalAccesses : 0;

      if (evictionRate >= threshold) {
        churnLanguages.push({
          localeGroup,
          evictionRate,
          totalEvictions: stats.evictions,
          totalAccesses: stats.totalAccesses,
          hitRatio: stats.hits / Math.max(1, stats.hits + stats.misses)
        });
      }
    }

    return churnLanguages.sort((a, b) => b.evictionRate - a.evictionRate);
  }

  /**
   * Get access distribution statistics
   * Returns overall and per-key access patterns
   * 
   * @returns {Object} - Access distribution metrics
   */
  getAccessDistribution() {
    const total = this.cacheStats.hits + this.cacheStats.misses;
    const overallHitRatio = total > 0 ? this.cacheStats.hits / total : 0;

    // Calculate access frequency distribution
    const frequencyDistribution = {};
    for (const key of this.negotiationCache.keys()) {
      const freq = this.calculateAccessFrequency(key);
      const bucket = Math.floor(freq * 10) / 10; // Bucket into 0.0-0.1, 0.1-0.2, etc.
      frequencyDistribution[bucket] = (frequencyDistribution[bucket] || 0) + 1;
    }

    return {
      totalCacheHits: this.cacheStats.hits,
      totalCacheMisses: this.cacheStats.misses,
      totalEvictions: this.cacheStats.evictions,
      totalAccesses: total,
      overallHitRatio,
      currentCacheSize: this.negotiationCache.size,
      maxCacheSize: this.cacheSize,
      accessFrequencyDistribution: frequencyDistribution,
      averageAccessesPerKey: this.cacheStats.accessLog.length / Math.max(1, this.negotiationCache.size)
    };
  }

  /**
   * Reset tracking statistics
   */
  resetTracking() {
    this.cacheStats = {
      hits: 0,
      misses: 0,
      evictions: 0,
      localeGroups: new Map(),
      accessLog: []
    };
  }
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeContentNegotiator;
}
