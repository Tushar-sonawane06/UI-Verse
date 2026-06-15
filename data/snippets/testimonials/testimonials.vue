<template>
<main class="main">
  <div class="page-header">
    <h1>Testimonials</h1>
    <p>
      Discover premium, responsive testimonial card layouts styled with advanced glassmorphism, glowing borders, neo-brutalism, interactive 3D transforms, and minimalist elegance.
    </p>
  </div>
  <div class="testimonial-grid">
    <div class="component-card">
      <h3>Glassmorphism Glow Card</h3>
      <div class="t-card-glass">
        <div class="t-glass-glow"></div>
        <div class="t-quote-mark">❝</div>
        <div class="t-rating">
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
        </div>
        <p class="t-text">
          UIverse helped us launch faster with polished UI components that were elegant, scalable, and incredibly easy to customize.
        </p>
        <div class="t-user">
          <div class="t-avatar">
            <img src="https://i.pravatar.cc/100?img=5" alt="Maya Lee" />
          </div>
          <div class="t-info">
            <strong class="t-name">Maya Lee</strong>
            <span class="t-role">Product Designer</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t1', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t1" class="code-block">&lt;div class="t-card-glass"&gt;
  &lt;div class="t-glass-glow"&gt;&lt;/div&gt;
  &lt;div class="t-quote-mark"&gt;❝&lt;/div&gt;
  &lt;div class="t-rating"&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
  &lt;/div&gt;
  &lt;p class="t-text"&gt;
    UIverse helped us launch faster with polished UI components that were elegant, scalable, and incredibly easy to customize.
  &lt;/p&gt;
  &lt;div class="t-user"&gt;
    &lt;div class="t-avatar"&gt;
      &lt;img src="https://i.pravatar.cc/100?img=5" alt="Maya Lee" /&gt;
    &lt;/div&gt;
    &lt;div class="t-info"&gt;
      &lt;strong class="t-name"&gt;Maya Lee&lt;/strong&gt;
      &lt;span class="t-role"&gt;Product Designer&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>
    <div class="component-card">
      <h3>Gradient Border Card</h3>
      <div class="t-card-gradient">
        <div class="t-quote-mark">❝</div>
        <div class="t-rating">
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
        </div>
        <p class="t-text">
          The component library is beginner friendly and made styling my app feel effortless, modern, and professional.
        </p>
        <div class="t-user">
          <div class="t-avatar">
            <img src="https://i.pravatar.cc/100?img=12" alt="Alex Chen" />
          </div>
          <div class="t-info">
            <strong class="t-name">Alex Chen</strong>
            <span class="t-role">Frontend Developer</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t2', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t2" class="code-block">&lt;div class="t-card-gradient"&gt;
  &lt;div class="t-quote-mark"&gt;❝&lt;/div&gt;
  &lt;div class="t-rating"&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
  &lt;/div&gt;
  &lt;p class="t-text"&gt;
    The component library is beginner friendly and made styling my app feel effortless, modern, and professional.
  &lt;/p&gt;
  &lt;div class="t-user"&gt;
    &lt;div class="t-avatar"&gt;
      &lt;img src="https://i.pravatar.cc/100?img=12" alt="Alex Chen" /&gt;
    &lt;/div&gt;
    &lt;div class="t-info"&gt;
      &lt;strong class="t-name"&gt;Alex Chen&lt;/strong&gt;
      &lt;span class="t-role"&gt;Frontend Developer&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>


    <div class="component-card">
      <h3>Neo-Brutalist Card</h3>
      <div class="t-card-brutalist">
        <div class="t-quote-mark">❝</div>
        <div class="t-rating">
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star-empty">☆</span>
        </div>
        <p class="t-text">
          The UIverse components saved us countless hours. The designs are sleek, responsive, and easy to adapt for our brand guidelines.
        </p>
        <div class="t-user">
          <div class="t-avatar">
            <img src="https://i.pravatar.cc/100?img=20" alt="Priya Sharma" />
          </div>
          <div class="t-info">
            <strong class="t-name">Priya Sharma</strong>
            <span class="t-role">Marketing Lead</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t3', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t3', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t3" class="code-block">&lt;div class="t-card-brutalist"&gt;
  &lt;div class="t-quote-mark"&gt;❝&lt;/div&gt;
  &lt;div class="t-rating"&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star-empty"&gt;☆&lt;/span&gt;
  &lt;/div&gt;
  &lt;p class="t-text"&gt;
    The UIverse components saved us countless hours. The designs are sleek, responsive, and easy to adapt for our brand guidelines.
  &lt;/p&gt;
  &lt;div class="t-user"&gt;
    &lt;div class="t-avatar"&gt;
      &lt;img src="https://i.pravatar.cc/100?img=20" alt="Priya Sharma" /&gt;
    &lt;/div&gt;
    &lt;div class="t-info"&gt;
      &lt;strong class="t-name"&gt;Priya Sharma&lt;/strong&gt;
      &lt;span class="t-role"&gt;Marketing Lead&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>
    <div class="component-card">
      <h3>Avatar Pop Card</h3>
      <div class="t-card-pop">
        <div class="t-avatar-pop">
          <img src="https://i.pravatar.cc/100?img=30" alt="Daniel Roberts" />
        </div>
        <div class="t-quote-mark">❝</div>
        <div class="t-rating">
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
        </div>
        <p class="t-text">
          Our development team loved how intuitive the components were. Integration was seamless and documentation was clear.
        </p>
        <div class="t-user">
          <div class="t-info">
            <strong class="t-name">Daniel Roberts</strong>
            <span class="t-role">Software Engineer</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t4', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t4', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t4" class="code-block">&lt;div class="t-card-pop"&gt;
  &lt;div class="t-avatar-pop"&gt;
    &lt;img src="https://i.pravatar.cc/100?img=30" alt="Daniel Roberts" /&gt;
  &lt;/div&gt;
  &lt;div class="t-quote-mark"&gt;❝&lt;/div&gt;
  &lt;div class="t-rating"&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
  &lt;/div&gt;
  &lt;p class="t-text"&gt;
    Our development team loved how intuitive the components were. Integration was seamless and documentation was clear.
  &lt;/p&gt;
  &lt;div class="t-user"&gt;
    &lt;div class="t-info"&gt;
      &lt;strong class="t-name"&gt;Daniel Roberts&lt;/strong&gt;
      &lt;span class="t-role"&gt;Software Engineer&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>
    <div class="component-card">
      <h3>3D Perspective Card</h3>
      <div class="t-card-skew">
        <div class="t-skew-glare"></div>
        <div class="t-quote-mark">❝</div>
        <div class="t-rating">
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star-empty">☆</span>
        </div>
        <p class="t-text">
          As a startup, we needed fast, reliable UI solutions. UIverse gave us a professional look without compromising speed or quality.
        </p>
        <div class="t-user">
          <div class="t-avatar">
            <img src="https://i.pravatar.cc/100?img=45" alt="Sofia Martinez" />
          </div>
          <div class="t-info">
            <strong class="t-name">Sofia Martinez</strong>
            <span class="t-role">Founder & CEO</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t5', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t5', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t5" class="code-block">&lt;div class="t-card-skew"&gt;
  &lt;div class="t-skew-glare"&gt;&lt;/div&gt;
  &lt;div class="t-quote-mark"&gt;❝&lt;/div&gt;
  &lt;div class="t-rating"&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star-empty"&gt;☆&lt;/span&gt;
  &lt;/div&gt;
  &lt;p class="t-text"&gt;
    As a startup, we needed fast, reliable UI solutions. UIverse gave us a professional look without compromising speed or quality.
  &lt;/p&gt;
  &lt;div class="t-user"&gt;
    &lt;div class="t-avatar"&gt;
      &lt;img src="https://i.pravatar.cc/100?img=45" alt="Sofia Martinez" /&gt;
    &lt;/div&gt;
    &lt;div class="t-info"&gt;
      &lt;strong class="t-name"&gt;Sofia Martinez&lt;/strong&gt;
      &lt;span class="t-role"&gt;Founder & CEO&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>
    <div class="component-card">
      <h3>Minimal Premium Card</h3>
      <div class="t-card-minimal">
        <div class="t-quote-mark">❝</div>
        <div class="t-rating">
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
          <span class="t-star">★</span>
        </div>
        <p class="t-text">
          Absolute masterclass in developer experience and modern aesthetics. Implementing UIverse components has redefined our products.
        </p>
        <div class="t-user">
          <div class="t-avatar">
            <img src="https://i.pravatar.cc/100?img=60" alt="Marcus Aurelius" />
          </div>
          <div class="t-info">
            <strong class="t-name">Marcus Aurelius</strong>
            <span class="t-role">Principal UX Architect</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t6', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t6', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t6" class="code-block">&lt;div class="t-card-minimal"&gt;
  &lt;div class="t-quote-mark"&gt;❝&lt;/div&gt;
  &lt;div class="t-rating"&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
    &lt;span class="t-star"&gt;★&lt;/span&gt;
  &lt;/div&gt;
  &lt;p class="t-text"&gt;
    Absolute masterclass in developer experience and modern aesthetics. Implementing UIverse components has redefined our products.
  &lt;/p&gt;
  &lt;div class="t-user"&gt;
    &lt;div class="t-avatar"&gt;
      &lt;img src="https://i.pravatar.cc/100?img=60" alt="Marcus Aurelius" /&gt;
    &lt;/div&gt;
    &lt;div class="t-info"&gt;
      &lt;strong class="t-name"&gt;Marcus Aurelius&lt;/strong&gt;
      &lt;span class="t-role"&gt;Principal UX Architect&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>

    <!-- ============================= -->
