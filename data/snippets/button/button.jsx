import React from 'react';

export default function button(){
  return (
    <>
      <main className="main-home">
      
        {/* Filter Bar */}
        <div className="filter-bar">
          <button className="filter-btn active" onclick="filterCards('all', this)">All</button>
          <button className="filter-btn" onclick="filterCards('style', this)">Style</button>
          <button className="filter-btn" onclick="filterCards('status', this)">Status</button>
          <button className="filter-btn" onclick="filterCards('effect', this)">Effects</button>
          <div className="filter-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Filter buttons..." oninput="liveFilter(this.value)" />
          </div>
        </div>
      
        {/* Button Grid */}
        <div className="button-grid" id="buttonGrid">
      
          {/* Gradient */}
          <div className="component-card" data-name="gradient button colorful" data-cat="style" data-tags="modern, colorful, smooth">
            <div className="card-top">
              <span className="card-label">Gradient</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <button className="gradient-btn">Click Me</button>
            </div>
            <p className="card-desc">A vibrant multi-color gradient button with smooth hover transition.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c1', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c1', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Gradient Button')">Add to My Collection</button>
            </div>
            <pre id="c1" className="code-block"><code>&lt;button className="gradient-btn"&gt;Click Me&lt;/button&gt;
      
            <h1>
              Beautiful <span>Button Components</span>
            </h1>
      
            <p>
              Explore reusable, modern, and interactive button styles designed for real-world UI development.
            </p>
      
          </section>
      
          {/* BUTTON GRID */}
          <section className="features">
      
            {/* Gradient */}
            <div className="feature-card">
              <div className="icon">🌈</div>
              <h3>Gradient Button</h3>
              <button className="gradient-btn">Click Me</button>
      
              <div className="actions">
                <button onclick="toggleCode('c1', this)">View Code</button>
                <button onclick="copyCode('c1', this)">Copy</button>
              </div>
      
              <pre id="c1" className="code-block">
      &lt;button className="gradient-btn"&gt;Click Me&lt;/button&gt;
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
      
            {/* Customization Options */}
            <div className="component-customization">
              <h4>✨ Customization</h4>
              <div className="customization-item">
                <p><strong>Background Gradient:</strong> Change the gradient angle and colors</p>
                <div className="customization-example">
                  background: linear-gradient(135deg, #eb6835, #6c5ce7);
                </div>
              </div>
              <div className="customization-item">
                <p><strong>Hover Effect:</strong> Modify opacity or add scale transform</p>
                <div className="customization-example">
                  .gradient-btn:hover { transform: scale(1.05); }
                </div>
              </div>
              <div className="customization-item">
                <p><strong>Padding & Size:</strong> Adjust for different button sizes</p>
                <div className="customization-example">
                  padding: 12px 28px; /* larger */ or 8px 16px; /* smaller */
                </div>
              </div>
            </div>
      
            {/* Accessibility Notes */}
            <div className="component-a11y">
              <h4><i className="fa-solid fa-universal-access"></i> Accessibility</h4>
              <ul>
                <li>Button has sufficient color contrast (white text on gradient background)</li>
                <li>Includes visible focus state through transform on hover</li>
                <li>Text label clearly indicates button purpose</li>
                <li>Supports keyboard navigation (tab to focus, enter to activate)</li>
                <li>Consider adding <code>aria-label</code> for icon-only variants</li>
              </ul>
            </div>
      
            {/* Browser Support */}
            <div className="component-variants">
              <h4>🌐 Browser Support</h4>
              <div className="browser-support">
                <div className="browser-support-item supported">Chrome 26+</div>
                <div className="browser-support-item supported">Firefox 16+</div>
                <div className="browser-support-item supported">Safari 6.1+</div>
                <div className="browser-support-item supported">Edge 12+</div>
                <div className="browser-support-item partial">IE 10 (no gradient)</div>
              </div>
            </div>
          </div>
      
          {/* Outline */}
          <div className="component-card" data-name="outline button border" data-cat="style" data-tags="minimal, accessible, clean">
            <div className="card-top">
              <span className="card-label">Outline</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <button className="outline-btn">Click Me</button>
            </div>
            <p className="card-desc">A clean border-only button — great for secondary actions.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c2', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c2', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Outline Button')">Add to My Collection</button>
        
            </div>
            <pre id="c2" className="code-block"><code>&lt;button className="outline-btn"&gt;Click Me&lt;/button&gt;
      
            {/* Outline */}
            <div className="feature-card">
              <div className="icon">⬜</div>
              <h3>Outline Button</h3>
              <button className="outline-btn">Click Me</button>
      
              <div className="actions">
                <button onclick="toggleCode('c2', this)">View Code</button>
                <button onclick="copyCode('c2', this)">Copy</button>
              </div>
      
              <pre id="c2" className="code-block">
      &lt;button className="outline-btn"&gt;Click Me&lt;/button&gt;
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
      
            {/* Customization Options */}
            <div className="component-customization">
              <h4>✨ Customization</h4>
              <div className="customization-item">
                <p><strong>Border Color:</strong> Change the border and text color</p>
                <div className="customization-example">
                  border: 2px solid #your-color; color: #your-color;
                </div>
              </div>
              <div className="customization-item">
                <p><strong>Hover Fill:</strong> Add background on hover or keep transparent</p>
                <div className="customization-example">
                  .outline-btn:hover { background: rgba(235, 104, 53, 0.1); }
                </div>
              </div>
              <div className="customization-item">
                <p><strong>Border Width:</strong> Adjust thickness for different emphasis</p>
                <div className="customization-example">
                  border: 1px solid... /* thinner */ or 3px solid... /* thicker */
                </div>
              </div>
            </div>
      
            {/* Accessibility Notes */}
            <div className="component-a11y">
              <h4><i className="fa-solid fa-universal-access"></i> Accessibility</h4>
              <ul>
                <li>Border provides visual distinction for focus state</li>
                <li>Color contrast meets WCAG AA standards (dark border on light background)</li>
                <li>Hover state provides clear feedback for interactive affordance</li>
                <li>Works well for secondary and tertiary actions</li>
                <li>Transparent background improves visual hierarchy</li>
              </ul>
            </div>
      
            {/* Variants */}
            <div className="component-variants">
              <h4>🎨 Variants</h4>
              <span className="variant-tag">Default</span>
              <span className="variant-tag active">Interactive</span>
              <span className="variant-tag">Disabled</span>
              <span className="variant-tag">Large</span>
              <span className="variant-tag">Small</span>
              <div className="browser-support" style="margin-top: 16px;">
                <strong>Browser Support:</strong>
                <div className="browser-support-item supported">All Modern Browsers</div>
                <div className="browser-support-item supported">IE 9+</div>
              </div>
            </div>
          </div>
      
          {/* Neon */}
          <div className="component-card" data-name="neon button glow" data-cat="effect" data-tags="glowing, dark-mode, trendy">
            <div className="card-top">
              <span className="card-label">Neon</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview dark-preview">
              <button className="neon-btn">Glow</button>
            </div>
            <p className="card-desc">A glowing neon-style button perfect for dark themed UIs.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c3', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c3', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Neon Button')">Add to My Collection</button>
            </div>
            <pre id="c3" className="code-block"><code>&lt;button className="neon-btn"&gt;Glow&lt;/button&gt;
      
            {/* Neon */}
            <div className="feature-card">
              <div className="icon">💡</div>
              <h3>Neon Button</h3>
              <button className="neon-btn">Glow</button>
      
              <div className="actions">
                <button onclick="toggleCode('c3', this)">View Code</button>
                <button onclick="copyCode('c3', this)">Copy</button>
              </div>
      
              <pre id="c3" className="code-block">
      &lt;button className="neon-btn"&gt;Glow&lt;/button&gt;
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
      
          {/* Glass */}
          <div className="component-card" data-name="glass button transparent blur" data-cat="effect" data-tags="modern, blur, trendy">
            <div className="card-top">
              <span className="card-label">Glass</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview glass-preview">
              <button className="glass-btn">Glass</button>
            </div>
            <p className="card-desc">A frosted-glass effect button with backdrop blur.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c4', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c4', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Glass Button')">Add to My Collection</button>
            </div>
            <pre id="c4" className="code-block"><code>&lt;button className="glass-btn"&gt;Glass&lt;/button&gt;
      
            {/* Glass */}
            <div className="feature-card">
              <div className="icon">🪟</div>
              <h3>Glass Button</h3>
              <button className="glass-btn">Glass</button>
      
              <div className="actions">
                <button onclick="toggleCode('c4', this)">View Code</button>
                <button onclick="copyCode('c4', this)">Copy</button>
              </div>
      
              <pre id="c4" className="code-block">
      &lt;button className="glass-btn"&gt;Glass&lt;/button&gt;
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
      
          {/* Shadow */}
          <div className="component-card" data-name="shadow button lift depth" data-cat="effect" data-tags="depth, interactive, modern">
            <div className="card-top">
              <span className="card-label">Shadow</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <button className="shadow-btn">Lift</button>
            </div>
            <p className="card-desc">A soft shadow button with a satisfying lift on hover.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c5', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c5', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Shadow Button')">Add to My Collection</button>
            </div>
            <pre id="c5" className="code-block"><code>&lt;button className="shadow-btn"&gt;Lift&lt;/button&gt;
      
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
      
          {/* Rounded (Pill) */}
          <div className="component-card" data-name="rounded button pill" data-cat="style" data-tags="modern, minimal, friendly">
            <div className="card-top">
              <span className="card-label">Pill</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <button className="rounded-btn">Rounded</button>
            </div>
            <p className="card-desc">A fully pill-shaped button — modern and approachable.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c6', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c6', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Pill Button')">Add to My Collection</button>
            </div>
            <pre id="c6" className="code-block"><code>&lt;button className="rounded-btn"&gt;Rounded&lt;/button&gt;
      
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
      
          {/* Icon */}
          <div className="component-card" data-name="icon button circular" data-cat="style" data-tags="compact, minimal, accessible">
            <div className="card-top">
              <span className="card-label">Icon</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <button className="icon-btn"><i className="fa-solid fa-star"></i></button>
            </div>
            <p className="card-desc">A compact circular icon button for toolbars and action menus.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c7', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c7', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Icon Button')">Add to My Collection</button>
            </div>
            <pre id="c7" className="code-block"><code>&lt;button className="icon-btn"&gt;★&lt;/button&gt;
      
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
      
          {/* Success */}
          <div className="component-card" data-name="success button green" data-cat="status" data-tags="confirmation, positive, feedback">
            <div className="card-top">
              <span className="card-label">Success</span>
              <span className="card-tag tag-new">Status</span>
            </div>
            <div className="card-preview">
              <button className="success-btn"><i className="fa-solid fa-check"></i> Success</button>
            </div>
            <p className="card-desc">A green success button — ideal for confirmations and completed actions.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c8', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c8', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Success Button')">Add to My Collection</button>
            </div>
            <pre id="c8" className="code-block"><code>&lt;button className="success-btn"&gt;✓ Success&lt;/button&gt;
      
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
      
          {/* Danger */}
          <div className="component-card" data-name="danger button red" data-cat="status" data-tags="destructive, alert, critical">
            <div className="card-top">
              <span className="card-label">Danger</span>
              <span className="card-tag tag-danger">Status</span>
            </div>
            <div className="card-preview">
              <button className="danger-btn"><i className="fa-solid fa-triangle-exclamation"></i> Danger</button>
            </div>
            <p className="card-desc">A red danger/error button for destructive actions.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c9', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c9', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Danger Button')">Add to My Collection</button>
            </div>
            <pre id="c9" className="code-block"><code>&lt;button className="danger-btn"&gt;⚠ Danger&lt;/button&gt;
      
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
      
          {/* Warning */}
          <div className="component-card" data-name="warning button orange" data-cat="status" data-tags="caution, alert, warning">
            <div className="card-top">
              <span className="card-label">Warning</span>
              <span className="card-tag tag-warning">Status</span>
            </div>
            <div className="card-preview">
              <button className="warning-btn"><i className="fa-solid fa-circle-exclamation"></i> Warning</button>
            </div>
            <p className="card-desc">An amber warning button for caution states.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c10', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c10', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Warning Button')">Add to My Collection</button>
            </div>
            <pre id="c10" className="code-block"><code>&lt;button className="warning-btn"&gt;⚠ Warning&lt;/button&gt;
      
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
      
          {/* Loading */}
          <div className="component-card" data-name="loading button spinner" data-cat="effect" data-tags="interactive, animation, state">
            <div className="card-top">
              <span className="card-label">Loading</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <button className="loading-btn" disabled>
                <span className="spinner"></span> Loading...
              </button>
            </div>
            <p className="card-desc">A disabled loading state button with an animated spinner.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c11', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c11', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Loading Button')">Add to My Collection</button>
            </div>
            <pre id="c11" className="code-block"><code>&lt;button className="loading-btn" disabled&gt;
        &lt;span className="spinner"&gt;&lt;/span&gt; Loading...
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
      
          {/* Ghost */}
          <div className="component-card" data-name="ghost button transparent" data-cat="style" data-tags="minimal, subtle, transparent">
            <div className="card-top">
              <span className="card-label">Ghost</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <button className="ghost-btn">Ghost</button>
            </div>
            <p className="card-desc">A subtle ghost button with no fill — ideal for tertiary actions.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c12', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c12', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Ghost Button')">Add to My Collection</button>
            </div>
            <pre id="c12" className="code-block"><code>&lt;button className="ghost-btn"&gt;Ghost&lt;/button&gt;
      
            {/* Shadow */}
            <div className="feature-card">
              <div className="icon">⬆️</div>
              <h3>Shadow Button</h3>
              <button className="shadow-btn">Lift</button>
      
      
              <div className="actions">
                <button onclick="toggleCode('c5')">View Code</button>
                <button onclick="copyCode('c5',this)">Copy</button>
              </div>
      
      
          {/* Animated Pulse */}
          <div className="component-card" data-name="animated button pulse" data-cat="effect" data-tags="animation, interactive, attention">
            <div className="card-top">
              <span className="card-label">Pulse</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview">
              <button className="animated-btn">Pulse</button>
            </div>
            <p className="card-desc">A pulsing animated button that grabs attention — great for CTAs.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c13', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c13', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Pulse Button')">Add to My Collection</button>
      
              <pre id="c5" className="code-block">
      &lt;button className="shadow-btn"&gt;Lift&lt;/button&gt;
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
      
          {/* 3D */}
          <div className="component-card" data-name="3d button depth" data-cat="effect" data-tags="depth, tactile, modern">
            <div className="card-top">
              <span className="card-label">3D</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview">
              <button className="btn-3d">3D Effect</button>
            </div>
            <p className="card-desc">A tactile 3D push-down button with a solid shadow base.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c14', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c14', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('3D Button')">Add to My Collection</button>
            </div>
            <pre id="c14" className="code-block"><code>&lt;button className="btn-3d"&gt;3D Effect&lt;/button&gt;
      
          </section>
      
          {/* ================= EXTRA PROFESSIONAL BUTTONS ================= */}
      
      {/* Gradient Border */}
      <div className="component-card" data-name="gradient border button" data-cat="style">
        <div className="card-top">
          <span className="card-label">Gradient Border</span>
          <span className="card-tag tag-trending">Modern</span>
        </div>
      
        <div className="card-preview">
          <button className="gradient-border-btn">Explore</button>
        </div>
      
        <p className="card-desc">A sleek transparent button with animated gradient border.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c15', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c15', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c15" className="code-block"><code>&lt;button className="gradient-border-btn"&gt;Explore&lt;/button&gt;</code></pre>
      </div>
      
      
      {/* Shine Button */}
      <div className="component-card" data-name="shine button hover effect" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Shine</span>
          <span className="card-tag tag-popular">Popular</span>
        </div>
      
        <div className="card-preview">
          <button className="shine-btn">Get Started</button>
        </div>
      
        <p className="card-desc">Elegant shine animation passing across the button on hover.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c16', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c16', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c16" className="code-block"><code>&lt;button className="shine-btn"&gt;Get Started&lt;/button&gt;</code></pre>
      </div>
      
      
      {/* Soft UI */}
      <div className="component-card" data-name="soft ui neumorphism button" data-cat="style">
        <div className="card-top">
          <span className="card-label">Soft UI</span>
          <span className="card-tag tag-trending">Premium</span>
        </div>
      
        <div className="card-preview">
          <button className="soft-btn">Soft UI</button>
        </div>
      
        <p className="card-desc">Modern neumorphism button with soft inner shadows.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c17', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c17', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c17" className="code-block"><code>&lt;button className="soft-btn"&gt;Soft UI&lt;/button&gt;</code></pre>
      </div>
      
      
      {/* Sliding Arrow */}
      <div className="component-card" data-name="sliding arrow button" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Arrow Slide</span>
          <span className="card-tag tag-new">Interactive</span>
        </div>
      
        <div className="card-preview">
          <button className="slide-btn">
            Continue
            <span><i className="fa-solid fa-arrow-right"></i></span>
          </button>
        </div>
      
        <p className="card-desc">Animated arrow movement for modern CTA interactions.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c18', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c18', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c18" className="code-block"><code>&lt;button className="slide-btn"&gt;Continue&lt;/button&gt;</code></pre>
      </div>
      
      
      {/* Dark Premium */}
      <div className="component-card" data-name="premium dark button" data-cat="style">
        <div className="card-top">
          <span className="card-label">Premium Dark</span>
          <span className="card-tag tag-premium">Premium</span>
        </div>
      
        <div className="card-preview dark-preview">
          <button className="premium-btn">Premium</button>
        </div>
      
        <p className="card-desc">Luxury dark UI button with premium glossy finish.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c19', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c19', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c19" className="code-block"><code>&lt;button className="premium-btn"&gt;Premium&lt;/button&gt;</code></pre>
      </div>
      
      
      {/* Ripple Button */}
      <div className="component-card" data-name="ripple material button" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Ripple</span>
          <span className="card-tag tag-popular">Material</span>
        </div>
      
        <div className="card-preview">
          <button className="ripple-btn">Ripple</button>
        </div>
      
        <p className="card-desc">Material-inspired ripple hover interaction.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c20', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c20', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c20" className="code-block"><code>&lt;button className="ripple-btn"&gt;Ripple&lt;/button&gt;</code></pre>
      </div>
      
        </div>{/* /button-grid */}
      
        </main>
    </>
  );
}
