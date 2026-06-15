import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Breadcrumb navigation components

### Info & Metadata
- **Category**: Navigation
- **Tags**: <code>breadcrumb</code>, <code>navigation</code>, <code>path</code>, <code>hierarchy</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html

  <a class="skip-link" href="#main-content">Skip to main content</a>

  <aside class="sidebar" id="sidebar">
    <h2>UIverse</h2>
    <ul>
      <li>
        <a href="index.html">
          <i class="fa-solid fa-house"></i>
          <p>Home</p>
        </a>
      </li>
      <li>
        <a href="button.html">
          <i class="fa-solid fa-mobile-button"></i>
          <p>Buttons</p>
        </a>
      </li>
      <li>
        <a href="cards.html">
          <i class="fa-solid fa-layer-group"></i>
          <p>Cards</p>
        </a>
      </li>
      <li>
        <a href="forms.html">
          <i class="fa-brands fa-wpforms"></i>
          <p>Forms</p>
        </a>
      </li>
      <li>
        <a href="navbar.html">
          <i class="fa-solid fa-bars"></i>
          <p>Navbar</p>
        </a>
      </li>
      <li>
        <a href="contributors.html">
          <i class="fa-solid fa-users"></i>
          <p>Contributors</p>
        </a>
      </li>
      <li>
        <a href="documentation.html">
          <i class="fa-solid fa-book"></i>
          <p>Documentation</p>
        </a>
      </li>
      <li>
        <a href="pricing.html">
          <i class="fa-solid fa-tags"></i>
          <p>Pricing</p>
        </a>
      </li>
      <li>
        <a href="subscription.html">
          <i class="fa-solid fa-credit-card"></i>
          <span>Subscription</span>
        </a>
      </li>
      <li>
        <a href="auth.html">
          <i class="fa-solid fa-user-shield"></i>
          <span>Authentication</span>
        </a>
      </li>
      <li>
        <a href="recovery.html">
          <i class="fa-solid fa-key" aria-hidden="true"></i>
          <span>Password Recovery</span>
        </a>
      </li>
      <li>
        <a href="badges.html" class="active">
          <i class="fa-solid fa-award"></i>
          <p>Badges</p>
        </a>
      </li>
      <li>
        <a href="settings.html">
          <i class="fa-solid fa-gear"></i>
          <p>Settings</p>
        </a>
      </li>
    </ul>
  </aside>

  <div class="main-home">

  <header class="topbar">
    <div class="brand">
      <span class="brand-mark">⬡</span>
      <span>UIverse</span>
    </div>
    <nav aria-label="Breadcrumb"  class="topnav" aria-label="Primary">
    <nav aria-label="Breadcrumb" class="topnav" aria-label="Primary">
      <a href="index.html">Home</a>
      <a href="cards.html">Cards</a>
      <a href="breadcrumbs.html" class="active">Breadcrumbs</a>
    </nav>
  </header>

  <main class="page-shell">
    <section class="hero">
      <div class="hero-badge">🧭 Reusable Breadcrumb Navigation</div>
      <h1>Breadcrumb UI for dashboards, admin panels, ecommerce, and web apps.</h1>
      <p>Five flexible breadcrumb patterns for clean hierarchy and quick back navigation.</p>
      <div class="hero-meta">
        <span class="meta-pill">5 Components</span>
        <span class="meta-pill">HTML CSS JS</span>
        <span class="meta-pill">Responsive</span>
      </div>
    </section>

    <section class="related-pages">
      <a href="calendar-components.html">Calendar</a>
      <a href="notes-components.html">Notes</a>
      <a href="patterns.html">Patterns</a>
      <a href="tooltips.html">Tooltips</a>
      <a href="inputs.html">Inputs</a>
    </section>

    <section class="breadcrumb-grid" role="region" aria-label="Breadcrumb types">
      <article class="component-card" data-name="glass breadcrumb">
        <div class="card-preview glass-preview">
          <nav aria-label="Breadcrumb"  class="trail glass-trail" aria-label="Breadcrumb">
          <nav aria-label="Breadcrumb" class="trail glass-trail" aria-label="Breadcrumb">
            <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <a href="dashboard.html">Dashboard</a>
            <i class="fa-solid fa-chevron-right"></i>
            <span>Analytics</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Glass Breadcrumb</h3>
          <p>Soft glassmorphism trail for modern dashboards and admin panels.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc1', this)">View code</button>
            <button onclick="copyCode('bc1', this)">Copy code</button>
          </div>
          <pre id="bc1" class="code-block"><code>&lt;nav class="trail glass-trail"&gt;
  &lt;a href="index.html"&gt;Home&lt;/a&gt;
  &lt;span&gt;Analytics&lt;/span&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="pill breadcrumb">
        <div class="card-preview pill-preview">
          <nav aria-label="Breadcrumb"  class="trail pill-trail" aria-label="Breadcrumb">
          <nav aria-label="Breadcrumb" class="trail pill-trail" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <a href="ecommerce.html">Shop</a>
            <a href="product.html">Category</a>
            <span>Product Detail</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Pill Breadcrumb</h3>
          <p>Rounded breadcrumb chips for ecommerce and catalog flows.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc2', this)">View code</button>
            <button onclick="copyCode('bc2', this)">Copy code</button>
          </div>
          <pre id="bc2" class="code-block"><code>&lt;nav class="trail pill-trail"&gt;
  &lt;a href="ecommerce.html"&gt;Shop&lt;/a&gt;
  &lt;span&gt;Product Detail&lt;/span&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
  <div class="card-preview">
    <nav class="trail chevron-card" aria-label="Breadcrumb">
      <a href="#">Home</a>
      <a href="#">Workspace</a>
      <a href="#">Projects</a>
      <span>Dashboard</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Chevron Card Breadcrumb</h3>
    <p>Connected chevron blocks for enterprise dashboards.</p>
  </div>
