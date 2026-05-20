# Component Documentation Catalog

Generated: 2026-05-19T16:51:49.383Z

## Summary

- Components indexed: 13
- Existing component pages: 13
- Missing component pages: 0
- Linked CSS assets: 64
- Linked JS assets: 88
- Average documentation score: 95.38/100

## Components

| ID | Title | Version | Score | Page | CSS | JS |
|---|---|---:|---:|---:|---:|---:|
| index | Home / Showcase | 0.1.0 | 100 | yes | 5 | 15 |
| button | Buttons | 0.1.0 | 100 | yes | 9 | 16 |
| navbar | Navbar | 0.1.0 | 90 | yes | 5 | 0 |
| cards | Cards | 0.1.0 | 100 | yes | 9 | 16 |
| badges | Badges | 0.1.0 | 100 | yes | 6 | 16 |
| form | Forms | 0.1.0 | 100 | yes | 4 | 1 |
| footer | Footer | 0.1.0 | 90 | yes | 5 | 0 |
| color | Color System | 0.1.0 | 90 | yes | 4 | 0 |
| settings | Settings | 0.1.0 | 100 | yes | 3 | 12 |
| testimonials | Testimonials | 0.1.0 | 100 | yes | 3 | 12 |
| pricing | Pricing | 0.1.0 | 90 | yes | 4 | 0 |
| alerts | Alerts | 0.1.0 | 90 | yes | 3 | 0 |
| toggles | Toggles | 0.1.0 | 90 | yes | 4 | 0 |

## Per-Component Details

### Home / Showcase (index)

- Path: index.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 100/100
- Tags: home, showcase
- Aliases: home, homepage
- Description: Project homepage and featured components overview
- CSS assets: command-palette.css, css/main.css, css/url-state.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
- JS assets: js/bootstrap.js, js/core/utils.js, js/features/accessibility.js, js/features/alerts.js, js/features/code-tools.js, js/features/command-palette.js, js/features/popup.js, js/features/sandbox.js, js/features/scroll.js, js/features/search.js, js/features/sidebar.js, js/features/theme.js, js/features/toast.js, js/features/url-state-integration.js, js/features/url-state.js
- Headings:
  - H1: Build beautiful UIs in minutes, not hours.
  - H2: ⭐ Popular Components
  - H3: Gradient Button
  - H3: Glass Navbar
  - H3: Card UI
  - H3: Spinner Loaders
  - H3: Pricing Cards
  - H3: Alert Boxes

Usage snippet:

```html
<section class="hero">
    <div class="hero-badge">🚀 v2.0 — Now with 120+ components</div>

    <h1 class="hero-title">
      Build <span class="hero-accent">beautiful UIs</span><br>
      in minutes, not hours.
    </h1>

    <p class="hero-desc">
      A curated library of reusable UI components crafted with pure HTML, CSS & JavaScript —
      no frameworks, no dependencies, just clean code.
    </p>

    <div class="hero-actions">
      <a href="button.html" class="btn-primary">
        Explore Components <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a href="form.html" class="btn-ghost">
        Start Learning
      </a>
    </div>

    <div class="hero-stats">
      <div class="stat">
        <span class="stat-number">120+</span>
        <span class="stat-label">Components</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">8</span>
        <span class="stat-label">Categories</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">100%</span>
        <span class="stat-label">Free & Open Source</span>
      </div>
    </div>

    <!-- floating orb decoration -->
    <div class="hero-orb orb-1"></div>
    <div class="hero-orb orb-2"></div>
  </section>
```

### Buttons (button)

- Path: button.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 100/100
- Tags: controls, components
- Aliases: buttons, btn
- Description: Button styles, variants and examples
- CSS assets: button.css, buttons.css, command-palette.css, css/main.css, css/url-state.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css, shared-page.css, style.css
- JS assets: js/bootstrap.js, js/core/utils.js, js/features/accessibility.js, js/features/alerts.js, js/features/code-tools.js, js/features/command-palette.js, js/features/popup.js, js/features/sandbox.js, js/features/scroll.js, js/features/search.js, js/features/sidebar.js, js/features/theme.js, js/features/toast.js, js/features/url-state-integration.js, js/features/url-state.js, playground.js
- Headings:
  - H1: Beautiful Button Components
  - H3: Gradient Button
  - H4: ✨ Customization
  - H4: Accessibility
  - H4: 🌐 Browser Support
  - H3: Outline Button
  - H4: ✨ Customization
  - H4: Accessibility

Usage snippet:

```html
<section class="features">

      <!-- Gradient -->
      <div class="feature-card">
        <div class="icon">🌈</div>
        <h3>Gradient Button</h3>
        <button class="gradient-btn">Click Me</button>

        <div class="actions">
          <button onclick="toggleCode('c1', this)">View Code</button>
          <button onclick="copyCode('c1', this)">Copy</button>
        </div>

        <pre id="c1" class="code-block">
&lt;button class="gradient-btn"&gt;Click Me&lt;/button&gt;
        </pre>
.gradient-btn {
  padding: 10px 24px;
  border: none;
  color: white;
  background: linear-gradient(45deg, #eb6835, #6c5ce7);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
.gradient-btn:hover { opacity: 0.85; transform: translateY(-2px); }</code></pre>

      <!-- Customization Options -->
      <div class="component-customization">
        <h4>✨ Customization</h4>
        <div class="customization-item">
          <p><strong>Background Gradient:</strong> Change the gradient angle and colors</p>
          <div class="customization-example">
            background: linear-gradient(135deg, #eb6835, #6c5ce7);
          </div>
        </div>
        <div class="customization-item">
          <p><strong>Hover Effect:</strong> Modify opacity or add scale transform</p>
          <div class="customization-example">
            .gradient-btn:hover { transform: scale(1.05); }
          </div>
        </div>
        <div class="customization-item">
          <p><strong>Padding & Size:</strong> Adjust for different button sizes</p>
          <div class="customization-example">
            padding: 12px 28px; /* larger */ or 8px 16px; /* smaller */
          </div>
        </div>
      </div>

      <!-- Accessibility Notes -->
      <div class="component-a11y">
        <h4><i class="fa-solid fa-universal-access"></i> Accessibility</h4>
        <ul>
          <li>Button has sufficient color contrast (white text on gradient background)</li>
          <li>Includes visible focus state through transform on hover</li>
          <li>Text label clearly indicates button purpose</li>
          <li>Supports keyboard navigation (tab to focus, enter to activate)</li>
          <li>Consider adding <code>aria-label</code> for icon-only variants</li>
        </ul>
      </div>

      <!-- Browser Support -->
      <div class="component-variants">
        <h4>🌐 Browser Support</h4>
        <div class="browser-support">
          <div class="browser-support-item supported">Chrome 26+</div>
          <div class="browser-support-item supported">Firefox 16+</div>
          <div class="browser-support-item supported">Safari 6.1+</div>
          <div class="browser-support-item supported">Edge 12+</div>
          <div class="browser-support-item partial">IE 10 (no gradient)</div>
        </div>
      </div>
    </div>

    <!-- Outline -->
    <div class="component-card" data-name="outline button border" data-cat="style" data-tags="minimal, accessible, clean">
      <div class="card-top">
        <span class="card-label">Outline</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <button class="outline-btn">Click Me</button>
      </div>
      <p class="card-desc">A clean border-only button — great for secondary actions.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c2', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c2', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Outline Button')">Add to My Collection</button>
  
      </div>
      <pre id="c2" class="code-block"><code>&lt;button class="outline-btn"&gt;Click Me&lt;/button&gt;

      <!-- Outline -->
      <div class="feature-card">
        <div class="icon">⬜</div>
        <h3>Outline Button</h3>
        <button class="outline-btn">Click Me</button>

        <div class="actions">
          <button onclick="toggleCode('c2', this)">View Code</button>
          <button onclick="copyCode('c2', this)">Copy</button>
        </div>

        <pre id="c2" class="code-block">
&lt;button class="outline-btn"&gt;Click Me&lt;/button&gt;
        </pre>
.outline-btn {
  padding: 10px 24px;
  border: 2px solid #eb6835;
  background: transparent;
  color: #eb6835;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
.outline-btn:hover { background: #eb6835; color: #fff; }</code></pre>

      <!-- Customization Options -->
      <div class="component-customization">
        <h4>✨ Customization</h4>
        <div class="customization-item">
          <p><strong>Border Color:</strong> Change the border and text color</p>
          <div class="customization-example">
            border: 2px solid #your-color; color: #your-color;
          </div>
        </div>
        <div class="customization-item">
          <p><strong>Hover Fill:</strong> Add background on hover or keep transparent</p>
          <div class="customization-example">
            .outline-btn:hover { background: rgba(235, 104, 53, 0.1); }
          </div>
        </div>
        <div class="customization-item">
          <p><strong>Border Width:</strong> Adjust thickness for different emphasis</p>
          <div class="customization-example">
            border: 1px solid... /* thinner */ or 3px solid... /* thicker */
          </div>
        </div>
      </div>

      <!-- Accessibility Notes -->
      <div class="component-a11y">
        <h4><i class="fa-solid fa-universal-access"></i> Accessibility</h4>
        <ul>
          <li>Border provides visual distinction for focus state</li>
          <li>Color contrast meets WCAG AA standards (dark border on light background)</li>
          <li>Hover state provides clear feedback for interactive affordance</li>
          <li>Works well for secondary and tertiary actions</li>
          <li>Transparent background improves visual hierarchy</li>
        </ul>
      </div>

      <!-- Variants -->
      <div class="component-variants">
        <h4>🎨 Variants</h4>
        <span class="variant-tag">Default</span>
        <span class="variant-tag active">Interactive</span>
        <span class="variant-tag">Disabled</span>
        <span class="variant-tag">Large</span>
        <span class="variant-tag">Small</span>
        <div class="browser-support" style="margin-top: 16px;">
          <strong>Browser Support:</strong>
          <div class="browser-support-item supported">All Modern Browsers</div>
          <div class="browser-support-item supported">IE 9+</div>
        </div>
      </div>
    </div>

    <!-- Neon -->
    <div class="component-card" data-name="neon button glow" data-cat="effect" data-tags="glowing, dark-mode, trendy">
      <div class="card-top">
        <span class="card-label">Neon</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview dark-preview">
        <button class="neon-btn">Glow</button>
      </div>
      <p class="card-desc">A glowing neon-style button perfect for dark themed UIs.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c3', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c3', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Neon Button')">Add to My Collection</button>
      </div>
      <pre id="c3" class="code-block"><code>&lt;button class="neon-btn"&gt;Glow&lt;/button&gt;

      <!-- Neon -->
      <div class="feature-card">
        <div class="icon">💡</div>
        <h3>Neon Button</h3>
        <button class="neon-btn">Glow</button>

        <div class="actions">
          <button onclick="toggleCode('c3', this)">View Code</button>
          <button onclick="copyCode('c3', this)">Copy</button>
        </div>

        <pre id="c3" class="code-block">
&lt;button class="neon-btn"&gt;Glow&lt;/button&gt;
        </pre>
.neon-btn {
  padding: 10px 24px;
  background: transparent;
  color: #00ffe0;
  border: 1.5px solid #00ffe0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
.neon-btn:hover { box-shadow: 0 0 16px #00ffe0, 0 0 40px rgba(0,255,224,0.3); }</code></pre>
    </div>

    <!-- Glass -->
    <div class="component-card" data-name="glass button transparent blur" data-cat="effect" data-tags="modern, blur, trendy">
      <div class="card-top">
        <span class="card-label">Glass</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview glass-preview">
        <button class="glass-btn">Glass</button>
      </div>
      <p class="card-desc">A frosted-glass effect button with backdrop blur.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c4', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c4', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Glass Button')">Add to My Collection</button>
      </div>
      <pre id="c4" class="code-block"><code>&lt;button class="glass-btn"&gt;Glass&lt;/button&gt;

      <!-- Glass -->
      <div class="feature-card">
        <div class="icon">🪟</div>
        <h3>Glass Button</h3>
        <button class="glass-btn">Glass</button>

        <div class="actions">
          <button onclick="toggleCode('c4', this)">View Code</button>
          <button onclick="copyCode('c4', this)">Copy</button>
        </div>

        <pre id="c4" class="code-block">
&lt;button class="glass-btn"&gt;Glass&lt;/button&gt;
        </pre>
.glass-btn {
  padding: 10px 24px;
  background: rgba(255,255,255,0.15);
  color: white;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
.glass-btn:hover { background: rgba(255,255,255,0.25); }</code></pre>
    </div>

    <!-- Shadow -->
    <div class="component-card" data-name="shadow button lift depth" data-cat="effect" data-tags="depth, interactive, modern">
      <div class="card-top">
        <span class="card-label">Shadow</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <button class="shadow-btn">Lift</button>
      </div>
      <p class="card-desc">A soft shadow button with a satisfying lift on hover.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c5', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c5', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Shadow Button')">Add to My Collection</button>
      </div>
      <pre id="c5" class="code-block"><code>&lt;button class="shadow-btn"&gt;Lift&lt;/button&gt;

.shadow-btn {
  padding: 10px 24px;
  background: #fff;
  color: #111;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
  transition: 0.3s;
}
.shadow-btn:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.15); }</code></pre>
    </div>

    <!-- Rounded (Pill) -->
    <div class="component-card" data-name="rounded button pill" data-cat="style" data-tags="modern, minimal, friendly">
      <div class="card-top">
        <span class="card-label">Pill</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <button class="rounded-btn">Rounded</button>
      </div>
      <p class="card-desc">A fully pill-shaped button — modern and approachable.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c6', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c6', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Pill Button')">Add to My Collection</button>
      </div>
      <pre id="c6" class="code-block"><code>&lt;button class="rounded-btn"&gt;Rounded&lt;/button&gt;

.rounded-btn {
  padding: 10px 28px;
  background: #eb6835;
  color: white;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
.rounded-btn:hover { background: #d45c28; transform: translateY(-2px); }</code></pre>
    </div>

    <!-- Icon -->
    <div class="component-card" data-name="icon button circular" data-cat="style" data-tags="compact, minimal, accessible">
      <div class="card-top">
        <span class="card-label">Icon</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <button class="icon-btn"><i class="fa-solid fa-star"></i></button>
      </div>
      <p class="card-desc">A compact circular icon button for toolbars and action menus.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c7', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c7', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Icon Button')">Add to My Collection</button>
      </div>
      <pre id="c7" class="code-block"><code>&lt;button class="icon-btn"&gt;★&lt;/button&gt;

.icon-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #eb6835;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-btn:hover { transform: scale(1.1); box-shadow: 0 4px 14px rgba(235,104,53,0.4); }</code></pre>
    </div>

    <!-- Success -->
    <div class="component-card" data-name="success button green" data-cat="status" data-tags="confirmation, positive, feedback">
      <div class="card-top">
        <span class="card-label">Success</span>
        <span class="card-tag tag-new">Status</span>
      </div>
      <div class="card-preview">
        <button class="success-btn"><i class="fa-solid fa-check"></i> Success</button>
      </div>
      <p class="card-desc">A green success button — ideal for confirmations and completed actions.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c8', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c8', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Success Button')">Add to My Collection</button>
      </div>
      <pre id="c8" class="code-block"><code>&lt;button class="success-btn"&gt;✓ Success&lt;/button&gt;

.success-btn {
  padding: 10px 24px;
  background: #00b894;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
.success-btn:hover { background: #00a381; transform: translateY(-2px); }</code></pre>
    </div>

    <!-- Danger -->
    <div class="component-card" data-name="danger button red" data-cat="status" data-tags="destructive, alert, critical">
      <div class="card-top">
        <span class="card-label">Danger</span>
        <span class="card-tag tag-danger">Status</span>
      </div>
      <div class="card-preview">
        <button class="danger-btn"><i class="fa-solid fa-triangle-exclamation"></i> Danger</button>
      </div>
      <p class="card-desc">A red danger/error button for destructive actions.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c9', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c9', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Danger Button')">Add to My Collection</button>
      </div>
      <pre id="c9" class="code-block"><code>&lt;button class="danger-btn"&gt;⚠ Danger&lt;/button&gt;

.danger-btn {
  padding: 10px 24px;
  background: #d63031;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
.danger-btn:hover { background: #b52828; transform: translateY(-2px); }</code></pre>
    </div>

    <!-- Warning -->
    <div class="component-card" data-name="warning button orange" data-cat="status" data-tags="caution, alert, warning">
      <div class="card-top">
        <span class="card-label">Warning</span>
        <span class="card-tag tag-warning">Status</span>
      </div>
      <div class="card-preview">
        <button class="warning-btn"><i class="fa-solid fa-circle-exclamation"></i> Warning</button>
      </div>
      <p class="card-desc">An amber warning button for caution states.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c10', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c10', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Warning Button')">Add to My Collection</button>
      </div>
      <pre id="c10" class="code-block"><code>&lt;button class="warning-btn"&gt;⚠ Warning&lt;/button&gt;

.warning-btn {
  padding: 10px 24px;
  background: #fdcb6e;
  color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
.warning-btn:hover { background: #e6b85c; transform: translateY(-2px); }</code></pre>
    </div>

    <!-- Loading -->
    <div class="component-card" data-name="loading button spinner" data-cat="effect" data-tags="interactive, animation, state">
      <div class="card-top">
        <span class="card-label">Loading</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <button class="loading-btn" disabled>
          <span class="spinner"></span> Loading...
        </button>
      </div>
      <p class="card-desc">A disabled loading state button with an animated spinner.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c11', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c11', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Loading Button')">Add to My Collection</button>
      </div>
      <pre id="c11" class="code-block"><code>&lt;button class="loading-btn" disabled&gt;
  &lt;span class="spinner"&gt;&lt;/span&gt; Loading...
&lt;/button&gt;


.loading-btn {
  padding: 10px 24px;
  background: #aaa;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: not-allowed;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
.spinner {
  width: 14px; height: 14px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }</code></pre>
    </div>

    <!-- Ghost -->
    <div class="component-card" data-name="ghost button transparent" data-cat="style" data-tags="minimal, subtle, transparent">
      <div class="card-top">
        <span class="card-label">Ghost</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <button class="ghost-btn">Ghost</button>
      </div>
      <p class="card-desc">A subtle ghost button with no fill — ideal for tertiary actions.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c12', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c12', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Ghost Button')">Add to My Collection</button>
      </div>
      <pre id="c12" class="code-block"><code>&lt;button class="ghost-btn"&gt;Ghost&lt;/button&gt;

      <!-- Shadow -->
      <div class="feature-card">
        <div class="icon">⬆️</div>
        <h3>Shadow Button</h3>
        <button class="shadow-btn">Lift</button>


        <div class="actions">
          <button onclick="toggleCode('c5')">View Code</button>
          <button onclick="copyCode('c5',this)">Copy</button>
        </div>


    <!-- Animated Pulse -->
    <div class="component-card" data-name="animated button pulse" data-cat="effect" data-tags="animation, interactive, attention">
      <div class="card-top">
        <span class="card-label">Pulse</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <button class="animated-btn">Pulse</button>
      </div>
      <p class="card-desc">A pulsing animated button that grabs attention — great for CTAs.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c13', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c13', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Pulse Button')">Add to My Collection</button>

        <pre id="c5" class="code-block">
&lt;button class="shadow-btn"&gt;Lift&lt;/button&gt;
        </pre>

      </div>


.animated-btn {
  padding: 10px 24px;
  background: #eb6835;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  animation: pulse 1.8s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(235,104,53,0.5); }
  50% { box-shadow: 0 0 0 12px rgba(235,104,53,0); }
}</code></pre>
    </div>

    <!-- 3D -->
    <div class="component-card" data-name="3d button depth" data-cat="effect" data-tags="depth, tactile, modern">
      <div class="card-top">
        <span class="card-label">3D</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <button class="btn-3d">3D Effect</button>
      </div>
      <p class="card-desc">A tactile 3D push-down button with a solid shadow base.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c14', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c14', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('3D Button')">Add to My Collection</button>
      </div>
      <pre id="c14" class="code-block"><code>&lt;button class="btn-3d"&gt;3D Effect&lt;/button&gt;

    </section>
```

