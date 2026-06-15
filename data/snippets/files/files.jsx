import React from 'react';

export default function files(){
  return (
    <>
      <div className="main-content">
      
      <header className="navbar" id="navbar">
        <button className="menu-toggle" onclick="toggleSidebar()" aria-label="Toggle Menu">
          <i className="fa-solid fa-bars"></i>
        </button>
      
        <div className="logo">UIverse</div>
      
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input type="text" id="searchInput" placeholder="Search components..." onkeydown="handleSearch(event)" />
          <kbd className="search-kbd">⌘K</kbd>
        </div>
      
        <div className="nav-right">
          <button className="nav-btn outline-nav-btn">
            <i className="fa-solid fa-plus"></i> Add Component
          </button>
          <a href="contributorss.html">
          <button className="nav-btn primary-nav-btn">
            Contributors
          </button>
          </a>
          <button id="darkModeToggle" className="theme-toggle" title="Toggle Theme">
            <i className="fa-solid fa-moon"></i>
          </button>
        </div>
      </header>
        {/* HERO */}
      
        <div className="page-hero">
          <div className="page-hero-left">
            <div className="breadcrumb">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right"></i>
              <span>Drag & Drop</span>
            </div>
            <h1 className="page-title">File Uploads</h1>
            <p className="page-desc">Modern drag-and-drop upload components with clean layouts, smooth interactions, and responsive design.</p>
            <div className="page-meta">
              <span className="meta-badge"><i className="fa-solid fa-tags"></i> 12 Components</span>
              <span className="meta-badge"><i className="fa-solid fa-bolt"></i> Pure HTML/CSS/JS</span>
              <span className="meta-badge"><i className="fa-solid fa-mobile-screen-button"></i> Responsive</span>
            </div>
          </div>
        </div>
      
        {/* FILTERS */}
      
        <div className="filter-bar" style="margin-top: 30px; margin-bottom: 30px;">
          <div className="filter-bar-left">
            <button className="filter-btn active" onclick="filterUploads('all', this)">All Uploads</button>
            <button className="filter-btn" onclick="filterUploads('simple', this)">Simple</button>
            <button className="filter-btn" onclick="filterUploads('gradient', this)">Gradient</button>
            <button className="filter-btn" onclick="filterUploads('premium', this)">Premium</button>
          </div>
          <div className="filter-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search uploads..." oninput="liveFilter(this.value)" />
          </div>
        </div>
        {/* ================= SIDEBAR ================= */}
      <aside className="sidebar" id="sidebar">
        <div className="sidebar-brand">
          <span className="brand-icon">⬡</span>
          <span className="brand-text">UIverse <span style="font-size: 9px; background: linear-gradient(135deg, #eb6835, #7b61ff); color: white; padding: 1px 6px; border-radius: 10px; font-weight: 800; margin-left: 4px; letter-spacing: 0.5px; vertical-align: middle; box-shadow: 0 0 8px rgba(235,104,53,0.3);">V2</span></span>
        </div>
      
                <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="index.html">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="button.html">
                <i className="fa-solid fa-hand-pointer"></i>
                <span>Buttons</span>
              </a>
            </li>
                  <li>
              <a href="dropdown-components.html">
                <i className="fa-solid fa-caret-down"></i>
                <span>Dropdowns</span>
              </a>
            </li>
            <li>
              <a href="profile-components.html">
                <i className="fa-solid fa-user"></i>
                <span>Profiles</span>
              </a>
            </li>
      <li>
              <a href="navbar.html">
                <i className="fa-solid fa-bars"></i>
                <span>Navbar</span>
              </a>
            </li>
            <li>
              <a href="cards.html">
                <i className="fa-solid fa-table-cells-large"></i>
                <span>Cards</span>
              </a>
            </li>
            <li>
              <a href="flipcards.html">
                <i className="fa-solid fa-clone"></i>
                <span>3D Cards</span>
              </a>
            </li>
            <li>
              <a href="inputs.html">
                <i className="fa-solid fa-keyboard"></i>
                <span>Inputs</span>
              </a>
            </li>
            <li>
              <a href="forms.html">
                <i className="fa-brands fa-wpforms"></i>
                <span>Forms</span>
              </a>
            </li>
            <li>
              <a href="badges.html">
                <i className="fa-solid fa-award"></i>
                <span>Badges</span>
              </a>
            </li>
            <li>
              <a href="blog.html">
                <i className="fa-solid fa-blog"></i>
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="article.html">
                <i className="fa-solid fa-newspaper"></i>
                <span>Articles</span>
              </a>
            </li>
            <li>
              <a href="alerts.html">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>Alerts</span>
              </a>
            </li>
            <li>
              <a href="color.html">
                <i className="fa-solid fa-palette"></i>
                <span>Colors</span>
              </a>
            </li>
            <li>
              <a href="charts.html">
                <i className="fa-solid fa-chart-pie"></i>
                <span>Charts</span>
              </a>
            </li>
            <li>
              <a href="dashboard.html">
                <i className="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="div.html">
                <i className="fa-solid fa-square"></i>
                <span>DIV</span>
              </a>
            </li>
            <li>
              <a href="widgets.html">
                <i className="fa-solid fa-layer-group"></i>
                <span>Widgets</span>
              </a>
            </li>
            <li>
              <a href="search.html">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search Bars</span>
              </a>
            </li>
            <li>
              <a href="hover.html">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <span>Hover Effects</span>
              </a>
            </li>
            <li>
              <a href="error.html">
                <i className="fa-solid fa-circle-exclamation"></i>
                <span>Error Pages</span>
              </a>
            </li>
            <li>
              <a href="ecommerce.html">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>E-commerce</span>
              </a>
            </li>
            <li className="active">
              <a href="files.html">
                <i className="fa-solid fa-file-arrow-up"></i>
                <span>Drag & Drop</span>
              </a>
            </li>
            <li>
              <a href="hero.html">
                <i className="fa-solid fa-star"></i>
                <span>Hero Sections</span>
              </a>
            </li>
            <li>
              <a href="loaders.html">
                <i className="fa-solid fa-spinner"></i>
                <span>Loaders</span>
              </a>
            </li>
            <li>
              <a href="timeline.html">
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span>Timeline</span>
              </a>
            </li>
            <li>
              <a href="map.html">
                <i className="fa-solid fa-map-location-dot"></i>
                <span>Maps</span>
              </a>
            </li>
            <li>
              <a href="menu.html">
                <i className="fa-solid fa-bars-staggered"></i>
                <span>Menu</span>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <i className="fa-solid fa-tags"></i>
                <span>Pricing</span>
              </a>
            </li>
            <li>
              <a href="subscription.html">
                <i className="fa-solid fa-credit-card"></i>
                <span>Subscription</span>
              </a>
            </li>
            <li>
              <a href="auth.html">
                <i className="fa-solid fa-user-shield"></i>
                <span>Authentication</span>
              </a>
            </li>
              <li>
                <a href="recovery.html">
                  <i className="fa-solid fa-key" aria-hidden="true"></i>
                  <span>Password Recovery</span>
                </a>
              </li>
            <li>
              <a href="section.html">
                <i className="fa-solid fa-rectangle-list"></i>
                <span>Section</span>
              </a>
            </li>
            <li>
              <a href="span.html">
                <i className="fa-solid fa-code"></i>
                <span>Span</span>
              </a>
            </li>
            <li>
              <a href="table.html">
                <i className="fa-solid fa-table"></i>
                <span>Table</span>
              </a>
            </li>
            <li>
              <a href="tabs.html">
                <i className="fa-solid fa-table-columns"></i>
                <span>Tabs</span>
              </a>
            </li>
            <li>
              <a href="terms.html">
                <i className="fa-solid fa-file-contract"></i>
                <span>Terms</span>
              </a>
            </li>
            <li>
              <a href="testimonials.html">
                <i className="fa-solid fa-comments"></i>
                <span>Testimonials</span>
              </a>
            </li>
            <li>
              <a href="toggles.html">
                <i className="fa-solid fa-toggle-on"></i>
                <span>Toggle</span>
              </a>
            </li>
            <li>
              <a href="radiobutton.html">
                <i className="fa-solid fa-circle-dot"></i>
                <span>Radio Buttons</span>
              </a>
            </li>
            <li>
              <a href="checkbox.html">
                <i className="fa-solid fa-square-check"></i>
                <span>Checkboxes</span>
              </a>
            </li>
            <li>
              <a href="notifications-premium.html">
                <i className="fa-solid fa-bell"></i>
                <span>Notifications V2</span>
              </a>
            </li>
            <li>
              <a href="step-indicators.html">
                <i className="fa-solid fa-list-check"></i>
                <span>Steppers</span>
              </a>
            </li>
            <li>
              <a href="progress-premium.html">
                <i className="fa-solid fa-bars-progress"></i>
                <span>Progress V2</span>
              </a>
            </li>
            <li>
              <a href="ratings-premium.html">
                <i className="fa-solid fa-star"></i>
                <span>Ratings V2</span>
              </a>
            </li>
            <li>
              <a href="filters-premium.html">
                <i className="fa-solid fa-sliders"></i>
                <span>Filters V2</span>
              </a>
            </li>
            <li>
              <a href="admin-panel.html">
                <i className="fa-solid fa-gauge-high"></i>
                <span>Admin Panel V2</span>
              </a>
            </li>
      <li>
              <a href="about.html">
                <i className="fa-solid fa-circle-info"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="documentation.html">
                <i className="fa-solid fa-book"></i>
                <span>Documentation</span>
              </a>
            </li>
            <li>
              <a href="faq.html">
                <i className="fa-solid fa-circle-question"></i>
                <span>Faq</span>
              </a>
            </li>
            <li>
              <a href="contact.html">
                <i className="fa-regular fa-envelope"></i>
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* ================= SIDEBAR BACKDROP ================= */}
      <div className="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleSidebar()"></div>
      
      
        {/* COMPONENT GRID */}
      
        <section className="upload-grid">
      
          {/* CARD 1 */}
      
          <div className="upload-card" data-name="simple upload drag drop file input" data-cat="simple">
      
            <div className="card-preview">
      
              <div className="upload-box" id="uploadBox">
      
                <input type="file" id="fileInput" hidden multiple />
      
                <div className="upload-icon">⬆</div>
      
                <h3>Drag & Drop Files</h3>
      
                <p>or click to browse</p>
      
                <button>Select Files</button>
      
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Simple Upload</h3>
                <span className="card-tag tag-essential">Popular</span>
              </div>
      
              <p>
                Clean upload component with drag-and-drop support and smooth hover effects.
              </p>
      
              <div className="actions">
      
                <button className="action-btn view-btn" onclick="toggleCode('code-simple-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-simple-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
      
              </div>
      
              <pre className="code-block" id="code-simple-upload"><code>&lt;div className="upload-box" id="uploadBox"&gt;
        &lt;input type="file" id="fileInput" hidden multiple&gt;
        &lt;div className="upload-icon"&gt;⬆&lt;/div&gt;
        &lt;h3&gt;Drag &amp; Drop Files&lt;/h3&gt;
        &lt;p&gt;or click to browse&lt;/p&gt;
        &lt;button&gt;Select Files&lt;/button&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 2 */}
      
          <div className="upload-card glass-card" data-name="glass upload modern glassmorphism blur background frosted" data-cat="simple">
      
            <div className="card-preview">
      
              <div className="upload-box glass-upload">
      
                <div className="upload-icon">☁</div>
      
                <h3>Glass Upload</h3>
      
                <p>Modern glassmorphism style</p>
      
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Glass Upload</h3>
                <span className="card-tag tag-trending">Trending</span>
              </div>
      
              <p>
                Frosted glass upload area with smooth blur background effects.
              </p>
      
              <div className="actions">
      
                <button className="action-btn view-btn" onclick="toggleCode('code-glass-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-glass-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
      
              </div>
      
              <pre className="code-block" id="code-glass-upload"><code>&lt;div className="upload-box glass-upload"&gt;
        &lt;div className="upload-icon"&gt;☁&lt;/div&gt;
        &lt;h3&gt;Glass Upload&lt;/h3&gt;
        &lt;p&gt;Modern glassmorphism style&lt;/p&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 3 */}
      
          <div className="upload-card gradient-card" data-name="gradient upload vibrant animated border modern" data-cat="gradient">
      
            <div className="card-preview">
      
              <div className="upload-box gradient-upload">
      
                <div className="upload-icon">✦</div>
      
                <h3>Gradient Upload</h3>
      
                <p>Animated gradient border</p>
      
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Gradient Upload</h3>
                <span className="card-tag tag-new">New</span>
              </div>
      
              <p>
                Vibrant upload component with animated modern gradients.
              </p>
      
              <div className="actions">
      
                <button className="action-btn view-btn" onclick="toggleCode('code-gradient-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-gradient-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
      
              </div>
      
              <pre className="code-block" id="code-gradient-upload"><code>&lt;div className="upload-box gradient-upload"&gt;
        &lt;div className="upload-icon"&gt;✦&lt;/div&gt;
        &lt;h3&gt;Gradient Upload&lt;/h3&gt;
        &lt;p&gt;Animated gradient border&lt;/p&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 4 */}
      
          <div className="upload-card neon-card" data-name="neon upload cyberpunk glowing glow neon" data-cat="gradient">
      
            <div className="card-preview">
      
              <div className="upload-box neon-upload">
                <div className="upload-icon">⚡</div>
                <h3>Neon Upload</h3>
                <p>Cyberpunk glowing effect</p>
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Neon Upload</h3>
                <span className="card-tag tag-trending">Hot</span>
              </div>
      
              <p>
                Futuristic glowing upload box with animated neon borders.
              </p>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('code-neon-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-neon-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre className="code-block" id="code-neon-upload"><code>&lt;div className="upload-box neon-upload"&gt;
        &lt;div className="upload-icon"&gt;⚡&lt;/div&gt;
        &lt;h3&gt;Neon Upload&lt;/h3&gt;
        &lt;p&gt;Cyberpunk glowing effect&lt;/p&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 5 */}
      
          <div className="upload-card" data-name="dashed upload minimal clean style lightweight" data-cat="simple">
      
            <div className="card-preview">
      
              <div className="upload-box dashed-upload">
                <div className="upload-icon">📁</div>
                <h3>Dashed Upload</h3>
                <p>Minimal clean style</p>
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Dashed Upload</h3>
                <span className="card-tag tag-essential">Minimal</span>
              </div>
      
              <p>
                Lightweight upload area with modern dashed border styling.
              </p>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('code-dashed-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-dashed-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre className="code-block" id="code-dashed-upload"><code>&lt;div className="upload-box dashed-upload"&gt;
        &lt;div className="upload-icon"&gt;📁&lt;/div&gt;
        &lt;h3&gt;Dashed Upload&lt;/h3&gt;
        &lt;p&gt;Minimal clean style&lt;/p&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 6 */}
      
          <div className="upload-card floating-card" data-name="floating upload animation hover soft" data-cat="simple">
      
            <div className="card-preview">
      
              <div className="upload-box floating-upload">
                <div className="upload-icon">🪄</div>
                <h3>Floating Upload</h3>
                <p>Soft floating animation</p>
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Floating Upload</h3>
                <span className="card-tag tag-new">Animated</span>
              </div>
      
              <p>
                Upload card with smooth floating hover animation effect.
              </p>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('code-floating-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-floating-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre className="code-block" id="code-floating-upload"><code>&lt;div className="upload-box floating-upload"&gt;
        &lt;div className="upload-icon"&gt;🪄&lt;/div&gt;
        &lt;h3&gt;Floating Upload&lt;/h3&gt;
        &lt;p&gt;Soft floating animation&lt;/p&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 7 */}
      
          <div className="upload-card dark-card" data-name="dark upload elegant interface dashboard theme" data-cat="premium">
      
            <div className="card-preview">
      
              <div className="upload-box dark-upload">
                <div className="upload-icon">🌙</div>
                <h3>Dark Upload</h3>
                <p>Elegant dark interface</p>
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Dark Upload</h3>
                <span className="card-tag tag-essential">Dark UI</span>
              </div>
      
              <p>
                Professional dark themed upload component for dashboards.
              </p>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('code-dark-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-dark-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre className="code-block" id="code-dark-upload"><code>&lt;div className="upload-box dark-upload"&gt;
        &lt;div className="upload-icon"&gt;🌙&lt;/div&gt;
        &lt;h3&gt;Dark Upload&lt;/h3&gt;
        &lt;p&gt;Elegant dark interface&lt;/p&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 8 */}
      
          <div className="upload-card preview-card" data-name="image upload preview circular avatar gallery profile" data-cat="simple">
      
            <div className="card-preview">
      
              <div className="upload-box image-upload">
                <div className="preview-circle">🖼</div>
                <h3>Image Preview</h3>
                <p>Preview selected images</p>
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Image Upload</h3>
                <span className="card-tag tag-essential">Useful</span>
              </div>
      
              <p>
                Upload component designed for profile and gallery images.
              </p>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('code-image-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-image-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre className="code-block" id="code-image-upload"><code>&lt;div className="upload-box image-upload"&gt;
        &lt;div className="preview-circle"&gt;🖼&lt;/div&gt;
        &lt;h3&gt;Image Preview&lt;/h3&gt;
        &lt;p&gt;Preview selected images&lt;/p&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 9 */}
      
          <div className="upload-card progress-card" data-name="progress upload animated status updates timeline indicator" data-cat="premium">
      
            <div className="card-preview">
      
              <div className="upload-box progress-upload">
      
                <div className="upload-icon">🚀</div>
      
                <h3>Progress Upload</h3>
      
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
      
                <p>Uploading files...</p>
      
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Progress Upload</h3>
                <span className="card-tag tag-trending">Advanced</span>
              </div>
      
              <p>
                Upload UI with animated progress indicator and status updates.
              </p>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('code-progress-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-progress-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre className="code-block" id="code-progress-upload"><code>&lt;div className="upload-box progress-upload"&gt;
        &lt;div className="upload-icon"&gt;🚀&lt;/div&gt;
        &lt;h3&gt;Progress Upload&lt;/h3&gt;
        &lt;div className="progress-bar"&gt;
          &lt;div className="progress-fill"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;p&gt;Uploading files...&lt;/p&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 10 (NEW): Aurora Mesh Gradient Dropzone */}
      
          <div className="upload-card" data-name="aurora mesh gradient glassmorphism float upload dropzone" data-cat="gradient">
      
            <div className="card-preview">
      
              <div className="upload-box aurora-upload">
                <div className="aurora-bg"></div>
                <div className="aurora-content">
                  <div className="upload-icon">🌈</div>
                  <h3>Aurora Upload</h3>
                  <p>Animated mesh background</p>
                </div>
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Aurora Gradient</h3>
                <span className="card-tag tag-new">Brand New</span>
              </div>
      
              <p>
                Dynamic glowing mesh gradient behind frosted glass overlay with micro-interactions.
              </p>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('code-aurora-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-aurora-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre className="code-block" id="code-aurora-upload"><code>&lt;div className="upload-box aurora-upload"&gt;
        &lt;div className="aurora-bg"&gt;&lt;/div&gt;
        &lt;div className="aurora-content"&gt;
          &lt;div className="upload-icon"&gt;🌈&lt;/div&gt;
          &lt;h3&gt;Aurora Upload&lt;/h3&gt;
          &lt;p&gt;Animated mesh background&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 11 (NEW): Secure Biometric Upload */}
      
          <div className="upload-card" data-name="secure biometric scanning fingerprint shield laser encrypted" data-cat="premium">
      
            <div className="card-preview dark-preview">
      
              <div className="upload-box biometric-upload">
                <div className="scan-grid"></div>
                <div className="scan-laser"></div>
                <div className="upload-icon security-icon">🛡️</div>
                <h3>Secure Upload</h3>
                <p>AES-256 Encrypted Transfer</p>
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>Secure Encrypted</h3>
                <span className="card-tag tag-new">Brand New</span>
              </div>
      
              <p>
                Cybersecurity-themed upload zone with active laser scanning overlay and neon accents.
              </p>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('code-biometric-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-biometric-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre className="code-block" id="code-biometric-upload"><code>&lt;div className="upload-box biometric-upload"&gt;
        &lt;div className="scan-grid"&gt;&lt;/div&gt;
        &lt;div className="scan-laser"&gt;&lt;/div&gt;
        &lt;div className="upload-icon security-icon"&gt;🛡️&lt;/div&gt;
        &lt;h3&gt;Secure Upload&lt;/h3&gt;
        &lt;p&gt;AES-256 Encrypted Transfer&lt;/p&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
      
          {/* CARD 12 (NEW): Minimalist Stack / List Upload */}
      
          <div className="upload-card" data-name="minimalist stack list folder documents item queue" data-cat="simple">
      
            <div className="card-preview">
      
              <div className="upload-box stack-upload">
                <div className="mini-dropzone">
                  <span className="mini-dropzone-icon"><i className="fa-solid fa-cloud-arrow-up"></i></span>
                  <span>Drag items here</span>
                </div>
                <div className="file-stack-list">
                  <div className="file-stack-item">
                    <span className="file-item-icon text-pdf"><i className="fa-solid fa-file-pdf"></i></span>
                    <div className="file-item-details">
                      <span className="file-item-name">invoice_may_2026.pdf</span>
                      <span className="file-item-size">1.4 MB • Complete</span>
                    </div>
                    <span className="file-item-status status-check"><i className="fa-solid fa-circle-check"></i></span>
                  </div>
                  <div className="file-stack-item loading">
                    <span className="file-item-icon text-img"><i className="fa-solid fa-file-image"></i></span>
                    <div className="file-item-details">
                      <span className="file-item-name">profile_photo.png</span>
                      <span className="file-item-size">4.2 MB • 65% uploaded</span>
                    </div>
                    <span className="file-item-status spinner-ring-mini"></span>
                  </div>
                </div>
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
                <h3>File Stack Queue</h3>
                <span className="card-tag tag-new">Brand New</span>
              </div>
      
              <p>
                A compact drag-and-drop widget showcasing file uploading states and completion marks.
              </p>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('code-stack-upload', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('code-stack-upload', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre className="code-block" id="code-stack-upload"><code>&lt;div className="upload-box stack-upload"&gt;
        &lt;div className="mini-dropzone"&gt;
          &lt;span className="mini-dropzone-icon"&gt;&lt;i className="fa-solid fa-cloud-arrow-up"&gt;&lt;/i&gt;&lt;/span&gt;
          &lt;span&gt;Drag items here&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="file-stack-list"&gt;
          &lt;div className="file-stack-item"&gt;
            &lt;span className="file-item-icon text-pdf"&gt;&lt;i className="fa-solid fa-file-pdf"&gt;&lt;/i&gt;&lt;/span&gt;
            &lt;div className="file-item-details"&gt;
              &lt;span className="file-item-name"&gt;invoice_may_2026.pdf&lt;/span&gt;
              &lt;span className="file-item-size"&gt;1.4 MB • Complete&lt;/span&gt;
            &lt;/div&gt;
            &lt;span className="file-item-status status-check"&gt;&lt;i className="fa-solid fa-circle-check"&gt;&lt;/i&gt;&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      
            </div>
      
          </div>
        
        </section>
      
      </div>
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col brand">
            <h2 className="footer-logo">⬡ UIverse</h2>
            <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
            <div className="socials">
              <a href="https://github.com" target="_blank"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com" target="_blank"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Explore</h3>
            <ul>
              <li><a href="button.html">Buttons</a></li>
              <li><a href="navbar.html">Navbars</a></li>
              <li><a href="cards.html">Cards</a></li>
              <li><a href="inputs.html">Inputs</a></li>
              <li><a href="forms.html">Forms</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">GitHub Repo</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li><a href="privacypolicy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-col newsletter">
            <h3>Stay Updated</h3>
            <p>Get notified when new components drop.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="your@email.com" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
        </div>
      </footer>
      
      
      <script>
        /* ---------- Dark Mode Toggle ---------- */
        const toggle = document.getElementById('darkModeToggle');
        const icon = toggle.querySelector('i');
        if (localStorage.getItem('theme') === 'dark') {
          document.body.classList.add('dark-mode');
          icon.className = 'fa-solid fa-sun';
        }
        toggle.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
          const isDark = document.body.classList.contains('dark-mode');
          icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
      
        /* ---------- Sidebar Control ---------- */
        function toggleSidebar() {
          document.getElementById('sidebar').classList.toggle('open');
          document.getElementById('sidebarBackdrop').classList.toggle('visible');
        }
      
        /* ---------- Code Toggle ---------- */
        function toggleCode(id, btn) {
          const block = document.getElementById(id);
          const isOpen = block.classList.toggle('open');
          btn.innerHTML = isOpen
            ? '<i className="fa-solid fa-eye-slash"></i> Hide Code'
            : '<i className="fa-solid fa-code"></i> View Code';
        }
      
        /* ---------- Copy Code ---------- */
        function copyCode(id, btn) {
          const text = document.getElementById(id).innerText;
          navigator.clipboard.writeText(text).then(() => {
            btn.innerHTML = '<i className="fa-solid fa-check"></i> Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
              btn.innerHTML = '<i className="fa-solid fa-copy"></i> Copy';
              btn.classList.remove('copied');
            }, 2000);
          });
        }
      
        /* ---------- Filter Uploads ---------- */
        function filterUploads(cat, btn) {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          document.querySelectorAll('.upload-card').forEach(card => {
            card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
          });
        }
      
        /* ---------- Live Search ---------- */
        function liveFilter(val) {
          const q = val.toLowerCase();
          document.querySelectorAll('.upload-card').forEach(card => {
            const name = card.dataset.name || '';
            const textNode = card.querySelector('.card-top h3')?.textContent || '';
            const match = name.toLowerCase().includes(q) || textNode.toLowerCase().includes(q);
            card.style.display = match ? '' : 'none';
          });
        }
      
        /* ---------- Original File Drag and Drop ---------- */
        const uploadBox = document.getElementById("uploadBox");
        const fileInput = document.getElementById("fileInput");
      
        if (uploadBox && fileInput) {
          uploadBox.addEventListener("click", () => {
            fileInput.click();
          });
      
          uploadBox.addEventListener("dragover", (e) => {
            e.preventDefault();
            uploadBox.classList.add("dragging");
          });
      
          uploadBox.addEventListener("dragleave", () => {
            uploadBox.classList.remove("dragging");
          });
      
          uploadBox.addEventListener("drop", (e) => {
            e.preventDefault();
            uploadBox.classList.remove("dragging");
            const files = e.dataTransfer.files;
            if (files.length > 0) {
              uploadBox.querySelector("p").innerText = `${files.length} file(s) selected`;
            }
          });
      
          fileInput.addEventListener("change", () => {
            if (fileInput.files.length > 0) {
              uploadBox.querySelector("p").innerText = `${fileInput.files.length} file(s) selected`;
            }
          });
        }
      </script>
    </>
  );
}
