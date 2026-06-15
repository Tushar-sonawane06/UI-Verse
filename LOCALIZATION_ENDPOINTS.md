# Localization Endpoints API Guide

Complete guide for component localization endpoints with language selection, fallback behavior documentation, and locale-specific requirements discovery.

**Version:** 1.0.0

## Table of Contents

1. [Overview](#overview)
2. [Language Selection](#language-selection)
3. [Endpoints](#endpoints)
4. [Fallback Behavior](#fallback-behavior)
5. [Locale Discovery](#locale-discovery)
6. [Implementation](#implementation)
7. [Examples](#examples)
8. [Best Practices](#best-practices)

---

## Overview

The Localization Endpoints API provides:

- **Language Selection**: Query parameter or Accept-Language header
- **Intelligent Fallback**: Automatic fallback chain with documentation
- **Locale Discovery**: Discoverable locale requirements and capabilities
- **Performance**: Caching with LRU eviction strategy
- **Metrics**: Tracking fallback usage and response times

### Key Features

- Priority-based language selection
- Transparent fallback chain documentation
- Region-specific formatting requirements
- Comprehensive locale metadata
- Production-ready caching

---

## Language Selection

### Selection Priority

Language is selected in the following priority order:

1. **Query Parameter** (`?language=es`) - Highest priority
2. **Accept-Language Header** - Secondary selection
3. **Server Default** - Final fallback

### Language Code Formats

- **Simple**: `es`, `en`, `fr` (ISO 639-1)
- **With Region**: `en-US`, `pt-BR`, `zh-CN`

### Supported Languages

| Code | Language | Region Variants |
|------|----------|-----------------|
| en | English | en-US, en-GB, en-AU |
| es | Spanish | es-ES, es-MX |
| fr | French | fr-FR, fr-CA |
| de | German | de-DE, de-AT |
| ja | Japanese | ja-JP |
| zh | Chinese | zh-CN, zh-TW |
| pt | Portuguese | pt-PT, pt-BR |
| ru | Russian | ru-RU |
| ko | Korean | ko-KR |
| it | Italian | it-IT |

---

## Endpoints

### 1. Get Component Localization

**Endpoint:** `GET /api/components/{componentName}/localize`

Get component metadata in requested language with fallback behavior.

#### Request

```bash
# Using query parameter
curl "https://api.example.com/api/components/button/localize?language=es"

# Using Accept-Language header
curl -H "Accept-Language: es-MX, es;q=0.9, en;q=0.8" \
  "https://api.example.com/api/components/button/localize"

# Include locale requirements
curl "https://api.example.com/api/components/button/localize?language=es&includeRequirements=true"
```

#### Parameters

| Parameter | Type | Location | Description |
|-----------|------|----------|-------------|
| componentName | string | path | Component identifier |
| language | string | query | Requested language code (optional) |
| format | string | query | Response format (json, xml, html) |
| includeRequirements | boolean | query | Include locale requirements (default: false) |

#### Response (200 OK)

```json
{
  "component": "button",
  "language": "es",
  "requestedLanguage": "es",
  "fallbackUsed": false,
  "metadata": {
    "name": "Botón",
    "description": "Un componente de botón cliqueable",
    "category": "Entradas",
    "tags": ["interactivo", "acción", "clic"],
    "usage": "Usar para acciones del usuario",
    "examples": [],
    "notes": "Compatible con varios tamaños"
  },
  "languageSupport": {
    "supportedLanguages": ["en", "es", "fr"],
    "completeness": "100%",
    "availableLanguages": ["en", "es", "fr"],
    "defaultLanguage": "en",
    "fallbackLanguage": "en"
  },
  "fallbackBehavior": {
    "requestedLanguage": "es",
    "availableLanguages": ["en", "es", "fr"],
    "fallbackChain": ["es", "en"],
    "strategy": "intelligent",
    "behavior": {
      "exact": "Returns exact match if available",
      "partial": "Returns language family match",
      "fallback": "Falls back to en",
      "missing": "Returns key name if all fallbacks exhausted"
    }
  },
  "localeRequirements": {
    "dateFormat": "DD/MM/YYYY",
    "timeFormat": "HH:mm",
    "decimalSeparator": ",",
    "thousandsSeparator": ".",
    "currency": "EUR",
    "currencySymbol": "€",
    "direction": "ltr",
    "weekStart": 1,
    "timezone": "Europe/Madrid"
  },
  "timestamp": 1718318400000
}
```

#### Response Headers

```
Content-Language: es
Vary: Accept-Language
X-Fallback-Used: false
X-Cache: HIT
X-Response-Time: 12ms
```

---

### 2. Get Available Locales

**Endpoint:** `GET /api/locales`

Lists all supported locales with optional detailed requirements.

#### Request

```bash
# Get list of locales
curl "https://api.example.com/api/locales"

# Include requirements for each locale
curl "https://api.example.com/api/locales?includeRequirements=true"
```

#### Response (200 OK)

```json
{
  "locales": [
    {
      "code": "en",
      "name": "English",
      "nativeName": "English",
      "requirements": {
        "dateFormat": "MM/DD/YYYY",
        "timeFormat": "h:mm AM/PM",
        "decimalSeparator": ".",
        "thousandsSeparator": ",",
        "currency": "USD",
        "currencySymbol": "$",
        "direction": "ltr",
        "weekStart": 0,
        "timezone": "UTC"
      }
    },
    {
      "code": "es",
      "name": "Spanish",
      "nativeName": "Español",
      "requirements": {
        "dateFormat": "DD/MM/YYYY",
        "timeFormat": "HH:mm",
        "decimalSeparator": ",",
        "thousandsSeparator": ".",
        "currency": "EUR",
        "currencySymbol": "€",
        "direction": "ltr",
        "weekStart": 1,
        "timezone": "Europe/Madrid"
      }
    }
  ],
  "total": 10,
  "timestamp": 1718318400000
}
```

---

### 3. Get Locale Requirements

**Endpoint:** `GET /api/locales/{language}/requirements`

Returns format, currency, timezone, and locale-specific requirements.

#### Request

```bash
# Get Spanish locale requirements
curl "https://api.example.com/api/locales/es/requirements"

# Get detailed metadata
curl "https://api.example.com/api/locales/es/requirements?detailed=true"
```

#### Response (200 OK)

```json
{
  "dateFormat": "DD/MM/YYYY",
  "timeFormat": "HH:mm",
  "decimalSeparator": ",",
  "thousandsSeparator": ".",
  "currency": "EUR",
  "currencySymbol": "€",
  "direction": "ltr",
  "weekStart": 1,
  "timezone": "Europe/Madrid"
}
```

#### Detailed Response

```json
{
  "language": "es",
  "requirements": { /* as above */ },
  "metadata": {
    "englishName": "Spanish",
    "nativeName": "Español",
    "regionCodes": ["ES", "MX", "AR", "CO"],
    "supportedRegions": ["es-ES", "es-MX"]
  },
  "timestamp": 1718318400000
}
```

#### 404 Response

```json
{
  "error": "Locale not supported: xx",
  "supportedLocales": ["en", "es", "fr", "de", "ja", "zh", "pt", "ru", "ko", "it"]
}
```

---

### 4. Get Fallback Behavior

**Endpoint:** `GET /api/locales/{language}/fallback-behavior`

Returns documented fallback chains, strategy, and examples.

#### Request

```bash
# Get fallback behavior for Spanish
curl "https://api.example.com/api/locales/es/fallback-behavior"

# Get component-specific fallback behavior
curl "https://api.example.com/api/locales/es/fallback-behavior?component=button"
```

#### Response (200 OK)

```json
{
  "language": "es",
  "strategy": "intelligent",
  "fallbackChain": ["es", "en", "(missing key name)"],
  "description": "Matches exact language, language family, then default with fallback chain",
  "examples": {
    "exactMatch": {
      "requested": "es",
      "result": "Returns exact translation",
      "example": "GET /api/components/button/localize?language=es"
    },
    "partialMatch": {
      "requested": "es-XX",
      "result": "Falls back to es",
      "example": "GET /api/components/button/localize?language=es-XX"
    },
    "notAvailable": {
      "requested": "xx-YY (not supported)",
      "result": "Falls back to en",
      "example": "GET /api/components/button/localize?language=xx-YY"
    }
  },
  "componentSpecific": {
    "requestedLanguage": "es",
    "availableLanguages": ["en", "es", "fr"],
    "fallbackChain": ["es", "en"],
    "strategy": "intelligent"
  },
  "timestamp": 1718318400000
}
```

---

## Fallback Behavior

### Strategy: Intelligent

The intelligent fallback strategy implements a documented chain:

```
1. Exact language match (es = es) ✓
   ↓
2. Language family match (es-MX → es) ✓
   ↓
3. Default language (→ en) ✓
   ↓
4. Key name as last resort
```

### Documented Fallback Chain

Every response includes the complete fallback chain:

```json
"fallbackBehavior": {
  "fallbackChain": ["es", "en", "(missing key name)"],
  "behavior": {
    "exact": "Returns exact match if available",
    "partial": "Returns language family match (e.g., pt for pt-BR)",
    "fallback": "Falls back to en",
    "missing": "Returns key name if all fallbacks exhausted"
  }
}
```

### Language Family Fallback

```
Requested  → Resolves To → Rationale
-----------   -----------   ---------
es-MX      → es            Language family match
pt-BR      → pt            Language family match
en-GB      → en            Language family match
zh-TW      → zh            Language family match
de-AT      → de            Language family match
```

### Missing Translations

When translation is missing in all languages:

```
Response behavior depends on strategy setting:
- Strict: Returns 406 Not Acceptable
- Intelligent: Returns key name
- Permissive: Returns first available language
```

---

## Locale Discovery

### Available Locales

```bash
curl https://api.example.com/api/locales
```

Returns all supported locales with optional requirements.

### Discoverable Requirements

Each locale provides:

```json
{
  "dateFormat": "DD/MM/YYYY",
  "timeFormat": "HH:mm",
  "decimalSeparator": ",",
  "thousandsSeparator": ".",
  "currency": "EUR",
  "currencySymbol": "€",
  "direction": "ltr",
  "weekStart": 1,
  "timezone": "Europe/Madrid"
}
```

### Fallback Documentation

Complete fallback behavior documented:

```bash
curl https://api.example.com/api/locales/{language}/fallback-behavior
```

---

## Implementation

### Express.js Backend

```javascript
const express = require('express');
const ComponentI18nManager = require('./component-i18n-manager');
const LocalizationEndpointsHandler = require('./localization-endpoints');

const app = express();
const i18nManager = new ComponentI18nManager({
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es', 'fr', 'de']
});

const localizationHandler = new LocalizationEndpointsHandler(i18nManager, {
  fallbackStrategy: 'intelligent',
  enableCaching: true,
  cacheSize: 1000
});

// Register components
i18nManager.registerComponent('button', {
  supportedLanguages: ['en', 'es', 'fr'],
  translations: {
    en: { name: 'Button', description: 'Click me' },
    es: { name: 'Botón', description: 'Haz clic' },
    fr: { name: 'Bouton', description: 'Cliquez' }
  }
});

// Mount endpoints
app.get('/api/components/:componentName/localize', (req, res) => {
  localizationHandler.handleLocalizeComponent(req, res);
});

app.get('/api/locales', (req, res) => {
  localizationHandler.handleGetLocales(req, res);
});

app.get('/api/locales/:language/requirements', (req, res) => {
  localizationHandler.handleGetLocaleRequirements(req, res);
});

app.get('/api/locales/:language/fallback-behavior', (req, res) => {
  localizationHandler.handleGetFallbackBehavior(req, res);
});

app.listen(3000);
```

### Frontend Integration

```javascript
class LocalizationAPI {
  constructor(baseURL = '/api') {
    this.baseURL = baseURL;
  }

  async getComponentLocalization(componentName, language = null) {
    const params = new URLSearchParams();
    if (language) params.append('language', language);
    params.append('includeRequirements', 'true');

    const response = await fetch(
      `${this.baseURL}/components/${componentName}/localize?${params}`,
      {
        headers: { 'Accept-Language': navigator.language }
      }
    );

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }

  async getAvailableLocales() {
    const response = await fetch(`${this.baseURL}/locales`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }

  async getLocaleRequirements(language) {
    const response = await fetch(
      `${this.baseURL}/locales/${language}/requirements?detailed=true`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }

  async getFallbackBehavior(language, component = null) {
    const url = component
      ? `${this.baseURL}/locales/${language}/fallback-behavior?component=${component}`
      : `${this.baseURL}/locales/${language}/fallback-behavior`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }
}

// Usage
const api = new LocalizationAPI();

// Get component in Spanish
const spanish = await api.getComponentLocalization('button', 'es');
console.log(spanish.metadata.name); // "Botón"

// Get available locales
const locales = await api.getAvailableLocales();
console.log(locales.locales.map(l => l.code)); // ["en", "es", ...]

// Get Spanish requirements
const requirements = await api.getLocaleRequirements('es');
console.log(requirements.requirements.dateFormat); // "DD/MM/YYYY"

// Get fallback documentation
const fallback = await api.getFallbackBehavior('es', 'button');
console.log(fallback.fallbackChain); // ["es", "en", "(missing key name)"]
```

---

## Examples

### Language Selection Examples

**Query Parameter Priority:**
```bash
# Query parameter takes precedence
GET /api/components/button/localize?language=es
# Returns Spanish, regardless of Accept-Language header
```

**Accept-Language Fallback:**
```bash
# Uses Accept-Language header
GET /api/components/button/localize
Accept-Language: pt-BR, pt;q=0.9, en;q=0.8
# Returns Portuguese (pt-BR fallback to pt)
```

**Language Family Fallback:**
```bash
# Requests pt-MX (not available), falls back to pt
GET /api/components/button/localize?language=pt-MX
Response: Portuguese (pt) because pt-MX not available
```

---

## Best Practices

### 1. Always Include Accept-Language

Send Accept-Language header for automatic language detection:

```javascript
fetch('/api/components/button/localize', {
  headers: { 'Accept-Language': navigator.language }
})
```

### 2. Handle Fallback Used Header

Check if fallback was used:

```javascript
const response = await fetch('/api/components/button/localize?language=pt-MX');
const fallbackUsed = response.headers.get('X-Fallback-Used') === 'true';
if (fallbackUsed) {
  console.log('Using fallback language');
}
```

### 3. Cache Responses

Respect cache headers and cache responses:

```javascript
// Response includes Vary: Accept-Language
// Cache separately for each language
const language = navigator.language;
const cacheKey = `button:${language}`;
```

### 4. Document Supported Languages

List available locales for user selection:

```javascript
const locales = await fetch('/api/locales').then(r => r.json());
const options = locales.locales.map(l => ({
  value: l.code,
  label: l.nativeName
}));
```

### 5. Use Locale Requirements

Apply locale-specific formatting:

```javascript
const requirements = await fetch('/api/locales/es/requirements').then(r => r.json());
const number = 1234.56;
const formatted = number.toString().replace('.', requirements.decimalSeparator);
// "1234,56"
```

---

## Summary

The Localization Endpoints API provides:

- **Flexible Language Selection** via query parameter or header
- **Intelligent Fallback** with complete documentation
- **Locale Discovery** for all locale-specific requirements
- **Production Ready** with caching and metrics
- **10 Supported Languages** with regional variants

This enables seamless localization of component libraries with transparent fallback behavior and discoverable locale requirements.
