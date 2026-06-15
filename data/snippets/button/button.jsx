import React from 'react';

export default function button(){
  return (
    <>
      <main className="main-home">
      
        {/* Page Header */}
        <div className="page-hero">
          <div className="page-hero-left">
            <div className="breadcrumb">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right"></i>
              <span>Buttons</span>
            </div>
            <h1 className="page-title">Button Components</h1>
            <p className="page-desc">A complete collection of beautiful, accessible button styles. Click any component to preview, then copy the code instantly.</p>
            <div className="page-meta">
              <span className="meta-badge"><i className="fa-solid fa-layer-group"></i> 14 Components</span>
              <span className="meta-badge"><i className="fa-solid fa-code"></i> Pure CSS</span>
              <span className="meta-badge"><i className="fa-solid fa-bolt"></i> No JS Required</span>
            </div>
          </div>
          <div className="page-hero-right">
            <div className="hero-btn-preview">
              <button className="gradient-btn preview-float">Gradient</button>
              <button className="neon-btn preview-float" style="animation-delay:0.2s">Neon</button>
              <button className="btn-3d preview-float" style="animation-delay:0.4s">3D</button>
            </div>
          </div>
        </div>
      
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
          <div className="component-card" data-name="gradient button colorful" data-cat="style">
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
          </div>
      
          {/* Outline */}
          <div className="component-card" data-name="outline button border" data-cat="style">
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
            </div>
            <pre id="c2" className="code-block"><code>&lt;button className="outline-btn"&gt;Click Me&lt;/button&gt;
      
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
          </div>
      
          {/* Neon */}
          <div className="component-card" data-name="neon button glow" data-cat="effect">
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
            </div>
            <pre id="c3" className="code-block"><code>&lt;button className="neon-btn"&gt;Glow&lt;/button&gt;
      
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
          <div className="component-card" data-name="glass button transparent blur" data-cat="effect">
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
            </div>
            <pre id="c4" className="code-block"><code>&lt;button className="glass-btn"&gt;Glass&lt;/button&gt;
      
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
          <div className="component-card" data-name="shadow button lift depth" data-cat="effect">
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
          <div className="component-card" data-name="rounded button pill" data-cat="style">
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
          <div className="component-card" data-name="icon button circular" data-cat="style">
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
          <div className="component-card" data-name="success button green" data-cat="status">
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
          <div className="component-card" data-name="danger button red" data-cat="status">
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
          <div className="component-card" data-name="warning button orange" data-cat="status">
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
          <div className="component-card" data-name="loading button spinner" data-cat="effect">
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
            </div>
            <pre id="c11" className="code-block"><code>&lt;button className="loading-btn" disabled&gt;
        &lt;span className="spinner"&gt;&lt;/span&gt; Loading...
      &lt;/button&gt;
      
      .loading-btn {
        padding: 10px 24px;
        background: #6c5ce7;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: not-allowed;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        opacity: 0.7;
      }
      .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
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
            <pre id="c14" className="code-block"><code>&lt;button className="btn-3d"&gt;3D Effect&lt;/button&gt;</code></pre>
          </div>
      
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
      
      {/* ================= MORE MODERN BUTTON COMPONENTS ================= */}
      
      {/* Cyberpunk */}
      <div className="component-card" data-name="cyberpunk button futuristic" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Cyberpunk</span>
          <span className="card-tag tag-trending">Futuristic</span>
        </div>
      
        <div className="card-preview dark-preview">
          <button className="cyber-btn">Launch</button>
        </div>
      
        <p className="card-desc">Futuristic neon cyberpunk-inspired glowing button.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c21', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c21', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c21" className="code-block"><code>&lt;button className="cyber-btn"&gt;Launch&lt;/button&gt;
      
      .cyber-btn{
        padding:12px 28px;
        background:#0f0f0f;
        color:#00f7ff;
        border:2px solid #00f7ff;
        border-radius:10px;
        text-transform:uppercase;
        letter-spacing:2px;
        cursor:pointer;
        transition:.3s;
        box-shadow:0 0 10px #00f7ff44;
      }
      .cyber-btn:hover{
        background:#00f7ff;
        color:#111;
        box-shadow:0 0 18px #00f7ff,
                   0 0 45px #00f7ff88;
      }</code></pre>
      </div>
      
      
      {/* Liquid */}
      <div className="component-card" data-name="liquid button wave" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Liquid</span>
          <span className="card-tag tag-premium">Premium</span>
        </div>
      
        <div className="card-preview">
          <button className="liquid-btn">Liquid</button>
        </div>
      
        <p className="card-desc">Smooth liquid hover animation with modern UI feel.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c22', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c22', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c22" className="code-block"><code>&lt;button className="liquid-btn"&gt;Liquid&lt;/button&gt;
      
      .liquid-btn{
        position:relative;
        overflow:hidden;
        padding:12px 30px;
        border:none;
        border-radius:8px;
        background:#6c5ce7;
        color:#fff;
        font-weight:600;
        cursor:pointer;
        z-index:1;
      }
      .liquid-btn::before{
        content:'';
        position:absolute;
        top:0;
        left:-100%;
        width:100%;
        height:100%;
        background:rgba(255,255,255,0.25);
        transition:.5s;
      }
      .liquid-btn:hover::before{
        left:100%;
      }</code></pre>
      </div>
      
      
      {/* Metallic */}
      <div className="component-card" data-name="metallic button silver chrome" data-cat="style">
        <div className="card-top">
          <span className="card-label">Metallic</span>
          <span className="card-tag tag-new">Luxury</span>
        </div>
      
        <div className="card-preview">
          <button className="metal-btn">Metal</button>
        </div>
      
        <p className="card-desc">Elegant chrome metallic button with glossy highlights.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c23', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c23', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c23" className="code-block"><code>&lt;button className="metal-btn"&gt;Metal&lt;/button&gt;
      
      .metal-btn{
        padding:12px 28px;
        border:none;
        border-radius:10px;
        background:linear-gradient(
          145deg,
          #f0f0f0,
          #bcbcbc
        );
        color:#222;
        font-weight:700;
        cursor:pointer;
        box-shadow:
          inset 0 1px 0 #fff,
          0 6px 14px rgba(0,0,0,.2);
        transition:.3s;
      }
      .metal-btn:hover{
        transform:translateY(-2px);
      }</code></pre>
      </div>
      
      
      {/* Expand */}
      <div className="component-card" data-name="expand button hover stretch" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Expand</span>
          <span className="card-tag tag-popular">Interactive</span>
        </div>
      
        <div className="card-preview">
          <button className="expand-btn">
            Hover Me
          </button>
        </div>
      
        <p className="card-desc">Button smoothly expands width on hover interaction.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c24', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c24', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c24" className="code-block"><code>&lt;button className="expand-btn"&gt;Hover Me&lt;/button&gt;
      
      .expand-btn{
        width:140px;
        padding:12px 20px;
        border:none;
        border-radius:8px;
        background:#eb6835;
        color:#fff;
        font-weight:600;
        cursor:pointer;
        transition:.35s ease;
      }
      .expand-btn:hover{
        width:180px;
        letter-spacing:1px;
      }</code></pre>
      </div>
      
      
      {/* Glass Neon */}
      <div className="component-card" data-name="glass neon button" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Glass Neon</span>
          <span className="card-tag tag-trending">Modern</span>
        </div>
      
        <div className="card-preview dark-preview">
          <button className="glass-neon-btn">Future</button>
        </div>
      
        <p className="card-desc">Combines glassmorphism and neon glow beautifully.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c25', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c25', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c25" className="code-block"><code>&lt;button className="glass-neon-btn"&gt;Future&lt;/button&gt;
      
      .glass-neon-btn{
        padding:12px 28px;
        border-radius:12px;
        border:1px solid rgba(255,255,255,0.2);
        background:rgba(255,255,255,0.08);
        backdrop-filter:blur(12px);
        color:#00ffe0;
        font-weight:600;
        cursor:pointer;
        transition:.3s;
      }
      .glass-neon-btn:hover{
        box-shadow:
          0 0 18px #00ffe0,
          0 0 36px rgba(0,255,224,.35);
      }</code></pre>
      </div>
      
      
      {/* Gradient Glow */}
      <div className="component-card" data-name="gradient glow button" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Gradient Glow</span>
          <span className="card-tag tag-popular">Hot</span>
        </div>
      
        <div className="card-preview">
          <button className="gradient-glow-btn">
            Start Now
          </button>
        </div>
      
        <p className="card-desc">Animated glowing gradient CTA button.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c26', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c26', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c26" className="code-block"><code>&lt;button className="gradient-glow-btn"&gt;Start Now&lt;/button&gt;
      
      .gradient-glow-btn{
        padding:12px 30px;
        border:none;
        border-radius:10px;
        background:linear-gradient(
          45deg,
          #ff6b6b,
          #6c5ce7,
          #00cec9
        );
        background-size:300%;
        color:#fff;
        font-weight:700;
        cursor:pointer;
        transition:.4s;
        animation:gradientMove 5s infinite linear;
      }
      .gradient-glow-btn:hover{
        box-shadow:0 0 20px rgba(108,92,231,.5);
      }
      
      @keyframes gradientMove{
        0%{background-position:0%}
        100%{background-position:300%}
      }</code></pre>
      </div>
      
      
      {/* Minimal Underline */}
      <div className="component-card" data-name="minimal underline button" data-cat="style">
        <div className="card-top">
          <span className="card-label">Underline</span>
          <span className="card-tag tag-essential">Minimal</span>
        </div>
      
        <div className="card-preview">
          <button className="underline-btn">
            Learn More
          </button>
        </div>
      
        <p className="card-desc">Elegant text button with animated underline effect.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c27', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c27', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        
        <div className="container">
      
          {/* Gradient Button */}
          <button className="btn gradient-btn">
            Gradient Button
          </button>
      
          {/* Neon Button */}
          <button className="btn neon-btn">
            Neon Glow
          </button>
      
          {/* Outline Hover Fill */}
          <button className="btn outline-btn">
            Hover Fill
          </button>
      
          {/* 3D Button */}
          <button className="btn three-d-btn">
            3D Button
          </button>
      
          {/* Glass Button */}
          <button className="btn glass-btn">
            Glass Effect
          </button>
      
          {/* Slide Arrow Button */}
          <button className="btn arrow-btn">
            <span>Explore</span>
          </button>
      
          {/* Pulse Button */}
          <button className="btn pulse-btn">
            Pulse Button
          </button>
      
          {/* Dark Mode Toggle */}
          <button className="btn toggle-btn" id="themeBtn">
            🌙 Dark Mode
          </button>
      
          {/* Shine Effect */}
          <button className="btn shine-btn">
            Shine Button
          </button>
      
          {/* Floating Button */}
          <button className="btn floating-btn">
            +
          </button>
      
        </div>
      
        <pre id="c27" className="code-block"><code>&lt;button className="underline-btn"&gt;Learn More&lt;/button&gt;
      
      .underline-btn{
        background:none;
        border:none;
        color:#111;
        font-size:16px;
        font-weight:600;
        position:relative;
        cursor:pointer;
      }
      .underline-btn::after{
        content:'';
        position:absolute;
        left:0;
        bottom:-4px;
        width:0%;
        height:2px;
        background:#eb6835;
        transition:.3s;
      }
      .underline-btn:hover::after{
        width:100%;
      }</code></pre>
      </div>
      
      
      {/* Floating */}
      <div className="component-card" data-name="floating button shadow animation" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Floating</span>
          <span className="card-tag tag-trending">Animated</span>
        </div>
      
        <div className="card-preview">
          <button className="floating-btn">
            Floating
          </button>
        </div>
      
        <p className="card-desc">Soft floating animation with subtle movement.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c28', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c28', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c28" className="code-block"><code>&lt;button className="floating-btn"&gt;Floating&lt;/button&gt;
      
      .floating-btn{
        padding:12px 28px;
        border:none;
        border-radius:10px;
        background:#6c5ce7;
        color:#fff;
        font-weight:600;
        cursor:pointer;
        animation:floatBtn 2.2s ease-in-out infinite;
      }
      
      @keyframes floatBtn{
        0%,100%{
          transform:translateY(0);
        }
        50%{
          transform:translateY(-6px);
        }
      }</code></pre>
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
      
      {/* ================= 5 PREMIUM BUTTONS ================= */}
      
      {/* Neon Glow Button */}
      <div className="component-card" data-name="neon glow button RGB animation" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Neon Glow</span>
          <span className="card-tag tag-trending">Trending</span>
        </div>
      
        <div className="card-preview dark-preview">
          <button className="neon-glow-btn">Glow Flow</button>
        </div>
      
        <p className="card-desc">RGB neon glow animation with floating back-shadow on hover.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c29', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c29', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c29" className="code-block"><code>&lt;button className="neon-glow-btn"&gt;Glow Flow&lt;/button&gt;</code></pre>
      </div>
      
      {/* Magnetic Hover Button */}
      <div className="component-card" data-name="magnetic hover button tactile" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Magnetic Hover</span>
          <span className="card-tag tag-new">Tactile</span>
        </div>
      
        <div className="card-preview">
          <button className="magnetic-hover-btn">Pull Me</button>
        </div>
      
        <p className="card-desc">Sleek tactile button that responds dynamically to cursor proximity.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c30', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c30', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c30" className="code-block"><code>&lt;button className="magnetic-hover-btn"&gt;Pull Me&lt;/button&gt;</code></pre>
      </div>
      
      {/* Glassmorphism Button */}
      <div className="component-card" data-name="glassmorphism button blur gloss" data-cat="style">
        <div className="card-top">
          <span className="card-label">Glassmorphism</span>
          <span className="card-tag tag-premium">Premium</span>
        </div>
      
        <div className="card-preview glass-preview">
          <button className="glassmorphism-btn">Frosted Glass</button>
        </div>
      
        <p className="card-desc">Stunning glassmorphic frosted button with custom borders and hover shine sweep.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c31', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c31', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c31" className="code-block"><code>&lt;button className="glassmorphism-btn"&gt;Frosted Glass&lt;/button&gt;</code></pre>
      </div>
      
      {/* Ripple Effect Button */}
      <div className="component-card" data-name="ripple effect button click interactive" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Ripple Effect</span>
          <span className="card-tag tag-popular">Popular</span>
        </div>
      
        <div className="card-preview">
          <button className="ripple-effect-btn">Click Me</button>
        </div>
      
        <p className="card-desc">Material-style dynamic ripple circle originating from the click coordinate.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c32', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c32', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c32" className="code-block"><code>&lt;button className="ripple-effect-btn"&gt;Click Me&lt;/button&gt;</code></pre>
      </div>
      
      {/* Loading State Button */}
      <div className="component-card" data-name="loading state button spinner" data-cat="status">
        <div className="card-top">
          <span className="card-label">Loading State</span>
          <span className="card-tag tag-status">Interactive</span>
        </div>
      
        <div className="card-preview">
          <button className="loading-state-btn" onclick="triggerLoadingState(this)">
            <span className="spinner-icon"></span>
            <span className="btn-text">Submit Order</span>
          </button>
        </div>
      
        <p className="card-desc">Beautiful button with interactive spinner loading state and complete success feedback.</p>
      
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c33', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c33', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      
        <pre id="c33" className="code-block"><code>&lt;button className="loading-state-btn" onclick="triggerLoadingState(this)"&gt;
        &lt;span className="spinner-icon"&gt;&lt;/span&gt;
        &lt;span className="btn-text"&gt;Submit Order&lt;/span&gt;
      &lt;/button&gt;</code></pre>
      </div>
      
      {/* Aurora Button */}
      <div className="component-card" data-name="aurora gradient button animated" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Aurora</span>
          <span className="card-tag tag-trending">Animated</span>
        </div>
        <div className="card-preview dark-preview">
          <button className="aurora-btn">Explore</button>
        </div>
        <p className="card-desc">A flowing multicolor gradient button with a luminous hover lift.</p>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c34', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('c34', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <pre id="c34" className="code-block"><code>&lt;button className="aurora-btn"&gt;Explore&lt;/button&gt;</code></pre>
      </div>
      
      {/* Jelly Button */}
      <div className="component-card" data-name="jelly bounce playful button" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Jelly</span>
          <span className="card-tag tag-new">Playful</span>
        </div>
        <div className="card-preview">
          <button className="jelly-btn">Bounce</button>
        </div>
        <p className="card-desc">A soft playful button that squashes and springs on hover.</p>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c35', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('c35', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <pre id="c35" className="code-block"><code>&lt;button className="jelly-btn"&gt;Bounce&lt;/button&gt;</code></pre>
      </div>
      
      {/* Outline Fill Button */}
      <div className="component-card" data-name="outline fill button reveal" data-cat="style">
        <div className="card-top">
          <span className="card-label">Outline Fill</span>
          <span className="card-tag tag-essential">Clean</span>
        </div>
        <div className="card-preview">
          <button className="outline-fill-btn">Discover</button>
        </div>
        <p className="card-desc">A crisp outlined button that fills from left to right on hover.</p>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c36', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('c36', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <pre id="c36" className="code-block"><code>&lt;button className="outline-fill-btn"&gt;Discover&lt;/button&gt;</code></pre>
      </div>
      
      {/* Split Icon Button */}
      <div className="component-card" data-name="split icon button action" data-cat="style">
        <div className="card-top">
          <span className="card-label">Split Icon</span>
          <span className="card-tag tag-popular">Utility</span>
        </div>
        <div className="card-preview">
          <button className="split-icon-btn">
            <span>Download</span>
            <i className="fa-solid fa-download"></i>
          </button>
        </div>
        <p className="card-desc">A practical action button with a separated icon segment.</p>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c37', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('c37', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <pre id="c37" className="code-block"><code>&lt;button className="split-icon-btn"&gt;
        &lt;span&gt;Download&lt;/span&gt;
        &lt;i className="fa-solid fa-download"&gt;&lt;/i&gt;
      &lt;/button&gt;</code></pre>
      </div>
      
      {/* Border Draw Button */}
      <div className="component-card" data-name="border draw button animated line" data-cat="effect">
        <div className="card-top">
          <span className="card-label">Border Draw</span>
          <span className="card-tag tag-trending">Elegant</span>
        </div>
        <div className="card-preview">
          <button className="border-draw-btn">Contact Us</button>
        </div>
        <p className="card-desc">A refined button whose border traces itself into view on hover.</p>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c38', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('c38', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <pre id="c38" className="code-block"><code>&lt;button className="border-draw-btn"&gt;Contact Us&lt;/button&gt;</code></pre>
      </div>
      
        </div>{/* /button-grid */}
      
      </main>
    </>
  );
}