<!-- Neon Gradient Testimonial -->
<!-- ============================= -->

<div class="component-card">
  <h3>Neon Gradient Card</h3>

  <div class="t-card-neon">
    <div class="t-neon-ring"></div>

    <div class="t-quote-mark">❝</div>

    <div class="t-rating">
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
    </div>

    <p class="t-text">
      The animations and UI quality instantly elevated our landing pages.
      Everything feels premium and production ready.
    </p>

    <div class="t-user">
      <div class="t-avatar">
        <img src="https://i.pravatar.cc/100?img=22" alt="Emma Watson" />
      </div>

      <div class="t-info">
        <strong class="t-name">Emma Watson</strong>
        <span class="t-role">Creative Director</span>
      </div>
    </div>
  </div>
</div>

<!-- ============================= -->
<!-- Floating Card -->
<!-- ============================= -->

<div class="component-card">
  <h3>Floating Shadow Card</h3>

  <div class="t-card-floating">
    <div class="t-floating-shape"></div>

    <div class="t-quote-mark">❝</div>

    <p class="t-text">
      UIverse gave us reusable UI patterns that reduced our design and
      development workflow by nearly 40%.
    </p>

    <div class="t-rating">
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
    </div>

    <div class="t-user">
      <div class="t-avatar">
        <img src="https://i.pravatar.cc/100?img=18" alt="Ryan Cooper" />
      </div>

      <div class="t-info">
        <strong class="t-name">Ryan Cooper</strong>
        <span class="t-role">UI Engineer</span>
      </div>
    </div>
  </div>
