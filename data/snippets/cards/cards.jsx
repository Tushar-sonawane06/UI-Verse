import React from 'react';

export default function cards(){
  return (
    <>
      <main className="main-home">
      
        {/* Page Hero */}
        <div className="page-hero">
          <div className="page-hero-left">
            <div className="breadcrumb">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right"></i>
              <span>Cards</span>
            </div>
            <h1 className="page-title">Card Components</h1>
            <p className="page-desc">A rich collection of reusable card layouts — from profile cards to product, blog, notification, and social media cards. Hover to interact, click to copy.</p>
            <div className="page-meta">
              <span className="meta-badge"><i className="fa-solid fa-layer-group"></i> 9 Components</span>
              <span className="meta-badge"><i className="fa-solid fa-code"></i> Pure CSS</span>
              <span className="meta-badge"><i className="fa-solid fa-hand-pointer"></i> Hover Effects</span>
            </div>
          </div>
          <div className="page-hero-right">
              <div className="hero-card-preview">
                <div className="mini-profile-card">
                  <div className="mini-avatar">ST</div>
                  <div>
                    <strong>saiteja</strong>
                    <span>Engineer · UIverse</span>
                  </div>
                </div>
              <div className="mini-stat-row">
                <div className="mini-stat"><span>120+</span><p>Cards</p></div>
                <div className="mini-stat"><span>9</span><p>Styles</p></div>
                <div className="mini-stat"><span>100%</span><p>Free</p></div>
              </div>
            </div>
          </div>
        </div>
      
        {/* Tutorial Mode entry */}
        <div className="tutorial-mode-entry" style="margin: 14px 0; display:flex; justify-content:flex-end;">
          <button id="startTutorialMode" type="button" className="nav-btn outline-nav-btn" style="padding: 10px 14px; cursor:pointer;">
            <i className="fa-solid fa-graduation-cap"></i> Start tutorial
          </button>
        </div>
      
        {/* Filter Bar */}
        <div className="filter-bar">
          <button className="filter-btn active" onclick="filterCards('all', this)">All</button>
          <button className="filter-btn" onclick="filterCards('profile', this)">Profile</button>
          <button className="filter-btn" onclick="filterCards('content', this)">Content</button>
          <button className="filter-btn" onclick="filterCards('social', this)">Social</button>
          <button className="filter-btn" onclick="filterCards('commerce', this)">Commerce</button>
          <div className="filter-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Filter cards..." oninput="liveFilter(this.value)" />
          </div>
        </div>
      
        {/* Cards Grid */}
        <div className="cards-grid" id="cardsGrid">
      
          {/* Profile Card */}
          <div className="component-card" data-name="profile card hover avatar" data-cat="profile">
            <div className="card-top">
              <span className="card-label">Profile Card</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <div className="profile-card">
                <div className="profile-avatar">LN</div>
                <h3 className="profile-name">Likhitha Nagraj</h3>
                <p className="profile-role">Embedded Systems Engineer</p>
                <button className="profile-btn">Follow</button>
              </div>
            </div>
            <p className="card-desc">A centered profile card with avatar, name, role, and a follow button. Lifts on hover.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c1', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c1', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c1" className="code-block"><code>&lt;div className="profile-card"&gt;
        &lt;div className="profile-avatar"&gt;LN&lt;/div&gt;
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
      
          {/* Student Card */}
          <div className="component-card" data-name="student card connect profile" data-cat="profile">
            <div className="card-top">
              <span className="card-label">Student Card</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <div className="profile-card student-card">
                <div className="profile-avatar" style="background: linear-gradient(135deg, #eb6835, #fdcb6e);">AP</div>
                <h3 className="profile-name">Ankit Pardeshi</h3>
                <p className="profile-role">AI &amp; Data Science Student</p>
                <button className="profile-btn connect-btn">Connect</button>
              </div>
            </div>
            <p className="card-desc">A variant of the profile card with a warm gradient and a connect CTA — perfect for student or developer portfolios.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c2', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c2', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c2" className="code-block"><code>&lt;div className="profile-card student-card"&gt;
        &lt;div className="profile-avatar"&gt;AP&lt;/div&gt;
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
      
          {/* Simple Card */}
          <div className="component-card" data-name="simple card basic clean" data-cat="content">
            <div className="card-top">
              <span className="card-label">Simple Card</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <div className="simple-card">
                <h4>Card Title</h4>
                <p>This is a simple card component with a clean, minimal design.</p>
                <button className="simple-card-btn">Learn More</button>
              </div>
            </div>
            <p className="card-desc">A minimal content card — the building block for most UI layouts.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c3', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c3', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c3" className="code-block"><code>&lt;div className="simple-card"&gt;
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
      
          {/* Product Card */}
          <div className="component-card" data-name="product card price add to cart" data-cat="commerce">
            <div className="card-top">
              <span className="card-label">Product Card</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview">
              <div className="product-card">
                <div className="product-badge">New</div>
                <div className="product-icon">🎧</div>
                <h4>Premium Headphones</h4>
                <p className="product-price">$49.99</p>
                <p className="product-desc">High-quality audio with noise cancellation.</p>
                <button className="product-btn">Add to Cart</button>
              </div>
            </div>
            <p className="card-desc">An e-commerce product card with badge, price highlight, and a cart CTA button.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c4', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c4', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c4" className="code-block"><code>&lt;div className="product-card"&gt;
        &lt;div className="product-badge"&gt;New&lt;/div&gt;
        &lt;div className="product-icon"&gt;🎧&lt;/div&gt;
        &lt;h4&gt;Premium Headphones&lt;/h4&gt;
        &lt;p className="price"&gt;$49.99&lt;/p&gt;
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
      
          {/* Pricing Card */}
          <div className="component-card" data-name="pricing card plan subscription" data-cat="commerce">
            <div className="card-top">
              <span className="card-label">Pricing Card</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview dark-preview">
              <div className="pricing-card">
                <div className="pricing-badge">Most Popular</div>
                <h4>Pro Plan</h4>
                <div className="pricing-price"><span className="pricing-currency">$</span>19<span className="pricing-period">/mo</span></div>
                <ul className="pricing-features">
                  <li><i className="fa-solid fa-check"></i> Unlimited components</li>
                  <li><i className="fa-solid fa-check"></i> Priority support</li>
                  <li><i className="fa-solid fa-check"></i> Custom themes</li>
                </ul>
                <button className="pricing-btn">Choose Plan</button>
              </div>
            </div>
            <p className="card-desc">A premium pricing card with feature list, price, and a highlighted CTA button.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c5', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c5', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c5" className="code-block"><code>&lt;div className="pricing-card"&gt;
        &lt;div className="pricing-badge"&gt;Most Popular&lt;/div&gt;
        &lt;h4&gt;Pro Plan&lt;/h4&gt;
        &lt;div className="price"&gt;$19&lt;span&gt;/mo&lt;/span&gt;&lt;/div&gt;
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
      
          {/* Image Card */}
          <div className="component-card" data-name="image card photo media" data-cat="content">
            <div className="card-top">
              <span className="card-label">Image Card</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <div className="image-card">
                <div className="image-card-thumb">
                  <div className="image-placeholder"><i className="fa-solid fa-image"></i></div>
                </div>
                <div className="image-card-body">
                  <span className="image-tag">Nature</span>
                  <h4>Scenic View</h4>
                  <p>Beautiful scenic card design for nature and travel content.</p>
                  <a href="#" className="image-card-link">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <p className="card-desc">A media card with a thumbnail area, category tag, title, and a read more link.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c6', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c6', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c6" className="code-block"><code>&lt;div className="image-card"&gt;
        &lt;img src="your-image.jpg" alt="..."&gt;
        &lt;div className="image-card-body"&gt;
          &lt;span className="tag"&gt;Nature&lt;/span&gt;
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
      
      
      {/* =============================================
           TRIAL PLAN CARD
           ============================================= */}
      <div className="component-card" data-name="trial plan card pricing 14 day" data-cat="commerce">
        <div className="card-top">
          <span className="card-label">Trial Plan</span>
          <span className="card-tag tag-trending">Trial</span>
        </div>
        <div className="card-preview">
          <div className="trial-card">
            <div className="trial-badge">14-Day Trial</div>
            <div className="trial-icon">⏱️</div>
            <h4>Trial Plan</h4>
            <p className="trial-price-label">Free for 14 days</p>
            <p className="trial-then">then $9<span>/mo</span></p>
            <p className="trial-desc">Full access. No credit card required.</p>
            <ul className="trial-features">
              <li><span className="feat-check">✓</span> 20 projects</li>
              <li><span className="feat-check">✓</span> 10 GB storage</li>
              <li><span className="feat-check">✓</span> Email support</li>
              <li><span className="feat-check">✓</span> Custom domain</li>
              <li><span className="feat-cross">✗</span> Advanced analytics</li>
            </ul>
            <button className="trial-btn">Start Free Trial</button>
          </div>
        </div>
        <p className="card-desc">A trial plan card with countdown feel, free period highlight, and post-trial pricing shown clearly.</p>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c-trial', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('c-trial', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
          <button onclick="addToCollection('Trial Plan Card')">Add to My Collection</button>
        </div>
        <pre id="c-trial" className="code-block"><code>&lt;div className="trial-card"&gt;
        &lt;div className="trial-badge"&gt;14-Day Trial&lt;/div&gt;
        &lt;div className="trial-icon"&gt;⏱️&lt;/div&gt;
        &lt;h4&gt;Trial Plan&lt;/h4&gt;
        &lt;p className="trial-price-label"&gt;Free for 14 days&lt;/p&gt;
        &lt;p className="trial-then"&gt;then $9&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
        &lt;p&gt;Full access. No credit card required.&lt;/p&gt;
        &lt;ul className="trial-features"&gt;
          &lt;li&gt;&lt;span className="feat-check"&gt;✓&lt;/span&gt; 20 projects&lt;/li&gt;
          &lt;li&gt;&lt;span className="feat-check"&gt;✓&lt;/span&gt; 10 GB storage&lt;/li&gt;
          &lt;li&gt;&lt;span className="feat-check"&gt;✓&lt;/span&gt; Email support&lt;/li&gt;
          &lt;li&gt;&lt;span className="feat-check"&gt;✓&lt;/span&gt; Custom domain&lt;/li&gt;
          &lt;li&gt;&lt;span className="feat-cross"&gt;✗&lt;/span&gt; Advanced analytics&lt;/li&gt;
        &lt;/ul&gt;
        &lt;button className="trial-btn"&gt;Start Free Trial&lt;/button&gt;
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
      
      {/* =============================================
           GLASSMORPHISM PROFILE CARD
           ============================================= */}
      <div className="component-card" data-name="glass profile modern card ui" data-cat="profile">
        <div className="card-top">
          <span className="card-label">Glass Profile Card</span>
          <span className="card-tag tag-trending">Modern</span>
        </div>
      
        <div className="card-preview dark-preview">
          <div className="glass-card">
            <div className="glass-avatar">DP</div>
      
            <h4>Dipanita Mondal</h4>
      
            <p>Frontend Developer</p>
      
            <div className="glass-stats">
              <div>
                <strong>24K</strong>
                <span>Followers</span>
              </div>
      
              <div>
                <strong>182</strong>
                <span>Projects</span>
              </div>
            </div>
      
            <button className="glass-btn">View Profile</button>
          </div>
        </div>
      
        <p className="card-desc">
          A futuristic glassmorphism profile card with blur effects
          and gradients.
        </p>
      
        <div className="actions">
          <button className="action-btn view-btn">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
        </div>
      </div>
      
      {/* =============================================
           NEUMORPHISM CARD
           ============================================= */}
      <div className="component-card" data-name="neomorphism soft ui card" data-cat="content">
        <div className="card-top">
          <span className="card-label">Neumorphism Card</span>
          <span className="card-tag tag-essential">Soft UI</span>
        </div>
      
        <div className="card-preview">
          <div className="neo-card">
            <div className="neo-icon">
              <i className="fa-solid fa-layer-group"></i>
            </div>
      
            <h4>Design System</h4>
      
            <p>
              Build reusable interfaces using clean and scalable
              UI patterns.
            </p>
      
            <button className="neo-btn">Explore</button>
          </div>
        </div>
      
        <p className="card-desc">
          A soft neumorphic card with elegant shadows and
          tactile interactions.
        </p>
      
        <div className="actions">
          <button className="action-btn view-btn">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
        </div>
      </div>
      
      {/* =============================================
           CYBERPUNK CARD
           ============================================= */}
      <div className="component-card" data-name="cyberpunk neon futuristic card" data-cat="social">
        <div className="card-top">
          <span className="card-label">Cyberpunk Card</span>
          <span className="card-tag tag-trending">Futuristic</span>
        </div>
      
        <div className="card-preview dark-preview">
          <div className="cyber-card">
            <span className="cyber-badge">LIVE</span>
      
            <h3>Cyber Dashboard</h3>
      
            <p>
              Futuristic neon dashboard card with glowing
              effects and dark aesthetics.
            </p>
      
            <div className="cyber-actions">
              <button>Launch</button>
              <button>Preview</button>
            </div>
          </div>
        </div>
      
        <p className="card-desc">
          A glowing cyberpunk-inspired UI card with neon borders
          and hover animations.
        </p>
      
        <div className="actions">
          <button className="action-btn view-btn">
            <i className="fa-solid fa-code"></i>
            View Code
          </button>
      
          <button className="action-btn copy-btn">
            <i className="fa-solid fa-copy"></i>
            Copy
          </button>
        </div>
      </div>
      
      {/* =============================================
           PREMIUM PLAN CARD
           ============================================= */}
      <div className="component-card" data-name="premium plan card pricing popular" data-cat="commerce">
        <div className="card-top">
          <span className="card-label">Premium Plan</span>
          <span className="card-tag tag-popular">Popular</span>
        </div>
        <div className="card-preview dark-preview">
          <div className="premium-card">
            <div className="premium-badge">Most Popular</div>
            <div className="premium-icon">⭐</div>
            <h4>Premium Plan</h4>
            <p className="premium-price">$<span className="premium-amount">19</span><span className="premium-period">/mo</span></p>
            <p className="premium-desc">Best for growing teams and businesses.</p>
            <ul className="premium-features">
              <li><i className="fa-solid fa-check"></i> Unlimited projects</li>
              <li><i className="fa-solid fa-check"></i> 100 GB storage</li>
              <li><i className="fa-solid fa-check"></i> Priority support</li>
              <li><i className="fa-solid fa-check"></i> Custom domain</li>
              <li><i className="fa-solid fa-check"></i> Analytics dashboard</li>
            </ul>
            <button className="premium-btn">Choose Premium</button>
          </div>
        </div>
        <p className="card-desc">A premium dark-themed pricing card with star badge, feature list, and a glowing CTA button.</p>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c-premium', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('c-premium', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
          <button onclick="addToCollection('Premium Plan Card')">Add to My Collection</button>
        </div>
        <pre id="c-premium" className="code-block"><code>&lt;div className="premium-card"&gt;
        &lt;div className="premium-badge"&gt;Most Popular&lt;/div&gt;
        &lt;div className="premium-icon"&gt;⭐&lt;/div&gt;
        &lt;h4&gt;Premium Plan&lt;/h4&gt;
        &lt;p className="premium-price"&gt;$&lt;span&gt;19&lt;/span&gt;&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
        &lt;p&gt;Best for growing teams and businesses.&lt;/p&gt;
        &lt;ul className="premium-features"&gt;
          &lt;li&gt;✓ Unlimited projects&lt;/li&gt;
          &lt;li&gt;✓ 100 GB storage&lt;/li&gt;
          &lt;li&gt;✓ Priority support&lt;/li&gt;
          &lt;li&gt;✓ Custom domain&lt;/li&gt;
          &lt;li&gt;✓ Analytics dashboard&lt;/li&gt;
        &lt;/ul&gt;
        &lt;button className="premium-btn"&gt;Choose Premium&lt;/button&gt;
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
      
      
      {/* =============================================
           ADVANCED PLAN CARD
           ============================================= */}
      <div className="component-card" data-name="advanced plan card pricing enterprise" data-cat="commerce">
        <div className="card-top">
          <span className="card-label">Advanced Plan</span>
          <span className="card-tag tag-trending">Advanced</span>
        </div>
        <div className="card-preview dark-preview">
          <div className="advanced-card">
            <div className="advanced-badge">Enterprise</div>
            <div className="advanced-icon">🚀</div>
            <h4>Advanced Plan</h4>
            <p className="advanced-price">$<span className="advanced-amount">49</span><span className="advanced-period">/mo</span></p>
            <p className="advanced-desc">For power users, agencies & enterprises.</p>
            <ul className="advanced-features">
              <li><i className="fa-solid fa-check"></i> Unlimited everything</li>
              <li><i className="fa-solid fa-check"></i> 1 TB storage</li>
              <li><i className="fa-solid fa-check"></i> Dedicated support</li>
              <li><i className="fa-solid fa-check"></i> White-label option</li>
              <li><i className="fa-solid fa-check"></i> Advanced analytics</li>
            </ul>
            <button className="advanced-btn">Go Advanced</button>
          </div>
        </div>
        <p className="card-desc">A dark enterprise-tier pricing card with gold accents, feature list, and a premium CTA button.</p>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('c-advanced', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('c-advanced', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
          <button onclick="addToCollection('Advanced Plan Card')">Add to My Collection</button>
        </div>
        <pre id="c-advanced" className="code-block"><code>&lt;div className="advanced-card"&gt;
        &lt;div className="advanced-badge"&gt;Enterprise&lt;/div&gt;
        &lt;div className="advanced-icon"&gt;🚀&lt;/div&gt;
        &lt;h4&gt;Advanced Plan&lt;/h4&gt;
        &lt;p className="advanced-price"&gt;$&lt;span&gt;49&lt;/span&gt;&lt;span&gt;/mo&lt;/span&gt;&lt;/p&gt;
        &lt;p&gt;For power users, agencies and enterprises.&lt;/p&gt;
        &lt;ul className="advanced-features"&gt;
          &lt;li&gt;✓ Unlimited everything&lt;/li&gt;
          &lt;li&gt;✓ 1 TB storage&lt;/li&gt;
          &lt;li&gt;✓ Dedicated support&lt;/li&gt;
          &lt;li&gt;✓ White-label option&lt;/li&gt;
          &lt;li&gt;✓ Advanced analytics&lt;/li&gt;
        &lt;/ul&gt;
        &lt;button className="advanced-btn"&gt;Go Advanced&lt;/button&gt;
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
          
      
          {/* Image Card */}
          <div className="component-card" data-name="image card photo media" data-cat="content">
            <div className="card-top">
              <span className="card-label">Image Card</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <div className="image-card">
                <div className="image-card-thumb">
                  <div className="image-placeholder"><i className="fa-solid fa-image"></i></div>
                </div>
                <div className="image-card-body">
                  <span className="image-tag">Nature</span>
                  <h4>Scenic View</h4>
                  <p>Beautiful scenic card design for nature and travel content.</p>
                  <a href="#" className="image-card-link">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <p className="card-desc">A media card with a thumbnail area, category tag, title, and a read more link.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c6', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c6', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button onclick="addToCollection('Image Card')">Add to My Collection</button>
            </div>
            <pre id="c6" className="code-block"><code>&lt;div className="image-card"&gt;
        &lt;img src="https://picsum.photos/500/300?random=20" alt="..."&gt;
        &lt;div className="image-card-body"&gt;
          &lt;span className="tag"&gt;Nature&lt;/span&gt;
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
      
          {/* Blog Card */}
          <div className="component-card" data-name="blog card article post" data-cat="content">
            <div className="card-top">
              <span className="card-label">Blog Card</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview">
              <div className="blog-card">
                <div className="blog-thumb">
                  <div className="blog-thumb-inner"></div>
                  <span className="blog-cat">Design</span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span><i className="fa-solid fa-calendar-days"></i> May 2026</span>
                    <span><i className="fa-solid fa-clock"></i> 5 min read</span>
                  </div>
                  <h4>Getting Started with UI Design</h4>
                  <p>Learn the fundamentals of modern UI/UX design with practical tips.</p>
                  <div className="blog-footer">
                    <div className="blog-author">
                      <div className="blog-author-avatar">AD</div>
                      <span>Alex Dev</span>
                    </div>
                    <a href="#" className="blog-link">Read <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <p className="card-desc">A full-featured blog article card with category, date, author, and read time.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c7', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c7', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c7" className="code-block"><code>&lt;div className="blog-card"&gt;
        &lt;div className="blog-thumb"&gt;
          &lt;img src="..." alt="..."&gt;
          &lt;span className="blog-cat"&gt;Design&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="blog-body"&gt;
          &lt;div className="meta"&gt;May 2026 · 5 min read&lt;/div&gt;
          &lt;h4&gt;Getting Started with UI Design&lt;/h4&gt;
          &lt;p&gt;Learn UI fundamentals easily.&lt;/p&gt;
          &lt;div className="blog-footer"&gt;
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
      
          {/* Notification Card */}
          <div className="component-card" data-name="notification card alert message" data-cat="social">
            <div className="card-top">
              <span className="card-label">Notification Card</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <div className="notif-stack">
                <div className="notif-card notif-purple">
                  <div className="notif-icon"><i className="fa-solid fa-bell"></i></div>
                  <div className="notif-body">
                    <h4>New Message</h4>
                    <p>You have received a new message from Alex.</p>
                    <span className="notif-time">2 min ago</span>
                  </div>
                  <button className="notif-close" aria-label="Dismiss notification" type="button"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="notif-card notif-green">
                  <div className="notif-icon notif-icon-green"><i className="fa-solid fa-check"></i></div>
                  <div className="notif-body">
                    <h4>Upload Complete</h4>
                    <p>Your file has been successfully uploaded.</p>
                    <span className="notif-time">Just now</span>
                  </div>
                  <button className="notif-close" aria-label="Dismiss notification" type="button"><i className="fa-solid fa-xmark"></i></button>
                </div>
              </div>
            </div>
            <p className="card-desc">Compact notification cards with icon, message, timestamp, and dismiss button.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c8', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c8', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c8" className="code-block"><code>&lt;div className="notif-card"&gt;
        &lt;div className="notif-icon"&gt;🔔&lt;/div&gt;
        &lt;div className="notif-body"&gt;
          &lt;h4&gt;New Message&lt;/h4&gt;
          &lt;p&gt;You have received a new message.&lt;/p&gt;
          &lt;span&gt;2 min ago&lt;/span&gt;
        &lt;/div&gt;
        &lt;button className="notif-close"&gt;✕&lt;/button&gt;
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
      
          {/* Social Media Card */}
          <div className="component-card" data-name="social media card tweet post" data-cat="social">
            <div className="card-top">
              <span className="card-label">Social Card</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview">
              <div className="social-card">
                <div className="social-header">
                  <div className="social-avatar">JD</div>
                  <div className="social-user">
                    <strong>John Doe</strong>
                    <span>@johndoe · 2h</span>
                  </div>
                  <div className="social-platform"><i className="fab fa-x-twitter"></i></div>
                </div>
                <p className="social-text">Just launched my new UI component library! Check it out and let me know what you think. 🚀</p>
                <div className="social-actions">
                  <button className="social-btn"><i className="fa-regular fa-heart"></i> 42</button>
                  <button className="social-btn"><i className="fa-regular fa-comment"></i> 12</button>
                  <button className="social-btn"><i className="fa-solid fa-retweet"></i> 5</button>
                  <button className="social-btn share-btn"><i className="fa-solid fa-arrow-up-from-bracket"></i></button>
                </div>
              </div>
            </div>
            <p className="card-desc">A Twitter/X-style social card with avatar, actions bar, and hover interactions.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c9', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c9', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c9" className="code-block"><code>&lt;div className="social-card"&gt;
        &lt;div className="social-header"&gt;
          &lt;div className="social-avatar"&gt;JD&lt;/div&gt;
          &lt;div&gt;
            &lt;strong&gt;John Doe&lt;/strong&gt;
            &lt;span&gt;@johndoe · 2h&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;p&gt;Just launched my new UI library! 🚀&lt;/p&gt;
        &lt;div className="social-actions"&gt;
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
      
          {/* 10. GLASSMORPHISM PROFILE CARD */}
          <div className="component-card" data-name="glassmorphic profile card glass blur astronaut" data-cat="profile">
            <div className="card-top">
              <span className="card-label">Glassmorphic Profile</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="card-preview dark-preview">
              <div className="glass-profile-card">
                <div className="glass-avatar"><i className="fa-solid fa-user-astronaut"></i></div>
                <h3 className="glass-name">Nova Vance</h3>
                <p className="glass-role">UX Researcher · Spatial UI</p>
                <div className="glass-social-row">
                  <a href="#"><i className="fa-brands fa-github"></i></a>
                  <a href="#"><i className="fa-brands fa-figma"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <p className="card-desc">A premium translucent profile card featuring ultra-smooth backdrop blur and hover transformations.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c10', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c10', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c10" className="code-block"><code>&lt;div className="glass-profile-card"&gt;
        &lt;div className="glass-avatar"&gt;&lt;i className="fa-solid fa-user-astronaut"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;h3 className="glass-name"&gt;Nova Vance&lt;/h3&gt;
        &lt;p className="glass-role"&gt;UX Researcher · Spatial UI&lt;/p&gt;
        &lt;div className="glass-social-row"&gt;
          &lt;a href="#"&gt;&lt;i className="fa-brands fa-github"&gt;&lt;/i&gt;&lt;/a&gt;
          &lt;a href="#"&gt;&lt;i className="fa-brands fa-figma"&gt;&lt;/i&gt;&lt;/a&gt;
          &lt;a href="#"&gt;&lt;i className="fa-brands fa-linkedin-in"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      .glass-profile-card {
        background: rgba(255, 255, 255, 0.07) !important;
        border: 1px solid rgba(255, 255, 255, 0.15) !important;
        backdrop-filter: blur(16px);
        border-radius: 24px;
        padding: 30px 24px;
        text-align: center;
        width: 250px;
        transition: all 0.3s ease;
      }
      .glass-profile-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
      }</code></pre>
          </div>
      
          {/* 11. EXPANDABLE INFORMATION CARD */}
          <div className="component-card" data-name="expandable information card telemetry metric" data-cat="content">
            <div className="card-top">
              <span className="card-label">Expandable Info Card</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="card-preview">
              <div className="expandable-info-card">
                <div className="card-header-icon"><i className="fa-solid fa-folder-open"></i></div>
                <h3 className="info-title">System Metrics</h3>
                <p className="info-desc">Real-time node cluster telemetry and latency monitoring dashboard.</p>
                <div className="expand-details">
                  <div className="detail-row"><span>Latency</span><strong>24ms</strong></div>
                  <div className="detail-row"><span>Uptime</span><strong>99.98%</strong></div>
                  <div className="detail-row"><span>Active Nodes</span><strong>14 / 16</strong></div>
                </div>
              </div>
            </div>
            <p className="card-desc">An interactive metrics index-tab card that unfolds beautifully to reveal detail telemetry stats on hover.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c11', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c11', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c11" className="code-block"><code>&lt;div className="expandable-info-card"&gt;
        &lt;div className="card-header-icon"&gt;&lt;i className="fa-solid fa-folder-open"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;h3 className="info-title"&gt;System Metrics&lt;/h3&gt;
        &lt;p className="info-desc"&gt;Real-time node cluster telemetry and latency monitoring.&lt;/p&gt;
        &lt;div className="expand-details"&gt;
          &lt;div className="detail-row"&gt;&lt;span&gt;Latency&lt;/span&gt;&lt;strong&gt;24ms&lt;/strong&gt;&lt;/div&gt;
          &lt;div className="detail-row"&gt;&lt;span&gt;Uptime&lt;/span&gt;&lt;strong&gt;99.98%&lt;/strong&gt;&lt;/div&gt;
          &lt;div className="detail-row"&gt;&lt;span&gt;Active Nodes&lt;/span&gt;&lt;strong&gt;14 / 16&lt;/strong&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      .expandable-info-card {
        background: #1e293b !important;
        border: 1px solid #334155 !important;
        border-radius: 20px;
        padding: 24px;
        width: 260px;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        overflow: hidden;
      }
      .expandable-info-card:hover .expand-details {
        max-height: 120px;
        opacity: 1;
      }</code></pre>
          </div>
      
          {/* 12. PRODUCT SHOWCASE CARD */}
          <div className="component-card" data-name="product showcase card watch commerce pricing" data-cat="commerce">
            <div className="card-top">
              <span className="card-label">Product Showcase</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="card-preview">
              <div className="product-showcase-card">
                <span className="showcase-badge">Premium</span>
                <div className="showcase-visual"><i className="fa-solid fa-clock"></i></div>
                <h3 className="showcase-name">Aero Chrono</h3>
                <div className="showcase-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <div className="showcase-footer">
                  <span className="showcase-price">$349</span>
                  <button className="showcase-btn">Buy Now</button>
                </div>
              </div>
            </div>
            <p className="card-desc">High-end e-commerce card offering product badge labels, animated star ratings, and scaling visual assets.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c12', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c12', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c12" className="code-block"><code>&lt;div className="product-showcase-card"&gt;
        &lt;span className="showcase-badge"&gt;Premium&lt;/span&gt;
        &lt;div className="showcase-visual"&gt;&lt;i className="fa-solid fa-clock"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;h3 className="showcase-name"&gt;Aero Chrono&lt;/h3&gt;
        &lt;div className="showcase-rating"&gt;
          &lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;
          &lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;
          &lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;
          &lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;
          &lt;i className="fa-solid fa-star-half-stroke"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;div className="showcase-footer"&gt;
          &lt;span className="showcase-price"&gt;$349&lt;/span&gt;
          &lt;button className="showcase-btn"&gt;Buy Now&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      .product-showcase-card {
        background: #0f172a !important;
        border: 1px solid #1e293b !important;
        border-radius: 20px;
        padding: 24px;
        width: 250px;
        position: relative;
        transition: all 0.3s;
      }
      .product-showcase-card:hover {
        transform: translateY(-8px);
        border-color: #ec4899 !important;
      }</code></pre>
          </div>
      
          {/* 13. STATISTICS DASHBOARD CARD */}
          <div className="component-card" data-name="statistics dashboard card revenue telemetry" data-cat="content">
            <div className="card-top">
              <span className="card-label">Dashboard Stat Card</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="card-preview">
              <div className="stat-dashboard-card">
                <div className="stat-header">
                  <div className="stat-icon-wrap"><i className="fa-solid fa-chart-line"></i></div>
                  <span className="stat-trend"><i className="fa-solid fa-arrow-trend-up"></i> +14.8%</span>
                </div>
                <div className="stat-value">$24,892.40</div>
                <div className="stat-label">Active Sales Revenue</div>
                <div className="stat-footer-bar">
                  <div className="stat-progress-bg"><div className="stat-progress-fill"></div></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Minimalist dashboard stat card featuring dynamic progress-bar filling and upward active trend indicator.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c13', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c13', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c13" className="code-block"><code>&lt;div className="stat-dashboard-card"&gt;
        &lt;div className="stat-header"&gt;
          &lt;div className="stat-icon-wrap"&gt;&lt;i className="fa-solid fa-chart-line"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;span className="stat-trend"&gt;&lt;i className="fa-solid fa-arrow-trend-up"&gt;&lt;/i&gt; +14.8%&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="stat-value"&gt;$24,892.40&lt;/div&gt;
        &lt;div className="stat-label"&gt;Active Sales Revenue&lt;/div&gt;
        &lt;div className="stat-footer-bar"&gt;
          &lt;div className="stat-progress-bg"&gt;&lt;div className="stat-progress-fill"&gt;&lt;/div&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      .stat-dashboard-card {
        background: #111827 !important;
        border: 1px solid #1f2937 !important;
        border-radius: 20px;
        padding: 24px;
        width: 250px;
        transition: all 0.3s;
      }
      .stat-dashboard-card:hover {
        transform: translateY(-6px);
        border-color: #3b82f6 !important;
      }</code></pre>
          </div>
      
          {/* 14. GRADIENT HOVER CARD */}
          <div className="component-card" data-name="gradient hover card glow cyberpunk" data-cat="content">
            <div className="card-top">
              <span className="card-label">Gradient Hover Card</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="card-preview">
              <div className="gradient-hover-card">
                <div className="glow-bg"></div>
                <div className="card-inner">
                  <div className="gradient-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                  <h3 className="gradient-card-title">Quantum Engine</h3>
                  <p className="gradient-card-desc">Interactive physics render rendering node with GPU clusters.</p>
                </div>
              </div>
            </div>
            <p className="card-desc">Premium cyberpunk layout that unleashes a gorgeous glowing neon border gradient backdrop blur on hover.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('c14', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('c14', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="c14" className="code-block"><code>&lt;div className="gradient-hover-card"&gt;
        &lt;div className="glow-bg"&gt;&lt;/div&gt;
        &lt;div className="card-inner"&gt;
          &lt;div className="gradient-icon"&gt;&lt;i className="fa-solid fa-wand-magic-sparkles"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;h3 className="gradient-card-title"&gt;Quantum Engine&lt;/h3&gt;
          &lt;p className="gradient-card-desc"&gt;Interactive physics render rendering node with GPU clusters.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      .gradient-hover-card {
        position: relative;
        width: 250px;
        border-radius: 20px;
        padding: 1px;
        background: rgba(255,255,255,0.05);
        transition: all 0.3s;
      }
      .gradient-hover-card:hover {
        transform: translateY(-6px);
        background: linear-gradient(135deg, #f43f5e, #a855f7);
      }</code></pre>
          </div>
      
        </div>{/* /cards-grid */}
      
      </main>
    </>
  );
}