### Navbar (navbar)

- Path: Navbar.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 90/100
- Tags: navigation, components
- Aliases: nav, navbars
- Description: Top navigation bars and variants
- CSS assets: Navbar.css, css/main.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css, navbar.css
- JS assets: -
- Headings:
  - H1: Navbar Components
  - H4: UI Elements
  - H4: Navigation
  - H4: Advanced
  - H2: ⬡ UIverse
  - H3: Explore
  - H3: Resources
  - H3: Legal

Usage snippet:

```html
<main class="main-home">

  <!-- Page Hero -->
  <div class="page-hero">
    <div class="page-hero-left">
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>Navbars</span>
      </div>
      <h1 class="page-title">Navbar Components</h1>
<<<<<<< HEAD
      <p class="page-desc">A complete collection of navigation bar styles G�� from simple to glassmorphic, dark themed, search-enabled, and split layouts. Copy and use instantly.</p>
=======
      <p class="page-desc">A complete collection of navigation bar styles — from simple to glassmorphic, dark themed, search-enabled, and split layouts. Copy and use instantly.</p>
>>>>>>> upstream/main
      <div class="page-meta">
        <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 8 Components</span>
        <span class="meta-badge"><i class="fa-solid fa-code"></i> Pure CSS</span>
        <span class="meta-badge"><i class="fa-solid fa-mobile-screen"></i> Responsive</span>
      </div>
    </div>
    <div class="page-hero-right">
      <div class="hero-nav-preview">
        <div class="mini-nav">
<<<<<<< HEAD
          <span class="mini-brand">G�� UIverse</span>
=======
          <span class="mini-brand">⬡ UIverse</span>
>>>>>>> upstream/main
          <div class="mini-links">
            <span>Home</span>
            <span>Docs</span>
            <span class="mini-cta">Get Started</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Filter Bar -->
  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterCards('all', this)">All</button>
    <button class="filter-btn" onclick="filterCards('simple', this)">Simple</button>
    <button class="filter-btn" onclick="filterCards('dark', this)">Dark</button>
    <button class="filter-btn" onclick="filterCards('glass', this)">Glass</button>
    <button class="filter-btn" onclick="filterCards('advanced', this)">Advanced</button>
    <div class="filter-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Filter navbars..." oninput="liveFilter(this.value)" />
    </div>
  </div>

  <!-- Navbars Grid -->
  <div class="navbar-grid" id="navbarGrid">
<<<<<<< HEAD
  <!-- =========================================================
     NAVBAR 9 G�� FLOATING NAVBAR
=======
   <!-- =========================================================
     TRANSPARENT HERO NAVBAR
>>>>>>> upstream/main
========================================================= -->

<div class="component-card" data-name="transparent hero navbar landing page" data-cat="glass">

  <div class="card-top">

    <span class="card-label">
      Transparent Hero Navbar
    </span>

    <span class="card-tag tag-trending">
      Trending
    </span>

  </div>

  <div class="nav-card-preview hero-nav-preview">

    <nav class="demo-hero-nav">

<<<<<<< HEAD
      <span class="dnav-brand">G�� UIverse</span>
=======
      <span class="hero-brand">
        ⬡ UIverse
      </span>

      <div class="hero-links">
>>>>>>> upstream/main

        <a href="#">Home</a>

        <a href="#">Features</a>

        <a href="#">Pricing</a>

        <a href="#">Contact</a>

      </div>

      <button class="hero-nav-btn">
        Get Started
      </button>

    </nav>

  </div>

  <p class="card-desc">
    A transparent landing-page navbar with glassmorphism and blur effects.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c18', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c18', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

<<<<<<< HEAD
  <pre id="c9" class="code-block"><code>&lt;nav class="navbar-floating"&gt;
  &lt;span class="brand"&gt;G�� UIverse&lt;/span&gt;
=======
  <pre id="c18" class="code-block"><code>&lt;nav class="hero-navbar"&gt;
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;
>>>>>>> upstream/main

  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;Features&lt;/a&gt;
  &lt;/div&gt;

  &lt;button&gt;Get Started&lt;/button&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
<<<<<<< HEAD
     NAVBAR 10 G�� NEON NAVBAR
=======
     DASHBOARD NAVBAR
>>>>>>> upstream/main
========================================================= -->

<div class="component-card" data-name="dashboard navbar admin analytics" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      Dashboard Navbar
    </span>

    <span class="card-tag tag-popular">
      Popular
    </span>

  </div>

  <div class="nav-card-preview dashboard-preview">

    <nav class="demo-dashboard-nav">

      <div class="dashboard-left">

        <span class="dashboard-brand">
          ⬡ Dashboard
        </span>

        <div class="dashboard-search">

          <i class="fa-solid fa-magnifying-glass"></i>

          <input type="text" placeholder="Search..." />

        </div>

      </div>

      <div class="dashboard-right">

        <button class="dashboard-icon">
          <i class="fa-regular fa-bell"></i>
        </button>

        <button class="dashboard-icon">
          <i class="fa-regular fa-envelope"></i>
        </button>

        <img
          src="https://i.pravatar.cc/100?img=15"
          alt="Avatar"
        />

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A professional admin dashboard navbar with search and notification actions.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c19', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c19', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c19" class="code-block"><code>&lt;nav class="dashboard-navbar"&gt;
  &lt;span class="brand"&gt;⬡ Dashboard&lt;/span&gt;

  &lt;input type="text" placeholder="Search..."&gt;

  &lt;div class="actions"&gt;
    &lt;i class="fa-regular fa-bell"&gt;&lt;/i&gt;
    &lt;i class="fa-regular fa-envelope"&gt;&lt;/i&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

</div> 
    <!-- =========================================================
     MACOS DOCK NAVBAR
========================================================= -->

<div class="component-card" data-name="macos dock navbar floating apple glass" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      MacOS Dock Navbar
    </span>

    <span class="card-tag tag-trending">
      Trending
    </span>

  </div>

  <div class="nav-card-preview dock-preview">

    <nav class="demo-dock-nav">

      <a href="#">
        <i class="fa-solid fa-house"></i>
      </a>

      <a href="#">
        <i class="fa-solid fa-compass"></i>
      </a>

      <a href="#">
        <i class="fa-solid fa-heart"></i>
      </a>

      <a href="#">
        <i class="fa-solid fa-message"></i>
      </a>

      <a href="#">
        <i class="fa-solid fa-user"></i>
      </a>

    </nav>

  </div>

  <p class="card-desc">
    An Apple-inspired floating dock navbar with magnify hover effects.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c16', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c16', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c16" class="code-block"><code>&lt;nav class="dock-navbar"&gt;
  &lt;a href="#"&gt;&lt;i class="fa-solid fa-house"&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;a href="#"&gt;&lt;i class="fa-solid fa-heart"&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;a href="#"&gt;&lt;i class="fa-solid fa-user"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     MEGA MENU NAVBAR
========================================================= -->

<div class="component-card" data-name="mega menu navbar enterprise dropdown" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      Mega Menu Navbar
    </span>

    <span class="card-tag tag-popular">
      Popular
    </span>

  </div>

  <div class="nav-card-preview mega-preview">

    <nav class="demo-mega-nav">

      <span class="mega-brand">
        ⬡ UIverse
      </span>

      <div class="mega-links">

        <div class="mega-item">

          <a href="#">
            Components
          </a>

          <div class="mega-dropdown">

            <div class="mega-column">

              <h4>UI Elements</h4>

              <a href="#">
                Buttons
              </a>

              <a href="#">
                Cards
              </a>

              <a href="#">
                Inputs
              </a>

            </div>

            <div class="mega-column">

              <h4>Navigation</h4>

              <a href="#">
                Navbars
              </a>

              <a href="#">
                Sidebars
              </a>

              <a href="#">
                Menus
              </a>

            </div>

            <div class="mega-column">

              <h4>Advanced</h4>

              <a href="#">
                Dashboards
              </a>

              <a href="#">
                Charts
              </a>

              <a href="#">
                Animations
              </a>

            </div>

          </div>

        </div>

        <a href="#">
          Pricing
        </a>

        <a href="#">
          Docs
        </a>

      </div>

      <button class="mega-btn">
        Get Started
      </button>

    </nav>

  </div>

  <p class="card-desc">
    A professional enterprise-style navbar with large mega dropdown menus.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c17', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c17', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c17" class="code-block"><code>&lt;nav class="mega-navbar"&gt;
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;

  &lt;div class="mega-menu"&gt;
    &lt;a href="#"&gt;Components&lt;/a&gt;

    &lt;div class="dropdown"&gt;
      &lt;a href="#"&gt;Buttons&lt;/a&gt;
      &lt;a href="#"&gt;Cards&lt;/a&gt;
      &lt;a href="#"&gt;Inputs&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

</div>
    
    <!-- =========================================================
     PROFILE DROPDOWN NAVBAR
========================================================= -->

<div class="component-card" data-name="profile dropdown navbar settings logout" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      Profile Dropdown Navbar
    </span>

    <span class="card-tag tag-popular">
      Popular
    </span>

  </div>

  <div class="nav-card-preview">

    <nav class="demo-profile-nav">

      <span class="profile-brand">
        ⬡ UIverse
      </span>

      <div class="profile-menu">

        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Avatar"
        />

        <div class="dropdown-menu">

          <a href="#">
            <i class="fa-regular fa-user"></i>
            Profile
          </a>

          <a href="#">
            <i class="fa-solid fa-gear"></i>
            Settings
          </a>

          <a href="#">
            <i class="fa-solid fa-right-from-bracket"></i>
            Logout
          </a>

        </div>

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A professional navbar with avatar dropdown and quick profile actions.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c13', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c13', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c13" class="code-block"><code>&lt;nav class="profile-navbar"&gt;
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;

  &lt;div class="profile-menu"&gt;
    &lt;img src="https://i.pravatar.cc/40?img=12" alt="Avatar"&gt;

    &lt;div class="dropdown-menu"&gt;
      &lt;a href="#"&gt;Profile&lt;/a&gt;
      &lt;a href="#"&gt;Settings&lt;/a&gt;
      &lt;a href="#"&gt;Logout&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     COMMUNITY NAVBAR
========================================================= -->

<div class="component-card" data-name="community navbar discussions tags members" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      Community Navbar
    </span>

    <span class="card-tag tag-trending">
      Trending
    </span>

  </div>

  <div class="nav-card-preview">

    <nav class="demo-community-nav">

      <span class="community-brand">
        🌍 Community
      </span>

      <div class="community-links">

        <a href="#">Feed</a>

        <a href="#">Discussions</a>

        <a href="#">Trending</a>

      </div>

      <div class="community-meta">

        <span class="tag-pill">
          #frontend
        </span>

        <span class="tag-pill">
          #css
        </span>

        <span class="members-count">
          24K Members
        </span>

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A modern community-focused navbar with trending tags and member count.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c14', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c14', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c14" class="code-block"><code>&lt;nav class="community-navbar"&gt;
  &lt;span class="brand"&gt;🌍 Community&lt;/span&gt;

  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Feed&lt;/a&gt;
    &lt;a href="#"&gt;Discussions&lt;/a&gt;
    &lt;a href="#"&gt;Trending&lt;/a&gt;
  &lt;/div&gt;

  &lt;span&gt;24K Members&lt;/span&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     PARTICLE ANIMATED NAVBAR
========================================================= -->

<div class="component-card" data-name="particle animated navbar glow futuristic" data-cat="dark">

  <div class="card-top">

    <span class="card-label">
      Particle Animated Navbar
    </span>

    <span class="card-tag tag-trending">
      Trending
    </span>

  </div>

  <div class="nav-card-preview particle-preview">

    <nav class="demo-particle-nav">

      <div class="particles">

        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

      <span class="particle-brand">
        ✨ UIverse
      </span>

      <div class="particle-links">

        <a href="#">Home</a>

        <a href="#">Components</a>

        <a href="#">Docs</a>

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A futuristic navbar with animated floating particle effects and glow styling.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c15', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c15', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c15" class="code-block"><code>&lt;nav class="particle-navbar"&gt;
  &lt;div class="particles"&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
  &lt;/div&gt;

  &lt;span class="brand"&gt;✨ UIverse&lt;/span&gt;

  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;Docs&lt;/a&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

</div>

    <!-- =========================================================
     COMMAND PALETTE NAVBAR
========================================================= -->

<div class="component-card" data-name="command palette navbar search quick actions" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      Command Palette Navbar
    </span>

    <span class="card-tag tag-trending">
      Trending
    </span>

  </div>

  <div class="nav-card-preview command-preview">

    <nav class="demo-command-nav">

      <span class="command-brand">
        ⬡ UIverse
      </span>

      <button class="command-palette-btn">

        <i class="fa-solid fa-magnifying-glass"></i>

        <span>
          Search components...
        </span>

        <kbd>⌘K</kbd>

      </button>

      <div class="command-actions">

        <i class="fa-regular fa-bell"></i>

        <i class="fa-regular fa-user"></i>

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A modern command palette navbar with quick search and action shortcuts.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c11', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c11', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c11" class="code-block"><code>&lt;nav class="command-navbar"&gt;
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;

  &lt;button class="command-btn"&gt;
    &lt;i class="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
    &lt;span&gt;Search components...&lt;/span&gt;
    &lt;kbd&gt;⌘K&lt;/kbd&gt;
  &lt;/button&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     CATEGORY TABS NAVBAR
========================================================= -->

<div class="component-card" data-name="category tabs navbar ui kits components" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      Category Tabs Navbar
    </span>

    <span class="card-tag tag-popular">
      Popular
    </span>

  </div>

  <div class="nav-card-preview tabs-preview">

    <nav class="demo-tabs-nav">

      <button class="tab-link active-tab">
        Components
      </button>

      <button class="tab-link">
        Templates
      </button>

      <button class="tab-link">
        UI Kits
      </button>

      <button class="tab-link">
        Animations
      </button>

      <button class="tab-link">
        Icons
      </button>

    </nav>

  </div>

  <p class="card-desc">
    A clean tab-style navigation system for switching between categories.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c12', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c12', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c12" class="code-block"><code>&lt;nav class="tabs-navbar"&gt;
  &lt;button class="active"&gt;Components&lt;/button&gt;
  &lt;button&gt;Templates&lt;/button&gt;
  &lt;button&gt;UI Kits&lt;/button&gt;
  &lt;button&gt;Animations&lt;/button&gt;
&lt;/nav&gt;</code></pre>

</div>
    <!-- =========================================================
     MOBILE BOTTOM NAVBAR
========================================================= -->

<div class="component-card" data-name="mobile bottom navbar app navigation" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      Mobile Bottom Navbar
    </span>

    <span class="card-tag tag-trending">
      Trending
    </span>

  </div>

  <div class="nav-card-preview mobile-preview">

    <nav class="demo-mobile-nav">

      <a href="#" class="active-mobile">
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
      </a>

      <a href="#">
        <i class="fa-solid fa-compass"></i>
        <span>Explore</span>
      </a>

      <a href="#">
        <i class="fa-solid fa-heart"></i>
        <span>Likes</span>
      </a>

      <a href="#">
        <i class="fa-solid fa-user"></i>
        <span>Profile</span>
      </a>

    </nav>

  </div>

  <p class="card-desc">
    A floating mobile bottom navigation bar inspired by modern mobile apps.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c9', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c9', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c9" class="code-block"><code>&lt;nav class="mobile-bottom-nav"&gt;
  &lt;a href="#" class="active"&gt;
    &lt;i class="fa-solid fa-house"&gt;&lt;/i&gt;
    &lt;span&gt;Home&lt;/span&gt;
  &lt;/a&gt;

  &lt;a href="#"&gt;
    &lt;i class="fa-solid fa-compass"&gt;&lt;/i&gt;
    &lt;span&gt;Explore&lt;/span&gt;
  &lt;/a&gt;

  &lt;a href="#"&gt;
    &lt;i class="fa-solid fa-heart"&gt;&lt;/i&gt;
    &lt;span&gt;Likes&lt;/span&gt;
  &lt;/a&gt;

  &lt;a href="#"&gt;
    &lt;i class="fa-solid fa-user"&gt;&lt;/i&gt;
    &lt;span&gt;Profile&lt;/span&gt;
  &lt;/a&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     MINIMAL STICKY NAVBAR
========================================================= -->

<div class="component-card" data-name="minimal sticky navbar transparent modern" data-cat="simple">

  <div class="card-top">

    <span class="card-label">
      Minimal Sticky Navbar
    </span>

    <span class="card-tag tag-essential">
      Essential
    </span>

  </div>

  <div class="nav-card-preview sticky-preview">

    <nav class="demo-sticky-nav">

      <span class="sticky-brand">
        UIverse
      </span>

      <div class="sticky-links">

        <a href="#">Home</a>

        <a href="#">Work</a>

        <a href="#">About</a>

        <a href="#">Contact</a>

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A clean transparent sticky navbar with elegant hover underline animations.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c10', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c10', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c10" class="code-block"><code>&lt;nav class="minimal-sticky-navbar"&gt;
  &lt;span class="brand"&gt;UIverse&lt;/span&gt;

  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;Work&lt;/a&gt;
    &lt;a href="#"&gt;About&lt;/a&gt;
    &lt;a href="#"&gt;Contact&lt;/a&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

</div>
    <!-- Simple Navbar -->
    <div class="component-card" data-name="simple navbar basic" data-cat="simple">
      <div class="card-top">
        <span class="card-label">Simple Navbar</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="nav-card-preview">
        <nav class="demo-nav-simple">
          <span class="dnav-brand">UIverse</span>
          <div class="dnav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </div>
      <p class="card-desc">A minimal navbar with a brand name on the left and links on the right.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c1', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c1" class="code-block"><code>&lt;nav class="navbar-simple"&gt;
  &lt;span class="brand"&gt;UIverse&lt;/span&gt;
  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;About&lt;/a&gt;
    &lt;a href="#"&gt;Contact&lt;/a&gt;
  &lt;/div&gt;
&lt;/nav&gt;

.navbar-simple {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
}
.navbar-simple .brand { font-weight: 700; font-size: 18px; }
.navbar-simple .links a {
  margin-left: 20px;
  text-decoration: none;
  color: #555;
  font-size: 14px;
  transition: color 0.2s;
}
.navbar-simple .links a:hover { color: #eb6835; }</code></pre>
    </div>

    <!-- Centered Navbar -->
    <div class="component-card" data-name="centered navbar links" data-cat="simple">
      <div class="card-top">
        <span class="card-label">Centered Navbar</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="nav-card-preview">
        <nav class="demo-nav-center">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <span class="dnav-center-brand">UIverse</span>
          <a href="#">Docs</a>
          <a href="#">Pricing</a>
        </nav>
      </div>
      <p class="card-desc">A symmetrical navbar with links flanking the brand name in the center.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c2', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c2" class="code-block"><code>&lt;nav class="navbar-center"&gt;
  &lt;a href="#"&gt;Home&lt;/a&gt;
  &lt;a href="#"&gt;Features&lt;/a&gt;
  &lt;span class="brand"&gt;UIverse&lt;/span&gt;
  &lt;a href="#"&gt;Docs&lt;/a&gt;
  &lt;a href="#"&gt;Pricing&lt;/a&gt;
&lt;/nav&gt;

.navbar-center {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 14px 24px;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
}
.navbar-center .brand { font-weight: 800; font-size: 18px; color: #eb6835; }
.navbar-center a { text-decoration: none; color: #555; font-size: 14px; }
.navbar-center a:hover { color: #eb6835; }</code></pre>
    </div>

    <!-- Button Navbar -->
    <div class="component-card" data-name="button navbar login cta" data-cat="simple">
      <div class="card-top">
        <span class="card-label">Button Navbar</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="nav-card-preview">
        <nav class="demo-nav-btn">
          <span class="dnav-brand">UIverse</span>
          <div class="dnav-links">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
          </div>
          <div class="dnav-actions">
            <button class="dnav-outline">Sign In</button>
            <button class="dnav-primary">Get Started</button>
          </div>
        </nav>
      </div>
      <p class="card-desc">A full-featured navbar with brand, links, and dual action buttons.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c3', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c3', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c3" class="code-block"><code>&lt;nav class="navbar-btn"&gt;
  &lt;span class="brand"&gt;UIverse&lt;/span&gt;
  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Features&lt;/a&gt;
    &lt;a href="#"&gt;Pricing&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="actions"&gt;
    &lt;button class="outline"&gt;Sign In&lt;/button&gt;
    &lt;button class="primary"&gt;Get Started&lt;/button&gt;
  &lt;/div&gt;
&lt;/nav&gt;

.navbar-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
}
.navbar-btn .primary {
  background: #eb6835; color: #fff;
  border: none; padding: 8px 18px;
  border-radius: 8px; cursor: pointer;
}
.navbar-btn .outline {
  background: transparent; color: #555;
  border: 1px solid #ddd; padding: 8px 18px;
  border-radius: 8px; cursor: pointer;
  margin-right: 8px;
}</code></pre>
    </div>

    <!-- Dark Navbar -->
    <div class="component-card" data-name="dark navbar theme" data-cat="dark">
      <div class="card-top">
        <span class="card-label">Dark Navbar</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="nav-card-preview dark-preview">
        <nav class="demo-nav-dark">
<<<<<<< HEAD
          <span class="dnav-brand" style="color:#fff;">G�� UIverse</span>
=======
          <span class="dnav-brand" style="color:#fff;">⬡ UIverse</span>
>>>>>>> upstream/main
          <div class="dnav-links">
            <a href="#" style="color:#aaa;">Home</a>
            <a href="#" style="color:#aaa;">Docs</a>
            <a href="#" style="color:#aaa;">Blog</a>
          </div>
          <button class="dnav-primary">Launch App</button>
        </nav>
      </div>
<<<<<<< HEAD
      <p class="card-desc">A sleek dark-themed navbar with an accent CTA button G�� great for SaaS and dev tools.</p>
=======
      <p class="card-desc">A sleek dark-themed navbar with an accent CTA button — great for SaaS and dev tools.</p>
>>>>>>> upstream/main
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c4', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c4', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c4" class="code-block"><code>&lt;nav class="navbar-dark"&gt;
<<<<<<< HEAD
  &lt;span class="brand"&gt;G�� UIverse&lt;/span&gt;
=======
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;
>>>>>>> upstream/main
  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;Docs&lt;/a&gt;
    &lt;a href="#"&gt;Blog&lt;/a&gt;
  &lt;/div&gt;
  &lt;button&gt;Launch App&lt;/button&gt;
&lt;/nav&gt;

.navbar-dark {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  background: #0f0f12;
  border-bottom: 1px solid #222;
}
.navbar-dark .brand { color: #fff; font-weight: 700; }
.navbar-dark .links a { color: #888; margin-left: 20px; text-decoration: none; }
.navbar-dark .links a:hover { color: #fff; }
.navbar-dark button {
  background: #eb6835; color: #fff;
  border: none; padding: 8px 18px;
  border-radius: 8px; cursor: pointer;
}</code></pre>
    </div>

    <!-- Glass Navbar -->
    <div class="component-card" data-name="glass navbar blur transparent frosted" data-cat="glass">
      <div class="card-top">
        <span class="card-label">Glass Navbar</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="nav-card-preview glass-preview">
        <nav class="demo-nav-glass">
          <span class="dnav-brand" style="color:#fff;">UIverse</span>
          <div class="dnav-links">
            <a href="#" style="color:rgba(255,255,255,0.75);">Home</a>
            <a href="#" style="color:rgba(255,255,255,0.75);">About</a>
            <a href="#" style="color:rgba(255,255,255,0.75);">Work</a>
          </div>
          <button class="dnav-glass-btn">Contact</button>
        </nav>
      </div>
<<<<<<< HEAD
      <p class="card-desc">A frosted-glass navbar with backdrop blur G�� perfect for image or gradient hero sections.</p>
=======
      <p class="card-desc">A frosted-glass navbar with backdrop blur — perfect for image or gradient hero sections.</p>
>>>>>>> upstream/main
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c5', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c5', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c5" class="code-block"><code>&lt;nav class="navbar-glass"&gt;
  &lt;span class="brand"&gt;UIverse&lt;/span&gt;
  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;About&lt;/a&gt;
    &lt;a href="#"&gt;Work&lt;/a&gt;
  &lt;/div&gt;
  &lt;button&gt;Contact&lt;/button&gt;
&lt;/nav&gt;

.navbar-glass {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255,255,255,0.2);
}
.navbar-glass .brand { color: #fff; font-weight: 700; }
.navbar-glass .links a { color: rgba(255,255,255,0.8); margin-left: 18px; text-decoration: none; }
.navbar-glass button {
  background: rgba(255,255,255,0.2);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.35);
  padding: 7px 18px;
  border-radius: 8px;
  cursor: pointer;
  backdrop-filter: blur(6px);
}</code></pre>
    </div>

    <!-- Search Navbar -->
    <div class="component-card" data-name="search navbar input bar" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">Search Navbar</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="nav-card-preview">
        <nav class="demo-nav-search">
          <span class="dnav-brand">UIverse</span>
          <div class="dnav-search-group">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search docs..." />
          </div>
<<<<<<< HEAD
          <a class="dnav-primary-link" href="#">Get Started G��</a>
        </nav>
      </div>
      <p class="card-desc">A navbar with an integrated search input G�� ideal for documentation or component libraries.</p>
=======
          <a class="dnav-primary-link" href="#">Get Started →</a>
        </nav>
      </div>
      <p class="card-desc">A navbar with an integrated search input — ideal for documentation or component libraries.</p>
>>>>>>> upstream/main
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c6', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c6', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c6" class="code-block"><code>&lt;nav class="navbar-search"&gt;
  &lt;span class="brand"&gt;UIverse&lt;/span&gt;
  &lt;div class="search-group"&gt;
    &lt;i class="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
    &lt;input type="text" placeholder="Search docs..."&gt;
  &lt;/div&gt;
<<<<<<< HEAD
  &lt;a href="#"&gt;Get Started G��&lt;/a&gt;
=======
  &lt;a href="#"&gt;Get Started →&lt;/a&gt;
>>>>>>> upstream/main
&lt;/nav&gt;

.navbar-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
}
.navbar-search .search-group {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px 14px;
  flex: 0 1 280px;
}
.navbar-search .search-group input {
  border: none; outline: none; background: transparent; font-size: 14px;
}</code></pre>
    </div>

    <!-- Split Navbar -->
    <div class="component-card" data-name="split navbar three column utility" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">Split Navbar</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="nav-card-preview">
        <nav class="demo-nav-split">
          <span class="dnav-brand">UIverse</span>
          <div class="dnav-links">
            <a href="#">Dashboard</a>
            <a href="#">Projects</a>
            <a href="#">Settings</a>
          </div>
          <div class="dnav-meta">
            <a href="#">Help</a>
            <span class="dnav-badge">New</span>
          </div>
        </nav>
      </div>
<<<<<<< HEAD
      <p class="card-desc">A three-section navbar G�� brand left, main links center, utility links right.</p>
=======
      <p class="card-desc">A three-section navbar — brand left, main links center, utility links right.</p>
>>>>>>> upstream/main
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c7', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c7', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c7" class="code-block"><code>&lt;nav class="navbar-split"&gt;
  &lt;span class="brand"&gt;UIverse&lt;/span&gt;
  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Dashboard&lt;/a&gt;
    &lt;a href="#"&gt;Projects&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="meta"&gt;
    &lt;a href="#"&gt;Help&lt;/a&gt;
    &lt;span class="badge"&gt;New&lt;/span&gt;
  &lt;/div&gt;
&lt;/nav&gt;

.navbar-split {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
}
.navbar-split .links { display: flex; gap: 20px; }
.navbar-split .meta { display: flex; align-items: center; gap: 12px; }
.navbar-split .badge {
  background: rgba(235,104,53,0.1);
  color: #eb6835;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}</code></pre>
    </div>

    <!-- Gradient Navbar -->
    <div class="component-card" data-name="gradient navbar colorful dark" data-cat="dark">
      <div class="card-top">
        <span class="card-label">Gradient Navbar</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="nav-card-preview">
        <nav class="demo-nav-gradient">
<<<<<<< HEAD
          <span class="dnav-brand" style="color:#fff;">G�� UIverse</span>
=======
          <span class="dnav-brand" style="color:#fff;">⬡ UIverse</span>
>>>>>>> upstream/main
          <div class="dnav-links">
            <a href="#" style="color:rgba(255,255,255,0.8);">Home</a>
            <a href="#" style="color:rgba(255,255,255,0.8);">Work</a>
            <a href="#" style="color:rgba(255,255,255,0.8);">Blog</a>
          </div>
          <button class="dnav-white-btn">Sign Up Free</button>
        </nav>
      </div>
<<<<<<< HEAD
      <p class="card-desc">A bold gradient navbar G�� eye-catching and modern for landing pages.</p>
=======
      <p class="card-desc">A bold gradient navbar — eye-catching and modern for landing pages.</p>
>>>>>>> upstream/main
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c8', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c8', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c8" class="code-block"><code>&lt;nav class="navbar-gradient"&gt;
<<<<<<< HEAD
  &lt;span class="brand"&gt;G�� UIverse&lt;/span&gt;
=======
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;
>>>>>>> upstream/main
  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;Work&lt;/a&gt;
    &lt;a href="#"&gt;Blog&lt;/a&gt;
  &lt;/div&gt;
  &lt;button&gt;Sign Up Free&lt;/button&gt;
&lt;/nav&gt;

.navbar-gradient {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  background: linear-gradient(90deg, #eb6835 0%, #6c5ce7 100%);
}
.navbar-gradient .brand { color: #fff; font-weight: 800; }
.navbar-gradient .links a { color: rgba(255,255,255,0.85); margin-left: 20px; text-decoration: none; }
.navbar-gradient button {
  background: #fff;
  color: #eb6835;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}</code></pre>
    </div>

  </div><!-- /navbar-grid -->

</main>
```