</article>

<article class="component-card">
  <div class="card-preview dark-preview">
    <nav class="trail neon-breadcrumb" aria-label="Breadcrumb">
      <a href="#">Home</a>
      <i class="fa-solid fa-bolt"></i>
      <a href="#">Design</a>
      <i class="fa-solid fa-bolt"></i>
      <span>UI Kit</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Neon Breadcrumb</h3>
    <p>Cyberpunk inspired glowing breadcrumb trail.</p>
  </div>
</article>

<article class="component-card">
  <div class="card-preview">
    <nav class="checkout-breadcrumb">
      <span class="done">Cart</span>
      <span class="done">Shipping</span>
      <span class="active">Payment</span>
      <span>Complete</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Checkout Progress</h3>
    <p>Perfect for ecommerce checkout flows.</p>
  </div>
</article>


<article class="component-card">
  <div class="card-preview">
    <nav class="folder-path">
      <i class="fa-solid fa-folder"></i>
      <a href="#">Projects</a>
      /
      <a href="#">React</a>
      /
      <a href="#">Dashboard</a>
      /
      <span>src</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Folder Path</h3>
    <p>File explorer inspired breadcrumb navigation.</p>
  </div>
</article>


<article class="component-card">
  <div class="card-preview">
    <div class="timeline-breadcrumb">
      <span class="active">Discover</span>
      <span class="active">Design</span>
      <span>Develop</span>
      <span>Launch</span>
    </div>
  </div>

  <div class="card-body">
    <h3>Timeline Breadcrumb</h3>
    <p>Roadmap style navigation system.</p>
  </div>
</article>


<article class="component-card">
  <div class="card-preview">
    <nav class="ribbon-breadcrumb">
      <a href="#">Home</a>
      <a href="#">Marketplace</a>
      <span>Premium UI</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Ribbon Breadcrumb</h3>
    <p>Gradient ribbon segments with modern styling.</p>
  </div>
</article>


<article class="component-card">
  <div class="card-preview">
    <nav class="avatar-breadcrumb">
      <img src="avatar.jpg" alt="">
      <a href="#">Team</a>
      <i class="fa-solid fa-angle-right"></i>
      <a href="#">Marketing</a>
      <i class="fa-solid fa-angle-right"></i>
      <span>Campaigns</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Team Breadcrumb</h3>
    <p>Workspace navigation with avatars.</p>
  </div>
</article>


<section class="breadcrumb-search">
  <input
    type="search"
    placeholder="Search breadcrumb components..."
    id="componentSearch"
  >
