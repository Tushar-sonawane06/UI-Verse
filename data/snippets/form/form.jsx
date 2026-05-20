import React from 'react';

export default function form(){
  return (
    <>
      <main className="main">
      
          <div className="page-header">
            <h1>Forms</h1>
            <p>Modern reusable and responsive form components</p>
          </div>
      
          <div className="button-group">
      
            {/* LOGIN */}
      
            <div className="component-card">
      
              <h3>Login Form</h3>
      
              <form>
      
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  required
                 />
      
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input"
                  required
                 />
      
                <button type="submit" className="nav-btn">
                  Login
                </button>
      
              </form>
      
              <div className="actions">
      
                <button onclick="toggleCode('f1')">
                  View Code
                </button>
      
                <button onclick="copyCode('f1',this)">
                  Copy
                </button>
      
                <button onclick="addToCollection('Login Form')">
                  Add to Collection
                </button>
      
              </div>
      
      <pre id="f1" className="code-block">
      &lt;form&gt;
        &lt;input type="email" placeholder="Email"&gt;
        &lt;input type="password" placeholder="Password"&gt;
        &lt;button&gt;Login&lt;/button&gt;
      &lt;/form&gt;
      </pre>
      
            </div>
      
            {/* SIGNUP */}
      
            <div className="component-card">
      
              <h3>Signup Form</h3>
      
              <form>
      
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-input"
                  required
                 />
      
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  required
                 />
      
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input"
                  required
                 />
      
                <button type="submit" className="nav-btn">
                  Signup
                </button>
      
              </form>
      
              <div className="actions">
      
                <button onclick="toggleCode('f2')">
                  View Code
                </button>
      
                <button onclick="copyCode('f2',this)">
                  Copy
                </button>
      
                <button onclick="addToCollection('Signup Form')">
                  Add to Collection
                </button>
      
              </div>
      
      <pre id="f2" className="code-block">
      &lt;form&gt;
        &lt;input type="text" placeholder="Full Name"&gt;
        &lt;input type="email" placeholder="Email"&gt;
        &lt;input type="password" placeholder="Password"&gt;
        &lt;button&gt;Signup&lt;/button&gt;
      &lt;/form&gt;
      </pre>
      
            </div>
            {/* ================= MODERN FORMS ================= */}
      
      <div className="button-group">
      
        {/* GLASS LOGIN FORM */}
      
        <div className="component-card glass-card">
      
          <h3>Glassmorphism Login</h3>
      
          <form className="modern-form">
      
            <div className="input-box">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Enter your email"
                required
               />
            </div>
      
            <div className="input-box">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Enter password"
                required
               />
            </div>
      
            <div className="form-options">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
      
              <a href="#">Forgot?</a>
            </div>
      
            <button className="gradient-btn">
              Sign In
            </button>
      
          </form>
      
        </div>
      
        {/* FLOATING LABEL FORM */}
      
        <div className="component-card">
      
          <h3>Floating Label Form</h3>
      
          <form className="floating-form">
      
            <div className="floating-group">
      
              <input
                type="text"
                required
               />
      
              <label>Full Name</label>
      
            </div>
      
            <div className="floating-group">
      
              <input
                type="email"
                required
               />
      
              <label>Email Address</label>
      
            </div>
      
            <div className="floating-group">
      
              <input
                type="password"
                required
               />
      
              <label>Password</label>
      
            </div>
      
            <button className="gradient-btn">
              Create Account
            </button>
      
          </form>
      
        </div>
      
        {/* NEON CONTACT FORM */}
      
        <div className="component-card neon-card">
      
          <h3>Neon Contact Form</h3>
      
          <form className="modern-form">
      
            <div className="input-box">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Your Name"
                required
               />
            </div>
      
            <div className="input-box">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Your Email"
                required
               />
            </div>
      
            <div className="input-box textarea-box">
              <textarea
                placeholder="Write message..."
                required
              ></textarea>
            </div>
      
            <button className="neon-btn">
              Send Message
            </button>
      
          </form>
      
        </div>
      
        {/* MULTI STEP FORM */}
      
        <div className="component-card">
      
          <h3>Multi Step Form</h3>
      
          <form className="step-form">
      
            <div className="progress-bar">
              <span></span>
            </div>
      
            <div className="step active">
      
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
               />
      
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
               />
      
            </div>
      
            <div className="actions">
      
              <button type="button" className="gradient-btn">
                Next Step
              </button>
      
            </div>
      
          </form>
      
        </div>
      
        {/* NEWSLETTER FORM */}
      
        <div className="component-card newsletter-card">
      
          <h3>Newsletter Subscribe</h3>
      
          <form className="newsletter-form">
      
            <input
              type="email"
              placeholder="Enter your email"
              required
             />
      
            <button>
              Subscribe
            </button>
      
          </form>
      
        </div>
      
        {/* SOCIAL LOGIN FORM */}
      
        <div className="component-card social-card">
      
          <h3>Social Login</h3>
      
          <form className="modern-form">
      
            <div className="input-box">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Email Address"
                required
               />
            </div>
      
            <div className="input-box">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
               />
            </div>
      
            <button className="gradient-btn">
              Login
            </button>
      
            <div className="divider">
              OR CONTINUE WITH
            </div>
      
            <div className="social-buttons">
      
              <button type="button">
                <i className="fab fa-google"></i>
              </button>
      
              <button type="button">
                <i className="fab fa-github"></i>
              </button>
      
              <button type="button">
                <i className="fab fa-facebook"></i>
              </button>
      
            </div>
      
          </form>
      
        </div>
      
      </div>
      
            {/* CONTACT */}
      
            <div className="component-card">
      
              <h3>Contact Form</h3>
      
              <form>
      
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input"
                  required
                 />
      
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  required
                 />
      
                <textarea
                  placeholder="Message"
                  className="form-input"
                  required
                ></textarea>
      
                <button type="submit" className="nav-btn">
                  Send
                </button>
      
              </form>
      
              <div className="actions">
      
                <button onclick="toggleCode('f3')">
                  View Code
                </button>
      
                <button onclick="copyCode('f3',this)">
                  Copy
                </button>
      
                <button onclick="addToCollection('Contact Form')">
                  Add to Collection
                </button>
      
              </div>
      
      <pre id="f3" className="code-block">
      &lt;form&gt;
        &lt;input type="text" placeholder="Name"&gt;
        &lt;input type="email" placeholder="Email"&gt;
        &lt;textarea placeholder="Message"&gt;&lt;/textarea&gt;
        &lt;button&gt;Send&lt;/button&gt;
      &lt;/form&gt;
      </pre>
      
            </div>
      
          </div>
      
        </main>
    </>
  );
}
