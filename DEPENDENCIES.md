# Component Dependencies Documentation

## Overview

This document provides explicit documentation of all component dependencies, including CSS files, JavaScript utilities, and shared resources required for each component to function correctly.

## Global Dependencies

These files are required by the entire project and should be included on every page.

### Essential CSS Files
- **style.css** - Main stylesheet with base styling, CSS variables, and utility classes
- **playground.css** - Playground-specific styling for component preview areas

### Essential JavaScript Files
- **script.js** - Core JavaScript utilities for interactivity, dark mode, sidebar toggle, and copy-to-clipboard functionality

### Optional CSS Files
- **privacy.css** - Styling for privacy policy page
- **playground.css** - Styling for interactive playground components

---

## Category-Specific Dependencies

### 🔘 Buttons Category

**Page:** `button.html`

**Required Files:**
```
CSS:
  - style.css (base)
  - buttons.css (component-specific)

JavaScript:
  - script.js (for dark mode toggle)
```

**Shared Utilities Used:**
- `btn-base` - Base button styling
- `btn-gradient` - Gradient background effect
- `btn-outline` - Outline style variant
- `btn-hover-effects` - Hover animation utilities
- `btn-sizes` - Size variation classes (small, medium, large)
- `btn-states` - Active/disabled/focus states

**Component List:**
1. Gradient Button
2. Outline Button
3. Solid Button
4. Text Button
5. Icon Button
6. Raised Button
7. Flat Button
8. Rounded Button
9. Pill Button
10. Floating Button
11. Split Button
12. Toggle Button
13. Pulse Button
14. Glow Button
15. Shadow Button
16. Glass Button
17. Neon Button
18. Gradient Hover Button
19. Border Button
20. Animated Button
21. Ripple Button
22. Shine Button
23. Arrow Button
24. Download Button

**Component-Specific Dependencies:**
- Gradient Button: `buttons.css` (gradient utilities)
- Icon Button: Font Awesome icons via CDN link in HTML
- Toggle Button: `script.js` (toggle state handler)
- Animated Button: CSS animations in `buttons.css`

---

### ☰ Navbars Category

**Page:** `Navbar.html`

**Required Files:**
```
CSS:
  - style.css (base)
  - navbar.css (navbar-specific)

JavaScript:
  - script.js (sidebar toggle, dark mode)
```

**Shared Utilities Used:**
- `nav-base` - Base navbar styling and layout
- `nav-flex` - Flexbox layout utilities
- `nav-sticky` - Sticky positioning utilities
- `nav-responsive` - Mobile responsiveness
- `nav-animations` - Transition and animation effects
- `glass-effect` - Glassmorphism blur effect

**Component List:**
1. Glass Navbar
2. Sticky Navbar
3. Responsive Navbar
4. Hamburger Navbar
5. Centered Navbar
6. Gradient Navbar
7. Transparent Navbar
8. Dark Navbar
9. Light Navbar
10. Animated Navbar
11. Mega Navbar
12. Minimal Navbar

**Component-Specific Dependencies:**
- Glass Navbar: Backdrop blur CSS (navbar.css)
- Sticky Navbar: `script.js` (scroll event handler)
- Hamburger Navbar: `script.js` (toggleSidebar function)
- Animated Navbar: CSS keyframe animations
- Mega Navbar: Dropdown menu styling and `script.js` for dropdown toggle

---

### 🃏 Cards Category

**Page:** `cards.html`

**Required Files:**
```
CSS:
  - style.css (base)
  - cards.css (card-specific)

JavaScript:
  - script.js (interactive features)
```

**Shared Utilities Used:**
- `card-base` - Card layout and container
- `card-shadow` - Box shadow effects
- `card-hover` - Hover state animations
- `card-grid` - Grid layout for multiple cards
- `card-image` - Image styling within cards
- `card-content` - Text content spacing

**Component List:**
1. Basic Card
2. Hover Card
3. Image Card
4. Shadow Card
5. Glass Card
6. Gradient Card
7. Profile Card
8. Pricing Card
9. Testimonial Card
10. Feature Card
11. Team Card
12. Blog Card
13. Product Card
14. Flat Card
15. Bordered Card
16. Animated Card
17. Overlay Card
18. Flip Card

**Component-Specific Dependencies:**
- Hover Card: CSS transitions in cards.css
- Profile Card: Avatar/image styling
- Pricing Card: Button styling (buttons.css utilities)
- Flip Card: 3D transforms and `script.js` (click handler)
- Animated Card: CSS keyframe animations
- Overlay Card: Absolute positioning and overlay styling

---

### ⌨️ Inputs Category

**Page:** `inputs.html`

**Required Files:**
```
CSS:
  - style.css (base)

JavaScript:
  - script.js (validation, event handling)
```