</section>
      <article class="component-card" data-name="underline breadcrumb">
        <div class="card-preview underline-preview">
          <nav aria-label="Breadcrumb"  class="trail underline-trail" aria-label="Breadcrumb">
        <div class="card-preview">
          <nav class="trail chevron-card" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <a href="#">Workspace</a>
            <a href="#">Projects</a>
            <span>Dashboard</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Chevron Card Breadcrumb</h3>
          <p>Connected chevron blocks for enterprise dashboards.</p>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview dark-preview">
          <nav class="trail neon-breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <i class="fa-solid fa-bolt"></i>
            <a href="#">Design</a>
            <i class="fa-solid fa-bolt"></i>
            <span>UI Kit</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Neon Breadcrumb</h3>
          <p>Cyberpunk inspired glowing breadcrumb trail.</p>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview">
          <nav class="checkout-breadcrumb">
            <span class="done">Cart</span>
            <span class="done">Shipping</span>
            <span class="active">Payment</span>
            <span>Complete</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Checkout Progress</h3>
          <p>Perfect for ecommerce checkout flows.</p>
        </div>
      </article>


      <article class="component-card">
        <div class="card-preview">
          <nav class="folder-path">
            <i class="fa-solid fa-folder"></i>
            <a href="#">Projects</a>
            /
            <a href="#">React</a>
            /
            <a href="#">Dashboard</a>
            /
            <span>src</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Folder Path</h3>
          <p>File explorer inspired breadcrumb navigation.</p>
        </div>
      </article>


      <article class="component-card">
        <div class="card-preview">
          <div class="timeline-breadcrumb">
            <span class="active">Discover</span>
            <span class="active">Design</span>
            <span>Develop</span>
            <span>Launch</span>
          </div>
        </div>

        <div class="card-body">
          <h3>Timeline Breadcrumb</h3>
          <p>Roadmap style navigation system.</p>
        </div>
      </article>


      <article class="component-card">
        <div class="card-preview">
          <nav class="ribbon-breadcrumb">
            <a href="#">Home</a>
            <a href="#">Marketplace</a>
            <span>Premium UI</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Ribbon Breadcrumb</h3>
          <p>Gradient ribbon segments with modern styling.</p>
        </div>
      </article>


      <article class="component-card">
        <div class="card-preview">
          <nav class="avatar-breadcrumb">
            <img src="avatar.jpg" alt="">
            <a href="#">Team</a>
            <i class="fa-solid fa-angle-right"></i>
            <a href="#">Marketing</a>
            <i class="fa-solid fa-angle-right"></i>
            <span>Campaigns</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Team Breadcrumb</h3>
          <p>Workspace navigation with avatars.</p>
        </div>
      </article>


      <section class="breadcrumb-search">
        <input type="search" placeholder="Search breadcrumb components..." id="componentSearch">
      </section>
      <article class="component-card" data-name="underline breadcrumb">
        <div class="card-preview underline-preview">
          <nav aria-label="Breadcrumb" class="trail underline-trail" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <a href="files.html">Assets</a>
            <i class="fa-solid fa-chevron-right"></i>
            <span>Uploads</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Underline Breadcrumb</h3>
          <p>Minimal links with hover underlines for lightweight layouts.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc3', this)">View code</button>
            <button onclick="copyCode('bc3', this)">Copy code</button>
          </div>
          <pre id="bc3" class="code-block"><code>&lt;a href="files.html"&gt;Assets&lt;/a&gt;
&lt;span&gt;Uploads&lt;/span&gt;</code></pre>
        </div>
      </article>


      <section class="stats-bar">

  <div class="stat">
    <h3>15+</h3>
    <span>Breadcrumb Styles</span>
  </div>

  <div class="stat">
    <h3>100%</h3>
    <span>Responsive</span>
  </div>

  <div class="stat">
    <h3>Pure</h3>
    <span>HTML CSS JS</span>
  </div>

<!-- ===================================
        <div class="stat">
          <h3>15+</h3>
          <span>Breadcrumb Styles</span>
        </div>

        <div class="stat">
          <h3>100%</h3>
          <span>Responsive</span>
        </div>

        <div class="stat">
          <h3>Pure</h3>
          <span>HTML CSS JS</span>
        </div>

        <!-- ===================================
NAVBAR

<header class="navbar">

<div class="nav-container">

<div class="logo">

<div class="logo-icon">

⬡

</div>

<span>

UIverse

</span>

</div>

<nav class="nav-links">

<a href="index.html">

Home

</a>

<a href="cards.html">

Cards

</a>

<a href="breadcrumbs.html"
class="active">

Breadcrumbs

</a>

</nav>

</div>

</header>

<!-- ===================================
HERO

<section class="hero">

<div class="hero-content">

<div class="hero-badge">

🧭 Reusable Breadcrumb Navigation

</div>

<h1>

Premium Breadcrumb
Components For
Modern Interfaces

</h1>

<p>

Explore beautiful breadcrumb
patterns for dashboards,
ecommerce websites,
admin panels and modern
web applications.

</p>

<div class="hero-tags">

<span>
12 Components
</span>

<span>
HTML CSS JS
</span>

<span>
Responsive
</span>

</div>

</div>

</section>

<!-- ===================================
STATS
=================================== -->

        <section class="stats-section">

          <div class="stats-grid">

            <div class="stat-card">

              <h3>

                12+

              </h3>

              <p>

                Components

              </p>

            </div>

            <div class="stat-card">

              <h3>

                100%

              </h3>

              <p>

                Responsive

              </p>

            </div>

            <div class="stat-card">

              <h3>

                Pure

              </h3>

              <p>

                HTML CSS JS

              </p>

            </div>

            <div class="stat-card">

              <h3>

                UIverse

              </h3>

              <p>

                Design System

              </p>

            </div>

          </div>

        </section>

        <!-- ===================================
