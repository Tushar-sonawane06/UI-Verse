# Translation Export Pipeline - RTL Directionality Support

**Version:** 1.0.1 | **Last Updated:** June 15, 2026

## Overview

The Component I18n Manager now includes comprehensive bidirectional (BiDi) text support with directionality metadata in all translation export formats. This update enables translation management systems to properly handle right-to-left (RTL) languages including Arabic, Hebrew, and Persian.

## Table of Contents

1. [RTL Language Support](#rtl-language-support)
2. [Directionality Metadata](#directionality-metadata)
3. [Export Formats with BiDi](#export-formats-with-bidi)
4. [Schema Updates](#schema-updates)
5. [BiDi Control Characters](#bidi-control-characters)
6. [Integration Examples](#integration-examples)
7. [Migration Guide](#migration-guide)

---

## RTL Language Support

### Supported RTL Languages

The manager recognizes and properly handles the following RTL languages:

| Language | Code | Script | Direction | BiDi Required |
|---|---|---|---|---|
| Arabic | `ar` | Arab | RTL | Yes |
| Hebrew | `he` | Hebr | RTL | Yes |
| Persian/Farsi | `fa` | Arab | RTL | Yes |
| Urdu | `ur` | Arab | RTL | Yes |
| Yiddish | `yi` | Hebr | RTL | Yes |
| Judeo-Arabic | `ji` | Arab | RTL | Yes |

### Supported LTR Languages

All other languages default to LTR (Left-to-Right):

- Latin script: English, Spanish, French, German, Italian, Portuguese, etc.
- Cyrillic: Russian, Ukrainian, Bulgarian, Serbian, etc.
- CJK scripts: Japanese, Chinese, Korean (rendered top-to-bottom or left-to-right)

---

## Directionality Metadata

### Per-Language Metadata Structure

Each language now includes directionality information:

```json
{
  "textDirection": "rtl|ltr",
  "scriptCode": "ISO 15924 code",
  "scriptDirection": "rtl|ltr|mixed",
  "biDiRequired": true|false
}
```

### Example: Arabic Component

```json
{
  "ar": {
    "textDirection": "rtl",
    "scriptCode": "Arab",
    "scriptDirection": "rtl",
    "biDiRequired": true
  }
}
```

---

## Export Formats with BiDi

### JSON Export

JSON exports now include `languageMetadata` field with directionality:

```json
{
  "components": {
    "button": {
      "languages": ["en", "ar", "he"],
      "languageMetadata": {
        "en": {
          "textDirection": "ltr",
          "scriptCode": "Latn",
          "scriptDirection": "ltr",
          "biDiRequired": false
        },
        "ar": {
          "textDirection": "rtl",
          "scriptCode": "Arab",
          "scriptDirection": "rtl",
          "biDiRequired": true
        },
        "he": {
          "textDirection": "rtl",
          "scriptCode": "Hebr",
          "scriptDirection": "rtl",
          "biDiRequired": true
        }
      },
      "translations": {
        "en": {
          "name": "Button",
          "description": "A clickable button component"
        },
        "ar": {
          "name": "زر",
          "description": "مكون زر قابل للنقر"
        },
        "he": {
          "name": "כפתור",
          "description": "רכיב כפתור שניתן ללחוץ עליו"
        }
      }
    }
  }
}
```

### CSV Export

CSV exports include dedicated columns for directionality:

```csv
Component,Language,TextDirection,ScriptCode,Key,Value
button,en,ltr,Latn,name,Button
button,en,ltr,Latn,description,A clickable button component
button,ar,rtl,Arab,name,زر
button,ar,rtl,Arab,description,مكون زر قابل للنقر
button,he,rtl,Hebr,name,כפתור
button,he,rtl,Hebr,description,רכיב כפתור שניתן ללחוץ עליו
```

### XLIFF Export

XLIFF exports include XML attributes for BiDi specification:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
  <file original="button" source-language="en" target-language="ar" xml:lang="ar" dir="rtl">
    <!-- Script: Arab, BiDi Required: true -->
    <body>
      <trans-unit id="button.ar.name" xml:lang="ar" dir="rtl">
        <source>Button</source>
        <target>زر</target>
      </trans-unit>
      <trans-unit id="button.ar.description" xml:lang="ar" dir="rtl">
        <source>A clickable button component</source>
        <target>مكون زر قابل للنقر</target>
      </trans-unit>
    </body>
  </file>
  <file original="button" source-language="en" target-language="he" xml:lang="he" dir="rtl">
    <!-- Script: Hebr, BiDi Required: true -->
    <body>
      <trans-unit id="button.he.name" xml:lang="he" dir="rtl">
        <source>Button</source>
        <target>כפתור</target>
      </trans-unit>
      <trans-unit id="button.he.description" xml:lang="he" dir="rtl">
        <source>A clickable button component</source>
        <target>רכיב כפתור שניתן ללחוץ עליו</target>
      </trans-unit>
    </body>
  </file>
</xliff>
```

---

## Schema Updates

### New Schema Fields

**v1.0.1 introduces:**

1. **translations[].textDirection** - Explicit direction per language
2. **translations[].scriptCode** - ISO 15924 script code
3. **languageMetadata** - Per-component language metadata
4. **globalSettings.rtlLanguages** - Array of RTL language codes
5. **directionalityMap** - Global RTL/LTR mapping

### Updated Schema

```json
{
  "components": [
    {
      "name": "component-name",
      "supportedLanguages": ["en", "ar", "he"],
      "translations": {
        "ar": {
          "name": "...",
          "description": "...",
          "textDirection": "rtl",
          "scriptCode": "Arab"
        }
      },
      "languageMetadata": {
        "ar": {
          "textDirection": "rtl",
          "scriptCode": "Arab",
          "scriptDirection": "rtl",
          "biDiRequired": true
        }
      }
    }
  ],
  "globalSettings": {
    "rtlLanguages": ["ar", "he", "fa", "ur"]
  },
  "directionalityMap": {
    "rtl": ["ar", "he", "fa"],
    "ltr": ["en", "es", "fr"]
  }
}
```

---

## BiDi Control Characters

### Automatic BiDi Marker Insertion

For RTL languages with `biDiRequired: true`, the manager automatically applies BiDi control characters:

| Character | Code | Usage | Example |
|---|---|---|---|
| RLM | U+200F | Right-to-left mark | Marks end of RTL text |
| LRM | U+200E | Left-to-right mark | Marks end of LTR text |
| RLE | U+202A | Right-to-left embedding | Wraps RTL paragraph |
| LRE | U+202D | Left-to-right embedding | Wraps LTR paragraph |
| PDF | U+202C | Pop directional formatting | Ends embedding |

### Example: Arabic Text with BiDi Markers

```javascript
const manager = new ComponentI18nManager();

// Arabic text gets embedded with BiDi markers
const arabicText = manager.translate('button', 'description', {}, 'ar');
// Result: U+202A + "مكون زر قابل للنقر" + U+202C
```

---

## Integration Examples

### JavaScript/Node.js

```javascript
const ComponentI18nManager = require('./component-i18n-manager.js');

const manager = new ComponentI18nManager({
  rtlLanguages: ['ar', 'he', 'fa', 'ur']
});

// Register component with RTL support
manager.registerComponent('button', {
  supportedLanguages: ['en', 'ar', 'he'],
  defaultLanguage: 'en',
  translations: {
    en: {
      name: 'Button',
      description: 'A clickable button component'
    },
    ar: {
      name: 'زر',
      description: 'مكون زر قابل للنقر'
    },
    he: {
      name: 'כפתור',
      description: 'רכיב כפתור שניתן ללחוץ עליו'
    }
  }
});

// Get language support with directionality
const support = manager.getLanguageSupport('button');
console.log(support.ar.directionality);
// Output: { textDirection: 'rtl', scriptCode: 'Arab', ... }

// Export with BiDi metadata
const jsonExport = manager.exportTranslations('json');
const csvExport = manager.exportTranslations('csv');
const xliffExport = manager.exportTranslations('xliff');
```

### Python Integration

```python
import json
import requests

# Fetch translation export with RTL metadata
response = requests.post(
    'http://localhost:3000/api/i18n/export',
    json={
        'componentName': 'button',
        'format': 'json'
    }
)

data = response.json()

# Check Arabic directionality
ar_metadata = data['components']['button']['languageMetadata']['ar']
print(f"Arabic Direction: {ar_metadata['textDirection']}")  # Output: rtl
print(f"BiDi Required: {ar_metadata['biDiRequired']}")      # Output: true

# Process RTL translations
for lang, metadata in data['components']['button']['languageMetadata'].items():
    if metadata['textDirection'] == 'rtl':
        print(f"Processing RTL language: {lang}")
        # Apply RTL-specific formatting
        apply_rtl_formatting(data['components']['button']['translations'][lang])
```

### Translation Tool Integration

```javascript
// When importing XLIFF exports into translation tools
const xliffExport = manager.exportTranslations('xliff');

// Tools can now parse directionality from:
// 1. xml:lang attribute on file element
// 2. dir="rtl|ltr" attribute
// 3. BiDi Required comment
// 4. Script code comment

// Example: CAT tool can auto-configure RTL settings
const parser = new XMLParser();
const doc = parser.parse(xliffExport);

for (const file of doc.xliff.file) {
  if (file['@_dir'] === 'rtl') {
    // Auto-enable RTL UI in CAT tool
    configureCATUI({
      direction: 'rtl',
      scriptCode: extractScriptCode(file['@_original']),
      language: file['@_target-language']
    });
  }
}
```

---

## Migration Guide (v1.0 → v1.0.1)

### Breaking Changes

**None.** The update is backward compatible.

### New Features to Adopt

1. **Directionality Metadata** - Automatically included in all exports
2. **BiDi Markers** - Applied automatically for RTL languages
3. **Language Metadata** - Available via `getLanguageSupport()`

### Updated Export Schema

All exports now include directionality information:

- **JSON:** New `languageMetadata` field
- **CSV:** New `TextDirection` and `ScriptCode` columns
- **XLIFF:** New `dir` attribute and `xml:lang` on units

### Recommended Updates

1. Update translation tool import scripts to parse directionality
2. Configure RTL UI in CAT (Computer-Aided Translation) tools
3. Test RTL language rendering with exported content
4. Validate BiDi marker presence in RTL exports

---

## RTL Best Practices

### Translation Workflow

1. **Export** - Use appropriate format (JSON for apps, XLIFF for CAT tools)
2. **Translate** - CAT tools will auto-configure RTL UI based on metadata
3. **Import** - Translation tool exports with directionality preserved
4. **Validate** - Verify text direction and BiDi markers

### Component Rendering

```html
<!-- For languages with textDirection: rtl -->
<div dir="rtl" lang="ar">
  <!-- Content will be rendered RTL -->
  <h1>العنوان</h1>
  <p>محتوى المكون</p>
</div>

<!-- For languages with textDirection: ltr -->
<div dir="ltr" lang="en">
  <h1>Title</h1>
  <p>Component content</p>
</div>
```

### Mixed Content Handling

When combining RTL and LTR text:

```html
<!-- Use dir="auto" for automatic direction detection -->
<span dir="auto">
  <!-- This will auto-detect and apply appropriate directionality -->
  English text in Arabic: نص عربي
</span>

<!-- Or explicitly manage with Unicode control characters -->
<span>
  LTR: ‎English ‎
  <bdi>RTL: عربي</bdi>
</span>
```

---

## Conclusion

RTL directionality support enables:
- Proper rendering of right-to-left content in all applications
- Seamless translation workflow through CAT tools
- Automatic BiDi handling without manual intervention
- Discoverable locale-specific requirements

For questions or RTL-specific issues, please open an issue on GitHub with the `rtl` label.
