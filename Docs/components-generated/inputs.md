# Inputs

Component ID: inputs

- Path: inputs.html
- Version: 0.0.1
- Documentation score: 100/100
- Tags: inputs, fields, controls, text
- Description: Input field styles and variants

## Assets

- CSS: dist/shared.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css, input.css
- JS: dist/shared.js

## Headings

- H1: Input Components
- H2: Modern Input Components
- H2: Basic Inputs
- H2: Date &amp; Time
- H2: Advanced Inputs
- H2: Selection Inputs
- H2: Specialized Inputs
- H2: Attribute Examples

## Usage Snippet

```html
<a class="skip-link" href="#main-content">Skip to main content</a>

  <input
  type="text"
  id="searchInput"
  placeholder="Search components..."
  oninput="liveFilter(this.value)"
  data-a11y-remediation="label-needed">
  <!-- ================= SIDEBAR ================= -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <span class="brand-icon">⬡</span>
      <span class="brand-text">UIverse <span class="brand-badge">V2</span></span>
    </div>

    <label for="searchInput" class="sr-only">
  Search components
</label>

<input
  id="searchInput"
  type="search"
  placeholder="Search components..."
  oninput="liveFilter(this.value)"
  aria-label="Search components">
    <nav class="sidebar-nav">
      <ul>
        <li>
          <a href="index.html">
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="button.html">
            <i class="fa-solid fa-hand-pointer"></i>
            <span>Buttons</span>
          </a>
        </li>
        <li>
          <a href="dropdown-components.html">
            <i class="fa-solid fa-caret-do
```