SEARCH
=================================== -->

        <section class="search-section">

          <input type="text" id="searchInput" placeholder="Search breadcrumb components...">

        </section>

        <!-- ===================================
COMPONENT GRID
=================================== -->

        <section class="breadcrumb-grid">
          <!-- ===================================
COMPONENT 1
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Simple Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb">

              <a href="#">Home</a>

              <span>/</span>

              <a href="#">Dashboard</a>

              <span>/</span>

              <span class="current">
                Analytics
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 2
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Arrow Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb arrow">

              <a href="#">Home</a>

              <i class="fa-solid fa-chevron-right"></i>

              <a href="#">Products</a>

              <i class="fa-solid fa-chevron-right"></i>

              <span class="current">
                Details
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 3
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Pill Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb pill">

              <a href="#">Home</a>

              <a href="#">Components</a>

              <span class="current">
                Breadcrumbs
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 4
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Icon Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb icon">

              <a href="#">
                <i class="fa-solid fa-house"></i>
                Home
              </a>

              <span>/</span>

              <a href="#">
                <i class="fa-solid fa-layer-group"></i>
                UI
              </a>

              <span>/</span>

              <span class="current">
                Cards
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 5
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Glass Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb glass">

              <a href="#">Home</a>

              <span>→</span>

              <a href="#">Design</a>

              <span>→</span>

              <span class="current">
                Gallery
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 6
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Gradient Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb gradient">

              <a href="#">Home</a>

              <span>/</span>

              <a href="#">Store</a>

              <span>/</span>

              <span class="current">
                Checkout
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 7
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Minimal Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb minimal">

              <a href="#">Home</a>

              <span>•</span>

              <a href="#">Blog</a>

              <span>•</span>

              <span class="current">
                Article
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 8
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Rounded Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb rounded">

              <a href="#">Home</a>

              <a href="#">Account</a>

              <span class="current">
                Settings
              </span>

            </nav>

          </div>
          <!-- ===================================
COMPONENT 9
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Admin Dashboard
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb admin">

              <a href="#">Dashboard</a>

              <span>/</span>

              <a href="#">Users</a>

              <span>/</span>

              <a href="#">Profile</a>

              <span>/</span>

              <span class="current">
                Edit
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 10
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                E-Commerce
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb ecommerce">

              <a href="#">Home</a>

              <span>></span>

              <a href="#">Electronics</a>

              <span>></span>

              <a href="#">Laptops</a>

              <span>></span>

              <span class="current">
                MacBook Pro
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 11
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Neon Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb neon">

              <a href="#">Home</a>

              <span>/</span>

              <a href="#">Projects</a>

              <span>/</span>

              <span class="current">
                UIverse
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 12
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Premium Glass
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb premium">

              <a href="#">Home</a>

              <span>→</span>

              <a href="#">Workspace</a>

              <span>→</span>

              <span class="current">
                Analytics
              </span>

            </nav>

          </div>

        </section>

        <!-- ===================================
NEWSLETTER
=================================== -->

        <section class="newsletter">

          <div class="newsletter-card">

            <h2>

              Stay Updated

            </h2>

            <p>

              Get new UI components,
              design systems and frontend
              resources delivered weekly.

            </p>

            <form>

              <input type="email" placeholder="your@email.com">

              <button>

                Subscribe

              </button>

            </form>

          </div>

        </section>

        <!-- ===================================
FOOTER
=================================== -->

        <footer class="footer">

          <div class="footer-container">

            <div class="footer-brand">

              <h2>

                ⬡ UIverse

              </h2>

              <p>

                Premium UI components
                for modern developers.

              </p>

            </div>

            <div class="footer-col">

              <h3>

                Explore

              </h3>

              <ul>

                <li><a href="#">Buttons</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Forms</a></li>
                <li><a href="#">Breadcrumbs</a></li>

              </ul>

            </div>

            <div class="footer-col">

              <h3>

                Resources

              </h3>

              <ul>

                <li><a href="#">Docs</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Contribute</a></li>

              </ul>

            </div>

            <div class="footer-col">

              <h3>

                Legal

              </h3>

              <ul>

                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">License</a></li>

              </ul>

            </div>

          </div>

          <div class="footer-bottom">

            <p>

              © 2026 UIverse.
              Built with ❤️ for developers.

            </p>

          </div>

        </footer>

  </div>

        


