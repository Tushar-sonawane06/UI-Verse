# UIverse Theme Configuration API

## Overview

The UIverse Theme Configuration API provides a backend-friendly layer for managing component theming across the entire UI library. This API exposes theme data, configuration, and export functionality for integration with backend services, CMS systems, and third-party applications.

## Architecture

### Components

1. **theme-config.json** - Complete theme configuration and metadata
2. **theme-manager.js** - JavaScript API for theme management and export
3. **THEME_API.md** - Backend integration documentation

### Design Principles

- **Backend-Friendly**: Structured JSON for easy REST API integration
- **Format Agnostic**: Support multiple export formats (CSS, SCSS, JSON, Tailwind, CSS-in-JS)
- **Extensible**: Easy to add new themes, palettes, and gradients
- **Documented**: Complete metadata for programmatic discovery

## Configuration Structure

### theme-config.json

```json
{
  "version": "1.0.0",
  "metadata": {
    "name": "UIverse Theme Configuration",
    "description": "...",
    "apiVersion": "1.0.0"
  },
  "themes": {
    "light": { /* theme data */ },
    "dark": { /* theme data */ },
    "neon": { /* theme data */ },
    "highContrast": { /* theme data */ }
  },
  "colorPalettes": { /* color definitions */ },
  "gradients": { /* gradient definitions */ },
  "componentDefaults": { /* component styling defaults */ },
  "breakpoints": { /* responsive breakpoints */ },
  "accessibility": { /* WCAG guidelines */ },
  "exports": { /* export format definitions */ }
}
```

## Theme Structure

Each theme contains:

```json
{
  "id": "light",
  "name": "Light Theme",
  "description": "...",
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
  },
  "typography": {
    "fontHeading": "'Syne', sans-serif",
    "fontBody": "'DM Sans', sans-serif",
    "fontMono": "'Courier New', monospace"
  },
  "spacing": { /* spacing tokens */ },
  "radius": { /* border radius tokens */ },
  "shadows": { /* shadow tokens */ },
  "transitions": { /* transition timings */ }
}
```

## JavaScript API

### Initialization

```javascript
// Auto-load with defaults
const themeManager = new UIVerseThemeManager();

// Custom initialization
const themeManager = new ThemeManager({
  configUrl: '/api/themes/config.json',
  storageKey: 'app-theme',
  autoLoad: true,
  onThemeChange: (theme) => {
    console.log('Theme changed to:', theme.name);
  }
});
```

### Core Methods

#### getTheme(themeId)

```javascript
const theme = UIVerseThemeManager.getTheme('dark');
// Returns: { id: 'dark', name: 'Dark Theme', colors: {...}, ... }
```

#### getAllThemes()

```javascript
const themes = UIVerseThemeManager.getAllThemes();
// Returns: { light: {...}, dark: {...}, neon: {...}, ... }
```

#### getThemeIds()

```javascript
const ids = UIVerseThemeManager.getThemeIds();
// Returns: ['light', 'dark', 'neon', 'highContrast']
```

#### setTheme(themeId, persist)

```javascript
// Set theme and save preference
UIVerseThemeManager.setTheme('dark', true);

// Set theme without persisting
UIVerseThemeManager.setTheme('neon', false);
```

#### getCurrentTheme()

```javascript
const current = UIVerseThemeManager.getCurrentTheme();
// Returns: { id: 'light', name: 'Light Theme', colors: {...}, ... }
```

### Export Methods

#### exportTheme(themeId, format)

Export theme in various formats for backend integration.

**Supported Formats:**

- `json` - JSON object (default)
- `css` or `css-variables` - CSS custom properties
- `scss` - SCSS variables
- `tailwind` - Tailwind CSS configuration
- `css-in-js` - JavaScript object format

**Examples:**

```javascript
// Export as JSON
const jsonTheme = UIVerseThemeManager.exportTheme('dark', 'json');

// Export as CSS variables
const cssTheme = UIVerseThemeManager.exportTheme('dark', 'css');
// Output:
// :root {
//   --primary: #6c5ce7;
//   --secondary: #00cec9;
//   ...
// }

// Export as SCSS
const scssTheme = UIVerseThemeManager.exportTheme('dark', 'scss');

// Export as Tailwind config
const tailwindTheme = UIVerseThemeManager.exportTheme('dark', 'tailwind');
```

### Color Palette Methods

#### getColorPalette(paletteId)

```javascript
const palette = UIVerseThemeManager.getColorPalette('primary');
// Returns: {
//   name: 'Primary Colors',
//   colors: [
//     { name: 'Red', hex: '#ff6b6b' },
//     { name: 'Purple', hex: '#6c5ce7' },
//     ...
//   ]
// }
```

#### getAllColorPalettes()

```javascript
const palettes = UIVerseThemeManager.getAllColorPalettes();
// Returns: { primary: {...}, neutral: {...}, neon: {...}, ... }
```

### Component Methods

#### getComponentDefaults(componentType)