### Cards (cards)

- Path: cards.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 100/100
- Tags: layout, components
- Aliases: card, panels
- Description: Card layouts and content blocks
- CSS assets: cards.css, command-palette.css, css/main.css, css/url-state.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css, playground.css, shared-page.css, style.css
- JS assets: js/bootstrap.js, js/core/utils.js, js/features/accessibility.js, js/features/alerts.js, js/features/code-tools.js, js/features/command-palette.js, js/features/popup.js, js/features/sandbox.js, js/features/scroll.js, js/features/search.js, js/features/sidebar.js, js/features/theme.js, js/features/toast.js, js/features/url-state-integration.js, js/features/url-state.js, playground.js
- Headings:
  - H1: Card Components
  - H3: Likhitha Nagraj
  - H3: Ankit Pardeshi
  - H4: Card Title
  - H4: Premium Headphones
  - H4: Pro Plan
  - H4: Basic Plan
  - H4: Trial Plan

Usage snippet:

```html
<main class="main-home">

  <!-- Page Hero -->
  <div class="page-hero">
    <div class="page-hero-left">
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>Cards</span>
      </div>
      <h1 class="page-title">Card Components</h1>
      <p class="page-desc">A rich collection of reusable card layouts — from profile cards to product, blog, notification, and social media cards. Hover to interact, click to copy.</p>
      <div class="page-meta">
        <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 9 Components</span>
        <span class="meta-badge"><i class="fa-solid fa-code"></i> Pure CSS</span>
        <span class="meta-badge"><i class="fa-solid fa-hand-pointer"></i> Hover Effects</span>
      </div>
    </div>
    <div class="page-hero-right">
      <div class="hero-card-preview">
        <div class="mini-profile-card">
          <div class="mini-avatar">LN</div>
          <div>
            <strong>Chinmay Munj</strong>
            <span>Engineer · UIverse</span>
          </div>
        </div>
        <div class="mini-stat-row">
          <div class="mini-stat"><span>120+</span><p>Cards</p></div>
          <div class="mini-stat"><span>9</span><p>Styles</p></div>
          <div class="mini-stat"><span>100%</span><p>Free</p></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Filter Bar -->
  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterCards('all', this)">All</button>
    <button class="filter-btn" onclick="filterCards('profile', this)">Profile</button>
    <button class="filter-btn" onclick="filterCards('content', this)">Content</button>
    <button class="filter-btn" onclick="filterCards('social', this)">Social</button>
    <button class="filter-btn" onclick="filterCards('commerce', this)">Commerce</button>
    <div class="filter-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Filter cards..." oninput="liveFilter(this.value)" />
    </div>
  </div>

  <!-- Cards Grid -->
  <div class="cards-grid" id="cardsGrid">

    <!-- Profile Card -->
    <div class="component-card" data-name="profile card hover avatar" data-cat="profile">
      <div class="card-top">
        <span class="card-label">Profile Card</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="profile-card">
          <div class="profile-avatar">LN</div>
          <h3 class="profile-name">Likhitha Nagraj</h3>
          <p class="profile-role">Embedded Systems Engineer</p>
          <button class="profile-btn">Follow</button>
        </div>
      </div>
      <p class="card-desc">A centered profile card with avatar, name, role, and a follow button. Lifts on hover.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c1', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c1', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Profile Card')">Add to My Collection</button>
      </div>
      <pre id="c1" class="code-block"><code>&lt;div class="profile-card"&gt;
  &lt;div class="profile-avatar"&gt;LN&lt;/div&gt;
  &lt;h3&gt;Likhitha Nagraj&lt;/h3&gt;
  &lt;p&gt;Embedded Systems Engineer&lt;/p&gt;
  &lt;button&gt;Follow&lt;/button&gt;
&lt;/div&gt;

.profile-card {
  background: #fff;
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
  max-width: 240px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.profile-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(108,92,231,0.18);
}
.profile-avatar {
  width: 64px; height: 64px; border-radius: 50%;
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: #fff; font-size: 20px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 12px;
}</code></pre>
    </div>

    <!-- Student Card -->
    <div class="component-card" data-name="student card connect profile" data-cat="profile">
      <div class="card-top">
        <span class="card-label">Student Card</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="profile-card student-card">
          <div class="profile-avatar" style="background: linear-gradient(135deg, #eb6835, #fdcb6e);">AP</div>
          <h3 class="profile-name">Ankit Pardeshi</h3>
          <p class="profile-role">AI &amp; Data Science Student</p>
          <button class="profile-btn connect-btn">Connect</button>
        </div>
      </div>
      <p class="card-desc">A variant of the profile card with a warm gradient and a connect CTA — perfect for student or developer portfolios.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c2', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c2', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Student Card')">Add to My Collection</button>
      </div>
      <pre id="c2" class="code-block"><code>&lt;div class="profile-card student-card"&gt;
  &lt;div class="profile-avatar"&gt;AP&lt;/div&gt;
  &lt;h3&gt;Ankit Pardeshi&lt;/h3&gt;
  &lt;p&gt;AI &amp; Data Science Student&lt;/p&gt;
  &lt;button&gt;Connect&lt;/button&gt;
&lt;/div&gt;

/* Same .profile-card base styles as above */
.student-card .profile-avatar {
  background: linear-gradient(135deg, #eb6835, #fdcb6e);
}
.connect-btn {
  background: linear-gradient(90deg, #eb6835, #fdcb6e);
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}</code></pre>
    </div>

    <!-- Simple Card -->
    <div class="component-card" data-name="simple card basic clean" data-cat="content">
      <div class="card-top">
        <span class="card-label">Simple Card</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="simple-card">
          <h4>Card Title</h4>
          <p>This is a simple card component with a clean, minimal design.</p>
          <button class="simple-card-btn">Learn More</button>
        </div>
      </div>
      <p class="card-desc">A minimal content card — the building block for most UI layouts.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c3', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c3', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Simple Card')">Add to My Collection</button>
      </div>
      <pre id="c3" class="code-block"><code>&lt;div class="simple-card"&gt;
  &lt;h4&gt;Card Title&lt;/h4&gt;
  &lt;p&gt;Card description goes here.&lt;/p&gt;
  &lt;button&gt;Learn More&lt;/button&gt;
&lt;/div&gt;

.simple-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 14px;
  padding: 24px;
  max-width: 280px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.simple-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 32px rgba(0,0,0,0.09);
}</code></pre>
    </div>

    <!-- Product Card -->
    <div class="component-card" data-name="product card price add to cart" data-cat="commerce">
      <div class="card-top">
        <span class="card-label">Product Card</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="product-card">
          <div class="product-badge">New</div>
          <div class="product-icon">🎧</div>
          <h4>Premium Headphones</h4>
          <p class="product-price">$49.99</p>
          <p class="product-desc">High-quality audio with noise cancellation.</p>
          <button class="product-btn">Add to Cart</button>
        </div>
      </div>
      <p class="card-desc">An e-commerce product card with badge, price highlight, and a cart CTA button.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c4', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c4', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Product Card')">Add to My Collection</button>
      </div>
      <pre id="c4" class="code-block"><code>&lt;div class="product-card"&gt;
  &lt;div class="product-badge"&gt;New&lt;/div&gt;
  &lt;div class="product-icon"&gt;🎧&lt;/div&gt;
  &lt;h4&gt;Premium Headphones&lt;/h4&gt;
  &lt;p class="price"&gt;$49.99&lt;/p&gt;
  &lt;p&gt;High-quality audio with noise cancellation.&lt;/p&gt;
  &lt;button&gt;Add to Cart&lt;/button&gt;
&lt;/div&gt;

.product-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  max-width: 240px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}
.product-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,0.1); }
.price { font-size: 22px; font-weight: 800; color: #eb6835; }</code></pre>
    </div>

    <!-- Pricing Card -->

    <div class="component-card" data-name="pricing card plan subscription" data-cat="commerce">
      <div class="card-top">
        <span class="card-label">Pricing Card</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview dark-preview">
        <div class="pricing-card">
          <div class="pricing-badge">Most Popular</div>
          <h4>Pro Plan</h4>
          <div class="pricing-price"><span class="pricing-currency">$</span>19<span class="pricing-period">/mo</span></div>
          <ul class="pricing-features">
            <li><i class="fa-solid fa-check"></i> Unlimited components</li>
            <li><i class="fa-solid fa-check"></i> Priority support</li>
            <li><i class="fa-solid fa-check"></i> Custom themes</li>
          </ul>
          <button class="pricing-btn">Choose Plan</button>
        </div>
      </div>
      <p class="card-desc">A premium pricing card with feature list, price, and a highlighted CTA button.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c5', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c5', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Pricing Card')">Add to My Collection</button>
      </div>
      <pre id="c5" class="code-block"><code>&lt;div class="pricing-card"&gt;
  &lt;div class="pricing-badge"&gt;Most Popular&lt;/div&gt;
  &lt;h4&gt;Pro Plan&lt;/h4&gt;
  &lt;div class="price"&gt;$19&lt;span&gt;/mo&lt;/span&gt;&lt;/div&gt;
  &lt;ul&gt;
    &lt;li&gt;✓ Unlimited components&lt;/li&gt;
    &lt;li&gt;✓ Priority support&lt;/li&gt;
    &lt;li&gt;✓ Custom themes&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button&gt;Choose Plan&lt;/button&gt;
&lt;/div&gt;

.pricing-card {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 1px solid rgba(108,92,231,0.4);
  border-radius: 20px;
  padding: 28px 24px;
  color: #fff;
  text-align: center;
  max-width: 240px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.pricing-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 50px rgba(108,92,231,0.3); }</code></pre>

    </div>
    <!-- =============================================
     FREE / BASIC PLAN CARD
     ============================================= -->
<div class="component-card" data-name="free basic plan card pricing" data-cat="commerce">
  <div class="card-top">
    <span class="card-label">Free / Basic Plan</span>
    <span class="card-tag tag-popular">Free</span>
  </div>
  <div class="card-preview">
    <div class="basic-card">
      <div class="basic-badge">Free Forever</div>
      <div class="basic-icon">🌿</div>
      <h4>Basic Plan</h4>
      <p class="basic-price">$0<span>/mo</span></p>
      <p class="basic-desc">Perfect for individuals just getting started.</p>
      <ul class="basic-features">
        <li><span class="feat-check">✓</span> 5 projects</li>
        <li><span class="feat-check">✓</span> 1 GB storage</li>
        <li><span class="feat-check">✓</span> Community support</li>
        
      </ul>
      <button class="basic-btn">Get Started Free</button>
    </div>
  </div>
  <p class="card-desc">A clean free-tier card with feature list, $0 price, and a soft green CTA button.</p>
  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c-basic', this)">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="action-btn copy-btn" onclick="copyCode('c-basic', this)">
      <i class="fa-solid fa-copy"></i> Copy
    </button>
    <button onclick="addToCollection('Free Basic Plan Card')">Add to My Collection</button>
  </div>
  <pre id="c-basic" class="code-block"><code>&lt;div class="basic-card"&gt;
  &lt;div class="basic-badge"&gt;Free Forever&lt;/div&gt;
  &lt;div class="basic-icon"&gt;🌿&lt;/div&gt;
  &lt;h4&gt;Basic Plan&lt;/h4&gt;
  &lt;p class="basic-price"&gt;$0&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
  &lt;p&gt;Perfect for individuals just getting started.&lt;/p&gt;
  &lt;ul class="basic-features"&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; 5 projects&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; 1 GB storage&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; Community support&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-cross"&gt;✗&lt;/span&gt; Custom domain&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-cross"&gt;✗&lt;/span&gt; Analytics&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button class="basic-btn"&gt;Get Started Free&lt;/button&gt;
&lt;/div&gt;

.basic-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  max-width: 240px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}
.basic-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,0.1); }
.basic-badge {
  display: inline-block;
  background: #e6f4ea;
  color: #2d7a3a;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.basic-icon { font-size: 32px; margin-bottom: 8px; }
.basic-card h4 { font-size: 18px; font-weight: 700; color: #111; margin: 0 0 6px; }
.basic-price { font-size: 28px; font-weight: 800; color: #2d7a3a; margin: 0 0 6px; }
.basic-price span { font-size: 14px; font-weight: 400; color: #999; }
.basic-card p { font-size: 13px; color: #888; margin: 0 0 14px; }
.basic-features {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  text-align: left;
}
.basic-features li { font-size: 13px; color: #555; padding: 4px 0; }
.feat-check { color: #2d7a3a; font-weight: 700; margin-right: 6px; }
.feat-cross { color: #ccc; font-weight: 700; margin-right: 6px; }
.basic-btn {
  width: 100%;
  padding: 10px 0;
  background: #e6f4ea;
  color: #2d7a3a;
  border: 1.5px solid #a8d5b0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.basic-btn:hover { background: #c8eacf; transform: translateY(-2px); }</code></pre>
</div>


<!-- =============================================
     TRIAL PLAN CARD
     ============================================= -->
<div class="component-card" data-name="trial plan card pricing 14 day" data-cat="commerce">
  <div class="card-top">
    <span class="card-label">Trial Plan</span>
    <span class="card-tag tag-trending">Trial</span>
  </div>
  <div class="card-preview">
    <div class="trial-card">
      <div class="trial-badge">14-Day Trial</div>
      <div class="trial-icon">⏱️</div>
      <h4>Trial Plan</h4>
      <p class="trial-price-label">Free for 14 days</p>
      <p class="trial-then">then $9<span>/mo</span></p>
      <p class="trial-desc">Full access. No credit card required.</p>
      <ul class="trial-features">
        <li><span class="feat-check">✓</span> 20 projects</li>
        <li><span class="feat-check">✓</span> 10 GB storage</li>
        <li><span class="feat-check">✓</span> Email support</li>
        <li><span class="feat-check">✓</span> Custom domain</li>
        <li><span class="feat-cross">✗</span> Advanced analytics</li>
      </ul>
      <button class="trial-btn">Start Free Trial</button>
    </div>
  </div>
  <p class="card-desc">A trial plan card with countdown feel, free period highlight, and post-trial pricing shown clearly.</p>
  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c-trial', this)">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="action-btn copy-btn" onclick="copyCode('c-trial', this)">
      <i class="fa-solid fa-copy"></i> Copy
    </button>
    <button onclick="addToCollection('Trial Plan Card')">Add to My Collection</button>
  </div>
  <pre id="c-trial" class="code-block"><code>&lt;div class="trial-card"&gt;
  &lt;div class="trial-badge"&gt;14-Day Trial&lt;/div&gt;
  &lt;div class="trial-icon"&gt;⏱️&lt;/div&gt;
  &lt;h4&gt;Trial Plan&lt;/h4&gt;
  &lt;p class="trial-price-label"&gt;Free for 14 days&lt;/p&gt;
  &lt;p class="trial-then"&gt;then $9&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
  &lt;p&gt;Full access. No credit card required.&lt;/p&gt;
  &lt;ul class="trial-features"&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; 20 projects&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; 10 GB storage&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; Email support&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; Custom domain&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-cross"&gt;✗&lt;/span&gt; Advanced analytics&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button class="trial-btn"&gt;Start Free Trial&lt;/button&gt;
&lt;/div&gt;

.trial-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  max-width: 240px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}
.trial-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,0.1); }
.trial-badge {
  display: inline-block;
  background: #fff4e0;
  color: #b35a00;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.trial-icon { font-size: 32px; margin-bottom: 8px; }
.trial-card h4 { font-size: 18px; font-weight: 700; color: #111; margin: 0 0 6px; }
.trial-price-label { font-size: 18px; font-weight: 800; color: #eb6835; margin: 0 0 4px; }
.trial-then { font-size: 14px; color: #999; margin: 0 0 6px; }
.trial-then span { font-size: 12px; }
.trial-card p { font-size: 13px; color: #888; margin: 0 0 14px; }
.trial-features {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  text-align: left;
}
.trial-features li { font-size: 13px; color: #555; padding: 4px 0; }
.trial-btn {
  width: 100%;
  padding: 10px 0;
  background: #fff4e0;
  color: #b35a00;
  border: 1.5px solid #f5c97a;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.trial-btn:hover { background: #ffe5b0; transform: translateY(-2px); }</code></pre>
</div>


<!-- =============================================
     PREMIUM PLAN CARD
     ============================================= -->
<div class="component-card" data-name="premium plan card pricing popular" data-cat="commerce">
  <div class="card-top">
    <span class="card-label">Premium Plan</span>
    <span class="card-tag tag-popular">Popular</span>
  </div>
  <div class="card-preview dark-preview">
    <div class="premium-card">
      <div class="premium-badge">Most Popular</div>
      <div class="premium-icon">⭐</div>
      <h4>Premium Plan</h4>
      <p class="premium-price">$<span class="premium-amount">19</span><span class="premium-period">/mo</span></p>
      <p class="premium-desc">Best for growing teams and businesses.</p>
      <ul class="premium-features">
        <li><i class="fa-solid fa-check"></i> Unlimited projects</li>
        <li><i class="fa-solid fa-check"></i> 100 GB storage</li>
        <li><i class="fa-solid fa-check"></i> Priority support</li>
        <li><i class="fa-solid fa-check"></i> Custom domain</li>
        <li><i class="fa-solid fa-check"></i> Analytics dashboard</li>
      </ul>
      <button class="premium-btn">Choose Premium</button>
    </div>
  </div>
  <p class="card-desc">A premium dark-themed pricing card with star badge, feature list, and a glowing CTA button.</p>
  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c-premium', this)">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="action-btn copy-btn" onclick="copyCode('c-premium', this)">
      <i class="fa-solid fa-copy"></i> Copy
    </button>
    <button onclick="addToCollection('Premium Plan Card')">Add to My Collection</button>
  </div>
  <pre id="c-premium" class="code-block"><code>&lt;div class="premium-card"&gt;
  &lt;div class="premium-badge"&gt;Most Popular&lt;/div&gt;
  &lt;div class="premium-icon"&gt;⭐&lt;/div&gt;
  &lt;h4&gt;Premium Plan&lt;/h4&gt;
  &lt;p class="premium-price"&gt;$&lt;span&gt;19&lt;/span&gt;&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
  &lt;p&gt;Best for growing teams and businesses.&lt;/p&gt;
  &lt;ul class="premium-features"&gt;
    &lt;li&gt;✓ Unlimited projects&lt;/li&gt;
    &lt;li&gt;✓ 100 GB storage&lt;/li&gt;
    &lt;li&gt;✓ Priority support&lt;/li&gt;
    &lt;li&gt;✓ Custom domain&lt;/li&gt;
    &lt;li&gt;✓ Analytics dashboard&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button class="premium-btn"&gt;Choose Premium&lt;/button&gt;
&lt;/div&gt;

.premium-card {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 1px solid rgba(108,92,231,0.4);
  border-radius: 20px;
  padding: 28px 24px;
  color: #fff;
  text-align: center;
  max-width: 240px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.premium-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 50px rgba(108,92,231,0.3); }
.premium-badge {
  display: inline-block;
  background: rgba(108,92,231,0.25);
  color: #c4b5fd;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  border: 1px solid rgba(108,92,231,0.4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.premium-icon { font-size: 32px; margin-bottom: 8px; }
.premium-card h4 { font-size: 18px; font-weight: 700; color: #fff; margin: 0 0 6px; }
.premium-price { font-size: 14px; color: #c4b5fd; margin: 0 0 6px; }
.premium-amount { font-size: 36px; font-weight: 800; color: #fff; }
.premium-period { font-size: 14px; color: #8b7fd4; }
.premium-card p { font-size: 13px; color: #a0a0c0; margin: 0 0 14px; }
.premium-features {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  text-align: left;
}
.premium-features li {
  font-size: 13px;
  color: #d0d0f0;
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.premium-features li i { color: #7c6fcd; font-size: 12px; }
.premium-btn {
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(135deg, #6c5ce7, #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  box-shadow: 0 4px 20px rgba(108,92,231,0.5);
}
.premium-btn:hover { opacity: 0.9; transform: translateY(-2px); }</code></pre>
</div>


<!-- =============================================
     ADVANCED PLAN CARD
     ============================================= -->
<div class="component-card" data-name="advanced plan card pricing enterprise" data-cat="commerce">
  <div class="card-top">
    <span class="card-label">Advanced Plan</span>
    <span class="card-tag tag-trending">Advanced</span>
  </div>
  <div class="card-preview dark-preview">
    <div class="advanced-card">
      <div class="advanced-badge">Enterprise</div>
      <div class="advanced-icon">🚀</div>
      <h4>Advanced Plan</h4>
      <p class="advanced-price">$<span class="advanced-amount">49</span><span class="advanced-period">/mo</span></p>
      <p class="advanced-desc">For power users, agencies & enterprises.</p>
      <ul class="advanced-features">
        <li><i class="fa-solid fa-check"></i> Unlimited everything</li>
        <li><i class="fa-solid fa-check"></i> 1 TB storage</li>
        <li><i class="fa-solid fa-check"></i> Dedicated support</li>
        <li><i class="fa-solid fa-check"></i> White-label option</li>
        <li><i class="fa-solid fa-check"></i> Advanced analytics</li>
      </ul>
      <button class="advanced-btn">Go Advanced</button>
    </div>
  </div>
  <p class="card-desc">A dark enterprise-tier pricing card with gold accents, feature list, and a premium CTA button.</p>
  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c-advanced', this)">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="action-btn copy-btn" onclick="copyCode('c-advanced', this)">
      <i class="fa-solid fa-copy"></i> Copy
    </button>
    <button onclick="addToCollection('Advanced Plan Card')">Add to My Collection</button>
  </div>
  <pre id="c-advanced" class="code-block"><code>&lt;div class="advanced-card"&gt;
  &lt;div class="advanced-badge"&gt;Enterprise&lt;/div&gt;
  &lt;div class="advanced-icon"&gt;🚀&lt;/div&gt;
  &lt;h4&gt;Advanced Plan&lt;/h4&gt;
  &lt;p class="advanced-price"&gt;$&lt;span&gt;49&lt;/span&gt;&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
  &lt;p&gt;For power users, agencies and enterprises.&lt;/p&gt;
  &lt;ul class="advanced-features"&gt;
    &lt;li&gt;✓ Unlimited everything&lt;/li&gt;
    &lt;li&gt;✓ 1 TB storage&lt;/li&gt;
    &lt;li&gt;✓ Dedicated support&lt;/li&gt;
    &lt;li&gt;✓ White-label option&lt;/li&gt;
    &lt;li&gt;✓ Advanced analytics&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button class="advanced-btn"&gt;Go Advanced&lt;/button&gt;
&lt;/div&gt;

.advanced-card {
  background: linear-gradient(135deg, #0f0f1a, #1a1200);
  border: 1px solid rgba(212,175,55,0.35);
  border-radius: 20px;
  padding: 28px 24px;
  color: #fff;
  text-align: center;
  max-width: 240px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.advanced-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 50px rgba(212,175,55,0.2); }
.advanced-badge {
  display: inline-block;
  background: rgba(212,175,55,0.15);
  color: #f0c040;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  border: 1px solid rgba(212,175,55,0.4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.advanced-icon { font-size: 32px; margin-bottom: 8px; }
.advanced-card h4 { font-size: 18px; font-weight: 700; color: #fff; margin: 0 0 6px; }
.advanced-price { font-size: 14px; color: #f0c040; margin: 0 0 6px; }
.advanced-amount { font-size: 36px; font-weight: 800; color: #fff; }
.advanced-period { font-size: 14px; color: #a08030; }
.advanced-card p { font-size: 13px; color: #a0a090; margin: 0 0 14px; }
.advanced-features {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  text-align: left;
}
.advanced-features li {
  font-size: 13px;
  color: #d0d0b0;
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.advanced-features li i { color: #d4af37; font-size: 12px; }
.advanced-btn {
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(135deg, #b8860b, #d4af37);
  color: #0f0f1a;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  box-shadow: 0 4px 20px rgba(212,175,55,0.4);
}
.advanced-btn:hover { opacity: 0.9; transform: translateY(-2px); }</code></pre>
</div>
    

    <!-- Image Card -->
    <div class="component-card" data-name="image card photo media" data-cat="content">
      <div class="card-top">
        <span class="card-label">Image Card</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="image-card">
          <div class="image-card-thumb">
            <div class="image-placeholder"><i class="fa-solid fa-image"></i></div>
          </div>
          <div class="image-card-body">
            <span class="image-tag">Nature</span>
            <h4>Scenic View</h4>
            <p>Beautiful scenic card design for nature and travel content.</p>
            <a href="#" class="image-card-link">Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <p class="card-desc">A media card with a thumbnail area, category tag, title, and a read more link.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c6', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c6', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Image Card')">Add to My Collection</button>
      </div>
      <pre id="c6" class="code-block"><code>&lt;div class="image-card"&gt;
  &lt;img src="https://picsum.photos/500/300?random=30" alt="..."&gt;
  &lt;div class="image-card-body"&gt;
    &lt;span class="tag"&gt;Nature&lt;/span&gt;
    &lt;h4&gt;Scenic View&lt;/h4&gt;
    &lt;p&gt;Beautiful scenic card design.&lt;/p&gt;
    &lt;a href="#"&gt;Read More →&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

.image-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  max-width: 280px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.image-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,0.12); }</code></pre>
    </div>

    <!-- Blog Card -->
    <div class="component-card" data-name="blog card article post" data-cat="content">
      <div class="card-top">
        <span class="card-label">Blog Card</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="blog-card">
          <div class="blog-thumb">
            <div class="blog-thumb-inner"></div>
            <span class="blog-cat">Design</span>
          </div>
          <div class="blog-body">
            <div class="blog-meta">
              <span><i class="fa-solid fa-calendar-days"></i> May 2026</span>
              <span><i class="fa-solid fa-clock"></i> 5 min read</span>
            </div>
            <h4>Getting Started with UI Design</h4>
            <p>Learn the fundamentals of modern UI/UX design with practical tips.</p>
            <div class="blog-footer">
              <div class="blog-author">
                <div class="blog-author-avatar">AD</div>
                <span>Alex Dev</span>
              </div>
              <a href="#" class="blog-link">Read <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      <p class="card-desc">A full-featured blog article card with category, date, author, and read time.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c7', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c7', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Blog Card')">Add to My Collection</button>
      </div>
      <pre id="c7" class="code-block"><code>&lt;div class="blog-card"&gt;
  &lt;div class="blog-thumb"&gt;
    &lt;img src="..." alt="..."&gt;
    &lt;span class="blog-cat"&gt;Design&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="blog-body"&gt;
    &lt;div class="meta"&gt;May 2026 · 5 min read&lt;/div&gt;
    &lt;h4&gt;Getting Started with UI Design&lt;/h4&gt;
    &lt;p&gt;Learn UI fundamentals easily.&lt;/p&gt;
    &lt;div class="blog-footer"&gt;
      &lt;span&gt;Alex Dev&lt;/span&gt;
      &lt;a href="#"&gt;Read →&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

.blog-card {
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  max-width: 290px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.blog-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,0.12); }</code></pre>
    </div>

    <!-- Notification Card -->
    <div class="component-card" data-name="notification card alert message" data-cat="social">
      <div class="card-top">
        <span class="card-label">Notification Card</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="notif-stack">
          <div class="notif-card notif-purple">
            <div class="notif-icon"><i class="fa-solid fa-bell"></i></div>
            <div class="notif-body">
              <h4>New Message</h4>
              <p>You have received a new message from Alex.</p>
              <span class="notif-time">2 min ago</span>
            </div>
            <button class="notif-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="notif-card notif-green">
            <div class="notif-icon notif-icon-green"><i class="fa-solid fa-check"></i></div>
            <div class="notif-body">
              <h4>Upload Complete</h4>
              <p>Your file has been successfully uploaded.</p>
              <span class="notif-time">Just now</span>
            </div>
            <button class="notif-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </div>
      <p class="card-desc">Compact notification cards with icon, message, timestamp, and dismiss button.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c8', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c8', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Notification Card')">Add to My Collection</button>
      </div>
      <pre id="c8" class="code-block"><code>&lt;div class="notif-card"&gt;
  &lt;div class="notif-icon"&gt;🔔&lt;/div&gt;
  &lt;div class="notif-body"&gt;
    &lt;h4&gt;New Message&lt;/h4&gt;
    &lt;p&gt;You have received a new message.&lt;/p&gt;
    &lt;span&gt;2 min ago&lt;/span&gt;
  &lt;/div&gt;
  &lt;button class="notif-close"&gt;✕&lt;/button&gt;
&lt;/div&gt;

.notif-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #fff;
  border-left: 4px solid #6c5ce7;
  border-radius: 10px;
  padding: 14px 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transition: transform 0.25s;
}
.notif-card:hover { transform: translateX(4px); }</code></pre>
    </div>

    <!-- Social Media Card -->
    <div class="component-card" data-name="social media card tweet post" data-cat="social">
      <div class="card-top">
        <span class="card-label">Social Card</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="social-card">
          <div class="social-header">
            <div class="social-avatar">JD</div>
            <div class="social-user">
              <strong>John Doe</strong>
              <span>@johndoe · 2h</span>
            </div>
            <div class="social-platform"><i class="fab fa-x-twitter"></i></div>
          </div>
          <p class="social-text">Just launched my new UI component library! Check it out and let me know what you think. 🚀</p>
          <div class="social-actions">
            <button class="social-btn"><i class="fa-regular fa-heart"></i> 42</button>
            <button class="social-btn"><i class="fa-regular fa-comment"></i> 12</button>
            <button class="social-btn"><i class="fa-solid fa-retweet"></i> 5</button>
            <button class="social-btn share-btn"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
          </div>
        </div>
      </div>
      <p class="card-desc">A Twitter/X-style social card with avatar, actions bar, and hover interactions.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c9', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c9', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Social Media Card')">Add to My Collection</button>
      </div>
      <pre id="c9" class="code-block"><code>&lt;div class="social-card"&gt;
  &lt;div class="social-header"&gt;
    &lt;div class="social-avatar"&gt;JD&lt;/div&gt;
    &lt;div&gt;
      &lt;strong&gt;John Doe&lt;/strong&gt;
      &lt;span&gt;@johndoe · 2h&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;p&gt;Just launched my new UI library! 🚀&lt;/p&gt;
  &lt;div class="social-actions"&gt;
    &lt;button&gt;♥ 42&lt;/button&gt;
    &lt;button&gt;💬 12&lt;/button&gt;
    &lt;button&gt;🔄 5&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

.social-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 20px;
  max-width: 320px;
  transition: box-shadow 0.3s;
}
.social-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.1); }</code></pre>
    </div>

   
<!-- Glassmorphism Card -->
<div class="component-card" data-name="glassmorphism modern blur card" data-cat="content">
  <div class="card-top">
    <span class="card-label">Glass Card</span>
    <span class="card-tag tag-trending">Modern</span>
  </div>

  <div class="card-preview dark-preview">
    <div class="glass-card">
      <div class="glass-icon">
        <i class="fa-solid fa-gem"></i>
      </div>

      <h4>Glass UI</h4>

      <p>
        Beautiful frosted glass effect with modern gradients.
      </p>

      <button class="glass-btn">
        Explore
      </button>
    </div>
  </div>

  <p class="card-desc">
    Modern glassmorphism card with blur and hover effects.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c10', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c10', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c10" class="code-block"><code>&lt;div class="glass-card"&gt;
  &lt;div class="glass-icon"&gt;
    &lt;i class="fa-solid fa-gem"&gt;&lt;/i&gt;
  &lt;/div&gt;

  &lt;h4&gt;Glass UI&lt;/h4&gt;

  &lt;p&gt;
    Beautiful frosted glass effect with modern gradients.
  &lt;/p&gt;

  &lt;button class="glass-btn"&gt;
    Explore
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
</div>

<!-- Stats Card -->
<div class="component-card" data-name="analytics stats dashboard card" data-cat="content">
  <div class="card-top">
    <span class="card-label">Stats Card</span>
    <span class="card-tag tag-popular">Popular</span>
  </div>

  <div class="card-preview">
    <div class="stats-card">
      <div class="stats-icon">
        <i class="fa-solid fa-chart-line"></i>
      </div>

      <div class="stats-info">
        <h3>24.8K</h3>
        <p>Total Visitors</p>
      </div>

      <span class="stats-growth">
        +12%
      </span>
    </div>
  </div>

  <p class="card-desc">
    Dashboard analytics card with live growth indicator.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c11', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c11', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c11" class="code-block"><code>&lt;div class="stats-card"&gt;
  &lt;div class="stats-icon"&gt;
    &lt;i class="fa-solid fa-chart-line"&gt;&lt;/i&gt;
  &lt;/div&gt;

  &lt;div class="stats-info"&gt;
    &lt;h3&gt;24.8K&lt;/h3&gt;
    &lt;p&gt;Total Visitors&lt;/p&gt;
  &lt;/div&gt;

  &lt;span class="stats-growth"&gt;
    +12%
  &lt;/span&gt;
&lt;/div&gt;</code></pre>
</div>

<!-- Testimonial Card -->
<div class="component-card" data-name="testimonial review customer feedback card" data-cat="social">
  <div class="card-top">
    <span class="card-label">Testimonial Card</span>
    <span class="card-tag tag-essential">Essential</span>
  </div>

  <div class="card-preview">
    <div class="testimonial-card">

      <div class="testimonial-stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>

      <p class="testimonial-text">
        “UIverse has completely improved my workflow. Amazing components!”
      </p>

      <div class="testimonial-user">

        <div class="testimonial-avatar">
          EM
        </div>

        <div>
          <strong>Emma Wilson</strong>
          <span>Frontend Developer</span>
        </div>

      </div>

    </div>
  </div>

  <p class="card-desc">
    Customer review card with star ratings and profile section.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c12', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c12', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c12" class="code-block"><code>&lt;div class="testimonial-card"&gt;
  &lt;p&gt;
    Amazing UI components and smooth experience.
  &lt;/p&gt;
&lt;/div&gt;</code></pre>
</div>

<!-- Music Player Card -->
<div class="component-card" data-name="music player audio media card" data-cat="content">
  <div class="card-top">
    <span class="card-label">Music Card</span>
    <span class="card-tag tag-trending">Trending</span>
  </div>

  <div class="card-preview dark-preview">

    <div class="music-card">

      <div class="music-cover">
        <i class="fa-solid fa-music"></i>
      </div>

      <h4>Night Vibes</h4>

      <p>Lofi Chill Mix</p>

      <div class="music-controls">

        <button>
          <i class="fa-solid fa-backward"></i>
        </button>

        <button class="play-btn">
          <i class="fa-solid fa-play"></i>
        </button>

        <button>
          <i class="fa-solid fa-forward"></i>
        </button>

      </div>

    </div>

  </div>

  <p class="card-desc">
    Music streaming inspired UI card with controls.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c13', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c13', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c13" class="code-block"><code>&lt;div class="music-card"&gt;
  &lt;h4&gt;Night Vibes&lt;/h4&gt;
&lt;/div&gt;</code></pre>
</div>

<!-- Team Member Card -->
<div class="component-card" data-name="team member company profile card" data-cat="profile">

  <div class="card-top">
    <span class="card-label">Team Card</span>
    <span class="card-tag tag-popular">Popular</span>
  </div>

  <div class="card-preview">

    <div class="team-card">

      <div class="team-cover"></div>

      <div class="team-avatar">
        SK
      </div>

      <div class="team-body">

        <h4>Sneha Kapoor</h4>

        <p>UI/UX Designer</p>

        <div class="team-socials">

          <a href="#">
            <i class="fab fa-dribbble"></i>
          </a>

          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>

          <a href="#">
            <i class="fab fa-github"></i>
          </a>

        </div>

      </div>

    </div>

  </div>

  <p class="card-desc">
    Professional team member profile card with social links.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c14', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c14', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c14" class="code-block"><code>&lt;div class="team-card"&gt;
  &lt;h4&gt;Sneha Kapoor&lt;/h4&gt;
&lt;/div&gt;</code></pre>

</div>

  </div><!-- /cards-grid -->

</main>
```

