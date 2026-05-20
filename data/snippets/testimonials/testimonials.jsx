import React from 'react';

export default function testimonials(){
  return (
    <>
      <main className="main">
      
          <div className="page-header">
      
            <h1>Testimonials</h1>
      
            <p>
              Beautiful modern testimonial cards designed with
              glassmorphism, premium hover animations, gradient glow
              effects, and elegant typography.
            </p>
      
          </div>
      
          {/* Testimonials */}
      
          <div className="testimonial-grid">
      
            {/* Card 1 */}
      
            <div className="component-card">
      
              <h3>Customer Testimonial</h3>
      
              <div className="testimonial-card">
      
                <div className="blur-glow"></div>
      
                <div className="quote-icon">❝</div>
      
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
      
                <p>
                  “UIverse helped us launch faster with polished
                  UI components that were elegant, scalable,
                  and incredibly easy to customize.”
                </p>
      
                <div className="testimonial-meta">
      
                  <div className="avatar">
                    <img
                      src="https://i.pravatar.cc/100?img=5"
                      alt=""
                     srcset="https://i.pravatar.cc/40?img=5 40w, https://i.pravatar.cc/80?img=5 80w, https://i.pravatar.cc/150?img=5 150w, https://i.pravatar.cc/300?img=5 300w" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" />
                  </div>
      
                  <div className="user-info">
                    <strong>Maya Lee</strong>
                    <span>Product Designer</span>
                  </div>
      
                </div>
      
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('t1', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('t1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
              </div>
      
      <pre id="t1" className="code-block">
      &lt;div className="testimonial-card"&gt;
        Modern glowing testimonial card
      &lt;/div&gt;
      </pre>
      
            </div>
      
            {/* Card 2 */}
      
            <div className="component-card">
      
              <h3>Quote Panel</h3>
      
              <div className="testimonial-card">
      
                <div className="blur-glow"></div>
      
                <div className="quote-icon">❝</div>
      
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
      
                <p>
                  “The component library is beginner friendly
                  and made styling my app feel effortless,
                  modern, and professional.”
                </p>
      
                <div className="testimonial-meta">
      
                  <div className="avatar">
                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt=""
                     srcset="https://i.pravatar.cc/40?img=12 40w, https://i.pravatar.cc/80?img=12 80w, https://i.pravatar.cc/150?img=12 150w, https://i.pravatar.cc/300?img=12 300w" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" />
                  </div>
      
                  <div className="user-info">
                    <strong>Alex Chen</strong>
                    <span>Frontend Developer</span>
                  </div>
      
                </div>
      
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('t2', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('t2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
              </div>
      
      <pre id="t2" className="code-block">
      &lt;div className="testimonial-card"&gt;
        Premium quote testimonial
      &lt;/div&gt;
      </pre>
      
            </div>
            {/* Card 3 */}
      <div className="component-card">
        <h3>Client Feedback</h3>
        <div className="testimonial-card">
          <div className="blur-glow"></div>
          <div className="quote-icon">❝</div>
          <div className="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
          </div>
          <p>
            “The UIverse components saved us countless hours.
            The designs are sleek, responsive, and easy to adapt
            for our brand guidelines.”
          </p>
          <div className="testimonial-meta">
            <div className="avatar">
              <img src="https://i.pravatar.cc/100?img=20" alt="" />
            </div>
            <div className="user-info">
              <strong>Priya Sharma</strong>
              <span>Marketing Lead</span>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('t3', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('t3', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <pre id="t3" className="code-block">
      &lt;div className="testimonial-card"&gt;
        Client feedback testimonial card
      &lt;/div&gt;
        </pre>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
      
          {/* Brand Section */}
          <div className="footer-brand">
            <h2>◯ UIverse</h2>
      
            <p>
              Build modern, reusable UI components with clean HTML,
              CSS, and JavaScript.
            </p>
      
            <div className="footer-socials">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">X</a>
            </div>
          </div>
      
          {/* Explore */}
          <div className="footer-column">
            <h3>EXPLORE</h3>
      
            <a href="#">Buttons</a>
            <a href="#">Navbars</a>
            <a href="#">Cards</a>
            <a href="#">Inputs</a>
            <a href="#">Forms</a>
          </div>
      
          {/* Resources */}
          <div className="footer-column">
            <h3>RESOURCES</h3>
      
            <a href="#">Documentation</a>
            <a href="#">Contribute</a>
            <a href="#">GitHub Repo</a>
            <a href="#">Community</a>
          </div>
      
          {/* Legal */}
          <div className="footer-column">
            <h3>LEGAL</h3>
      
            <a href="privacypolicy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="#">License</a>
          </div>
      
          {/* Newsletter */}
          <div className="footer-column">
            <h3>STAY UPDATED</h3>
      
            <p>Get notified when new components drop.</p>
      
            <div className="footer-subscribe">
              <input type="email" placeholder="your@email.com" />
              <button>Subscribe</button>
      
      {/* Card 4 */}
      <div className="component-card">
        <h3>Team Review</h3>
        <div className="testimonial-card">
          <div className="blur-glow"></div>
          <div className="quote-icon">❝</div>
          <div className="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p>
            “Our development team loved how intuitive the
            components were. Integration was seamless and
            documentation was clear.”
          </p>
          <div className="testimonial-meta">
            <div className="avatar">
              <img src="https://i.pravatar.cc/100?img=30" alt="" />
            </div>
            <div className="user-info">
              <strong>Daniel Roberts</strong>
              <span>Software Engineer</span>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('t4', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('t4', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <pre id="t4" className="code-block">
      &lt;div className="testimonial-card"&gt;
        Team review testimonial card
      &lt;/div&gt;
        </pre>
      </div>
      
      {/* Card 5 */}
      <div className="component-card">
        <h3>Startup Success Story</h3>
        <div className="testimonial-card">
          <div className="blur-glow"></div>
          <div className="quote-icon">❝</div>
          <div className="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
          </div>
          <p>
            “As a startup, we needed fast, reliable UI solutions.
            UIverse gave us a professional look without
            compromising speed or quality.”
          </p>
          <div className="testimonial-meta">
            <div className="avatar">
              <img src="https://i.pravatar.cc/100?img=45" alt="" />
            </div>
            <div className="user-info">
              <strong>Sofia Martinez</strong>
              <span>Founder & CEO</span>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('t5', this)">
            <i className="fa-solid fa-code"></i> View Code
          </button>
          <button className="action-btn copy-btn" onclick="copyCode('t5', this)">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
        <pre id="t5" className="code-block">
      &lt;div className="testimonial-card"&gt;
        Startup success testimonial card
      &lt;/div&gt;
        </pre>
      </div>
      
      
          </div>
      
        </main>
    </>
  );
}