```javascript
const buttonDefaults = UIVerseThemeManager.getComponentDefaults('button');
// Returns: {
//   borderRadius: '8px',
//   padding: '12px 24px',
//   fontSize: '14px',
//   fontWeight: '600'
// }

// Available component types:
// button, card, input, badge, navbar, sidebar
```

### Utility Methods

#### subscribe(callback)

Listen for theme changes across browser tabs/windows.

```javascript
const unsubscribe = UIVerseThemeManager.subscribe((theme) => {
  console.log('New theme:', theme.name);
  updateUI();
});

// Unsubscribe when done
unsubscribe();
```

#### getBreakpoints()

```javascript
const breakpoints = UIVerseThemeManager.getBreakpoints();
// Returns: { xs: '320px', sm: '640px', md: '768px', lg: '1024px', ... }
```

#### getAccessibilityGuidelines()

```javascript
const a11y = UIVerseThemeManager.getAccessibilityGuidelines();
// Returns: {
//   focusOutlineWidth: '2px',
//   focusOutlineColor: '#0000ee',
//   minTouchTarget: '44px',
//   minContrastRatio: 4.5
// }
```

#### validateTheme(theme)

```javascript
const result = UIVerseThemeManager.validateTheme(customTheme);
// Returns: { valid: true, errors: [] }
// or: { valid: false, errors: ['Missing required field: id'] }
```

#### getStatistics()

```javascript
const stats = UIVerseThemeManager.getStatistics();
// Returns: {
//   totalThemes: 4,
//   totalPalettes: 4,
//   totalGradients: 4,
//   currentTheme: 'dark',
//   supportedFormats: 5
// }
```

## REST API Specification

### Base Path

```
/api/themes
```

### Endpoints

#### GET /api/themes

Get all available themes.

**Response:**
```json
{
  "themes": [
    {
      "id": "light",
      "name": "Light Theme",
      "description": "...",
      "isDark": false
    },
    {
      "id": "dark",
      "name": "Dark Theme",
      "isDark": true
    }
  ],
  "count": 4,
  "total": 4
}
```

#### GET /api/themes/:id

Get specific theme by ID.

**Parameters:**
- `id` (string, required) - Theme identifier

**Response:**
```json
{
  "id": "dark",
  "name": "Dark Theme",
  "description": "...",
  "isDark": true,
  "colors": {
    "primary": "#6c5ce7",
    "secondary": "#00cec9",
    ...
  },
  "typography": {...},
  "spacing": {...}
}
```

#### GET /api/themes/:id/export

Export theme in specified format.

**Parameters:**
- `id` (string, required) - Theme identifier
- `format` (string, query param) - Export format (json, css, scss, tailwind, css-in-js)

**Example Request:**
```
GET /api/themes/dark/export?format=css
```

**Response (format=css):**
```css
:root {
  --primary: #6c5ce7;
  --secondary: #00cec9;
  --accent: #ff8c42;
  ...
}
```

**Response (format=json):**
```json
{
  "id": "dark",
  "name": "Dark Theme",
  "colors": {...}
}
```

#### GET /api/themes/config

Get complete theme configuration with metadata.

**Response:**
```json
{
  "version": "1.0.0",
  "metadata": {...},
  "themes": {...},
  "colorPalettes": {...},
  "gradients": {...},
  "componentDefaults": {...},
  "breakpoints": {...},
  "accessibility": {...}
}
```

#### GET /api/palettes

Get all color palettes.

**Response:**
```json
{
  "palettes": [
    {
      "id": "primary",
      "name": "Primary Colors",
      "colors": [
        { "name": "Red", "hex": "#ff6b6b" },
        ...
      ]
    },
    {
      "id": "neutral",
      "name": "Neutral Colors",
      "colors": [...]
    }
  ],
  "count": 4
}
```

#### GET /api/palettes/:id

Get specific color palette.

**Parameters:**
- `id` (string, required) - Palette identifier

**Response:**
```json
{
  "id": "primary",
  "name": "Primary Colors",
  "colors": [
    { "name": "Red", "hex": "#ff6b6b" },
    { "name": "Purple", "hex": "#6c5ce7" },
    ...
  ]
}
```

#### GET /api/gradients

Get all gradients.

**Response:**
```json
{
  "gradients": [
    {
      "id": "redToPurple",
      "name": "Red to Purple",
      "value": "linear-gradient(135deg, #ff6b6b 0%, #6c5ce7 100%)"
    },
    ...
  ],
  "count": 4
}
```

#### GET /api/components/:type

Get component default styles.

**Parameters:**
- `type` (string, required) - Component type (button, card, input, badge, navbar, sidebar)

**Response:**
```json
{
  "type": "button",
  "defaults": {
    "borderRadius": "8px",
    "padding": "12px 24px",
    "fontSize": "14px",
    "fontWeight": "600",
    "transition": "0.25s cubic-bezier(0.4, 0, 0.2, 1)"
  }
}
```

#### GET /api/breakpoints

Get responsive breakpoints.

