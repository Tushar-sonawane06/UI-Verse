# Centralized Design Tokens and Theme Management

UI-Verse now uses a centralized design token system to keep colors, spacing, shadows, radius, and typography values consistent across components.

## What changed

- Design tokens are defined in one place in `js/features/design-tokens.js`.
- Theme application is managed through a single API:
  - `DesignTokens.init()`
  - `DesignTokens.applyTheme(name)`
  - `DesignTokens.getTheme(name)`
  - `DesignTokens.registerTheme(name, config)`
- Theme selection is persisted in localStorage.
- The system respects the user's OS theme preference on first visit.
- Existing legacy theme toggles remain supported through `js/features/theme.js`.

## Available themes

- `light`
- `dark`
- `ocean`
- `forest`
- `system` follows the OS preference

## CSS tokens

The shared token set includes:

- `--bg-primary`
- `--bg-secondary`
- `--text-primary`
- `--text-secondary`
- `--border-primary`
- `--card-bg`
- `--accent`
- `--font-body`
- `--font-heading`
- `--shadow-sm`
- `--shadow-md`
- `--shadow-lg`

Semantic aliases are also exposed, such as:

- `--color-bg`
- `--color-surface`
- `--color-surface-2`
- `--color-text`
- `--color-text-muted`
- `--color-border`
- `--color-accent`

## Demo

Open `components/Theme/demo-theme.html` to preview the theme switcher and token samples.

## Test

Run the theme verification suite:

```bash
npm run theme:test
```
