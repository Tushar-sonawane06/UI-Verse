import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Menu and navigation dropdown components

### Info & Metadata
- **Category**: Navigation
- **Tags**: <code>menu</code>, <code>navigation</code>, <code>dropdown</code>, <code>list</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home">
    <section class="hero-section">
      <div class="hero-content">
        <span class="hero-badge">Navigation Components</span>
        <h1>Modern <span>Menus</span></h1>
        <p>Explore premium menu components including dropdowns, sidebars, glass navbars, dock menus, and command palettes crafted for modern interfaces.</p>
        <div class="hero-actions">
          <button class="primary-btn">Browse Menus</button>
          <button class="outline-btn">View Docs</button>
        </div>
      </div>
      <div class="hero-preview">
        <div class="floating-menu">
          <a href="#"><i class="fa-solid fa-house"></i> Home</a>
          <a href="#"><i class="fa-solid fa-layer-group"></i> Components</a>
          <a href="#"><i class="fa-solid fa-gear"></i> Settings</a>
        </div>
      </div>
    </section>

    <article class="menu-card">
  <div class="card-top">
    <span class="card-label">Fullscreen Overlay</span>
    <span class="card-tag pink">Navigation</span>
  </div>

  <div class="card-preview dark">
    <div class="overlay-demo">
      <button class="overlay-trigger">
        <i class="fa-solid fa-bars"></i>
      </button>

      <div class="overlay-menu">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>

  <p>Fullscreen navigation with immersive transitions.</p>
</article>
<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Breadcrumbs</span>
    <span class="card-tag yellow">Docs</span>
  </div>

  <div class="card-preview">
    <nav class="breadcrumbs">
      <a href="#">Home</a>
      <span>/</span>
      <a href="#">Components</a>
      <span>/</span>
      <span>Menus</span>
    </nav>
  </div>

  <p>Shows the current navigation path.</p>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Animated Tabs</span>
    <span class="card-tag purple">Tabs</span>
  </div>

  <div class="card-preview">
    <div class="animated-tabs">
      <button class="active">Overview</button>
      <button>Analytics</button>
      <button>Settings</button>
      <div class="tab-indicator"></div>
    </div>
  </div>

  <p>Interactive tab menu with sliding indicator.</p>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Quick Actions</span>
    <span class="card-tag pink">Bento</span>
  </div>

  <div class="card-preview">
    <div class="bento-menu">
      <button><i class="fa-solid fa-plus"></i> New</button>
      <button><i class="fa-solid fa-file"></i> Files</button>
      <button><i class="fa-solid fa-users"></i> Team</button>
      <button><i class="fa-solid fa-gear"></i> Settings</button>
    </div>
  </div>

  <p>Dashboard quick-launch menu using bento layout.</p>
</article>
    <!-- ================= MODERN MEGA MENU ================= -->
<section class="menu-showcase">

  <!-- SECTION TITLE -->
  <div class="section-heading">
    <span class="section-badge">
      <i class="fa-solid fa-bars-staggered"></i>
      Navigation Systems
    </span>

    <h2>Professional Modern Menu Components</h2>

    <p>
      Elegant navigation layouts with premium interactions,
      glassmorphism effects, animated dropdowns, and dashboard-ready menus.
    </p>
  </div>

  <!-- ================= TOP NAVIGATION ================= -->
  <div class="menu-grid">

    <!-- COMPONENT 1 -->
    <article class="menu-card">
      <div class="menu-card-header">
        <div>
          <span class="menu-label">Glassmorphism</span>
          <h3>Premium Navbar</h3>
        </div>

        <button class="live-btn">Live</button>
      </div>

      <nav class="premium-navbar">
        <div class="nav-logo">
          <span>⬡</span>
          UIverse
        </div>

        <ul class="nav-links">
          <li><a href="#">Home</a></li>

          <li class="dropdown">
            <a href="#">
              Components
              <i class="fa-solid fa-chevron-down"></i>
            </a>

            <div class="dropdown-menu">
              <a href="#">
                <i class="fa-solid fa-layer-group"></i>
                Cards
              </a>

              <a href="#">
                <i class="fa-solid fa-toggle-on"></i>
                Toggles
              </a>

              <a href="#">
                <i class="fa-solid fa-table"></i>
                Tables
              </a>

              <a href="#">
                <i class="fa-solid fa-chart-simple"></i>
                Charts
              </a>
            </div>
          </li>

          <li><a href="#">Pricing</a></li>
          <li><a href="#">Docs</a></li>
        </ul>

        <div class="nav-actions-modern">
          <button class="ghost-btn">Login</button>
          <button class="gradient-btn">Get Started</button>
        </div>
      </nav>
    </article>

    <article class="menu-card">
  <div class="card-top">
    <span class="card-label">Mega Menu</span>
    <span class="card-tag blue">Enterprise</span>
  </div>

  <div class="card-preview">
    <div class="mega-menu-demo">
      <button class="mega-btn">
        Products <i class="fa-solid fa-chevron-down"></i>
      </button>

      <div class="mega-panel">
        <div>
          <h4>UI Components</h4>
          <a href="#">Buttons</a>
          <a href="#">Cards</a>
          <a href="#">Forms</a>
        </div>

        <div>
          <h4>Templates</h4>
          <a href="#">Dashboard</a>
          <a href="#">Landing Page</a>
          <a href="#">Portfolio</a>
        </div>

        <div>
          <h4>Resources</h4>
          <a href="#">Docs</a>
          <a href="#">Blog</a>
          <a href="#">Support</a>
        </div>
      </div>
    </div>
  </div>

  <p>Large enterprise navigation with categorized content.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>


<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Accordion Menu</span>
    <span class="card-tag purple">Expandable</span>
  </div>

  <div class="card-preview dark">
    <div class="accordion-menu">
      <details open>
        <summary>Dashboard</summary>
        <a href="#">Analytics</a>
        <a href="#">Reports</a>
      </details>

      <details>
        <summary>Users</summary>
        <a href="#">Customers</a>
        <a href="#">Teams</a>
      </details>
    </div>
  </div>

  <p>Expandable navigation groups for dashboards.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Context Menu</span>
    <span class="card-tag yellow">Desktop</span>
  </div>

  <div class="card-preview">
    <div class="context-demo">
      <button class="context-trigger">
        Right Click Menu
      </button>

      <div class="context-menu">
        <a href="#"><i class="fa-regular fa-copy"></i> Copy</a>
        <a href="#"><i class="fa-solid fa-pen"></i> Rename</a>
        <a href="#"><i class="fa-solid fa-trash"></i> Delete</a>
      </div>
    </div>
  </div>

  <p>Desktop-style contextual action menu.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>