### Badges (badges)

- Path: badges.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 100/100
- Tags: status, components
- Aliases: badge
- Description: Small status badges and indicators
- CSS assets: badges.css, command-palette.css, css/main.css, css/url-state.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css, style.css
- JS assets: badges.js, js/bootstrap.js, js/core/utils.js, js/features/accessibility.js, js/features/alerts.js, js/features/code-tools.js, js/features/command-palette.js, js/features/popup.js, js/features/sandbox.js, js/features/scroll.js, js/features/search.js, js/features/sidebar.js, js/features/theme.js, js/features/toast.js, js/features/url-state-integration.js, js/features/url-state.js
- Headings:
  - H1: My Badges
  - H2: Earned Badges
  - H3: First PR
  - H3: Contributor
  - H2: In Progress
  - H3: Top Contributor
  - H2: ✨ Earned Badges
  - H3: First PR

Usage snippet:

```html
<section class="badges-page">
  <h1><i class="fa-solid fa-trophy"></i> My Badges</h1>

  <h2><i class="fa-solid fa-medal"></i> Earned Badges</h2>
  <div class="badge-container">
    
    <div class="badge">
      <picture><source type="image/avif" srcset="generated-images/badge1/badge1-320.avif 320w, generated-images/badge1/badge1-480.avif 480w, generated-images/badge1/badge1-768.avif 768w, generated-images/badge1/badge1-1024.avif 1024w, generated-images/badge1/badge1-1300.avif 1300w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/badge1/badge1-320.webp 320w, generated-images/badge1/badge1-480.webp 480w, generated-images/badge1/badge1-768.webp 768w, generated-images/badge1/badge1-1024.webp 1024w, generated-images/badge1/badge1-1300.webp 1300w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/badge1/badge1-optimized-1300.jpg" alt="First PR badge icon" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="1300" height="1390"></picture>
      <h3>First PR</h3>
      <p>Completed your first pull request</p>
    </div>

    <div class="badge">
       <picture><source type="image/avif" srcset="generated-images/badge2/badge2-212.avif 212w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/badge2/badge2-212.webp 212w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/badge2/badge2-optimized-212.jpg" alt="Contributor badge icon" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="212" height="238"></picture>
      <h3>Contributor</h3>
      <p>Contributed to 10 PRs</p>
    </div>

  </div>

  <!-- In Progress -->
  <h2 class="prog-1">In Progress</h2>
  <div class="badge-container">

    <div class="badge progress">
      <picture><source type="image/avif" srcset="generated-images/time/time-320.avif 320w, generated-images/time/time-480.avif 480w, generated-images/time/time-512.avif 512w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/time/time-320.webp 320w, generated-images/time/time-480.webp 480w, generated-images/time/time-512.webp 512w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/time/time-optimized-512.png" alt="Top Contributor badge with progress indicator" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="512" height="512"></picture>
      <h3>Top Contributor</h3>
      <p>14/50 PRs completed</p>
      <progress value="14" max="50"></progress>
    </div>

  </div>

  <!-- Earned Badges -->
<h2>✨ Earned Badges</h2>
<div class="badge-container">

  <div class="badge gold" data-collectible="badge-first-pr">
    <div class="badge-icon">
      <i class="fa-solid fa-code-pull-request"></i>
    </div>
    <h3>First PR</h3>
    <p>Completed your first pull request</p>
    <span class="badge-tag">Unlocked</span>
    <button class="collect-btn" data-action="add" aria-label="Add to collection">👉 Save</button>
  </div>

  <div class="badge blue">
    <div class="badge-icon">
      <i class="fa-solid fa-users"></i>
    </div>
    <h3>Contributor</h3>
    <p>Contributed to 10 PRs</p>
    <span class="badge-tag">Level 1</span>
  </div>

  <div class="badge purple">
    <div class="badge-icon">
      <i class="fa-solid fa-fire"></i>
    </div>
    <h3>Streak Master</h3>
    <p>Maintained a 30-day coding streak</p>
    <span class="badge-tag">Hot</span>
  </div>

  <div class="badge green">
    <div class="badge-icon">
      <i class="fa-solid fa-bug-slash"></i>
    </div>
    <h3>Bug Hunter</h3>
    <p>Resolved 25 reported issues</p>
    <span class="badge-tag">Expert</span>
  </div>

  <div class="badge orange">
    <div class="badge-icon">
      <i class="fa-solid fa-medal"></i>
    </div>
    <h3>Open Source Hero</h3>
    <p>Made impactful open-source contributions</p>
    <span class="badge-tag">Popular</span>
  </div>

</div>


<!-- In Progress -->
<h2 class="prog-1">🚀 In Progress</h2>
<div class="badge-container">

  <div class="badge progress">
    <div class="badge-icon">
      <i class="fa-solid fa-chart-line"></i>
    </div>
    <h3>Top Contributor</h3>
    <p>14/50 PRs completed</p>
    <progress value="14" max="50"></progress>
  </div>

  <div class="badge progress">
    <div class="badge-icon">
      <i class="fa-solid fa-terminal"></i>
    </div>
    <h3>Code Wizard</h3>
    <p>40/100 coding challenges solved</p>
    <progress value="40" max="100"></progress>
  </div>

</div>


<!-- Locked Badges -->
<h2 class="prog-2">🔒 Locked Badges</h2>
<div class="badge-container">

  <div class="badge locked">
    <div class="badge-icon">
      <i class="fa-solid fa-crown"></i>
    </div>
    <h3>Elite Hacker</h3>
    <p>Complete 100 PRs</p>
  </div>

  <div class="badge locked">
    <div class="badge-icon">
      <i class="fa-solid fa-rocket"></i>
    </div>
    <h3>Launch Legend</h3>
    <p>Deploy 50 successful projects</p>
  </div>

  <div class="badge locked">
    <div class="badge-icon">
      <i class="fa-solid fa-shield-halved"></i>
    </div>
    <h3>Security Master</h3>
    <p>Fix 100 security vulnerabilities</p>
  </div>

</div>

  <!-- Locked Badges -->
  <h2 class="prog-2">Locked Badges</h2>
  <div class="badge-container">

    <div class="badge locked">
      <picture><source type="image/avif" srcset="generated-images/lock/lock-320.avif 320w, generated-images/lock/lock-480.avif 480w, generated-images/lock/lock-612.avif 612w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/lock/lock-320.webp 320w, generated-images/lock/lock-480.webp 480w, generated-images/lock/lock-612.webp 612w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/lock/lock-optimized-612.jpg" alt="Elite Hacker locked badge icon" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="612" height="612"></picture>
      <h3>Elite Hacker</h3>
      <p>Complete 100 PRs</p>
    </div>

  </div>

</section>
```

