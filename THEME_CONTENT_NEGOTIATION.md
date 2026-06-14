# Theme HTTP Content Negotiation Guide

Comprehensive guide for implementing HTTP content negotiation in theme delivery workflows. Supports multiple content types, encodings, languages, and character sets based on client preferences.

**Version:** 1.0.0

## Table of Contents

1. [Overview](#overview)
2. [HTTP Headers](#http-headers)
3. [Content Type Negotiation](#content-type-negotiation)
4. [Supported Formats](#supported-formats)
5. [Quality Factors](#quality-factors)
6. [Implementation Guide](#implementation-guide)
7. [Examples](#examples)
8. [Best Practices](#best-practices)

---

## Overview

HTTP Content Negotiation allows clients to request resources in their preferred format. The server analyzes request headers and returns the best matching representation.

### Key Concepts

- **Accept Header**: Client specifies desired content types
- **Quality Factor (q)**: Priority/preference for each option (0.0-1.0)
- **Proactive Negotiation**: Server decides best representation based on headers
- **Reactive Negotiation**: Client selects from available options

### Benefits

- Format flexibility without multiple endpoints
- Client-driven preferences
- Reduced bandwidth with compression
- Language-specific content
- Cache variation awareness

---

## HTTP Headers

### Request Headers

#### Accept

Specifies desired response content type(s).

**Syntax:**
```
Accept: media-type [; q=quality-factor]
```

**Examples:**
```
Accept: application/json
Accept: text/css, application/json;q=0.9, */*;q=0.1
Accept: */*
```

#### Accept-Encoding

Specifies acceptable compression encodings.

**Syntax:**
```
Accept-Encoding: gzip, deflate, br
```

**Supported Encodings:**
- `gzip` - Most common, good compression
- `br` - Brotli, better compression than gzip
- `deflate` - Less common, moderate compression
- `identity` - No compression

#### Accept-Language

Specifies preferred language(s).

**Syntax:**
```
Accept-Language: en-US, en;q=0.9, es;q=0.8
```

**Supported Languages:**
- `en` - English
- `es` - Spanish
- `fr` - French
- `de` - German

#### Accept-Charset

Specifies preferred character encoding.

**Syntax:**
```
Accept-Charset: utf-8, iso-8859-1;q=0.5
```

**Supported Charsets:**
- `utf-8` (default)
- `utf-16`
- `iso-8859-1`

### Response Headers

#### Content-Type

Actual content type of the response.

```
Content-Type: application/json; charset=utf-8
```

#### Content-Encoding

Compression encoding applied.

```
Content-Encoding: gzip
```

#### Vary

Indicates which headers affected content selection.

```
Vary: Accept, Accept-Encoding, Accept-Language
```

#### Content-Language

Language of response content.

```
Content-Language: en-US
```

---

## Content Type Negotiation

### Supported Formats

| Format | MIME Type | Priority | Use Case |
|--------|-----------|----------|----------|
| JSON | `application/json` | 1.0 | Default, APIs, configuration |
| CSS | `text/css` | 0.9 | Direct stylesheet injection |
| SCSS | `application/x-scss` | 0.8 | Build-time compilation |
| JavaScript | `application/javascript` | 0.7 | ES6 modules |
| Plain Text | `text/plain` | 0.6 | Simple key-value pairs |
| XML | `application/xml` | 0.5 | Legacy systems |
| YAML | `application/yaml` | 0.4 | Configuration files |
| NDJSON | `application/x-ndjson` | 0.3 | Streaming |
| HTML | `text/html` | 0.2 | Browser preview |

### Negotiation Algorithm

1. Parse all `Accept` header values
2. Calculate quality scores for each
3. Match against supported types
4. Sort by quality and priority
5. Return highest-rated match
6. Return 406 if no acceptable format

---

## Quality Factors

Quality factors (q values) indicate client preference.

### Syntax

```
type/subtype;q=quality-factor
```

### Values

- `1.0` (or omitted) - Fully acceptable
- `0.8` - Acceptable with slight preference
- `0.5` - Acceptable with lower preference
- `0.0` - Not acceptable

### Examples

```
# JSON preferred, CSS acceptable, anything else as fallback
Accept: application/json;q=1.0, text/css;q=0.9, */*;q=0.1

# English preferred, Spanish acceptable
Accept-Language: en;q=1.0, es;q=0.8

# Gzip strongly preferred
Accept-Encoding: gzip;q=1.0, deflate;q=0.5, identity;q=0.1
```

### Ordering

Lower order values indicate higher precedence:

```
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

Results in order:
1. `text/html` (q=1.0, highest, first listed)
2. `application/xhtml+xml` (q=1.0, second listed)
3. `application/xml` (q=0.9)
4. `*/*` (q=0.8, wildcard)

---

## Implementation Guide

### Server-Side (Node.js/Express)

```javascript
const ThemeContentNegotiator = require('./theme-content-negotiation');

const app = require('express')();
const negotiator = new ThemeContentNegotiator();

app.get('/api/v1/themes/:themeName', (req, res) => {
  // Perform negotiation
  const negotiation = negotiator.negotiate({
    accept: req.headers.accept,
    'accept-encoding': req.headers['accept-encoding'],
    'accept-language': req.headers['accept-language'],
    'accept-charset': req.headers['accept-charset']
  });

  if (!negotiation.isAcceptable) {
    return res.status(406).json({
      error: 'Not Acceptable',
      errorCode: 'NOT_ACCEPTABLE',
      acceptable: negotiator.getSupportedTypes()
    });
  }

  // Load theme data
  const theme = loadTheme(req.params.themeName);

  // Serialize to negotiated format
  let response;
  switch (negotiation.contentType) {
    case 'application/json':
      response = JSON.stringify(theme);
      break;
    case 'text/css':
      response = serializeToCSS(theme);
      break;
    case 'application/x-scss':
      response = serializeToSCSS(theme);
      break;
    default:
      response = JSON.stringify(theme);
  }

  // Set response headers
  res.setHeader('Content-Type', 
    `${negotiation.contentType}; charset=${negotiation.charset}`);
  res.setHeader('Content-Encoding', negotiation.encoding);
  res.setHeader('Content-Language', negotiation.language);
  res.setHeader('Vary', 'Accept, Accept-Encoding, Accept-Language, Accept-Charset');

  res.send(response);
});
```

### Python Backend (Flask)

```python
from flask import Flask, request, jsonify
from theme_content_negotiation import ThemeContentNegotiator

app = Flask(__name__)
negotiator = ThemeContentNegotiator()

@app.route('/api/v1/themes/<theme_name>')
def get_theme(theme_name):
    # Perform negotiation
    negotiation = negotiator.negotiate({
        'accept': request.headers.get('Accept', 'application/json'),
        'accept_encoding': request.headers.get('Accept-Encoding', ''),
        'accept_language': request.headers.get('Accept-Language', ''),
        'accept_charset': request.headers.get('Accept-Charset', 'utf-8')
    })

    if not negotiation['isAcceptable']:
        return jsonify({
            'error': 'Not Acceptable',
            'acceptable': negotiator.get_supported_types()
        }), 406

    theme = load_theme(theme_name)

    # Serialize based on content type
    if negotiation['contentType'] == 'application/json':
        response = theme
    elif negotiation['contentType'] == 'text/css':
        response = serialize_to_css(theme), 200, {
            'Content-Type': f"{negotiation['contentType']}; charset={negotiation['charset']}"
        }
    # ... other formats

    return response
```

### Frontend Integration

```javascript
class ThemeAPI {
  constructor(baseURL = '/api/v1/themes') {
    this.baseURL = baseURL;
  }

  async getTheme(themeName, preferredFormat = 'application/json') {
    const response = await fetch(`${this.baseURL}/${themeName}`, {
      headers: {
        'Accept': preferredFormat,
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': navigator.language
      }
    });

    if (!response.ok) {
      if (response.status === 406) {
        throw new Error('Server does not support requested format');
      }
      throw new Error(`HTTP ${response.status}`);
    }

    const contentType = response.headers.get('Content-Type');
    const encoding = response.headers.get('Content-Encoding');

    if (contentType.includes('application/json')) {
      return response.json();
    } else if (contentType.includes('text/css')) {
      return response.text();
    } else if (contentType.includes('text/html')) {
      return response.text();
    }

    return response.blob();
  }

  // Request in multiple formats
  async getThemeAsJSON(themeName) {
    return this.getTheme(themeName, 'application/json');
  }

  async getThemeAsCSS(themeName) {
    return this.getTheme(themeName, 'text/css');
  }

  async getThemeAsSCSS(themeName) {
    return this.getTheme(themeName, 'application/x-scss');
  }
}

// Usage
const api = new ThemeAPI();

// Get as JSON (default)
const jsonTheme = await api.getThemeAsJSON('dark');

// Get as CSS
const cssTheme = await api.getThemeAsCSS('dark');

// Get with compression
const response = await fetch('/api/v1/themes/dark', {
  headers: { 'Accept-Encoding': 'gzip, br' }
});
```

---

## Examples

### Basic Content Type Negotiation

**Request:**
```http
GET /api/v1/themes/dark HTTP/1.1
Accept: application/json, text/css;q=0.9
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Vary: Accept

{
  "primary": "#1a1a1a",
  "secondary": "#333333"
}
```

### Multiple Format Preferences

**Request:**
```http
GET /api/v1/themes/light HTTP/1.1
Accept: text/css, application/x-scss;q=0.8, application/json;q=0.5
Accept-Encoding: gzip
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: text/css; charset=utf-8
Content-Encoding: gzip
Vary: Accept, Accept-Encoding

:root {
  --primary: #ffffff;
  --secondary: #f5f5f5;
}
```

### Language Negotiation

**Request:**
```http
GET /api/v1/themes/default HTTP/1.1
Accept: application/json
Accept-Language: es-MX, es;q=0.9, en;q=0.8
```

**Response (Spanish):**
```json
{
  "nombre": "predeterminado",
  "descripción": "Tema predeterminado del sistema"
}
```

### 406 Not Acceptable

**Request:**
```http
GET /api/v1/themes/dark HTTP/1.1
Accept: application/pdf
```

**Response:**
```http
HTTP/1.1 406 Not Acceptable
Content-Type: application/json

{
  "error": "Not Acceptable",
  "acceptable": [
    "application/json",
    "text/css",
    "application/x-scss"
  ]
}
```

---

## Best Practices

### 1. Always Include Vary Header

Ensure caches respect negotiation:
```
Vary: Accept, Accept-Encoding, Accept-Language
```

### 2. Set Default Fallback

Always define a default format (typically JSON).

### 3. Document Supported Formats

Provide endpoint to list available formats:
```javascript
GET /api/v1/themes/formats
```

### 4. Handle Quality Factors Properly

Order preferences by quality:
```javascript
Accept: application/json;q=0.9, text/css;q=0.8
// JSON has higher priority
```

### 5. Validate Charset

Always ensure UTF-8 for web:
```javascript
Content-Type: application/json; charset=utf-8
```

### 6. Implement Caching Correctly

Cache separately for each negotiation result.

### 7. Return 406 When Necessary

Never serve wrong format when client specifies strict preferences.

### 8. Document Examples

Show clients how to request specific formats:

```bash
# Request as CSS
curl -H "Accept: text/css" /api/v1/themes/dark

# Request with compression
curl -H "Accept-Encoding: gzip" /api/v1/themes/dark

# Request Spanish version
curl -H "Accept-Language: es" /api/v1/themes/dark
```

---

## Related Documentation

- [Theme Manager Guide](./THEME_API.md)
- [Theme Validation API](./THEME_VALIDATION_API.md)
- [Component Registry](./COMPONENT_SCHEMA.md)
- [State Persistence](./STATE_MANAGEMENT.md)

---

## Specifications

- HTTP/1.1 Content Negotiation: RFC 7231 (Sections 5.3, 6.4.1)
- Quality Values: RFC 7231 Section 5.3.5
- Media Types: IANA Media Types Registry
- Character Sets: IANA Character Sets Registry

---

## Summary

The Theme HTTP Content Negotiation system provides flexible, standards-compliant theme delivery supporting:

- 9 content format options
- 4 compression encodings
- Multiple languages
- Character set selection
- Quality-based preference ordering
- Cache-aware response variation

This enables seamless theme integration across diverse client types and preferences.
