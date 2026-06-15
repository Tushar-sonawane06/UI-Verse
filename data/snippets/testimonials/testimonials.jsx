import React from 'react';

export default function testimonials(){
  return (
    <>
      <main className="main">
        <div className="page-header">
          <h1>Testimonials</h1>
          <p>
            Discover premium, responsive testimonial card layouts styled with advanced glassmorphism, glowing borders, neo-brutalism, interactive 3D transforms, and minimalist elegance.
          </p>
        </div>
        <div className="testimonial-grid">
          <div className="component-card">
            <h3>Glassmorphism Glow Card</h3>
            <div className="t-card-glass">
              <div className="t-glass-glow"></div>
              <div className="t-quote-mark">❝</div>
              <div className="t-rating">
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
              </div>
              <p className="t-text">
                UIverse helped us launch faster with polished UI components that were elegant, scalable, and incredibly easy to customize.
              </p>
              <div className="t-user">
                <div className="t-avatar">
                  <img src="https://i.pravatar.cc/100?img=5" alt="Maya Lee" />
                </div>
                <div className="t-info">
                  <strong className="t-name">Maya Lee</strong>
                  <span className="t-role">Product Designer</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t1', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t1" className="code-block">&lt;div className="t-card-glass"&gt;
        &lt;div className="t-glass-glow"&gt;&lt;/div&gt;
        &lt;div className="t-quote-mark"&gt;❝&lt;/div&gt;
        &lt;div className="t-rating"&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
        &lt;/div&gt;
        &lt;p className="t-text"&gt;
          UIverse helped us launch faster with polished UI components that were elegant, scalable, and incredibly easy to customize.
        &lt;/p&gt;
        &lt;div className="t-user"&gt;
          &lt;div className="t-avatar"&gt;
            &lt;img src="https://i.pravatar.cc/100?img=5" alt="Maya Lee" /&gt;
          &lt;/div&gt;
          &lt;div className="t-info"&gt;
            &lt;strong className="t-name"&gt;Maya Lee&lt;/strong&gt;
            &lt;span className="t-role"&gt;Product Designer&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
          <div className="component-card">
            <h3>Gradient Border Card</h3>
            <div className="t-card-gradient">
              <div className="t-quote-mark">❝</div>
              <div className="t-rating">
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
              </div>
              <p className="t-text">
                The component library is beginner friendly and made styling my app feel effortless, modern, and professional.
              </p>
              <div className="t-user">
                <div className="t-avatar">
                  <img src="https://i.pravatar.cc/100?img=12" alt="Alex Chen" />
                </div>
                <div className="t-info">
                  <strong className="t-name">Alex Chen</strong>
                  <span className="t-role">Frontend Developer</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t2', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t2" className="code-block">&lt;div className="t-card-gradient"&gt;
        &lt;div className="t-quote-mark"&gt;❝&lt;/div&gt;
        &lt;div className="t-rating"&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
        &lt;/div&gt;
        &lt;p className="t-text"&gt;
          The component library is beginner friendly and made styling my app feel effortless, modern, and professional.
        &lt;/p&gt;
        &lt;div className="t-user"&gt;
          &lt;div className="t-avatar"&gt;
            &lt;img src="https://i.pravatar.cc/100?img=12" alt="Alex Chen" /&gt;
          &lt;/div&gt;
          &lt;div className="t-info"&gt;
            &lt;strong className="t-name"&gt;Alex Chen&lt;/strong&gt;
            &lt;span className="t-role"&gt;Frontend Developer&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
      
      
          <div className="component-card">
            <h3>Neo-Brutalist Card</h3>
            <div className="t-card-brutalist">
              <div className="t-quote-mark">❝</div>
              <div className="t-rating">
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star-empty">☆</span>
              </div>
              <p className="t-text">
                The UIverse components saved us countless hours. The designs are sleek, responsive, and easy to adapt for our brand guidelines.
              </p>
              <div className="t-user">
                <div className="t-avatar">
                  <img src="https://i.pravatar.cc/100?img=20" alt="Priya Sharma" />
                </div>
                <div className="t-info">
                  <strong className="t-name">Priya Sharma</strong>
                  <span className="t-role">Marketing Lead</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t3', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t3', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t3" className="code-block">&lt;div className="t-card-brutalist"&gt;
        &lt;div className="t-quote-mark"&gt;❝&lt;/div&gt;
        &lt;div className="t-rating"&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star-empty"&gt;☆&lt;/span&gt;
        &lt;/div&gt;
        &lt;p className="t-text"&gt;
          The UIverse components saved us countless hours. The designs are sleek, responsive, and easy to adapt for our brand guidelines.
        &lt;/p&gt;
        &lt;div className="t-user"&gt;
          &lt;div className="t-avatar"&gt;
            &lt;img src="https://i.pravatar.cc/100?img=20" alt="Priya Sharma" /&gt;
          &lt;/div&gt;
          &lt;div className="t-info"&gt;
            &lt;strong className="t-name"&gt;Priya Sharma&lt;/strong&gt;
            &lt;span className="t-role"&gt;Marketing Lead&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
          <div className="component-card">
            <h3>Avatar Pop Card</h3>
            <div className="t-card-pop">
              <div className="t-avatar-pop">
                <img src="https://i.pravatar.cc/100?img=30" alt="Daniel Roberts" />
              </div>
              <div className="t-quote-mark">❝</div>
              <div className="t-rating">
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
              </div>
              <p className="t-text">
                Our development team loved how intuitive the components were. Integration was seamless and documentation was clear.
              </p>
              <div className="t-user">
                <div className="t-info">
                  <strong className="t-name">Daniel Roberts</strong>
                  <span className="t-role">Software Engineer</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t4', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t4', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t4" className="code-block">&lt;div className="t-card-pop"&gt;
        &lt;div className="t-avatar-pop"&gt;
          &lt;img src="https://i.pravatar.cc/100?img=30" alt="Daniel Roberts" /&gt;
        &lt;/div&gt;
        &lt;div className="t-quote-mark"&gt;❝&lt;/div&gt;
        &lt;div className="t-rating"&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
        &lt;/div&gt;
        &lt;p className="t-text"&gt;
          Our development team loved how intuitive the components were. Integration was seamless and documentation was clear.
        &lt;/p&gt;
        &lt;div className="t-user"&gt;
          &lt;div className="t-info"&gt;
            &lt;strong className="t-name"&gt;Daniel Roberts&lt;/strong&gt;
            &lt;span className="t-role"&gt;Software Engineer&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
          <div className="component-card">
            <h3>3D Perspective Card</h3>
            <div className="t-card-skew">
              <div className="t-skew-glare"></div>
              <div className="t-quote-mark">❝</div>
              <div className="t-rating">
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star-empty">☆</span>
              </div>
              <p className="t-text">
                As a startup, we needed fast, reliable UI solutions. UIverse gave us a professional look without compromising speed or quality.
              </p>
              <div className="t-user">
                <div className="t-avatar">
                  <img src="https://i.pravatar.cc/100?img=45" alt="Sofia Martinez" />
                </div>
                <div className="t-info">
                  <strong className="t-name">Sofia Martinez</strong>
                  <span className="t-role">Founder & CEO</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t5', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t5', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t5" className="code-block">&lt;div className="t-card-skew"&gt;
        &lt;div className="t-skew-glare"&gt;&lt;/div&gt;
        &lt;div className="t-quote-mark"&gt;❝&lt;/div&gt;
        &lt;div className="t-rating"&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star-empty"&gt;☆&lt;/span&gt;
        &lt;/div&gt;
        &lt;p className="t-text"&gt;
          As a startup, we needed fast, reliable UI solutions. UIverse gave us a professional look without compromising speed or quality.
        &lt;/p&gt;
        &lt;div className="t-user"&gt;
          &lt;div className="t-avatar"&gt;
            &lt;img src="https://i.pravatar.cc/100?img=45" alt="Sofia Martinez" /&gt;
          &lt;/div&gt;
          &lt;div className="t-info"&gt;
            &lt;strong className="t-name"&gt;Sofia Martinez&lt;/strong&gt;
            &lt;span className="t-role"&gt;Founder & CEO&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
          <div className="component-card">
            <h3>Minimal Premium Card</h3>
            <div className="t-card-minimal">
              <div className="t-quote-mark">❝</div>
              <div className="t-rating">
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
                <span className="t-star">★</span>
              </div>
              <p className="t-text">
                Absolute masterclass in developer experience and modern aesthetics. Implementing UIverse components has redefined our products.
              </p>
              <div className="t-user">
                <div className="t-avatar">
                  <img src="https://i.pravatar.cc/100?img=60" alt="Marcus Aurelius" />
                </div>
                <div className="t-info">
                  <strong className="t-name">Marcus Aurelius</strong>
                  <span className="t-role">Principal UX Architect</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t6', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t6', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t6" className="code-block">&lt;div className="t-card-minimal"&gt;
        &lt;div className="t-quote-mark"&gt;❝&lt;/div&gt;
        &lt;div className="t-rating"&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
          &lt;span className="t-star"&gt;★&lt;/span&gt;
        &lt;/div&gt;
        &lt;p className="t-text"&gt;
          Absolute masterclass in developer experience and modern aesthetics. Implementing UIverse components has redefined our products.
        &lt;/p&gt;
        &lt;div className="t-user"&gt;
          &lt;div className="t-avatar"&gt;
            &lt;img src="https://i.pravatar.cc/100?img=60" alt="Marcus Aurelius" /&gt;
          &lt;/div&gt;
          &lt;div className="t-info"&gt;
            &lt;strong className="t-name"&gt;Marcus Aurelius&lt;/strong&gt;
            &lt;span className="t-role"&gt;Principal UX Architect&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
      
          {/* ============================= */}
      {/* Neon Gradient Testimonial */}
      {/* ============================= */}
      
      <div className="component-card">
        <h3>Neon Gradient Card</h3>
      
        <div className="t-card-neon">
          <div className="t-neon-ring"></div>
      
          <div className="t-quote-mark">❝</div>
      
          <div className="t-rating">
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
          </div>
      
          <p className="t-text">
            The animations and UI quality instantly elevated our landing pages.
            Everything feels premium and production ready.
          </p>
      
          <div className="t-user">
            <div className="t-avatar">
              <img src="https://i.pravatar.cc/100?img=22" alt="Emma Watson" />
            </div>
      
            <div className="t-info">
              <strong className="t-name">Emma Watson</strong>
              <span className="t-role">Creative Director</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* ============================= */}
      {/* Floating Card */}
      {/* ============================= */}
      
      <div className="component-card">
        <h3>Floating Shadow Card</h3>
      
        <div className="t-card-floating">
          <div className="t-floating-shape"></div>
      
          <div className="t-quote-mark">❝</div>
      
          <p className="t-text">
            UIverse gave us reusable UI patterns that reduced our design and
            development workflow by nearly 40%.
          </p>
      
          <div className="t-rating">
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
          </div>
      
          <div className="t-user">
            <div className="t-avatar">
              <img src="https://i.pravatar.cc/100?img=18" alt="Ryan Cooper" />
            </div>
      
            <div className="t-info">
              <strong className="t-name">Ryan Cooper</strong>
              <span className="t-role">UI Engineer</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* ============================= */}
      {/* Dark Premium Card */}
      {/* ============================= */}
      
      <div className="component-card">
        <h3>Dark Premium Card</h3>
      
        <div className="t-card-dark">
          <div className="t-quote-mark">❝</div>
      
          <div className="t-rating">
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
          </div>
      
          <p className="t-text">
            Beautiful UI architecture with excellent attention to spacing,
            typography, and responsiveness.
          </p>
      
          <div className="t-user">
            <div className="t-avatar">
              <img src="https://i.pravatar.cc/100?img=52" alt="Olivia Carter" />
            </div>
      
            <div className="t-info">
              <strong className="t-name">Olivia Carter</strong>
              <span className="t-role">Senior Product Manager</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* ============================= */}
      {/* Split Layout Card */}
      {/* ============================= */}
      
      <div className="component-card">
        <h3>Split Layout Card</h3>
      
        <div className="t-card-split">
          <div className="t-split-left">
            <img src="https://i.pravatar.cc/300?img=44" alt="Sarah Kim" />
          </div>
      
          <div className="t-split-right">
            <div className="t-quote-mark">❝</div>
      
            <p className="t-text">
              The component ecosystem feels cohesive, modern, and extremely easy
              to integrate into any frontend stack.
            </p>
      
            <div className="t-rating">
              <span className="t-star">★</span>
              <span className="t-star">★</span>
              <span className="t-star">★</span>
              <span className="t-star">★</span>
              <span className="t-star">★</span>
            </div>
      
            <strong className="t-name">Sarah Kim</strong>
            <span className="t-role">Full Stack Developer</span>
          </div>
        </div>
      </div>
      
      {/* ============================= */}
      {/* Frosted Blur Card */}
      {/* ============================= */}
      
      <div className="component-card">
        <h3>Frosted Blur Card</h3>
      
        <div className="t-card-frost">
          <div className="t-frost-overlay"></div>
      
          <div className="t-quote-mark">❝</div>
      
          <p className="t-text">
            One of the best curated UI libraries we’ve used. The polish and detail
            are unmatched.
          </p>
      
          <div className="t-user">
            <div className="t-avatar">
              <img src="https://i.pravatar.cc/100?img=14" alt="Noah Williams" />
            </div>
      
            <div className="t-info">
              <strong className="t-name">Noah Williams</strong>
              <span className="t-role">Startup Founder</span>
            </div>
          </div>
      
          <div className="t-rating">
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
            <span className="t-star">★</span>
          </div>
        </div>
      </div>
          <div className="component-card">
            <h3>Floating Glow Card</h3>
            <div className="t-card-floating">
              <div className="t-quote-mark">❝</div>
              <div className="t-rating">
                <span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span>
              </div>
              <p className="t-text">This library completely changed my workflow. The floating effects and glowing shadows add the perfect touch of modern UI.</p>
              <div className="t-user">
                <div className="t-avatar"><img src="https://i.pravatar.cc/100?img=1" alt="Sarah Jenkins" /></div>
                <div className="t-info">
                  <strong className="t-name">Sarah Jenkins</strong>
                  <span className="t-role">Creative Director</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t7', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t7', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t7" className="code-block">&lt;div className="t-card-floating"&gt;
        &lt;div className="t-quote-mark"&gt;❝&lt;/div&gt;
        &lt;div className="t-rating"&gt;...&lt;/div&gt;
        &lt;p className="t-text"&gt;This library completely changed my workflow.&lt;/p&gt;
        &lt;div className="t-user"&gt;...&lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
      
          <div className="component-card">
            <h3>Split Layout Card</h3>
            <div className="t-card-split">
              <div className="t-user-side">
                <div className="t-avatar-large"><img src="https://i.pravatar.cc/100?img=11" alt="David Miller" /></div>
                <strong className="t-name">David Miller</strong>
                <span className="t-role">Senior Developer</span>
              </div>
              <div className="t-content-side">
                <div className="t-rating">
                  <span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span><span className="t-star-empty">☆</span>
                </div>
                <p className="t-text">The split layout provides a distinct visual hierarchy that's perfect for featured testimonials on landing pages.</p>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t8', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t8', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t8" className="code-block">&lt;div className="t-card-split"&gt;
        &lt;div className="t-user-side"&gt;...&lt;/div&gt;
        &lt;div className="t-content-side"&gt;
          &lt;div className="t-rating"&gt;...&lt;/div&gt;
          &lt;p className="t-text"&gt;The split layout provides...&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
      
          <div className="component-card">
            <h3>Quotation Highlight Card</h3>
            <div className="t-card-quote-focus">
              <div className="bg-quote">"</div>
              <p className="t-text">Absolutely incredible attention to detail. Every component feels purposefully crafted and beautifully executed.</p>
              <div className="t-user">
                <div className="t-avatar"><img src="https://i.pravatar.cc/100?img=15" alt="Elena Rodriguez" /></div>
                <div className="t-info">
                  <strong className="t-name">Elena Rodriguez</strong>
                  <span className="t-role">UX Researcher</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t9', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t9', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t9" className="code-block">&lt;div className="t-card-quote-focus"&gt;
        &lt;div className="bg-quote"&gt;"&lt;/div&gt;
        &lt;p className="t-text"&gt;Absolutely incredible attention...&lt;/p&gt;
        &lt;div className="t-user"&gt;...&lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
      
          <div className="component-card">
            <h3>Holographic Dark Card</h3>
            <div className="t-card-hologram">
              <div className="t-rating">
                <span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span>
              </div>
              <p className="t-text">The futuristic vibe is exactly what we needed for our Web3 project. The holographic border effect is stunning.</p>
              <div className="t-user">
                <div className="t-avatar"><img src="https://i.pravatar.cc/100?img=33" alt="James Wilson" /></div>
                <div className="t-info">
                  <strong className="t-name">James Wilson</strong>
                  <span className="t-role">Web3 Architect</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t10', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t10', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t10" className="code-block">&lt;div className="t-card-hologram"&gt;
        &lt;div className="t-rating"&gt;...&lt;/div&gt;
        &lt;p className="t-text"&gt;The futuristic vibe is exactly what we needed...&lt;/p&gt;
        &lt;div className="t-user"&gt;...&lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
      
          <div className="component-card">
            <h3>Elegant Minimal Card</h3>
            <div className="t-card-elegant">
              <p className="t-text">Simplicity is the ultimate sophistication. This card proves that you don't need heavy borders to make an impact.</p>
              <div className="t-divider"></div>
              <div className="t-user">
                <div className="t-info">
                  <strong className="t-name">Sophie Chen</strong>
                  <span className="t-role">Art Director</span>
                </div>
                <div className="t-rating">
                  <span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span><span className="t-star">★</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('t11', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('t11', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="t11" className="code-block">&lt;div className="t-card-elegant"&gt;
        &lt;p className="t-text"&gt;Simplicity is the ultimate sophistication...&lt;/p&gt;
        &lt;div className="t-divider"&gt;&lt;/div&gt;
        &lt;div className="t-user"&gt;...&lt;/div&gt;
      &lt;/div&gt;</pre>
          </div>
        </div>
      </main>
    </>
  );
}