</div>

<!-- ============================= -->
<!-- Dark Premium Card -->
<!-- ============================= -->

<div class="component-card">
  <h3>Dark Premium Card</h3>

  <div class="t-card-dark">
    <div class="t-quote-mark">❝</div>

    <div class="t-rating">
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
    </div>

    <p class="t-text">
      Beautiful UI architecture with excellent attention to spacing,
      typography, and responsiveness.
    </p>

    <div class="t-user">
      <div class="t-avatar">
        <img src="https://i.pravatar.cc/100?img=52" alt="Olivia Carter" />
      </div>

      <div class="t-info">
        <strong class="t-name">Olivia Carter</strong>
        <span class="t-role">Senior Product Manager</span>
      </div>
    </div>
  </div>
</div>

<!-- ============================= -->
<!-- Split Layout Card -->
<!-- ============================= -->

<div class="component-card">
  <h3>Split Layout Card</h3>

  <div class="t-card-split">
    <div class="t-split-left">
      <img src="https://i.pravatar.cc/300?img=44" alt="Sarah Kim" />
    </div>

    <div class="t-split-right">
      <div class="t-quote-mark">❝</div>

      <p class="t-text">
        The component ecosystem feels cohesive, modern, and extremely easy
        to integrate into any frontend stack.
      </p>

      <div class="t-rating">
        <span class="t-star">★</span>
        <span class="t-star">★</span>
        <span class="t-star">★</span>
        <span class="t-star">★</span>
        <span class="t-star">★</span>
      </div>

      <strong class="t-name">Sarah Kim</strong>
      <span class="t-role">Full Stack Developer</span>
    </div>
  </div>
</div>

<!-- ============================= -->
<!-- Frosted Blur Card -->
<!-- ============================= -->

<div class="component-card">
  <h3>Frosted Blur Card</h3>

  <div class="t-card-frost">
    <div class="t-frost-overlay"></div>

    <div class="t-quote-mark">❝</div>

    <p class="t-text">
      One of the best curated UI libraries we’ve used. The polish and detail
      are unmatched.
    </p>

    <div class="t-user">
      <div class="t-avatar">
        <img src="https://i.pravatar.cc/100?img=14" alt="Noah Williams" />
      </div>

      <div class="t-info">
        <strong class="t-name">Noah Williams</strong>
        <span class="t-role">Startup Founder</span>
      </div>
    </div>

    <div class="t-rating">
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
      <span class="t-star">★</span>
    </div>
  </div>