### Forms (form)

- Path: form.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 100/100
- Tags: forms, inputs
- Aliases: forms, inputs
- Description: Form controls, validation and layouts
- CSS assets: css/main.css, form.css, forms.css, home.css
- JS assets: script.js
- Headings:
  - H1: Forms
  - H3: Login Form
  - H3: MULTI STEP FORM
  - H3: PAYMENT FORM
  - H3: SURVEY FORM
  - H3: OTP VERIFICATION
  - H3: BOOK APPOINTMENT
  - H3: Signup Form

Usage snippet:

```html
<section class="forms-section">

  <!-- Section Header -->
  <div class="section-header">
    <h1>Forms</h1>
    <p>Modern, reusable and responsive form components</p>
  </div>

  <!-- Grid Layout -->
  <div class="forms-grid">

    <!-- Login Form -->
    <div class="form-card">
      <h3>Login</h3>
      <form>
        <div class="form-group">
          <label for="login-email">Email</label>
          <input id="login-email" type="email" placeholder="Enter your email" required>
        </div>

        <div class="form-group">
          <label for="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Enter password" required>
        </div>

        <button type="submit" class="btn primary">Login</button>
      </form>
    </div>

    <!-- Signup Form -->
    <div class="form-card">
      <h3>Sign Up</h3>
      <form>
        <div class="form-group">
          <label for="signup-name">Full Name</label>
          <input id="signup-name" type="text" placeholder="Your name" required>
        </div>

        <div class="form-group">
          <label for="signup-email">Email</label>
          <input id="signup-email" type="email" placeholder="Your email" required>
        </div>

        <div class="form-group">
          <label for="signup-password">Password</label>
          <input id="signup-password" type="password" required>
        </div>

        <button class="btn gradient">Create Account</button>
      </form>
    </div>

    <!-- Contact Form -->
    <div class="form-card wide">
      <h3>Contact Us</h3>
      <form>
        <div class="form-row">
          <input type="text" placeholder="Name" required>
          <input type="email" placeholder="Email" required>
        </div>

        <textarea placeholder="Your message..." required></textarea>

        <button class="btn glass">Send Message</button>
      </form>
    </div>

    <!-- Newsletter -->
    <div class="form-card">
      <h3>Newsletter</h3>
      <form>
        <input type="email" placeholder="Enter your email">
        <button class="btn primary">Subscribe</button>
      </form>
    </div>

  </div>
</section>
```

### Footer (footer)

- Path: footer.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 90/100
- Tags: layout, site
- Aliases: footers
- Description: Footer patterns and site utilities
- CSS assets: css/main.css, footer.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css, style.css
- JS assets: -
- Headings:
  - H1: Footer Components
  - H2: Launch Faster
  - H2: Build Beautiful UI
  - H2: Download App
  - H2: Creative Footer
  - H2: John Doe
  - H2: Elegant UI
  - H2: UIverse Pro

Usage snippet:

```html
<section class="footer-page-header">

    <div class="breadcrumb">
      <a href="index.html">Home</a>
      <i class="fa-solid fa-chevron-right"></i>
      <span>Footers</span>
    </div>

    <h1>Footer Components</h1>

    <p>
      Modern responsive footer sections for SaaS, portfolio,
      startup and product websites.
    </p>

    <div class="page-meta">

      <span class="meta-badge">
        <i class="fa-solid fa-layer-group"></i>
        4 Components
      </span>

      <span class="meta-badge">
        <i class="fa-solid fa-code"></i>
        HTML & CSS
      </span>

    </div>

  </section>
```

### Color System (color)

- Path: color.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 90/100
- Tags: design, tokens
- Aliases: colors
- Description: Color palette and token usage
- CSS assets: colors.css, css/main.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
- JS assets: -
- Headings:
  - H1: Color Library
  - H2: 🔥 Trending Colors
  - H3: Electric Purple
  - H3: Ocean Cyan
  - H3: Rose Red
  - H3: UIverse Orange
  - H3: Mint Green
  - H3: Deep Indigo

Usage snippet:

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

### Settings (settings)

- Path: settings.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 100/100
- Tags: pages, account
- Aliases: preferences
- Description: Settings and preferences UI patterns
- CSS assets: css/main.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css, style.css
- JS assets: js/bootstrap.js, js/core/utils.js, js/features/accessibility.js, js/features/alerts.js, js/features/code-tools.js, js/features/popup.js, js/features/sandbox.js, js/features/scroll.js, js/features/search.js, js/features/sidebar.js, js/features/theme.js, js/features/toast.js
- Headings:
  - H2: UIverse
  - H1: Settings
  - H2: Profile
  - H2: Password
  - H2: Preferences

Usage snippet:

```html
<i class="fa-solid fa-bars menu-toggle" id="menuToggle"></i>
    <aside class="sidebar">
      <h2>UIverse</h2>
      <ul>

        <li><a href="profile.html"><i class="fa-regular fa-circle-user"></i><p>Profile</p></a></li>
        <li>
          <a href="index.html"
            ><i class="fa-solid fa-house"></i>
            <p>Home</p></a
          >
        </li>
        <li>
          <a href="button.html"
            ><i class="fa-solid fa-mobile-button"></i>
            <p>Butttons</p></a
          >
        </li>
        <li>
          <a href="navbar.html"
            ><i class="fa-solid fa-bars"></i>
            <p>Navbar</p></a
          >
        </li>
        <li>
          <a href="contact.html"
            ><i class="fa-regular fa-user"></i>
            <p>Contact Us</p></a
          >
        </li>
        <li>
          <a href="forms.html"
            ><i class="fa-brands fa-wpforms"></i>
            <p>Forms</p></a
          >
        </li>
        <li>
          <a href="badges.html"
            ><i class="fa-solid fa-award"></i>
            <p>Badges</p></a
          >
        </li>
        <li>
          <a href="about.
```