<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Bottom Nav</span>
    <span class="card-tag pink">Mobile</span>
  </div>

  <div class="card-preview dark">
    <div class="bottom-nav">
      <a href="#"><i class="fa-solid fa-house"></i></a>
      <a href="#"><i class="fa-solid fa-compass"></i></a>
      <a href="#" class="active"><i class="fa-solid fa-plus"></i></a>
      <a href="#"><i class="fa-solid fa-heart"></i></a>
      <a href="#"><i class="fa-solid fa-user"></i></a>
    </div>
  </div>

  <p>Instagram and TikTok inspired mobile navigation.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Bottom Nav</span>
    <span class="card-tag pink">Mobile</span>
  </div>

  <div class="card-preview dark">
    <div class="bottom-nav">
      <a href="#"><i class="fa-solid fa-house"></i></a>
      <a href="#"><i class="fa-solid fa-compass"></i></a>
      <a href="#" class="active"><i class="fa-solid fa-plus"></i></a>
      <a href="#"><i class="fa-solid fa-heart"></i></a>
      <a href="#"><i class="fa-solid fa-user"></i></a>
    </div>
  </div>

  <p>Instagram and TikTok inspired mobile navigation.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Radial Menu</span>
    <span class="card-tag purple">Creative</span>
  </div>

  <div class="card-preview">
    <div class="radial-menu">
      <button class="radial-center">
        <i class="fa-solid fa-plus"></i>
      </button>

      <span><i class="fa-solid fa-camera"></i></span>
      <span><i class="fa-solid fa-image"></i></span>
      <span><i class="fa-solid fa-music"></i></span>
      <span><i class="fa-solid fa-video"></i></span>
    </div>
  </div>

  <p>Animated circular menu for creative applications.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Breadcrumb</span>
    <span class="card-tag blue">Navigation</span>
  </div>

  <div class="card-preview">
    <div class="breadcrumb-demo">
      <a href="#">Home</a>
      <i class="fa-solid fa-angle-right"></i>
      <a href="#">Components</a>
      <i class="fa-solid fa-angle-right"></i>
      <span>Menus</span>
    </div>
  </div>

  <p>Hierarchical navigation for large websites.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Tab Navigation</span>
    <span class="card-tag pink">Tabs</span>
  </div>

  <div class="card-preview">
    <div class="tab-menu">
      <button class="active">Overview</button>
      <button>Analytics</button>
      <button>Reports</button>
      <button>Settings</button>
    </div>
  </div>

  <p>Modern segmented navigation for dashboards.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Mac Dock</span>
    <span class="card-tag yellow">Animated</span>
  </div>

  <div class="card-preview dark">
    <div class="mac-dock">
      <i class="fa-solid fa-folder"></i>
      <i class="fa-solid fa-envelope"></i>
      <i class="fa-solid fa-music"></i>
      <i class="fa-solid fa-video"></i>
      <i class="fa-solid fa-gear"></i>
    </div>
  </div>

  <p>macOS inspired hover-magnification dock navigation.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Music Sidebar</span>
    <span class="card-tag green">Media</span>
  </div>

  <div class="card-preview dark">
    <div class="spotify-sidebar">
      <a href="#"><i class="fa-solid fa-house"></i> Home</a>
      <a href="#"><i class="fa-solid fa-magnifying-glass"></i> Search</a>
      <a href="#"><i class="fa-solid fa-book"></i> Library</a>
    </div>
  </div>

  <p>Streaming app inspired sidebar navigation.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">AI Palette</span>
    <span class="card-tag purple">AI</span>
  </div>

  <div class="card-preview">
    <div class="ai-command">
      <div class="ai-input">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        Ask AI anything...
      </div>

      <div class="ai-suggestions">
        <span>Generate UI</span>
        <span>Create Navbar</span>
        <span>Build Dashboard</span>
      </div>
    </div>
  </div>

  <p>Modern AI-powered command center inspired by ChatGPT and Cursor.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

    <!-- COMPONENT 2 -->
    <article class="menu-card">
      <div class="menu-card-header">
        <div>
          <span class="menu-label">Dashboard</span>
          <h3>Admin Sidebar</h3>
        </div>
      </div>

      <div class="dashboard-sidebar">

        <div class="dashboard-brand">
          <span class="brand-circle"></span>
          NeoAdmin
        </div>

        <ul class="dashboard-menu">
          <li class="active">
            <i class="fa-solid fa-house"></i>
            Dashboard
          </li>

          <li>
            <i class="fa-solid fa-chart-line"></i>
            Analytics
          </li>

          <li>
            <i class="fa-solid fa-user-group"></i>
            Customers
          </li>

          <li>
            <i class="fa-solid fa-credit-card"></i>
            Transactions
          </li>

          <li>
            <i class="fa-solid fa-gear"></i>
            Settings
          </li>
        </ul>

      </div>
    </article>

    <!-- COMPONENT 3 -->
    <article class="menu-card">
      <div class="menu-card-header">
        <div>
          <span class="menu-label">Mobile</span>
          <h3>Floating Dock Menu</h3>
        </div>
      </div>

      <div class="dock-wrapper">

        <div class="floating-dock">

          <button>
            <i class="fa-solid fa-house"></i>
          </button>

          <button>
            <i class="fa-solid fa-heart"></i>
          </button>

          <button class="dock-active">
            <i class="fa-solid fa-plus"></i>
          </button>

          <button>
            <i class="fa-solid fa-message"></i>
          </button>

          <button>
            <i class="fa-solid fa-user"></i>
          </button>

        </div>

      </div>
    </article>

    <!-- COMPONENT 4 -->
    <article class="menu-card">
      <div class="menu-card-header">
        <div>
          <span class="menu-label">Minimal</span>
          <h3>Command Menu</h3>
        </div>
      </div>

      <div class="command-menu">

        <div class="command-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search commands..." />
        </div>

        <div class="command-items">

          <div class="command-item">
            <div>
              <i class="fa-solid fa-file"></i>
              New File
            </div>
            <kbd>⌘N</kbd>
          </div>

          <div class="command-item">
            <div>
              <i class="fa-solid fa-folder-open"></i>
              Open Project
            </div>
            <kbd>⌘O</kbd>
          </div>

          <div class="command-item">
            <div>
              <i class="fa-solid fa-gear"></i>
              Preferences
            </div>
            <kbd>⌘,</kbd>
          </div>

        </div>

      </div>
    </article>

  </div>