**Response:**
```json
{
  "breakpoints": {
    "xs": "320px",
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px"
  }
}
```

#### GET /api/accessibility

Get WCAG accessibility guidelines.

**Response:**
```json
{
  "accessibility": {
    "focusOutlineWidth": "2px",
    "focusOutlineColor": "#0000ee",
    "focusOutlineOffset": "2px",
    "minTouchTarget": "44px",
    "minContrastRatio": 4.5
  }
}
```

## Frontend Integration Examples

### Example 1: Theme Switcher Component

```javascript
// Initialize theme manager
UIVerseThemeManager.loadConfig();

// Get all available themes
const themes = UIVerseThemeManager.getThemeIds();

// Create theme switcher
const themeSwitcher = document.createElement('select');
themes.forEach(themeId => {
  const theme = UIVerseThemeManager.getTheme(themeId);
  const option = document.createElement('option');
  option.value = themeId;
  option.textContent = theme.name;
  themeSwitcher.appendChild(option);
});

// Handle theme selection
themeSwitcher.addEventListener('change', (e) => {
  UIVerseThemeManager.setTheme(e.target.value);
});

// React to theme changes
UIVerseThemeManager.subscribe((theme) => {
  console.log('Applied theme:', theme.name);
});
```

### Example 2: Dynamic Component Styling

```javascript
// Get button component defaults
const buttonDefaults = UIVerseThemeManager.getComponentDefaults('button');

// Apply to CSS
const style = document.createElement('style');
style.textContent = `
  .uiverse-button {
    border-radius: ${buttonDefaults.borderRadius};
    padding: ${buttonDefaults.padding};
    font-size: ${buttonDefaults.fontSize};
    font-weight: ${buttonDefaults.fontWeight};
    transition: ${buttonDefaults.transition};
  }
`;
document.head.appendChild(style);
```

### Example 3: Export Theme Configuration

```javascript
// Export current theme as JSON
const currentTheme = UIVerseThemeManager.getCurrentTheme();
const themeJSON = UIVerseThemeManager.exportTheme(currentTheme.id, 'json');

// Send to backend
fetch('/api/themes/current', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: themeJSON
});

// Export as CSS for inclusion in HTML
const themeCSS = UIVerseThemeManager.exportTheme(currentTheme.id, 'css');
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'data:text/css;charset=utf-8,' + encodeURIComponent(themeCSS);
document.head.appendChild(link);
```

### Example 4: Color Palette Usage

```javascript
// Get primary color palette
const palette = UIVerseThemeManager.getColorPalette('primary');

// Create color swatches
palette.colors.forEach(color => {
  const swatch = document.createElement('div');
  swatch.style.backgroundColor = color.hex;
  swatch.title = color.name;
  document.body.appendChild(swatch);
});
```

## Backend Integration Guide

### Node.js/Express Example

```javascript
const express = require('express');
const fs = require('fs');
const app = express();

// Load theme config
const themeConfig = JSON.parse(fs.readFileSync('theme-config.json'));

// GET /api/themes
app.get('/api/themes', (req, res) => {
  const themes = Object.values(themeConfig.themes).map(t => ({
    id: t.id,
    name: t.name,
    description: t.description,
    isDark: t.isDark
  }));
  res.json({ themes, count: themes.length });
});

// GET /api/themes/:id
app.get('/api/themes/:id', (req, res) => {
  const theme = themeConfig.themes[req.params.id];
  if (!theme) return res.status(404).json({ error: 'Theme not found' });
  res.json(theme);
});

// GET /api/themes/:id/export?format=css
app.get('/api/themes/:id/export', (req, res) => {
  const theme = themeConfig.themes[req.params.id];
  if (!theme) return res.status(404).json({ error: 'Theme not found' });
  
  const format = req.query.format || 'json';
  
  switch (format) {
    case 'css':
      res.type('text/css').send(generateCSS(theme));
      break;
    case 'json':
      res.json(theme);
      break;
    default:
      res.json(theme);
  }
});

// GET /api/palettes
app.get('/api/palettes', (req, res) => {
  const palettes = Object.values(themeConfig.colorPalettes);
  res.json({ palettes, count: palettes.length });
});

app.listen(3000);
```

## Best Practices

1. **Cache Configuration** - Load theme-config.json once and cache it
2. **Validation** - Validate custom themes using `validateTheme()` before applying
3. **Persistence** - Use localStorage to save user theme preference
4. **Performance** - Debounce theme change listeners to avoid excessive repaints
5. **Accessibility** - Use high contrast theme for users with visual impairments
6. **Export Formats** - Choose appropriate format for your backend/framework
7. **Documentation** - Keep API documentation in sync with config changes

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-06-11 | Initial theme configuration API with 4 themes and export support |

## Related Documentation

- `manifest.json` - Component registry manifest
- `component-dependencies.json` - Component dependency graph
- `STATE_MANAGEMENT.md` - State management protocol
- `DEPENDENCIES.md` - Component dependencies