\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/breadcrumbs.css\`
- \`/shared-sidebar.css\`

#### JavaScript Scripts:
- \`/breadcrumbs.js\`

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
    title: 'Breadcrumbs',
    styles: ["/design-tokens.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/breadcrumbs.css","/shared-sidebar.css"],
    content: `
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <aside class="sidebar" id="sidebar">
    <h2>UIverse</h2>
    <ul>
      <li>
        <a href="index.html">
          <i class="fa-solid fa-house"></i>
          <p>Home</p>
        </a>
      </li>
      <li>
        <a href="button.html">
          <i class="fa-solid fa-mobile-button"></i>
          <p>Buttons</p>
        </a>
      </li>
      <li>
        <a href="cards.html">
          <i class="fa-solid fa-layer-group"></i>
          <p>Cards</p>
        </a>
      </li>
      <li>
        <a href="forms.html">
          <i class="fa-brands fa-wpforms"></i>
          <p>Forms</p>
        </a>
      </li>
      <li>
        <a href="navbar.html">
          <i class="fa-solid fa-bars"></i>
          <p>Navbar</p>
        </a>
      </li>
      <li>
        <a href="contributors.html">
          <i class="fa-solid fa-users"></i>
          <p>Contributors</p>
        </a>
      </li>
      <li>
        <a href="documentation.html">
          <i class="fa-solid fa-book"></i>
          <p>Documentation</p>
        </a>
      </li>
      <li>
        <a href="pricing.html">
          <i class="fa-solid fa-tags"></i>
          <p>Pricing</p>
        </a>
      </li>
      <li>
        <a href="subscription.html">
          <i class="fa-solid fa-credit-card"></i>
          <span>Subscription</span>
        </a>
      </li>
      <li>
        <a href="auth.html">
          <i class="fa-solid fa-user-shield"></i>
          <span>Authentication</span>
        </a>
      </li>
      <li>
        <a href="recovery.html">
          <i class="fa-solid fa-key" aria-hidden="true"></i>
          <span>Password Recovery</span>
        </a>
      </li>
      <li>
        <a href="badges.html" class="active">
          <i class="fa-solid fa-award"></i>
          <p>Badges</p>
        </a>
      </li>
      <li>
        <a href="settings.html">
          <i class="fa-solid fa-gear"></i>
          <p>Settings</p>
        </a>
      </li>
    </ul>
  </aside>

  <div class="main-home">

  <header class="topbar">
    <div class="brand">
      <span class="brand-mark">⬡</span>
      <span>UIverse</span>
    </div>
    <nav aria-label="Breadcrumb"  class="topnav" aria-label="Primary">
    <nav aria-label="Breadcrumb" class="topnav" aria-label="Primary">
      <a href="index.html">Home</a>
      <a href="cards.html">Cards</a>
      <a href="breadcrumbs.html" class="active">Breadcrumbs</a>
    </nav>
  </header>

  <main class="page-shell">
    <section class="hero">
      <div class="hero-badge">🧭 Reusable Breadcrumb Navigation</div>
      <h1>Breadcrumb UI for dashboards, admin panels, ecommerce, and web apps.</h1>
      <p>Five flexible breadcrumb patterns for clean hierarchy and quick back navigation.</p>
      <div class="hero-meta">
        <span class="meta-pill">5 Components</span>
        <span class="meta-pill">HTML CSS JS</span>
        <span class="meta-pill">Responsive</span>
      </div>
    </section>

    <section class="related-pages">
      <a href="calendar-components.html">Calendar</a>
      <a href="notes-components.html">Notes</a>
      <a href="patterns.html">Patterns</a>
      <a href="tooltips.html">Tooltips</a>
      <a href="inputs.html">Inputs</a>
    </section>

    <section class="breadcrumb-grid" role="region" aria-label="Breadcrumb types">
      <article class="component-card" data-name="glass breadcrumb">
        <div class="card-preview glass-preview">
          <nav aria-label="Breadcrumb"  class="trail glass-trail" aria-label="Breadcrumb">
          <nav aria-label="Breadcrumb" class="trail glass-trail" aria-label="Breadcrumb">
            <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <a href="dashboard.html">Dashboard</a>
            <i class="fa-solid fa-chevron-right"></i>
            <span>Analytics</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Glass Breadcrumb</h3>
          <p>Soft glassmorphism trail for modern dashboards and admin panels.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc1', this)">View code</button>
            <button onclick="copyCode('bc1', this)">Copy code</button>
          </div>
          <pre id="bc1" class="code-block"><code>&lt;nav class="trail glass-trail"&gt;
  &lt;a href="index.html"&gt;Home&lt;/a&gt;
  &lt;span&gt;Analytics&lt;/span&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="pill breadcrumb">
        <div class="card-preview pill-preview">
          <nav aria-label="Breadcrumb"  class="trail pill-trail" aria-label="Breadcrumb">
          <nav aria-label="Breadcrumb" class="trail pill-trail" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <a href="ecommerce.html">Shop</a>
            <a href="product.html">Category</a>
            <span>Product Detail</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Pill Breadcrumb</h3>
          <p>Rounded breadcrumb chips for ecommerce and catalog flows.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc2', this)">View code</button>
            <button onclick="copyCode('bc2', this)">Copy code</button>
          </div>
          <pre id="bc2" class="code-block"><code>&lt;nav class="trail pill-trail"&gt;
  &lt;a href="ecommerce.html"&gt;Shop&lt;/a&gt;
  &lt;span&gt;Product Detail&lt;/span&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
  <div class="card-preview">
    <nav class="trail chevron-card" aria-label="Breadcrumb">
      <a href="#">Home</a>
      <a href="#">Workspace</a>
      <a href="#">Projects</a>
      <span>Dashboard</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Chevron Card Breadcrumb</h3>
    <p>Connected chevron blocks for enterprise dashboards.</p>
  </div>
