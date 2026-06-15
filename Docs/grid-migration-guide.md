# Grid and Breakpoint System Migration Guide

This guide explains the redesigned responsive layout grid system in UI-Verse, detailing the utility classes available in `grid-utilities.css` and how to migrate legacy grids.

## Overview

The layout system has been overhauled to use a centralized responsive CSS Grid with a robust Flexbox fallback. All responsive breakpoints are centralized as design tokens under CSS Custom Properties:

- `--breakpoint-sm`: `640px` (Mobile viewports)
- `--breakpoint-md`: `768px` (Tablet threshold)
- `--breakpoint-lg`: `1024px` (Laptop/Tablet landscape)
- `--breakpoint-xl`: `1280px` (Desktop viewports)

## Utility Classes

The `grid-utilities.css` stylesheet introduces a set of standard classes:

### 1. Grid Container
- `.grid`: Declares a responsive grid container. In legacy browsers, it automatically falls back to a flexbox container with wrapping enabled.

### 2. Gaps
- `.gap-sm`: Small gap (12px)
- `.gap-md`: Medium gap (20px)
- `.gap-lg`: Large gap (24px)

### 3. Grid Columns
- `.grid-cols-1`: 1 column
- `.grid-cols-2`: 2 columns
- `.grid-cols-3`: 3 columns (collapses to 2 on tablets, 1 on mobile)
- `.grid-cols-4`: 4 columns (collapses to 2 on tablets, 1 on mobile)
- `.grid-cols-12`: 12 columns (collapses to 6 on tablets, 1 on mobile)

### 4. Spanning Classes
- `.col-span-[1-12]`: Spans across `n` grid columns. Automatically collapses to `1` column on mobile screens.
- `.row-span-[1-4]`: Spans across `n` grid rows. Automatically collapses to `1` row on mobile screens.

---

## Migration Example

### Legacy Code
Previously, page layouts hardcoded templates and media query overrides directly:

```html
<!-- HTML -->
<div class="bento-grid" id="bento-container">
  <div class="bento-card dashboard-card">...</div>
</div>
```

```css
/* CSS */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.dashboard-card {
  grid-column: span 2;
  grid-row: span 2;
}
@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .dashboard-card {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```

### Migrated Code
With the new utility system, all layout configurations are declared directly in the HTML via classes:

```html
<link rel="stylesheet" href="design-tokens.css">
<link rel="stylesheet" href="grid-utilities.css">

<div class="grid grid-cols-4 gap-lg bento-grid" id="bento-container">
  <div class="bento-card dashboard-card col-span-2 row-span-2">...</div>
</div>
```

The component stylesheet only handles visual aesthetics, not layout sizing and templates.