</section>

    <section class="menu-grid">
      <article class="menu-card">
        <div class="card-top"><span class="card-label">Dropdown Menu</span><span class="card-tag purple">Dropdown</span></div>
        <div class="card-preview">
          <div class="dropdown-demo">
            <button class="dropdown-btn">Options <i class="fa-solid fa-angle-down"></i></button>
            <div class="dropdown-content"><a href="#">Profile</a><a href="#">Settings</a><a href="#">Logout</a></div>
          </div>
        </div>
        <p>Compact action menu for profile, settings, and account flows.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Mini Sidebar</span><span class="card-tag blue">Sidebar</span></div>
        <div class="card-preview dark">
          <div class="mini-sidebar">
            <a href="#"><i class="fa-solid fa-house"></i></a>
            <a href="#"><i class="fa-solid fa-box"></i></a>
            <a href="#"><i class="fa-solid fa-envelope"></i></a>
            <a href="#"><i class="fa-solid fa-gear"></i></a>
          </div>
        </div>
        <p>Minimal vertical navigation for compact dashboards.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Glass Navbar</span><span class="card-tag pink">Navigation</span></div>
        <div class="card-preview">
          <div class="glass-navbar"><strong>UIverse</strong><div><a href="#">Home</a><a href="#">Docs</a><a href="#">Pricing</a></div></div>
        </div>
        <p>Frosted horizontal navigation with clean spacing and depth.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Hamburger Menu</span><span class="card-tag yellow">Mobile</span></div>
        <div class="card-preview dark"><div class="hamburger"><span></span><span></span><span></span></div></div>
        <p>Simple mobile trigger with strong silhouette and rhythm.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Dock Menu</span><span class="card-tag purple">Dock</span></div>
        <div class="card-preview"><div class="dock-menu"><i class="fa-solid fa-house"></i><i class="fa-solid fa-bell"></i><i class="fa-solid fa-user"></i></div></div>
        <p>Floating icon dock for fast-access product actions.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Command Menu</span><span class="card-tag blue">Search</span></div>
        <div class="card-preview dark"><div class="command-menu"><i class="fa-solid fa-magnifying-glass"></i><input placeholder="Search commands..." /></div></div>
        <p>Keyboard-first command surface for power users.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>
      <article class="menu-card">
        <div class="card-top"><span class="card-label">Floating Bubble Menu</span><span class="card-tag purple">Interactive</span></div>
        <div class="card-preview">
          <div class="bubble-menu-container">
            <button class="bubble-trigger"><i class="fa-solid fa-plus"></i></button>
            <div class="bubble-items">
              <a href="#" class="bubble-item"><i class="fa-solid fa-pen"></i></a>
              <a href="#" class="bubble-item"><i class="fa-solid fa-image"></i></a>
              <a href="#" class="bubble-item"><i class="fa-solid fa-link"></i></a>
            </div>
          </div>
        </div>
        <p>A floating action button that expands into a bubble menu on hover.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Searchable Command</span><span class="card-tag blue">Keyboard</span></div>
        <div class="card-preview dark">
          <button class="open-command-btn">Open Command Menu <kbd>⌘K</kbd></button>
          
          <div class="command-palette-overlay" id="cmdPalette">
            <div class="command-palette-modal">
              <div class="cmd-search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="cmdInput" placeholder="Type a command or search..." autofocus />
              </div>
              <div class="cmd-results">
                <div class="cmd-group">Suggestions</div>
                <a href="#" class="cmd-item"><i class="fa-regular fa-file"></i> Create New File</a>
                <a href="#" class="cmd-item"><i class="fa-solid fa-user-plus"></i> Invite Team Member</a>
                <a href="#" class="cmd-item"><i class="fa-solid fa-gear"></i> Open Settings</a>
              </div>
            </div>
          </div>
        </div>
        <p>Interactive command palette. Press CMD+K to trigger, searchable with keyboard navigation.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Notification Dropdown</span><span class="card-tag yellow">Alerts</span></div>
        <div class="card-preview">
          <div class="notification-dropdown">
            <button class="notify-btn">
              <i class="fa-regular fa-bell"></i>
              <span class="notify-badge">3</span>
            </button>
            <div class="notify-content">
              <div class="notify-header">Notifications <span>Mark all read</span></div>
              <div class="notify-list">
                <a href="#" class="notify-item unread">
                  <div class="notify-icon success"><i class="fa-solid fa-check"></i></div>
                  <div class="notify-text"><strong>Deploy Successful</strong><p>Your app is now live.</p></div>
                </a>
                <a href="#" class="notify-item">
                  <div class="notify-icon warning"><i class="fa-solid fa-triangle-exclamation"></i></div>
                  <div class="notify-text"><strong>Storage Warning</strong><p>You are at 90% capacity.</p></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>Feature-rich notification center with unread states and custom icons.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Profile Avatar Menu</span><span class="card-tag pink">Account</span></div>
        <div class="card-preview">
          <div class="profile-dropdown">
            <button class="profile-btn">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
            </button>
            <div class="profile-content">
              <div class="profile-header">
                <strong>Felix Dev</strong>
                <p>felix@uiverse.com</p>
              </div>
              <hr />
              <a href="#"><i class="fa-regular fa-user"></i> My Profile</a>
              <a href="#"><i class="fa-solid fa-sliders"></i> Preferences</a>
              <hr />
              <a href="#" class="logout-link"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a>
            </div>
          </div>
        </div>
        <p>Detailed profile menu with user info, actions, and custom styling.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Radial Navigation</span><span class="card-tag purple">Radial</span></div>
        <div class="card-preview">
          <div class="radial-menu">
            <button class="radial-trigger"><i class="fa-solid fa-compass"></i></button>
            <div class="radial-items">
              <a href="#" class="radial-item"><i class="fa-solid fa-house"></i></a>
              <a href="#" class="radial-item"><i class="fa-solid fa-user"></i></a>
              <a href="#" class="radial-item"><i class="fa-solid fa-envelope"></i></a>
              <a href="#" class="radial-item"><i class="fa-solid fa-gear"></i></a>
              <a href="#" class="radial-item"><i class="fa-solid fa-bell"></i></a>
            </div>
          </div>
        </div>
        <p>A circular menu that expands options outwards radially on trigger hover.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Segmented Glider</span><span class="card-tag blue">Navigation</span></div>
        <div class="card-preview">
          <div class="segmented-nav">
            <input type="radio" name="seg-tab" id="seg1" checked />
            <input type="radio" name="seg-tab" id="seg2" />
            <input type="radio" name="seg-tab" id="seg3" />
            <label for="seg1"><i class="fa-solid fa-chart-simple"></i> Analytics</label>
            <label for="seg2"><i class="fa-solid fa-wallet"></i> Wallet</label>
            <label for="seg3"><i class="fa-solid fa-gear"></i> Setup</label>
            <div class="seg-glider"></div>
          </div>
        </div>
        <p>A CSS-only horizontal menu featuring a smooth capsule slider indicator.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Columns Mega Menu</span><span class="card-tag pink">Dropdown</span></div>
        <div class="card-preview">
          <div class="mega-menu-container">
            <button class="mega-trigger">Products <i class="fa-solid fa-chevron-down"></i></button>
            <div class="mega-dropdown">
              <div class="mega-grid-inner">
                <div class="mega-col">
                  <h4>Services</h4>
                  <a href="#" class="mega-link">
                    <div class="mega-icon pink"><i class="fa-solid fa-cloud"></i></div>
                    <div>
                      <strong>Cloud Hosting</strong>
                      <span>Scalable VPS solutions</span>
                    </div>
                  </a>
                  <a href="#" class="mega-link">
                    <div class="mega-icon blue"><i class="fa-solid fa-shield-halved"></i></div>
                    <div>
                      <strong>Security</strong>
                      <span>Enterprise firewall protection</span>
                    </div>
                  </a>
                </div>
                <div class="mega-col">
                  <h4>Developers</h4>
                  <a href="#" class="mega-link">
                    <div class="mega-icon purple"><i class="fa-solid fa-code"></i></div>
                    <div>
                      <strong>API Docs</strong>
                      <span>Full references & specs</span>
                    </div>
                  </a>
                  <a href="#" class="mega-link">
                    <div class="mega-icon yellow"><i class="fa-solid fa-terminal"></i></div>
                    <div>
                      <strong>CLI Tool</strong>
                      <span>Command-line automation</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>A multi-column hovering dropdown menu displaying detailed option descriptions.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Cascading Context</span><span class="card-tag yellow">Submenu</span></div>
        <div class="card-preview">
          <div class="context-menu-container">
            <div class="context-menu">
              <a href="#" class="context-item"><span class="context-item-text"><i class="fa-regular fa-copy"></i> Copy</span> <span class="context-shortcut">Ctrl+C</span></a>
              <a href="#" class="context-item"><span class="context-item-text"><i class="fa-regular fa-file-lines"></i> Paste</span> <span class="context-shortcut">Ctrl+V</span></a>
              <hr class="context-divider" />
              <div class="context-item context-submenu-trigger">
                <span class="context-item-text"><i class="fa-solid fa-share-nodes"></i> Share</span>
                <i class="fa-solid fa-chevron-right context-arrow"></i>
                <div class="context-submenu">
                  <a href="#" class="context-item"><span class="context-item-text"><i class="fa-brands fa-twitter"></i> Twitter</span></a>
                  <a href="#" class="context-item"><span class="context-item-text"><i class="fa-brands fa-discord"></i> Discord</span></a>
                  <a href="#" class="context-item"><span class="context-item-text"><i class="fa-regular fa-envelope"></i> Email</span></a>
                </div>
              </div>
              <a href="#" class="context-item delete-item"><span class="context-item-text"><i class="fa-regular fa-trash-can"></i> Delete</span> <span class="context-shortcut">Del</span></a>
            </div>
          </div>
        </div>
        <p>A desktop-grade cascading context menu with nested hovering slide-out options.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Vertical Expanded Dock</span><span class="card-tag blue">Dock</span></div>
        <div class="card-preview">
          <div class="circle-dock-container">
            <div class="circle-dock">
              <a href="#" class="dock-item">
                <span class="dock-label">Dashboard</span>
                <div class="dock-icon purple"><i class="fa-solid fa-chart-pie"></i></div>
              </a>
              <a href="#" class="dock-item">
                <span class="dock-label">Messages</span>
                <div class="dock-icon blue"><i class="fa-solid fa-message"></i></div>
              </a>
              <a href="#" class="dock-item">
                <span class="dock-label">Documents</span>
                <div class="dock-icon pink"><i class="fa-solid fa-folder-open"></i></div>
              </a>
              <a href="#" class="dock-item">
                <span class="dock-label">Settings</span>
                <div class="dock-icon yellow"><i class="fa-solid fa-sliders"></i></div>
              </a>
            </div>
          </div>
        </div>
        <p>A vertical dock structure displaying labels on trigger hover.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>
    </section>
  </main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/menu.css\`

#### JavaScript Scripts:
- \`/dist/shared.js\`
- \`/menu.js\`

### Accessibility (a11y) Checklist

- [x] Semantic HTML: appropriate tags are utilized.
- [x] Focus states: interactive elements show native or custom focus styling.
- [x] Color contrast: contrast ratios meet WCAG standard compliance.
- [x] Landmarks: navigation uses header/nav markup roles properly.
- [x] ARIA status: uses expanded/hidden states appropriately.


### Visual & Interactive Test Cases

- [x] Render check: component layout presents visual elements clearly.
- [x] Hover check: interactive elements trigger hover states and transitions.
- [x] Responsive layout: scales and nests correctly across viewports.

`
      }
    }
  }
};

