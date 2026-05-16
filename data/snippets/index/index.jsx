import React from 'react';

export default function index(){
  return (
    <>
      <main className="main-home">
      
        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="hero-badge">🚀 v2.0 — Now with 120+ components</div>
      
          <h1 className="hero-title">
            Build <span className="hero-accent">beautiful UIs</span><br />
            in minutes, not hours.
          </h1>
      
          <p className="hero-desc">
            A curated library of reusable UI components crafted with pure HTML, CSS & JavaScript —
            no frameworks, no dependencies, just clean code.
          </p>
      
          <div className="hero-actions">
            <a href="button.html" className="btn-primary">
              Explore Components <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="form.html" className="btn-ghost">
              Start Learning
            </a>
          </div>
      
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">120+</span>
              <span className="stat-label">Components</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Free & Open Source</span>
            </div>
          </div>
      
          {/* floating orb decoration */}
          <div className="hero-orb orb-1"></div>
          <div className="hero-orb orb-2"></div>
        </section>
      
        {/* ===== POPULAR COMPONENTS ===== */}
        <section className="section featured-section">
          <div className="section-header">
            <span className="section-tag">Most Loved</span>
            <h2 className="section-title">⭐ Popular Components</h2>
            <p className="section-subtitle">Handpicked favorites from developers worldwide</p>
          </div>
      
          <div className="featured-cards">
      
            <div className="feature-card">
              <div className="feature-icon-wrap" style="--icon-color: #ff6b6b;">🎯</div>
              <div className="feature-card-body">
                <h3>Gradient Button</h3>
                <p>Modern colorful buttons with smooth gradient design.</p>
                <div className="feature-tags">
                  <span className="tag tag-popular">Popular</span>
                  <span className="tag tag-trending">Trending</span>
                </div>
              </div>
              <a href="button.html" className="feature-link">View <i className="fa-solid fa-arrow-right"></i></a>
            </div>
      
            <div className="feature-card">
              <div className="feature-icon-wrap" style="--icon-color: #74b9ff;">🎨</div>
              <div className="feature-card-body">
                <h3>Glass Navbar</h3>
                <p>Transparent blurred navigation bar with modern aesthetics.</p>
                <div className="feature-tags">
                  <span className="tag tag-popular">Popular</span>
                </div>
              </div>
              <a href="navbar.html" className="feature-link">View <i className="fa-solid fa-arrow-right"></i></a>
            </div>
      
            <div className="feature-card">
              <div className="feature-icon-wrap" style="--icon-color: #55efc4;">📦</div>
              <div className="feature-card-body">
                <h3>Card UI</h3>
                <p>Clean and reusable card layout for content display.</p>
                <div className="feature-tags">
                  <span className="tag tag-popular">Popular</span>
                </div>
              </div>
              <a href="cards.html" className="feature-link">View <i className="fa-solid fa-arrow-right"></i></a>
            </div>
      
            <div className="feature-card">
              <div className="feature-icon-wrap" style="--icon-color: #fdcb6e;">⚡</div>
              <div className="feature-card-body">
                <h3>Spinner Loaders</h3>
                <p>Smooth loading animations for better UX.</p>
                <div className="feature-tags">
                  <span className="tag tag-new">New</span>
                </div>
              </div>
              <a href="loaders.html" className="feature-link">View <i className="fa-solid fa-arrow-right"></i></a>
            </div>
      
            <div className="feature-card">
              <div className="feature-icon-wrap" style="--icon-color: #a29bfe;">💰</div>
              <div className="feature-card-body">
                <h3>Pricing Cards</h3>
                <p>Professional pricing sections for SaaS products.</p>
                <div className="feature-tags">
                  <span className="tag tag-popular">Popular</span>
                </div>
              </div>
              <a href="pricing.html" className="feature-link">View <i className="fa-solid fa-arrow-right"></i></a>
            </div>
      
            <div className="feature-card">
              <div className="feature-icon-wrap" style="--icon-color: #fd79a8;">🔔</div>
              <div className="feature-card-body">
                <h3>Alert Boxes</h3>
                <p>Responsive alert components for notifications.</p>
                <div className="feature-tags">
                  <span className="tag tag-essential">Essential</span>
                </div>
              </div>
              <a href="alerts.html" className="feature-link">View <i className="fa-solid fa-arrow-right"></i></a>
            </div>
      
          </div>
        </section>
      
        {/* ===== EXPLORE CATEGORIES ===== */}
        <section className="section categories-section">
          <div className="section-header">
            <span className="section-tag">Browse All</span>
            <h2 className="section-title">📦 Explore Categories</h2>
          </div>
      
          <div className="categories-grid">
            <a href="button.html" className="cat-card">
              <div className="cat-icon">🔘</div>
              <h3>Buttons</h3>
              <p>Interactive button styles</p>
              <span className="cat-count">24 items</span>
            </a>
            <a href="navbar.html" className="cat-card">
              <div className="cat-icon">☰</div>
              <h3>Navbars</h3>
              <p>Navigation UI components</p>
              <span className="cat-count">12 items</span>
            </a>
            <a href="cards.html" className="cat-card">
              <div className="cat-icon">🃏</div>
              <h3>Cards</h3>
              <p>Flexible card layouts</p>
              <span className="cat-count">18 items</span>
            </a>
            <a href="inputs.html" className="cat-card">
              <div className="cat-icon">⌨️</div>
              <h3>Inputs</h3>
              <p>Forms & input fields</p>
              <span className="cat-count">20 items</span>
            </a>
            <a href="forms.html" className="cat-card">
              <div className="cat-icon">📋</div>
              <h3>Forms</h3>
              <p>Complete form templates</p>
              <span className="cat-count">10 items</span>
            </a>
            <a href="badges.html" className="cat-card">
              <div className="cat-icon">🏅</div>
              <h3>Badges</h3>
              <p>Labels, tags & badges</p>
              <span className="cat-count">15 items</span>
            </a>
            <a href="color.html" className="cat-card">
              <div className="cat-icon">🎨</div>
              <h3>Colors</h3>
              <p>Color palette & themes</p>
              <span className="cat-count">8 items</span>
            </a>
            <a href="footer.html" className="cat-card">
              <div className="cat-icon">📄</div>
              <h3>Footers</h3>
              <p>Footer section layouts</p>
              <span className="cat-count">9 items</span>
            </a>
          </div>
        </section>
      
        {/* ===== WHY UIVERSE ===== */}
        <section className="section why-section">
          <div className="section-header">
            <span className="section-tag">Why choose us</span>
            <h2 className="section-title">✨ Why UIverse?</h2>
          </div>
      
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Fast & Lightweight</h3>
              <p>Zero frameworks, zero dependencies. Pure HTML, CSS and JavaScript for blazing fast performance.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📱</div>
              <h3>Fully Responsive</h3>
              <p>Every component is built mobile-first and works seamlessly on any device or screen size.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Beginner Friendly</h3>
              <p>Clean, well-commented code that's easy to understand, learn from, and customize.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🛠</div>
              <h3>Fully Customizable</h3>
              <p>Simple CSS variables make it trivial to adapt any component to match your brand.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Open Source</h3>
              <p>Everything is free and open source. Contribute, fork, or use however you like.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔄</div>
              <h3>Regularly Updated</h3>
              <p>New components and improvements are added regularly. Stay ahead with the latest UI trends.</p>
            </div>
          </div>
        </section>
      
        {/* ===== CTA BANNER ===== */}
        <section className="cta-banner">
          <div className="cta-content">
            <h2>Ready to build something amazing?</h2>
            <p>Join thousands of developers already using UIverse components in their projects.</p>
            <a href="button.html" className="btn-primary">Get Started for Free <i className="fa-solid fa-rocket"></i></a>
          </div>
          <div className="cta-orb cta-orb-1"></div>
          <div className="cta-orb cta-orb-2"></div>
        </section>
      
      </main>
    </>
  );
}
