<template>
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
      <p class="page-desc">A complete collection of navigation bar styles — from simple to glassmorphic, dark themed, search-enabled, and split layouts. Copy and use instantly.</p>
      <div class="page-meta">
        <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 8 Components</span>
        <span class="meta-badge"><i class="fa-solid fa-code"></i> Pure CSS</span>
        <span class="meta-badge"><i class="fa-solid fa-mobile-screen"></i> Responsive</span>
      </div>
    </div>
    <div class="page-hero-right">
      <div class="hero-nav-preview">
        <div class="mini-nav">
          <span class="mini-brand">⬡ UIverse</span>
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
   <!-- =========================================================
     TRANSPARENT HERO NAVBAR

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

      <span class="hero-brand">
        ⬡ UIverse
      </span>

      <div class="hero-links">

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

  <pre id="c18" class="code-block"><code>&lt;nav class="hero-navbar"&gt;
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;

  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;Features&lt;/a&gt;
  &lt;/div&gt;

  &lt;button&gt;Get Started&lt;/button&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     SAAS APP NAVBAR

<div class="component-card" data-name="saas app navbar modern workspace ai" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      SaaS App Navbar
    </span>

    <span class="card-tag tag-popular">
      Popular
    </span>

  </div>

  <div class="nav-card-preview saas-preview">

    <nav class="demo-saas-nav">

      <div class="saas-left">

        <span class="saas-brand">
          ⚡ UIverse
        </span>

        <div class="saas-links">

          <a href="#">Products</a>

          <a href="#">Solutions</a>

          <a href="#">Enterprise</a>

          <a href="#">Resources</a>

        </div>

      </div>

      <div class="saas-right">

        <button class="saas-outline">
          Login
        </button>

        <button class="saas-primary">
          Start Free
        </button>

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A modern SaaS navbar with enterprise links and dual CTA actions.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c20', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c20', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c20" class="code-block"><code>&lt;nav class="saas-navbar"&gt;
  &lt;span class="brand"&gt;⚡ UIverse&lt;/span&gt;

  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Products&lt;/a&gt;
    &lt;a href="#"&gt;Solutions&lt;/a&gt;
    &lt;a href="#"&gt;Enterprise&lt;/a&gt;
  &lt;/div&gt;

  &lt;div class="actions"&gt;
    &lt;button class="outline"&gt;Login&lt;/button&gt;
    &lt;button class="primary"&gt;Start Free&lt;/button&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     ECOMMERCE NAVBAR

<div class="component-card" data-name="ecommerce navbar shopping cart store" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      E-Commerce Navbar
    </span>

    <span class="card-tag tag-trending">
      Trending
    </span>

  </div>

  <div class="nav-card-preview ecommerce-preview">

    <nav class="demo-ecommerce-nav">

      <span class="ecommerce-brand">
        🛍 ShopUI
      </span>

      <div class="ecommerce-search">

        <i class="fa-solid fa-magnifying-glass"></i>

        <input type="text" placeholder="Search products..." />

      </div>

      <div class="ecommerce-actions">

        <button>
          <i class="fa-regular fa-heart"></i>
        </button>

        <button>
          <i class="fa-solid fa-cart-shopping"></i>
        </button>

        <button>
          <i class="fa-regular fa-user"></i>
        </button>

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A premium shopping navbar with search and cart action buttons.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c21', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c21', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c21" class="code-block"><code>&lt;nav class="ecommerce-navbar"&gt;
  &lt;span class="brand"&gt;🛍 ShopUI&lt;/span&gt;

  &lt;div class="search"&gt;
    &lt;i class="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
    &lt;input type="text" placeholder="Search products..."&gt;
  &lt;/div&gt;

  &lt;div class="actions"&gt;
    &lt;i class="fa-regular fa-heart"&gt;&lt;/i&gt;
    &lt;i class="fa-solid fa-cart-shopping"&gt;&lt;/i&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     DASHBOARD NAVBAR

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

      <span class="hero-brand">
        ⬡ UIverse
      </span>

      <div class="hero-links">

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

  <pre id="c18" class="code-block"><code>&lt;nav class="hero-navbar"&gt;
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;

  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;Features&lt;/a&gt;
  &lt;/div&gt;

  &lt;button&gt;Get Started&lt;/button&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     SAAS APP NAVBAR

