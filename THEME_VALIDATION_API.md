# Theme Validation API Contract

## Overview

The UIverse Theme Validation API provides a dedicated, standardized contract for external consumers to validate theme configurations. This API enables third-party developers, tools, and services to validate themes against the UIverse specification with comprehensive error reporting, accessibility analysis, and recommendations.

## API Contract Specification

**Base URL:** `/api/themes`  
**API Version:** 1.0.0  
**Content-Type:** `application/json`  
**Authentication:** Not required (public API)

## Endpoints

### 1. Validate Single Theme

**POST** `/api/themes/validate`

Validate a single theme object against the UIverse theme schema with detailed error reporting.

**Request:**
```json
{
  "id": "custom-theme",
  "name": "Custom Theme",
  "isDark": false,
  "colors": {
    "primary": "#6c5ce7",
    "secondary": "#00cec9",
    "accent": "#eb6835",
    "background": "#f5f4f2",
    "surface": "#ffffff",
    "text": {
      "primary": "#111111",
      "secondary": "#666666"
    }
  }
}
```

**Response (Valid Theme - 200):**
```json
{
  "valid": true,
  "errors": [],
  "warnings": [],
  "metadata": {
    "timestamp": "2026-06-11T15:30:45.123Z",
    "validator": "1.0.0",
    "errorCount": 0,
    "warningCount": 0,
    "validationDuration": 12
  }
}
```

**Response (Invalid Theme - 200):**
```json
{
  "valid": false,
  "errors": [
    {
      "field": "colors.primary",
      "message": "Color must be valid hex (#RRGGBB) or rgb format",
      "code": "INVALID_COLOR",
      "severity": "error"
    },
    {
      "field": "id",
      "message": "Required field is missing: id",
      "code": "MISSING_REQUIRED_FIELD",
      "severity": "error"
    }
  ],
  "warnings": [],
  "metadata": {
    "timestamp": "2026-06-11T15:30:45.123Z",
    "validator": "1.0.0",
    "errorCount": 2,
    "warningCount": 0,
    "validationDuration": 8
  }
}
```

**Response (Malformed Request - 400):**
```json
{
  "error": "Invalid JSON",
  "details": "Unexpected token } in JSON at position 124"
}
```

### 2. Validate Batch Themes

**POST** `/api/themes/validate-batch`

Validate multiple theme objects in a single request with optional early termination.

**Request:**
```json
{
  "themes": [
    {
      "id": "theme-1",
      "name": "Theme 1",
      "isDark": false,
      "colors": { /* ... */ }
    },
    {
      "id": "theme-2",
      "name": "Theme 2",
      "isDark": true,
      "colors": { /* ... */ }
    }
  ],
  "stopOnFirst": false
}
```

**Response:**
```json
{
  "results": [
    {
      "themeId": "theme-1",
      "validation": {
        "valid": true,
        "errors": [],
        "warnings": [],
        "metadata": { /* ... */ }
      }
    },
    {
      "themeId": "theme-2",
      "validation": {
        "valid": false,
        "errors": [ /* ... */ ],
        "metadata": { /* ... */ }
      }
    }
  ],
  "summary": {
    "total": 2,
    "valid": 1,
    "invalid": 1,
    "totalErrors": 2,
    "totalWarnings": 0
  }
}
```

### 3. Validate Color Value

**POST** `/api/themes/validate-color`

Validate a single color value with format detection and WCAG contrast analysis.

**Request:**
```json
{
  "color": "#6c5ce7",
  "strict": true
}
```

**Response:**
```json
{
  "valid": true,
  "color": "#6c5ce7",
  "format": "hex",
  "normalized": "#6C5CE7",
  "contrast": {
    "white": 8.2,
    "black": 2.4
  },
  "wcagCompliance": {
    "wcagAA": true,
    "wcagAAA": false
  },
  "metadata": {
    "timestamp": "2026-06-11T15:30:45.123Z",
    "validationDuration": 3
  }
}
```

### 4. Get Validation Schema

**GET** `/api/themes/validate-schema`

Retrieve the JSON schema used for theme validation. Useful for client-side validation and integration.

**Query Parameters:**
- `format` (string, optional) - Schema format: `json-schema`, `openapi`, `raw` (default: `json-schema`)

