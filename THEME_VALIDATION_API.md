# Theme Validation API - Semantic Color Error Granularity

**Version:** 1.0.1 | **Last Updated:** June 15, 2026

## Overview

The UIverse Theme Validation API provides comprehensive validation workflows for theme objects with **semantic error granularity for color processing failures**. This update introduces 6 new error codes that precisely identify the specific failure type when color validation fails, enabling backend consumers to implement intelligent error recovery and remediation strategies.

## Table of Contents

1. [New Features (v1.0.1)](#new-features-v101)
2. [Semantic Error Codes](#semantic-error-codes)
3. [Color Processing Guide](#color-processing-guide)
4. [API Endpoints](#api-endpoints)
5. [Error Handling](#error-handling)
6. [Integration Examples](#integration-examples)
7. [Migration Guide](#migration-guide)

---

## New Features (v1.0.1)

### Semantic Color Error Granularity

The updated validator now returns specific, actionable error codes when color validation fails:

| Error Code | Semantic Meaning | Recovery Strategy |
|---|---|---|
| `COLOR_FORMAT_MISMATCH` | Color provided in unsupported format (HSL, Lab, etc.) | Convert to supported format (hex or RGB) |
| `COLOR_PARSE_ERROR` | Color string syntax is malformed | Fix string syntax; verify correct format |
| `COLOR_SPACE_INCOMPATIBLE` | Color exists in wrong color space context | Convert color space to RGB |
| `RGB_COMPONENT_OUT_OF_RANGE` | RGB component value outside [0-255] range | Clamp values to valid range |
| `HEX_DIGIT_INVALID` | Hex color contains non-hexadecimal characters | Replace invalid digits with valid hex chars |
| `COLOR_NORMALIZATION_FAILED` | Color could not be normalized to canonical format | Verify color space compatibility |

### Enhanced Error Metadata

All color validation errors now include a `colorDetails` object with:

- **attemptedFormat:** The format the validator tried to parse
- **expectedFormats:** Array of supported formats
- **colorValue:** The actual color string that failed
- **failureReason:** Specific reason for the failure
- **colorSpace:** Detected or expected color space
- **suggestion:** Recommended remediation action

---

## Semantic Error Codes

### COLOR_FORMAT_MISMATCH (422 Unprocessable Entity)

**Description:** Color provided in unsupported format

**When it occurs:**
- HSL format: `hsl(240, 100%, 50%)`
- Lab color space: `lab(50 30 40)`
- LCH format: `lch(50 30 40)`
- Any unrecognized format

**Example Response:**

```json
{
  "valid": false,
  "errors": [
    {
      "field": "colors.primary",
      "message": "HSL color space not compatible with RGB-only theme",
      "code": "COLOR_FORMAT_MISMATCH",
      "severity": "error",
      "colorDetails": {
        "attemptedFormat": "hsl",
        "expectedFormats": ["hex-3", "hex-6", "hex-8", "rgb", "rgba"],
        "colorValue": "hsl(240, 100%, 50%)",
        "failureReason": "Format does not match any supported color format",
        "suggestion": "Use hex (#RRGGBB), hex with alpha (#RRGGBBAA), or rgb(r, g, b) format"
      }
    }
  ]
}
```

**Recovery:** Convert HSL to hex or RGB format before submitting.

---

### COLOR_PARSE_ERROR (422 Unprocessable Entity)

**Description:** Color string syntax is malformed

**When it occurs:**
- Invalid hex digit characters
- Malformed RGB syntax
- Incomplete color specification
- Invalid string encoding

**Example Response:**

```json
{
  "valid": false,
  "errors": [
    {
      "field": "colors.secondary",
      "message": "RGB color format invalid",
      "code": "COLOR_PARSE_ERROR",
      "severity": "error",
      "colorDetails": {
        "attemptedFormat": "rgb",
        "expectedFormats": ["rgb", "rgba"],
        "colorValue": "rgb(255, 256, 100)",
        "failureReason": "Invalid RGB syntax or component out of bounds",
        "suggestion": "Use rgb(r, g, b) or rgba(r, g, b, a) format with values 0-255"
      }
    }
  ]
}
```

**Recovery:** Fix RGB syntax and ensure values are valid.

---

### COLOR_SPACE_INCOMPATIBLE (422 Unprocessable Entity)

**Description:** Color exists in wrong color space context

**When it occurs:**
- Lab or LCH color space provided (RGB theme)
- CMYK color space provided
- Device-dependent color spaces
- Color space mismatch between theme definition and consumer expectations

**Example Response:**

```json
{
  "valid": false,
  "errors": [
    {
      "field": "colors.accent",
      "message": "Lab color space not compatible with RGB-only theme",
      "code": "COLOR_SPACE_INCOMPATIBLE",
      "severity": "error",
      "colorDetails": {
        "attemptedFormat": "lab",
        "expectedFormats": ["hex-3", "hex-6", "hex-8", "rgb", "rgba"],
        "colorSpace": "Lab",
        "failureReason": "Theme requires RGB color space",
        "suggestion": "Convert Lab color to hex or rgb format"
      }
    }
  ]
}
```

**Recovery:** Convert from Lab to RGB color space.

---

### RGB_COMPONENT_OUT_OF_RANGE (422 Unprocessable Entity)

**Description:** RGB component value outside valid range [0-255]

**When it occurs:**
- Red, green, or blue component < 0 or > 255
- Alpha channel outside [0, 1] for rgba
- Numeric overflow or underflow
- Float values used where integers expected

**Example Response:**

```json
{
  "valid": false,
  "errors": [
    {
      "field": "colors.secondary",
      "message": "RGB component value 300 out of range [0-255]",
      "code": "RGB_COMPONENT_OUT_OF_RANGE",
      "severity": "error",
      "colorDetails": {
        "attemptedFormat": "rgb",
        "colorValue": "rgb(300, 50, 100)",
        "failureReason": "Red component 300 exceeds valid range [0-255]",
        "suggestion": "Ensure all RGB components are between 0 and 255"
      }
    }
  ]
}
```

**Recovery:** Clamp RGB values to [0, 255] range.

---

### HEX_DIGIT_INVALID (422 Unprocessable Entity)

**Description:** Hex color contains invalid hexadecimal digit characters

**When it occurs:**
- Invalid hex digits (not 0-9, a-f, A-F)
- Common typos like G, H, X, Y, Z in hex values
- Mixed case without proper formatting
- Wrong number of digits

**Example Response:**

```json
{
  "valid": false,
  "errors": [
    {
      "field": "colors.primary",
      "message": "Hex color '#XXYYZZ' contains invalid digits",
      "code": "HEX_DIGIT_INVALID",
      "severity": "error",
      "colorDetails": {
        "attemptedFormat": "hex-6",
        "expectedFormats": ["hex-3", "hex-6", "hex-8"],
        "colorValue": "#XXYYZZ",
        "failureReason": "Invalid hexadecimal digits: X, Y, Z",
        "suggestion": "Use valid hex digits (0-9, a-f) and ensure format is #RGB, #RRGGBB, or #RRGGBBAA"
      }
    }
  ]
}
```

**Recovery:** Replace invalid hex digits with valid characters (0-9, a-f).

---

### COLOR_NORMALIZATION_FAILED (422 Unprocessable Entity)

**Description:** Color could not be normalized to canonical format

**When it occurs:**
- Color space conversion fails
- Precision loss during normalization
- Ambiguous color specification
- Unsupported color space in conversion chain

**Example Response:**

```json
{
  "valid": false,
  "errors": [
    {
      "field": "colors.tertiary",
      "message": "Unable to normalize color due to ambiguous format specification",
      "code": "COLOR_NORMALIZATION_FAILED",
      "severity": "error",
      "colorDetails": {
        "attemptedFormat": "mixed",
        "expectedFormats": ["hex-3", "hex-6", "hex-8", "rgb", "rgba"],
        "colorValue": "rgb(255, 50, 100, 0.5, extra)",
        "failureReason": "Conversion between color spaces failed",
        "suggestion": "Verify color format is valid and unambiguous; convert to standard format"
      }
    }
  ]
}
```

**Recovery:** Verify color format and convert to standard format.

---

## Color Processing Guide

### Supported Color Formats

#### Hex Colors

| Format | Pattern | Example | Normalized |
|---|---|---|---|
| 3-digit | `#RGB` | `#F0A` | `#FF00AA` |
| 6-digit | `#RRGGBB` | `#FF00AA` | `#FF00AA` |
| 8-digit | `#RRGGBBAA` | `#FF00AACC` | `#FF00AACC` |

#### RGB/RGBA Colors

| Format | Pattern | Example | Supported |
|---|---|---|---|
| RGB | `rgb(r, g, b)` | `rgb(255, 0, 170)` | ✓ |
| RGBA | `rgba(r, g, b, a)` | `rgba(255, 0, 170, 0.8)` | ✓ |

**Component Ranges:**
- Red, Green, Blue: `0-255`
- Alpha: `0-1` (0 = fully transparent, 1 = fully opaque)

### Unsupported Formats

| Format | Example | Alternative |
|---|---|---|
| HSL | `hsl(240, 100%, 50%)` | Convert to hex: `#0000FF` |
| HSV | `hsv(240, 100%, 100%)` | Convert to hex: `#0000FF` |
| Lab | `lab(50 30 40)` | Convert to hex: `#7F5347` |
| LCH | `lch(50 30 40)` | Convert to hex: `#7F5347` |
| CMYK | `cmyk(0, 100, 100, 0)` | Convert to hex: `#FF0000` |

---

## API Endpoints

### POST /api/themes/validate

**Validate Single Theme**

Validates a theme object with detailed color error reporting.

**Request:**

```json
{
  "id": "custom-light",
  "name": "Custom Light Theme",
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

**Response (Success):**

**Response (Valid Theme - 200):**
```json
{
  "valid": true,
  "errors": [],
  "warnings": [],
  "metadata": {
    "timestamp": "2026-06-15T10:30:45.123Z",
    "validator": "1.0.1",
    "timestamp": "2026-06-11T15:30:45.123Z",
    "validator": "1.0.0",
    "errorCount": 0,
    "warningCount": 0,
    "validationDuration": 12
  }
}
```

**Response (With Semantic Errors):**

**Response (Invalid Theme - 200):**
```json
{
  "valid": false,
  "errors": [
    {
      "field": "colors.primary",
      "message": "Hex color '#XXYYZZ' contains invalid digits",
      "code": "HEX_DIGIT_INVALID",
      "severity": "error",
      "colorDetails": {
        "attemptedFormat": "hex-6",
        "expectedFormats": ["hex-3", "hex-6", "hex-8"],
        "colorValue": "#XXYYZZ",
        "failureReason": "Invalid hexadecimal digits: X, Y, Z",
        "suggestion": "Use valid hex digits (0-9, a-f)"
      }
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
    "timestamp": "2026-06-15T10:30:45.123Z",
    "validator": "1.0.1",
    "errorCount": 1,
    "timestamp": "2026-06-11T15:30:45.123Z",
    "validator": "1.0.0",
    "errorCount": 2,
    "warningCount": 0,
    "validationDuration": 8
  }
}
```

---

### POST /api/themes/validate-color

**Validate Color Value**

Validates a single color with detailed processing information.

**Request:**

```json
{
  "color": "#FF5733",
  "strict": true
}
```

**Response:**

```json
{
  "valid": true,
  "color": "#FF5733",
  "format": "hex",
  "normalized": "#FF5733",
  "contrast": {
    "white": 3.45,
    "black": 5.89
  },
  "wcagCompliance": {
    "wcagAA": true,
    "wcagAAA": false
  },
  "colorSpace": "RGB",
  "processingDetails": {
    "normalizationApplied": false,
    "originalFormat": "hex"
  }
}
```

---

### POST /api/themes/validate-batch

**Validate Multiple Themes**

Batch validate multiple theme objects in a single request.

**Request:**

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
      "name": "Light Theme",
      "isDark": false,
      "colors": { "primary": "#000000", "background": "#FFFFFF", "surface": "#FFFFFF", "text": { "primary": "#111111", "secondary": "#666666" } }
    },
    {
      "id": "theme-2",
      "name": "Dark Theme",
      "isDark": true,
      "colors": { "primary": "#FFFFFF", "background": "#000000", "surface": "#111111", "text": { "primary": "#FFFFFF", "secondary": "#CCCCCC" } }
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
      "validation": { "valid": true, "errors": [], "warnings": [] }
    },
    {
      "themeId": "theme-2",
      "validation": { "valid": true, "errors": [], "warnings": [] }
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
    "valid": 2,
    "invalid": 0,
    "totalErrors": 0,
    "valid": 1,
    "invalid": 1,
    "totalErrors": 2,
    "totalWarnings": 0
  }
}
```

---

## Error Handling

### Error Code Mapping

Use error codes to implement intelligent error handling:

```javascript
const colorErrorHandlers = {
  'HEX_DIGIT_INVALID': async (error) => {
    // Provide hex digit replacement suggestions
    const corrected = await suggestHexCorrection(error.colorDetails.colorValue);
    return corrected;
  },
  'RGB_COMPONENT_OUT_OF_RANGE': async (error) => {
    // Clamp values to valid range
    const clamped = clampRgbComponents(error.colorDetails.colorValue);
    return clamped;
  },
  'COLOR_SPACE_INCOMPATIBLE': async (error) => {
    // Convert color space
    const converted = await convertColorSpace(
      error.colorDetails.colorValue,
      error.colorDetails.colorSpace,
      'RGB'
    );
    return converted;
  },
  'COLOR_PARSE_ERROR': async (error) => {
    // Log and request user input
    console.error('Parse error:', error.colorDetails.failureReason);
    return await requestColorInput();
  }
};
```

### Batch Error Handling

```javascript
async function validateAndRecoverThemes(themes) {
  const result = await api.validateBatch(themes);
  
  const recovered = [];
  for (const themeResult of result.results) {
    if (themeResult.validation.valid) {
      recovered.push(themeResult);
      continue;
    }

    // Process each error with semantic recovery
    for (const error of themeResult.validation.errors) {
      if (error.code === 'HEX_DIGIT_INVALID') {
        const fixed = fixHexColor(error.colorDetails);
        themeResult.validation.errors = [];
        recovered.push(themeResult);
      }
    }
  }

  return recovered;
}
```

---

## Integration Examples

### JavaScript/Node.js

```javascript
const ThemeValidator = require('./theme-validator.js');

const validator = new ThemeValidator({
  strictMode: true,
  enableAccessibilityAnalysis: true,
  enableCaching: true
});

// Validate theme with semantic error handling
const theme = {
  id: 'my-theme',
  name: 'My Custom Theme',
  isDark: false,
  colors: {
    primary: '#6c5ce7',
    secondary: '#XXYYZZ',  // Invalid hex
    accent: 'hsl(30, 100%, 50%)',  // Unsupported format
    background: '#f5f4f2',
    surface: '#ffffff',
    text: { primary: '#111111', secondary: '#666666' }
  }
};

const result = validator.validate(theme);

// Handle semantic errors
if (!result.valid) {
  for (const error of result.errors) {
    switch (error.code) {
      case 'HEX_DIGIT_INVALID':
        console.log(`Fix hex digits: ${error.colorDetails.suggestion}`);
        break;
      case 'COLOR_FORMAT_MISMATCH':
        console.log(`Convert format: ${error.colorDetails.suggestion}`);
        break;
      case 'RGB_COMPONENT_OUT_OF_RANGE':
        console.log(`Clamp values: ${error.colorDetails.suggestion}`);
        break;
    }
  }
}
```

### Python

```python
import json
import requests

# Validate theme via HTTP
theme = {
    'id': 'my-theme',
    'name': 'My Custom Theme',
    'isDark': False,
    'colors': {
        'primary': '#6c5ce7',
        'secondary': '#XXYYZZ',
        'accent': 'hsl(30, 100%, 50%)',
        'background': '#f5f4f2',
        'surface': '#ffffff',
        'text': {
            'primary': '#111111',
            'secondary': '#666666'
        }
    }
}

response = requests.post(
    'http://localhost:3000/api/themes/validate',
    json=theme,
    headers={'Content-Type': 'application/json'}
)

result = response.json()

# Handle semantic color errors
for error in result.get('errors', []):
    if error['code'] == 'HEX_DIGIT_INVALID':
        print(f"Error: {error['message']}")
        print(f"Invalid digits: {error['colorDetails']['failureReason']}")
        print(f"Suggestion: {error['colorDetails']['suggestion']}")
    elif error['code'] == 'COLOR_FORMAT_MISMATCH':
        print(f"Unsupported format: {error['colorDetails']['attemptedFormat']}")
        print(f"Use: {error['colorDetails']['expectedFormats']}")
```

---

## Migration Guide (v1.0 → v1.0.1)

### Breaking Changes

**None.** The update is backward compatible.

### New Error Codes to Handle

Add handling for 6 new semantic error codes:

1. `COLOR_FORMAT_MISMATCH`
2. `COLOR_PARSE_ERROR`
3. `COLOR_SPACE_INCOMPATIBLE`
4. `RGB_COMPONENT_OUT_OF_RANGE`
5. `HEX_DIGIT_INVALID`
6. `COLOR_NORMALIZATION_FAILED`

### Updated Response Schema

Error objects now include optional `colorDetails` field:

```json
{
  "field": "colors.primary",
  "message": "...",
  "code": "HEX_DIGIT_INVALID",
  "severity": "error",
  "colorDetails": {
    "attemptedFormat": "hex-6",
    "expectedFormats": ["hex-3", "hex-6", "hex-8"],
    "colorValue": "#XXYYZZ",
    "failureReason": "...",
    "suggestion": "..."
  }
}
```

### Recommended Updates

1. Update error handling to check for new error codes
2. Add `colorDetails` field parsing in error handlers
3. Implement semantic recovery strategies per error type
4. Update documentation for users of your API

---

## Conclusion

Semantic color error granularity enables backend integrations to:
- Distinguish between different types of color validation failures
- Implement intelligent error recovery without custom parsing
- Provide clear remediation guidance to end users
- Build composable color processing pipelines

For questions or issues, please open an issue on GitHub.
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

5. **HSL:** `hsl(H, S%, L%)`
   - Example: `hsl(250, 75%, 63%)`

6. **HSLA:** `hsla(H, S%, L%, A)`
   - Example: `hsla(250, 75%, 63%, 0.8)`

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

