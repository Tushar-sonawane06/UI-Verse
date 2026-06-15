# Color System

Component ID: color

- Path: color.html
- Version: 0.1.1
- Documentation score: 100/100
- Tags: design, tokens, palette, theme
- Description: Color palette and token usage

## Assets

- CSS: colors.css, dist/shared.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
- JS: dist/shared.js

## Headings

- H1: Color Library
- H2: 🎯 Design Tokens
- H3: Primary
- H3: Secondary
- H3: Success
- H3: Error
- H3: Warning
- H2: 🌈 Gradient Meshes

## Usage Snippet

```html
<section class="color-section" data-section="tokens">
  <div class="section-header-row">
    <h2 class="color-section-title">🎯 Design Tokens</h2>
    <span class="section-count">System Colors</span>
  </div>

  <div class="token-grid">

    <div class="token-card">
      <div class="token-color" style="background:#3b82f6;"></div>
      <h3>Primary</h3>
      <p>#3b82f6</p>
    </div>

    <div class="token-card">
      <div class="token-color" style="background:#8b5cf6;"></div>
      <h3>Secondary</h3>
      <p>#8b5cf6</p>
    </div>

    <div class="token-card">
      <div class="token-color" style="background:#22c55e;"></div>
      <h3>Success</h3>
      <p>#22c55e</p>
    </div>

    <div class="token-card">
      <div class="token-color" style="background:#ef4444;"></div>
      <h3>Error</h3>
      <p>#ef4444</p>
    </div>

    <div class="token-card">
      <div class="token-color" style="background:#f59e0b;"></div>
      <h3>Warning</h3>
      <p>#f59e0b</p>
    </div>

  </div>
</section>
```