**Request:**
```
GET /api/themes/validate-schema?format=json-schema
```

**Response:**
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9-]+$",
      "minLength": 1,
      "maxLength": 50
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "isDark": {
      "type": "boolean"
    },
    "colors": {
      "type": "object",
      "properties": { /* ... */ }
    }
  },
  "required": ["id", "name", "isDark", "colors"]
}
```

### 5. Generate Validation Report

**POST** `/api/themes/validate-report`

Generate a comprehensive validation report with accessibility analysis and recommendations.

**Request:**
```json
{
  "id": "my-theme",
  "name": "My Custom Theme",
  "isDark": false,
  "colors": { /* ... */ }
}
```

**Response:**
```json
{
  "validation": {
    "valid": true,
    "errors": [],
    "warnings": [],
    "metadata": { /* ... */ }
  },
  "report": {
    "accessibility": {
      "wcagAA": true,
      "wcagAAA": false,
      "contrastAnalysis": {
        "text": 8.2
      }
    },
    "score": 85,
    "recommendations": [
      "Define spacing scale for consistent layout",
      "Consider adding typography tokens for better consistency"
    ]
  }
}
```

## Error Codes

| Code | HTTP Status | Description | Example |
|------|-------------|-------------|---------|
| MISSING_REQUIRED_FIELD | 422 | Required field is missing | `colors.primary` required |
| INVALID_TYPE | 422 | Field has incorrect type | `isDark` must be boolean |
| INVALID_FORMAT | 422 | Field format doesn't match | ID contains invalid characters |
| INVALID_COLOR | 422 | Color format invalid | Must be hex or rgb format |
| VALUE_TOO_SHORT | 422 | String below minimum length | `name` must be at least 1 char |
| VALUE_TOO_LONG | 422 | String exceeds maximum | `name` max 100 characters |
| INVALID_PATTERN | 422 | Value violates pattern | ID pattern: `^[a-zA-Z0-9-]+$` |
| CONSTRAINT_VIOLATION | 422 | Business constraint violated | Low color contrast ratio |

## Required Fields

### Top-Level
- `id` (string, required) - Unique identifier, pattern: `^[a-zA-Z0-9-]+$`, 1-50 chars
- `name` (string, required) - Human-readable name, 1-100 chars
- `isDark` (boolean, required) - Whether theme is dark mode
- `colors` (object, required) - Theme color palette

### Colors Object
- `primary` (color, required) - Primary theme color
- `background` (color, required) - Background color
- `surface` (color, required) - Surface/card color
- `text` (object, required) - Text colors
  - `primary` (color, required) - Primary text color
  - `secondary` (color, required) - Secondary text color

## Optional Fields

- `description` (string) - Theme description, max 500 chars
- `typography` (object) - Typography tokens
  - `fontHeading` (string) - Heading font family
  - `fontBody` (string) - Body font family
  - `fontMono` (string) - Monospace font family
- `spacing` (object) - Spacing scale
  - `xs`, `sm`, `md`, `lg`, `xl` - Spacing values in px/em/rem
- `radius` (object) - Border radius values
  - `sm`, `md`, `lg`, `full` - Radius values
- `shadows` (object) - Shadow definitions
- `transitions` (object) - Transition timings

## Color Format Support

Valid color formats:

1. **Hex 6-digit:** `#RRGGBB`
   - Example: `#6c5ce7`

2. **Hex 8-digit (with alpha):** `#RRGGBBAA`
   - Example: `#6c5ce7ff`

3. **RGB:** `rgb(R, G, B)`
   - Example: `rgb(108, 92, 231)`

4. **RGBA:** `rgba(R, G, B, A)`
   - Example: `rgba(108, 92, 231, 1)`

## Request/Response Headers

### Request Headers
- `Content-Type: application/json` (required for POST)
- `User-Agent` (recommended for tracking)

### Response Headers
- `Content-Type: application/json`
- `X-Validation-Duration: <milliseconds>` - Validation execution time
- `X-RateLimit-Limit: 60` - Requests per minute
- `X-RateLimit-Remaining: 59` - Remaining requests
- `X-RateLimit-Reset: <unix-timestamp>` - When limit resets
- `Cache-Control: max-age=3600` - Response caching policy

## Rate Limiting

Public API with rate limiting:

