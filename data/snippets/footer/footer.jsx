import React from 'react';

export default function footer(){
  return (
    <>
      <main className="main-home">
      
        {/* PAGE HEADER */}
        <section className="footer-page-header">
      
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <i className="fa-solid fa-chevron-right"></i>
            <span>Footers</span>
          </div>
      
          <h1>Footer Components</h1>
      
          <p>
            Modern responsive footer sections for SaaS, portfolio,
            startup and product websites.
          </p>
      
          <div className="page-meta">
      
            <span className="meta-badge">
              <i className="fa-solid fa-layer-group"></i>
              4 Components
            </span>
      
            <span className="meta-badge">
              <i className="fa-solid fa-code"></i>
              HTML & CSS
            </span>
      
          </div>
      
        </section>
      
        {/* GRID */}
        <div className="footer-grid">
          {/* =========================================================
           FOOTER 10 — STARTUP FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Startup Footer</span>
          <span className="card-tag tag-new">Startup</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer startup-footer">
      
            <h2>Launch Faster</h2>
      
            <p>
              Modern startup footer for SaaS products.
            </p>
      
            <button>Start Free</button>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* =========================================================
           FOOTER 11 — GRID FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Grid Footer</span>
          <span className="card-tag tag-popular">Grid</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer grid-footer">
      
            <div>Docs</div>
            <div>Pricing</div>
            <div>Support</div>
            <div>API</div>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* =========================================================
           FOOTER 12 — GLOW FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Glow Footer</span>
          <span className="card-tag tag-trending">Glow</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer glow-footer">
      
            <h2>Build Beautiful UI</h2>
      
            <p>
              Animated glow footer section.
            </p>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* =========================================================
           FOOTER 13 — APP FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">App Footer</span>
          <span className="card-tag tag-essential">Mobile</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer app-footer">
      
            <h2>Download App</h2>
      
            <div className="app-buttons">
      
              <button>App Store</button>
      
              <button>Google Play</button>
      
            </div>
      
            <div className="actions">
              <button onclick="toggleCode('f1')">Code</button>
              <button onclick="copyCode('f1',this)">Copy</button>
              <button onclick="addToCollectionFromCard(this, 'Minimal Footer')">Add to My Collection</button>
      
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* =========================================================
           FOOTER 14 — WAVE FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Wave Footer</span>
          <span className="card-tag tag-new">Wave</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer wave-footer">
      
            <h2>Creative Footer</h2>
      
            <p>
              Wave inspired modern footer design.
            </p>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* =========================================================
           FOOTER 15 — PORTFOLIO FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Portfolio Footer</span>
          <span className="card-tag tag-trending">Portfolio</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer portfolio-footer">
      
            <h2>John Doe</h2>
      
            <p>
              Frontend Developer & Designer
            </p>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* =========================================================
           FOOTER 16 — BENTO FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Bento Footer</span>
          <span className="card-tag tag-popular">Bento</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer bento-footer">
      
            <div>UI</div>
            <div>Docs</div>
            <div>API</div>
            <div>Blog</div>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* =========================================================
           FOOTER 17 — ELEGANT FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Elegant Footer</span>
          <span className="card-tag tag-essential">Elegant</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer elegant-footer">
      
            <h2>Elegant UI</h2>
      
            <p>
              Minimal elegant footer layout.
            </p>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* =========================================================
           FOOTER 18 — DARK PRO FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Dark Pro Footer</span>
          <span className="card-tag tag-popular">Pro</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer darkpro-footer">
      
            <h2>UIverse Pro</h2>
      
            <p>
              Premium developer components.
            </p>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* =========================================================
           FOOTER 19 — COMMUNITY FOOTER
      ========================================================= */}
      
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Community Footer</span>
          <span className="card-tag tag-new">Community</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer community-footer">
      
            <h2>Join Community</h2>
      
            <div className="community-icons">
      
              <i className="fab fa-discord"></i>
      
              <i className="fab fa-github"></i>
      
              <i className="fab fa-reddit"></i>
      
      
            </div>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
        {/* FOOTER 5 */}
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Glass Footer</span>
          <span className="card-tag tag-new">Glass</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer glass-footer">
      
            <h2>⬡ UIverse</h2>
      
            <p>
              Frosted glass footer with premium UI styling.
            </p>
      
            <div className="glass-links">
              <a href="#">Home</a>
              <a href="#">Docs</a>
              <a href="#">Pricing</a>
              <a href="#">Support</a>
            </div>
      
            <div className="actions">
              <button onclick="toggleCode('f2')">Code</button>
              <button onclick="copyCode('f2',this)">Copy</button>
              <button onclick="addToCollectionFromCard(this, 'Grid Footer')">Add to My Collection</button>
      
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* FOOTER 6 */}
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Social Footer</span>
          <span className="card-tag tag-trending">Social</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer social-footer">
      
            <h2>Connect with UIverse</h2>
      
            <div className="social-icons-big">
              <i className="fab fa-github"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-discord"></i>
              <i className="fab fa-x-twitter"></i>
      
            </div>
      
            <p>Follow us across platforms.</p>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* FOOTER 7 */}
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Split Footer</span>
          <span className="card-tag tag-essential">Layout</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer split-footer">
      
            <div>
              <h2>UIverse</h2>
              <p>Modern UI library for developers.</p>
            </div>
      
            <div className="actions">
              <button onclick="toggleCode('f3')">Code</button>
              <button onclick="copyCode('f3',this)">Copy</button>
              <button onclick="addToCollectionFromCard(this, 'Dark Footer')">Add to My Collection</button>
      
      
            <div className="split-links">
              <a href="#">Docs</a>
              <a href="#">Blog</a>
              <a href="#">Community</a>
      
            </div>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* FOOTER 8 */}
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Neon Footer</span>
          <span className="card-tag tag-popular">Neon</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer neon-footer">
      
            <h2>Future UI Starts Here</h2>
      
            <p>
              Neon styled futuristic footer component.
            </p>
      
            <button>Get Started</button>
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
      
      {/* FOOTER 9 */}
      <div className="footer-component-card">
      
        <div className="card-top">
          <span className="card-label">Centered Footer</span>
          <span className="card-tag tag-new">Clean</span>
        </div>
      
        <div className="footer-preview">
      
          <footer className="demo-footer centered-footer">
      
            <h2>⬡ UIverse</h2>
      
            <p>
              Simple centered footer with clean typography.
            </p>
      
            <div className="centered-links">
              <a href="#">About</a>
              <a href="#">Docs</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </div>
      
            <div className="actions">
              <button onclick="toggleCode('f4')">Code</button>
              <button onclick="copyCode('f4',this)">Copy</button>
              <button onclick="addToCollectionFromCard(this, 'Social Footer')">Add to My Collection</button>
      
      
          </footer>
      
        </div>
      
        <div className="actions">
          <button className="action-btn view-btn">View Code</button>
          <button className="action-btn copy-btn">Copy</button>
        </div>
      
      </div>
          {/* FOOTER 1 */}
          <div className="footer-component-card">
      
            <div className="card-top">
              <span className="card-label">Modern SaaS Footer</span>
              <span className="card-tag tag-popular">Popular</span>
      
            </div>
      
            <div className="footer-preview">
      
              <footer className="demo-footer dark-footer">
      
                <div className="demo-footer-grid">
      
                  <div>
                    <h2>⬡ UIverse</h2>
                    <p>
                      Build modern reusable UI components faster.
                    </p>
                  </div>
      
                  <div>
                    <h4>Product</h4>
                    <a href="#">Components</a>
                    <a href="#">Templates</a>
                    <a href="#">Pricing</a>
                  </div>
      
                  <div>
                    <h4>Resources</h4>
                    <a href="#">Docs</a>
                    <a href="#">Blog</a>
                    <a href="#">Support</a>
                  </div>
      
                  <div>
                    <h4>Social</h4>
      
                    <div className="demo-socials">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-discord"></i>
                      <i className="fab fa-x-twitter"></i>
                    </div>
      
                  </div>
      
                </div>
      
              </footer>
      
            </div>
      
            <div className="actions">
      
              <button onclick="toggleCode('f5')">Code</button>
              <button onclick="copyCode('f5',this)">Copy</button>
              <button onclick="addToCollectionFromCard(this, 'Newsletter Footer')">Add to My Collection</button>
      
              <button className="action-btn view-btn">View Code</button>
              <button className="action-btn copy-btn">Copy</button>
      
            </div>
      
          </div>
      
          {/* FOOTER 2 */}
          <div className="footer-component-card">
      
            <div className="card-top">
              <span className="card-label">Minimal Footer</span>
              <span className="card-tag tag-essential">Simple</span>
            </div>
      
            <div className="footer-preview">
      
              <footer className="demo-footer minimal-footer">
      
                <div className="minimal-inner">
      
                  <h2>UIverse</h2>
      
                  <div className="minimal-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Docs</a>
                    <a href="#">Contact</a>
                  </div>
      
                  <p>© 2026 UIverse</p>
      
                </div>
      
              </footer>
      
            </div>
      
            <div className="actions">
      
              <button onclick="toggleCode('f6')">Code</button>
              <button onclick="copyCode('f6',this)">Copy</button>
              <button onclick="addToCollectionFromCard(this, 'Multi Column Footer')">Add to My Collection</button>
      
              <button className="action-btn view-btn">View Code</button>
              <button className="action-btn copy-btn">Copy</button>
      
            </div>
      
          </div>
      
          {/* FOOTER 3 */}
          <div className="footer-component-card">
      
            <div className="card-top">
              <span className="card-label">Newsletter Footer</span>
              <span className="card-tag tag-new">New</span>
            </div>
      
            <div className="footer-preview">
      
              <footer className="demo-footer newsletter-footer">
      
                <h2>Stay Updated</h2>
      
                <p>
                  Get notified when new UI components drop.
                </p>
      
                <div className="newsletter-demo">
      
                  <input type="email" placeholder="Enter email" />
      
                  <button>Subscribe</button>
      
                </div>
      
              </footer>
      
            </div>
      
            <div className="actions">
      
              <button onclick="toggleCode('f7')">Code</button>
              <button onclick="copyCode('f7',this)">Copy</button>
              <button onclick="addToCollectionFromCard(this, 'Sticky Footer')">Add to My Collection</button>
      
              <button className="action-btn view-btn">View Code</button>
              <button className="action-btn copy-btn">Copy</button>
      
            </div>
      
          </div>
      
          {/* FOOTER 4 */}
          <div className="footer-component-card">
      
            <div className="card-top">
              <span className="card-label">Gradient Footer</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
      
            <div className="footer-preview">
      
              <footer className="demo-footer gradient-footer">
      
                <h2>Build Faster with UIverse</h2>
      
                <p>
                  Reusable UI components crafted for developers.
                </p>
      
                <button>Explore Components</button>
      
              </footer>
      
            </div>
      
            <div className="actions">
      
              <button onclick="toggleCode('f8')">Code</button>
              <button onclick="copyCode('f8',this)">Copy</button>
      
              <button className="action-btn view-btn">View Code</button>
              <button className="action-btn copy-btn">Copy</button>
      
            </div>
      
          </div>
      
        </div>
      
      </main>
    </>
  );
}