</div>
    <div class="component-card">
      <h3>Floating Glow Card</h3>
      <div class="t-card-floating">
        <div class="t-quote-mark">❝</div>
        <div class="t-rating">
          <span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span>
        </div>
        <p class="t-text">This library completely changed my workflow. The floating effects and glowing shadows add the perfect touch of modern UI.</p>
        <div class="t-user">
          <div class="t-avatar"><img src="https://i.pravatar.cc/100?img=1" alt="Sarah Jenkins" /></div>
          <div class="t-info">
            <strong class="t-name">Sarah Jenkins</strong>
            <span class="t-role">Creative Director</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t7', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t7', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t7" class="code-block">&lt;div class="t-card-floating"&gt;
  &lt;div class="t-quote-mark"&gt;❝&lt;/div&gt;
  &lt;div class="t-rating"&gt;...&lt;/div&gt;
  &lt;p class="t-text"&gt;This library completely changed my workflow.&lt;/p&gt;
  &lt;div class="t-user"&gt;...&lt;/div&gt;
&lt;/div&gt;</pre>
    </div>

    <div class="component-card">
      <h3>Split Layout Card</h3>
      <div class="t-card-split">
        <div class="t-user-side">
          <div class="t-avatar-large"><img src="https://i.pravatar.cc/100?img=11" alt="David Miller" /></div>
          <strong class="t-name">David Miller</strong>
          <span class="t-role">Senior Developer</span>
        </div>
        <div class="t-content-side">
          <div class="t-rating">
            <span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span><span class="t-star-empty">☆</span>
          </div>
          <p class="t-text">The split layout provides a distinct visual hierarchy that's perfect for featured testimonials on landing pages.</p>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t8', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t8', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t8" class="code-block">&lt;div class="t-card-split"&gt;
  &lt;div class="t-user-side"&gt;...&lt;/div&gt;
  &lt;div class="t-content-side"&gt;
    &lt;div class="t-rating"&gt;...&lt;/div&gt;
    &lt;p class="t-text"&gt;The split layout provides...&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>

    <div class="component-card">
      <h3>Quotation Highlight Card</h3>
      <div class="t-card-quote-focus">
        <div class="bg-quote">"</div>
        <p class="t-text">Absolutely incredible attention to detail. Every component feels purposefully crafted and beautifully executed.</p>
        <div class="t-user">
          <div class="t-avatar"><img src="https://i.pravatar.cc/100?img=15" alt="Elena Rodriguez" /></div>
          <div class="t-info">
            <strong class="t-name">Elena Rodriguez</strong>
            <span class="t-role">UX Researcher</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t9', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t9', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t9" class="code-block">&lt;div class="t-card-quote-focus"&gt;
  &lt;div class="bg-quote"&gt;"&lt;/div&gt;
  &lt;p class="t-text"&gt;Absolutely incredible attention...&lt;/p&gt;
  &lt;div class="t-user"&gt;...&lt;/div&gt;
&lt;/div&gt;</pre>
    </div>

    <div class="component-card">
      <h3>Holographic Dark Card</h3>
      <div class="t-card-hologram">
        <div class="t-rating">
          <span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span>
        </div>
        <p class="t-text">The futuristic vibe is exactly what we needed for our Web3 project. The holographic border effect is stunning.</p>
        <div class="t-user">
          <div class="t-avatar"><img src="https://i.pravatar.cc/100?img=33" alt="James Wilson" /></div>
          <div class="t-info">
            <strong class="t-name">James Wilson</strong>
            <span class="t-role">Web3 Architect</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t10', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t10', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t10" class="code-block">&lt;div class="t-card-hologram"&gt;
  &lt;div class="t-rating"&gt;...&lt;/div&gt;
  &lt;p class="t-text"&gt;The futuristic vibe is exactly what we needed...&lt;/p&gt;
  &lt;div class="t-user"&gt;...&lt;/div&gt;
&lt;/div&gt;</pre>
    </div>

    <div class="component-card">
      <h3>Elegant Minimal Card</h3>
      <div class="t-card-elegant">
        <p class="t-text">Simplicity is the ultimate sophistication. This card proves that you don't need heavy borders to make an impact.</p>
        <div class="t-divider"></div>
        <div class="t-user">
          <div class="t-info">
            <strong class="t-name">Sophie Chen</strong>
            <span class="t-role">Art Director</span>
          </div>
          <div class="t-rating">
            <span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span><span class="t-star">★</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('t11', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('t11', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="t11" class="code-block">&lt;div class="t-card-elegant"&gt;
  &lt;p class="t-text"&gt;Simplicity is the ultimate sophistication...&lt;/p&gt;
  &lt;div class="t-divider"&gt;&lt;/div&gt;
  &lt;div class="t-user"&gt;...&lt;/div&gt;
&lt;/div&gt;</pre>
    </div>
  </div>
</main>
</template>

<script>
export default { name: 'Testimonials' }
</script>
