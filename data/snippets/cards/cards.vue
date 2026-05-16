<template>
<main class="main-home">

  <!-- Page Hero -->
  <div class="page-hero">
    <div class="page-hero-left">
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>Cards</span>
      </div>
      <h1 class="page-title">Card Components</h1>
      <p class="page-desc">A rich collection of reusable card layouts — from profile cards to product, blog, notification, and social media cards. Hover to interact, click to copy.</p>
      <div class="page-meta">
        <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 9 Components</span>
        <span class="meta-badge"><i class="fa-solid fa-code"></i> Pure CSS</span>
        <span class="meta-badge"><i class="fa-solid fa-hand-pointer"></i> Hover Effects</span>
      </div>
    </div>
    <div class="page-hero-right">
      <div class="hero-card-preview">
        <div class="mini-profile-card">
          <div class="mini-avatar">LN</div>
          <div>
            <strong>Chinmay Munj</strong>
            <span>Engineer · UIverse</span>
          </div>
        </div>
        <div class="mini-stat-row">
          <div class="mini-stat"><span>120+</span><p>Cards</p></div>
          <div class="mini-stat"><span>9</span><p>Styles</p></div>
          <div class="mini-stat"><span>100%</span><p>Free</p></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Filter Bar -->
  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterCards('all', this)">All</button>
    <button class="filter-btn" onclick="filterCards('profile', this)">Profile</button>
    <button class="filter-btn" onclick="filterCards('content', this)">Content</button>
    <button class="filter-btn" onclick="filterCards('social', this)">Social</button>
    <button class="filter-btn" onclick="filterCards('commerce', this)">Commerce</button>
    <div class="filter-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Filter cards..." oninput="liveFilter(this.value)" />
    </div>
  </div>

  <!-- Cards Grid -->
  <div class="cards-grid" id="cardsGrid">

    <!-- Profile Card -->
    <div class="component-card" data-name="profile card hover avatar" data-cat="profile">
      <div class="card-top">
        <span class="card-label">Profile Card</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="profile-card">
          <div class="profile-avatar">LN</div>
          <h3 class="profile-name">Likhitha Nagraj</h3>
          <p class="profile-role">Embedded Systems Engineer</p>
          <button class="profile-btn">Follow</button>
        </div>
      </div>
      <p class="card-desc">A centered profile card with avatar, name, role, and a follow button. Lifts on hover.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c1', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c1', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Profile Card')">Add to My Collection</button>
      </div>
      <pre id="c1" class="code-block"><code>&lt;div class="profile-card"&gt;
  &lt;div class="profile-avatar"&gt;LN&lt;/div&gt;
  &lt;h3&gt;Likhitha Nagraj&lt;/h3&gt;
  &lt;p&gt;Embedded Systems Engineer&lt;/p&gt;
  &lt;button&gt;Follow&lt;/button&gt;
&lt;/div&gt;

.profile-card {
  background: #fff;
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
  max-width: 240px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.profile-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(108,92,231,0.18);
}
.profile-avatar {
  width: 64px; height: 64px; border-radius: 50%;
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: #fff; font-size: 20px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 12px;
}</code></pre>
    </div>

    <!-- Student Card -->
    <div class="component-card" data-name="student card connect profile" data-cat="profile">
      <div class="card-top">
        <span class="card-label">Student Card</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="profile-card student-card">
          <div class="profile-avatar" style="background: linear-gradient(135deg, #eb6835, #fdcb6e);">AP</div>
          <h3 class="profile-name">Ankit Pardeshi</h3>
          <p class="profile-role">AI &amp; Data Science Student</p>
          <button class="profile-btn connect-btn">Connect</button>
        </div>
      </div>
      <p class="card-desc">A variant of the profile card with a warm gradient and a connect CTA — perfect for student or developer portfolios.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c2', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c2', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Student Card')">Add to My Collection</button>
      </div>
      <pre id="c2" class="code-block"><code>&lt;div class="profile-card student-card"&gt;
  &lt;div class="profile-avatar"&gt;AP&lt;/div&gt;
  &lt;h3&gt;Ankit Pardeshi&lt;/h3&gt;
  &lt;p&gt;AI &amp; Data Science Student&lt;/p&gt;
  &lt;button&gt;Connect&lt;/button&gt;
&lt;/div&gt;

