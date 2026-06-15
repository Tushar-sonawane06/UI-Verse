# Dark Mode Implementation Guide

## Overview

UI-Verse now features a fully implemented **Dark Mode** with:
- ✅ CSS custom properties for consistent theming
- ✅ localStorage persistence for user preference
- ✅ System preference detection (respects `prefers-color-scheme`)
- ✅ Smooth transitions between light and dark themes
- ✅ Toggle button with visual feedback

## How It Works

### 1. CSS Custom Properties System

All colors are defined as CSS variables in `:root` and `html.dark-mode` selectors:

**Light Mode (Default)**
```css
:root {
  --bg-primary: #f3f4f7;
  --text-primary: #000000;
  --button-bg: #883f12;
  /* ... more variables ... */
}
```

**Dark Mode**
```css
html.dark-mode {
  --bg-primary: #0f172a;
  --text-primary: #e5e7eb;
  --button-bg: #475569;
  /* ... more variables ... */
}
```

### 2. Theme Toggle Script

Located in `script.js`, the `initDarkMode()` function:
- Checks `localStorage` for saved theme preference
- Falls back to system preference via `prefers-color-scheme`
- Applies the `dark-mode` class to `<html>` element
- Syncs toggle button icons and text
- Handles click events to switch themes

### 3. Toggle Button

Located in the navbar on every page:
```html
<button id="darkModeToggle" class="theme-toggle" title="Toggle Theme">
  <i class="fa-solid fa-moon"></i>
</button>
```

## Files Modified

### Core Files
1. **style.css**
   - Added CSS custom properties for light/dark themes
   - Added comprehensive dark mode styles using custom properties
   - Applied to all UI components: buttons, cards, inputs, modals, etc.

2. **script.js**
   - Updated `initDarkMode()` to apply class to `<html>` element
   - Changed from `document.body.classList` to `document.documentElement.classList`
   - Handles both toggle button patterns (`#theme-toggle` and `#darkModeToggle`)

3. **index.html**
   - Removed duplicate inline dark mode code
   - Added reference to `script.js` to load the comprehensive theme manager
   - Toggle button already present in navbar

### Architecture

```
┌─────────────────────────────┐
│     Browser Load Event      │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│  script.js: initDarkMode()  │
│  - Check localStorage       │
│  - Check system preference  │
│  - Apply class to <html>    │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│  CSS Custom Properties      │
│  Applied via <html> class   │
│  All elements get updated   │
└─────────────────────────────┘
```

## CSS Custom Properties

### Color Palette (Light Mode)
```css
--bg-primary: #f3f4f7        /* Main background */
--bg-secondary: #ffffff      /* Secondary background */
--text-primary: #000000      /* Main text */
--text-secondary: #1e1d1d9a  /* Secondary text */
--text-tertiary: #666666     /* Tertiary text */
--card-bg: #ffffff           /* Card backgrounds */
--button-bg: #883f12         /* Button backgrounds */
--input-bg: #ffffff          /* Input field backgrounds */
```

### Color Palette (Dark Mode)
```css
--bg-primary: #0f172a        /* Main background */
--bg-secondary: #1a1f2e      /* Secondary background */
--text-primary: #e5e7eb      /* Main text */
--text-secondary: #cbd5e1    /* Secondary text */
--text-tertiary: #94a3b8     /* Tertiary text */
--card-bg: #1e293b           /* Card backgrounds */
--button-bg: #475569         /* Button backgrounds */
--input-bg: #1e293b          /* Input field backgrounds */
```

## Using Dark Mode in Your Components

When creating new components, use CSS custom properties instead of hardcoded colors:

### ✅ Correct (Using Custom Properties)
```css
.my-card {
  background-color: var(--card-bg);
  color: var(--text-primary);
  border-color: var(--border-color);
  box-shadow: 0 4px 6px var(--card-shadow);
}
```

