# Component Internationalization (i18n) API

Comprehensive guide for implementing internationalization support in component metadata. Provides multi-language definitions, translation management, and cultural adaptations.

**Version:** 1.0.0

## Table of Contents

1. [Overview](#overview)
2. [Supported Languages](#supported-languages)
3. [Metadata Schema](#metadata-schema)
4. [API Reference](#api-reference)
5. [Translation Workflow](#translation-workflow)
6. [Implementation Guide](#implementation-guide)
7. [Examples](#examples)
8. [Best Practices](#best-practices)

---

## Overview

The Component I18n API enables:

- **Multi-language Metadata**: Define component information in multiple languages
- **Explicit Language Support**: Declare supported languages in component definition
- **Translation Management**: Register, update, and manage translations
- **Language Detection**: Automatic language selection based on user preferences
- **Fallback Chains**: Intelligent fallback to alternative languages
- **Plural Handling**: Language-specific plural rules
- **Date/Number Formatting**: Localized formatting for different regions
- **Cultural Adaptations**: Region-specific content and formatting

## Supported Languages

| Code | Language | Native Name |
|------|----------|------------|
| en | English | English |
| es | Spanish | Español |
| fr | French | Français |
| de | German | Deutsch |
| ja | Japanese | 日本語 |
| zh | Chinese | 中文 |
| pt | Portuguese | Português |
| ru | Russian | Русский |
| ko | Korean | 한국어 |
| it | Italian | Italiano |

---

## Metadata Schema

### Component i18n Structure

```json
{
  "name": "button",
  "defaultLanguage": "en",
  "supportedLanguages": ["en", "es", "fr"],
  "fallbackLanguage": "en",
  "translations": {
    "en": {
      "name": "Button",
      "description": "A clickable button component",
      "category": "Inputs",
      "tags": ["interactive", "action"],
      "usage": "Use for user actions",
      "examples": [],
      "notes": "Supports various sizes"
    },
    "es": {
      "name": "Botón",
      "description": "Un componente de botón cliqueable",
      "category": "Entradas",
      "tags": ["interactivo", "acción"],
      "usage": "Usar para acciones del usuario",
      "examples": [],
      "notes": "Compatible con varios tamaños"
    }
  },
  "pluralForms": {
    "en": { "one": "{count} button", "other": "{count} buttons" },
    "es": { "one": "{count} botón", "other": "{count} botones" }
  },
  "metadata": {
    "author": "UIverse Team",
    "version": "1.0.0",
    "completeness": "100.00",
    "status": "approved"
  }
}
```

### Required Fields

- `name`: Unique component identifier
- `supportedLanguages`: Array of language codes (minimum 1)
- `translations`: Object with language-specific translations
  - Each language must include at least `name` and `description`

### Optional Fields

- `defaultLanguage`: Default language (defaults to first in supportedLanguages)
- `fallbackLanguage`: Fallback when requested language unavailable
- `pluralForms`: Language-specific plural rules
- `contextualHelp`: Help text for translators
- `dateFormats`: Date format preferences
- `numberFormats`: Number format preferences
- `culturalAdaptations`: Region-specific content
- `metadata`: Translation metadata (author, version, status)

---

## API Reference

### ComponentI18nManager

Main class for managing component i18n metadata.

#### Constructor

```javascript
const manager = new ComponentI18nManager({
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es', 'fr', 'de', 'ja', 'zh', 'pt', 'ru', 'ko', 'it'],
  fallbackLanguage: 'en',
  enableCaching: true,
  cacheSize: 500
});
```

#### Methods

##### registerComponent(componentName, i18nMetadata)

Register a component with i18n metadata.

```javascript
manager.registerComponent('button', {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es'],
  translations: {
    en: {
      name: 'Button',
      description: 'A button component'
    },
    es: {
      name: 'Botón',
      description: 'Un componente de botón'
    }
  }
});
```

**Parameters:**
- `componentName` (string): Component identifier
- `i18nMetadata` (object): Component i18n configuration

**Throws:** Error if supportedLanguages not defined

---

##### getComponentMetadata(componentName, language)

Get component metadata in specific language.

```javascript
const metadata = manager.getComponentMetadata('button', 'es');
// Returns Spanish version, or English if Spanish unavailable
```

**Parameters:**
- `componentName` (string): Component identifier
- `language` (string): Target language code

**Returns:** Object with localized component metadata

**Throws:** Error if component not found

---

##### translate(componentName, key, params, language)

Translate a key with placeholder substitution.

```javascript
const translated = manager.translate('button', 'usage', { size: 'large' }, 'es');
// Replaces {size} with 'large' in Spanish usage text
```

**Parameters:**
- `componentName` (string): Component identifier
- `key` (string): Translation key
- `params` (object): Placeholder values (optional)
- `language` (string): Target language (optional, defaults to defaultLanguage)

**Returns:** Translated and formatted string

---

##### getLanguageSupport(componentName)

Get language support information for component.

```javascript
const support = manager.getLanguageSupport('button');
// Returns completeness percentage for each language
```

**Returns:**
```json
{
  "component": "button",
  "supportedLanguages": ["en", "es", "fr"],
  "defaultLanguage": "en",
  "fallbackLanguage": "en",
  "languageSupport": {
    "en": {
      "isDefault": true,
      "completeness": "100%",
      "translatedKeys": 7,
      "totalKeys": 7
    },
    "es": {
      "isDefault": false,
      "completeness": "85%",
      "translatedKeys": 6,
      "totalKeys": 7
    }
  }
}
```

---

##### detectLanguage(acceptLanguageHeader, availableLanguages)

Detect user language from Accept-Language header.

```javascript
const language = manager.detectLanguage('es-MX, es;q=0.9, en;q=0.8', ['en', 'es']);
// Returns 'es' based on user preference
```

**Parameters:**
- `acceptLanguageHeader` (string): Accept-Language header value
- `availableLanguages` (array): Available languages for fallback

**Returns:** Best matching language code

---

##### formatPlural(count, forms, language)

Format plural string based on count.

```javascript
const plural = manager.formatPlural(5, {
  one: '{count} button',
  other: '{count} buttons'
}, 'en');
// Returns '5 buttons'
```

**Parameters:**
- `count` (number): Count for plural form
- `forms` (object): Plural forms (one, other, zero, two, few, many)
- `language` (string): Language code

**Returns:** Formatted plural string

---

##### formatDate(date, language, options)

Format date for language.

```javascript
const formatted = manager.formatDate(new Date(), 'es', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
// Returns Spanish-formatted date
```

**Parameters:**
- `date` (Date|number): Date to format
- `language` (string): Language code
- `options` (object): Intl.DateTimeFormat options

**Returns:** Formatted date string

---

##### formatNumber(number, language, options)

Format number for language.

```javascript
const formatted = manager.formatNumber(1234.56, 'de', {
  style: 'currency',
  currency: 'EUR'
});
// Returns German-formatted number with currency
```

**Parameters:**
- `number` (number): Number to format
- `language` (string): Language code
- `options` (object): Intl.NumberFormat options

**Returns:** Formatted number string

---

##### addTranslation(componentName, language, translations)

Add or update translations for component.

```javascript
manager.addTranslation('button', 'pt', {
  name: 'Botão',
  description: 'Um componente de botão'
});
```

**Parameters:**
- `componentName` (string): Component identifier
- `language` (string): Language code
- `translations` (object): Key-value translation pairs

**Throws:** Error if component or language not found

---

##### exportTranslations(format)

Export all translations in specified format.

```javascript
const json = manager.exportTranslations('json');
const csv = manager.exportTranslations('csv');
const xliff = manager.exportTranslations('xliff');
```

**Parameters:**
- `format` (string): Export format (json, csv, xliff)

**Returns:** Serialized translations

**Formats:**
- `json`: JSON object structure
- `csv`: Comma-separated values (Component,Language,Key,Value)
- `xliff`: XLIFF 1.2 XML format for translation tools

---

##### getComponentLanguageMetadata()

Get all components with language metadata.

```javascript
const allMetadata = manager.getComponentLanguageMetadata();
```

**Returns:** Array of component language metadata

---

### Language Detection

The API automatically detects user language from Accept-Language header:

```javascript
// Request header: Accept-Language: es-MX, es;q=0.9, en;q=0.8
const language = manager.detectLanguage(header);
// Returns 'es' or 'es-MX' based on available languages
```

---

## Translation Workflow

### 1. Component Registration

```javascript
manager.registerComponent('card', {
  supportedLanguages: ['en', 'es', 'fr'],
  translations: {
    en: {
      name: 'Card',
      description: 'Container component'
    }
  }
});
```

### 2. Add Translations

```javascript
manager.addTranslation('card', 'es', {
  name: 'Tarjeta',
  description: 'Componente contenedor'
});

manager.addTranslation('card', 'fr', {
  name: 'Carte',
  description: 'Composant conteneur'
});
```

### 3. Retrieve Localized Metadata

```javascript
const spanish = manager.getComponentMetadata('card', 'es');
const french = manager.getComponentMetadata('card', 'fr');
```

### 4. Monitor Translation Completeness

```javascript
const support = manager.getLanguageSupport('card');
console.log(support.languageSupport.es.completeness); // "85%"
```

### 5. Export for External Tools

```javascript
const xliff = manager.exportTranslations('xliff');
// Send to professional translators
```

---

## Implementation Guide

### Backend Setup (Node.js)

```javascript
const ComponentI18nManager = require('./component-i18n-manager');

const i18nManager = new ComponentI18nManager({
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es', 'fr', 'de']
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

// Create express route
app.get('/api/components/:name', (req, res) => {
  const language = i18nManager.detectLanguage(
    req.headers['accept-language'],
    ['en', 'es', 'fr']
  );
  
  const metadata = i18nManager.getComponentMetadata(
    req.params.name,
    language
  );
  
  res.setHeader('Content-Language', language);
  res.json(metadata);
});
```

### Frontend Integration

```javascript
class ComponentI18nAPI {
  constructor(baseURL = '/api') {
    this.baseURL = baseURL;
  }

  async getComponentMetadata(componentName) {
    const response = await fetch(
      `${this.baseURL}/components/${componentName}`,
      {
        headers: {
          'Accept-Language': navigator.language
        }
      }
    );
    return response.json();
  }

  async getAvailableLanguages(componentName) {
    const response = await fetch(
      `${this.baseURL}/components/${componentName}/languages`
    );
    return response.json();
  }
}

// Usage
const api = new ComponentI18nAPI();
const buttonMetadata = await api.getComponentMetadata('button');
console.log(buttonMetadata.name); // Localized component name
```

---

## Examples

### Complete Component with i18n

```json
{
  "name": "modal",
  "defaultLanguage": "en",
  "supportedLanguages": ["en", "es", "fr", "de", "ja"],
  "fallbackLanguage": "en",
  "translations": {
    "en": {
      "name": "Modal",
      "description": "Dialog window overlaid on main content",
      "category": "Overlay",
      "tags": ["dialog", "overlay", "popup"],
      "usage": "Use to display important information",
      "examples": [
        {
          "title": "Basic Modal",
          "description": "Simple dialog",
          "code": "<div class='modal'><h2>Title</h2></div>"
        }
      ]
    },
    "es": {
      "name": "Modal",
      "description": "Ventana de diálogo superpuesta al contenido principal",
      "category": "Superposición",
      "tags": ["diálogo", "superposición", "emergente"],
      "usage": "Use para mostrar información importante",
      "examples": [
        {
          "title": "Modal Básico",
          "description": "Diálogo simple",
          "code": "<div class='modal'><h2>Título</h2></div>"
        }
      ]
    }
  },
  "pluralForms": {
    "en": {
      "one": "{count} modal",
      "other": "{count} modals"
    },
    "es": {
      "one": "{count} modal",
      "other": "{count} modales"
    }
  },
  "dateFormats": {
    "en": { "long": "MMMM d, yyyy" },
    "es": { "long": "d 'de' MMMM 'de' yyyy" }
  },
  "metadata": {
    "author": "UIverse Team",
    "version": "1.0.0",
    "lastUpdated": 1718318400000,
    "completeness": "100.00",
    "status": "approved"
  }
}
```

### Language Detection Flow

```javascript
// User request with Accept-Language header
// GET /api/components/button
// Accept-Language: pt-BR, pt;q=0.9, en;q=0.8

// Server detects language
const language = manager.detectLanguage('pt-BR, pt;q=0.9, en;q=0.8', ['en', 'es', 'pt']);
// Returns 'pt' (closest match)

// Retrieves Portuguese metadata
const metadata = manager.getComponentMetadata('button', 'pt');
```

---

## Best Practices

### 1. Explicit Language Support

Always declare supported languages explicitly:

```javascript
// Good
supportedLanguages: ['en', 'es', 'fr']

// Bad
// Implied languages with only translations present
```

### 2. Maintain Completeness

Aim for 100% translation completeness for production:

```javascript
const support = manager.getLanguageSupport('button');
// Verify completeness >= 90% for each language
```

### 3. Use Quality Placeholders

Use clear placeholders in translatable strings:

```javascript
// Good
"usage": "Click to perform {action}"

// Bad
"usage": "Click to do something"
```

### 4. Document for Translators

Include contextual help for translation teams:

```javascript
contextualHelp: {
  en: {
    "name": "Component name should be 2-5 words",
    "description": "Brief explanation of component purpose"
  }
}
```

### 5. Version Translations Independently

Maintain separate version numbers for i18n updates:

```javascript
metadata: {
  componentVersion: "2.1.0",
  i18nVersion: "1.3.2",
  lastTranslationUpdate: 1718318400000
}
```

### 6. Support Fallback Chain

Always provide fallback language strategy:

```javascript
// Requested → Available
// pt-BR → pt → en (fallback)
// de-AT → de → en (fallback)
```

### 7. Include Cultural Adaptations

Account for regional differences:

```javascript
culturalAdaptations: {
  "de": {
    "colorMeaning": { "red": "stop", "green": "go" },
    "dateFormat": "dd.mm.yyyy"
  },
  "ja": {
    "tonality": "formal",
    "honorifics": true
  }
}
```

### 8. Test All Languages

Ensure translations render correctly:

```javascript
// Test each supported language
manager.getSupportedLanguages().forEach(lang => {
  const metadata = manager.getComponentMetadata('button', lang);
  validateMetadata(metadata);
});
```

---

## Related Documentation

- [Component Schema](./COMPONENT_SCHEMA.md)
- [Content Negotiation](./THEME_CONTENT_NEGOTIATION.md)
- [Theme API](./THEME_API.md)
- [State Management](./STATE_MANAGEMENT.md)

---

## Summary

The Component i18n API provides:

- **10 Supported Languages** with extensible framework
- **Explicit Language Declarations** in metadata
- **Complete Translation Management** system
- **Intelligent Language Detection** and fallback
- **Plural and Formatting Support** per language
- **Cultural Adaptation** capabilities
- **Export Formats** for external tools (JSON, CSV, XLIFF)

This enables true internationalization of component libraries with professional translation workflows.
