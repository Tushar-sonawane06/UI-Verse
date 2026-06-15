import React from 'react';

export default function flipcards(){
  return (
    <>
      {/* YOUR SIDEBAR HERE */}
      
      <div className="main-content">
      
        {/* TOPBAR */}
      
        <header className="topbar">
      
          <div className="search-box">
      
            <i className="fa-solid fa-magnifying-glass"></i>
      
            <input type="text" placeholder="Search components..." />
      
          </div>
      
          <div className="topbar-actions">
      
            <button className="add-btn">
              <i className="fa-solid fa-plus"></i>
              Add Component
            </button>
      
            <button className="collection-btn">
              My Collection
            </button>
      
            <button className="theme-btn">
              <i className="fa-solid fa-moon"></i>
            </button>
      
          </div>
      
        </header>
      
        {/* HERO */}
      
        <section className="hero">
      
          <div className="hero-left">
      
            <div className="breadcrumb">
              Home > 3D Cards
            </div>
      
            <h1>3D Flip Card Components</h1>
      
            <p>
              Interactive modern 3D flip card components with smooth hover
              animations and responsive layouts.
            </p>
      
            <div className="hero-tags">
      
              <span>
                <i className="fa-solid fa-layer-group"></i>
                11 Components
              </span>
      
              <span>
                <i className="fa-solid fa-code"></i>
                Pure HTML/CSS
              </span>
      
              <span>
                <i className="fa-solid fa-mobile-screen"></i>
                Responsive
              </span>
      
            </div>
      
          </div>
      
          <div className="hero-preview">
            <div className="hero-flip-container">
              <div className="hero-flip-inner">
                {/* Front */}
                <div className="hero-flip-front">
                  <div className="mini-profile-card">
                    <div className="mini-avatar">ST</div>
                    <div className="mini-profile-info">
                      <strong>saiteja</strong>
                      <span>Engineer · UIverse</span>
                    </div>
                  </div>
                  <div className="flip-hint"><i className="fa-solid fa-arrows-spin"></i> Hover to Flip</div>
                </div>
                {/* Back */}
                <div className="hero-flip-back">
                  <div className="mini-stat-row">
                    <div className="mini-stat">
                      <span>120+</span>
                      <p>Cards</p>
                    </div>
                    <div className="mini-stat">
                      <span>9</span>
                      <p>Styles</p>
                    </div>
                    <div className="mini-stat">
                      <span>100%</span>
                      <p>Free</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </section>
      
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
            <li className="active">
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
            <li>
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
      
        <div className="sidebar-footer">
          <a href="#" title="GitHub"><i className="fab fa-github"></i></a>
          <a href="#" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="#" title="Twitter"><i className="fab fa-x-twitter"></i></a>
        </div>
      </aside>
      
        {/* FILTERS */}
      
        <div className="filters">
      
          <button className="active">All</button>
          <button>Glass</button>
          <button>Gradient</button>
          <button>3D</button>
      
        </div>
      
        {/* COMPONENT GRID */}
      
        <section className="flip-grid">
      
          {/* CARD 1 */}
      
          <div className="component-card">
      
            <div className="card-preview">
      
              <div className="demo-flip-card">
      
                <div className="demo-inner">
      
                  <div className="demo-front">
                    Front
                  </div>
      
                  <div className="demo-back">
                    Back
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
      
                <h3>Glass Flip Card</h3>
      
                <span>Popular</span>
      
              </div>
      
              <p>
                Modern glassmorphism flip card with smooth hover interaction.
              </p>
      
              <div className="card-actions">
      
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
      
              </div>
      
            </div>
      
          </div>
      
          {/* CARD 2 */}
      
          <div className="component-card">
      
            <div className="card-preview">
      
              <div className="demo-flip-card">
      
                <div className="demo-inner">
      
                  <div className="demo-front">
                    Gradient
                  </div>
      
                  <div className="demo-back">
                    Hover
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
      
                <h3>Gradient Flip Card</h3>
      
                <span>Trending</span>
      
              </div>
      
              <p>
                Vibrant animated 3D flip card with gradient transitions.
              </p>
      
              <div className="card-actions">
      
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
      
              </div>
      
            </div>
      
          </div>
      
          {/* CARD 3 */}
      
          <div className="component-card">
      
            <div className="card-preview">
      
              <div className="demo-flip-card">
      
                <div className="demo-inner">
      
                  <div className="demo-front">
                    Neon
                  </div>
      
                  <div className="demo-back">
                    Glow
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
      
                <h3>Neon 3D Card</h3>
      
                <span>Premium</span>
      
              </div>
      
              <p>
                Futuristic neon-style 3D flip card with glowing hover effects.
              </p>
      
              <div className="card-actions">
      
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
      
              </div>
      
            </div>
      
          </div>
      
          {/* CARD 4 */}
      
          <div className="component-card">
      
            <div className="card-preview">
      
              <div className="demo-flip-card">
      
                <div className="demo-inner">
      
                  <div className="demo-front">
                    3D
                  </div>
      
                  <div className="demo-back">
                    Card
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
            <div className="card-content">
      
              <div className="card-top">
      
                <h3>Modern 3D Card</h3>
      
                <span>New</span>
      
              </div>
      
              <p>
                Clean modern 3D card component with perspective hover animation.
              </p>
      
              <div className="card-actions">
      
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
      
              </div>
      
            </div>
      
          </div>
      
          {/* CARD 5: GLASSMORPHISM FLIP CARD */}
          <div className="component-card">
            <div className="card-preview">
              <div className="glass-flip-card">
                <div className="glass-flip-inner">
                  <div className="glass-flip-front">
                    <div className="glass-avatar"><i className="fa-solid fa-user-shield"></i></div>
                    <h4>Alex Rivera</h4>
                    <p>Security Officer</p>
                  </div>
                  <div className="glass-flip-back">
                    <h5>Access Level</h5>
                    <div className="access-badge">Admin</div>
                    <div className="back-links">
                      <a href="#"><i className="fa-brands fa-github"></i></a>
                      <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Glassmorphism Flip Card</h3>
                <span>New</span>
              </div>
              <p>Premium translucent glassmorphic flip card with smooth backface-visibility metrics.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 6: PRODUCT SHOWCASE FLIP CARD */}
          <div className="component-card">
            <div className="card-preview">
              <div className="product-flip-card">
                <div className="product-flip-inner">
                  <div className="product-flip-front">
                    <div className="product-icon"><i className="fa-solid fa-headphones-simple"></i></div>
                    <h4>Pro Sound X</h4>
                    <span className="product-price">$149</span>
                  </div>
                  <div className="product-flip-back">
                    <h5>Specs & Care</h5>
                    <ul>
                      <li>Active Noise Canceling</li>
                      <li>40h Battery Life</li>
                      <li>Hi-Res Wireless</li>
                    </ul>
                    <button className="buy-btn">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Product Showcase Flip</h3>
                <span>Trending</span>
              </div>
              <p>Futuristic e-commerce flip card featuring product outline and quick-action details.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 7: TEAM MEMBER FLIP CARD */}
          <div className="component-card">
            <div className="card-preview">
              <div className="team-flip-card">
                <div className="team-flip-inner">
                  <div className="team-flip-front">
                    <div className="team-avatar"><i className="fa-solid fa-code"></i></div>
                    <h4>Kai Sterling</h4>
                    <p>Principal Architect</p>
                  </div>
                  <div className="team-flip-back">
                    <h5>Top Skills</h5>
                    <div className="skill-tags">
                      <span>Rust</span>
                      <span>WebGL</span>
                      <span>Svelte</span>
                    </div>
                    <p className="bio-snippet">Pioneering telemetry UI components.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Team Member Flip</h3>
                <span>Essential</span>
              </div>
              <p>Creative team profile card with professional skills and credentials on rotation.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 8: PRICING PLAN FLIP CARD */}
          <div className="component-card">
            <div className="card-preview">
              <div className="pricing-flip-card">
                <div className="pricing-flip-inner">
                  <div className="pricing-flip-front">
                    <span className="plan-badge">PRO</span>
                    <h4>Enterprise Tier</h4>
                    <h3 className="plan-price">$49/mo</h3>
                  </div>
                  <div className="pricing-flip-back">
                    <h5>Included Features</h5>
                    <ul>
                      <li>Unlimited Sandbox</li>
                      <li>Dedicated Hosting</li>
                      <li>24/7 Priority Support</li>
                    </ul>
                    <button className="upgrade-btn">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Pricing Plan Flip</h3>
                <span>Popular</span>
              </div>
              <p>Polished corporate subscription card switching between tier metadata and highlights.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 9: NEON GLOW 3D FLIP CARD */}
          <div className="component-card">
            <div className="card-preview">
              <div className="neon-flip-card">
                <div className="neon-flip-inner">
                  <div className="neon-flip-front">
                    <div className="neon-icon"><i className="fa-solid fa-bolt-lightning"></i></div>
                    <h4>Holo Matrix</h4>
                    <span className="neon-tag">ACTIVE</span>
                  </div>
                  <div className="neon-flip-back">
                    <h5>Core Diagnostics</h5>
                    <div className="diagnostics">
                      <span>Shield: 98%</span>
                      <span>Core: Stable</span>
                    </div>
                    <button className="neon-action">Infiltrate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Neon Glow 3D Flip</h3>
                <span>Premium</span>
              </div>
              <p>Cyberpunk neon glow 3D flip card with double animated linear border highlights.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 10: MUSIC PLAYER FLIP CARD */}
          <div className="component-card">
            <div className="card-preview">
              <div className="music-flip-card">
                <div className="music-flip-inner">
                  <div className="music-flip-front">
                    <div className="album-art"><i className="fa-solid fa-music"></i></div>
                    <h4>Synthwave Mix</h4>
                    <p>Various Artists</p>
                  </div>
                  <div className="music-flip-back">
                    <div className="track-list">
                      <div>1. Neon Nights</div>
                      <div>2. Retro Grid</div>
                      <div>3. Cyber City</div>
                    </div>
                    <div className="music-controls">
                      <i className="fa-solid fa-backward-step"></i>
                      <i className="fa-solid fa-play"></i>
                      <i className="fa-solid fa-forward-step"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Music Player Flip</h3>
                <span>Creative</span>
              </div>
              <p>Interactive music album card that reveals tracklist and controls on hover.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 11: EVENT INVITE FLIP CARD */}
          <div className="component-card">
            <div className="card-preview">
              <div className="event-flip-card">
                <div className="event-flip-inner">
                  <div className="event-flip-front">
                    <div className="event-date">
                      <span className="day">24</span>
                      <span className="month">OCT</span>
                    </div>
                    <h4>Tech Meetup</h4>
                    <p>San Francisco, CA</p>
                  </div>
                  <div className="event-flip-back">
                    <h5>Agenda</h5>
                    <p>6:00 PM - Networking</p>
                    <p>7:00 PM - Keynote</p>
                    <button className="rsvp-btn">RSVP Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Event Invite Flip</h3>
                <span>Useful</span>
              </div>
              <p>Calendar style event card revealing schedule details and call-to-action on flip.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 12: RECIPE CARD FLIP */}
          <div className="component-card">
            <div className="card-preview">
              <div className="recipe-flip-card">
                <div className="recipe-flip-inner">
                  <div className="recipe-flip-front">
                    <div className="recipe-icon"><i className="fa-solid fa-pizza-slice"></i></div>
                    <h4>Artisan Pizza</h4>
                    <div className="recipe-meta">
                      <span><i className="fa-solid fa-clock"></i> 45m</span>
                      <span><i className="fa-solid fa-fire"></i> 320 cal</span>
                    </div>
                  </div>
                  <div className="recipe-flip-back">
                    <h5>Ingredients</h5>
                    <ul>
                      <li>Flour & Yeast</li>
                      <li>San Marzano Tomatoes</li>
                      <li>Fresh Mozzarella</li>
                    </ul>
                    <button className="cook-btn">View Recipe</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Recipe Card Flip</h3>
                <span>UI/UX</span>
              </div>
              <p>Food and recipe themed flip card showing quick stats upfront and ingredients on back.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 13: WEATHER WIDGET FLIP */}
          <div className="component-card">
            <div className="card-preview">
              <div className="weather-flip-card">
                <div className="weather-flip-inner">
                  <div className="weather-flip-front">
                    <i className="fa-solid fa-cloud-sun weather-icon"></i>
                    <h2>72°F</h2>
                    <p>Partly Cloudy</p>
                  </div>
                  <div className="weather-flip-back">
                    <h5>Forecast</h5>
                    <div className="forecast-row"><span>Mon</span> <span>74°</span></div>
                    <div className="forecast-row"><span>Tue</span> <span>70°</span></div>
                    <div className="forecast-row"><span>Wed</span> <span>68°</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Weather Widget Flip</h3>
                <span>Dynamic</span>
              </div>
              <p>Compact weather widget showing current temp and flipping to a 3-day forecast.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 14: CRYPTO STATS FLIP */}
          <div className="component-card">
            <div className="card-preview">
              <div className="crypto-flip-card">
                <div className="crypto-flip-inner">
                  <div className="crypto-flip-front">
                    <div className="crypto-header">
                      <i className="fa-brands fa-bitcoin"></i>
                      <span>BTC</span>
                    </div>
                    <h3>$64,230.00</h3>
                    <span className="trend up"><i className="fa-solid fa-arrow-trend-up"></i> +2.4%</span>
                  </div>
                  <div className="crypto-flip-back">
                    <h5>Market Stats</h5>
                    <div className="stat-grid">
                      <div><span>Vol</span> $32B</div>
                      <div><span>Cap</span> $1.2T</div>
                      <div><span>High</span> $65K</div>
                      <div><span>Low</span> $62K</div>
                    </div>
                    <button className="trade-btn">Trade</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Crypto Stats Flip</h3>
                <span>Finance</span>
              </div>
              <p>Financial asset card with current price that rotates to reveal detailed market metrics.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 15: SOCIAL STATS FLIP */}
          <div className="component-card">
            <div className="card-preview">
              <div className="social-flip-card">
                <div className="social-flip-inner">
                  <div className="social-flip-front">
                    <div className="social-avatar"><i className="fa-brands fa-instagram"></i></div>
                    <h4>Design Studio</h4>
                    <p>Creative Agency</p>
                  </div>
                  <div className="social-flip-back">
                    <h5>Followers</h5>
                    <div className="social-stats-grid">
                      <div><span>45.2k</span>Followers</div>
                      <div><span>2.1k</span>Posts</div>
                    </div>
                    <button className="social-btn">Follow</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Social Stats Flip</h3>
                <span>Trending</span>
              </div>
              <p>Social media profile card with engagement metrics on flip.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 16: TEAM MEMBER FLIP */}
          <div className="component-card">
            <div className="card-preview">
              <div className="team-flip-card">
                <div className="team-flip-inner">
                  <div className="team-flip-front">
                    <div className="team-avatar"><i className="fa-solid fa-user-tie"></i></div>
                    <h4>Sarah Chen</h4>
                    <p>Lead Designer</p>
                  </div>
                  <div className="team-flip-back">
                    <h5>Skills</h5>
                    <div className="skill-tags">
                      <span>UI/UX</span>
                      <span>Figma</span>
                      <span>Design</span>
                    </div>
                    <p className="bio-text">Expert in design systems</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Team Member Flip</h3>
                <span>Essential</span>
              </div>
              <p>Team profile card revealing skills and expertise on hover.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 17: PRODUCT CARD FLIP */}
          <div className="component-card">
            <div className="card-preview">
              <div className="product-flip-card">
                <div className="product-flip-inner">
                  <div className="product-flip-front">
                    <div className="product-icon"><i className="fa-solid fa-laptop"></i></div>
                    <h4>Pro Monitor</h4>
                    <span className="product-price">$899</span>
                  </div>
                  <div className="product-flip-back">
                    <h5>Specs</h5>
                    <ul>
                      <li>4K Resolution</li>
                      <li>144Hz Refresh</li>
                      <li>USB-C Connection</li>
                    </ul>
                    <button className="product-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Product Card Flip</h3>
                <span>Popular</span>
              </div>
              <p>E-commerce product card with specs and purchase options.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 18: LEARNING PROGRESS FLIP */}
          <div className="component-card">
            <div className="card-preview">
              <div className="course-flip-card">
                <div className="course-flip-inner">
                  <div className="course-flip-front">
                    <div className="course-icon"><i className="fa-solid fa-book"></i></div>
                    <h4>Web Design 101</h4>
                    <p>Intermediate Course</p>
                  </div>
                  <div className="course-flip-back">
                    <h5>Progress</h5>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <span className="progress-text">65% Complete</span>
                    <button className="course-btn">Continue</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Learning Progress Flip</h3>
                <span>Education</span>
              </div>
              <p>Course progress card showing completion status and CTA.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
          {/* CARD 19: SMART HOME FLIP */}
          <div className="component-card">
            <div className="card-preview">
              <div className="smart-flip-card">
                <div className="smart-flip-inner">
                  <div className="smart-flip-front">
                    <div className="smart-icon"><i className="fa-solid fa-lightbulb"></i></div>
                    <h4>Living Room</h4>
                    <p>23°C · Active</p>
                  </div>
                  <div className="smart-flip-back">
                    <h5>Devices</h5>
                    <div className="device-list">
                      <div>Lights: <em>On</em></div>
                      <div>AC: <em>Active</em></div>
                      <div>Speaker: <em>Idle</em></div>
                    </div>
                    <button className="smart-btn">Control</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Smart Home Flip</h3>
                <span>IoT</span>
              </div>
              <p>Home automation card with device status and quick control.</p>
              <div className="card-actions">
                <button>View Code</button>
                <button>Copy</button>
                <button>Save</button>
              </div>
            </div>
          </div>
      
        </section>
      
      </div>
      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
      
          {/* Brand row */}
          <div className="footer-col brand">
            <h2 className="footer-logo">⬡ UIverse</h2>
            <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
            <div className="socials">
              <a href="https://github.com" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com" title="Twitter"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>
      
          {/* Other footer columns */}
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
              <li><a href="#">Contribute</a></li>
              <li><a href="#">GitHub Repo</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
      
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li><a href="privacypolicy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms of Service</a></li>
              <li><a href="license.html">License</a></li>
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
    </>
  );
}
