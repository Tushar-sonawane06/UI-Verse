import React from 'react';

export default function hero(){
  return (
    <>
      <main className="main-home">
      
        <header className="page-header">
          <h1>Hero Sections</h1>
          <p>Modern responsive landing page hero layouts with interactive visuals and reusable UI structures.</p>
        </header>
      
        <section className="hero-grid">
      
          {/* 1. GRADIENT HERO SECTION */}
          <div className="hero-card">
            <div className="hero-info">
              <h2>Gradient Hero Section</h2>
              <p>A vibrant fluid mesh gradient background with elegant overlay elements and modern typography.</p>
            </div>
            <div className="component-preview" id="preview-1" style="padding:0;">
              <div className="hero-wrapper hero-gradient">
                <div className="hg-content">
                  <div className="hg-badge">New Feature</div>
                  <h1 className="hg-title">Create stunning interfaces effortlessly</h1>
                  <p className="hg-desc">A premium library of UI elements crafted with vanilla HTML and CSS. Ready to be dropped into your next major web application.</p>
                  <div className="hg-btns">
                    <button type="button" className="hg-btn-primary">Explore Components</button>
                    <button type="button" className="hg-btn-secondary">View Documentation</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button type="button" className="copy-btn" data-target="preview-1">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 2. SPLIT SCREEN HERO */}
          <div className="hero-card">
            <div className="hero-info">
              <h2>Split Screen Hero</h2>
              <p>A modern 50/50 split design featuring an interactive CSS-built dashboard mockup.</p>
            </div>
            <div className="component-preview" id="preview-2" style="padding:0;">
              <div className="hero-wrapper hero-splitscreen">
                <div className="hss-left">
                  <div className="hss-badge"><i className="fa-solid fa-bolt"></i> v2.0 Release</div>
                  <h1 className="hss-title">Redefine your digital <span>workspace</span></h1>
                  <p className="hss-desc">Discover the ultimate UI tools to supercharge your productivity. Seamlessly integrated, powerfully designed, and infinitely customizable.</p>
                  <div className="hss-btns">
                    <button type="button" className="hss-btn-primary">Start Free Trial</button>
                    <button type="button" className="hss-btn-secondary">Watch Demo</button>
                  </div>
                  <div className="hss-users">
                    <div className="hss-user-avatars">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=60" alt="User" />
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=60" alt="User" />
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=60" alt="User" />
                    </div>
                    <span className="hss-users-text">Joined by 12,000+ creators</span>
                  </div>
                </div>
                <div className="hss-right">
                  <div className="hss-mockup">
                    <div className="hss-mockup-header">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="hss-mockup-body">
                      <div className="mockup-chart">
                        <div className="mockup-chart-header">
                          <span className="chart-title">Revenue Growth</span>
                          <span className="chart-value">+28.4%</span>
                        </div>
                        <div className="mockup-chart-bars">
                          <div className="chart-bar" style="--height: 40%"></div>
                          <div className="chart-bar" style="--height: 60%"></div>
                          <div className="chart-bar" style="--height: 45%"></div>
                          <div className="chart-bar" style="--height: 80%"></div>
                          <div className="chart-bar" style="--height: 95%"></div>
                          <div className="chart-bar" style="--height: 70%"></div>
                        </div>
                      </div>
                      <div className="mockup-stats">
                        <div className="mockup-stat-card">
                          <i className="fa-solid fa-users"></i>
                          <span>Active Users</span>
                          <strong>2,845</strong>
                        </div>
                        <div className="mockup-stat-card">
                          <i className="fa-solid fa-bolt"></i>
                          <span>Performance</span>
                          <strong>99.8%</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button type="button" className="copy-btn" data-target="preview-2">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 3. ANIMATED HERO SECTION */}
          <div className="hero-card">
            <div className="hero-info">
              <h2>Animated Hero Section</h2>
              <p>A high-tech background featuring glowing floating blobs and interactive list indicators.</p>
            </div>
            <div className="component-preview" id="preview-3" style="padding:0;">
              <div className="hero-wrapper hero-animated">
                <div className="ha-glow ha-glow-1"></div>
                <div className="ha-glow ha-glow-2"></div>
                <div className="ha-content">
                  <div className="ha-tag">Future of Web</div>
                  <h1 className="ha-title">Build Interactive <span className="ha-gradient-text">Next-Gen Interfaces</span></h1>
                  <p className="ha-desc">Experience fluid animations, responsive layouts, and interactive components that bring your application to life with zero external library overhead.</p>
                  <div className="ha-btns">
                    <button type="button" className="ha-btn-pulse">Get Started Now</button>
                    <button type="button" className="ha-btn-outline"><i className="fa-solid fa-play"></i> Watch Trailer</button>
                  </div>
                  <div className="ha-features">
                    <div className="ha-feature-item">
                      <i className="fa-solid fa-circle-check"></i> <span>Pure CSS</span>
                    </div>
                    <div className="ha-feature-item">
                      <i className="fa-solid fa-circle-check"></i> <span>No External JS</span>
                    </div>
                    <div className="ha-feature-item">
                      <i className="fa-solid fa-circle-check"></i> <span>Zero Dependencies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button type="button" className="copy-btn" data-target="preview-3">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 4. GLASSMORPHISM HERO */}
          <div className="hero-card">
            <div className="hero-info">
              <h2>Glassmorphism Hero</h2>
              <p>A glassmorphic sign-up card overlaying vibrant moving gradient backdrops.</p>
            </div>
            <div className="component-preview" id="preview-4" style="padding:0;">
              <div className="hero-wrapper hero-glassmorphism">
                <div className="hg-blob hg-blob-1"></div>
                <div className="hg-blob hg-blob-2"></div>
                <div className="hg-blob hg-blob-3"></div>
                <div className="hgl-card-premium">
                  <h2 className="hgl-premium-title">Limitless Creativity</h2>
                  <p className="hgl-premium-desc">Join our decentralized creator platform and design the future of immersive interfaces. Get early access to the developer preview.</p>
                  <form className="hgl-premium-form" onsubmit="event.preventDefault(); alert('Subscribed!');">
                    <div className="hgl-input-wrapper">
                      <i className="fa-regular fa-envelope"></i>
                      <input type="email" placeholder="yourname@domain.com" required />
                    </div>
                    <button type="submit" className="hgl-premium-btn">Join Waitlist</button>
                  </form>
                  <div className="hgl-premium-footer">
                    <span><i className="fa-solid fa-shield-halved"></i> Spam-free guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button type="button" className="copy-btn" data-target="preview-4">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 5. VIDEO BACKGROUND HERO */}
          <div className="hero-card">
            <div className="hero-info">
              <h2>Video Background Hero</h2>
              <p>A full-cover cinematic video background with dark gradient overlay and mute controller.</p>
            </div>
            <div className="component-preview" id="preview-5" style="padding:0;">
              <div className="hero-wrapper hero-videobackground">
                <video className="hvb-video" id="hero-bg-video" autoplay loop muted playsinline poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop">
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-rotating-particles-in-blue-and-purple-tones-41560-large.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div className="hvb-overlay-gradient"></div>
                <div className="hvb-content">
                  <h1 className="hvb-title">Step Into The Future</h1>
                  <p className="hvb-desc">Interactive, immersive, and incredibly responsive components that will wow your audience at first glance.</p>
                  <div className="hvb-btns">
                    <button type="button" className="hvb-btn-main">Explore Now</button>
                    <button type="button" className="hvb-btn-mute" aria-label="Mute or unmute video" onclick="const vid=this.closest('.hero-videobackground').querySelector('.hvb-video'); vid.muted=!vid.muted; this.innerHTML=vid.muted?'<i className=&quot;fa-solid fa-volume-xmark&quot;></i>':'<i className=&quot;fa-solid fa-volume-high&quot;></i>';"><i className="fa-solid fa-volume-xmark"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button type="button" className="copy-btn" data-target="preview-5">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 6. INTERACTIVE TERMINAL HERO */}
          <div className="hero-card">
            <div className="hero-info">
              <h2>Interactive Terminal Hero</h2>
              <p>A developer-focused layout featuring a glowing animated code terminal with typing command simulation.</p>
            </div>
            <div className="component-preview" id="preview-6" style="padding:0;">
              <div className="hero-wrapper hero-terminal">
                <div className="ht-left">
                  <div className="ht-badge"><i className="fa-solid fa-code"></i> Developer First</div>
                  <h1 className="ht-title">Built for modern <span>engineers</span></h1>
                  <p className="ht-desc">Ship pixel-perfect user interfaces faster. Install our library with a single line of code and customize every token globally.</p>
                  <div className="ht-btns">
                    <button type="button" className="ht-btn-primary">Read API Docs</button>
                    <button type="button" className="ht-btn-secondary">Copy CLI Command</button>
                  </div>
                </div>
                <div className="ht-right">
                  <div className="ht-terminal">
                    <div className="ht-terminal-header">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                      <span className="ht-terminal-title">bash</span>
                    </div>
                    <div className="ht-terminal-body">
                      <div className="terminal-line"><span className="prompt">$</span> <span className="command">npm install @uiverse/core</span></div>
                      <div className="terminal-line output">✓ Installed 142 dependencies in 1.4s</div>
                      <div className="terminal-line"><span className="prompt">$</span> <span className="command">npx uiverse init</span></div>
                      <div className="terminal-line output success">✔ UI-Verse initialized successfully!</div>
                      <div className="terminal-line output info">ℹ Active components: 7/7 Heroes running</div>
                      <div className="terminal-line active"><span className="prompt">$</span> <span className="typing">npm run dev</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button type="button" className="copy-btn" data-target="preview-6">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 7. EDITORIAL CARD STACK HERO */}
          <div className="hero-card">
            <div className="hero-info">
              <h2>Editorial Card Stack Hero</h2>
              <p>A minimalist design with a grid backdrop and an interactive 3D fanning card stack.</p>
            </div>
            <div className="component-preview" id="preview-7" style="padding:0;">
              <div className="hero-wrapper hero-editorial">
                <div className="he-grid-bg"></div>
                <div className="he-content">
                  <h1 className="he-title">Design. Code.<br /><span>Publish.</span></h1>
                  <p className="he-desc">Experience the future of interface development. A streamlined curation of standard design systems crafted to elevate your creative output.</p>
                  <div className="he-btns">
                    <button type="button" className="he-btn-primary">Start Building</button>
                    <button type="button" className="he-btn-secondary">Explore Styles</button>
                  </div>
                </div>
                <div className="he-right">
                  <div className="he-card-pile">
                    <div className="he-card card-cyan">
                      <div className="he-card-tag">03</div>
                      <h3>Ship</h3>
                      <p>Deploy pixel-perfect sites instantly.</p>
                    </div>
                    <div className="he-card card-purple">
                      <div className="he-card-tag">02</div>
                      <h3>Code</h3>
                      <p>Vanilla standard components.</p>
                    </div>
                    <div className="he-card card-rose">
                      <div className="he-card-tag">01</div>
                      <h3>Design</h3>
                      <p>Tailored HSL design system tokens.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button type="button" className="copy-btn" data-target="preview-7">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
        </section>
      
        {/* ================= FOOTER ================= */}
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fa-solid fa-hexagon-nodes"></i>
                <span>UIverse</span>
              </div>
              <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
              <div className="footer-socials">
                <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Explore</h4>
              <ul>
                <li><a href="button.html">Buttons</a></li>
                <li><a href="navbar.html">Navbars</a></li>
                <li><a href="cards.html">Cards</a></li>
                <li><a href="inputs.html">Inputs</a></li>
                <li><a href="forms.html">Forms</a></li>
              </ul>
            </div>
      
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">GitHub Repo</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
      
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">License</a></li>
              </ul>
            </div>
      
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Get notified when new components drop.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="your@email.com" />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 UIverse. Made with <i className="fa-solid fa-heart heart"></i> for developers worldwide.</p>
          </div>
        </footer>
      
      </main>
    </>
  );
}
