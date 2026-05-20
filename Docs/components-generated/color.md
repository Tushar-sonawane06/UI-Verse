# Color System

Component ID: color

- Path: color.html
- Version: 0.1.0
- Documentation score: 90/100
- Tags: design, tokens
- Description: Color palette and token usage

## Assets

- CSS: colors.css, css/main.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
- JS: -

## Headings

- H1: Color Library
- H2: 🔥 Trending Colors
- H3: Electric Purple
- H3: Ocean Cyan
- H3: Rose Red
- H3: UIverse Orange
- H3: Mint Green
- H3: Deep Indigo

## Usage Snippet

```html
<section class="color-section" data-section="trending">
    <div class="section-header-row">
      <h2 class="color-section-title">🔥 Trending Colors</h2>
      <span class="section-count">8 colors</span>
    </div>
    <div class="color-grid" id="colorGrid">

      <div class="color-card" data-name="electric purple violet">
        <div class="color-swatch" style="background:#8b5cf6;">
          <span class="swatch-badge">Popular</span>
          <div class="swatch-actions">
            <button onclick="copyText('#8b5cf6', this)" title="Copy HEX"><i class="fa-solid fa-hashtag"></i></button>
            <button onclick="copyText('rgb(139,92,246)', this)" title="Copy RGB"><i class="fa-solid fa-circle-half-stroke"></i></button>
          </div>
        </div>
        <div class="color-info">
          <h3>Electric Purple</h3>
          <span class="hex-val">#8b5cf6</span>
          <span class="rgb-val">rgb(139, 92, 246)</span>
        </div>
      </div>

      <div class="color-card" data-name="ocean cyan blue">
        <div class="color-swatch" style="background:#06b6d4;">
          <span class="swatch-badge">New</span>
          <div class="swatch-actions">
            <button onclick="copyText('#06b6d4', this)"><i class="fa-solid fa-hashtag"></i></button>
            <button onclick="copyText('rgb(6,182,212)', this)"><i class="fa-solid fa-circle-half-stroke"></i></button>
          </div>
        </div>
        <div class="color-info">
          <h3>Ocean Cyan</h3>
          <span class="hex-val">#06b6d4</span>
          <span class="rgb-val">rgb(6, 182, 212)</span>
        </div>
      </div>

      <div class="color-card" data-name="rose red hot pink">
        <div class="color-swatch" style="background:#f43f5e;">
          <span class="swatch-badge">Hot</span>
          <div class="swatch-actions">
            <button onclick="copyText('#f43f5e', this)"><i class="fa-solid fa-hashtag"></i></button>
            <button onclick="copyText('rgb(244,63,94)', this)"><i class="fa-solid fa-circle-half-stroke"></i></button>
          </div>
        </div>
        <div class="color-info">
          <h3>Rose Red</h3>
          <span class="hex-val">#f43f5e</span>
          <span class="rgb-val">rgb(244, 63, 94)</span>
        </div>
      </div>

      <div class="color-card" data-name="accent orange uiverse brand">
        <div class="color-swatch" style="background:#eb6835;">
          <span class="swatch-badge">Brand</span>
          <div class="swatch-actions">
            <button onclick="copyText('#eb6835', this)"><i class="fa-solid fa-hashtag"></i></button>
            <button onclick="copyText('rgb(235,104,53)', this)"><i class="fa-solid fa-circle-half-stroke"></i></button>
          </div>
        </div>
        <div class="color-info">
          <h3>UIverse Orange</h3>
          <span class="hex-val">#eb6835</span>
          <span class="rgb-val">rgb(235, 104, 53)</span>
        </div>
      </div>

      <div class="color-card" data-name="mint green emerald">
        <div class="color-swatch" style="background:#00b894;">
          <span class="swatch-badge">Fresh</span>
          <div class="swatch-actions">
            <button onclick="copyText('#00b894', this)"><i class="fa-solid fa-hashtag"></i></button>
            <button onclick="copyText('rgb(0,184,148)', this)"><i class="fa-solid fa-circle-half-stroke"></i></button>
          </div>
        </div>
        <div class="color-info">
          <h3>Mint Green</h3>
          <span class="hex-val">#00b894</span>
          <span class="rgb-val">rgb(0, 184, 148)</span>
        </div>
      </div>

      <div class="color-card" data-name="indigo blue deep">
        <div class="color-swatch" style="background:#6c5ce7;">
          <span class="swatch-badge">Classic</span>
          <div class="swatch-actions">
            <button onclick="copyText('#6c5ce7', this)"><i class="fa-solid fa-hashtag"></i></button>
            <button onclick="copyText('rgb(108,92,231)', this)"><i class="fa-solid fa-circle-half-stroke"></i></button>
          </div>
        </div>
        <div class="color-info">
          <h3>Deep Indigo</h3>
          <span class="hex-val">#6c5ce7</span>
          <span class="rgb-val">rgb(108, 92, 231)</span>
        </div>
      </div>

      <div class="color-card" data-name="amber yellow gold">
        <div class="color-swatch" style="background:#fdcb6e;">
          <span class="swatch-badge">Warm</span>
          <div class="swatch-actions">
            <button onclick="copyText('#fdcb6e', this)"><i class="fa-solid fa-hashtag"></i></button>
            <button onclick="copyText('rgb(253,203,110)', this)"><i class="fa-solid fa-circle-half-stroke"></i></button>
          </div>
        </div>
        <div class="color-info">
          <h3>Amber Gold</h3>
          <span class="hex-val">#fdcb6e</span>
          <span class="rgb-val">rgb(253, 203, 110)</span>
        </div>
      </div>

      <div class="color-card" data-name="sky blue azure">
        <div class="color-swatch" style="background:#0984e3;">
          <span class="swatch-badge">Clean</span>
          <div class="swatch-actions">
            <button onclick="copyText('#0984e3', this)"><i class="fa-solid fa-hashtag"></i></button>
            <button onclick="copyText('rgb(9,132,227)', this)"><i class="fa-solid fa-circle-half-stroke"></i></button>
          </div>
        </div>
        <div class="color-info">
          <h3>Sky Blue</h3>
          <span class="hex-val">#0984e3</span>
          <span class="rgb-val">rgb(9, 132, 227)</span>
        </div>
      </div>

    </div>
  </section>
```
