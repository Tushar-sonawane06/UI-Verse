# Accessibility Review Checklist

This checklist is a shared, repo-level guide for accessibility reviews. CI runs automated checks and this file lists manual review items for reviewers.

## Automated Checks (Run in CI)

- Axe audits and remediation pipeline (`npm run audit:a11y`)
- Playwright E2E accessibility tests (`npm run test:e2e:accessibility`)
- Pa11y quick scan (in CI workflow)

## Manual Review Items (Please confirm during PR review)

### 1. Keyboard Navigation & Interaction
- [ ] **Focus Order:** Navigation order must be logical and follow the visual flow of the page.
- [ ] **Visible Focus Indicators:** Interactive controls must have clear focus rings (e.g., standard outlines with a non-zero `outline-offset` to avoid hiding the outline).
- [ ] **No Keyboard Traps:** Keyboard users must be able to enter and leave all interactive components (modals, dropdowns) using standard keys (`Tab`, `Shift+Tab`, `Esc`, `Enter`, `Space`).

### 2. Semantic Structure & Aria Roles
- [ ] **Semantic HTML:** Ensure structural landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`) are used correctly instead of nesting generic `<div>` elements.
- [ ] **ARIA Controls & Labels:** Interactive elements must have unique, descriptive `aria-label` or `aria-labelledby` attributes.
- [ ] **States & Properties:** Toggle inputs and tabs must communicate state via properties like `aria-pressed`, `aria-expanded`, or `aria-selected`.

### 3. Screen Reader Alerts & Announcements
- [ ] **Aria-Live Regions:** Dynamically updating values or toast message displays must utilize `aria-live="polite"` or `aria-live="assertive"` (or `role="alert"` / `role="status"`) to ensure immediate announcements.

### 4. Visual Layout & Contrast
- [ ] **Color Contrast:** All text must meet WCAG 2.1 AA requirements (contrast ratio of at least 4.5:1 for normal text and 3:1 for large text).
- [ ] **Interactive Elements Contrast:** Borders and icons of form controls must have a contrast ratio of at least 3:1 against their background.
- [ ] **Text Resizing:** Layout must remain readable and functional when page text is zoomed up to 200%.

If automated checks fail, they must be addressed before merging. Use `npm run a11y:remediate` and follow `Docs/ACCESSIBILITY_AUDIT_REMEDIATION.md` for remediation guidance.