### Testimonials (testimonials)

- Path: testimonials.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 100/100
- Tags: content, components
- Aliases: reviews
- Description: Testimonial components and examples
- CSS assets: css/main.css, style.css, testimonials.css
- JS assets: js/bootstrap.js, js/core/utils.js, js/features/accessibility.js, js/features/alerts.js, js/features/code-tools.js, js/features/popup.js, js/features/sandbox.js, js/features/scroll.js, js/features/search.js, js/features/sidebar.js, js/features/theme.js, js/features/toast.js
- Headings:
  - H2: UIverse
  - H1: Testimonials
  - H3: Customer Testimonial
  - H3: Quote Panel
  - H2: UIverse
  - H2: UIverse
  - H3: Pages
  - H3: Legal

Usage snippet:

```html
<main class="main">

    <div class="page-header">

      <h1>Testimonials</h1>

      <p>
        Beautiful modern testimonial cards designed with
        glassmorphism, premium hover animations, gradient glow
        effects, and elegant typography.
      </p>

    </div>

    <!-- Testimonials -->

    <div class="testimonial-grid">

      <!-- Card 1 -->

      <div class="component-card">

        <h3>Customer Testimonial</h3>

        <div class="testimonial-card">

          <div class="blur-glow"></div>

          <div class="quote-icon">❝</div>

          <div class="stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <p>
            “UIverse helped us launch faster with polished
            UI components that were elegant, scalable,
            and incredibly easy to customize.”
          </p>

          <div class="testimonial-meta">

            <div class="avatar">
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt=""
               srcset="https://i.pravatar.cc/40?img=5 40w, https://i.pravatar.cc/80?img=5 80w, https://i.pravatar.cc/150?img=5 150w, https://i.pravatar.cc/300?img=5 300w" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async">
            </div>

            <div class="user-info">
              <strong>Maya Lee</strong>
              <span>Product Designer</span>
            </div>

          </div>

        </div>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('t1', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button class="action-btn copy-btn" onclick="copyCode('t1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
        </div>

<pre id="t1" class="code-block">
&lt;div class="testimonial-card"&gt;
  Modern glowing testimonial card
&lt;/div&gt;
</pre>

      </div>

      <!-- Card 2 -->

      <div class="component-card">

        <h3>Quote Panel</h3>

        <div class="testimonial-card">

          <div class="blur-glow"></div>

          <div class="quote-icon">❝</div>

          <div class="stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <p>
            “The component library is beginner friendly
            and made styling my app feel effortless,
            modern, and professional.”
          </p>

          <div class="testimonial-meta">

            <div class="avatar">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt=""
               srcset="https://i.pravatar.cc/40?img=12 40w, https://i.pravatar.cc/80?img=12 80w, https://i.pravatar.cc/150?img=12 150w, https://i.pravatar.cc/300?img=12 300w" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async">
            </div>

            <div class="user-info">
              <strong>Alex Chen</strong>
              <span>Frontend Developer</span>
            </div>

          </div>

        </div>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('t2', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button class="action-btn copy-btn" onclick="copyCode('t2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
        </div>

<pre id="t2" class="code-block">
&lt;div class="testimonial-card"&gt;
  Premium quote testimonial
&lt;/div&gt;
</pre>

      </div>

    </div>

  </main>
```

### Pricing (pricing)

- Path: pricing.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 90/100
- Tags: pages, pricing
- Aliases: -
- Description: Pricing layouts and plans
- CSS assets: css/main.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css, pricing.css
- JS assets: -
- Headings:
  - H1: Pricing Card Components
  - H2: Interactive Pricing Table
  - H3: Starter
  - H3: Pro
  - H3: Business
  - H2: UIverse
  - H3: Explore
  - H3: Resources

Usage snippet:

```html
<main class="main-home">


  <!-- ================= PRICING HERO ================= -->

<div class="pricing-page-hero">

  <div class="breadcrumb">
    <a href="index.html">Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Pricing</span>
  </div>

  <h1 class="page-title">
    Pricing Card Components
  </h1>

  <p class="page-desc">
    Modern SaaS pricing UI components with billing toggles,
    glowing cards, feature lists, and responsive layouts.
  </p>

  <div class="page-meta">

    <span class="meta-badge">
      <i class="fa-solid fa-layer-group"></i>
      3 Plans
    </span>

    <span class="meta-badge">
      <i class="fa-solid fa-toggle-on"></i>
      Billing Toggle
    </span>

    <span class="meta-badge">
      <i class="fa-solid fa-code"></i>
      HTML + CSS
    </span>

  </div>

</div>

<!-- ================= COMPONENT CARD ================= -->

<div class="component-card">

  <!-- TOP -->

  <div class="card-top">

    <div>
      <h2 class="card-label">
        Interactive Pricing Table
      </h2>
    </div>

    <span class="card-tag">
      Popular
    </span>

  </div>

  <!-- DESCRIPTION -->

  <p class="card-desc">
    Fully responsive SaaS pricing section with
    monthly, quarterly, and yearly billing toggle.
  </p>

  <!-- ================= TOGGLE ================= -->

  <div class="billing-toggle-wrap">

    <div class="billing-toggle">

      <button class="toggle-btn active"
        data-period="month">

        Monthly

      </button>

      <button class="toggle-btn"
        data-period="quarter">

        Quarterly

      </button>

      <button class="toggle-btn"
        data-period="year">

        Yearly

        <span class="save-chip">
          Save 40%
        </span>

      </button>

    </div>

  </div>

  <!-- ================= PRICING GRID ================= -->

  <div class="pricing-grid-preview">

    <!-- FREE -->

    <div class="plan-card free-card">

      <div class="plan-name">
        Free
      </div>

      <p class="plan-tagline">
        For hobby projects
      </p>

      <div class="plan-price-wrap">

        <span class="plan-amount"
          data-month="$0"
          data-quarter="$0"
          data-year="$0">

          $0

        </span>

        <span class="plan-period">
          / month
        </span>

      </div>

      <ul class="plan-features">

        <li>
          <i class="fa-solid fa-check"></i>
          3 Projects
        </li>

        <li>
          <i class="fa-solid fa-check"></i>
          Community Support
        </li>

        <li>
          <i class="fa-solid fa-check"></i>
          Basic Analytics
        </li>

        <li class="muted">
          <i class="fa-solid fa-xmark"></i>
          Custom Domains
        </li>

        <li class="muted">
          <i class="fa-solid fa-xmark"></i>
          Priority Support
        </li>

      </ul>

      <button class="plan-btn plan-btn-outline">
        Get Started
      </button>

    </div>

    <!-- PRO -->

    <div class="plan-card pro-card">

      <div class="recommended-badge">

        <i class="fa-solid fa-star"></i>

        Most Popular

      </div>

      <div class="plan-name">
        Pro
      </div>

      <p class="plan-tagline">
        Best for growing startups
      </p>

      <div class="plan-price-wrap">

        <span class="plan-old"
          data-month="$49"
          data-quarter="$44"
          data-year="$39">

          $49

        </span>

        <span class="plan-amount"
          data-month="$29"
          data-quarter="$26"
          data-year="$19">

          $29

        </span>

        <span class="plan-period">
          / month
        </span>

      </div>

      <ul class="plan-features">

        <li>
          <i class="fa-solid fa-check"></i>
          Unlimited Projects
        </li>

        <li>
          <i class="fa-solid fa-check"></i>
          Team Collaboration
        </li>

        <li>
          <i class="fa-solid fa-check"></i>
          Priority Support
        </li>

        <li>
          <i class="fa-solid fa-check"></i>
          Custom Domains
        </li>

        <li class="muted">
          <i class="fa-solid fa-xmark"></i>
          White Label
        </li>

      </ul>

      <button class="plan-btn plan-btn-accent">
        Choose Pro
      </button>

    </div>

    <!-- ENTERPRISE -->

    <div class="plan-card enterprise-card">

      <div class="plan-name">
        Enterprise
      </div>

      <p class="plan-tagline">
        For large organizations
      </p>

      <div class="plan-price-wrap">

        <span class="plan-old"
          data-month="$149"
          data-quarter="$134"
          data-year="$119">

          $149

        </span>

        <span class="plan-amount"
          data-month="$99"
          data-quarter="$89"
          data-year="$69">

          $99

        </span>

        <span class="plan-period">
          / month
        </span>

      </div>

      <ul class="plan-features">

        <li>
          <i class="fa-solid fa-check"></i>
          Dedicated Manager
        </li>

        <li>
          <i class="fa-solid fa-check"></i>
          White Label
        </li>

        <li>
          <i class="fa-solid fa-check"></i>
          SLA Guarantee
        </li>

        <li>
          <i class="fa-solid fa-check"></i>
          Custom Integrations
        </li>

        <li>
          <i class="fa-solid fa-check"></i>
          Unlimited Storage
        </li>

      </ul>

      <button class="plan-btn business-btn">
        Contact Sales
      </button>

    </div>

  </div>

  <!-- ================= ACTION BUTTONS ================= -->

  <div class="actions">

    <button class="action-btn view-btn"
      onclick="toggleCode('pc1', this)">

      <i class="fa-solid fa-code"></i>
      View Code

    </button>

    <button class="action-btn copy-btn"
      onclick="copyCode('pc1', this)">

      <i class="fa-solid fa-copy"></i>
      Copy

    </button>

  </div>

  <!-- ================= CODE BLOCK ================= -->

  <pre id="pc1" class="code-block"><code>

&lt;div class="pricing-grid-preview"&gt;

  &lt;div class="plan-card free-card"&gt;&lt;/div&gt;

  &lt;div class="plan-card pro-card"&gt;&lt;/div&gt;

  &lt;div class="plan-card enterprise-card"&gt;&lt;/div&gt;

&lt;/div&gt;

  </code></pre>

</div>
  

  <!-- ================= ACTION BUTTONS ================= -->

  <div class="actions">

    <button class="action-btn view-btn"
      onclick="toggleCode('pc1', this)">

      <i class="fa-solid fa-code"></i>
      View Code

    </button>

    <button class="action-btn copy-btn"
      onclick="copyCode('pc1', this)">

      <i class="fa-solid fa-copy"></i>
      Copy

    </button>

  </div>

  <!-- ================= CODE BLOCK ================= -->

  <pre id="pc1" class="code-block"><code>

&lt;div class="pricing-grid-preview"&gt;

  &lt;div class="plan-card free-card"&gt;
    ...
  &lt;/div&gt;

  &lt;div class="plan-card pro-card"&gt;
    ...
  &lt;/div&gt;

  &lt;div class="plan-card enterprise-card"&gt;
    ...
  &lt;/div&gt;

&lt;/div&gt;

  </code></pre>

</div>

<!-- ================= SECOND COMPONENT ================= -->

<div class="component-card">

  <div class="pricing-grid">

    <!-- STARTER -->
    <div class="pricing-card starter">

      <div class="card-glow"></div>

      <div class="pricing-card-content">

        <div class="plan-header">
          <h3>Starter</h3>
          <p>Perfect for personal projects</p>
        </div>

        <div class="plan-price">
          <span class="old-price">$19</span>
          <span class="amount">$12</span>
        </div>

        <ul class="plan-features">
          <li><i class="fa-solid fa-check"></i> Basic analytics</li>
          <li><i class="fa-solid fa-check"></i> Custom domains</li>
          <li><i class="fa-solid fa-check"></i> Email support</li>
        </ul>

        <button class="plan-btn">
          Choose Starter
        </button>

      </div>
    </div>

    <!-- PRO -->
    <div class="pricing-card pro featured">

      <div class="popular-badge">
        Most Popular
      </div>

      <div class="card-glow"></div>

      <div class="pricing-card-content">

        <div class="plan-header">
          <h3>Pro</h3>
          <p>Best for scaling your business</p>
        </div>

        <div class="plan-price">
          <span class="old-price">$49</span>
          <span class="amount">$29</span>
        </div>

        <ul class="plan-features">
          <li><i class="fa-solid fa-check"></i> Advanced analytics</li>
          <li><i class="fa-solid fa-check"></i> Unlimited projects</li>
          <li><i class="fa-solid fa-check"></i> Priority support</li>
          <li><i class="fa-solid fa-check"></i> Team collaboration</li>
        </ul>

        <button class="plan-btn secondary">
          Choose Pro
        </button>

      </div>
    </div>

    <!-- BUSINESS -->
    <div class="pricing-card business">

      <div class="card-glow"></div>

      <div class="pricing-card-content">

        <div class="plan-header">
          <h3>Business</h3>
          <p>For growing startups & teams</p>
    

        <div class="plan-price">
          <span class="old-price">$99</span>
          <span class="amount">$59</span>
        </div>

        <ul class="plan-features">
          <li><i class="fa-solid fa-check"></i> AI-powered insights</li>
          <li><i class="fa-solid fa-check"></i> Unlimited storage</li>
          <li><i class="fa-solid fa-check"></i> Dedicated manager</li>
          <li><i class="fa-solid fa-check"></i> 24/7 live support</li>
        </ul>

        <button class="plan-btn business-btn">
          Choose Business
        </button>

      </div>
    </div>

  </div>

  <!-- ACTIONS -->
  <div class="actions">

    <button class="action-btn view-btn"
      onclick="toggleCode('pc2', this)">

      <i class="fa-solid fa-code"></i>
      View Code

    </button>

    <button class="action-btn copy-btn"
      onclick="copyCode('pc2', this)">

      <i class="fa-solid fa-copy"></i>
      Copy

    </button>

  </div>

  <!-- CODE -->
  <pre id="pc2" class="code-block"><code>

&lt;div class="pricing-grid"&gt;

  &lt;div class="pricing-card starter"&gt;
    ...
  &lt;/div&gt;

  &lt;div class="pricing-card pro"&gt;
    ...
  &lt;/div&gt;

  &lt;div class="pricing-card business"&gt;
    ...
  &lt;/div&gt;

&lt;/div&gt;

  </code></pre>

</div>
 <!-- /pricing-grid-preview -->

    
  

</main>
```

### Alerts (alerts)

- Path: alerts.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 90/100
- Tags: notifications, components
- Aliases: toasts
- Description: Alert banners, toasts and status messages
- CSS assets: alerts.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
- JS assets: -
- Headings:
  - H1: Alert Components
  - H2: ⬡ UIverse
  - H3: Explore
  - H3: Resources
  - H3: Legal
  - H3: Stay Updated

Usage snippet:

