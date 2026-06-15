import React from 'react';

export default function forms(){
  return (
    <>
      <main className="main-home">
      
        {/* Page Header */}
        <div className="forms-page-header">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <i className="fa-solid fa-chevron-right"></i>
            <span>Forms</span>
          </div>
          <h1>Forms UI</h1>
          <p>Reusable form components with clean inputs, selects, radios, checkboxes and more.</p>
          <div className="page-meta">
            <span className="meta-badge"><i className="fa-solid fa-layer-group"></i> 14 Forms</span>
            <span className="meta-badge"><i className="fa-solid fa-code"></i> Pure HTML &amp; CSS</span>
          </div>
        </div>
      
      
        {/* Forms Grid */}
        <div className="forms-grid">
      
          {/* Login Form */}
          <div className="form-component-card" data-name="login form email password">
            <div className="card-top">
              <span className="card-label">Login Form</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="form-preview">
              <div className="form-card">
                <h3>Welcome back</h3>
                <p className="form-sub">Sign in to your account</p>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div className="form-field">
                  <label>Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="form-options">
                  <label className="simple-check"><input type="checkbox" /> Remember me</label>
                  <a href="#">Forgot password?</a>
                </div>
                <button className="form-btn">Login</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc1', this)" aria-label="View code for Login Form"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc1', this)" aria-label="Copy code for Login Form"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc1" className="code-block"><code>&lt;div className="form-card"&gt;
        &lt;h3&gt;Welcome back&lt;/h3&gt;
        &lt;input type="email" placeholder="Email"&gt;
        &lt;input type="password" placeholder="Password"&gt;
        &lt;div className="options"&gt;
          &lt;label&gt;&lt;input type="checkbox"&gt; Remember me&lt;/label&gt;
          &lt;a href="#"&gt;Forgot password?&lt;/a&gt;
        &lt;/div&gt;
        &lt;button&gt;Login&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* Signup Form */}
          <div className="form-component-card" data-name="signup register form">
            <div className="card-top">
              <span className="card-label">Signup Form</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="form-preview">
              <div className="form-card">
                <h3>Create Account</h3>
                <p className="form-sub">Join thousands of developers</p>
                <div className="form-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div className="form-field">
                  <label>Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="form-field">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <button className="form-btn">Register</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc2', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc2" className="code-block"><code>&lt;div className="form-card"&gt;
        &lt;h3&gt;Create Account&lt;/h3&gt;
        &lt;input type="text" placeholder="Full Name"&gt;
        &lt;input type="email" placeholder="Email"&gt;
        &lt;input type="password" placeholder="Password"&gt;
        &lt;input type="password" placeholder="Confirm Password"&gt;
        &lt;button&gt;Register&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* Contact Form */}
          <div className="form-component-card" data-name="contact form message textarea">
            <div className="card-top">
              <span className="card-label">Contact Form</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="form-preview">
              <div className="form-card">
                <h3>Get in Touch</h3>
                <p className="form-sub">We'll get back to you soon</p>
                <div className="form-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-field">
                  <label>Your Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div className="form-field">
                  <label>Message</label>
                  <textarea placeholder="Write your message here..." rows="4"></textarea>
                </div>
                <button className="form-btn">Send Message</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc3', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc3', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc3" className="code-block"><code>&lt;div className="form-card"&gt;
        &lt;h3&gt;Get in Touch&lt;/h3&gt;
        &lt;input type="text" placeholder="Your Name"&gt;
        &lt;input type="email" placeholder="Your Email"&gt;
        &lt;textarea placeholder="Your Message"&gt;&lt;/textarea&gt;
        &lt;button&gt;Send Message&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* More Inputs */}
          <div className="form-component-card" data-name="select dropdown radio checkbox file input">
            <div className="card-top">
              <span className="card-label">More Inputs</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="form-preview">
              <div className="form-card">
                <h3>Extra Inputs</h3>
                <p className="form-sub">Select, radio, checkbox &amp; file</p>
                <div className="form-field">
                  <label>Country</label>
                  <select>
                    <option value="" disabled selected>Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>Germany</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Gender</label>
                  <div className="radio-group">
                    <label className="simple-check"><input type="radio" name="gender2" /> Male</label>
                    <label className="simple-check"><input type="radio" name="gender2" /> Female</label>
                  </div>
                </div>
                <div className="form-field">
                  <label>Skills</label>
                  <div className="check-group">
                    <label className="simple-check"><input type="checkbox" /> HTML</label>
                    <label className="simple-check"><input type="checkbox" /> CSS</label>
                    <label className="simple-check"><input type="checkbox" /> JavaScript</label>
                  </div>
                </div>
                <div className="form-field">
                  <label>Upload File</label>
                  <input type="file" />
                </div>
                <button className="form-btn">Submit</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc4', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc4', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc4" className="code-block"><code>&lt;select&gt;
        &lt;option&gt;Select Country&lt;/option&gt;
        &lt;option&gt;India&lt;/option&gt;
        &lt;option&gt;USA&lt;/option&gt;
      &lt;/select&gt;
      
      &lt;label&gt;&lt;input type="radio" name="gender"&gt; Male&lt;/label&gt;
      &lt;label&gt;&lt;input type="radio" name="gender"&gt; Female&lt;/label&gt;
      
      &lt;label&gt;&lt;input type="checkbox"&gt; HTML&lt;/label&gt;
      &lt;label&gt;&lt;input type="checkbox"&gt; CSS&lt;/label&gt;
      &lt;label&gt;&lt;input type="checkbox"&gt; JavaScript&lt;/label&gt;
      
      &lt;input type="file"&gt;
      &lt;button&gt;Submit&lt;/button&gt;</code></pre>
          </div>
      
          {/* Multi-Step Registration Form */}
          <div className="form-component-card" data-name="multi-step registration stepper form">
            <div className="card-top">
              <span className="card-label">Multi-Step Form</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="form-preview">
              <div className="form-card multi-step-card">
                <div className="step-progress">
                  <div className="step-num active">1</div>
                  <div className="step-line"></div>
                  <div className="step-num">2</div>
                  <div className="step-line"></div>
                  <div className="step-num">3</div>
                </div>
                <h3>Account Setup</h3>
                <p className="form-sub">Step 1 of 3: Personal Details</p>
                <div className="form-field">
                  <label>Username</label>
                  <input type="text" placeholder="saiteja" />
                </div>
                <div className="form-field">
                  <label>Professional Title</label>
                  <input type="text" placeholder="UI/UX Engineer" />
                </div>
                <div className="multi-step-actions">
                  <button className="form-btn outline-btn" disabled>Back</button>
                  <button className="form-btn">Next Step</button>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc5', this)" aria-label="View code for Multi-Step Form"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc5', this)" aria-label="Copy code for Multi-Step Form"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc5" className="code-block"><code>&lt;div className="multi-step-card"&gt;
        &lt;div className="step-progress"&gt;
          &lt;div className="step-num active"&gt;1&lt;/div&gt;
          &lt;div className="step-line"&gt;&lt;/div&gt;
          &lt;div className="step-num"&gt;2&lt;/div&gt;
          &lt;div className="step-line"&gt;&lt;/div&gt;
          &lt;div className="step-num"&gt;3&lt;/div&gt;
        &lt;/div&gt;
        &lt;h3&gt;Account Setup&lt;/h3&gt;
        &lt;input type="text" placeholder="Username"&gt;
        &lt;input type="text" placeholder="Professional Title"&gt;
        &lt;button&gt;Next Step&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* Floating Label Form */}
          <div className="form-component-card" data-name="floating label input form animation">
            <div className="card-top">
              <span className="card-label">Floating Label</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="form-preview">
              <div className="form-card floating-label-card">
                <h3>Welcome Back</h3>
                <p className="form-sub">Sign in with floating inputs</p>
                
                <div className="floating-group">
                  <input type="email" className="floating-input" placeholder=" " required />
                  <label className="floating-label">Email Address</label>
                </div>
                
                <div className="floating-group">
                  <input type="password" className="floating-input" placeholder=" " required />
                  <label className="floating-label">Password</label>
                </div>
                
                <button className="form-btn">Continue</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc6', this)" aria-label="View code for Floating Label Form"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc6', this)" aria-label="Copy code for Floating Label Form"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc6" className="code-block"><code>&lt;div className="floating-group"&gt;
        &lt;input type="email" className="floating-input" placeholder=" " required&gt;
        &lt;label className="floating-label"&gt;Email Address&lt;/label&gt;
      &lt;/div&gt;
      
      .floating-input:focus ~ .floating-label,
      .floating-input:not(:placeholder-shown) ~ .floating-label {
        top: -8px;
        font-size: 12px;
        color: #6c5ce7;
      }</code></pre>
          </div>
      
          {/* Glassmorphism Contact Form */}
          <div className="form-component-card" data-name="glassmorphism contact form overlay translucent">
            <div className="card-top">
              <span className="card-label">Glassmorphism</span>
              <span className="card-tag tag-premium">Premium</span>
            </div>
            <div className="form-preview dark-preview">
              <div className="form-card glass-form-card">
                <h3>Get in Touch</h3>
                <p className="form-sub">Frosted glass contact form</p>
                <div className="form-field">
                  <input type="text" className="glass-input" placeholder="Name" />
                </div>
                <div className="form-field">
                  <input type="email" className="glass-input" placeholder="Email" />
                </div>
                <div className="form-field">
                  <textarea className="glass-input" placeholder="Your Message" rows="3"></textarea>
                </div>
                <button className="form-btn glass-btn">Send Message</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc7', this)" aria-label="View code for Glassmorphism Contact Form"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc7', this)" aria-label="Copy code for Glassmorphism Contact Form"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc7" className="code-block"><code>&lt;div className="glass-form-card"&gt;
        &lt;input type="text" className="glass-input" placeholder="Name"&gt;
        &lt;input type="email" className="glass-input" placeholder="Email"&gt;
        &lt;textarea className="glass-input" placeholder="Message"&gt;&lt;/textarea&gt;
        &lt;button className="glass-btn"&gt;Send Message&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* Login & Signup Split Form */}
          <div className="form-component-card split-form-card-wrapper" data-name="split form welcome signup side layout">
            <div className="card-top">
              <span className="card-label">Split Form Layout</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="form-preview">
              <div className="split-form-card">
                <div className="split-left">
                  <h4>Join Us!</h4>
                  <p>Access modern UI tools & community components.</p>
                </div>
                <div className="split-right">
                  <h3>Signup</h3>
                  <div className="form-field">
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div className="form-field">
                    <input type="password" placeholder="Password" />
                  </div>
                  <button className="form-btn split-btn">Get Started</button>
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc8', this)" aria-label="View code for Split Form Layout"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc8', this)" aria-label="Copy code for Split Form Layout"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc8" className="code-block"><code>&lt;div className="split-form-card"&gt;
        &lt;div className="split-left"&gt;
          &lt;h4&gt;Welcome!&lt;/h4&gt;
        &lt;/div&gt;
        &lt;div className="split-right"&gt;
          &lt;input type="email" placeholder="Email"&gt;
          &lt;button&gt;Signup&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* Validation Feedback Form */}
          <div className="form-component-card" data-name="validation feedback form validation success error">
            <div className="card-top">
              <span className="card-label">Validation Form</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="form-preview">
              <div className="form-card validation-card">
                <h3>Validation Check</h3>
                <p className="form-sub">Live visual feedback on input</p>
                <div className="form-field success-field">
                  <label>Valid Username</label>
                  <div className="input-icon-wrapper">
                    <input type="text" value="saiteja" className="valid-input" readonly />
                    <i className="fa-solid fa-circle-check valid-icon"></i>
                  </div>
                  <span className="feedback-msg success-msg">Username is available!</span>
                </div>
                <div className="form-field error-field">
                  <label>Invalid Email</label>
                  <div className="input-icon-wrapper">
                    <input type="email" value="saiteja-uiverse.com" className="invalid-input" readonly />
                    <i className="fa-solid fa-circle-exclamation invalid-icon"></i>
                  </div>
                  <span className="feedback-msg error-msg">Please enter a valid email address.</span>
                </div>
                <button className="form-btn">Validate Now</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc9', this)" aria-label="View code for Validation Feedback Form"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc9', this)" aria-label="Copy code for Validation Feedback Form"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc9" className="code-block"><code>&lt;div className="form-field success-field"&gt;
        &lt;input type="text" className="valid-input"&gt;
        &lt;i className="fa-solid fa-circle-check valid-icon"&gt;&lt;/i&gt;
        &lt;span className="success-msg"&gt;Valid!&lt;/span&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* Secure Checkout Form */}
          <div className="form-component-card" data-name="credit card payment checkout secure transaction">
            <div className="card-top">
              <span className="card-label">Secure Checkout</span>
              <span className="card-tag tag-premium">Premium</span>
            </div>
            <div className="form-preview">
              <div className="form-card payment-card-wrapper">
                <div className="credit-card-mock">
                  <div className="card-glow"></div>
                  <div className="card-chip"></div>
                  <div className="card-number-display">•••• •••• •••• ••••</div>
                  <div className="card-meta">
                    <div className="card-holder-display">CARDHOLDER NAME</div>
                    <div className="card-expiry-display">MM/YY</div>
                  </div>
                </div>
                <form className="payment-form" onsubmit="event.preventDefault();">
                  <div className="form-field">
                    <label for="pay-name">Cardholder Name</label>
                    <input type="text" id="pay-name" placeholder="John Doe" oninput="updateCardName(this.value)" />
                  </div>
                  <div className="form-field">
                    <label for="pay-number">Card Number</label>
                    <input type="text" id="pay-number" placeholder="4000 1234 5678 9010" maxlength="19" oninput="updateCardNumber(this.value)" />
                  </div>
                  <div className="form-row flex-row">
                    <div className="form-field flex-1">
                      <label for="pay-expiry">Expiry Date</label>
                      <input type="text" id="pay-expiry" placeholder="MM/YY" maxlength="5" oninput="updateCardExpiry(this.value)" />
                    </div>
                    <div className="form-field flex-1">
                      <label for="pay-cvv">CVV</label>
                      <input type="password" id="pay-cvv" placeholder="•••" maxlength="3" />
                    </div>
                  </div>
                  <button type="submit" className="form-btn payment-btn"><i className="fa-solid fa-lock" aria-hidden="true"></i> Pay $49.00 Securely</button>
                </form>
              </div>
            </div>
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('fc10', this)" aria-label="View code for Secure Checkout"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('fc10', this)" aria-label="Copy code for Secure Checkout"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
            </div>
            <pre id="fc10" className="code-block"><code>&lt;div className="credit-card-mock"&gt;
        &lt;div className="card-chip"&gt;&lt;/div&gt;
        &lt;div className="card-number-display"&gt;•••• •••• •••• ••••&lt;/div&gt;
        &lt;div className="card-holder-display"&gt;CARDHOLDER NAME&lt;/div&gt;
        &lt;div className="card-expiry-display"&gt;MM/YY&lt;/div&gt;
      &lt;/div&gt;
      &lt;form className="payment-form"&gt;
        &lt;input type="text" placeholder="Cardholder Name" oninput="updateCardName(this.value)"&gt;
        &lt;input type="text" placeholder="Card Number" oninput="updateCardNumber(this.value)"&gt;
        &lt;button type="submit" className="payment-btn"&gt;Pay Securely&lt;/button&gt;
      &lt;/form&gt;</code></pre>
          </div>
      
          {/* Emoji Feedback Form */}
          <div className="form-component-card" data-name="feedback emoji rating interactive user experience review">
            <div className="card-top">
              <span className="card-label">Emoji Feedback</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="form-preview">
              <div className="form-card feedback-rating-card">
                <h3>Share Your Experience</h3>
                <p className="form-sub">We value your thoughts and review</p>
                <div className="emoji-container">
                  <button type="button" className="emoji-btn" onclick="selectEmoji(this, 'angry')" title="Angry">😠</button>
                  <button type="button" className="emoji-btn" onclick="selectEmoji(this, 'neutral')" title="Neutral">😐</button>
                  <button type="button" className="emoji-btn" onclick="selectEmoji(this, 'happy')" title="Happy">😊</button>
                  <button type="button" className="emoji-btn" onclick="selectEmoji(this, 'love')" title="Love">😍</button>
                  <button type="button" className="emoji-btn" onclick="selectEmoji(this, 'excited')" title="Excited">🤩</button>
                </div>
                <div className="form-field feedback-text-field">
                  <label for="feedback-comment">Tell us more</label>
                  <textarea id="feedback-comment" placeholder="What can we improve?..." rows="3"></textarea>
                </div>
                <button type="button" className="form-btn feedback-submit-btn" onclick="submitFeedback(this)">Submit Review</button>
              </div>
            </div>
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('fc11', this)" aria-label="View code for Emoji Feedback"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('fc11', this)" aria-label="Copy code for Emoji Feedback"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
            </div>
            <pre id="fc11" className="code-block"><code>&lt;div className="emoji-container"&gt;
        &lt;button type="button" className="emoji-btn" onclick="selectEmoji(this, 'angry')"&gt;😠&lt;/button&gt;
        &lt;button type="button" className="emoji-btn" onclick="selectEmoji(this, 'neutral')"&gt;😐&lt;/button&gt;
        &lt;button type="button" className="emoji-btn" onclick="selectEmoji(this, 'happy')"&gt;😊&lt;/button&gt;
        &lt;button type="button" className="emoji-btn" onclick="selectEmoji(this, 'love')"&gt;😍&lt;/button&gt;
        &lt;button type="button" className="emoji-btn" onclick="selectEmoji(this, 'excited')"&gt;🤩&lt;/button&gt;
      &lt;/div&gt;
      &lt;textarea placeholder="What can we improve?..."&gt;&lt;/textarea&gt;
      &lt;button type="button" className="form-btn feedback-submit-btn"&gt;Submit Review&lt;/button&gt;</code></pre>
          </div>
      
          {/* OTP Verification Form */}
          <div className="form-component-card" data-name="otp security verification code 2fa two factor">
            <div className="card-top">
              <span className="card-label">OTP Verification</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="form-preview">
              <div className="form-card otp-verification-card">
                <div className="security-shield-icon">
                  <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
                </div>
                <h3>Verify Account</h3>
                <p className="form-sub text-center">We sent a 6-digit code to your email</p>
                <div className="otp-input-group">
                  <input type="text" className="otp-box" aria-label="Digit 1" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)" />
                  <input type="text" className="otp-box" aria-label="Digit 2" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)" />
                  <input type="text" className="otp-box" aria-label="Digit 3" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)" />
                  <input type="text" className="otp-box" aria-label="Digit 4" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)" />
                  <input type="text" className="otp-box" aria-label="Digit 5" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)" />
                  <input type="text" className="otp-box" aria-label="Digit 6" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)" />
                </div>
                <p className="resend-text">Didn't receive code? <a href="#" onclick="event.preventDefault(); resetOtpBoxes();">Resend Code</a></p>
                <button type="button" className="form-btn otp-btn">Verify &amp; Activate</button>
              </div>
            </div>
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('fc12', this)" aria-label="View code for OTP Verification"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('fc12', this)" aria-label="Copy code for OTP Verification"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
            </div>
            <pre id="fc12" className="code-block"><code>&lt;div className="otp-input-group"&gt;
        &lt;input type="text" className="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
        &lt;input type="text" className="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
        &lt;input type="text" className="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
        &lt;input type="text" className="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
        &lt;input type="text" className="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
        &lt;input type="text" className="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
      &lt;/div&gt;
      &lt;button type="button" className="form-btn otp-btn"&gt;Verify &amp; Activate&lt;/button&gt;</code></pre>
          </div>
      
          {/* Newsletter Pill Form */}
          <div className="form-component-card" data-name="newsletter pill subscribe email signup inline container">
            <div className="card-top">
              <span className="card-label">Newsletter Pill</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="form-preview">
              <div className="form-card newsletter-pill-card">
                <h3>Stay in the Loop</h3>
                <p className="form-sub">Get direct premium updates to your inbox</p>
                <form className="inline-pill-form" onsubmit="event.preventDefault();">
                  <i className="fa-regular fa-envelope pill-icon" aria-hidden="true"></i>
                  <input type="email" className="pill-input" aria-label="Email Address" placeholder="Enter your email address" required />
                  <button type="submit" className="pill-btn">Subscribe</button>
                </form>
                <p className="pill-terms">Zero spam. Unsubscribe at any time.</p>
              </div>
            </div>
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('fc13', this)" aria-label="View code for Newsletter Pill"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('fc13', this)" aria-label="Copy code for Newsletter Pill"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
            </div>
            <pre id="fc13" className="code-block"><code>&lt;form className="inline-pill-form"&gt;
        &lt;i className="fa-regular fa-envelope pill-icon"&gt;&lt;/i&gt;
        &lt;input type="email" className="pill-input" placeholder="Enter your email address" required&gt;
        &lt;button type="submit" className="pill-btn"&gt;Subscribe&lt;/button&gt;
      &lt;/form&gt;</code></pre>
          </div>
      
          {/* Notification Preferences Form */}
          <div className="form-component-card" data-name="preference settings toggle checklist dashboard notification items">
            <div className="card-top">
              <span className="card-label">Notification Options</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="form-preview">
              <div className="form-card preference-survey-card">
                <h3>Preferences</h3>
                <p className="form-sub">Manage active delivery channels</p>
                <div className="preference-list">
                  <div className="pref-item active" onclick="togglePrefSwitch(this)">
                    <div className="pref-icon-wrapper">
                      <i className="fa-solid fa-envelope-open-text" aria-hidden="true"></i>
                    </div>
                    <div className="pref-text">
                      <h4>Email Digests</h4>
                      <p>Weekly summaries and component releases</p>
                    </div>
                    <label className="pref-switch">
                      <input type="checkbox" checked onclick="event.stopPropagation();" />
                      <span className="pref-slider"></span>
                    </label>
                  </div>
                  <div className="pref-item" onclick="togglePrefSwitch(this)">
                    <div className="pref-icon-wrapper">
                      <i className="fa-solid fa-bell" aria-hidden="true"></i>
                    </div>
                    <div className="pref-text">
                      <h4>Push Alerts</h4>
                      <p>Immediate live database additions</p>
                    </div>
                    <label className="pref-switch">
                      <input type="checkbox" onclick="event.stopPropagation();" />
                      <span className="pref-slider"></span>
                    </label>
                  </div>
                  <div className="pref-item active" onclick="togglePrefSwitch(this)">
                    <div className="pref-icon-wrapper">
                      <i className="fa-solid fa-user-shield" aria-hidden="true"></i>
                    </div>
                    <div className="pref-text">
                      <h4>Security Logs</h4>
                      <p>Critical account activity warning notes</p>
                    </div>
                    <label className="pref-switch">
                      <input type="checkbox" checked onclick="event.stopPropagation();" />
                      <span className="pref-slider"></span>
                    </label>
                  </div>
                </div>
                <button type="button" className="form-btn pref-save-btn" onclick="savePreferences(this)">Save Preferences</button>
              </div>
            </div>
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('fc14', this)" aria-label="View code for Notification Options"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('fc14', this)" aria-label="Copy code for Notification Options"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
            </div>
            <pre id="fc14" className="code-block"><code>&lt;div className="pref-item"&gt;
        &lt;div className="pref-text"&gt;
          &lt;h4&gt;Email Digests&lt;/h4&gt;
          &lt;p&gt;Weekly summaries of new items&lt;/p&gt;
        &lt;/div&gt;
        &lt;label className="pref-switch"&gt;
          &lt;input type="checkbox" checked&gt;
          &lt;span className="pref-slider"&gt;&lt;/span&gt;
        &lt;/label&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
      
          <div className="form-component-card" data-name="password strength meter security indicator signup">
            <div className="card-top">
              <span className="card-label">Password Strength</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="form-preview">
              <div className="form-card strength-meter-card">
                <h3>Create Password</h3>
                <p className="form-sub">Set a secure password for your account</p>
                <div className="form-field">
                  <label>New Password</label>
                  <div className="password-input-wrap">
                    <input type="password" id="strengthPassword" placeholder="Enter password..." oninput="updateStrengthMeter(this.value)" />
                    <button type="button" className="toggle-password-btn" onclick="togglePasswordVisibility(this)"><i className="fa-solid fa-eye"></i></button>
                  </div>
                </div>
                <div className="strength-bar-wrap">
                  <div className="strength-bar" id="strengthBar"></div>
                </div>
                <div className="strength-details">
                  <span className="strength-label" id="strengthLabel">Enter a password</span>
                  <span className="strength-percent" id="strengthPercent">0%</span>
                </div>
                <ul className="strength-checklist" id="strengthChecklist">
                  <li id="checkLength"><i className="fa-solid fa-circle"></i> At least 8 characters</li>
                  <li id="checkUpper"><i className="fa-solid fa-circle"></i> One uppercase letter</li>
                  <li id="checkNumber"><i className="fa-solid fa-circle"></i> One number</li>
                  <li id="checkSpecial"><i className="fa-solid fa-circle"></i> One special character</li>
                </ul>
                <button className="form-btn">Set Password</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc15', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc15', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc15" className="code-block"><code>&lt;div className="strength-meter-card"&gt;
        &lt;input type="password" oninput="updateStrengthMeter(this.value)"&gt;
        &lt;div className="strength-bar-wrap"&gt;
          &lt;div className="strength-bar"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;ul className="strength-checklist"&gt;
          &lt;li&gt;At least 8 characters&lt;/li&gt;
          &lt;li&gt;One uppercase letter&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="form-component-card" data-name="survey poll vote quiz card selection option">
            <div className="card-top">
              <span className="card-label">Survey Poll Cards</span>
              <span className="card-tag tag-premium">Premium</span>
            </div>
            <div className="form-preview">
              <div className="form-card survey-poll-card">
                <h3>Quick Poll</h3>
                <p className="form-sub">Which framework do you prefer?</p>
                <div className="poll-options-grid">
                  <label className="poll-option-card" onclick="selectPollOption(this)">
                    <input type="radio" name="pollChoice" value="react" />
                    <div className="poll-option-icon"><i className="fa-brands fa-react"></i></div>
                    <span className="poll-option-label">React</span>
                    <div className="poll-check-mark"><i className="fa-solid fa-circle-check"></i></div>
                  </label>
                  <label className="poll-option-card" onclick="selectPollOption(this)">
                    <input type="radio" name="pollChoice" value="vue" />
                    <div className="poll-option-icon"><i className="fa-brands fa-vuejs"></i></div>
                    <span className="poll-option-label">Vue</span>
                    <div className="poll-check-mark"><i className="fa-solid fa-circle-check"></i></div>
                  </label>
                  <label className="poll-option-card" onclick="selectPollOption(this)">
                    <input type="radio" name="pollChoice" value="angular" />
                    <div className="poll-option-icon"><i className="fa-brands fa-angular"></i></div>
                    <span className="poll-option-label">Angular</span>
                    <div className="poll-check-mark"><i className="fa-solid fa-circle-check"></i></div>
                  </label>
                  <label className="poll-option-card" onclick="selectPollOption(this)">
                    <input type="radio" name="pollChoice" value="svelte" />
                    <div className="poll-option-icon"><i className="fa-solid fa-fire"></i></div>
                    <span className="poll-option-label">Svelte</span>
                    <div className="poll-check-mark"><i className="fa-solid fa-circle-check"></i></div>
                  </label>
                </div>
                <button type="button" className="form-btn poll-submit-btn" onclick="submitPoll(this)">Submit Vote</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc16', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc16', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc16" className="code-block"><code>&lt;div className="poll-options-grid"&gt;
        &lt;label className="poll-option-card"&gt;
          &lt;input type="radio" name="pollChoice" value="react"&gt;
          &lt;div className="poll-option-icon"&gt;&lt;i className="fa-brands fa-react"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;span className="poll-option-label"&gt;React&lt;/span&gt;
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;button className="form-btn"&gt;Submit Vote&lt;/button&gt;</code></pre>
          </div>
      
          <div className="form-component-card" data-name="booking reservation date time schedule appointment">
            <div className="card-top">
              <span className="card-label">Booking Form</span>
              <span className="card-tag tag-premium">Premium</span>
            </div>
            <div className="form-preview">
              <div className="form-card booking-reservation-card">
                <div className="booking-header-row">
                  <div className="booking-icon-circle"><i className="fa-solid fa-calendar-check"></i></div>
                  <div>
                    <h3>Book Appointment</h3>
                    <p className="form-sub">Schedule your session below</p>
                  </div>
                </div>
                <div className="form-field">
                  <label>Full Name</label>
                  <div className="icon-input-wrapper">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div className="form-row flex-row">
                  <div className="form-field flex-1">
                    <label>Date</label>
                    <div className="icon-input-wrapper">
                      <i className="fa-solid fa-calendar-days"></i>
                      <input type="date" className="booking-date-input" />
                    </div>
                  </div>
                  <div className="form-field flex-1">
                    <label>Time</label>
                    <div className="icon-input-wrapper">
                      <i className="fa-solid fa-clock"></i>
                      <input type="time" className="booking-time-input" />
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <label>Service</label>
                  <div className="icon-input-wrapper">
                    <i className="fa-solid fa-briefcase"></i>
                    <select>
                      <option value="" disabled selected>Choose a service</option>
                      <option>UI/UX Consultation</option>
                      <option>Code Review Session</option>
                      <option>Design Workshop</option>
                      <option>Technical Interview Prep</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label>Notes</label>
                  <textarea placeholder="Any special requirements..." rows="3"></textarea>
                </div>
                <button type="button" className="form-btn booking-btn" onclick="confirmBooking(this)"><i className="fa-solid fa-check-circle"></i> Confirm Booking</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc17', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc17', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc17" className="code-block"><code>&lt;div className="booking-reservation-card"&gt;
        &lt;input type="text" placeholder="Full Name"&gt;
        &lt;input type="date"&gt;
        &lt;input type="time"&gt;
        &lt;select&gt;
          &lt;option&gt;Choose a service&lt;/option&gt;
        &lt;/select&gt;
        &lt;textarea placeholder="Notes..."&gt;&lt;/textarea&gt;
        &lt;button className="form-btn"&gt;Confirm Booking&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="form-component-card" data-name="profile settings avatar upload bio edit account">
            <div className="card-top">
              <span className="card-label">Profile Settings</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="form-preview">
              <div className="form-card profile-settings-card">
                <h3>Edit Profile</h3>
                <p className="form-sub">Update your public information</p>
                <div className="profile-avatar-section">
                  <div className="profile-avatar-circle" id="profileAvatarCircle">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="profile-avatar-actions">
                    <label className="avatar-upload-btn">
                      <i className="fa-solid fa-camera"></i> Upload Photo
                      <input type="file" accept="image/*" onchange="previewProfileAvatar(this)" hidden />
                    </label>
                    <button type="button" className="avatar-remove-btn" onclick="removeProfileAvatar()"><i className="fa-solid fa-trash-can"></i> Remove</button>
                  </div>
                </div>
                <div className="form-row flex-row">
                  <div className="form-field flex-1">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-field flex-1">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="form-field">
                  <label>Bio</label>
                  <textarea placeholder="Tell us about yourself..." rows="3" maxlength="160"></textarea>
                </div>
                <div className="form-field">
                  <label>Website</label>
                  <div className="icon-input-wrapper">
                    <i className="fa-solid fa-globe"></i>
                    <input type="url" placeholder="https://yoursite.com" />
                  </div>
                </div>
                <button type="button" className="form-btn profile-save-btn" onclick="saveProfile(this)"><i className="fa-solid fa-floppy-disk"></i> Save Changes</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc18', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc18', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc18" className="code-block"><code>&lt;div className="profile-settings-card"&gt;
        &lt;div className="profile-avatar-circle"&gt;
          &lt;i className="fa-solid fa-user"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;input type="file" accept="image/*"&gt;
        &lt;input type="text" placeholder="First Name"&gt;
        &lt;input type="text" placeholder="Last Name"&gt;
        &lt;textarea placeholder="Bio..."&gt;&lt;/textarea&gt;
        &lt;button className="form-btn"&gt;Save Changes&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="form-component-card" data-name="shipping address delivery location form checkout ecommerce">
            <div className="card-top">
              <span className="card-label">Shipping Address</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="form-preview">
              <div className="form-card shipping-address-card">
                <div className="shipping-header-row">
                  <i className="fa-solid fa-truck-fast shipping-truck-icon"></i>
                  <div>
                    <h3>Delivery Details</h3>
                    <p className="form-sub">Where should we ship your order?</p>
                  </div>
                </div>
                <div className="form-row flex-row">
                  <div className="form-field flex-1">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-field flex-1">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="form-field">
                  <label>Street Address</label>
                  <div className="icon-input-wrapper">
                    <i className="fa-solid fa-location-dot"></i>
                    <input type="text" placeholder="123 Main Street, Apt 4B" />
                  </div>
                </div>
                <div className="form-row flex-row">
                  <div className="form-field flex-1">
                    <label>City</label>
                    <input type="text" placeholder="New York" />
                  </div>
                  <div className="form-field flex-1">
                    <label>ZIP / Postal</label>
                    <input type="text" placeholder="10001" />
                  </div>
                </div>
                <div className="form-row flex-row">
                  <div className="form-field flex-1">
                    <label>State</label>
                    <select>
                      <option value="" disabled selected>Select state</option>
                      <option>California</option>
                      <option>New York</option>
                      <option>Texas</option>
                      <option>Florida</option>
                    </select>
                  </div>
                  <div className="form-field flex-1">
                    <label>Country</label>
                    <select>
                      <option value="" disabled selected>Select country</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label>Phone Number</label>
                  <div className="icon-input-wrapper">
                    <i className="fa-solid fa-phone"></i>
                    <input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                <label className="simple-check save-address-check">
                  <input type="checkbox" /> Save as default shipping address
                </label>
                <button type="button" className="form-btn shipping-btn" onclick="saveShippingAddress(this)"><i className="fa-solid fa-paper-plane"></i> Save Address</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc19', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc19', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc19" className="code-block"><code>&lt;div className="shipping-address-card"&gt;
        &lt;input type="text" placeholder="First Name"&gt;
        &lt;input type="text" placeholder="Last Name"&gt;
        &lt;input type="text" placeholder="Street Address"&gt;
        &lt;input type="text" placeholder="City"&gt;
        &lt;input type="text" placeholder="ZIP"&gt;
        &lt;select&gt;&lt;option&gt;Select Country&lt;/option&gt;&lt;/select&gt;
        &lt;input type="tel" placeholder="Phone"&gt;
        &lt;button className="form-btn"&gt;Save Address&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
      
      
          {/* New Form Components: Multi-file Upload, Searchable Select, Coupon Input, Rating Slider, Human Check */}
          {/* Multi-file Upload */}
          <div className="form-component-card" data-name="file upload dropzone multiple preview">
            <div className="card-top">
              <span className="card-label">Multi-file Upload</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="form-preview">
              <div className="form-card dropzone-card">
                <h3>Upload Files</h3>
                <p className="form-sub">Drag & drop files or click to select</p>
                <label className="dropzone" for="multiUpload">
                  <input id="multiUpload" type="file" multiple hidden onchange="previewFiles(this.files)" />
                  <div className="dz-inner">
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                    <p>Drop files here or click to browse</p>
                  </div>
                </label>
                <div className="dz-previews" id="dzPreviews"></div>
                <button className="form-btn">Upload</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc20', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc20', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc20" className="code-block"><code>&lt;label className="dropzone"&gt;&lt;input type="file" multiple hidden&gt;Drop files here&lt;/label&gt;</code></pre>
          </div>
      
          {/* Searchable Select */}
          <div className="form-component-card" data-name="searchable select dropdown filter">
            <div className="card-top">
              <span className="card-label">Searchable Select</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="form-preview">
              <div className="form-card searchable-select-card">
                <h3>Choose Option</h3>
                <p className="form-sub">Type to filter options</p>
                <div className="searchable-select">
                  <input type="text" placeholder="Search countries..." oninput="filterOptions(this)" aria-label="Search select" />
                  <select size="5">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Germany</option>
                    <option>India</option>
                    <option>Australia</option>
                  </select>
                </div>
                <button className="form-btn">Choose</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc21', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc21', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc21" className="code-block"><code>&lt;div className="searchable-select"&gt;&lt;input&gt;&lt;select&gt;&lt;option&gt;...&lt;/option&gt;&lt;/select&gt;&lt;/div&gt;</code></pre>
          </div>
      
          {/* Coupon Code Input */}
          <div className="form-component-card" data-name="coupon code promo input inline apply">
            <div className="card-top">
              <span className="card-label">Coupon Code</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="form-preview">
              <div className="form-card coupon-card">
                <h3>Apply Coupon</h3>
                <p className="form-sub">Enter promo code to redeem</p>
                <div className="coupon-row">
                  <input type="text" placeholder="Enter coupon code" id="couponInput" />
                  <button className="form-btn outline-btn" onclick="applyCoupon()">Apply</button>
                </div>
                <p className="coupon-msg" id="couponMsg"></p>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc22', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc22', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc22" className="code-block"><code>&lt;div className="coupon-row"&gt;&lt;input type="text"&gt;&lt;button&gt;Apply&lt;/button&gt;&lt;/div&gt;</code></pre>
          </div>
      
          {/* Rating Slider */}
          <div className="form-component-card" data-name="rating slider range feedback score">
            <div className="card-top">
              <span className="card-label">Rating Slider</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="form-preview">
              <div className="form-card rating-slider-card">
                <h3>Rate Experience</h3>
                <p className="form-sub">Drag to set a rating</p>
                <div className="slider-row">
                  <input type="range" min="0" max="10" value="7" id="ratingRange" oninput="document.getElementById('ratingValue').textContent=this.value" />
                  <span id="ratingValue">7</span>
                </div>
                <button className="form-btn">Submit Rating</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc23', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc23', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc23" className="code-block"><code>&lt;input type="range" min="0" max="10" oninput="..."&gt;</code></pre>
          </div>
      
          {/* Human Check (Simple CAPTCHA) */}
          <div className="form-component-card" data-name="human check captcha simple checkbox spam protection">
            <div className="card-top">
              <span className="card-label">Human Check</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="form-preview">
              <div className="form-card captcha-card">
                <h3>Are you human?</h3>
                <p className="form-sub">Simple anti-bot checkbox</p>
                <label className="captcha-check"><input type="checkbox" id="humanCheck" /> I'm not a robot</label>
                <button className="form-btn" onclick="if(!document.getElementById('humanCheck').checked){alert('Please confirm you are human.');}else{alert('Thanks!');}">Confirm</button>
              </div>
            </div>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('fc24', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc24', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc24" className="code-block"><code>&lt;label&gt;&lt;input type="checkbox"&gt; I'm not a robot&lt;/label&gt;</code></pre>
          </div>
      
        </div>
      
      </main>
    </>
  );
}
