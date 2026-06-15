<template>
<main class="main-home">

    <!-- HERO -->
    <section class="about-hero">

      <div class="breadcrumb">
        <a href="index.html">Home</a>

        <i class="fa-solid fa-chevron-right"></i>

        <span>About</span>
      </div>

      <div class="about-hero-inner">

        <div class="about-icon">
          <i class="fa-solid fa-layer-group"></i>
        </div>

        <div>
          <h1 class="page-title">About UIverse</h1>

          <p class="page-desc">
            UIverse is a modern component library crafted for developers
            and designers who love clean, reusable, and beautiful UI.
          </p>

          <div class="page-meta">

            <span class="meta-badge">
              <i class="fa-solid fa-code"></i>
              HTML • CSS • JavaScript
            </span>

            <span class="meta-badge">
              <i class="fa-solid fa-palette"></i>
              Modern UI/UX
            </span>

            <span class="meta-badge">
              <i class="fa-solid fa-globe"></i>
              Open for Everyone
            </span>

          </div>

        </div>

      </div>

    </section>

    <!-- ================= ABOUT CONTENT ================= -->
    <section class="about-layout">

      <div class="about-content">

        <div class="about-card">
          <h2>
            <i class="fa-solid fa-circle-info"></i>
            What is UIverse?
          </h2>

          <p>
            <strong>UIverse</strong> is a creative platform designed to
            showcase modern and beautiful user interface components.
          </p>

          <p>
            It helps developers and designers explore, learn,
            and build stunning web experiences using simple
            technologies like HTML, CSS, and JavaScript.
          </p>

          <p>
            Whether you are a beginner or an experienced developer,
            UIverse provides reusable UI inspiration to speed up
            your workflow and improve creativity.
          </p>
        </div>

        <div class="about-card">
          <h2>
            <i class="fa-solid fa-bullseye"></i>
            Our Mission
          </h2>

          <p>
            Our mission is to make UI design easy, attractive,
            reusable, and accessible for everyone.
          </p>

          <p>
            We focus on creating clean layouts, modern interactions,
            smooth animations, and responsive experiences that work
            beautifully across all devices.
          </p>
        </div>

      </div>

      <div class="about-stats">

        <div class="stat-card">
          <h3><span class="counter" data-target="120">0</span>+</h3>
          <p>UI Components</p>
        </div>

        <div class="stat-card">
          <h3><span class="counter" data-target="25">0</span>+</h3>
          <p>Modern Layouts</p>
        </div>

        <div class="stat-card">
          <h3><span class="counter" data-target="24">0</span>/7</h3>
          <p>Community Support</p>
        </div>

      </div>

    </section>

    <!-- ================= TEAM SECTION ================= -->
    <section class="team-section">

      <div class="section-title">
        <h2>Why Developers Love UIverse</h2>

        <p>
          Crafted to make frontend development faster,
          cleaner, and more enjoyable.
        </p>
      </div>

      <div class="team-grid">

        <div class="team-card">
          <i class="fa-solid fa-bolt"></i>
          <h3>Fast Development</h3>
          <p>
            Reusable components help speed up your workflow.
          </p>
        </div>

        <div class="team-card">
          <i class="fa-solid fa-mobile-screen"></i>
          <h3>Responsive Design</h3>
          <p>
            Every component works beautifully on all devices.
          </p>
        </div>

        <div class="team-card">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <h3>Modern Aesthetics</h3>
          <p>
            Clean layouts with modern UI/UX principles.
          </p>
        </div>

        <div class="team-card">
          <i class="fa-solid fa-circle-half-stroke"></i>
          <h3>Theme Support</h3>
          <p>
            Built-in light and dark mode support for modern projects.
          </p>
        </div>

        <div class="team-card">
          <i class="fa-solid fa-gauge-high"></i>
          <h3>Performance Optimized</h3>
          <p>
            Lightweight components designed for speed and efficiency.
          </p>
        </div>

      </div>

      <div class="section-title">
        <h2>What Our Community Says</h2>

        <p>
          Hear directly from developers and designers who use UIverse
          to build faster and design better.
        </p>
      </div>

      <section class="about-grid">

        <div class="about-card">

          <div class="card-icon orange">
            <i class="fa-solid fa-user"></i>
          </div>

          <h3>Jane Doe</h3>

          <p>
            "UIverse helped me speed up my workflow and deliver polished designs faster."
          </p>

        </div>

        <div class="about-card">

          <div class="card-icon purple">
            <i class="fa-solid fa-user"></i>
          </div>

          <h3>John Smith</h3>

          <p>
            "The reusable components are a lifesaver for rapid prototyping."
          </p>

        </div>

      </section>

    </section>

  </main>
</template>

<script>
export default { name: 'About' }
</script>
