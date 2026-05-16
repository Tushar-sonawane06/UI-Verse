import React from 'react';

export default function navbar(){
  return (
    <>
      <main className="main-home">
      
        {/* Page Hero */}
        <div className="page-hero">
          <div className="page-hero-left">
            <div className="breadcrumb">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right"></i>
              <span>Navbars</span>
            </div>
            <h1 className="page-title">Navbar Components</h1>
            <p className="page-desc">A complete collection of navigation bar styles G�� from simple to glassmorphic, dark themed, search-enabled, and split layouts. Copy and use instantly.</p>
            <div className="page-meta">
              <span className="meta-badge"><i className="fa-solid fa-layer-group"></i> 8 Components</span>
              <span className="meta-badge"><i className="fa-solid fa-code"></i> Pure CSS</span>
              <span className="meta-badge"><i className="fa-solid fa-mobile-screen"></i> Responsive</span>
            </div>
          </div>
          <div className="page-hero-right">
            <div className="hero-nav-preview">
              <div className="mini-nav">
                <span className="mini-brand">G�� UIverse</span>
                <div className="mini-links">
                  <span>Home</span>
                  <span>Docs</span>
                  <span className="mini-cta">Get Started</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        {/* Filter Bar */}
        <div className="filter-bar">
          <button className="filter-btn active" onclick="filterCards('all', this)">All</button>
          <button className="filter-btn" onclick="filterCards('simple', this)">Simple</button>
          <button className="filter-btn" onclick="filterCards('dark', this)">Dark</button>
          <button className="filter-btn" onclick="filterCards('glass', this)">Glass</button>
          <button className="filter-btn" onclick="filterCards('advanced', this)">Advanced</button>
          <div className="filter-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Filter navbars..." oninput="liveFilter(this.value)" />
          </div>
        </div>
      
        {/* Navbars Grid */}
        <div className="navbar-grid" id="navbarGrid">
        {/* =========================================================
           NAVBAR 9 G�� FLOATING NAVBAR
      ========================================================= */}
      
      <div className="component-card" data-name="floating navbar modern glass" data-cat="glass">
      
        <div className="card-top">
          <span className="card-label">Floating Navbar</span>
          <span className="card-tag tag-trending">Modern</span>
        </div>
      
        <div className="nav-card-preview glass-preview">
      
          <nav className="demo-nav-floating">
      
            <span className="dnav-brand">G�� UIverse</span>
      
            <div className="dnav-links">
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
            </div>
      
            <button className="floating-btn">
              Get Started
            </button>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A premium floating glassmorphism navbar with soft blur and rounded edges.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c9', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c9', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
      
        </div>
      
        <pre id="c9" className="code-block"><code>&lt;nav className="navbar-floating"&gt;
        &lt;span className="brand"&gt;G�� UIverse&lt;/span&gt;
      
        &lt;div className="links"&gt;
          &lt;a href="#"&gt;Home&lt;/a&gt;
          &lt;a href="#"&gt;Features&lt;/a&gt;
          &lt;a href="#"&gt;Pricing&lt;/a&gt;
        &lt;/div&gt;
      
        &lt;button&gt;Get Started&lt;/button&gt;
      &lt;/nav&gt;
      
      .navbar-floating {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 24px;
        border-radius: 20px;
        background: rgba(255,255,255,0.12);
        backdrop-filter: blur(14px);
        border: 1px solid rgba(255,255,255,0.18);
      }</code></pre>
      
      </div>
      
      {/* =========================================================
           NAVBAR 10 G�� NEON NAVBAR
      ========================================================= */}
      
      <div className="component-card" data-name="neon navbar futuristic dark glow" data-cat="dark">
      
        <div className="card-top">
          <span className="card-label">Neon Navbar</span>
          <span className="card-tag tag-popular">Neon</span>
        </div>
      
        <div className="nav-card-preview dark-preview">
      
          <nav className="demo-nav-neon">
      
            <span className="dnav-brand neon-brand">
              UIverse
            </span>
      
            <div className="dnav-links">
              <a href="#">Docs</a>
              <a href="#">Components</a>
              <a href="#">Community</a>
            </div>
      
            <button className="neon-btn">
              Launch
            </button>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          Futuristic neon navbar with glowing accents and cyberpunk inspired styling.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c10', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c10', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
      
        </div>
      
        <pre id="c10" className="code-block"><code>&lt;nav className="navbar-neon"&gt;
        &lt;span className="brand"&gt;UIverse&lt;/span&gt;
      
        &lt;div className="links"&gt;
          &lt;a href="#"&gt;Docs&lt;/a&gt;
          &lt;a href="#"&gt;Components&lt;/a&gt;
          &lt;a href="#"&gt;Community&lt;/a&gt;
        &lt;/div&gt;
      
        &lt;button&gt;Launch&lt;/button&gt;
      &lt;/nav&gt;
      
      .navbar-neon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 24px;
        background: #0f1117;
        border: 1px solid rgba(0,255,200,0.18);
      }</code></pre>
      
      </div>
          {/* Simple Navbar */}
          <div className="component-card" data-name="simple navbar basic" data-cat="simple">
            <div className="card-top">
              <span className="card-label">Simple Navbar</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="nav-card-preview">
              <nav className="demo-nav-simple">
                <span className="dnav-brand">UIverse</span>
                <div className="dnav-links">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                </div>
              </nav>
            </div>
            <p className="card-desc">A minimal navbar with a brand name on the left and links on the right.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c1', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('c1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="c1" className="code-block"><code>&lt;nav className="navbar-simple"&gt;
        &lt;span className="brand"&gt;UIverse&lt;/span&gt;
        &lt;div className="links"&gt;
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
      
          {/* Centered Navbar */}
          <div className="component-card" data-name="centered navbar links" data-cat="simple">
            <div className="card-top">
              <span className="card-label">Centered Navbar</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="nav-card-preview">
              <nav className="demo-nav-center">
                <a href="#">Home</a>
                <a href="#">Features</a>
                <span className="dnav-center-brand">UIverse</span>
                <a href="#">Docs</a>
                <a href="#">Pricing</a>
              </nav>
            </div>
            <p className="card-desc">A symmetrical navbar with links flanking the brand name in the center.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c2', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('c2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="c2" className="code-block"><code>&lt;nav className="navbar-center"&gt;
        &lt;a href="#"&gt;Home&lt;/a&gt;
        &lt;a href="#"&gt;Features&lt;/a&gt;
        &lt;span className="brand"&gt;UIverse&lt;/span&gt;
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
      
          {/* Transparent Navbar */}
      <div className="component-card" data-name="transparent navbar modern" data-cat="transparent">
        <div className="card-top">
          <span className="card-label">Transparent Navbar</span>
          <span className="card-tag tag-modern">Modern</span>
        </div>
        <div className="nav-card-preview">
          <nav className="demo-nav-transparent">
            <span className="dnav-brand">UIverse</span>
            <div className="dnav-links">
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Docs</a>
              <a href="#">Contact</a>
            </div>
          </nav>
        </div>
        <p className="card-desc">A sleek transparent navbar with a blurred background effect, ideal for landing pages and modern designs.</p>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c2', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('c2', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <pre id="c2" className="code-block"><code>&lt;nav className="navbar-transparent"&gt;
        &lt;span className="brand"&gt;UIverse&lt;/span&gt;
        &lt;div className="links"&gt;
          &lt;a href="#"&gt;Home&lt;/a&gt;
          &lt;a href="#"&gt;Features&lt;/a&gt;
          &lt;a href="#"&gt;Docs&lt;/a&gt;
          &lt;a href="#"&gt;Contact&lt;/a&gt;
        &lt;/div&gt;
      &lt;/nav&gt;</code></pre>
      </div>
      
          {/* Button Navbar */}
          <div className="component-card" data-name="button navbar login cta" data-cat="simple">
            <div className="card-top">
              <span className="card-label">Button Navbar</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="nav-card-preview">
              <nav className="demo-nav-btn">
                <span className="dnav-brand">UIverse</span>
                <div className="dnav-links">
                  <a href="#">Features</a>
                  <a href="#">Pricing</a>
                </div>
                <div className="dnav-actions">
                  <button className="dnav-outline">Sign In</button>
                  <button className="dnav-primary">Get Started</button>
                </div>
              </nav>
            </div>
            <p className="card-desc">A full-featured navbar with brand, links, and dual action buttons.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c3', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('c3', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="c3" className="code-block"><code>&lt;nav className="navbar-btn"&gt;
        &lt;span className="brand"&gt;UIverse&lt;/span&gt;
        &lt;div className="links"&gt;
          &lt;a href="#"&gt;Features&lt;/a&gt;
          &lt;a href="#"&gt;Pricing&lt;/a&gt;
        &lt;/div&gt;
        &lt;div className="actions"&gt;
          &lt;button className="outline"&gt;Sign In&lt;/button&gt;
          &lt;button className="primary"&gt;Get Started&lt;/button&gt;
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
      
          {/* Dark Navbar */}
          <div className="component-card" data-name="dark navbar theme" data-cat="dark">
            <div className="card-top">
              <span className="card-label">Dark Navbar</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="nav-card-preview dark-preview">
              <nav className="demo-nav-dark">
                <span className="dnav-brand" style="color:#fff;">G�� UIverse</span>
                <div className="dnav-links">
                  <a href="#" style="color:#aaa;">Home</a>
                  <a href="#" style="color:#aaa;">Docs</a>
                  <a href="#" style="color:#aaa;">Blog</a>
                </div>
                <button className="dnav-primary">Launch App</button>
              </nav>
            </div>
            <p className="card-desc">A sleek dark-themed navbar with an accent CTA button G�� great for SaaS and dev tools.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c4', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('c4', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="c4" className="code-block"><code>&lt;nav className="navbar-dark"&gt;
        &lt;span className="brand"&gt;G�� UIverse&lt;/span&gt;
        &lt;div className="links"&gt;
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
      
          {/* Glass Navbar */}
          <div className="component-card" data-name="glass navbar blur transparent frosted" data-cat="glass">
            <div className="card-top">
              <span className="card-label">Glass Navbar</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="nav-card-preview glass-preview">
              <nav className="demo-nav-glass">
                <span className="dnav-brand" style="color:#fff;">UIverse</span>
                <div className="dnav-links">
                  <a href="#" style="color:rgba(255,255,255,0.75);">Home</a>
                  <a href="#" style="color:rgba(255,255,255,0.75);">About</a>
                  <a href="#" style="color:rgba(255,255,255,0.75);">Work</a>
                </div>
                <button className="dnav-glass-btn">Contact</button>
              </nav>
            </div>
            <p className="card-desc">A frosted-glass navbar with backdrop blur G�� perfect for image or gradient hero sections.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c5', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('c5', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="c5" className="code-block"><code>&lt;nav className="navbar-glass"&gt;
        &lt;span className="brand"&gt;UIverse&lt;/span&gt;
        &lt;div className="links"&gt;
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
      
          {/* Search Navbar */}
          <div className="component-card" data-name="search navbar input bar" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">Search Navbar</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="nav-card-preview">
              <nav className="demo-nav-search">
                <span className="dnav-brand">UIverse</span>
                <div className="dnav-search-group">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Search docs..." />
                </div>
                <a className="dnav-primary-link" href="#">Get Started G��</a>
              </nav>
            </div>
            <p className="card-desc">A navbar with an integrated search input G�� ideal for documentation or component libraries.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c6', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('c6', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="c6" className="code-block"><code>&lt;nav className="navbar-search"&gt;
        &lt;span className="brand"&gt;UIverse&lt;/span&gt;
        &lt;div className="search-group"&gt;
          &lt;i className="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
          &lt;input type="text" placeholder="Search docs..."&gt;
        &lt;/div&gt;
        &lt;a href="#"&gt;Get Started G��&lt;/a&gt;
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
      
          {/* Split Navbar */}
          <div className="component-card" data-name="split navbar three column utility" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">Split Navbar</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="nav-card-preview">
              <nav className="demo-nav-split">
                <span className="dnav-brand">UIverse</span>
                <div className="dnav-links">
                  <a href="#">Dashboard</a>
                  <a href="#">Projects</a>
                  <a href="#">Settings</a>
                </div>
                <div className="dnav-meta">
                  <a href="#">Help</a>
                  <span className="dnav-badge">New</span>
                </div>
              </nav>
            </div>
            <p className="card-desc">A three-section navbar G�� brand left, main links center, utility links right.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c7', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('c7', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="c7" className="code-block"><code>&lt;nav className="navbar-split"&gt;
        &lt;span className="brand"&gt;UIverse&lt;/span&gt;
        &lt;div className="links"&gt;
          &lt;a href="#"&gt;Dashboard&lt;/a&gt;
          &lt;a href="#"&gt;Projects&lt;/a&gt;
        &lt;/div&gt;
        &lt;div className="meta"&gt;
          &lt;a href="#"&gt;Help&lt;/a&gt;
          &lt;span className="badge"&gt;New&lt;/span&gt;
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
      
          {/* Gradient Navbar */}
          <div className="component-card" data-name="gradient navbar colorful dark" data-cat="dark">
            <div className="card-top">
              <span className="card-label">Gradient Navbar</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="nav-card-preview">
              <nav className="demo-nav-gradient">
                <span className="dnav-brand" style="color:#fff;">G�� UIverse</span>
                <div className="dnav-links">
                  <a href="#" style="color:rgba(255,255,255,0.8);">Home</a>
                  <a href="#" style="color:rgba(255,255,255,0.8);">Work</a>
                  <a href="#" style="color:rgba(255,255,255,0.8);">Blog</a>
                </div>
                <button className="dnav-white-btn">Sign Up Free</button>
              </nav>
            </div>
            <p className="card-desc">A bold gradient navbar G�� eye-catching and modern for landing pages.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c8', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('c8', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="c8" className="code-block"><code>&lt;nav className="navbar-gradient"&gt;
        &lt;span className="brand"&gt;G�� UIverse&lt;/span&gt;
        &lt;div className="links"&gt;
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
      
        </div>{/* /navbar-grid */}
      
      </main>
    </>
  );
}