- **Per Minute:** 60 requests
- **Per Hour:** 1000 requests
- **Per Day:** 10000 requests

Rate limit headers included in responses. When limit exceeded, returns 429 (Too Many Requests).

## Caching Strategy

- **Schema Cache:** 24 hours (schema endpoint)
- **Validation Cache:** 1 hour (per validator instance)
- **ETag Support:** Conditional requests based on schema version

## JavaScript Integration

### Using the Validator

```javascript
// Validate single theme
const result = UIVerseThemeValidator.validate({
  id: 'my-theme',
  name: 'My Theme',
  isDark: false,
  colors: {
    primary: '#6c5ce7',
    background: '#f5f4f2',
    surface: '#ffffff',
    text: {
      primary: '#111111',
      secondary: '#666666'
    }
  }
});

console.log(result.valid); // true or false
console.log(result.errors); // Array of validation errors
console.log(result.warnings); // Array of warnings
```

### Batch Validation

```javascript
const batchResults = UIVerseThemeValidator.validateBatch([
  theme1,
  theme2,
  theme3
], {
  stopOnFirst: false
});

console.log(batchResults.summary); // { total, valid, invalid, ... }
```

### Color Validation

```javascript
const colorResult = UIVerseThemeValidator.validateColor('#6c5ce7');

console.log(colorResult.valid); // true
console.log(colorResult.contrast); // { white: 8.2, black: 2.4 }
console.log(colorResult.wcagCompliance); // { wcagAA: true, wcagAAA: false }
```

### Generate Report

```javascript
const report = UIVerseThemeValidator.generateReport(theme);

console.log(report.report.score); // 0-100 score
console.log(report.report.recommendations); // Array of suggestions
console.log(report.report.accessibility); // Accessibility metrics
```

## Backend Integration Example

### Node.js/Express

```javascript
const express = require('express');
const validator = require('./theme-validator');

const app = express();
app.use(express.json());

// Validate single theme
app.post('/api/themes/validate', (req, res) => {
  const result = validator.validate(req.body);
  res.json(result);
});

// Batch validation
app.post('/api/themes/validate-batch', (req, res) => {
  const result = validator.validateBatch(req.body.themes, req.body);
  res.json(result);
});

// Validate color
app.post('/api/themes/validate-color', (req, res) => {
  const result = validator.validateColor(req.body.color);
  res.json(result);
});

// Get schema
app.get('/api/themes/validate-schema', (req, res) => {
  const schema = validator.getSchema(req.query.format);
  res.json(schema);
});

// Generate report
app.post('/api/themes/validate-report', (req, res) => {
  const report = validator.generateReport(req.body);
  res.json(report);
});
```

## Best Practices

1. **Always check the `valid` property** - Validation always returns 200, check `valid` to determine success
2. **Include metadata** - Timestamps and duration help with debugging
3. **Use error codes** - Machine-readable codes for client-side handling
4. **Batch when possible** - Use batch endpoint for multiple themes
5. **Cache schema** - Download schema once and use for client-side validation
6. **Handle rate limits** - Check `X-RateLimit-Remaining` header
7. **Provide context** - Include theme ID in batch requests for tracking

## Common Patterns

### Client-Side Pre-Validation

```javascript
// Validate before sending to server
const schema = await fetch('/api/themes/validate-schema').then(r => r.json());
const isValid = validate(theme, schema);

if (isValid) {
  const result = await fetch('/api/themes/validate', {
    method: 'POST',
    body: JSON.stringify(theme)
  }).then(r => r.json());
}
```

### Conditional Batch Processing

```javascript
// Stop on first error
const results = await validateBatch(themes, { stopOnFirst: true });

if (results.summary.invalid > 0) {
  console.error('First invalid theme:', results.results.find(r => !r.validation.valid));
}
```

### Color Accessibility Checking

```javascript
// Check if colors meet WCAG AA
const colorResult = validateColor(themeColor);

if (!colorResult.wcagCompliance.wcagAA) {
  console.warn('Color does not meet WCAG AA contrast ratio');
}
```

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-06-11 | Initial API contract with 5 endpoints, comprehensive validation, accessibility analysis |

## Related Documentation

- `theme-config.json` - Theme configuration structure
- `theme-manager.js` - Theme management API
- `THEME_API.md` - Theme configuration API documentation

