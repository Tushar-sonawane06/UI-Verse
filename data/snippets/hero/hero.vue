<template>
<main class="main-home">

  <header class="page-header">
    <h1>Hero Sections</h1>
    <p>Modern responsive landing page hero layouts with interactive visuals and reusable UI structures.</p>
  </header>

  <section class="hero-grid">

    <!-- 1. GRADIENT HERO SECTION -->
    <div class="hero-card">
      <div class="hero-info">
        <h2>Gradient Hero Section</h2>
        <p>A vibrant fluid mesh gradient background with elegant overlay elements and modern typography.</p>
      </div>
      <div class="component-preview" id="preview-1" style="padding:0;">
        <div class="hero-wrapper hero-gradient">
          <div class="hg-content">
            <div class="hg-badge">New Feature</div>
            <h1 class="hg-title">Create stunning interfaces effortlessly</h1>
            <p class="hg-desc">A premium library of UI elements crafted with vanilla HTML and CSS. Ready to be dropped into your next major web application.</p>
            <div class="hg-btns">
              <button type="button" class="hg-btn-primary">Explore Components</button>
              <button type="button" class="hg-btn-secondary">View Documentation</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="copy-btn" data-target="preview-1">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 2. SPLIT SCREEN HERO -->
    <div class="hero-card">
      <div class="hero-info">
        <h2>Split Screen Hero</h2>
        <p>A modern 50/50 split design featuring an interactive CSS-built dashboard mockup.</p>
      </div>
      <div class="component-preview" id="preview-2" style="padding:0;">
        <div class="hero-wrapper hero-splitscreen">
          <div class="hss-left">
            <div class="hss-badge"><i class="fa-solid fa-bolt"></i> v2.0 Release</div>
            <h1 class="hss-title">Redefine your digital <span>workspace</span></h1>
            <p class="hss-desc">Discover the ultimate UI tools to supercharge your productivity. Seamlessly integrated, powerfully designed, and infinitely customizable.</p>
            <div class="hss-btns">
              <button type="button" class="hss-btn-primary">Start Free Trial</button>
              <button type="button" class="hss-btn-secondary">Watch Demo</button>
            </div>
            <div class="hss-users">
              <div class="hss-user-avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=60" alt="User">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=60" alt="User">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=60" alt="User">
              </div>
              <span class="hss-users-text">Joined by 12,000+ creators</span>
            </div>
          </div>
          <div class="hss-right">
            <div class="hss-mockup">
              <div class="hss-mockup-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="hss-mockup-body">
                <div class="mockup-chart">
                  <div class="mockup-chart-header">
                    <span class="chart-title">Revenue Growth</span>
                    <span class="chart-value">+28.4%</span>
                  </div>
                  <div class="mockup-chart-bars">
                    <div class="chart-bar" style="--height: 40%"></div>
                    <div class="chart-bar" style="--height: 60%"></div>
                    <div class="chart-bar" style="--height: 45%"></div>
                    <div class="chart-bar" style="--height: 80%"></div>
                    <div class="chart-bar" style="--height: 95%"></div>
                    <div class="chart-bar" style="--height: 70%"></div>
                  </div>
                </div>
                <div class="mockup-stats">
                  <div class="mockup-stat-card">
                    <i class="fa-solid fa-users"></i>
                    <span>Active Users</span>
                    <strong>2,845</strong>
                  </div>
                  <div class="mockup-stat-card">
                    <i class="fa-solid fa-bolt"></i>
                    <span>Performance</span>
                    <strong>99.8%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="copy-btn" data-target="preview-2">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 3. ANIMATED HERO SECTION -->
    <div class="hero-card">
      <div class="hero-info">
        <h2>Animated Hero Section</h2>
        <p>A high-tech background featuring glowing floating blobs and interactive list indicators.</p>
      </div>
      <div class="component-preview" id="preview-3" style="padding:0;">
        <div class="hero-wrapper hero-animated">
          <div class="ha-glow ha-glow-1"></div>
          <div class="ha-glow ha-glow-2"></div>
          <div class="ha-content">
            <div class="ha-tag">Future of Web</div>
            <h1 class="ha-title">Build Interactive <span class="ha-gradient-text">Next-Gen Interfaces</span></h1>
            <p class="ha-desc">Experience fluid animations, responsive layouts, and interactive components that bring your application to life with zero external library overhead.</p>
            <div class="ha-btns">
              <button type="button" class="ha-btn-pulse">Get Started Now</button>
              <button type="button" class="ha-btn-outline"><i class="fa-solid fa-play"></i> Watch Trailer</button>
            </div>
            <div class="ha-features">
              <div class="ha-feature-item">
                <i class="fa-solid fa-circle-check"></i> <span>Pure CSS</span>
              </div>
              <div class="ha-feature-item">
                <i class="fa-solid fa-circle-check"></i> <span>No External JS</span>
              </div>
              <div class="ha-feature-item">
                <i class="fa-solid fa-circle-check"></i> <span>Zero Dependencies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="copy-btn" data-target="preview-3">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 4. GLASSMORPHISM HERO -->
    <div class="hero-card">
      <div class="hero-info">
        <h2>Glassmorphism Hero</h2>
        <p>A glassmorphic sign-up card overlaying vibrant moving gradient backdrops.</p>
      </div>
      <div class="component-preview" id="preview-4" style="padding:0;">
        <div class="hero-wrapper hero-glassmorphism">
          <div class="hg-blob hg-blob-1"></div>
          <div class="hg-blob hg-blob-2"></div>
          <div class="hg-blob hg-blob-3"></div>
          <div class="hgl-card-premium">
            <h2 class="hgl-premium-title">Limitless Creativity</h2>
            <p class="hgl-premium-desc">Join our decentralized creator platform and design the future of immersive interfaces. Get early access to the developer preview.</p>
            <form class="hgl-premium-form" onsubmit="event.preventDefault(); alert('Subscribed!');">
              <div class="hgl-input-wrapper">
                <i class="fa-regular fa-envelope"></i>
                <input type="email" placeholder="yourname@domain.com" required>
              </div>
              <button type="submit" class="hgl-premium-btn">Join Waitlist</button>
            </form>
            <div class="hgl-premium-footer">
              <span><i class="fa-solid fa-shield-halved"></i> Spam-free guaranteed</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="copy-btn" data-target="preview-4">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 5. VIDEO BACKGROUND HERO -->
    <div class="hero-card">
      <div class="hero-info">
        <h2>Video Background Hero</h2>
        <p>A full-cover cinematic video background with dark gradient overlay and mute controller.</p>
      </div>
      <div class="component-preview" id="preview-5" style="padding:0;">
        <div class="hero-wrapper hero-videobackground">
          <video class="hvb-video" id="hero-bg-video" autoplay loop muted playsinline poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-rotating-particles-in-blue-and-purple-tones-41560-large.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="hvb-overlay-gradient"></div>
          <div class="hvb-content">
            <h1 class="hvb-title">Step Into The Future</h1>
            <p class="hvb-desc">Interactive, immersive, and incredibly responsive components that will wow your audience at first glance.</p>
            <div class="hvb-btns">
              <button type="button" class="hvb-btn-main">Explore Now</button>
              <button type="button" class="hvb-btn-mute" aria-label="Mute or unmute video" onclick="const vid=this.closest('.hero-videobackground').querySelector('.hvb-video'); vid.muted=!vid.muted; this.innerHTML=vid.muted?'<i class=&quot;fa-solid fa-volume-xmark&quot;></i>':'<i class=&quot;fa-solid fa-volume-high&quot;></i>';"><i class="fa-solid fa-volume-xmark"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="copy-btn" data-target="preview-5">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 6. INTERACTIVE TERMINAL HERO -->
    <div class="hero-card">
      <div class="hero-info">
        <h2>Interactive Terminal Hero</h2>
        <p>A developer-focused layout featuring a glowing animated code terminal with typing command simulation.</p>
      </div>
      <div class="component-preview" id="preview-6" style="padding:0;">
        <div class="hero-wrapper hero-terminal">
          <div class="ht-left">
            <div class="ht-badge"><i class="fa-solid fa-code"></i> Developer First</div>
            <h1 class="ht-title">Built for modern <span>engineers</span></h1>
            <p class="ht-desc">Ship pixel-perfect user interfaces faster. Install our library with a single line of code and customize every token globally.</p>
            <div class="ht-btns">
              <button type="button" class="ht-btn-primary">Read API Docs</button>
              <button type="button" class="ht-btn-secondary">Copy CLI Command</button>
            </div>
          </div>
          <div class="ht-right">
            <div class="ht-terminal">
              <div class="ht-terminal-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="ht-terminal-title">bash</span>
              </div>
              <div class="ht-terminal-body">
                <div class="terminal-line"><span class="prompt">$</span> <span class="command">npm install @uiverse/core</span></div>
                <div class="terminal-line output">✓ Installed 142 dependencies in 1.4s</div>
                <div class="terminal-line"><span class="prompt">$</span> <span class="command">npx uiverse init</span></div>
                <div class="terminal-line output success">✔ UI-Verse initialized successfully!</div>
                <div class="terminal-line output info">ℹ Active components: 7/7 Heroes running</div>
                <div class="terminal-line active"><span class="prompt">$</span> <span class="typing">npm run dev</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="copy-btn" data-target="preview-6">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 7. EDITORIAL CARD STACK HERO -->
    <div class="hero-card">
      <div class="hero-info">
        <h2>Editorial Card Stack Hero</h2>
        <p>A minimalist design with a grid backdrop and an interactive 3D fanning card stack.</p>
      </div>
      <div class="component-preview" id="preview-7" style="padding:0;">
        <div class="hero-wrapper hero-editorial">
          <div class="he-grid-bg"></div>
          <div class="he-content">
            <h1 class="he-title">Design. Code.<br><span>Publish.</span></h1>
            <p class="he-desc">Experience the future of interface development. A streamlined curation of standard design systems crafted to elevate your creative output.</p>
            <div class="he-btns">
              <button type="button" class="he-btn-primary">Start Building</button>
              <button type="button" class="he-btn-secondary">Explore Styles</button>
            </div>
          </div>
          <div class="he-right">
            <div class="he-card-pile">
              <div class="he-card card-cyan">
                <div class="he-card-tag">03</div>
                <h3>Ship</h3>
                <p>Deploy pixel-perfect sites instantly.</p>
              </div>
              <div class="he-card card-purple">
                <div class="he-card-tag">02</div>
                <h3>Code</h3>
                <p>Vanilla standard components.</p>
              </div>
              <div class="he-card card-rose">
                <div class="he-card-tag">01</div>
                <h3>Design</h3>
                <p>Tailored HSL design system tokens.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="copy-btn" data-target="preview-7">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

  </section>

  <!-- ================= FOOTER ================= -->
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <i class="fa-solid fa-hexagon-nodes"></i>
          <span>UIverse</span>
        </div>
        <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
        <div class="footer-socials">
          <a href="#" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
      
      <div class="footer-links">
        <h4>Explore</h4>
        <ul>
          <li><a href="button.html">Buttons</a></li>
          <li><a href="navbar.html">Navbars</a></li>
          <li><a href="cards.html">Cards</a></li>
          <li><a href="inputs.html">Inputs</a></li>
          <li><a href="forms.html">Forms</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Contribute</a></li>
          <li><a href="#">GitHub Repo</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">License</a></li>
        </ul>
      </div>

      <div class="footer-newsletter">
        <h4>Stay Updated</h4>
        <p>Get notified when new components drop.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="your@email.com">
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© 2026 UIverse. Made with <i class="fa-solid fa-heart heart"></i> for developers worldwide.</p>
    </div>
  </footer>

</main>
</template>

<script>
export default { name: 'Hero' }
</script>