```html
<main class="main-home">

  <!-- Page Hero -->
  <div class="page-hero">
    <div class="page-hero-left">
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>Alerts</span>
      </div>
      <h1 class="page-title">Alert Components</h1>
      <p class="page-desc">A complete library of alert, notification, and banner UI components — success, error, warning, info, dismissible, toast, outlined, filled, and more. Copy and use instantly.</p>
      <div class="page-meta">
        <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 14 Components</span>
        <span class="meta-badge"><i class="fa-solid fa-code"></i> Pure HTML & CSS</span>
        <span class="meta-badge"><i class="fa-solid fa-xmark"></i> Dismissible</span>
      </div>
    </div>
    <div class="page-hero-right">
      <div class="alert-hero-preview">
        <div class="ahp-alert ahp-success">
          <i class="fa-solid fa-circle-check"></i>
          <span>Your changes were saved successfully.</span>
        </div>
        <div class="ahp-alert ahp-warning">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>You are running low on storage.</span>
        </div>
        <div class="ahp-alert ahp-error">
          <i class="fa-solid fa-circle-xmark"></i>
          <span>Connection failed. Please retry.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Filter Bar -->
  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterCards('all', this)">All</button>
    <button class="filter-btn" onclick="filterCards('basic', this)">Basic</button>
    <button class="filter-btn" onclick="filterCards('outlined', this)">Outlined</button>
    <button class="filter-btn" onclick="filterCards('filled', this)">Filled</button>
    <button class="filter-btn" onclick="filterCards('toast', this)">Toast</button>
    <button class="filter-btn" onclick="filterCards('banner', this)">Banner</button>
    <div class="filter-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Filter alerts..." oninput="liveFilter(this.value)" />
    </div>
  </div>

  <!-- Grid -->
  <div class="alerts-grid" id="alertsGrid">

    <!-- 1. Basic Status Alerts -->
    <div class="component-card" data-name="basic status success error warning info alert" data-cat="basic">
      <div class="card-top">
        <span class="card-label">Basic Status Alerts</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="demo-alert-stack">
          <div class="al al-success">
            <i class="fa-solid fa-circle-check al-icon"></i>
            <div class="al-body"><strong>Success!</strong> Your profile was updated.</div>
          </div>
          <div class="al al-error">
            <i class="fa-solid fa-circle-xmark al-icon"></i>
            <div class="al-body"><strong>Error!</strong> Something went wrong. Try again.</div>
          </div>
          <div class="al al-warning">
            <i class="fa-solid fa-triangle-exclamation al-icon"></i>
            <div class="al-body"><strong>Warning!</strong> Storage is almost full.</div>
          </div>
          <div class="al al-info">
            <i class="fa-solid fa-circle-info al-icon"></i>
            <div class="al-body"><strong>Info.</strong> A new update is available.</div>
          </div>
        </div>
      </div>
      <p class="card-desc">The four core alert types — success, error, warning, and info — with icon and message.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al1', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al1" class="code-block"><code>&lt;div class="alert success"&gt;
  &lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;
  &lt;span&gt;&lt;strong&gt;Success!&lt;/strong&gt; Your profile was updated.&lt;/span&gt;
&lt;/div&gt;

.alert {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 14px 18px; border-radius: 12px;
  font-size: 14px; font-weight: 500;
}
.alert.success { background: rgba(0,184,148,0.1);  color: #00b894; border-left: 4px solid #00b894; }
.alert.error   { background: rgba(214,48,49,0.1);  color: #d63031; border-left: 4px solid #d63031; }
.alert.warning { background: rgba(253,203,110,0.15);color: #d98e00; border-left: 4px solid #fdcb6e; }
.alert.info    { background: rgba(9,132,227,0.1);  color: #0984e3; border-left: 4px solid #0984e3; }</code></pre>
    </div>

    <!-- 2. Dismissible Alerts -->
    <div class="component-card" data-name="dismissible closeable close button alert" data-cat="basic">
      <div class="card-top">
        <span class="card-label">Dismissible Alerts</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="demo-alert-stack" id="dismissStack">
          <div class="al al-success al-dismissible" id="dis1">
            <i class="fa-solid fa-circle-check al-icon"></i>
            <div class="al-body">Payment completed successfully!</div>
            <button class="al-close" onclick="dismissAlert('dis1')"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="al al-warning al-dismissible" id="dis2">
            <i class="fa-solid fa-triangle-exclamation al-icon"></i>
            <div class="al-body">Your session will expire in 5 minutes.</div>
            <button class="al-close" onclick="dismissAlert('dis2')"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="al al-info al-dismissible" id="dis3">
            <i class="fa-solid fa-circle-info al-icon"></i>
            <div class="al-body">Version 2.0 is now available. <a class="al-link" href="#">Update now →</a></div>
            <button class="al-close" onclick="dismissAlert('dis3')"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
        <button class="reset-btn" onclick="resetDismiss()"><i class="fa-solid fa-rotate-left"></i> Reset</button>
      </div>
      <p class="card-desc">Alerts with an × dismiss button — click to slide them away. Works with a tiny JS snippet.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al2', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al2" class="code-block"><code>&lt;div class="alert success dismissible" id="myAlert"&gt;
  &lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;
  &lt;span&gt;Payment completed successfully!&lt;/span&gt;
  &lt;button class="close-btn" onclick="dismiss('myAlert')"&gt;✕&lt;/button&gt;
&lt;/div&gt;

.alert.dismissible { position: relative; }
.close-btn {
  margin-left: auto; background: none; border: none;
  cursor: pointer; opacity: 0.6; font-size: 16px;
  transition: opacity 0.2s;
}
.close-btn:hover { opacity: 1; }

function dismiss(id) {
  const el = document.getElementById(id);
  el.style.opacity = '0';
  el.style.transform = 'translateX(8px)';
  setTimeout(() => el.style.display = 'none', 300);
}</code></pre>
    </div>

    <!-- 3. Outlined Alerts -->
    <div class="component-card" data-name="outlined border alert notification" data-cat="outlined">
      <div class="card-top">
        <span class="card-label">Outlined Alerts</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="demo-alert-stack">
          <div class="al al-outline-success">
            <i class="fa-solid fa-circle-check al-icon"></i>
            <div class="al-body"><strong>Success!</strong> All changes saved.</div>
          </div>
          <div class="al al-outline-error">
            <i class="fa-solid fa-circle-xmark al-icon"></i>
            <div class="al-body"><strong>Error!</strong> Unable to connect to server.</div>
          </div>
          <div class="al al-outline-warning">
            <i class="fa-solid fa-triangle-exclamation al-icon"></i>
            <div class="al-body"><strong>Warning!</strong> Unsaved changes detected.</div>
          </div>
          <div class="al al-outline-info">
            <i class="fa-solid fa-circle-info al-icon"></i>
            <div class="al-body"><strong>Info.</strong> Feature is in beta.</div>
          </div>
        </div>
      </div>
      <p class="card-desc">Clean outlined alerts — border-only with no background fill, for a lighter visual presence.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al3', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al3', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al3" class="code-block"><code>&lt;div class="alert outlined success"&gt;
  &lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;
  &lt;span&gt;All changes saved.&lt;/span&gt;
&lt;/div&gt;

.alert.outlined {
  background: transparent;
  border: 1.5px solid currentColor;
}
.alert.outlined.success { color: #00b894; }
.alert.outlined.error   { color: #d63031; }
.alert.outlined.warning { color: #d98e00; }
.alert.outlined.info    { color: #0984e3; }</code></pre>
    </div>

    <!-- 4. Filled / Solid Alerts -->
    <div class="component-card" data-name="filled solid background alert" data-cat="filled">
      <div class="card-top">
        <span class="card-label">Filled / Solid Alerts</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="demo-alert-stack">
          <div class="al al-solid-success">
            <i class="fa-solid fa-circle-check al-icon"></i>
            <div class="al-body">Account created successfully!</div>
          </div>
          <div class="al al-solid-error">
            <i class="fa-solid fa-circle-xmark al-icon"></i>
            <div class="al-body">Failed to load data. Please refresh.</div>
          </div>
          <div class="al al-solid-warning">
            <i class="fa-solid fa-triangle-exclamation al-icon"></i>
            <div class="al-body">Please verify your email address.</div>
          </div>
          <div class="al al-solid-info">
            <i class="fa-solid fa-circle-info al-icon"></i>
            <div class="al-body">Scheduled maintenance on Sunday.</div>
          </div>
        </div>
      </div>
      <p class="card-desc">Bold solid background alerts — high contrast, great for prominent system messages.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al4', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al4', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al4" class="code-block"><code>&lt;div class="alert solid success"&gt;
  &lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;
  &lt;span&gt;Account created successfully!&lt;/span&gt;
&lt;/div&gt;

.alert.solid { color: #fff; }
.alert.solid.success { background: #00b894; }
.alert.solid.error   { background: #d63031; }
.alert.solid.warning { background: #e6a817; }
.alert.solid.info    { background: #0984e3; }</code></pre>
    </div>

    <!-- 5. Alert with Title + Description -->
    <div class="component-card" data-name="title description detailed alert notification" data-cat="basic">
      <div class="card-top">
        <span class="card-label">Alert with Description</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="demo-alert-stack">
          <div class="al al-success al-detailed">
            <i class="fa-solid fa-circle-check al-icon al-icon-lg"></i>
            <div class="al-detail-body">
              <div class="al-title">Payment Successful</div>
              <div class="al-desc">Your order #1234 has been confirmed. You'll receive an email shortly.</div>
            </div>
          </div>
          <div class="al al-error al-detailed">
            <i class="fa-solid fa-circle-xmark al-icon al-icon-lg"></i>
            <div class="al-detail-body">
              <div class="al-title">Authentication Failed</div>
              <div class="al-desc">Invalid credentials. Please check your email and password and try again.</div>
            </div>
          </div>
        </div>
      </div>
      <p class="card-desc">Alerts with a bold title and a supporting description — for messages that need more context.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al5', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al5', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al5" class="code-block"><code>&lt;div class="alert success detailed"&gt;
  &lt;i class="fa-solid fa-circle-check icon-lg"&gt;&lt;/i&gt;
  &lt;div class="alert-body"&gt;
    &lt;div class="alert-title"&gt;Payment Successful&lt;/div&gt;
    &lt;div class="alert-desc"&gt;
      Your order #1234 has been confirmed.
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

.alert.detailed { align-items: flex-start; }
.alert-title { font-weight: 700; font-size: 14px; margin-bottom: 4px; }
.alert-desc  { font-size: 13px; opacity: 0.85; line-height: 1.5; }</code></pre>
    </div>

    <!-- 6. Toast Notifications -->
    <div class="component-card" data-name="toast notification popup bottom corner" data-cat="toast">
      <div class="card-top">
        <span class="card-label">Toast Notifications</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="demo-toast-grid">
          <div class="toast toast-success">
            <div class="toast-icon-wrap"><i class="fa-solid fa-circle-check"></i></div>
            <div class="toast-body">
              <div class="toast-title">Saved!</div>
              <div class="toast-msg">Your draft was saved.</div>
            </div>
            <button class="toast-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="toast toast-error">
            <div class="toast-icon-wrap"><i class="fa-solid fa-circle-xmark"></i></div>
            <div class="toast-body">
              <div class="toast-title">Upload Failed</div>
              <div class="toast-msg">File size exceeds 10MB limit.</div>
            </div>
            <button class="toast-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="toast toast-info">
            <div class="toast-icon-wrap"><i class="fa-solid fa-circle-info"></i></div>
            <div class="toast-body">
              <div class="toast-title">New Message</div>
              <div class="toast-msg">Alex sent you a message.</div>
            </div>
            <button class="toast-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </div>
      <p class="card-desc">Compact toast notifications with icon, title, and message — positioned bottom-right in production.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al6', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al6', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al6" class="code-block"><code>&lt;div class="toast success" id="toast1"&gt;
  &lt;div class="toast-icon"&gt;&lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="toast-body"&gt;
    &lt;div class="toast-title"&gt;Saved!&lt;/div&gt;
    &lt;div class="toast-msg"&gt;Your draft was saved.&lt;/div&gt;
  &lt;/div&gt;
  &lt;button onclick="dismiss('toast1')"&gt;✕&lt;/button&gt;
&lt;/div&gt;

.toast {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; border-radius: 14px;
  background: var(--card-bg);
  box-shadow: 0 8px 28px rgba(0,0,0,0.12);
  border: 1px solid var(--card-border);
  min-width: 260px; max-width: 360px;
}
/* Fixed positioning for real usage */
.toast-container {
  position: fixed; bottom: 24px; right: 24px;
  display: flex; flex-direction: column; gap: 12px;
  z-index: 9999;
}</code></pre>
    </div>

    <!-- 7. Top Banner -->
    <div class="component-card" data-name="top banner strip alert announcement" data-cat="banner">
      <div class="card-top">
        <span class="card-label">Top Banner</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview" style="padding:0;overflow:hidden;border-radius:var(--radius-sm);">
        <div class="demo-banners">
          <div class="banner banner-accent">
            <i class="fa-solid fa-rocket"></i>
            <span>UIverse v2.0 is live! <a class="banner-link" href="#">See what's new →</a></span>
            <button class="banner-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="banner banner-warning">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Scheduled maintenance on Sunday 2 AM UTC.</span>
            <button class="banner-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="banner banner-error">
            <i class="fa-solid fa-circle-xmark"></i>
            <span>Service disruption detected. Our team is working on a fix.</span>
            <button class="banner-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </div>
      <p class="card-desc">Full-width announcement banners — accent, warning, and error variants for site-wide notices.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al7', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al7', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al7" class="code-block"><code>&lt;div class="banner accent"&gt;
  &lt;i class="fa-solid fa-rocket"&gt;&lt;/i&gt;
  &lt;span&gt;UIverse v2.0 is live! &lt;a href="#"&gt;See what's new →&lt;/a&gt;&lt;/span&gt;
  &lt;button class="close"&gt;✕&lt;/button&gt;
&lt;/div&gt;

.banner {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 20px; font-size: 13px; font-weight: 500;
  width: 100%;
}
.banner.accent  { background: linear-gradient(90deg,#eb6835,#6c5ce7); color:#fff; }
.banner.warning { background: #fdcb6e; color: #5a3e00; }
.banner.error   { background: #d63031; color: #fff; }</code></pre>
    </div>

    <!-- 8. Inline Alert -->
    <div class="component-card" data-name="inline compact small alert form validation" data-cat="basic">
      <div class="card-top">
        <span class="card-label">Inline / Form Alerts</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="demo-alert-stack" style="gap:10px;">
          <div>
            <label class="demo-field-label">Email address</label>
            <div class="demo-input-mock demo-input-error">someone@example</div>
            <div class="al-inline al-inline-error"><i class="fa-solid fa-circle-xmark"></i> Please enter a valid email address.</div>
          </div>
          <div>
            <label class="demo-field-label">Username</label>
            <div class="demo-input-mock demo-input-success">chinmay1126</div>
            <div class="al-inline al-inline-success"><i class="fa-solid fa-circle-check"></i> Username is available.</div>
          </div>
          <div>
            <label class="demo-field-label">Password</label>
            <div class="demo-input-mock">••••••••</div>
            <div class="al-inline al-inline-warning"><i class="fa-solid fa-triangle-exclamation"></i> Use at least 8 characters with a number.</div>
          </div>
        </div>
      </div>
      <p class="card-desc">Inline validation messages below form fields — error, success, and warning variants.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al8', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al8', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al8" class="code-block"><code>&lt;input type="email" class="input error"&gt;
&lt;div class="inline-alert error"&gt;
  &lt;i class="fa-solid fa-circle-xmark"&gt;&lt;/i&gt;
  Please enter a valid email address.
&lt;/div&gt;

.inline-alert {
  display: flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 600; margin-top: 5px;
}
.inline-alert.error   { color: #d63031; }
.inline-alert.success { color: #00b894; }
.inline-alert.warning { color: #d98e00; }</code></pre>
    </div>

    <!-- 9. Alert with Action Buttons -->
    <div class="component-card" data-name="action button cta alert confirm prompt" data-cat="basic">
      <div class="card-top">
        <span class="card-label">Alert with Actions</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="demo-alert-stack">
          <div class="al al-warning al-with-actions">
            <div class="al-wa-top">
              <i class="fa-solid fa-triangle-exclamation al-icon"></i>
              <div class="al-body"><strong>Delete Account?</strong> This action cannot be undone. All your data will be permanently removed.</div>
            </div>
            <div class="al-wa-btns">
              <button class="al-btn-cancel">Cancel</button>
              <button class="al-btn-confirm al-btn-danger">Delete Account</button>
            </div>
          </div>
          <div class="al al-info al-with-actions">
            <div class="al-wa-top">
              <i class="fa-solid fa-circle-info al-icon"></i>
              <div class="al-body"><strong>Update Available!</strong> Version 2.1.0 includes bug fixes and performance improvements.</div>
            </div>
            <div class="al-wa-btns">
              <button class="al-btn-cancel">Later</button>
              <button class="al-btn-confirm al-btn-info">Update Now</button>
            </div>
          </div>
        </div>
      </div>
      <p class="card-desc">Alerts with inline action buttons — perfect for confirmations, prompts, and upgrade nudges.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al9', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al9', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al9" class="code-block"><code>&lt;div class="alert warning with-actions"&gt;
  &lt;div class="alert-top"&gt;
    &lt;i class="fa-solid fa-triangle-exclamation"&gt;&lt;/i&gt;
    &lt;span&gt;Delete Account? This cannot be undone.&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="alert-actions"&gt;
    &lt;button class="btn-cancel"&gt;Cancel&lt;/button&gt;
    &lt;button class="btn-danger"&gt;Delete&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

.alert-actions { display: flex; gap: 8px; margin-top: 12px; }
.btn-cancel { background: transparent; border: 1px solid currentColor; }
.btn-danger { background: #d63031; color: #fff; border: none; }</code></pre>
    </div>

    <!-- 10. Live Toast Demo -->
    <div class="component-card" data-name="live demo interactive toast trigger button" data-cat="toast">
      <div class="card-top">
        <span class="card-label">Live Toast Demo</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="demo-toast-triggers">
          <p class="demo-sub-label2">Click a button to fire a toast:</p>
          <div class="demo-trigger-row">
            <button class="trigger-btn trigger-success" onclick="fireToast('success','Saved!','Changes were saved.')">
              <i class="fa-solid fa-circle-check"></i> Success
            </button>
            <button class="trigger-btn trigger-error" onclick="fireToast('error','Error!','Something went wrong.')">
              <i class="fa-solid fa-circle-xmark"></i> Error
            </button>
            <button class="trigger-btn trigger-warning" onclick="fireToast('warning','Warning!','Low disk space.')">
              <i class="fa-solid fa-triangle-exclamation"></i> Warning
            </button>
            <button class="trigger-btn trigger-info" onclick="fireToast('info','Info','New update available.')">
              <i class="fa-solid fa-circle-info"></i> Info
            </button>
          </div>
        </div>
      </div>
      <p class="card-desc">Interactive live demo — click any button to fire a real toast notification in the corner.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al10', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al10', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al10" class="code-block"><code>function fireToast(type, title, msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    &lt;div class="toast-icon-wrap"&gt;
      &lt;i class="fa-solid ${icons[type]}"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="toast-body"&gt;
      &lt;div class="toast-title"&gt;${title}&lt;/div&gt;
      &lt;div class="toast-msg"&gt;${msg}&lt;/div&gt;
    &lt;/div&gt;
    &lt;button onclick="this.parentElement.remove()"&gt;✕&lt;/button&gt;
  `;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('toast-show'), 10);
  setTimeout(() => toast.remove(), 4000);
}</code></pre>
    </div>

    <!-- 11. Floating Alert -->
    <div class="component-card" data-name="floating shadow elevated alert card" data-cat="toast">
      <div class="card-top">
        <span class="card-label">Floating Alert Card</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="demo-alert-stack">
          <div class="al-float al-float-success">
            <div class="al-float-icon"><i class="fa-solid fa-circle-check"></i></div>
            <div class="al-float-body">
              <div class="al-float-title">Build Successful</div>
              <div class="al-float-msg">Deployed to production in 1.2s</div>
            </div>
            <div class="al-float-time">just now</div>
          </div>
          <div class="al-float al-float-error">
            <div class="al-float-icon"><i class="fa-solid fa-circle-xmark"></i></div>
            <div class="al-float-body">
              <div class="al-float-title">Build Failed</div>
              <div class="al-float-msg">Syntax error on line 42</div>
            </div>
            <div class="al-float-time">2m ago</div>
          </div>
        </div>
      </div>
      <p class="card-desc">Elevated card-style floating alerts with title, message, and timestamp — great for build/CI logs.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al11', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al11', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al11" class="code-block"><code>&lt;div class="alert-float success"&gt;
  &lt;div class="float-icon"&gt;&lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="float-body"&gt;
    &lt;div class="float-title"&gt;Build Successful&lt;/div&gt;
    &lt;div class="float-msg"&gt;Deployed in 1.2s&lt;/div&gt;
  &lt;/div&gt;
  &lt;span class="float-time"&gt;just now&lt;/span&gt;
&lt;/div&gt;