</article>

<article class="component-card">
  <div class="card-preview dark-preview">
    <nav class="trail neon-breadcrumb" aria-label="Breadcrumb">
      <a href="#">Home</a>
      <i class="fa-solid fa-bolt"></i>
      <a href="#">Design</a>
      <i class="fa-solid fa-bolt"></i>
      <span>UI Kit</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Neon Breadcrumb</h3>
    <p>Cyberpunk inspired glowing breadcrumb trail.</p>
  </div>
</article>

<article class="component-card">
  <div class="card-preview">
    <nav class="checkout-breadcrumb">
      <span class="done">Cart</span>
      <span class="done">Shipping</span>
      <span class="active">Payment</span>
      <span>Complete</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Checkout Progress</h3>
    <p>Perfect for ecommerce checkout flows.</p>
  </div>
</article>


<article class="component-card">
  <div class="card-preview">
    <nav class="folder-path">
      <i class="fa-solid fa-folder"></i>
      <a href="#">Projects</a>
      /
      <a href="#">React</a>
      /
      <a href="#">Dashboard</a>
      /
      <span>src</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Folder Path</h3>
    <p>File explorer inspired breadcrumb navigation.</p>
  </div>
</article>


<article class="component-card">
  <div class="card-preview">
    <div class="timeline-breadcrumb">
      <span class="active">Discover</span>
      <span class="active">Design</span>
      <span>Develop</span>
      <span>Launch</span>
    </div>
  </div>

  <div class="card-body">
    <h3>Timeline Breadcrumb</h3>
    <p>Roadmap style navigation system.</p>
  </div>
</article>


<article class="component-card">
  <div class="card-preview">
    <nav class="ribbon-breadcrumb">
      <a href="#">Home</a>
      <a href="#">Marketplace</a>
      <span>Premium UI</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Ribbon Breadcrumb</h3>
    <p>Gradient ribbon segments with modern styling.</p>
  </div>
</article>


<article class="component-card">
  <div class="card-preview">
    <nav class="avatar-breadcrumb">
      <img src="avatar.jpg" alt="">
      <a href="#">Team</a>
      <i class="fa-solid fa-angle-right"></i>
      <a href="#">Marketing</a>
      <i class="fa-solid fa-angle-right"></i>
      <span>Campaigns</span>
    </nav>
  </div>

  <div class="card-body">
    <h3>Team Breadcrumb</h3>
    <p>Workspace navigation with avatars.</p>
  </div>
</article>


<section class="breadcrumb-search">
  <input
    type="search"
    placeholder="Search breadcrumb components..."
    id="componentSearch"
  >