### ❌ Incorrect (Hardcoded Colors)
```css
.my-card {
  background-color: #ffffff;    /* Hard to theme */
  color: #000000;               /* Not responsive to dark mode */
  border-color: #e5e7eb;        /* Won't change with theme */
}
```

## localStorage Key

Theme preference is stored with key: `theme`
- Value: `"dark"` or `"light"`
- Persists across sessions
- Can be cleared to reset to system preference

```javascript
// Check current theme
localStorage.getItem('theme');

// Set theme
localStorage.setItem('theme', 'dark');

// Clear theme preference
localStorage.removeItem('theme');
```

## System Preference Detection

If user hasn't set a preference, dark mode respects OS/browser settings:

```javascript
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
```

Supported by all modern browsers. Users can still override with the toggle button.

## Browser Support

- ✅ Chrome/Edge 76+
- ✅ Firefox 67+
- ✅ Safari 12.1+
- ✅ Opera 63+

CSS custom properties fallback for older browsers (displays light mode).

## Testing Dark Mode

### Manual Testing
1. Click the moon/sun icon in the navbar
2. Verify all elements change colors smoothly
3. Refresh the page - theme preference should persist
4. Clear localStorage and check system preference is used

### Automated Testing
```bash
npm run a11y:audit  # Check dark mode accessibility
npm run test:visual # Visual regression testing
```

## Accessibility Notes

- ✅ Proper contrast ratios in both modes (WCAG AA+)
- ✅ Smooth transitions (respects `prefers-reduced-motion`)
- ✅ No color-only information conveyance
- ✅ Enhanced contrast mode support (`prefers-contrast: more`)

## Migration Guide

### For Existing Components

If you have components with hardcoded colors:

1. **Identify color usage:**
   ```css
   .component {
     background: #ffffff;  /* Light mode background */
     color: #000000;       /* Light mode text */
   }
   ```

2. **Map to custom properties:**
   ```css
   .component {
     background: var(--card-bg);
     color: var(--text-primary);
   }
   ```

3. **Test in both modes** to ensure proper contrast

## Common Patterns

### Form Inputs
```css
input {
  background-color: var(--input-bg);
  color: var(--input-text);
  border-color: var(--input-border);
}

input:focus {
  border-color: var(--link-color);
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
}
```

### Buttons
```css
button {
  background-color: var(--button-bg);
  color: var(--text-primary);
  border-color: var(--border-color);
}

button:hover {
  background-color: var(--button-hover);
}
```

### Cards
```css
.card {
  background-color: var(--card-bg);
  border-color: var(--card-border);
  color: var(--text-primary);
  box-shadow: 0 4px 6px var(--card-shadow);
}
```

## Future Enhancements

- [ ] Multiple theme options (System, Light, Dark, Auto)
- [ ] Custom theme creator
- [ ] Per-component theme overrides
- [ ] Theme scheduling (auto-switch at sunset)
- [ ] Theme synchronization across tabs

## Support

For issues or suggestions regarding dark mode:
1. Check existing GitHub issues
2. Verify you're using the latest version
3. Test with localStorage cleared
4. Report with browser and OS details

## CSS Variables Glossary

| Variable Name | Light Mode (Hex) | Dark Mode (Hex) |
| :--- | :--- | :--- |
| `--bg-primary` | `#f3f4f7` | `#0f172a` |
| `--bg-secondary` | `#ffffff` | `#1a1f2e` |
| `--text-primary` | `#000000` | `#e5e7eb` |
| `--text-secondary` | `#1e1d1d9a` | `#cbd5e1` |
| `--text-tertiary` | `#666666` | `#94a3b8` |
| `--card-bg` | `#ffffff` | `#1e293b` |
| `--button-bg` | `#883f12` | `#475569` |
| `--input-bg` | `#ffffff` | `#1e293b` |

---

**Dark Mode Implementation Status: ✅ Complete**

Last Updated: 2026-06-13