.alert-float {
  display: flex; align-items: center; gap: 14px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 14px; padding: 16px 18px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.alert-float:hover { transform: translateY(-3px); }</code></pre>
    </div>

    <!-- 12. Gradient Alert -->
    <div class="component-card" data-name="gradient colorful alert modern dark" data-cat="filled">
      <div class="card-top">
        <span class="card-label">Gradient Alerts</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="demo-alert-stack">
          <div class="al al-grad-orange">
            <i class="fa-solid fa-rocket al-icon"></i>
            <div class="al-body">UIverse v2.0 is now live — explore new features!</div>
          </div>
          <div class="al al-grad-purple">
            <i class="fa-solid fa-wand-magic-sparkles al-icon"></i>
            <div class="al-body">Your AI generation is ready to preview.</div>
          </div>
          <div class="al al-grad-teal">
            <i class="fa-solid fa-shield-halved al-icon"></i>
            <div class="al-body">Your account is fully secured and verified.</div>
          </div>
        </div>
      </div>
      <p class="card-desc">Bold gradient alerts for high-impact announcements — orange, purple, and teal variants.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al12', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al12', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al12" class="code-block"><code>&lt;div class="alert gradient-orange"&gt;
  &lt;i class="fa-solid fa-rocket"&gt;&lt;/i&gt;
  &lt;span&gt;UIverse v2.0 is live!&lt;/span&gt;
&lt;/div&gt;

.alert.gradient-orange {
  background: linear-gradient(135deg, #eb6835, #fdcb6e);
  color: #fff;
}
.alert.gradient-purple {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: #fff;
}
.alert.gradient-teal {
  background: linear-gradient(135deg, #00b894, #06b6d4);
  color: #fff;
}</code></pre>
    </div>

    <!-- 13. Minimal Icon-only -->
    <div class="component-card" data-name="minimal icon only compact small alert" data-cat="basic">
      <div class="card-top">
        <span class="card-label">Minimal Icon Alert</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="demo-icon-alerts-row">
          <div class="al-icon-only al-ico-success" title="Success"><i class="fa-solid fa-circle-check"></i></div>
          <div class="al-icon-only al-ico-error" title="Error"><i class="fa-solid fa-circle-xmark"></i></div>
          <div class="al-icon-only al-ico-warning" title="Warning"><i class="fa-solid fa-triangle-exclamation"></i></div>
          <div class="al-icon-only al-ico-info" title="Info"><i class="fa-solid fa-circle-info"></i></div>
        </div>
        <div class="demo-icon-alerts-row" style="margin-top:14px;">
          <div class="al-icon-pulse al-ico-success"><i class="fa-solid fa-circle-check"></i></div>
          <div class="al-icon-pulse al-ico-error"><i class="fa-solid fa-circle-xmark"></i></div>
          <div class="al-icon-pulse al-ico-warning"><i class="fa-solid fa-triangle-exclamation"></i></div>
          <div class="al-icon-pulse al-ico-info"><i class="fa-solid fa-circle-info"></i></div>
        </div>
        <p style="font-size:11px;color:var(--text-secondary);text-align:center;margin-top:10px;">Top: static · Bottom: pulsing</p>
      </div>
      <p class="card-desc">Compact icon-only alert badges — static and pulsing variants for status indicators in dense UIs.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al13', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al13', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al13" class="code-block"><code>&lt;div class="icon-alert success"&gt;
  &lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;
&lt;/div&gt;

.icon-alert {
  width: 44px; height: 44px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px;
}
.icon-alert.success { background: rgba(0,184,148,0.12); color: #00b894; }
.icon-alert.error   { background: rgba(214,48,49,0.12);  color: #d63031; }

/* Pulsing */
.icon-alert.pulsing {
  animation: pulse-ring 1.8s ease-in-out infinite;
}
@keyframes pulse-ring {
  0%,100% { box-shadow: 0 0 0 0 rgba(0,184,148,0.4); }
  50%      { box-shadow: 0 0 0 10px rgba(0,184,148,0); }
}</code></pre>
    </div>

    <!-- 14. Dark Alerts -->
    <div class="component-card" data-name="dark night themed alert" data-cat="filled">
      <div class="card-top">
        <span class="card-label">Dark Theme Alerts</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview dark-preview">
        <div class="demo-alert-stack">
          <div class="al al-dark-success">
            <i class="fa-solid fa-circle-check al-icon"></i>
            <div class="al-body">Deployment complete. Live in 2s.</div>
          </div>
          <div class="al al-dark-error">
            <i class="fa-solid fa-circle-xmark al-icon"></i>
            <div class="al-body">Pipeline failed at step 3.</div>
          </div>
          <div class="al al-dark-warning">
            <i class="fa-solid fa-triangle-exclamation al-icon"></i>
            <div class="al-body">CPU usage above 90%.</div>
          </div>
          <div class="al al-dark-info">
            <i class="fa-solid fa-circle-info al-icon"></i>
            <div class="al-body">Autosave enabled every 30 seconds.</div>
          </div>
        </div>
      </div>
      <p class="card-desc">Dark-background alert variants — designed for dark dashboards, terminals, and dev tools.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('al14', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('al14', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="al14" class="code-block"><code>&lt;div class="alert dark success"&gt;
  &lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;
  &lt;span&gt;Deployment complete.&lt;/span&gt;
&lt;/div&gt;

.alert.dark { background: #1a1a1e; }
.alert.dark.success { border-left: 4px solid #00b894; color: #00b894; }
.alert.dark.error   { border-left: 4px solid #d63031; color: #d63031; }
.alert.dark.warning { border-left: 4px solid #fdcb6e; color: #fdcb6e; }
.alert.dark.info    { border-left: 4px solid #74b9ff; color: #74b9ff; }</code></pre>
    </div>

  </div><!-- /alerts-grid -->

</main>
```

### Toggles (toggles)

- Path: toggles.html
- Exists: yes
- Version: 0.1.0
- Documentation score: 90/100
- Tags: controls, components
- Aliases: switches
- Description: Toggle switches and binary controls
- CSS assets: css/main.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css, toggles.css
- JS assets: -
- Headings:
  - H1: Toggle Switches
  - H2: ⬡ UIverse
  - H3: Explore
  - H3: Resources
  - H3: Legal
  - H3: Stay Updated

Usage snippet:

```html
<main class="main-home">

  <!-- Page Hero -->
  <div class="page-hero">
    <div class="page-hero-left">
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>Toggles</span>
      </div>
      <h1 class="page-title">Toggle Switches</h1>
      <p class="page-desc">A complete collection of CSS-only toggle switch components — classic, iOS, neon, text label, gradient, icon, and more. No JavaScript needed. Click to copy.</p>
      <div class="page-meta">
        <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 9 Components</span>
        <span class="meta-badge"><i class="fa-solid fa-code"></i> CSS Only</span>
        <span class="meta-badge"><i class="fa-solid fa-bolt"></i> No JS Required</span>
      </div>
    </div>
    <div class="page-hero-right">
      <div class="toggle-hero-preview">
        <div class="thp-row">
          <div class="toggle-wrap toggle-classic">
            <input type="checkbox" id="hp1" checked>
            <label for="hp1"></label>
          </div>
          <span>Classic</span>
        </div>
        <div class="thp-row">
          <div class="toggle-wrap toggle-ios">
            <input type="checkbox" id="hp2" checked>
            <label for="hp2"></label>
          </div>
          <span>iOS</span>
        </div>
        <div class="thp-row">
          <div class="toggle-wrap toggle-neon">
            <input type="checkbox" id="hp3" checked>
            <label for="hp3"></label>
          </div>
          <span>Neon</span>
        </div>
        <div class="thp-row">
          <div class="toggle-wrap toggle-gradient">
            <input type="checkbox" id="hp4" checked>
            <label for="hp4"></label>
          </div>
          <span>Gradient</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Filter Bar -->
  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterCards('all', this)">All</button>
    <button class="filter-btn" onclick="filterCards('simple', this)">Simple</button>
    <button class="filter-btn" onclick="filterCards('styled', this)">Styled</button>
    <button class="filter-btn" onclick="filterCards('themed', this)">Themed</button>
    <div class="filter-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Filter toggles..." oninput="liveFilter(this.value)" />
    </div>
  </div>

  <!-- Grid -->
  <div class="toggles-grid" id="togglesGrid">

    <!-- 1. Classic -->
    <div class="component-card" data-name="classic toggle switch" data-cat="simple">
      <div class="card-top">
        <span class="card-label">Classic Toggle</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="toggle-demo-rows">
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-classic">
              <input type="checkbox" id="c1a">
              <label for="c1a"></label>
            </div>
            <span class="toggle-label-text">Off by default</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-classic">
              <input type="checkbox" id="c1b" checked>
              <label for="c1b"></label>
            </div>
            <span class="toggle-label-text">On by default</span>
          </div>
        </div>
      </div>
      <p class="card-desc">A clean classic toggle — smooth bounce animation on the thumb, purple when active.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc1', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc1" class="code-block"><code>&lt;div class="toggle-classic"&gt;
  &lt;input type="checkbox" id="t1"&gt;
  &lt;label for="t1"&gt;&lt;/label&gt;
&lt;/div&gt;

input[type="checkbox"] { display: none; }

.toggle-classic label {
  display: block; width: 52px; height: 28px;
  background: #dfe6e9; border-radius: 14px;
  cursor: pointer; position: relative;
  transition: background 0.3s ease;
}
.toggle-classic label::after {
  content: ""; position: absolute;
  width: 22px; height: 22px; background: #fff;
  border-radius: 50%; top: 3px; left: 3px;
  transition: transform 0.3s cubic-bezier(.68,-.55,.27,1.55);
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.toggle-classic input:checked + label { background: #6c5ce7; }
.toggle-classic input:checked + label::after { transform: translateX(24px); }</code></pre>
    </div>

    <!-- 2. iOS -->
    <div class="component-card" data-name="ios apple style toggle green" data-cat="simple">
      <div class="card-top">
        <span class="card-label">iOS Style</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="toggle-demo-rows">
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-ios">
              <input type="checkbox" id="c2a" checked>
              <label for="c2a"></label>
            </div>
            <span class="toggle-label-text">Wi-Fi</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-ios">
              <input type="checkbox" id="c2b">
              <label for="c2b"></label>
            </div>
            <span class="toggle-label-text">Bluetooth</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-ios">
              <input type="checkbox" id="c2c" checked>
              <label for="c2b2"></label>
            </div>
            <span class="toggle-label-text">Notifications</span>
          </div>
        </div>
      </div>
      <p class="card-desc">Pixel-perfect iOS toggle with spring easing and green active state — straight from Apple's HIG.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc2', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc2" class="code-block"><code>&lt;div class="toggle-ios"&gt;
  &lt;input type="checkbox" id="t2" checked&gt;
  &lt;label for="t2"&gt;&lt;/label&gt;
&lt;/div&gt;

.toggle-ios label {
  display: block; width: 56px; height: 30px;
  background: #e5e5ea; border-radius: 15px;
  cursor: pointer; position: relative; transition: background 0.3s;
}
.toggle-ios label::after {
  content: ""; position: absolute;
  width: 26px; height: 26px; background: #fff;
  border-radius: 50%; top: 2px; left: 2px;
  transition: transform 0.3s cubic-bezier(.23,1,.32,1);
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}
.toggle-ios input:checked + label { background: #34c759; }
.toggle-ios input:checked + label::after { transform: translateX(26px); }</code></pre>
    </div>

    <!-- 3. Neon -->
    <div class="component-card" data-name="neon glow dark toggle purple" data-cat="themed">
      <div class="card-top">
        <span class="card-label">Neon Glow</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview dark-preview">
        <div class="toggle-demo-rows">
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-neon">
              <input type="checkbox" id="c3a">
              <label for="c3a"></label>
            </div>
            <span class="toggle-label-text" style="color:#a29bfe;">Off</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-neon">
              <input type="checkbox" id="c3b" checked>
              <label for="c3b"></label>
            </div>
            <span class="toggle-label-text" style="color:#a29bfe;">Neon on</span>
          </div>
        </div>
      </div>
      <p class="card-desc">A glowing neon toggle — perfect for dark-themed dashboards and cyberpunk UIs.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc3', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc3', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc3" class="code-block"><code>&lt;div class="toggle-neon"&gt;
  &lt;input type="checkbox" id="t3"&gt;
  &lt;label for="t3"&gt;&lt;/label&gt;
&lt;/div&gt;

.toggle-neon label {
  display: block; width: 58px; height: 30px;
  background: #2d3436; border: 2px solid #636e72;
  border-radius: 15px; cursor: pointer; position: relative;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.toggle-neon label::after {
  content: ""; position: absolute;
  width: 20px; height: 20px; background: #636e72;
  border-radius: 50%; top: 3px; left: 3px;
  transition: transform 0.3s ease, background 0.3s, box-shadow 0.3s;
}
.toggle-neon input:checked + label {
  border-color: #a29bfe;
  box-shadow: 0 0 14px rgba(162,155,254,0.6);
}
.toggle-neon input:checked + label::after {
  transform: translateX(26px);
  background: #a29bfe;
  box-shadow: 0 0 8px #a29bfe;
}</code></pre>
    </div>

    <!-- 4. ON / OFF text -->
    <div class="component-card" data-name="on off text label toggle" data-cat="styled">
      <div class="card-top">
        <span class="card-label">ON / OFF Text</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="toggle-demo-rows">
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-text">
              <input type="checkbox" id="c4a">
              <label for="c4a"></label>
            </div>
            <span class="toggle-label-text">Notifications</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-text">
              <input type="checkbox" id="c4b" checked>
              <label for="c4b"></label>
            </div>
            <span class="toggle-label-text">Dark mode</span>
          </div>
        </div>
      </div>
      <p class="card-desc">Displays "ON" or "OFF" text inside the toggle itself — clear and accessible.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc4', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc4', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc4" class="code-block"><code>&lt;div class="toggle-text"&gt;
  &lt;input type="checkbox" id="t4"&gt;
  &lt;label for="t4"&gt;&lt;/label&gt;
&lt;/div&gt;

.toggle-text label {
  display: flex; align-items: center; justify-content: flex-end;
  padding-right: 7px; width: 62px; height: 28px;
  background: #dfe6e9; border-radius: 14px; cursor: pointer;
  position: relative; transition: background 0.3s;
  font-size: 9px; font-weight: 700; color: #b2bec3;
}
.toggle-text label::before { content: "OFF"; }
.toggle-text label::after {
  content: ""; position: absolute;
  width: 22px; height: 22px; background: #fff;
  border-radius: 50%; top: 3px; left: 3px;
  transition: transform 0.3s ease;
}
.toggle-text input:checked + label {
  background: #00b894;
  justify-content: flex-start; padding-left: 7px; color: #55efc4;
}
.toggle-text input:checked + label::before { content: "ON"; }
.toggle-text input:checked + label::after { transform: translateX(34px); }</code></pre>
    </div>

    <!-- 5. Flat minimal -->
    <div class="component-card" data-name="flat minimal toggle red" data-cat="simple">
      <div class="card-top">
        <span class="card-label">Flat Minimal</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="toggle-demo-rows">
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-flat">
              <input type="checkbox" id="c5a" checked>
              <label for="c5a"></label>
            </div>
            <span class="toggle-label-text">Red accent</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-flat">
              <input type="checkbox" id="c5b">
              <label for="c5b"></label>
            </div>
            <span class="toggle-label-text">Off</span>
          </div>
        </div>
      </div>
      <p class="card-desc">Ultra-minimal flat toggle — small footprint, red active state, ideal for settings panels.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc5', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc5', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc5" class="code-block"><code>&lt;div class="toggle-flat"&gt;
  &lt;input type="checkbox" id="t5" checked&gt;
  &lt;label for="t5"&gt;&lt;/label&gt;
&lt;/div&gt;

.toggle-flat label {
  display: block; width: 48px; height: 24px;
  background: #dfe6e9; border-radius: 12px;
  cursor: pointer; position: relative; transition: background 0.25s;
}
.toggle-flat label::after {
  content: ""; position: absolute;
  width: 18px; height: 18px; background: #fff;
  border-radius: 50%; top: 3px; left: 3px;
  transition: transform 0.25s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
.toggle-flat input:checked + label { background: #ff6b6b; }
.toggle-flat input:checked + label::after { transform: translateX(24px); }</code></pre>
    </div>

    <!-- 6. Gradient -->
    <div class="component-card" data-name="gradient toggle orange purple brand" data-cat="styled">
      <div class="card-top">
        <span class="card-label">Gradient Toggle</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="toggle-demo-rows">
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-gradient">
              <input type="checkbox" id="c6a" checked>
              <label for="c6a"></label>
            </div>
            <span class="toggle-label-text">UIverse brand</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-gradient">
              <input type="checkbox" id="c6b">
              <label for="c6b"></label>
            </div>
            <span class="toggle-label-text">Off</span>
          </div>
        </div>
      </div>
      <p class="card-desc">A gradient active state toggle — orange to purple, matching the UIverse brand palette.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc6', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc6', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc6" class="code-block"><code>&lt;div class="toggle-gradient"&gt;
  &lt;input type="checkbox" id="t6" checked&gt;
  &lt;label for="t6"&gt;&lt;/label&gt;
&lt;/div&gt;

.toggle-gradient label {
  display: block; width: 54px; height: 28px;
  background: #dfe6e9; border-radius: 14px;
  cursor: pointer; position: relative; transition: background 0.3s;
}
.toggle-gradient label::after {
  content: ""; position: absolute;
  width: 22px; height: 22px; background: #fff;
  border-radius: 50%; top: 3px; left: 3px;
  transition: transform 0.3s cubic-bezier(.68,-.55,.27,1.55);
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.toggle-gradient input:checked + label {
  background: linear-gradient(90deg, #eb6835, #6c5ce7);
}
.toggle-gradient input:checked + label::after { transform: translateX(26px); }</code></pre>
    </div>

    <!-- 7. Icon toggle -->
    <div class="component-card" data-name="icon emoji sun moon toggle" data-cat="styled">
      <div class="card-top">
        <span class="card-label">Icon Toggle</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="toggle-demo-rows">
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-icon">
              <input type="checkbox" id="c7a">
              <label for="c7a">
                <span class="icon-off">☀️</span>
                <span class="icon-on">🌙</span>
                <span class="icon-thumb"></span>
              </label>
            </div>
            <span class="toggle-label-text">Light / Dark</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-icon toggle-icon-sound">
              <input type="checkbox" id="c7b" checked>
              <label for="c7b">
                <span class="icon-off">🔇</span>
                <span class="icon-on">🔊</span>
                <span class="icon-thumb"></span>
              </label>
            </div>
            <span class="toggle-label-text">Sound</span>
          </div>
        </div>
      </div>
      <p class="card-desc">A toggle with emoji icons on both sides — the thumb slides to reveal the active icon.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc7', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc7', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc7" class="code-block"><code>&lt;div class="toggle-icon"&gt;
  &lt;input type="checkbox" id="t7"&gt;
  &lt;label for="t7"&gt;
    &lt;span class="icon-off"&gt;☀️&lt;/span&gt;
    &lt;span class="icon-on"&gt;🌙&lt;/span&gt;
    &lt;span class="icon-thumb"&gt;&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;

.toggle-icon label {
  display: flex; align-items: center; justify-content: space-between;
  width: 64px; height: 32px;
  background: #f0f0f0; border-radius: 16px; cursor: pointer;
  padding: 0 6px; position: relative; transition: background 0.3s;
}
.icon-off, .icon-on { font-size: 14px; z-index: 1; }
.icon-thumb {
  position: absolute; width: 26px; height: 26px;
  background: #fff; border-radius: 50%; left: 3px;
  transition: transform 0.3s cubic-bezier(.68,-.55,.27,1.55);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
input:checked + label { background: #1e1e2e; }
input:checked + label .icon-thumb { transform: translateX(32px); }</code></pre>
    </div>

    <!-- 8. Bordered outline -->
    <div class="component-card" data-name="outline border toggle accent" data-cat="styled">
      <div class="card-top">
        <span class="card-label">Outline Toggle</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="toggle-demo-rows">
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-outline">
              <input type="checkbox" id="c8a">
              <label for="c8a"></label>
            </div>
            <span class="toggle-label-text">Default</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-outline">
              <input type="checkbox" id="c8b" checked>
              <label for="c8b"></label>
            </div>
            <span class="toggle-label-text">Active</span>
          </div>
        </div>
      </div>
      <p class="card-desc">A hollow border-based toggle — the thumb fills with the accent colour when checked.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc8', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc8', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc8" class="code-block"><code>&lt;div class="toggle-outline"&gt;
  &lt;input type="checkbox" id="t8" checked&gt;
  &lt;label for="t8"&gt;&lt;/label&gt;
&lt;/div&gt;

.toggle-outline label {
  display: block; width: 52px; height: 28px;
  background: transparent;
  border: 2px solid #dfe6e9;
  border-radius: 14px; cursor: pointer; position: relative;
  transition: border-color 0.3s;
}
.toggle-outline label::after {
  content: ""; position: absolute;
  width: 18px; height: 18px; background: #dfe6e9;
  border-radius: 50%; top: 3px; left: 3px;
  transition: transform 0.3s ease, background 0.3s;
}
.toggle-outline input:checked + label { border-color: #eb6835; }
.toggle-outline input:checked + label::after {
  background: #eb6835;
  transform: translateX(24px);
}</code></pre>
    </div>

    <!-- 9. Large / accessibility -->
    <div class="component-card" data-name="large big accessible toggle" data-cat="simple">
      <div class="card-top">
        <span class="card-label">Large Toggle</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="toggle-demo-rows">
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-large">
              <input type="checkbox" id="c9a" checked>
              <label for="c9a"></label>
            </div>
            <span class="toggle-label-text">Accessibility size</span>
          </div>
          <div class="toggle-demo-row">
            <div class="toggle-wrap toggle-large">
              <input type="checkbox" id="c9b">
              <label for="c9b"></label>
            </div>
            <span class="toggle-label-text">Off</span>
          </div>
        </div>
      </div>
      <p class="card-desc">An oversized toggle for better touch targets and accessibility — great for mobile settings.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc9', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc9', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc9" class="code-block"><code>&lt;div class="toggle-large"&gt;
  &lt;input type="checkbox" id="t9" checked&gt;
  &lt;label for="t9"&gt;&lt;/label&gt;
&lt;/div&gt;

.toggle-large label {
  display: block; width: 72px; height: 38px;
  background: #dfe6e9; border-radius: 19px;
  cursor: pointer; position: relative; transition: background 0.3s;
}
.toggle-large label::after {
  content: ""; position: absolute;
  width: 30px; height: 30px; background: #fff;
  border-radius: 50%; top: 4px; left: 4px;
  transition: transform 0.3s cubic-bezier(.68,-.55,.27,1.55);
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
}
.toggle-large input:checked + label { background: #eb6835; }
.toggle-large input:checked + label::after { transform: translateX(34px); }</code></pre>
    </div>

  </div><!-- /toggles-grid -->

</main>
```