/* Same .profile-card base styles as above */
.student-card .profile-avatar {
  background: linear-gradient(135deg, #eb6835, #fdcb6e);
}
.connect-btn {
  background: linear-gradient(90deg, #eb6835, #fdcb6e);
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}</code></pre>
    </div>

    <!-- Simple Card -->
    <div class="component-card" data-name="simple card basic clean" data-cat="content">
      <div class="card-top">
        <span class="card-label">Simple Card</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="simple-card">
          <h4>Card Title</h4>
          <p>This is a simple card component with a clean, minimal design.</p>
          <button class="simple-card-btn">Learn More</button>
        </div>
      </div>
      <p class="card-desc">A minimal content card — the building block for most UI layouts.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c3', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c3', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Simple Card')">Add to My Collection</button>
      </div>
      <pre id="c3" class="code-block"><code>&lt;div class="simple-card"&gt;
  &lt;h4&gt;Card Title&lt;/h4&gt;
  &lt;p&gt;Card description goes here.&lt;/p&gt;
  &lt;button&gt;Learn More&lt;/button&gt;
&lt;/div&gt;

.simple-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 14px;
  padding: 24px;
  max-width: 280px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.simple-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 32px rgba(0,0,0,0.09);
}</code></pre>
    </div>

    <!-- Product Card -->
    <div class="component-card" data-name="product card price add to cart" data-cat="commerce">
      <div class="card-top">
        <span class="card-label">Product Card</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="product-card">
          <div class="product-badge">New</div>
          <div class="product-icon">🎧</div>
          <h4>Premium Headphones</h4>
          <p class="product-price">$49.99</p>
          <p class="product-desc">High-quality audio with noise cancellation.</p>
          <button class="product-btn">Add to Cart</button>
        </div>
      </div>
      <p class="card-desc">An e-commerce product card with badge, price highlight, and a cart CTA button.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c4', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c4', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Product Card')">Add to My Collection</button>
      </div>
      <pre id="c4" class="code-block"><code>&lt;div class="product-card"&gt;
  &lt;div class="product-badge"&gt;New&lt;/div&gt;
  &lt;div class="product-icon"&gt;🎧&lt;/div&gt;
  &lt;h4&gt;Premium Headphones&lt;/h4&gt;
  &lt;p class="price"&gt;$49.99&lt;/p&gt;
  &lt;p&gt;High-quality audio with noise cancellation.&lt;/p&gt;
  &lt;button&gt;Add to Cart&lt;/button&gt;
&lt;/div&gt;

.product-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  max-width: 240px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}
.product-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,0.1); }
.price { font-size: 22px; font-weight: 800; color: #eb6835; }</code></pre>
    </div>

    <!-- Pricing Card -->

    <div class="component-card" data-name="pricing card plan subscription" data-cat="commerce">
      <div class="card-top">
        <span class="card-label">Pricing Card</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview dark-preview">
        <div class="pricing-card">
          <div class="pricing-badge">Most Popular</div>
          <h4>Pro Plan</h4>
          <div class="pricing-price"><span class="pricing-currency">$</span>19<span class="pricing-period">/mo</span></div>
          <ul class="pricing-features">
            <li><i class="fa-solid fa-check"></i> Unlimited components</li>
            <li><i class="fa-solid fa-check"></i> Priority support</li>
            <li><i class="fa-solid fa-check"></i> Custom themes</li>
          </ul>
          <button class="pricing-btn">Choose Plan</button>
        </div>
      </div>
      <p class="card-desc">A premium pricing card with feature list, price, and a highlighted CTA button.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c5', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c5', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Pricing Card')">Add to My Collection</button>
      </div>
      <pre id="c5" class="code-block"><code>&lt;div class="pricing-card"&gt;
  &lt;div class="pricing-badge"&gt;Most Popular&lt;/div&gt;
  &lt;h4&gt;Pro Plan&lt;/h4&gt;
  &lt;div class="price"&gt;$19&lt;span&gt;/mo&lt;/span&gt;&lt;/div&gt;
  &lt;ul&gt;
    &lt;li&gt;✓ Unlimited components&lt;/li&gt;
    &lt;li&gt;✓ Priority support&lt;/li&gt;
    &lt;li&gt;✓ Custom themes&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button&gt;Choose Plan&lt;/button&gt;
&lt;/div&gt;

.pricing-card {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 1px solid rgba(108,92,231,0.4);
  border-radius: 20px;
  padding: 28px 24px;
  color: #fff;
  text-align: center;
  max-width: 240px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.pricing-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 50px rgba(108,92,231,0.3); }</code></pre>

    </div>
    <!-- =============================================
     FREE / BASIC PLAN CARD
     ============================================= -->
<div class="component-card" data-name="free basic plan card pricing" data-cat="commerce">
  <div class="card-top">
    <span class="card-label">Free / Basic Plan</span>
    <span class="card-tag tag-popular">Free</span>
  </div>
  <div class="card-preview">
    <div class="basic-card">
      <div class="basic-badge">Free Forever</div>
      <div class="basic-icon">🌿</div>
      <h4>Basic Plan</h4>
      <p class="basic-price">$0<span>/mo</span></p>
      <p class="basic-desc">Perfect for individuals just getting started.</p>
      <ul class="basic-features">
        <li><span class="feat-check">✓</span> 5 projects</li>
        <li><span class="feat-check">✓</span> 1 GB storage</li>
        <li><span class="feat-check">✓</span> Community support</li>
        
      </ul>
      <button class="basic-btn">Get Started Free</button>
    </div>
  </div>
  <p class="card-desc">A clean free-tier card with feature list, $0 price, and a soft green CTA button.</p>
  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c-basic', this)">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="action-btn copy-btn" onclick="copyCode('c-basic', this)">
      <i class="fa-solid fa-copy"></i> Copy
    </button>
    <button onclick="addToCollection('Free Basic Plan Card')">Add to My Collection</button>
  </div>
  <pre id="c-basic" class="code-block"><code>&lt;div class="basic-card"&gt;
  &lt;div class="basic-badge"&gt;Free Forever&lt;/div&gt;
  &lt;div class="basic-icon"&gt;🌿&lt;/div&gt;
  &lt;h4&gt;Basic Plan&lt;/h4&gt;
  &lt;p class="basic-price"&gt;$0&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
  &lt;p&gt;Perfect for individuals just getting started.&lt;/p&gt;
  &lt;ul class="basic-features"&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; 5 projects&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; 1 GB storage&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; Community support&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-cross"&gt;✗&lt;/span&gt; Custom domain&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-cross"&gt;✗&lt;/span&gt; Analytics&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button class="basic-btn"&gt;Get Started Free&lt;/button&gt;
&lt;/div&gt;

.basic-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  max-width: 240px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}
.basic-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,0.1); }
.basic-badge {
  display: inline-block;
  background: #e6f4ea;
  color: #2d7a3a;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.basic-icon { font-size: 32px; margin-bottom: 8px; }
.basic-card h4 { font-size: 18px; font-weight: 700; color: #111; margin: 0 0 6px; }
.basic-price { font-size: 28px; font-weight: 800; color: #2d7a3a; margin: 0 0 6px; }
.basic-price span { font-size: 14px; font-weight: 400; color: #999; }
.basic-card p { font-size: 13px; color: #888; margin: 0 0 14px; }
.basic-features {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  text-align: left;
}
.basic-features li { font-size: 13px; color: #555; padding: 4px 0; }
.feat-check { color: #2d7a3a; font-weight: 700; margin-right: 6px; }
.feat-cross { color: #ccc; font-weight: 700; margin-right: 6px; }
.basic-btn {
  width: 100%;
  padding: 10px 0;
  background: #e6f4ea;
  color: #2d7a3a;
  border: 1.5px solid #a8d5b0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.basic-btn:hover { background: #c8eacf; transform: translateY(-2px); }</code></pre>
</div>


<!-- =============================================
     TRIAL PLAN CARD
     ============================================= -->
<div class="component-card" data-name="trial plan card pricing 14 day" data-cat="commerce">
  <div class="card-top">
    <span class="card-label">Trial Plan</span>
    <span class="card-tag tag-trending">Trial</span>
  </div>
  <div class="card-preview">
    <div class="trial-card">
      <div class="trial-badge">14-Day Trial</div>
      <div class="trial-icon">⏱️</div>
      <h4>Trial Plan</h4>
      <p class="trial-price-label">Free for 14 days</p>
      <p class="trial-then">then $9<span>/mo</span></p>
      <p class="trial-desc">Full access. No credit card required.</p>
      <ul class="trial-features">
        <li><span class="feat-check">✓</span> 20 projects</li>
        <li><span class="feat-check">✓</span> 10 GB storage</li>
        <li><span class="feat-check">✓</span> Email support</li>
        <li><span class="feat-check">✓</span> Custom domain</li>
        <li><span class="feat-cross">✗</span> Advanced analytics</li>
      </ul>
      <button class="trial-btn">Start Free Trial</button>
    </div>
  </div>
  <p class="card-desc">A trial plan card with countdown feel, free period highlight, and post-trial pricing shown clearly.</p>
  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c-trial', this)">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="action-btn copy-btn" onclick="copyCode('c-trial', this)">
      <i class="fa-solid fa-copy"></i> Copy
    </button>
    <button onclick="addToCollection('Trial Plan Card')">Add to My Collection</button>
  </div>
  <pre id="c-trial" class="code-block"><code>&lt;div class="trial-card"&gt;
  &lt;div class="trial-badge"&gt;14-Day Trial&lt;/div&gt;
  &lt;div class="trial-icon"&gt;⏱️&lt;/div&gt;
  &lt;h4&gt;Trial Plan&lt;/h4&gt;
  &lt;p class="trial-price-label"&gt;Free for 14 days&lt;/p&gt;
  &lt;p class="trial-then"&gt;then $9&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
  &lt;p&gt;Full access. No credit card required.&lt;/p&gt;
  &lt;ul class="trial-features"&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; 20 projects&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; 10 GB storage&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; Email support&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-check"&gt;✓&lt;/span&gt; Custom domain&lt;/li&gt;
    &lt;li&gt;&lt;span class="feat-cross"&gt;✗&lt;/span&gt; Advanced analytics&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button class="trial-btn"&gt;Start Free Trial&lt;/button&gt;
&lt;/div&gt;

.trial-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  max-width: 240px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}
.trial-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,0.1); }
.trial-badge {
  display: inline-block;
  background: #fff4e0;
  color: #b35a00;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.trial-icon { font-size: 32px; margin-bottom: 8px; }
.trial-card h4 { font-size: 18px; font-weight: 700; color: #111; margin: 0 0 6px; }
.trial-price-label { font-size: 18px; font-weight: 800; color: #eb6835; margin: 0 0 4px; }
.trial-then { font-size: 14px; color: #999; margin: 0 0 6px; }
.trial-then span { font-size: 12px; }
.trial-card p { font-size: 13px; color: #888; margin: 0 0 14px; }
.trial-features {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  text-align: left;
}
.trial-features li { font-size: 13px; color: #555; padding: 4px 0; }
.trial-btn {
  width: 100%;
  padding: 10px 0;
  background: #fff4e0;
  color: #b35a00;
  border: 1.5px solid #f5c97a;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.trial-btn:hover { background: #ffe5b0; transform: translateY(-2px); }</code></pre>
</div>


<!-- =============================================
     PREMIUM PLAN CARD
     ============================================= -->
<div class="component-card" data-name="premium plan card pricing popular" data-cat="commerce">
  <div class="card-top">
    <span class="card-label">Premium Plan</span>
    <span class="card-tag tag-popular">Popular</span>
  </div>
  <div class="card-preview dark-preview">
    <div class="premium-card">
      <div class="premium-badge">Most Popular</div>
      <div class="premium-icon">⭐</div>
      <h4>Premium Plan</h4>
      <p class="premium-price">$<span class="premium-amount">19</span><span class="premium-period">/mo</span></p>
      <p class="premium-desc">Best for growing teams and businesses.</p>
      <ul class="premium-features">
        <li><i class="fa-solid fa-check"></i> Unlimited projects</li>
        <li><i class="fa-solid fa-check"></i> 100 GB storage</li>
        <li><i class="fa-solid fa-check"></i> Priority support</li>
        <li><i class="fa-solid fa-check"></i> Custom domain</li>
        <li><i class="fa-solid fa-check"></i> Analytics dashboard</li>
      </ul>
      <button class="premium-btn">Choose Premium</button>
    </div>
  </div>
  <p class="card-desc">A premium dark-themed pricing card with star badge, feature list, and a glowing CTA button.</p>
  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c-premium', this)">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="action-btn copy-btn" onclick="copyCode('c-premium', this)">
      <i class="fa-solid fa-copy"></i> Copy
    </button>
    <button onclick="addToCollection('Premium Plan Card')">Add to My Collection</button>
  </div>
  <pre id="c-premium" class="code-block"><code>&lt;div class="premium-card"&gt;
  &lt;div class="premium-badge"&gt;Most Popular&lt;/div&gt;
  &lt;div class="premium-icon"&gt;⭐&lt;/div&gt;
  &lt;h4&gt;Premium Plan&lt;/h4&gt;
  &lt;p class="premium-price"&gt;$&lt;span&gt;19&lt;/span&gt;&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
  &lt;p&gt;Best for growing teams and businesses.&lt;/p&gt;
  &lt;ul class="premium-features"&gt;
    &lt;li&gt;✓ Unlimited projects&lt;/li&gt;
    &lt;li&gt;✓ 100 GB storage&lt;/li&gt;
    &lt;li&gt;✓ Priority support&lt;/li&gt;
    &lt;li&gt;✓ Custom domain&lt;/li&gt;
    &lt;li&gt;✓ Analytics dashboard&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button class="premium-btn"&gt;Choose Premium&lt;/button&gt;
&lt;/div&gt;

.premium-card {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 1px solid rgba(108,92,231,0.4);
  border-radius: 20px;
  padding: 28px 24px;
  color: #fff;
  text-align: center;
  max-width: 240px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.premium-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 50px rgba(108,92,231,0.3); }
.premium-badge {
  display: inline-block;
  background: rgba(108,92,231,0.25);
  color: #c4b5fd;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  border: 1px solid rgba(108,92,231,0.4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.premium-icon { font-size: 32px; margin-bottom: 8px; }
.premium-card h4 { font-size: 18px; font-weight: 700; color: #fff; margin: 0 0 6px; }
.premium-price { font-size: 14px; color: #c4b5fd; margin: 0 0 6px; }
.premium-amount { font-size: 36px; font-weight: 800; color: #fff; }
.premium-period { font-size: 14px; color: #8b7fd4; }
.premium-card p { font-size: 13px; color: #a0a0c0; margin: 0 0 14px; }
.premium-features {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  text-align: left;
}
.premium-features li {
  font-size: 13px;
  color: #d0d0f0;
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.premium-features li i { color: #7c6fcd; font-size: 12px; }
.premium-btn {
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(135deg, #6c5ce7, #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  box-shadow: 0 4px 20px rgba(108,92,231,0.5);
}
.premium-btn:hover { opacity: 0.9; transform: translateY(-2px); }</code></pre>
</div>


<!-- =============================================
     ADVANCED PLAN CARD
     ============================================= -->
<div class="component-card" data-name="advanced plan card pricing enterprise" data-cat="commerce">
  <div class="card-top">
    <span class="card-label">Advanced Plan</span>
    <span class="card-tag tag-trending">Advanced</span>
  </div>
  <div class="card-preview dark-preview">
    <div class="advanced-card">
      <div class="advanced-badge">Enterprise</div>
      <div class="advanced-icon">🚀</div>
      <h4>Advanced Plan</h4>
      <p class="advanced-price">$<span class="advanced-amount">49</span><span class="advanced-period">/mo</span></p>
      <p class="advanced-desc">For power users, agencies & enterprises.</p>
      <ul class="advanced-features">
        <li><i class="fa-solid fa-check"></i> Unlimited everything</li>
        <li><i class="fa-solid fa-check"></i> 1 TB storage</li>
        <li><i class="fa-solid fa-check"></i> Dedicated support</li>
        <li><i class="fa-solid fa-check"></i> White-label option</li>
        <li><i class="fa-solid fa-check"></i> Advanced analytics</li>
      </ul>
      <button class="advanced-btn">Go Advanced</button>
    </div>
  </div>
  <p class="card-desc">A dark enterprise-tier pricing card with gold accents, feature list, and a premium CTA button.</p>
  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c-advanced', this)">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="action-btn copy-btn" onclick="copyCode('c-advanced', this)">
      <i class="fa-solid fa-copy"></i> Copy
    </button>
    <button onclick="addToCollection('Advanced Plan Card')">Add to My Collection</button>
  </div>
  <pre id="c-advanced" class="code-block"><code>&lt;div class="advanced-card"&gt;
  &lt;div class="advanced-badge"&gt;Enterprise&lt;/div&gt;
  &lt;div class="advanced-icon"&gt;🚀&lt;/div&gt;
  &lt;h4&gt;Advanced Plan&lt;/h4&gt;
  &lt;p class="advanced-price"&gt;$&lt;span&gt;49&lt;/span&gt;&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
  &lt;p&gt;For power users, agencies and enterprises.&lt;/p&gt;
  &lt;ul class="advanced-features"&gt;
    &lt;li&gt;✓ Unlimited everything&lt;/li&gt;
    &lt;li&gt;✓ 1 TB storage&lt;/li&gt;
    &lt;li&gt;✓ Dedicated support&lt;/li&gt;
    &lt;li&gt;✓ White-label option&lt;/li&gt;
    &lt;li&gt;✓ Advanced analytics&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button class="advanced-btn"&gt;Go Advanced&lt;/button&gt;
&lt;/div&gt;

.advanced-card {
  background: linear-gradient(135deg, #0f0f1a, #1a1200);
  border: 1px solid rgba(212,175,55,0.35);
  border-radius: 20px;
  padding: 28px 24px;
  color: #fff;
  text-align: center;
  max-width: 240px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.advanced-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 50px rgba(212,175,55,0.2); }
.advanced-badge {
  display: inline-block;
  background: rgba(212,175,55,0.15);
  color: #f0c040;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  border: 1px solid rgba(212,175,55,0.4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.advanced-icon { font-size: 32px; margin-bottom: 8px; }
.advanced-card h4 { font-size: 18px; font-weight: 700; color: #fff; margin: 0 0 6px; }
.advanced-price { font-size: 14px; color: #f0c040; margin: 0 0 6px; }
.advanced-amount { font-size: 36px; font-weight: 800; color: #fff; }
.advanced-period { font-size: 14px; color: #a08030; }
.advanced-card p { font-size: 13px; color: #a0a090; margin: 0 0 14px; }
.advanced-features {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  text-align: left;
}
.advanced-features li {
  font-size: 13px;
  color: #d0d0b0;
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.advanced-features li i { color: #d4af37; font-size: 12px; }
.advanced-btn {
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(135deg, #b8860b, #d4af37);
  color: #0f0f1a;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  box-shadow: 0 4px 20px rgba(212,175,55,0.4);
}
.advanced-btn:hover { opacity: 0.9; transform: translateY(-2px); }</code></pre>
</div>
    

    <!-- Image Card -->
    <div class="component-card" data-name="image card photo media" data-cat="content">
      <div class="card-top">
        <span class="card-label">Image Card</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="card-preview">
        <div class="image-card">
          <div class="image-card-thumb">
            <div class="image-placeholder"><i class="fa-solid fa-image"></i></div>
          </div>
          <div class="image-card-body">
            <span class="image-tag">Nature</span>
            <h4>Scenic View</h4>
            <p>Beautiful scenic card design for nature and travel content.</p>
            <a href="#" class="image-card-link">Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <p class="card-desc">A media card with a thumbnail area, category tag, title, and a read more link.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c6', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c6', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Image Card')">Add to My Collection</button>
      </div>
      <pre id="c6" class="code-block"><code>&lt;div class="image-card"&gt;
  &lt;img src="your-image.jpg" alt="..."&gt;
  &lt;div class="image-card-body"&gt;
    &lt;span class="tag"&gt;Nature&lt;/span&gt;
    &lt;h4&gt;Scenic View&lt;/h4&gt;
    &lt;p&gt;Beautiful scenic card design.&lt;/p&gt;
    &lt;a href="#"&gt;Read More →&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

.image-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  max-width: 280px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.image-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,0.12); }</code></pre>
    </div>

    <!-- Blog Card -->
    <div class="component-card" data-name="blog card article post" data-cat="content">
      <div class="card-top">
        <span class="card-label">Blog Card</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="blog-card">
          <div class="blog-thumb">
            <div class="blog-thumb-inner"></div>
            <span class="blog-cat">Design</span>
          </div>
          <div class="blog-body">
            <div class="blog-meta">
              <span><i class="fa-solid fa-calendar-days"></i> May 2026</span>
              <span><i class="fa-solid fa-clock"></i> 5 min read</span>
            </div>
            <h4>Getting Started with UI Design</h4>
            <p>Learn the fundamentals of modern UI/UX design with practical tips.</p>
            <div class="blog-footer">
              <div class="blog-author">
                <div class="blog-author-avatar">AD</div>
                <span>Alex Dev</span>
              </div>
              <a href="#" class="blog-link">Read <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      <p class="card-desc">A full-featured blog article card with category, date, author, and read time.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c7', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c7', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Blog Card')">Add to My Collection</button>
      </div>
      <pre id="c7" class="code-block"><code>&lt;div class="blog-card"&gt;
  &lt;div class="blog-thumb"&gt;
    &lt;img src="..." alt="..."&gt;
    &lt;span class="blog-cat"&gt;Design&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="blog-body"&gt;
    &lt;div class="meta"&gt;May 2026 · 5 min read&lt;/div&gt;
    &lt;h4&gt;Getting Started with UI Design&lt;/h4&gt;
    &lt;p&gt;Learn UI fundamentals easily.&lt;/p&gt;
    &lt;div class="blog-footer"&gt;
      &lt;span&gt;Alex Dev&lt;/span&gt;
      &lt;a href="#"&gt;Read →&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

.blog-card {
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  max-width: 290px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.blog-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,0.12); }</code></pre>
    </div>

    <!-- Notification Card -->
    <div class="component-card" data-name="notification card alert message" data-cat="social">
      <div class="card-top">
        <span class="card-label">Notification Card</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <div class="notif-stack">
          <div class="notif-card notif-purple">
            <div class="notif-icon"><i class="fa-solid fa-bell"></i></div>
            <div class="notif-body">
              <h4>New Message</h4>
              <p>You have received a new message from Alex.</p>
              <span class="notif-time">2 min ago</span>
            </div>
            <button class="notif-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="notif-card notif-green">
            <div class="notif-icon notif-icon-green"><i class="fa-solid fa-check"></i></div>
            <div class="notif-body">
              <h4>Upload Complete</h4>
              <p>Your file has been successfully uploaded.</p>
              <span class="notif-time">Just now</span>
            </div>
            <button class="notif-close"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </div>
      <p class="card-desc">Compact notification cards with icon, message, timestamp, and dismiss button.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c8', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c8', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Notification Card')">Add to My Collection</button>
      </div>
      <pre id="c8" class="code-block"><code>&lt;div class="notif-card"&gt;
  &lt;div class="notif-icon"&gt;🔔&lt;/div&gt;
  &lt;div class="notif-body"&gt;
    &lt;h4&gt;New Message&lt;/h4&gt;
    &lt;p&gt;You have received a new message.&lt;/p&gt;
    &lt;span&gt;2 min ago&lt;/span&gt;
  &lt;/div&gt;
  &lt;button class="notif-close"&gt;✕&lt;/button&gt;
&lt;/div&gt;

.notif-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #fff;
  border-left: 4px solid #6c5ce7;
  border-radius: 10px;
  padding: 14px 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transition: transform 0.25s;
}
.notif-card:hover { transform: translateX(4px); }</code></pre>
    </div>

    <!-- Social Media Card -->
    <div class="component-card" data-name="social media card tweet post" data-cat="social">
      <div class="card-top">
        <span class="card-label">Social Card</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <div class="social-card">
          <div class="social-header">
            <div class="social-avatar">JD</div>
            <div class="social-user">
              <strong>John Doe</strong>
              <span>@johndoe · 2h</span>
            </div>
            <div class="social-platform"><i class="fab fa-x-twitter"></i></div>
          </div>
          <p class="social-text">Just launched my new UI component library! Check it out and let me know what you think. 🚀</p>
          <div class="social-actions">
            <button class="social-btn"><i class="fa-regular fa-heart"></i> 42</button>
            <button class="social-btn"><i class="fa-regular fa-comment"></i> 12</button>
            <button class="social-btn"><i class="fa-solid fa-retweet"></i> 5</button>
            <button class="social-btn share-btn"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
          </div>
        </div>
      </div>
      <p class="card-desc">A Twitter/X-style social card with avatar, actions bar, and hover interactions.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('c9', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn copy-btn" onclick="copyCode('c9', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button onclick="addToCollection('Social Media Card')">Add to My Collection</button>
      </div>
      <pre id="c9" class="code-block"><code>&lt;div class="social-card"&gt;
  &lt;div class="social-header"&gt;
    &lt;div class="social-avatar"&gt;JD&lt;/div&gt;
    &lt;div&gt;
      &lt;strong&gt;John Doe&lt;/strong&gt;
      &lt;span&gt;@johndoe · 2h&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;p&gt;Just launched my new UI library! 🚀&lt;/p&gt;
  &lt;div class="social-actions"&gt;
    &lt;button&gt;♥ 42&lt;/button&gt;
    &lt;button&gt;💬 12&lt;/button&gt;
    &lt;button&gt;🔄 5&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

.social-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 20px;
  max-width: 320px;
  transition: box-shadow 0.3s;
}
.social-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.1); }</code></pre>
    </div>

   
<!-- Glassmorphism Card -->
<div class="component-card" data-name="glassmorphism modern blur card" data-cat="content">
  <div class="card-top">
    <span class="card-label">Glass Card</span>
    <span class="card-tag tag-trending">Modern</span>
  </div>

  <div class="card-preview dark-preview">
    <div class="glass-card">
      <div class="glass-icon">
        <i class="fa-solid fa-gem"></i>
      </div>

      <h4>Glass UI</h4>

      <p>
        Beautiful frosted glass effect with modern gradients.
      </p>

      <button class="glass-btn">
        Explore
      </button>
    </div>
  </div>

  <p class="card-desc">
    Modern glassmorphism card with blur and hover effects.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c10', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c10', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c10" class="code-block"><code>&lt;div class="glass-card"&gt;
  &lt;div class="glass-icon"&gt;
    &lt;i class="fa-solid fa-gem"&gt;&lt;/i&gt;
  &lt;/div&gt;

  &lt;h4&gt;Glass UI&lt;/h4&gt;

  &lt;p&gt;
    Beautiful frosted glass effect with modern gradients.
  &lt;/p&gt;

  &lt;button class="glass-btn"&gt;
    Explore
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
</div>

<!-- Stats Card -->
<div class="component-card" data-name="analytics stats dashboard card" data-cat="content">
  <div class="card-top">
    <span class="card-label">Stats Card</span>
    <span class="card-tag tag-popular">Popular</span>
  </div>

  <div class="card-preview">
    <div class="stats-card">
      <div class="stats-icon">
        <i class="fa-solid fa-chart-line"></i>
      </div>

      <div class="stats-info">
        <h3>24.8K</h3>
        <p>Total Visitors</p>
      </div>

      <span class="stats-growth">
        +12%
      </span>
    </div>
  </div>

  <p class="card-desc">
    Dashboard analytics card with live growth indicator.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c11', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c11', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c11" class="code-block"><code>&lt;div class="stats-card"&gt;
  &lt;div class="stats-icon"&gt;
    &lt;i class="fa-solid fa-chart-line"&gt;&lt;/i&gt;
  &lt;/div&gt;

  &lt;div class="stats-info"&gt;
    &lt;h3&gt;24.8K&lt;/h3&gt;
    &lt;p&gt;Total Visitors&lt;/p&gt;
  &lt;/div&gt;

  &lt;span class="stats-growth"&gt;
    +12%
  &lt;/span&gt;
&lt;/div&gt;</code></pre>
</div>

<!-- Testimonial Card -->
<div class="component-card" data-name="testimonial review customer feedback card" data-cat="social">
  <div class="card-top">
    <span class="card-label">Testimonial Card</span>
    <span class="card-tag tag-essential">Essential</span>
  </div>

  <div class="card-preview">
    <div class="testimonial-card">

      <div class="testimonial-stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>

      <p class="testimonial-text">
        “UIverse has completely improved my workflow. Amazing components!”
      </p>

      <div class="testimonial-user">

        <div class="testimonial-avatar">
          EM
        </div>

        <div>
          <strong>Emma Wilson</strong>
          <span>Frontend Developer</span>
        </div>

      </div>

    </div>
  </div>

  <p class="card-desc">
    Customer review card with star ratings and profile section.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c12', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c12', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c12" class="code-block"><code>&lt;div class="testimonial-card"&gt;
  &lt;p&gt;
    Amazing UI components and smooth experience.
  &lt;/p&gt;
&lt;/div&gt;</code></pre>
</div>

<!-- Music Player Card -->
<div class="component-card" data-name="music player audio media card" data-cat="content">
  <div class="card-top">
    <span class="card-label">Music Card</span>
    <span class="card-tag tag-trending">Trending</span>
  </div>

  <div class="card-preview dark-preview">

    <div class="music-card">

      <div class="music-cover">
        <i class="fa-solid fa-music"></i>
      </div>

      <h4>Night Vibes</h4>

      <p>Lofi Chill Mix</p>

      <div class="music-controls">

        <button>
          <i class="fa-solid fa-backward"></i>
        </button>

        <button class="play-btn">
          <i class="fa-solid fa-play"></i>
        </button>

        <button>
          <i class="fa-solid fa-forward"></i>
        </button>

      </div>

    </div>

  </div>

  <p class="card-desc">
    Music streaming inspired UI card with controls.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c13', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c13', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c13" class="code-block"><code>&lt;div class="music-card"&gt;
  &lt;h4&gt;Night Vibes&lt;/h4&gt;
&lt;/div&gt;</code></pre>
</div>

<!-- Team Member Card -->
<div class="component-card" data-name="team member company profile card" data-cat="profile">

  <div class="card-top">
    <span class="card-label">Team Card</span>
    <span class="card-tag tag-popular">Popular</span>
  </div>

  <div class="card-preview">

    <div class="team-card">

      <div class="team-cover"></div>

      <div class="team-avatar">
        SK
      </div>

      <div class="team-body">

        <h4>Sneha Kapoor</h4>

        <p>UI/UX Designer</p>

        <div class="team-socials">

          <a href="#">
            <i class="fab fa-dribbble"></i>
          </a>

          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>

          <a href="#">
            <i class="fab fa-github"></i>
          </a>

        </div>

      </div>

    </div>

  </div>

  <p class="card-desc">
    Professional team member profile card with social links.
  </p>

  <div class="actions">
    <button class="action-btn view-btn" onclick="toggleCode('c14', this)">
      <i class="fa-solid fa-code"></i>
      View Code
    </button>

    <button class="action-btn copy-btn" onclick="copyCode('c14', this)">
      <i class="fa-solid fa-copy"></i>
      Copy
    </button>
  </div>

  <pre id="c14" class="code-block"><code>&lt;div class="team-card"&gt;
  &lt;h4&gt;Sneha Kapoor&lt;/h4&gt;
&lt;/div&gt;</code></pre>

</div>

  </div><!-- /cards-grid -->

</main>
</template>

<script>
export default { name: 'Cards' }
</script>