**Shared Utilities Used:**
- `input-base` - Base input field styling
- `input-focus` - Focus state styling
- `input-states` - Disabled/active/error states
- `input-sizes` - Size variations
- `input-colors` - Color scheme variants
- `input-icons` - Icon input styling
- `input-validation` - Validation styling

**Component List:**
1. Text Input
2. Search Input
3. Email Input
4. Password Input
5. Number Input
6. Range Input
7. Checkbox
8. Radio Button
9. Toggle Switch
10. Select Dropdown
11. Textarea
12. File Input
13. Color Input
14. Date Input
15. Time Input
16. Floating Label Input
17. Icon Input
18. Animated Input
19. Focus Input
20. Disabled Input

**Component-Specific Dependencies:**
- Search Input: Icon styling, optional clear button
- Email Input: Input validation (HTML5 + optional JavaScript)
- Password Input: Show/hide password toggle
- Toggle Switch: `script.js` (state management)
- Select Dropdown: `script.js` (dropdown handler)
- File Input: Custom file input styling
- Color Input: HTML5 color picker
- Floating Label Input: CSS transitions for label movement
- Icon Input: Font Awesome or inline SVG icons

---

### 📋 Forms Category

**Page:** `form.html`, `forms.html`

**Required Files:**
```
CSS:
  - style.css (base)
  - contact.css (form-specific)

JavaScript:
  - script.js (form validation, submission)
```

**Shared Utilities Used:**
- `form-base` - Form container and layout
- `form-group` - Form field grouping
- `input-group` - Input field grouping with labels
- `form-spacing` - Margin and padding utilities
- `form-grid` - Multi-column form layouts
- `form-validation` - Validation message styling
- `form-buttons` - Form button styling

**Component List:**
1. Contact Form
2. Login Form
3. Signup Form
4. Newsletter Form
5. Feedback Form
6. Payment Form
7. Search Form
8. Filter Form
9. Multi-Step Form
10. Subscription Form

**Component-Specific Dependencies:**
- Contact Form: Multiple input types, styling from contact.css
- Login Form: Email and password inputs, authentication button
- Signup Form: Password validation, terms acceptance checkbox
- Newsletter Form: Email input, subscribe button
- Feedback Form: Textarea, rating component (if included)
- Payment Form: Sensitive input styling, encryption messaging
- Multi-Step Form: `script.js` (step navigation and validation)
- Filter Form: Dropdown and checkbox components

---

### 🏅 Badges Category

**Page:** `badges.html`

**Required Files:**
```
CSS:
  - style.css (base)

JavaScript:
  - (none required - static components)
```

**Shared Utilities Used:**
- `badge-base` - Base badge styling
- `badge-colors` - Color variants
- `badge-sizes` - Size variations
- `badge-shapes` - Shape variations (rounded, pill, etc.)
- `status-colors` - Success, warning, error, info colors

**Component List:**
1. Status Badge
2. Tag Label
3. Notification Badge
4. Achievement Badge
5. Ribbon Badge
6. Pill Badge
7. Rounded Badge
8. Gradient Badge
9. Animated Badge
10. Counter Badge
11. Icon Badge
12. Outline Badge
13. Flat Badge
14. Premium Badge
15. Verified Badge

**Component-Specific Dependencies:**
- Status Badge: Color utilities for success/warning/danger
- Icon Badge: Font Awesome or inline SVG icons
- Animated Badge: CSS animations
- Counter Badge: Numeric display styling
- Ribbon Badge: Absolute positioning styling
- Gradient Badge: Gradient background utilities
- Premium Badge: Special styling for premium status

---

### 🎨 Colors Category

**Page:** `color.html`

**Required Files:**
```
CSS:
  - style.css (base)

JavaScript:
  - (none required - reference only)
```

**Shared Utilities Used:**
- `color-base` - Base color variables
- `color-palette` - CSS color definitions
- `status-colors` - Semantic colors (success, warning, error, info)
- `gradient-colors` - Gradient combinations

**Component List:**
1. Color Palette
2. Theme Colors
3. Grayscale Palette
4. Vibrant Palette
5. Pastel Palette
6. Dark Palette
7. Gradient Palette
8. CSS Variables

**Component-Specific Dependencies:**
- Theme Colors: CSS custom properties (--color-primary, --color-secondary, etc.)
- Gradient Palette: Background gradient values
- Dark Palette: Dark mode color scheme

---

### 📄 Footers Category

**Page:** `footer.html`

**Required Files:**
```
CSS:
  - style.css (base)

JavaScript:
  - script.js (newsletter subscription, links)
```

**Shared Utilities Used:**
- `footer-base` - Footer layout and styling
- `footer-grid` - Multi-column footer grid
- `footer-links` - Link styling
- `social-icons` - Social media icon styling
- `newsletter-form` - Newsletter signup form styling

