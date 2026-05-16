<template>
<main class="main-home">

  <!-- ===== HERO ===== -->
  <section class="hero">
    <div class="hero-badge">🚀 v2.0 — Now with 120+ components</div>

    <h1 class="hero-title">
      Build <span class="hero-accent">beautiful UIs</span><br>
      in minutes, not hours.
    </h1>

    <p class="hero-desc">
      A curated library of reusable UI components crafted with pure HTML, CSS & JavaScript —
      no frameworks, no dependencies, just clean code.
    </p>

    <div class="hero-actions">
      <a href="button.html" class="btn-primary">
        Explore Components <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a href="form.html" class="btn-ghost">
        Start Learning
      </a>
    </div>

    <div class="hero-stats">
      <div class="stat">
        <span class="stat-number">120+</span>
        <span class="stat-label">Components</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">8</span>
        <span class="stat-label">Categories</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">100%</span>
        <span class="stat-label">Free & Open Source</span>
      </div>
    </div>

    <!-- floating orb decoration -->
    <div class="hero-orb orb-1"></div>
    <div class="hero-orb orb-2"></div>
  </section>

  <!-- ===== POPULAR COMPONENTS ===== -->
  <section class="section featured-section">
    <div class="section-header">
      <span class="section-tag">Most Loved</span>
      <h2 class="section-title">⭐ Popular Components</h2>
      <p class="section-subtitle">Handpicked favorites from developers worldwide</p>
    </div>

    <div class="featured-cards">

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #ff6b6b;">🎯</div>
        <div class="feature-card-body">
          <h3>Gradient Button</h3>
          <p>Modern colorful buttons with smooth gradient design.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
            <span class="tag tag-trending">Trending</span>
          </div>
        </div>
        <a href="button.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #74b9ff;">🎨</div>
        <div class="feature-card-body">
          <h3>Glass Navbar</h3>
          <p>Transparent blurred navigation bar with modern aesthetics.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
          </div>
        </div>
        <a href="navbar.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #55efc4;">📦</div>
        <div class="feature-card-body">
          <h3>Card UI</h3>
          <p>Clean and reusable card layout for content display.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
          </div>
        </div>
        <a href="cards.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #fdcb6e;">⚡</div>
        <div class="feature-card-body">
          <h3>Spinner Loaders</h3>
          <p>Smooth loading animations for better UX.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
          </div>
        </div>
        <a href="loaders.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #a29bfe;">💰</div>
        <div class="feature-card-body">
          <h3>Pricing Cards</h3>
          <p>Professional pricing sections for SaaS products.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
          </div>
        </div>
        <a href="pricing.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #fd79a8;">🔔</div>
        <div class="feature-card-body">
          <h3>Alert Boxes</h3>
          <p>Responsive alert components for notifications.</p>
          <div class="feature-tags">
            <span class="tag tag-essential">Essential</span>
          </div>
        </div>
        <a href="alerts.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

    </div>
  </section>

  <!-- ===== EXPLORE CATEGORIES ===== -->
  <section class="section categories-section">
    <div class="section-header">
      <span class="section-tag">Browse All</span>
      <h2 class="section-title">📦 Explore Categories</h2>
    </div>

    <div class="categories-grid">
      <a href="button.html" class="cat-card">
        <div class="cat-icon">🔘</div>
        <h3>Buttons</h3>
        <p>Interactive button styles</p>
        <span class="cat-count">24 items</span>
      </a>
      <a href="navbar.html" class="cat-card">
        <div class="cat-icon">☰</div>
        <h3>Navbars</h3>
        <p>Navigation UI components</p>
        <span class="cat-count">12 items</span>
      </a>
      <a href="cards.html" class="cat-card">
        <div class="cat-icon">🃏</div>
        <h3>Cards</h3>
        <p>Flexible card layouts</p>
        <span class="cat-count">18 items</span>
      </a>
      <a href="inputs.html" class="cat-card">
        <div class="cat-icon">⌨️</div>
        <h3>Inputs</h3>
        <p>Forms & input fields</p>
        <span class="cat-count">20 items</span>
      </a>
      <a href="forms.html" class="cat-card">
        <div class="cat-icon">📋</div>
        <h3>Forms</h3>
        <p>Complete form templates</p>
        <span class="cat-count">10 items</span>
      </a>
      <a href="badges.html" class="cat-card">
        <div class="cat-icon">🏅</div>
        <h3>Badges</h3>
        <p>Labels, tags & badges</p>
        <span class="cat-count">15 items</span>
      </a>
      <a href="color.html" class="cat-card">
        <div class="cat-icon">🎨</div>
        <h3>Colors</h3>
        <p>Color palette & themes</p>
        <span class="cat-count">8 items</span>
      </a>
      <a href="footer.html" class="cat-card">
        <div class="cat-icon">📄</div>
        <h3>Footers</h3>
        <p>Footer section layouts</p>
        <span class="cat-count">9 items</span>
      </a>
    </div>
  </section>

  <!-- ===== WHY UIVERSE ===== -->
  <section class="section why-section">
    <div class="section-header">
      <span class="section-tag">Why choose us</span>
      <h2 class="section-title">✨ Why UIverse?</h2>
    </div>

    <div class="why-grid">
      <div class="why-card">
        <div class="why-icon">⚡</div>
        <h3>Fast & Lightweight</h3>
        <p>Zero frameworks, zero dependencies. Pure HTML, CSS and JavaScript for blazing fast performance.</p>
      </div>
      <div class="why-card">
        <div class="why-icon">📱</div>
        <h3>Fully Responsive</h3>
        <p>Every component is built mobile-first and works seamlessly on any device or screen size.</p>
      </div>
      <div class="why-card">
        <div class="why-icon">🎯</div>
        <h3>Beginner Friendly</h3>
        <p>Clean, well-commented code that's easy to understand, learn from, and customize.</p>
      </div>
      <div class="why-card">
        <div class="why-icon">🛠</div>
        <h3>Fully Customizable</h3>
        <p>Simple CSS variables make it trivial to adapt any component to match your brand.</p>
      </div>
      <div class="why-card">
        <div class="why-icon">🤝</div>
        <h3>Open Source</h3>
        <p>Everything is free and open source. Contribute, fork, or use however you like.</p>
      </div>
      <div class="why-card">
        <div class="why-icon">🔄</div>
        <h3>Regularly Updated</h3>
        <p>New components and improvements are added regularly. Stay ahead with the latest UI trends.</p>
      </div>
    </div>
  </section>

  <!-- ===== CTA BANNER ===== -->
  <section class="cta-banner">
    <div class="cta-content">
      <h2>Ready to build something amazing?</h2>
      <p>Join thousands of developers already using UIverse components in their projects.</p>
      <a href="button.html" class="btn-primary">Get Started for Free <i class="fa-solid fa-rocket"></i></a>
    </div>
    <div class="cta-orb cta-orb-1"></div>
    <div class="cta-orb cta-orb-2"></div>
  </section>

</main>
</template>

<script>
export default { name: 'Index' }
</script>
