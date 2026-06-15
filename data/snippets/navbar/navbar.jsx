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
              <p className="page-desc">A complete collection of navigation bar styles — from simple to glassmorphic, dark themed,
                search-enabled, and split layouts. Copy and use instantly.</p>
              <div className="page-meta">
                <span className="meta-badge"><i className="fa-solid fa-layer-group"></i> 13 Components</span>
                <span className="meta-badge"><i className="fa-solid fa-code"></i> Pure CSS</span>
                <span className="meta-badge"><i className="fa-solid fa-mobile-screen"></i> Responsive</span>
              </div>
            </div>
            <div className="page-hero-right">
              <div className="hero-nav-preview">
                <div className="mini-nav">
                  <span className="mini-brand">⬡ UIverse</span>
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
           TRANSPARENT HERO NAVBAR
      
      <div className="component-card" data-name="transparent hero navbar landing page" data-cat="glass">
      
        <div className="card-top">
      
          <span className="card-label">
            Transparent Hero Navbar
          </span>
      
          <span className="card-tag tag-trending">
            Trending
          </span>
      
        </div>
      
        <div className="nav-card-preview hero-nav-preview">
      
          <nav className="demo-hero-nav">
      
            <span className="hero-brand">
              ⬡ UIverse
            </span>
      
            <div className="hero-links">
      
              <a href="#">Home</a>
      
              <a href="#">Features</a>
      
              <a href="#">Pricing</a>
      
              <a href="#">Contact</a>
      
            </div>
      
            <button className="hero-nav-btn">
              Get Started
            </button>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A transparent landing-page navbar with glassmorphism and blur effects.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c18', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c18', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c18" className="code-block"><code>&lt;nav className="hero-navbar"&gt;
        &lt;span className="brand"&gt;⬡ UIverse&lt;/span&gt;
      
        &lt;div className="links"&gt;
          &lt;a href="#"&gt;Home&lt;/a&gt;
          &lt;a href="#"&gt;Features&lt;/a&gt;
        &lt;/div&gt;
      
        &lt;button&gt;Get Started&lt;/button&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
      
      <!-- =========================================================
           SAAS APP NAVBAR
      
      <div className="component-card" data-name="saas app navbar modern workspace ai" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            SaaS App Navbar
          </span>
      
          <span className="card-tag tag-popular">
            Popular
          </span>
      
        </div>
      
        <div className="nav-card-preview saas-preview">
      
          <nav className="demo-saas-nav">
      
            <div className="saas-left">
      
              <span className="saas-brand">
                ⚡ UIverse
              </span>
      
              <div className="saas-links">
      
                <a href="#">Products</a>
      
                <a href="#">Solutions</a>
      
                <a href="#">Enterprise</a>
      
                <a href="#">Resources</a>
      
              </div>
      
            </div>
      
            <div className="saas-right">
      
              <button className="saas-outline">
                Login
              </button>
      
              <button className="saas-primary">
                Start Free
              </button>
      
            </div>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A modern SaaS navbar with enterprise links and dual CTA actions.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c20', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c20', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c20" className="code-block"><code>&lt;nav className="saas-navbar"&gt;
        &lt;span className="brand"&gt;⚡ UIverse&lt;/span&gt;
      
        &lt;div className="links"&gt;
          &lt;a href="#"&gt;Products&lt;/a&gt;
          &lt;a href="#"&gt;Solutions&lt;/a&gt;
          &lt;a href="#"&gt;Enterprise&lt;/a&gt;
        &lt;/div&gt;
      
        &lt;div className="actions"&gt;
          &lt;button className="outline"&gt;Login&lt;/button&gt;
          &lt;button className="primary"&gt;Start Free&lt;/button&gt;
        &lt;/div&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
      
      <!-- =========================================================
           ECOMMERCE NAVBAR
      
      <div className="component-card" data-name="ecommerce navbar shopping cart store" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            E-Commerce Navbar
          </span>
      
          <span className="card-tag tag-trending">
            Trending
          </span>
      
        </div>
      
        <div className="nav-card-preview ecommerce-preview">
      
          <nav className="demo-ecommerce-nav">
      
            <span className="ecommerce-brand">
              🛍 ShopUI
            </span>
      
            <div className="ecommerce-search">
      
              <i className="fa-solid fa-magnifying-glass"></i>
      
              <input type="text" placeholder="Search products..." />
      
            </div>
      
            <div className="ecommerce-actions">
      
              <button>
                <i className="fa-regular fa-heart"></i>
              </button>
      
              <button>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
      
              <button>
                <i className="fa-regular fa-user"></i>
              </button>
      
            </div>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A premium shopping navbar with search and cart action buttons.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c21', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c21', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c21" className="code-block"><code>&lt;nav className="ecommerce-navbar"&gt;
        &lt;span className="brand"&gt;🛍 ShopUI&lt;/span&gt;
      
        &lt;div className="search"&gt;
          &lt;i className="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
          &lt;input type="text" placeholder="Search products..."&gt;
        &lt;/div&gt;
      
        &lt;div className="actions"&gt;
          &lt;i className="fa-regular fa-heart"&gt;&lt;/i&gt;
          &lt;i className="fa-solid fa-cart-shopping"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
      
      <!-- =========================================================
           DASHBOARD NAVBAR
      
      <div className="component-card" data-name="dashboard navbar admin analytics" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            Dashboard Navbar
          </span>
      
          <span className="card-tag tag-popular">
            Popular
          </span>
      
        </div>
      
        <div className="nav-card-preview dashboard-preview">
      
          <nav className="demo-dashboard-nav">
      
            <div className="dashboard-left">
      
              <span className="dashboard-brand">
                ⬡ Dashboard
              </span>
      
              <div className="dashboard-search">
      
                <i className="fa-solid fa-magnifying-glass"></i>
      
                <input type="text" placeholder="Search..." />
      
              </div>
      
            </div>
      
            <div className="dashboard-right">
      
              <button className="dashboard-icon">
                <i className="fa-regular fa-bell"></i>
              </button>
      
              <button className="dashboard-icon">
                <i className="fa-regular fa-envelope"></i>
              </button>
      
              <img
                src="https://i.pravatar.cc/100?img=15"
                alt="Avatar"
              />
      
            </div>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A professional admin dashboard navbar with search and notification actions.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c19', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c19', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c19" className="code-block"><code>&lt;nav className="dashboard-navbar"&gt;
        &lt;span className="brand"&gt;⬡ Dashboard&lt;/span&gt;
      
        &lt;input type="text" placeholder="Search..."&gt;
      
        &lt;div className="actions"&gt;
          &lt;i className="fa-regular fa-bell"&gt;&lt;/i&gt;
          &lt;i className="fa-regular fa-envelope"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/nav&gt;</code></pre>
      
      </div> 
          <!-- =========================================================
           MACOS DOCK NAVBAR
      
      <div className="component-card" data-name="macos dock navbar floating apple glass" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            MacOS Dock Navbar
          </span>
      
          <span className="card-tag tag-trending">
            Trending
          </span>
      
        </div>
      
        <div className="nav-card-preview dock-preview">
      
          <nav className="demo-dock-nav">
      
            <a href="#">
              <i className="fa-solid fa-house"></i>
            </a>
      
            <a href="#">
              <i className="fa-solid fa-compass"></i>
            </a>
      
            <a href="#">
              <i className="fa-solid fa-heart"></i>
            </a>
      
            <a href="#">
              <i className="fa-solid fa-message"></i>
            </a>
      
            <a href="#">
              <i className="fa-solid fa-user"></i>
            </a>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          An Apple-inspired floating dock navbar with magnify hover effects.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c16', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c16', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c16" className="code-block"><code>&lt;nav className="dock-navbar"&gt;
        &lt;a href="#"&gt;&lt;i className="fa-solid fa-house"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;i className="fa-solid fa-heart"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;i className="fa-solid fa-user"&gt;&lt;/i&gt;&lt;/a&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
      
      <!-- =========================================================
           MEGA MENU NAVBAR
      
      <div className="component-card" data-name="mega menu navbar enterprise dropdown" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            Mega Menu Navbar
          </span>
      
          <span className="card-tag tag-popular">
            Popular
          </span>
      
        </div>
      
        <div className="nav-card-preview mega-preview">
      
          <nav className="demo-mega-nav">
      
            <span className="mega-brand">
              ⬡ UIverse
            </span>
      
            <div className="mega-links">
      
              <div className="mega-item">
      
                <a href="#">
                  Components
                </a>
      
                <div className="mega-dropdown">
      
                  <div className="mega-column">
      
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
      
                  <div className="mega-column">
      
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
      
                  <div className="mega-column">
      
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
      
            <button className="mega-btn">
              Get Started
            </button>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A professional enterprise-style navbar with large mega dropdown menus.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c17', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c17', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c17" className="code-block"><code>&lt;nav className="mega-navbar"&gt;
        &lt;span className="brand"&gt;⬡ UIverse&lt;/span&gt;
      
        &lt;div className="mega-menu"&gt;
          &lt;a href="#"&gt;Components&lt;/a&gt;
      
          &lt;div className="dropdown"&gt;
            &lt;a href="#"&gt;Buttons&lt;/a&gt;
            &lt;a href="#"&gt;Cards&lt;/a&gt;
            &lt;a href="#"&gt;Inputs&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
          
          <!-- =========================================================
           PROFILE DROPDOWN NAVBAR
      
      <div className="component-card" data-name="profile dropdown navbar settings logout" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            Profile Dropdown Navbar
          </span>
      
          <span className="card-tag tag-popular">
            Popular
          </span>
      
        </div>
      
        <div className="nav-card-preview">
      
          <nav className="demo-profile-nav">
      
      <div className="component-card" data-name="transparent hero navbar landing page" data-cat="glass">
      
        <div className="card-top">
      
          <span className="card-label">
            Transparent Hero Navbar
          </span>
      
          <span className="card-tag tag-trending">
            Trending
          </span>
      
        </div>
      
        <div className="nav-card-preview hero-nav-preview">
      
          <nav className="demo-hero-nav">
      
            <span className="hero-brand">
              ⬡ UIverse
            </span>
      
            <div className="hero-links">
      
              <a href="#">Home</a>
      
              <a href="#">Features</a>
      
              <a href="#">Pricing</a>
      
              <a href="#">Contact</a>
      
            </div>
      
            <button className="hero-nav-btn">
              Get Started
            </button>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A transparent landing-page navbar with glassmorphism and blur effects.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c18', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c18', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c18" className="code-block"><code>&lt;nav className="hero-navbar"&gt;
        &lt;span className="brand"&gt;⬡ UIverse&lt;/span&gt;
      
        &lt;div className="profile-menu"&gt;
          &lt;img src="https://i.pravatar.cc/40?img=12" alt="Avatar"&gt;
      
          &lt;div className="dropdown-menu"&gt;
            &lt;a href="#"&gt;Profile&lt;/a&gt;
            &lt;a href="#"&gt;Settings&lt;/a&gt;
            &lt;a href="#"&gt;Logout&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      
        &lt;button&gt;Get Started&lt;/button&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
      
      <!-- =========================================================
           SAAS APP NAVBAR
      
      <div className="component-card" data-name="saas app navbar modern workspace ai" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            SaaS App Navbar
          </span>
      
          <span className="card-tag tag-popular">
            Popular
          </span>
      
        </div>
      
        <div className="nav-card-preview saas-preview">
      
          <nav className="demo-saas-nav">
      
            <div className="saas-left">
      
              <span className="saas-brand">
                ⚡ UIverse
              </span>
      
              <div className="saas-links">
      
                <a href="#">Products</a>
      
                <a href="#">Solutions</a>
      
                <a href="#">Enterprise</a>
      
                <a href="#">Resources</a>
      
              </div>
      
            </div>
      
            <div className="saas-right">
      
              <button className="saas-outline">
                Login
              </button>
      
              <button className="saas-primary">
                Start Free
              </button>
      
            </div>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A modern SaaS navbar with enterprise links and dual CTA actions.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c20', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c20', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c20" className="code-block"><code>&lt;nav className="saas-navbar"&gt;
        &lt;span className="brand"&gt;⚡ UIverse&lt;/span&gt;
      
        &lt;div className="links"&gt;
          &lt;a href="#"&gt;Products&lt;/a&gt;
          &lt;a href="#"&gt;Solutions&lt;/a&gt;
          &lt;a href="#"&gt;Enterprise&lt;/a&gt;
        &lt;/div&gt;
      
        &lt;div className="actions"&gt;
          &lt;button className="outline"&gt;Login&lt;/button&gt;
          &lt;button className="primary"&gt;Start Free&lt;/button&gt;
        &lt;/div&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
      
      <!-- =========================================================
           ECOMMERCE NAVBAR
      
      <div className="component-card" data-name="ecommerce navbar shopping cart store" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            E-Commerce Navbar
          </span>
      
          <span className="card-tag tag-trending">
            Trending
          </span>
      
        </div>
      
        <div className="nav-card-preview ecommerce-preview">
      
          <nav className="demo-ecommerce-nav">
      
            <span className="ecommerce-brand">
              🛍 ShopUI
            </span>
      
            <div className="ecommerce-search">
      
              <i className="fa-solid fa-magnifying-glass"></i>
      
              <input type="text" placeholder="Search products..." />
      
            </div>
      
            <div className="ecommerce-actions">
      
              <button>
                <i className="fa-regular fa-heart"></i>
              </button>
      
              <button>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
      
              <button>
                <i className="fa-regular fa-user"></i>
              </button>
      
            </div>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A premium shopping navbar with search and cart action buttons.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c21', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c21', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c21" className="code-block"><code>&lt;nav className="ecommerce-navbar"&gt;
        &lt;span className="brand"&gt;🛍 ShopUI&lt;/span&gt;
      
        &lt;div className="search"&gt;
          &lt;i className="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
          &lt;input type="text" placeholder="Search products..."&gt;
        &lt;/div&gt;
      
        &lt;div className="actions"&gt;
          &lt;i className="fa-regular fa-heart"&gt;&lt;/i&gt;
          &lt;i className="fa-solid fa-cart-shopping"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
      
      <!-- =========================================================
           DASHBOARD NAVBAR
      
      <div className="component-card" data-name="dashboard navbar admin analytics" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            Dashboard Navbar
          </span>
      
          <span className="card-tag tag-popular">
            Popular
          </span>
      
        </div>
      
        <div className="nav-card-preview dashboard-preview">
      
          <nav className="demo-dashboard-nav">
      
            <div className="dashboard-left">
      
              <span className="dashboard-brand">
                ⬡ Dashboard
              </span>
      
              <div className="dashboard-search">
      
                <i className="fa-solid fa-magnifying-glass"></i>
      
                <input type="text" placeholder="Search..." />
      
              </div>
      
            </div>
      
            <div className="dashboard-right">
      
              <button className="dashboard-icon">
                <i className="fa-regular fa-bell"></i>
              </button>
      
              <button className="dashboard-icon">
                <i className="fa-regular fa-envelope"></i>
              </button>
      
              <img
                src="https://i.pravatar.cc/100?img=15"
                alt="Avatar"
              />
      
            </div>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A professional admin dashboard navbar with search and notification actions.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c19', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c19', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c19" className="code-block"><code>&lt;nav className="dashboard-navbar"&gt;
        &lt;span className="brand"&gt;⬡ Dashboard&lt;/span&gt;
      
        &lt;input type="text" placeholder="Search..."&gt;
      
        &lt;div className="actions"&gt;
          &lt;i className="fa-regular fa-bell"&gt;&lt;/i&gt;
          &lt;i className="fa-regular fa-envelope"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/nav&gt;</code></pre>
      
      </div> 
          <!-- =========================================================
           MACOS DOCK NAVBAR
      
      <div className="component-card" data-name="macos dock navbar floating apple glass" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            MacOS Dock Navbar
          </span>
      
          <span className="card-tag tag-trending">
            Trending
          </span>
      
        </div>
      
        <div className="nav-card-preview dock-preview">
      
          <nav className="demo-dock-nav">
      
            <a href="#">
              <i className="fa-solid fa-house"></i>
            </a>
      
            <a href="#">
              <i className="fa-solid fa-compass"></i>
            </a>
      
            <a href="#">
              <i className="fa-solid fa-heart"></i>
            </a>
      
            <a href="#">
              <i className="fa-solid fa-message"></i>
            </a>
      
            <a href="#">
              <i className="fa-solid fa-user"></i>
            </a>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          An Apple-inspired floating dock navbar with magnify hover effects.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c16', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c16', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c16" className="code-block"><code>&lt;nav className="dock-navbar"&gt;
        &lt;a href="#"&gt;&lt;i className="fa-solid fa-house"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;i className="fa-solid fa-heart"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;i className="fa-solid fa-user"&gt;&lt;/i&gt;&lt;/a&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
      
      <!-- =========================================================
           MEGA MENU NAVBAR
      
      <div className="component-card" data-name="mega menu navbar enterprise dropdown" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            Mega Menu Navbar
          </span>
      
          <span className="card-tag tag-popular">
            Popular
          </span>
      
        </div>
      
        <div className="nav-card-preview mega-preview">
      
          <nav className="demo-mega-nav">
      
            <span className="mega-brand">
              ⬡ UIverse
            </span>
      
            <div className="mega-links">
      
              <div className="mega-item">
      
                <a href="#">
                  Components
                </a>
      
                <div className="mega-dropdown">
      
                  <div className="mega-column">
      
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
      
                  <div className="mega-column">
      
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
      
                  <div className="mega-column">
      
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
      
            <button className="mega-btn">
              Get Started
            </button>
      
          </nav>
      
        </div>
      
        <p className="card-desc">
          A professional enterprise-style navbar with large mega dropdown menus.
        </p>
      
        <div className="actions">
      
          <button className="action-btn view-btn" onclick="toggleCode('c17', this)">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn" onclick="copyCode('c17', this)">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
      
        </div>
      
        <pre id="c17" className="code-block"><code>&lt;nav className="mega-navbar"&gt;
        &lt;span className="brand"&gt;⬡ UIverse&lt;/span&gt;
      
        &lt;div className="mega-menu"&gt;
          &lt;a href="#"&gt;Components&lt;/a&gt;
      
          &lt;div className="dropdown"&gt;
            &lt;a href="#"&gt;Buttons&lt;/a&gt;
            &lt;a href="#"&gt;Cards&lt;/a&gt;
            &lt;a href="#"&gt;Inputs&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/nav&gt;</code></pre>
      
      </div>
          
          <!-- =========================================================
           PROFILE DROPDOWN NAVBAR
      
      <div className="component-card" data-name="profile dropdown navbar settings logout" data-cat="advanced">
      
        <div className="card-top">
      
          <span className="card-label">
            Profile Dropdown Navbar
          </span>
      
          <span className="card-tag tag-popular">
            Popular
          </span>
      
        </div>
      
        <div className="nav-card-preview">
      
          <nav className="demo-profile-nav">
      
          <!-- Simple Navbar */}
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
                <button className="action-btn view-btn" onclick="toggleCode('c1', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c1', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
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
                <button className="action-btn view-btn" onclick="toggleCode('c2', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c2', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
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
                <button className="action-btn view-btn" onclick="toggleCode('c3', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c3', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
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
                  <span className="dnav-brand" style="color:#fff;">⬡ UIverse</span>
                  <div className="dnav-links">
                    <a href="#" style="color:#aaa;">Home</a>
                    <a href="#" style="color:#aaa;">Docs</a>
                    <a href="#" style="color:#aaa;">Blog</a>
                  </div>
                  <button className="dnav-primary">Launch App</button>
                </nav>
              </div>
              <p className="card-desc">A sleek dark-themed navbar with an accent CTA button — great for SaaS and dev tools.</p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c4', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c4', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
              </div>
              <pre id="c4" className="code-block"><code>&lt;nav className="navbar-dark"&gt;
        &lt;span className="brand"&gt;⬡ UIverse&lt;/span&gt;
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
              <p className="card-desc">A frosted-glass navbar with backdrop blur — perfect for image or gradient hero sections.
              </p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c5', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c5', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
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
                  <a className="dnav-primary-link" href="#">Get Started →</a>
                </nav>
              </div>
              <p className="card-desc">A navbar with an integrated search input — ideal for documentation or component libraries.
              </p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c6', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c6', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
              </div>
              <pre id="c6" className="code-block"><code>&lt;nav className="navbar-search"&gt;
        &lt;span className="brand"&gt;UIverse&lt;/span&gt;
        &lt;div className="search-group"&gt;
          &lt;i className="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
          &lt;input type="text" placeholder="Search docs..."&gt;
        &lt;/div&gt;
        &lt;a href="#"&gt;Get Started →&lt;/a&gt;
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
              <p className="card-desc">A three-section navbar — brand left, main links center, utility links right.</p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c7', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c7', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
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
                  <span className="dnav-brand" style="color:#fff;">⬡ UIverse</span>
                  <div className="dnav-links">
                    <a href="#" style="color:rgba(255,255,255,0.8);">Home</a>
                    <a href="#" style="color:rgba(255,255,255,0.8);">Work</a>
                    <a href="#" style="color:rgba(255,255,255,0.8);">Blog</a>
                  </div>
                  <button className="dnav-white-btn">Sign Up Free</button>
                </nav>
              </div>
              <p className="card-desc">A bold gradient navbar — eye-catching and modern for landing pages.</p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c8', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c8', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
              </div>
              <pre id="c8" className="code-block"><code>&lt;nav className="navbar-gradient"&gt;
        &lt;span className="brand"&gt;⬡ UIverse&lt;/span&gt;
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
      
            {/* Floating Pill Navbar */}
            <div className="component-card" data-name="floating pill navbar modern" data-cat="advanced">
              <div className="card-top">
                <span className="card-label">Floating Pill Navbar</span>
                <span className="card-tag tag-new">New</span>
              </div>
              <div className="nav-card-preview">
                <nav className="demo-nav-floating">
                  <span className="dnav-brand">Orbit</span>
                  <div className="dnav-links">
                    <a href="#">Overview</a>
                    <a href="#">Pricing</a>
                  </div>
                  <button className="dnav-primary">Join</button>
                </nav>
              </div>
              <p className="card-desc">A compact floating navbar with rounded pill styling and elevated depth.</p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c9', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c9', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
              </div>
              <pre id="c9" className="code-block"><code>&lt;nav className="floating-navbar"&gt;...&lt;/nav&gt;</code></pre>
            </div>
      
            {/* Mega Menu Navbar */}
            <div className="component-card" data-name="mega menu navbar products" data-cat="advanced">
              <div className="card-top">
                <span className="card-label">Mega Menu Navbar</span>
                <span className="card-tag tag-popular">Popular</span>
              </div>
              <div className="nav-card-preview">
                <nav className="demo-nav-mega">
                  <span className="dnav-brand">Nova</span>
                  <div className="dnav-links">
                    <a href="#">Products ▾</a>
                    <a href="#">Solutions</a>
                    <a href="#">Docs</a>
                  </div>
                  <span className="mega-chip">12 tools</span>
                </nav>
              </div>
              <p className="card-desc">A product-focused navbar with menu affordance and compact metadata chip.</p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c10', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c10', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
              </div>
              <pre id="c10" className="code-block"><code>&lt;nav className="mega-navbar"&gt;...&lt;/nav&gt;</code></pre>
            </div>
      
            {/* Notification Navbar */}
            <div className="component-card" data-name="notification navbar alerts profile" data-cat="advanced">
              <div className="card-top">
                <span className="card-label">Notification Navbar</span>
                <span className="card-tag tag-trending">Trending</span>
              </div>
              <div className="nav-card-preview">
                <nav className="demo-nav-notify">
                  <span className="dnav-brand">Pulse</span>
                  <div className="notify-actions">
                    <span><i className="fa-regular fa-bell"></i><b>3</b></span>
                    <span className="avatar-dot">AJ</span>
                  </div>
                </nav>
              </div>
              <p className="card-desc">A utility navbar with alerts, profile access, and dashboard-friendly spacing.</p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c11', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c11', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
              </div>
              <pre id="c11" className="code-block"><code>&lt;nav className="notification-navbar"&gt;...&lt;/nav&gt;</code></pre>
            </div>
      
            {/* Ecommerce Navbar */}
            <div className="component-card" data-name="ecommerce navbar store cart search" data-cat="advanced">
              <div className="card-top">
                <span className="card-label">E-Commerce Navbar</span>
                <span className="card-tag tag-new">New</span>
              </div>
              <div className="nav-card-preview">
                <nav className="demo-nav-store">
                  <span className="dnav-brand">ShopUI</span>
                  <span className="store-search">Search products</span>
                  <span className="cart-pill">Cart 2</span>
                </nav>
              </div>
              <p className="card-desc">A storefront navbar with fast search treatment and visible cart state.</p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c12', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c12', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
              </div>
              <pre id="c12" className="code-block"><code>&lt;nav className="store-navbar"&gt;...&lt;/nav&gt;</code></pre>
            </div>
      
            {/* Dock Navbar */}
            <div className="component-card" data-name="dock navbar icon mobile glass" data-cat="glass">
              <div className="card-top">
                <span className="card-label">Dock Navbar</span>
                <span className="card-tag tag-trending">Trending</span>
              </div>
              <div className="nav-card-preview glass-preview">
                <nav className="demo-nav-dock">
                  <a href="#"><i className="fa-solid fa-house"></i></a>
                  <a href="#"><i className="fa-solid fa-compass"></i></a>
                  <a href="#"><i className="fa-solid fa-plus"></i></a>
                  <a href="#"><i className="fa-solid fa-user"></i></a>
                </nav>
              </div>
              <p className="card-desc">A glassy icon dock navbar suited to mobile products and compact apps.</p>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('c13', this)"><i className="fa-solid fa-code"></i> View
                  Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('c13', this)"><i className="fa-solid fa-copy"></i>
                  Copy</button>
              </div>
              <pre id="c13" className="code-block"><code>&lt;nav className="dock-navbar"&gt;...&lt;/nav&gt;</code></pre>
            </div>
      
          </div>{/* /navbar-grid */}
      
        </main>
    </>
  );
}