</section>
      <article class="component-card" data-name="underline breadcrumb">
        <div class="card-preview underline-preview">
          <nav aria-label="Breadcrumb"  class="trail underline-trail" aria-label="Breadcrumb">
        <div class="card-preview">
          <nav class="trail chevron-card" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <a href="#">Workspace</a>
            <a href="#">Projects</a>
            <span>Dashboard</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Chevron Card Breadcrumb</h3>
          <p>Connected chevron blocks for enterprise dashboards.</p>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview dark-preview">
          <nav class="trail neon-breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <i class="fa-solid fa-bolt"></i>
            <a href="#">Design</a>
            <i class="fa-solid fa-bolt"></i>
            <span>UI Kit</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Neon Breadcrumb</h3>
          <p>Cyberpunk inspired glowing breadcrumb trail.</p>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview">
          <nav class="checkout-breadcrumb">
            <span class="done">Cart</span>
            <span class="done">Shipping</span>
            <span class="active">Payment</span>
            <span>Complete</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Checkout Progress</h3>
          <p>Perfect for ecommerce checkout flows.</p>
        </div>
      </article>


      <article class="component-card">
        <div class="card-preview">
          <nav class="folder-path">
            <i class="fa-solid fa-folder"></i>
            <a href="#">Projects</a>
            /
            <a href="#">React</a>
            /
            <a href="#">Dashboard</a>
            /
            <span>src</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Folder Path</h3>
          <p>File explorer inspired breadcrumb navigation.</p>
        </div>
      </article>


      <article class="component-card">
        <div class="card-preview">
          <div class="timeline-breadcrumb">
            <span class="active">Discover</span>
            <span class="active">Design</span>
            <span>Develop</span>
            <span>Launch</span>
          </div>
        </div>

        <div class="card-body">
          <h3>Timeline Breadcrumb</h3>
          <p>Roadmap style navigation system.</p>
        </div>
      </article>


      <article class="component-card">
        <div class="card-preview">
          <nav class="ribbon-breadcrumb">
            <a href="#">Home</a>
            <a href="#">Marketplace</a>
            <span>Premium UI</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Ribbon Breadcrumb</h3>
          <p>Gradient ribbon segments with modern styling.</p>
        </div>
      </article>


      <article class="component-card">
        <div class="card-preview">
          <nav class="avatar-breadcrumb">
            <img src="avatar.jpg" alt="">
            <a href="#">Team</a>
            <i class="fa-solid fa-angle-right"></i>
            <a href="#">Marketing</a>
            <i class="fa-solid fa-angle-right"></i>
            <span>Campaigns</span>
          </nav>
        </div>

        <div class="card-body">
          <h3>Team Breadcrumb</h3>
          <p>Workspace navigation with avatars.</p>
        </div>
      </article>


      <section class="breadcrumb-search">
        <input type="search" placeholder="Search breadcrumb components..." id="componentSearch">
      </section>
      <article class="component-card" data-name="underline breadcrumb">
        <div class="card-preview underline-preview">
          <nav aria-label="Breadcrumb" class="trail underline-trail" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <a href="files.html">Assets</a>
            <i class="fa-solid fa-chevron-right"></i>
            <span>Uploads</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Underline Breadcrumb</h3>
          <p>Minimal links with hover underlines for lightweight layouts.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc3', this)">View code</button>
            <button onclick="copyCode('bc3', this)">Copy code</button>
          </div>
          <pre id="bc3" class="code-block"><code>&lt;a href="files.html"&gt;Assets&lt;/a&gt;
&lt;span&gt;Uploads&lt;/span&gt;</code></pre>
        </div>
      </article>


      <section class="stats-bar">

  <div class="stat">
    <h3>15+</h3>
    <span>Breadcrumb Styles</span>
  </div>

  <div class="stat">
    <h3>100%</h3>
    <span>Responsive</span>
  </div>

  <div class="stat">
    <h3>Pure</h3>
    <span>HTML CSS JS</span>
  </div>

<!-- ===================================
        <div class="stat">
          <h3>15+</h3>
          <span>Breadcrumb Styles</span>
        </div>

        <div class="stat">
          <h3>100%</h3>
          <span>Responsive</span>
        </div>

        <div class="stat">
          <h3>Pure</h3>
          <span>HTML CSS JS</span>
        </div>

        <!-- ===================================
NAVBAR

<header class="navbar">

<div class="nav-container">

<div class="logo">

<div class="logo-icon">

⬡

</div>

<span>

UIverse

</span>

</div>

<nav class="nav-links">

<a href="index.html">

Home

</a>

<a href="cards.html">

Cards

</a>

<a href="breadcrumbs.html"
class="active">

Breadcrumbs

</a>

</nav>

</div>

</header>

<!-- ===================================
HERO

<section class="hero">

<div class="hero-content">

<div class="hero-badge">

🧭 Reusable Breadcrumb Navigation

</div>

<h1>

Premium Breadcrumb
Components For
Modern Interfaces

</h1>

<p>

Explore beautiful breadcrumb
patterns for dashboards,
ecommerce websites,
admin panels and modern
web applications.

</p>

<div class="hero-tags">

<span>
12 Components
</span>

<span>
HTML CSS JS
</span>

<span>
Responsive
</span>

</div>

</div>

</section>

<!-- ===================================
STATS
=================================== -->

        <section class="stats-section">

          <div class="stats-grid">

            <div class="stat-card">

              <h3>

                12+

              </h3>

              <p>

                Components

              </p>

            </div>

            <div class="stat-card">

              <h3>

                100%

              </h3>

              <p>

                Responsive

              </p>

            </div>

            <div class="stat-card">

              <h3>

                Pure

              </h3>

              <p>

                HTML CSS JS

              </p>

            </div>

            <div class="stat-card">

              <h3>

                UIverse

              </h3>

              <p>

                Design System

              </p>

            </div>

          </div>

        </section>

        <!-- ===================================
