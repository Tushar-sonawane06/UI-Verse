# Additional Components for the Docs Page

## Overview

To better demonstrate the centralized design token system, the docs page can include a richer set of UI components that automatically inherit theme variables.

These examples help contributors understand:

* How to consume semantic tokens
* How themes behave across component categories
* How spacing and typography tokens scale consistently
* How dark/light/system themes affect layouts

---

# Recommended Component Sections

## 1. Buttons

Demonstrate multiple button variants using semantic tokens.

### Variants

* Primary
* Secondary
* Ghost
* Outline
* Danger
* Success
* Icon Button
* Loading Button

### Example

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
```

### Suggested Token Usage

```css
.btn-primary {
  background: var(--color-accent);
  color: white;
}

.btn-outline {
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text);
}
```

---

# 2. Cards

Cards are ideal for demonstrating shadows, borders, radius, and surface colors.

### Examples

* Profile Card
* Stats Card
* Pricing Card
* Dashboard Widget
* Feature Card

### Suggested Tokens

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
  border-radius: 16px;
}
```

---

# 3. Form Elements

Include a complete form showcase.

### Components

* Text Input
* Textarea
* Select
* Checkbox
* Radio Button
* Toggle Switch
* Range Slider
* File Upload

### Example

```html
<input class="input" type="text" placeholder="Enter your name" />
<select class="input">
  <option>Light</option>
  <option>Dark</option>
</select>
```

### Suggested Tokens

```css
.input {
  background: var(--color-surface-2);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}
```

---

# 4. Navigation Components

Navigation components make theme transitions highly visible.

### Components

* Navbar
* Sidebar
* Tabs
* Breadcrumbs
* Pagination
* Mobile Menu

### Demo Ideas

* Sticky navigation
* Active tab indicators
* Collapsible sidebar
* Responsive navigation drawer

---

# 5. Data Display Components

Useful for dashboard-style demos.

### Components

* Tables
* Charts Placeholder
* Statistics Grid
* Timeline
* Activity Feed
* Progress Bars
* Badges

### Example Table Styling

```css
.table {
  background: var(--color-surface);
  border-color: var(--color-border);
  color: var(--color-text);
}
```

---

# 6. Feedback Components

Show interactive states and accessibility handling.

### Components

* Toast Notifications
* Alerts
* Tooltips
* Modals
* Popovers
* Skeleton Loaders
* Spinners

### Alert Variants

* Info
* Success
* Warning
* Error

---

# 7. Typography Showcase

A dedicated typography section helps validate font tokens.

### Include

* Heading Scale
* Paragraph Styles
* Code Blocks
* Lists
* Blockquotes
* Inline Links

### Example

```html
<h1>Heading One</h1>
<h2>Heading Two</h2>
<p>Body text using body font tokens.</p>
```

### Suggested Tokens

```css
body {
  font-family: var(--font-body);
  color: var(--color-text);
}

h1, h2, h3 {
  font-family: var(--font-heading);
}
```

---

# 8. Theme Comparison Grid

Add a live comparison section.

### Features

* Split-screen preview
* Compare light vs dark
* Compare ocean vs forest
* Real-time token inspector

### Suggested Layout

```html
<div class="theme-grid">
  <div data-theme="light"></div>
  <div data-theme="dark"></div>
  <div data-theme="ocean"></div>
  <div data-theme="forest"></div>
</div>
```

---

# 9. Token Inspector Panel

A developer-focused debugging section.

### Features

* Live CSS variable viewer
* Copy token values
* Search tokens
* Visual color previews
* Shadow previews
* Radius previews

### Example Output

```txt
--color-bg: #0f172a
--color-text: #f8fafc
--shadow-md: 0 10px 25px rgba(0,0,0,0.15)
```

---

# 10. Accessibility Demo

Demonstrate accessibility compliance.

### Include

* Contrast ratio previews
* Focus ring examples
* Keyboard navigation demo
* Reduced motion support
* High contrast mode simulation

### Suggested Tokens

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

---

# 11. Layout Utilities Showcase

Show reusable spacing and layout utilities.

### Include

* Flex utilities
* Grid layouts
* Stack spacing
* Container widths
* Responsive helpers

### Example

```css
.stack-md > * + * {
  margin-top: 1rem;
}
```

---

# 12. Motion & Animation Examples

Show animations adapted to themes.

### Components

* Hover Elevation
* Fade In
* Slide Panels
* Ripple Effect
* Theme Transition Animation

### Suggested Best Practices

* Use subtle transitions
* Respect reduced motion preferences
* Animate opacity and transform only

---

# Suggested Docs Page Structure

```txt
Docs
 ├── Introduction
 ├── Installation
 ├── Theme API
 ├── Token Reference
 ├── Theme Switcher Demo
 ├── Components
 │    ├── Buttons
 │    ├── Cards
 │    ├── Forms
 │    ├── Navigation
 │    ├── Tables
 │    ├── Feedback
 │    └── Typography
 ├── Accessibility
 ├── Custom Theme Creation
 ├── Token Inspector
 └── Best Practices
```

---

# Example Custom Theme Registration

```js
DesignTokens.registerTheme("sunset", {
  colors: {
    bgPrimary: "#1e1b4b",
    bgSecondary: "#312e81",
    textPrimary: "#f8fafc",
    accent: "#f97316"
  }
});
```

---

# Best Practices

## Prefer Semantic Tokens

Use:

```css
background: var(--color-surface);
```

Instead of:

```css
background: var(--bg-secondary);
```

Semantic aliases make future redesigns easier.

---

## Avoid Hardcoded Colors

Avoid:

```css
color: #ffffff;
```

Prefer:

```css
color: var(--color-text);
```

---

## Keep Components Theme Agnostic

Components should never know which theme is active.

Always consume tokens from CSS variables.

---

# Suggested Future Additions

* Theme export/import
* Visual token editor
* Theme marketplace
* Auto-generated token documentation
* Figma token synchronization
* Dynamic brand theming
* CSS variable fallback generator
* Tailwind token bridge
* Design token JSON schema support

---

# Conclusion

Expanding the docs page with real-world themed components makes the design token system easier to understand, easier to test, and more attractive for contributors.

A strong interactive documentation experience also helps ensure visual consistency across the entire UI-Verse ecosystem.
