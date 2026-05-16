<!-- UIverse JavaScript Architecture Documentation -->

# UIverse Modular JavaScript Architecture

## Overview
This document describes the new modular JavaScript architecture for UIverse. The refactoring transforms the codebase from a monolithic `script.js` (401 lines with 20+ mixed functions) to a modular architecture with focused feature modules and zero naming conflicts.

## Directory Structure

```
js/
├── core/
│   └── utils.js           # Shared utilities (showToast, getElement, addEventListener)
├── features/
│   ├── toast.js           # Toast notifications
│   ├── popup.js           # Modal popup management
│   ├── code-tools.js      # Code copying, toggling, color picking
│   ├── sidebar.js         # Navigation sidebar
│   ├── search.js          # Component search and routing
│   ├── theme.js           # Dark mode toggle and persistence
│   ├── scroll.js          # Scroll-to-top button and progress bar
│   ├── alerts.js          # Alert closing and subscriptions
│   └── sandbox.js         # Live code preview iframes
└── bootstrap.js           # Main entry point that initializes all features
```

## Feature Modules

### js/core/utils.js
**Purpose**: Shared utilities used across all feature modules

**Exports**:
- `showToast(message)` - Display temporary toast notifications
- `getElement(id)` - Safe element retrieval with null check
- `addEventListener(selector, event, handler)` - Safe event listener attachment

### js/features/toast.js
**Purpose**: Toast notification management

**API**:
- `Toast.show(message)` - Show a toast notification
- `Toast.init()` - Initialize toast feature
- Global: `window.Toast` exposed via bootstrap

### js/features/popup.js
**Purpose**: Modal popup control

**API**:
- `Popup.open()` - Open the popup
- `Popup.close()` - Close the popup
- `Popup.init()` - Initialize popup feature
- Global: `window.openPopup()`, `window.closePopup()` for backward compatibility

### js/features/code-tools.js
**Purpose**: Code block operations (view, toggle, copy, color picker)

**API**:
- `CodeTools.toggleCode(id)` - Toggle code block visibility
- `CodeTools.copyCode(id, btn)` - Copy code to clipboard with feedback
- `CodeTools.copyColor(color)` - Copy color value to clipboard
- `CodeTools.copyRGB(value)` - Copy RGB value to clipboard
- `CodeTools.init()` - Initialize code tools
- Global: `window.toggleCode()`, `window.copyCode()`, `window.copyColor()`, `window.copyRGB()`

### js/features/sidebar.js
**Purpose**: Sidebar navigation and state management

**API**:
- `Sidebar.toggle()` - Toggle sidebar open/closed
- `Sidebar.updateActiveLink()` - Highlight current page link
- `Sidebar.restoreState()` - Restore sidebar state from sessionStorage
- `Sidebar.initLinkClose()` - Close sidebar on link click (mobile)
- `Sidebar.toggleMenu()` - Alternative toggle for backward compatibility
- `Sidebar.init()` - Initialize sidebar
- Global: `window.toggleSidebar()`, `window.toggleMenu()`

### js/features/search.js
**Purpose**: Component search/filtering and page routing

**API**:
- `Search.routes` - Object mapping component names to pages
- `Search.initFilter()` - Initialize inline component filtering
- `Search.handleRouting(event)` - Handle Enter key navigation
- `Search.init()` - Initialize search feature
- Global: `window.handleSearch()`

### js/features/theme.js
**Purpose**: Dark mode toggle and localStorage persistence

**API**:
- `Theme.load()` - Load and apply saved theme
- `Theme.init()` - Initialize theme feature with event listeners
- Respects `prefers-color-scheme` on first visit
- Persists to `localStorage.theme`

### js/features/scroll.js
**Purpose**: Scroll-to-top button and progress bar

**API**:
- `Scroll.initTopButton()` - Initialize scroll-to-top button
- `Scroll.initProgressBar()` - Initialize scroll progress bar
- `Scroll.init()` - Initialize both scroll features
- Global: `window.scrollToTop()`

### js/features/alerts.js
**Purpose**: Alert closing and newsletter subscription

**API**:
- `Alerts.close(alertId)` - Close an alert by ID
- `Alerts.subscribe(e)` - Handle subscription submission
- `Alerts.init()` - Initialize alerts
- Global: `window.closeAlert()`, `window.subscribe()`

### js/features/sandbox.js
**Purpose**: Live code preview iframes with editable textareas

**API**:
- `Sandbox.init()` - Set up live preview iframes for component cards
- Features: Live editing with 300ms debounce, automatic iframe rendering
- No global exposure (purely DOM-based)

## Bootstrap Entry Point (js/bootstrap.js)

**Purpose**: Orchestrates initialization of all features

**Process**:
1. Checks DOM readiness on `DOMContentLoaded` event
2. Initializes core utilities
3. Conditionally initializes each feature if required DOM elements exist
4. Exposes `window.UIverseBootstrap` for debugging

**Safety Guards**:
- Each feature checks for its required DOM elements before initialization
- Gracefully skips initialization if elements don't exist
- No errors thrown for missing features on specific pages

## Backward Compatibility

All global functions from the original `script.js` are preserved:
- `toggleCode(id)`, `copyCode(id, btn)`, `copyColor(color)`, `copyRGB(value)`
- `toggleSidebar()`, `toggleMenu()`
- `openPopup()`, `closePopup()`
- `closeAlert(alertId)`, `subscribe(e)`
- `scrollToTop()`

These are exposed through each feature's `init()` method and remain available for existing inline `onclick` handlers in HTML.

## HTML Integration

Each HTML file includes all modular scripts in the head:

```html
<!-- UIverse Modular Scripts -->
<script src="js/core/utils.js"></script>
<script src="js/features/toast.js"></script>
<script src="js/features/popup.js"></script>
<script src="js/features/code-tools.js"></script>
<script src="js/features/sidebar.js"></script>
<script src="js/features/search.js"></script>
<script src="js/features/theme.js"></script>
<script src="js/features/scroll.js"></script>
<script src="js/features/alerts.js"></script>
<script src="js/features/sandbox.js"></script>
<script src="js/bootstrap.js"></script>
```

## Performance Characteristics

- **Parallel Loading**: All scripts load in parallel (small individual files)
- **Lazy Initialization**: Features only initialize if required DOM elements exist
- **No Conflicts**: Single responsibility principle prevents naming collisions
- **Minimal Overhead**: Bootstrap adds <1KB of orchestration logic

## Testing Checklist

- [ ] Sidebar toggle works on all breakpoints (900px threshold)
- [ ] Dark mode toggle persists across page reloads
- [ ] Code block copy functionality with toast feedback
- [ ] Scroll-to-top button appears/disappears correctly
- [ ] Progress bar updates on scroll
- [ ] Search filter works with component names
- [ ] Alert closing works
- [ ] Newsletter subscription submits without error
- [ ] Live code preview (sandbox) updates on textarea input
- [ ] Active sidebar link highlights current page
- [ ] All inline onclick handlers continue to work

## Migration Notes

- Original `script.js` file can be deleted after verification
- No changes required to HTML element IDs or class names
- All feature modules are independent and can be enhanced separately
- Bootstrap process ensures features initialize in logical order