SEARCH
=================================== -->

        <section class="search-section">

          <input type="text" id="searchInput" placeholder="Search breadcrumb components...">

        </section>

        <!-- ===================================
COMPONENT GRID
=================================== -->

        <section class="breadcrumb-grid">
          <!-- ===================================
COMPONENT 1
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Simple Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb">

              <a href="#">Home</a>

              <span>/</span>

              <a href="#">Dashboard</a>

              <span>/</span>

              <span class="current">
                Analytics
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 2
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Arrow Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb arrow">

              <a href="#">Home</a>

              <i class="fa-solid fa-chevron-right"></i>

              <a href="#">Products</a>

              <i class="fa-solid fa-chevron-right"></i>

              <span class="current">
                Details
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 3
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Pill Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb pill">

              <a href="#">Home</a>

              <a href="#">Components</a>

              <span class="current">
                Breadcrumbs
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 4
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Icon Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb icon">

              <a href="#">
                <i class="fa-solid fa-house"></i>
                Home
              </a>

              <span>/</span>

              <a href="#">
                <i class="fa-solid fa-layer-group"></i>
                UI
              </a>

              <span>/</span>

              <span class="current">
                Cards
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 5
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Glass Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb glass">

              <a href="#">Home</a>

              <span>→</span>

              <a href="#">Design</a>

              <span>→</span>

              <span class="current">
                Gallery
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 6
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Gradient Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb gradient">

              <a href="#">Home</a>

              <span>/</span>

              <a href="#">Store</a>

              <span>/</span>

              <span class="current">
                Checkout
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 7
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Minimal Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb minimal">

              <a href="#">Home</a>

              <span>•</span>

              <a href="#">Blog</a>

              <span>•</span>

              <span class="current">
                Article
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 8
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Rounded Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb rounded">

              <a href="#">Home</a>

              <a href="#">Account</a>

              <span class="current">
                Settings
              </span>

            </nav>

          </div>
          <!-- ===================================
COMPONENT 9
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Admin Dashboard
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb admin">

              <a href="#">Dashboard</a>

              <span>/</span>

              <a href="#">Users</a>

              <span>/</span>

              <a href="#">Profile</a>

              <span>/</span>

              <span class="current">
                Edit
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 10
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                E-Commerce
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb ecommerce">

              <a href="#">Home</a>

              <span>></span>

              <a href="#">Electronics</a>

              <span>></span>

              <a href="#">Laptops</a>

              <span>></span>

              <span class="current">
                MacBook Pro
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 11
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Neon Breadcrumb
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb neon">

              <a href="#">Home</a>

              <span>/</span>

              <a href="#">Projects</a>

              <span>/</span>

              <span class="current">
                UIverse
              </span>

            </nav>

          </div>

          <!-- ===================================
COMPONENT 12
=================================== -->

          <div class="component-card">

            <div class="card-header">

              <h3>
                Premium Glass
              </h3>

              <button class="copy-btn">
                Copy
              </button>

            </div>

            <nav class="breadcrumb premium">

              <a href="#">Home</a>

              <span>→</span>

              <a href="#">Workspace</a>

              <span>→</span>

              <span class="current">
                Analytics
              </span>

            </nav>

          </div>

        </section>

        <!-- ===================================
NEWSLETTER
=================================== -->

        <section class="newsletter">

          <div class="newsletter-card">

            <h2>

              Stay Updated

            </h2>

            <p>

              Get new UI components,
              design systems and frontend
              resources delivered weekly.

            </p>

            <form>

              <input type="email" placeholder="your@email.com">

              <button>

                Subscribe

              </button>

            </form>

          </div>

        </section>

        <!-- ===================================
FOOTER
=================================== -->

        <footer class="footer">

          <div class="footer-container">

            <div class="footer-brand">

              <h2>

                ⬡ UIverse

              </h2>

              <p>

                Premium UI components
                for modern developers.

              </p>

            </div>

            <div class="footer-col">

              <h3>

                Explore

              </h3>

              <ul>

                <li><a href="#">Buttons</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Forms</a></li>
                <li><a href="#">Breadcrumbs</a></li>

              </ul>

            </div>

            <div class="footer-col">

              <h3>

                Resources

              </h3>

              <ul>

                <li><a href="#">Docs</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Contribute</a></li>

              </ul>

            </div>

            <div class="footer-col">

              <h3>

                Legal

              </h3>

              <ul>

                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">License</a></li>

              </ul>

            </div>

          </div>

          <div class="footer-bottom">

            <p>

              © 2026 UIverse.
              Built with ❤️ for developers.

            </p>

          </div>

        </footer>

  </div>

        

`
  })
};
