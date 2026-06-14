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
      'br': { priority: 0.9, supported: true },
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

    this.enableCaching = options.enableCaching !== false;
    this.cacheSize = options.cacheSize || 100;
    this.negotiationCache = new Map();
    this.defaultType = options.defaultType || 'application/json';
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
      return this.negotiationCache.get(cacheKey);
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
      return this.negotiationCache.get(cacheKey);
    }

    const encodings = this.parseAcceptEncodingHeader(acceptEncodingHeader);
    let bestMatch = null;
    let bestQuality = -1;

    for (const encoding of encodings) {
      if (this.encodings[encoding.value] && this.encodings[encoding.value].supported) {
        if (encoding.quality > bestQuality) {
          bestMatch = encoding.value;
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
    if (this.enableCaching && this.negotiationCache.has(cacheKey)) {
      return this.negotiationCache.get(cacheKey);
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
   * Negotiate charset from Accept-Charset header
   * 
   * @private
   */
  negotiateCharset(acceptCharsetHeader) {
    if (!acceptCharsetHeader || acceptCharsetHeader === '*') {
      return { charset: 'utf-8', quality: 1.0 };
    }

    const charsets = this.parseAcceptCharsetHeader(acceptCharsetHeader);
    let bestMatch = null;
    let bestQuality = -1;

    for (const charset of charsets) {
      if (this.charsets[charset.value] && charset.quality > bestQuality) {
        bestMatch = charset.value;
        bestQuality = charset.quality;
      }
    }

    return {
      charset: bestMatch || 'utf-8',
      quality: bestQuality > 0 ? bestQuality : 1.0
    };
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

      ranges.push({
        type: type.trim(),
        subtype: subtype.trim(),
        quality: Math.min(1.0, Math.max(0, quality)),
        parameters
      });
    }

    return ranges.sort((a, b) => b.quality - a.quality);
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

    return encodings.sort((a, b) => b.quality - a.quality);
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

    return languages.sort((a, b) => b.quality - a.quality);
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

      charsets.push({
        value: charset.trim(),
        quality: Math.min(1.0, Math.max(0, quality))
      });
    }

    return charsets.sort((a, b) => b.quality - a.quality);
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
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeContentNegotiator;
}