**Component List:**
1. Basic Footer
2. Advanced Footer
3. Minimal Footer
4. Dark Footer
5. Centered Footer
6. Newsletter Footer
7. Social Footer
8. Link Footer
9. Contact Footer

**Component-Specific Dependencies:**
- Basic Footer: Simple link layout
- Advanced Footer: Grid layout, newsletter form, social icons
- Newsletter Footer: Form input and button styling, `script.js` (subscribe handler)
- Social Footer: Font Awesome social icons
- Contact Footer: Contact information display

---

### ⚡ Loaders Category

**Page:** `loaders.html`

**Required Files:**
```
CSS:
  - style.css (base)

JavaScript:
  - (none required - CSS animations only)
```

**Shared Utilities Used:**
- `loader-base` - Base loader container styling
- `animation-spin` - Rotation animation keyframes
- `animation-pulse` - Pulsing animation keyframes
- `animation-bounce` - Bounce animation keyframes
- `animation-wave` - Wave animation keyframes
- `animation-flip` - Flip animation keyframes

**Component List:**
1. Spinner Loader
2. Progress Bar
3. Skeleton Loader
4. Pulse Loader
5. Wave Loader
6. Dots Loader
7. Ring Loader
8. Bounce Loader
9. Flip Loader
10. Grid Loader
11. Heartbeat Loader
12. Rotate Loader

**Component-Specific Dependencies:**
- Spinner Loader: CSS rotation animation
- Progress Bar: Progress animation, optional JavaScript for dynamic updates
- Skeleton Loader: Block layout with pulse animation
- Wave Loader: Wave-pattern animation
- Bounce Loader: Multi-element bounce animation
- Flip Loader: 3D flip animation using CSS transforms

---

## Shared Utility Functions

### JavaScript Utilities (from `script.js`)

1. **toggleSidebar()** - Toggle sidebar visibility
   - Used in: Navbars, responsive layouts
   - DOM manipulation, event handling

2. **toggleDarkMode()** - Toggle dark/light theme
   - Used in: All pages with dark mode toggle
   - LocalStorage management, class manipulation

3. **copyToClipboard(text)** - Copy text to clipboard
   - Used in: Component preview areas
   - Clipboard API, fallback for older browsers

4. **handleSearch(event)** - Handle component search
   - Used in: Search input, navbar
   - Event handling, filtering

5. **subscribe()** - Newsletter subscription handler
   - Used in: Footer newsletter forms
   - Form validation, API call (if applicable)

6. **scrollToTop()** - Smooth scroll to top
   - Used in: Scroll-to-top button
   - Window scroll management

7. **toggleCode(id)** - Toggle code block visibility
   - Used in: Component pages for code preview
   - DOM manipulation

---

## Dependency Matrix

| Component | style.css | buttons.css | navbar.css | cards.css | contact.css | script.js | Font Awesome |
|-----------|-----------|------------|-----------|-----------|------------|-----------|--------------|
| Buttons | ✓ | ✓ | - | - | - | ✓ | ✓ |
| Navbars | ✓ | - | ✓ | - | - | ✓ | ✓ |
| Cards | ✓ | - | - | ✓ | - | ✓ | - |
| Inputs | ✓ | - | - | - | - | ✓ | - |
| Forms | ✓ | - | - | - | ✓ | ✓ | - |
| Badges | ✓ | - | - | - | - | - | ✓ |
| Colors | ✓ | - | - | - | - | - | - |
| Footers | ✓ | - | - | - | - | ✓ | ✓ |
| Loaders | ✓ | - | - | - | - | - | - |

---

## CDN Dependencies

### Font Awesome Icons
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```
**Used by:** Buttons, Navbars, Badges, Footers, Inputs (icons)

### Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```
**Used by:** All pages (typography)

---

## Breaking Down Component Installation

### Minimal Installation (Single Component)
To use a single component, include:
1. The HTML markup from the component file
2. All files listed in "Required Files" section
3. Shared utilities listed under that component category

### Example: Installing Gradient Button
```html
<!-- Include CSS -->
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="buttons.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Include JavaScript -->
<script src="script.js"></script>

<!-- Copy component HTML from button.html -->
<!-- Gradient Button markup here -->
```

---

## Adding New Components

When adding a new component, document:
1. **Category** - Which category does it belong to?
2. **Required CSS files** - Which CSS files must be included?
3. **Required JavaScript** - Which JavaScript utilities are needed?
4. **Shared utilities** - Which shared utilities does it use?
5. **Dependencies** - Does it depend on other components?
6. **External libraries** - Does it need Font Awesome, Google Fonts, etc.?

---

## Versioning

This documentation tracks dependencies for UIverse v2.0.0

**Last Updated:** June 11, 2026

---

## Notes

- All components are designed to work with vanilla JavaScript (no framework required)
- No external build tools or bundlers are needed
- All components are responsive by default
- Dark mode support is available globally via CSS variables
- Component styling can be customized by overriding CSS variables