<div class="component-card" data-name="saas app navbar modern workspace ai" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      SaaS App Navbar
    </span>

    <span class="card-tag tag-popular">
      Popular
    </span>

  </div>

  <div class="nav-card-preview saas-preview">

    <nav class="demo-saas-nav">

      <div class="saas-left">

        <span class="saas-brand">
          ⚡ UIverse
        </span>

        <div class="saas-links">

          <a href="#">Products</a>

          <a href="#">Solutions</a>

          <a href="#">Enterprise</a>

          <a href="#">Resources</a>

        </div>

      </div>

      <div class="saas-right">

        <button class="saas-outline">
          Login
        </button>

        <button class="saas-primary">
          Start Free
        </button>

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A modern SaaS navbar with enterprise links and dual CTA actions.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c20', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c20', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c20" class="code-block"><code>&lt;nav class="saas-navbar"&gt;
  &lt;span class="brand"&gt;⚡ UIverse&lt;/span&gt;

  &lt;div class="links"&gt;
    &lt;a href="#"&gt;Products&lt;/a&gt;
    &lt;a href="#"&gt;Solutions&lt;/a&gt;
    &lt;a href="#"&gt;Enterprise&lt;/a&gt;
  &lt;/div&gt;

  &lt;div class="actions"&gt;
    &lt;button class="outline"&gt;Login&lt;/button&gt;
    &lt;button class="primary"&gt;Start Free&lt;/button&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     ECOMMERCE NAVBAR

<div class="component-card" data-name="ecommerce navbar shopping cart store" data-cat="advanced">

  <div class="card-top">

    <span class="card-label">
      E-Commerce Navbar
    </span>

    <span class="card-tag tag-trending">
      Trending
    </span>

  </div>

  <div class="nav-card-preview ecommerce-preview">

    <nav class="demo-ecommerce-nav">

      <span class="ecommerce-brand">
        🛍 ShopUI
      </span>

      <div class="ecommerce-search">

        <i class="fa-solid fa-magnifying-glass"></i>

        <input type="text" placeholder="Search products..." />

      </div>

      <div class="ecommerce-actions">

        <button>
          <i class="fa-regular fa-heart"></i>
        </button>

        <button>
          <i class="fa-solid fa-cart-shopping"></i>
        </button>

        <button>
          <i class="fa-regular fa-user"></i>
        </button>

      </div>

    </nav>

  </div>

  <p class="card-desc">
    A premium shopping navbar with search and cart action buttons.
  </p>

  <div class="actions">

    <button class="action-btn view-btn" onclick="toggleCode('c21', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c21', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>

  </div>

  <pre id="c21" class="code-block"><code>&lt;nav class="ecommerce-navbar"&gt;
  &lt;span class="brand"&gt;🛍 ShopUI&lt;/span&gt;

  &lt;div class="search"&gt;
    &lt;i class="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
    &lt;input type="text" placeholder="Search products..."&gt;
  &lt;/div&gt;

  &lt;div class="actions"&gt;
    &lt;i class="fa-regular fa-heart"&gt;&lt;/i&gt;
    &lt;i class="fa-solid fa-cart-shopping"&gt;&lt;/i&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>

</div>

<!-- =========================================================
     DASHBOARD NAVBAR

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
          <span class="dnav-brand" style="color:#fff;">⬡ UIverse</span>
          <div class="dnav-links">
            <a href="#" style="color:#aaa;">Home</a>
            <a href="#" style="color:#aaa;">Docs</a>
            <a href="#" style="color:#aaa;">Blog</a>
          </div>
          <button class="dnav-primary">Launch App</button>
        </nav>
      </div>
      <p class="card-desc">A sleek dark-themed navbar with an accent CTA button — great for SaaS and dev tools.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c4', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c4', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c4" class="code-block"><code>&lt;nav class="navbar-dark"&gt;
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;
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
      <p class="card-desc">A frosted-glass navbar with backdrop blur — perfect for image or gradient hero sections.</p>
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
          <a class="dnav-primary-link" href="#">Get Started →</a>
        </nav>
      </div>
      <p class="card-desc">A navbar with an integrated search input — ideal for documentation or component libraries.</p>
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
      <p class="card-desc">A three-section navbar — brand left, main links center, utility links right.</p>
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
          <span class="dnav-brand" style="color:#fff;">⬡ UIverse</span>
          <div class="dnav-links">
            <a href="#" style="color:rgba(255,255,255,0.8);">Home</a>
            <a href="#" style="color:rgba(255,255,255,0.8);">Work</a>
            <a href="#" style="color:rgba(255,255,255,0.8);">Blog</a>
          </div>
          <button class="dnav-white-btn">Sign Up Free</button>
        </nav>
      </div>
      <p class="card-desc">A bold gradient navbar — eye-catching and modern for landing pages.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c8', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('c8', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="c8" class="code-block"><code>&lt;nav class="navbar-gradient"&gt;
  &lt;span class="brand"&gt;⬡ UIverse&lt;/span&gt;
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
</template>

<script>
export default { name: 'Navbar' }
</script>