export const Default = {
  render: () => createShadowRootStory({
    title: 'Menu',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/menu.css"],
    content: `<main class="main-home">
    <section class="hero-section">
      <div class="hero-content">
        <span class="hero-badge">Navigation Components</span>
        <h1>Modern <span>Menus</span></h1>
        <p>Explore premium menu components including dropdowns, sidebars, glass navbars, dock menus, and command palettes crafted for modern interfaces.</p>
        <div class="hero-actions">
          <button class="primary-btn">Browse Menus</button>
          <button class="outline-btn">View Docs</button>
        </div>
      </div>
      <div class="hero-preview">
        <div class="floating-menu">
          <a href="#"><i class="fa-solid fa-house"></i> Home</a>
          <a href="#"><i class="fa-solid fa-layer-group"></i> Components</a>
          <a href="#"><i class="fa-solid fa-gear"></i> Settings</a>
        </div>
      </div>
    </section>

    <article class="menu-card">
  <div class="card-top">
    <span class="card-label">Fullscreen Overlay</span>
    <span class="card-tag pink">Navigation</span>
  </div>

  <div class="card-preview dark">
    <div class="overlay-demo">
      <button class="overlay-trigger">
        <i class="fa-solid fa-bars"></i>
      </button>

      <div class="overlay-menu">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>

  <p>Fullscreen navigation with immersive transitions.</p>
</article>
<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Breadcrumbs</span>
    <span class="card-tag yellow">Docs</span>
  </div>

  <div class="card-preview">
    <nav class="breadcrumbs">
      <a href="#">Home</a>
      <span>/</span>
      <a href="#">Components</a>
      <span>/</span>
      <span>Menus</span>
    </nav>
  </div>

  <p>Shows the current navigation path.</p>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Animated Tabs</span>
    <span class="card-tag purple">Tabs</span>
  </div>

  <div class="card-preview">
    <div class="animated-tabs">
      <button class="active">Overview</button>
      <button>Analytics</button>
      <button>Settings</button>
      <div class="tab-indicator"></div>
    </div>
  </div>

  <p>Interactive tab menu with sliding indicator.</p>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Quick Actions</span>
    <span class="card-tag pink">Bento</span>
  </div>

  <div class="card-preview">
    <div class="bento-menu">
      <button><i class="fa-solid fa-plus"></i> New</button>
      <button><i class="fa-solid fa-file"></i> Files</button>
      <button><i class="fa-solid fa-users"></i> Team</button>
      <button><i class="fa-solid fa-gear"></i> Settings</button>
    </div>
  </div>

  <p>Dashboard quick-launch menu using bento layout.</p>
</article>
    <!-- ================= MODERN MEGA MENU ================= -->
<section class="menu-showcase">

  <!-- SECTION TITLE -->
  <div class="section-heading">
    <span class="section-badge">
      <i class="fa-solid fa-bars-staggered"></i>
      Navigation Systems
    </span>

    <h2>Professional Modern Menu Components</h2>

    <p>
      Elegant navigation layouts with premium interactions,
      glassmorphism effects, animated dropdowns, and dashboard-ready menus.
    </p>
  </div>

  <!-- ================= TOP NAVIGATION ================= -->
  <div class="menu-grid">

    <!-- COMPONENT 1 -->
    <article class="menu-card">
      <div class="menu-card-header">
        <div>
          <span class="menu-label">Glassmorphism</span>
          <h3>Premium Navbar</h3>
        </div>

        <button class="live-btn">Live</button>
      </div>

      <nav class="premium-navbar">
        <div class="nav-logo">
          <span>⬡</span>
          UIverse
        </div>

        <ul class="nav-links">
          <li><a href="#">Home</a></li>

          <li class="dropdown">
            <a href="#">
              Components
              <i class="fa-solid fa-chevron-down"></i>
            </a>

            <div class="dropdown-menu">
              <a href="#">
                <i class="fa-solid fa-layer-group"></i>
                Cards
              </a>

              <a href="#">
                <i class="fa-solid fa-toggle-on"></i>
                Toggles
              </a>

              <a href="#">
                <i class="fa-solid fa-table"></i>
                Tables
              </a>

              <a href="#">
                <i class="fa-solid fa-chart-simple"></i>
                Charts
              </a>
            </div>
          </li>

          <li><a href="#">Pricing</a></li>
          <li><a href="#">Docs</a></li>
        </ul>

        <div class="nav-actions-modern">
          <button class="ghost-btn">Login</button>
          <button class="gradient-btn">Get Started</button>
        </div>
      </nav>
    </article>

    <article class="menu-card">
  <div class="card-top">
    <span class="card-label">Mega Menu</span>
    <span class="card-tag blue">Enterprise</span>
  </div>

  <div class="card-preview">
    <div class="mega-menu-demo">
      <button class="mega-btn">
        Products <i class="fa-solid fa-chevron-down"></i>
      </button>

      <div class="mega-panel">
        <div>
          <h4>UI Components</h4>
          <a href="#">Buttons</a>
          <a href="#">Cards</a>
          <a href="#">Forms</a>
        </div>

        <div>
          <h4>Templates</h4>
          <a href="#">Dashboard</a>
          <a href="#">Landing Page</a>
          <a href="#">Portfolio</a>
        </div>

        <div>
          <h4>Resources</h4>
          <a href="#">Docs</a>
          <a href="#">Blog</a>
          <a href="#">Support</a>
        </div>
      </div>
    </div>
  </div>

  <p>Large enterprise navigation with categorized content.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>


<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Accordion Menu</span>
    <span class="card-tag purple">Expandable</span>
  </div>

  <div class="card-preview dark">
    <div class="accordion-menu">
      <details open>
        <summary>Dashboard</summary>
        <a href="#">Analytics</a>
        <a href="#">Reports</a>
      </details>

      <details>
        <summary>Users</summary>
        <a href="#">Customers</a>
        <a href="#">Teams</a>
      </details>
    </div>
  </div>

  <p>Expandable navigation groups for dashboards.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Context Menu</span>
    <span class="card-tag yellow">Desktop</span>
  </div>

  <div class="card-preview">
    <div class="context-demo">
      <button class="context-trigger">
        Right Click Menu
      </button>

      <div class="context-menu">
        <a href="#"><i class="fa-regular fa-copy"></i> Copy</a>
        <a href="#"><i class="fa-solid fa-pen"></i> Rename</a>
        <a href="#"><i class="fa-solid fa-trash"></i> Delete</a>
      </div>
    </div>
  </div>

  <p>Desktop-style contextual action menu.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>


<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Bottom Nav</span>
    <span class="card-tag pink">Mobile</span>
  </div>

  <div class="card-preview dark">
    <div class="bottom-nav">
      <a href="#"><i class="fa-solid fa-house"></i></a>
      <a href="#"><i class="fa-solid fa-compass"></i></a>
      <a href="#" class="active"><i class="fa-solid fa-plus"></i></a>
      <a href="#"><i class="fa-solid fa-heart"></i></a>
      <a href="#"><i class="fa-solid fa-user"></i></a>
    </div>
  </div>

  <p>Instagram and TikTok inspired mobile navigation.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Bottom Nav</span>
    <span class="card-tag pink">Mobile</span>
  </div>

  <div class="card-preview dark">
    <div class="bottom-nav">
      <a href="#"><i class="fa-solid fa-house"></i></a>
      <a href="#"><i class="fa-solid fa-compass"></i></a>
      <a href="#" class="active"><i class="fa-solid fa-plus"></i></a>
      <a href="#"><i class="fa-solid fa-heart"></i></a>
      <a href="#"><i class="fa-solid fa-user"></i></a>
    </div>
  </div>

  <p>Instagram and TikTok inspired mobile navigation.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Radial Menu</span>
    <span class="card-tag purple">Creative</span>
  </div>

  <div class="card-preview">
    <div class="radial-menu">
      <button class="radial-center">
        <i class="fa-solid fa-plus"></i>
      </button>

      <span><i class="fa-solid fa-camera"></i></span>
      <span><i class="fa-solid fa-image"></i></span>
      <span><i class="fa-solid fa-music"></i></span>
      <span><i class="fa-solid fa-video"></i></span>
    </div>
  </div>

  <p>Animated circular menu for creative applications.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Breadcrumb</span>
    <span class="card-tag blue">Navigation</span>
  </div>

  <div class="card-preview">
    <div class="breadcrumb-demo">
      <a href="#">Home</a>
      <i class="fa-solid fa-angle-right"></i>
      <a href="#">Components</a>
      <i class="fa-solid fa-angle-right"></i>
      <span>Menus</span>
    </div>
  </div>

  <p>Hierarchical navigation for large websites.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Tab Navigation</span>
    <span class="card-tag pink">Tabs</span>
  </div>

  <div class="card-preview">
    <div class="tab-menu">
      <button class="active">Overview</button>
      <button>Analytics</button>
      <button>Reports</button>
      <button>Settings</button>
    </div>
  </div>

  <p>Modern segmented navigation for dashboards.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Mac Dock</span>
    <span class="card-tag yellow">Animated</span>
  </div>

  <div class="card-preview dark">
    <div class="mac-dock">
      <i class="fa-solid fa-folder"></i>
      <i class="fa-solid fa-envelope"></i>
      <i class="fa-solid fa-music"></i>
      <i class="fa-solid fa-video"></i>
      <i class="fa-solid fa-gear"></i>
    </div>
  </div>

  <p>macOS inspired hover-magnification dock navigation.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">Music Sidebar</span>
    <span class="card-tag green">Media</span>
  </div>

  <div class="card-preview dark">
    <div class="spotify-sidebar">
      <a href="#"><i class="fa-solid fa-house"></i> Home</a>
      <a href="#"><i class="fa-solid fa-magnifying-glass"></i> Search</a>
      <a href="#"><i class="fa-solid fa-book"></i> Library</a>
    </div>
  </div>

  <p>Streaming app inspired sidebar navigation.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

<article class="menu-card">
  <div class="card-top">
    <span class="card-label">AI Palette</span>
    <span class="card-tag purple">AI</span>
  </div>

  <div class="card-preview">
    <div class="ai-command">
      <div class="ai-input">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        Ask AI anything...
      </div>

      <div class="ai-suggestions">
        <span>Generate UI</span>
        <span>Create Navbar</span>
        <span>Build Dashboard</span>
      </div>
    </div>
  </div>

  <p>Modern AI-powered command center inspired by ChatGPT and Cursor.</p>

  <div class="card-actions">
    <button class="view-btn">Preview</button>
    <button class="copy-btn">Copy Code</button>
  </div>
</article>

    <!-- COMPONENT 2 -->
    <article class="menu-card">
      <div class="menu-card-header">
        <div>
          <span class="menu-label">Dashboard</span>
          <h3>Admin Sidebar</h3>
        </div>
      </div>

      <div class="dashboard-sidebar">

        <div class="dashboard-brand">
          <span class="brand-circle"></span>
          NeoAdmin
        </div>

        <ul class="dashboard-menu">
          <li class="active">
            <i class="fa-solid fa-house"></i>
            Dashboard
          </li>

          <li>
            <i class="fa-solid fa-chart-line"></i>
            Analytics
          </li>

          <li>
            <i class="fa-solid fa-user-group"></i>
            Customers
          </li>

          <li>
            <i class="fa-solid fa-credit-card"></i>
            Transactions
          </li>

          <li>
            <i class="fa-solid fa-gear"></i>
            Settings
          </li>
        </ul>

      </div>
    </article>

    <!-- COMPONENT 3 -->
    <article class="menu-card">
      <div class="menu-card-header">
        <div>
          <span class="menu-label">Mobile</span>
          <h3>Floating Dock Menu</h3>
        </div>
      </div>

      <div class="dock-wrapper">

        <div class="floating-dock">

          <button>
            <i class="fa-solid fa-house"></i>
          </button>

          <button>
            <i class="fa-solid fa-heart"></i>
          </button>

          <button class="dock-active">
            <i class="fa-solid fa-plus"></i>
          </button>

          <button>
            <i class="fa-solid fa-message"></i>
          </button>

          <button>
            <i class="fa-solid fa-user"></i>
          </button>

        </div>

      </div>
    </article>

    <!-- COMPONENT 4 -->
    <article class="menu-card">
      <div class="menu-card-header">
        <div>
          <span class="menu-label">Minimal</span>
          <h3>Command Menu</h3>
        </div>
      </div>

      <div class="command-menu">

        <div class="command-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search commands..." />
        </div>

        <div class="command-items">

          <div class="command-item">
            <div>
              <i class="fa-solid fa-file"></i>
              New File
            </div>
            <kbd>⌘N</kbd>
          </div>

          <div class="command-item">
            <div>
              <i class="fa-solid fa-folder-open"></i>
              Open Project
            </div>
            <kbd>⌘O</kbd>
          </div>

          <div class="command-item">
            <div>
              <i class="fa-solid fa-gear"></i>
              Preferences
            </div>
            <kbd>⌘,</kbd>
          </div>

        </div>

      </div>
    </article>

  </div>
</section>

    <section class="menu-grid">
      <article class="menu-card">
        <div class="card-top"><span class="card-label">Dropdown Menu</span><span class="card-tag purple">Dropdown</span></div>
        <div class="card-preview">
          <div class="dropdown-demo">
            <button class="dropdown-btn">Options <i class="fa-solid fa-angle-down"></i></button>
            <div class="dropdown-content"><a href="#">Profile</a><a href="#">Settings</a><a href="#">Logout</a></div>
          </div>
        </div>
        <p>Compact action menu for profile, settings, and account flows.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Mini Sidebar</span><span class="card-tag blue">Sidebar</span></div>
        <div class="card-preview dark">
          <div class="mini-sidebar">
            <a href="#"><i class="fa-solid fa-house"></i></a>
            <a href="#"><i class="fa-solid fa-box"></i></a>
            <a href="#"><i class="fa-solid fa-envelope"></i></a>
            <a href="#"><i class="fa-solid fa-gear"></i></a>
          </div>
        </div>
        <p>Minimal vertical navigation for compact dashboards.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Glass Navbar</span><span class="card-tag pink">Navigation</span></div>
        <div class="card-preview">
          <div class="glass-navbar"><strong>UIverse</strong><div><a href="#">Home</a><a href="#">Docs</a><a href="#">Pricing</a></div></div>
        </div>
        <p>Frosted horizontal navigation with clean spacing and depth.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Hamburger Menu</span><span class="card-tag yellow">Mobile</span></div>
        <div class="card-preview dark"><div class="hamburger"><span></span><span></span><span></span></div></div>
        <p>Simple mobile trigger with strong silhouette and rhythm.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Dock Menu</span><span class="card-tag purple">Dock</span></div>
        <div class="card-preview"><div class="dock-menu"><i class="fa-solid fa-house"></i><i class="fa-solid fa-bell"></i><i class="fa-solid fa-user"></i></div></div>
        <p>Floating icon dock for fast-access product actions.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Command Menu</span><span class="card-tag blue">Search</span></div>
        <div class="card-preview dark"><div class="command-menu"><i class="fa-solid fa-magnifying-glass"></i><input placeholder="Search commands..." /></div></div>
        <p>Keyboard-first command surface for power users.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>
      <article class="menu-card">
        <div class="card-top"><span class="card-label">Floating Bubble Menu</span><span class="card-tag purple">Interactive</span></div>
        <div class="card-preview">
          <div class="bubble-menu-container">
            <button class="bubble-trigger"><i class="fa-solid fa-plus"></i></button>
            <div class="bubble-items">
              <a href="#" class="bubble-item"><i class="fa-solid fa-pen"></i></a>
              <a href="#" class="bubble-item"><i class="fa-solid fa-image"></i></a>
              <a href="#" class="bubble-item"><i class="fa-solid fa-link"></i></a>
            </div>
          </div>
        </div>
        <p>A floating action button that expands into a bubble menu on hover.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Searchable Command</span><span class="card-tag blue">Keyboard</span></div>
        <div class="card-preview dark">
          <button class="open-command-btn">Open Command Menu <kbd>⌘K</kbd></button>
          
          <div class="command-palette-overlay" id="cmdPalette">
            <div class="command-palette-modal">
              <div class="cmd-search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="cmdInput" placeholder="Type a command or search..." autofocus />
              </div>
              <div class="cmd-results">
                <div class="cmd-group">Suggestions</div>
                <a href="#" class="cmd-item"><i class="fa-regular fa-file"></i> Create New File</a>
                <a href="#" class="cmd-item"><i class="fa-solid fa-user-plus"></i> Invite Team Member</a>
                <a href="#" class="cmd-item"><i class="fa-solid fa-gear"></i> Open Settings</a>
              </div>
            </div>
          </div>
        </div>
        <p>Interactive command palette. Press CMD+K to trigger, searchable with keyboard navigation.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Notification Dropdown</span><span class="card-tag yellow">Alerts</span></div>
        <div class="card-preview">
          <div class="notification-dropdown">
            <button class="notify-btn">
              <i class="fa-regular fa-bell"></i>
              <span class="notify-badge">3</span>
            </button>
            <div class="notify-content">
              <div class="notify-header">Notifications <span>Mark all read</span></div>
              <div class="notify-list">
                <a href="#" class="notify-item unread">
                  <div class="notify-icon success"><i class="fa-solid fa-check"></i></div>
                  <div class="notify-text"><strong>Deploy Successful</strong><p>Your app is now live.</p></div>
                </a>
                <a href="#" class="notify-item">
                  <div class="notify-icon warning"><i class="fa-solid fa-triangle-exclamation"></i></div>
                  <div class="notify-text"><strong>Storage Warning</strong><p>You are at 90% capacity.</p></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>Feature-rich notification center with unread states and custom icons.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Profile Avatar Menu</span><span class="card-tag pink">Account</span></div>
        <div class="card-preview">
          <div class="profile-dropdown">
            <button class="profile-btn">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
            </button>
            <div class="profile-content">
              <div class="profile-header">
                <strong>Felix Dev</strong>
                <p>felix@uiverse.com</p>
              </div>
              <hr />
              <a href="#"><i class="fa-regular fa-user"></i> My Profile</a>
              <a href="#"><i class="fa-solid fa-sliders"></i> Preferences</a>
              <hr />
              <a href="#" class="logout-link"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a>
            </div>
          </div>
        </div>
        <p>Detailed profile menu with user info, actions, and custom styling.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Radial Navigation</span><span class="card-tag purple">Radial</span></div>
        <div class="card-preview">
          <div class="radial-menu">
            <button class="radial-trigger"><i class="fa-solid fa-compass"></i></button>
            <div class="radial-items">
              <a href="#" class="radial-item"><i class="fa-solid fa-house"></i></a>
              <a href="#" class="radial-item"><i class="fa-solid fa-user"></i></a>
              <a href="#" class="radial-item"><i class="fa-solid fa-envelope"></i></a>
              <a href="#" class="radial-item"><i class="fa-solid fa-gear"></i></a>
              <a href="#" class="radial-item"><i class="fa-solid fa-bell"></i></a>
            </div>
          </div>
        </div>
        <p>A circular menu that expands options outwards radially on trigger hover.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Segmented Glider</span><span class="card-tag blue">Navigation</span></div>
        <div class="card-preview">
          <div class="segmented-nav">
            <input type="radio" name="seg-tab" id="seg1" checked />
            <input type="radio" name="seg-tab" id="seg2" />
            <input type="radio" name="seg-tab" id="seg3" />
            <label for="seg1"><i class="fa-solid fa-chart-simple"></i> Analytics</label>
            <label for="seg2"><i class="fa-solid fa-wallet"></i> Wallet</label>
            <label for="seg3"><i class="fa-solid fa-gear"></i> Setup</label>
            <div class="seg-glider"></div>
          </div>
        </div>
        <p>A CSS-only horizontal menu featuring a smooth capsule slider indicator.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Columns Mega Menu</span><span class="card-tag pink">Dropdown</span></div>
        <div class="card-preview">
          <div class="mega-menu-container">
            <button class="mega-trigger">Products <i class="fa-solid fa-chevron-down"></i></button>
            <div class="mega-dropdown">
              <div class="mega-grid-inner">
                <div class="mega-col">
                  <h4>Services</h4>
                  <a href="#" class="mega-link">
                    <div class="mega-icon pink"><i class="fa-solid fa-cloud"></i></div>
                    <div>
                      <strong>Cloud Hosting</strong>
                      <span>Scalable VPS solutions</span>
                    </div>
                  </a>
                  <a href="#" class="mega-link">
                    <div class="mega-icon blue"><i class="fa-solid fa-shield-halved"></i></div>
                    <div>
                      <strong>Security</strong>
                      <span>Enterprise firewall protection</span>
                    </div>
                  </a>
                </div>
                <div class="mega-col">
                  <h4>Developers</h4>
                  <a href="#" class="mega-link">
                    <div class="mega-icon purple"><i class="fa-solid fa-code"></i></div>
                    <div>
                      <strong>API Docs</strong>
                      <span>Full references & specs</span>
                    </div>
                  </a>
                  <a href="#" class="mega-link">
                    <div class="mega-icon yellow"><i class="fa-solid fa-terminal"></i></div>
                    <div>
                      <strong>CLI Tool</strong>
                      <span>Command-line automation</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>A multi-column hovering dropdown menu displaying detailed option descriptions.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Cascading Context</span><span class="card-tag yellow">Submenu</span></div>
        <div class="card-preview">
          <div class="context-menu-container">
            <div class="context-menu">
              <a href="#" class="context-item"><span class="context-item-text"><i class="fa-regular fa-copy"></i> Copy</span> <span class="context-shortcut">Ctrl+C</span></a>
              <a href="#" class="context-item"><span class="context-item-text"><i class="fa-regular fa-file-lines"></i> Paste</span> <span class="context-shortcut">Ctrl+V</span></a>
              <hr class="context-divider" />
              <div class="context-item context-submenu-trigger">
                <span class="context-item-text"><i class="fa-solid fa-share-nodes"></i> Share</span>
                <i class="fa-solid fa-chevron-right context-arrow"></i>
                <div class="context-submenu">
                  <a href="#" class="context-item"><span class="context-item-text"><i class="fa-brands fa-twitter"></i> Twitter</span></a>
                  <a href="#" class="context-item"><span class="context-item-text"><i class="fa-brands fa-discord"></i> Discord</span></a>
                  <a href="#" class="context-item"><span class="context-item-text"><i class="fa-regular fa-envelope"></i> Email</span></a>
                </div>
              </div>
              <a href="#" class="context-item delete-item"><span class="context-item-text"><i class="fa-regular fa-trash-can"></i> Delete</span> <span class="context-shortcut">Del</span></a>
            </div>
          </div>
        </div>
        <p>A desktop-grade cascading context menu with nested hovering slide-out options.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>

      <article class="menu-card">
        <div class="card-top"><span class="card-label">Vertical Expanded Dock</span><span class="card-tag blue">Dock</span></div>
        <div class="card-preview">
          <div class="circle-dock-container">
            <div class="circle-dock">
              <a href="#" class="dock-item">
                <span class="dock-label">Dashboard</span>
                <div class="dock-icon purple"><i class="fa-solid fa-chart-pie"></i></div>
              </a>
              <a href="#" class="dock-item">
                <span class="dock-label">Messages</span>
                <div class="dock-icon blue"><i class="fa-solid fa-message"></i></div>
              </a>
              <a href="#" class="dock-item">
                <span class="dock-label">Documents</span>
                <div class="dock-icon pink"><i class="fa-solid fa-folder-open"></i></div>
              </a>
              <a href="#" class="dock-item">
                <span class="dock-label">Settings</span>
                <div class="dock-icon yellow"><i class="fa-solid fa-sliders"></i></div>
              </a>
            </div>
          </div>
        </div>
        <p>A vertical dock structure displaying labels on trigger hover.</p>
        <div class="card-actions"><button class="view-btn">Preview</button><button class="copy-btn">Copy Code</button></div>
      </article>
    </section>
  </main>`
  })
};
