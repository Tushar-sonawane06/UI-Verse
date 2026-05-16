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
                    />
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
                    />
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
      
          </div>
      
        </main>
    </>
  );
}
