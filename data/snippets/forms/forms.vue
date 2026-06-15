<template>
<main class="main-home">

  <!-- Page Header -->
  <div class="forms-page-header">
    <div class="breadcrumb">
      <a href="index.html">Home</a>
      <i class="fa-solid fa-chevron-right"></i>
      <span>Forms</span>
    </div>
    <h1>Forms UI</h1>
    <p>Reusable form components with clean inputs, selects, radios, checkboxes and more.</p>
    <div class="page-meta">
      <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 14 Forms</span>
      <span class="meta-badge"><i class="fa-solid fa-code"></i> Pure HTML &amp; CSS</span>
    </div>
  </div>


  <!-- Forms Grid -->
  <div class="forms-grid">

    <!-- Login Form -->
    <div class="form-component-card" data-name="login form email password">
      <div class="card-top">
        <span class="card-label">Login Form</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="form-preview">
        <div class="form-card">
          <h3>Welcome back</h3>
          <p class="form-sub">Sign in to your account</p>
          <div class="form-field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div class="form-field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <div class="form-options">
            <label class="simple-check"><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button class="form-btn">Login</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc1', this)" aria-label="View code for Login Form"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc1', this)" aria-label="Copy code for Login Form"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc1" class="code-block"><code>&lt;div class="form-card"&gt;
  &lt;h3&gt;Welcome back&lt;/h3&gt;
  &lt;input type="email" placeholder="Email"&gt;
  &lt;input type="password" placeholder="Password"&gt;
  &lt;div class="options"&gt;
    &lt;label&gt;&lt;input type="checkbox"&gt; Remember me&lt;/label&gt;
    &lt;a href="#"&gt;Forgot password?&lt;/a&gt;
  &lt;/div&gt;
  &lt;button&gt;Login&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- Signup Form -->
    <div class="form-component-card" data-name="signup register form">
      <div class="card-top">
        <span class="card-label">Signup Form</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="form-preview">
        <div class="form-card">
          <h3>Create Account</h3>
          <p class="form-sub">Join thousands of developers</p>
          <div class="form-field">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div class="form-field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div class="form-field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <div class="form-field">
            <label>Confirm Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <button class="form-btn">Register</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc2', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc2" class="code-block"><code>&lt;div class="form-card"&gt;
  &lt;h3&gt;Create Account&lt;/h3&gt;
  &lt;input type="text" placeholder="Full Name"&gt;
  &lt;input type="email" placeholder="Email"&gt;
  &lt;input type="password" placeholder="Password"&gt;
  &lt;input type="password" placeholder="Confirm Password"&gt;
  &lt;button&gt;Register&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- Contact Form -->
    <div class="form-component-card" data-name="contact form message textarea">
      <div class="card-top">
        <span class="card-label">Contact Form</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="form-preview">
        <div class="form-card">
          <h3>Get in Touch</h3>
          <p class="form-sub">We'll get back to you soon</p>
          <div class="form-field">
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div class="form-field">
            <label>Your Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div class="form-field">
            <label>Message</label>
            <textarea placeholder="Write your message here..." rows="4"></textarea>
          </div>
          <button class="form-btn">Send Message</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc3', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc3', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc3" class="code-block"><code>&lt;div class="form-card"&gt;
  &lt;h3&gt;Get in Touch&lt;/h3&gt;
  &lt;input type="text" placeholder="Your Name"&gt;
  &lt;input type="email" placeholder="Your Email"&gt;
  &lt;textarea placeholder="Your Message"&gt;&lt;/textarea&gt;
  &lt;button&gt;Send Message&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- More Inputs -->
    <div class="form-component-card" data-name="select dropdown radio checkbox file input">
      <div class="card-top">
        <span class="card-label">More Inputs</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="form-preview">
        <div class="form-card">
          <h3>Extra Inputs</h3>
          <p class="form-sub">Select, radio, checkbox &amp; file</p>
          <div class="form-field">
            <label>Country</label>
            <select>
              <option value="" disabled selected>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>Germany</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-field">
            <label>Gender</label>
            <div class="radio-group">
              <label class="simple-check"><input type="radio" name="gender2" /> Male</label>
              <label class="simple-check"><input type="radio" name="gender2" /> Female</label>
            </div>
          </div>
          <div class="form-field">
            <label>Skills</label>
            <div class="check-group">
              <label class="simple-check"><input type="checkbox" /> HTML</label>
              <label class="simple-check"><input type="checkbox" /> CSS</label>
              <label class="simple-check"><input type="checkbox" /> JavaScript</label>
            </div>
          </div>
          <div class="form-field">
            <label>Upload File</label>
            <input type="file" />
          </div>
          <button class="form-btn">Submit</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc4', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc4', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc4" class="code-block"><code>&lt;select&gt;
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

    <!-- Multi-Step Registration Form -->
    <div class="form-component-card" data-name="multi-step registration stepper form">
      <div class="card-top">
        <span class="card-label">Multi-Step Form</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="form-preview">
        <div class="form-card multi-step-card">
          <div class="step-progress">
            <div class="step-num active">1</div>
            <div class="step-line"></div>
            <div class="step-num">2</div>
            <div class="step-line"></div>
            <div class="step-num">3</div>
          </div>
          <h3>Account Setup</h3>
          <p class="form-sub">Step 1 of 3: Personal Details</p>
          <div class="form-field">
            <label>Username</label>
            <input type="text" placeholder="saiteja" />
          </div>
          <div class="form-field">
            <label>Professional Title</label>
            <input type="text" placeholder="UI/UX Engineer" />
          </div>
          <div class="multi-step-actions">
            <button class="form-btn outline-btn" disabled>Back</button>
            <button class="form-btn">Next Step</button>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc5', this)" aria-label="View code for Multi-Step Form"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc5', this)" aria-label="Copy code for Multi-Step Form"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc5" class="code-block"><code>&lt;div class="multi-step-card"&gt;
  &lt;div class="step-progress"&gt;
    &lt;div class="step-num active"&gt;1&lt;/div&gt;
    &lt;div class="step-line"&gt;&lt;/div&gt;
    &lt;div class="step-num"&gt;2&lt;/div&gt;
    &lt;div class="step-line"&gt;&lt;/div&gt;
    &lt;div class="step-num"&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;h3&gt;Account Setup&lt;/h3&gt;
  &lt;input type="text" placeholder="Username"&gt;
  &lt;input type="text" placeholder="Professional Title"&gt;
  &lt;button&gt;Next Step&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- Floating Label Form -->
    <div class="form-component-card" data-name="floating label input form animation">
      <div class="card-top">
        <span class="card-label">Floating Label</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="form-preview">
        <div class="form-card floating-label-card">
          <h3>Welcome Back</h3>
          <p class="form-sub">Sign in with floating inputs</p>
          
          <div class="floating-group">
            <input type="email" class="floating-input" placeholder=" " required />
            <label class="floating-label">Email Address</label>
          </div>
          
          <div class="floating-group">
            <input type="password" class="floating-input" placeholder=" " required />
            <label class="floating-label">Password</label>
          </div>
          
          <button class="form-btn">Continue</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc6', this)" aria-label="View code for Floating Label Form"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc6', this)" aria-label="Copy code for Floating Label Form"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc6" class="code-block"><code>&lt;div class="floating-group"&gt;
  &lt;input type="email" class="floating-input" placeholder=" " required&gt;
  &lt;label class="floating-label"&gt;Email Address&lt;/label&gt;
&lt;/div&gt;

.floating-input:focus ~ .floating-label,
.floating-input:not(:placeholder-shown) ~ .floating-label {
  top: -8px;
  font-size: 12px;
  color: #6c5ce7;
}</code></pre>
    </div>

    <!-- Glassmorphism Contact Form -->
    <div class="form-component-card" data-name="glassmorphism contact form overlay translucent">
      <div class="card-top">
        <span class="card-label">Glassmorphism</span>
        <span class="card-tag tag-premium">Premium</span>
      </div>
      <div class="form-preview dark-preview">
        <div class="form-card glass-form-card">
          <h3>Get in Touch</h3>
          <p class="form-sub">Frosted glass contact form</p>
          <div class="form-field">
            <input type="text" class="glass-input" placeholder="Name" />
          </div>
          <div class="form-field">
            <input type="email" class="glass-input" placeholder="Email" />
          </div>
          <div class="form-field">
            <textarea class="glass-input" placeholder="Your Message" rows="3"></textarea>
          </div>
          <button class="form-btn glass-btn">Send Message</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc7', this)" aria-label="View code for Glassmorphism Contact Form"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc7', this)" aria-label="Copy code for Glassmorphism Contact Form"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc7" class="code-block"><code>&lt;div class="glass-form-card"&gt;
  &lt;input type="text" class="glass-input" placeholder="Name"&gt;
  &lt;input type="email" class="glass-input" placeholder="Email"&gt;
  &lt;textarea class="glass-input" placeholder="Message"&gt;&lt;/textarea&gt;
  &lt;button class="glass-btn"&gt;Send Message&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- Login & Signup Split Form -->
    <div class="form-component-card split-form-card-wrapper" data-name="split form welcome signup side layout">
      <div class="card-top">
        <span class="card-label">Split Form Layout</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="form-preview">
        <div class="split-form-card">
          <div class="split-left">
            <h4>Join Us!</h4>
            <p>Access modern UI tools & community components.</p>
          </div>
          <div class="split-right">
            <h3>Signup</h3>
            <div class="form-field">
              <input type="email" placeholder="Email Address" />
            </div>
            <div class="form-field">
              <input type="password" placeholder="Password" />
            </div>
            <button class="form-btn split-btn">Get Started</button>
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc8', this)" aria-label="View code for Split Form Layout"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc8', this)" aria-label="Copy code for Split Form Layout"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc8" class="code-block"><code>&lt;div class="split-form-card"&gt;
  &lt;div class="split-left"&gt;
    &lt;h4&gt;Welcome!&lt;/h4&gt;
  &lt;/div&gt;
  &lt;div class="split-right"&gt;
    &lt;input type="email" placeholder="Email"&gt;
    &lt;button&gt;Signup&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- Validation Feedback Form -->
    <div class="form-component-card" data-name="validation feedback form validation success error">
      <div class="card-top">
        <span class="card-label">Validation Form</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="form-preview">
        <div class="form-card validation-card">
          <h3>Validation Check</h3>
          <p class="form-sub">Live visual feedback on input</p>
          <div class="form-field success-field">
            <label>Valid Username</label>
            <div class="input-icon-wrapper">
              <input type="text" value="saiteja" class="valid-input" readonly />
              <i class="fa-solid fa-circle-check valid-icon"></i>
            </div>
            <span class="feedback-msg success-msg">Username is available!</span>
          </div>
          <div class="form-field error-field">
            <label>Invalid Email</label>
            <div class="input-icon-wrapper">
              <input type="email" value="saiteja-uiverse.com" class="invalid-input" readonly />
              <i class="fa-solid fa-circle-exclamation invalid-icon"></i>
            </div>
            <span class="feedback-msg error-msg">Please enter a valid email address.</span>
          </div>
          <button class="form-btn">Validate Now</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc9', this)" aria-label="View code for Validation Feedback Form"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc9', this)" aria-label="Copy code for Validation Feedback Form"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc9" class="code-block"><code>&lt;div class="form-field success-field"&gt;
  &lt;input type="text" class="valid-input"&gt;
  &lt;i class="fa-solid fa-circle-check valid-icon"&gt;&lt;/i&gt;
  &lt;span class="success-msg"&gt;Valid!&lt;/span&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- Secure Checkout Form -->
    <div class="form-component-card" data-name="credit card payment checkout secure transaction">
      <div class="card-top">
        <span class="card-label">Secure Checkout</span>
        <span class="card-tag tag-premium">Premium</span>
      </div>
      <div class="form-preview">
        <div class="form-card payment-card-wrapper">
          <div class="credit-card-mock">
            <div class="card-glow"></div>
            <div class="card-chip"></div>
            <div class="card-number-display">•••• •••• •••• ••••</div>
            <div class="card-meta">
              <div class="card-holder-display">CARDHOLDER NAME</div>
              <div class="card-expiry-display">MM/YY</div>
            </div>
          </div>
          <form class="payment-form" onsubmit="event.preventDefault();">
            <div class="form-field">
              <label for="pay-name">Cardholder Name</label>
              <input type="text" id="pay-name" placeholder="John Doe" oninput="updateCardName(this.value)">
            </div>
            <div class="form-field">
              <label for="pay-number">Card Number</label>
              <input type="text" id="pay-number" placeholder="4000 1234 5678 9010" maxlength="19" oninput="updateCardNumber(this.value)">
            </div>
            <div class="form-row flex-row">
              <div class="form-field flex-1">
                <label for="pay-expiry">Expiry Date</label>
                <input type="text" id="pay-expiry" placeholder="MM/YY" maxlength="5" oninput="updateCardExpiry(this.value)">
              </div>
              <div class="form-field flex-1">
                <label for="pay-cvv">CVV</label>
                <input type="password" id="pay-cvv" placeholder="•••" maxlength="3">
              </div>
            </div>
            <button type="submit" class="form-btn payment-btn"><i class="fa-solid fa-lock" aria-hidden="true"></i> Pay $49.00 Securely</button>
          </form>
        </div>
      </div>
      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('fc10', this)" aria-label="View code for Secure Checkout"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('fc10', this)" aria-label="Copy code for Secure Checkout"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
      </div>
      <pre id="fc10" class="code-block"><code>&lt;div class="credit-card-mock"&gt;
  &lt;div class="card-chip"&gt;&lt;/div&gt;
  &lt;div class="card-number-display"&gt;•••• •••• •••• ••••&lt;/div&gt;
  &lt;div class="card-holder-display"&gt;CARDHOLDER NAME&lt;/div&gt;
  &lt;div class="card-expiry-display"&gt;MM/YY&lt;/div&gt;
&lt;/div&gt;
&lt;form class="payment-form"&gt;
  &lt;input type="text" placeholder="Cardholder Name" oninput="updateCardName(this.value)"&gt;
  &lt;input type="text" placeholder="Card Number" oninput="updateCardNumber(this.value)"&gt;
  &lt;button type="submit" class="payment-btn"&gt;Pay Securely&lt;/button&gt;
&lt;/form&gt;</code></pre>
    </div>

    <!-- Emoji Feedback Form -->
    <div class="form-component-card" data-name="feedback emoji rating interactive user experience review">
      <div class="card-top">
        <span class="card-label">Emoji Feedback</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="form-preview">
        <div class="form-card feedback-rating-card">
          <h3>Share Your Experience</h3>
          <p class="form-sub">We value your thoughts and review</p>
          <div class="emoji-container">
            <button type="button" class="emoji-btn" onclick="selectEmoji(this, 'angry')" title="Angry">😠</button>
            <button type="button" class="emoji-btn" onclick="selectEmoji(this, 'neutral')" title="Neutral">😐</button>
            <button type="button" class="emoji-btn" onclick="selectEmoji(this, 'happy')" title="Happy">😊</button>
            <button type="button" class="emoji-btn" onclick="selectEmoji(this, 'love')" title="Love">😍</button>
            <button type="button" class="emoji-btn" onclick="selectEmoji(this, 'excited')" title="Excited">🤩</button>
          </div>
          <div class="form-field feedback-text-field">
            <label for="feedback-comment">Tell us more</label>
            <textarea id="feedback-comment" placeholder="What can we improve?..." rows="3"></textarea>
          </div>
          <button type="button" class="form-btn feedback-submit-btn" onclick="submitFeedback(this)">Submit Review</button>
        </div>
      </div>
      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('fc11', this)" aria-label="View code for Emoji Feedback"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('fc11', this)" aria-label="Copy code for Emoji Feedback"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
      </div>
      <pre id="fc11" class="code-block"><code>&lt;div class="emoji-container"&gt;
  &lt;button type="button" class="emoji-btn" onclick="selectEmoji(this, 'angry')"&gt;😠&lt;/button&gt;
  &lt;button type="button" class="emoji-btn" onclick="selectEmoji(this, 'neutral')"&gt;😐&lt;/button&gt;
  &lt;button type="button" class="emoji-btn" onclick="selectEmoji(this, 'happy')"&gt;😊&lt;/button&gt;
  &lt;button type="button" class="emoji-btn" onclick="selectEmoji(this, 'love')"&gt;😍&lt;/button&gt;
  &lt;button type="button" class="emoji-btn" onclick="selectEmoji(this, 'excited')"&gt;🤩&lt;/button&gt;
&lt;/div&gt;
&lt;textarea placeholder="What can we improve?..."&gt;&lt;/textarea&gt;
&lt;button type="button" class="form-btn feedback-submit-btn"&gt;Submit Review&lt;/button&gt;</code></pre>
    </div>

    <!-- OTP Verification Form -->
    <div class="form-component-card" data-name="otp security verification code 2fa two factor">
      <div class="card-top">
        <span class="card-label">OTP Verification</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="form-preview">
        <div class="form-card otp-verification-card">
          <div class="security-shield-icon">
            <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
          </div>
          <h3>Verify Account</h3>
          <p class="form-sub text-center">We sent a 6-digit code to your email</p>
          <div class="otp-input-group">
            <input type="text" class="otp-box" aria-label="Digit 1" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)">
            <input type="text" class="otp-box" aria-label="Digit 2" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)">
            <input type="text" class="otp-box" aria-label="Digit 3" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)">
            <input type="text" class="otp-box" aria-label="Digit 4" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)">
            <input type="text" class="otp-box" aria-label="Digit 5" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)">
            <input type="text" class="otp-box" aria-label="Digit 6" maxlength="1" oninput="handleOtpInput(this, event)" onkeydown="handleOtpBackspace(this, event)">
          </div>
          <p class="resend-text">Didn't receive code? <a href="#" onclick="event.preventDefault(); resetOtpBoxes();">Resend Code</a></p>
          <button type="button" class="form-btn otp-btn">Verify &amp; Activate</button>
        </div>
      </div>
      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('fc12', this)" aria-label="View code for OTP Verification"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('fc12', this)" aria-label="Copy code for OTP Verification"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
      </div>
      <pre id="fc12" class="code-block"><code>&lt;div class="otp-input-group"&gt;
  &lt;input type="text" class="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
  &lt;input type="text" class="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
  &lt;input type="text" class="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
  &lt;input type="text" class="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
  &lt;input type="text" class="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
  &lt;input type="text" class="otp-box" maxlength="1" oninput="handleOtpInput(this)"&gt;
&lt;/div&gt;
&lt;button type="button" class="form-btn otp-btn"&gt;Verify &amp; Activate&lt;/button&gt;</code></pre>
    </div>

    <!-- Newsletter Pill Form -->
    <div class="form-component-card" data-name="newsletter pill subscribe email signup inline container">
      <div class="card-top">
        <span class="card-label">Newsletter Pill</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="form-preview">
        <div class="form-card newsletter-pill-card">
          <h3>Stay in the Loop</h3>
          <p class="form-sub">Get direct premium updates to your inbox</p>
          <form class="inline-pill-form" onsubmit="event.preventDefault();">
            <i class="fa-regular fa-envelope pill-icon" aria-hidden="true"></i>
            <input type="email" class="pill-input" aria-label="Email Address" placeholder="Enter your email address" required>
            <button type="submit" class="pill-btn">Subscribe</button>
          </form>
          <p class="pill-terms">Zero spam. Unsubscribe at any time.</p>
        </div>
      </div>
      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('fc13', this)" aria-label="View code for Newsletter Pill"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('fc13', this)" aria-label="Copy code for Newsletter Pill"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
      </div>
      <pre id="fc13" class="code-block"><code>&lt;form class="inline-pill-form"&gt;
  &lt;i class="fa-regular fa-envelope pill-icon"&gt;&lt;/i&gt;
  &lt;input type="email" class="pill-input" placeholder="Enter your email address" required&gt;
  &lt;button type="submit" class="pill-btn"&gt;Subscribe&lt;/button&gt;
&lt;/form&gt;</code></pre>
    </div>

    <!-- Notification Preferences Form -->
    <div class="form-component-card" data-name="preference settings toggle checklist dashboard notification items">
      <div class="card-top">
        <span class="card-label">Notification Options</span>
        <span class="card-tag tag-new">New</span>
      </div>
      <div class="form-preview">
        <div class="form-card preference-survey-card">
          <h3>Preferences</h3>
          <p class="form-sub">Manage active delivery channels</p>
          <div class="preference-list">
            <div class="pref-item active" onclick="togglePrefSwitch(this)">
              <div class="pref-icon-wrapper">
                <i class="fa-solid fa-envelope-open-text" aria-hidden="true"></i>
              </div>
              <div class="pref-text">
                <h4>Email Digests</h4>
                <p>Weekly summaries and component releases</p>
              </div>
              <label class="pref-switch">
                <input type="checkbox" checked onclick="event.stopPropagation();">
                <span class="pref-slider"></span>
              </label>
            </div>
            <div class="pref-item" onclick="togglePrefSwitch(this)">
              <div class="pref-icon-wrapper">
                <i class="fa-solid fa-bell" aria-hidden="true"></i>
              </div>
              <div class="pref-text">
                <h4>Push Alerts</h4>
                <p>Immediate live database additions</p>
              </div>
              <label class="pref-switch">
                <input type="checkbox" onclick="event.stopPropagation();">
                <span class="pref-slider"></span>
              </label>
            </div>
            <div class="pref-item active" onclick="togglePrefSwitch(this)">
              <div class="pref-icon-wrapper">
                <i class="fa-solid fa-user-shield" aria-hidden="true"></i>
              </div>
              <div class="pref-text">
                <h4>Security Logs</h4>
                <p>Critical account activity warning notes</p>
              </div>
              <label class="pref-switch">
                <input type="checkbox" checked onclick="event.stopPropagation();">
                <span class="pref-slider"></span>
              </label>
            </div>
          </div>
          <button type="button" class="form-btn pref-save-btn" onclick="savePreferences(this)">Save Preferences</button>
        </div>
      </div>
      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('fc14', this)" aria-label="View code for Notification Options"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('fc14', this)" aria-label="Copy code for Notification Options"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy</button>
      </div>
      <pre id="fc14" class="code-block"><code>&lt;div class="pref-item"&gt;
  &lt;div class="pref-text"&gt;
    &lt;h4&gt;Email Digests&lt;/h4&gt;
    &lt;p&gt;Weekly summaries of new items&lt;/p&gt;
  &lt;/div&gt;
  &lt;label class="pref-switch"&gt;
    &lt;input type="checkbox" checked&gt;
    &lt;span class="pref-slider"&gt;&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
    </div>


    <div class="form-component-card" data-name="password strength meter security indicator signup">
      <div class="card-top">
        <span class="card-label">Password Strength</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="form-preview">
        <div class="form-card strength-meter-card">
          <h3>Create Password</h3>
          <p class="form-sub">Set a secure password for your account</p>
          <div class="form-field">
            <label>New Password</label>
            <div class="password-input-wrap">
              <input type="password" id="strengthPassword" placeholder="Enter password..." oninput="updateStrengthMeter(this.value)">
              <button type="button" class="toggle-password-btn" onclick="togglePasswordVisibility(this)"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>
          <div class="strength-bar-wrap">
            <div class="strength-bar" id="strengthBar"></div>
          </div>
          <div class="strength-details">
            <span class="strength-label" id="strengthLabel">Enter a password</span>
            <span class="strength-percent" id="strengthPercent">0%</span>
          </div>
          <ul class="strength-checklist" id="strengthChecklist">
            <li id="checkLength"><i class="fa-solid fa-circle"></i> At least 8 characters</li>
            <li id="checkUpper"><i class="fa-solid fa-circle"></i> One uppercase letter</li>
            <li id="checkNumber"><i class="fa-solid fa-circle"></i> One number</li>
            <li id="checkSpecial"><i class="fa-solid fa-circle"></i> One special character</li>
          </ul>
          <button class="form-btn">Set Password</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc15', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc15', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc15" class="code-block"><code>&lt;div class="strength-meter-card"&gt;
  &lt;input type="password" oninput="updateStrengthMeter(this.value)"&gt;
  &lt;div class="strength-bar-wrap"&gt;
    &lt;div class="strength-bar"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;ul class="strength-checklist"&gt;
    &lt;li&gt;At least 8 characters&lt;/li&gt;
    &lt;li&gt;One uppercase letter&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="form-component-card" data-name="survey poll vote quiz card selection option">
      <div class="card-top">
        <span class="card-label">Survey Poll Cards</span>
        <span class="card-tag tag-premium">Premium</span>
      </div>
      <div class="form-preview">
        <div class="form-card survey-poll-card">
          <h3>Quick Poll</h3>
          <p class="form-sub">Which framework do you prefer?</p>
          <div class="poll-options-grid">
            <label class="poll-option-card" onclick="selectPollOption(this)">
              <input type="radio" name="pollChoice" value="react">
              <div class="poll-option-icon"><i class="fa-brands fa-react"></i></div>
              <span class="poll-option-label">React</span>
              <div class="poll-check-mark"><i class="fa-solid fa-circle-check"></i></div>
            </label>
            <label class="poll-option-card" onclick="selectPollOption(this)">
              <input type="radio" name="pollChoice" value="vue">
              <div class="poll-option-icon"><i class="fa-brands fa-vuejs"></i></div>
              <span class="poll-option-label">Vue</span>
              <div class="poll-check-mark"><i class="fa-solid fa-circle-check"></i></div>
            </label>
            <label class="poll-option-card" onclick="selectPollOption(this)">
              <input type="radio" name="pollChoice" value="angular">
              <div class="poll-option-icon"><i class="fa-brands fa-angular"></i></div>
              <span class="poll-option-label">Angular</span>
              <div class="poll-check-mark"><i class="fa-solid fa-circle-check"></i></div>
            </label>
            <label class="poll-option-card" onclick="selectPollOption(this)">
              <input type="radio" name="pollChoice" value="svelte">
              <div class="poll-option-icon"><i class="fa-solid fa-fire"></i></div>
              <span class="poll-option-label">Svelte</span>
              <div class="poll-check-mark"><i class="fa-solid fa-circle-check"></i></div>
            </label>
          </div>
          <button type="button" class="form-btn poll-submit-btn" onclick="submitPoll(this)">Submit Vote</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc16', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc16', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc16" class="code-block"><code>&lt;div class="poll-options-grid"&gt;
  &lt;label class="poll-option-card"&gt;
    &lt;input type="radio" name="pollChoice" value="react"&gt;
    &lt;div class="poll-option-icon"&gt;&lt;i class="fa-brands fa-react"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;span class="poll-option-label"&gt;React&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;
&lt;button class="form-btn"&gt;Submit Vote&lt;/button&gt;</code></pre>
    </div>

    <div class="form-component-card" data-name="booking reservation date time schedule appointment">
      <div class="card-top">
        <span class="card-label">Booking Form</span>
        <span class="card-tag tag-premium">Premium</span>
      </div>
      <div class="form-preview">
        <div class="form-card booking-reservation-card">
          <div class="booking-header-row">
            <div class="booking-icon-circle"><i class="fa-solid fa-calendar-check"></i></div>
            <div>
              <h3>Book Appointment</h3>
              <p class="form-sub">Schedule your session below</p>
            </div>
          </div>
          <div class="form-field">
            <label>Full Name</label>
            <div class="icon-input-wrapper">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="John Doe">
            </div>
          </div>
          <div class="form-row flex-row">
            <div class="form-field flex-1">
              <label>Date</label>
              <div class="icon-input-wrapper">
                <i class="fa-solid fa-calendar-days"></i>
                <input type="date" class="booking-date-input">
              </div>
            </div>
            <div class="form-field flex-1">
              <label>Time</label>
              <div class="icon-input-wrapper">
                <i class="fa-solid fa-clock"></i>
                <input type="time" class="booking-time-input">
              </div>
            </div>
          </div>
          <div class="form-field">
            <label>Service</label>
            <div class="icon-input-wrapper">
              <i class="fa-solid fa-briefcase"></i>
              <select>
                <option value="" disabled selected>Choose a service</option>
                <option>UI/UX Consultation</option>
                <option>Code Review Session</option>
                <option>Design Workshop</option>
                <option>Technical Interview Prep</option>
              </select>
            </div>
          </div>
          <div class="form-field">
            <label>Notes</label>
            <textarea placeholder="Any special requirements..." rows="3"></textarea>
          </div>
          <button type="button" class="form-btn booking-btn" onclick="confirmBooking(this)"><i class="fa-solid fa-check-circle"></i> Confirm Booking</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc17', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc17', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc17" class="code-block"><code>&lt;div class="booking-reservation-card"&gt;
  &lt;input type="text" placeholder="Full Name"&gt;
  &lt;input type="date"&gt;
  &lt;input type="time"&gt;
  &lt;select&gt;
    &lt;option&gt;Choose a service&lt;/option&gt;
  &lt;/select&gt;
  &lt;textarea placeholder="Notes..."&gt;&lt;/textarea&gt;
  &lt;button class="form-btn"&gt;Confirm Booking&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="form-component-card" data-name="profile settings avatar upload bio edit account">
      <div class="card-top">
        <span class="card-label">Profile Settings</span>
        <span class="card-tag tag-new">New</span>
      </div>
      <div class="form-preview">
        <div class="form-card profile-settings-card">
          <h3>Edit Profile</h3>
          <p class="form-sub">Update your public information</p>
          <div class="profile-avatar-section">
            <div class="profile-avatar-circle" id="profileAvatarCircle">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="profile-avatar-actions">
              <label class="avatar-upload-btn">
                <i class="fa-solid fa-camera"></i> Upload Photo
                <input type="file" accept="image/*" onchange="previewProfileAvatar(this)" hidden>
              </label>
              <button type="button" class="avatar-remove-btn" onclick="removeProfileAvatar()"><i class="fa-solid fa-trash-can"></i> Remove</button>
            </div>
          </div>
          <div class="form-row flex-row">
            <div class="form-field flex-1">
              <label>First Name</label>
              <input type="text" placeholder="John">
            </div>
            <div class="form-field flex-1">
              <label>Last Name</label>
              <input type="text" placeholder="Doe">
            </div>
          </div>
          <div class="form-field">
            <label>Bio</label>
            <textarea placeholder="Tell us about yourself..." rows="3" maxlength="160"></textarea>
          </div>
          <div class="form-field">
            <label>Website</label>
            <div class="icon-input-wrapper">
              <i class="fa-solid fa-globe"></i>
              <input type="url" placeholder="https://yoursite.com">
            </div>
          </div>
          <button type="button" class="form-btn profile-save-btn" onclick="saveProfile(this)"><i class="fa-solid fa-floppy-disk"></i> Save Changes</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc18', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc18', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc18" class="code-block"><code>&lt;div class="profile-settings-card"&gt;
  &lt;div class="profile-avatar-circle"&gt;
    &lt;i class="fa-solid fa-user"&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;input type="file" accept="image/*"&gt;
  &lt;input type="text" placeholder="First Name"&gt;
  &lt;input type="text" placeholder="Last Name"&gt;
  &lt;textarea placeholder="Bio..."&gt;&lt;/textarea&gt;
  &lt;button class="form-btn"&gt;Save Changes&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="form-component-card" data-name="shipping address delivery location form checkout ecommerce">
      <div class="card-top">
        <span class="card-label">Shipping Address</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="form-preview">
        <div class="form-card shipping-address-card">
          <div class="shipping-header-row">
            <i class="fa-solid fa-truck-fast shipping-truck-icon"></i>
            <div>
              <h3>Delivery Details</h3>
              <p class="form-sub">Where should we ship your order?</p>
            </div>
          </div>
          <div class="form-row flex-row">
            <div class="form-field flex-1">
              <label>First Name</label>
              <input type="text" placeholder="John">
            </div>
            <div class="form-field flex-1">
              <label>Last Name</label>
              <input type="text" placeholder="Doe">
            </div>
          </div>
          <div class="form-field">
            <label>Street Address</label>
            <div class="icon-input-wrapper">
              <i class="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="123 Main Street, Apt 4B">
            </div>
          </div>
          <div class="form-row flex-row">
            <div class="form-field flex-1">
              <label>City</label>
              <input type="text" placeholder="New York">
            </div>
            <div class="form-field flex-1">
              <label>ZIP / Postal</label>
              <input type="text" placeholder="10001">
            </div>
          </div>
          <div class="form-row flex-row">
            <div class="form-field flex-1">
              <label>State</label>
              <select>
                <option value="" disabled selected>Select state</option>
                <option>California</option>
                <option>New York</option>
                <option>Texas</option>
                <option>Florida</option>
              </select>
            </div>
            <div class="form-field flex-1">
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
          <div class="form-field">
            <label>Phone Number</label>
            <div class="icon-input-wrapper">
              <i class="fa-solid fa-phone"></i>
              <input type="tel" placeholder="+1 (555) 123-4567">
            </div>
          </div>
          <label class="simple-check save-address-check">
            <input type="checkbox"> Save as default shipping address
          </label>
          <button type="button" class="form-btn shipping-btn" onclick="saveShippingAddress(this)"><i class="fa-solid fa-paper-plane"></i> Save Address</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc19', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc19', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc19" class="code-block"><code>&lt;div class="shipping-address-card"&gt;
  &lt;input type="text" placeholder="First Name"&gt;
  &lt;input type="text" placeholder="Last Name"&gt;
  &lt;input type="text" placeholder="Street Address"&gt;
  &lt;input type="text" placeholder="City"&gt;
  &lt;input type="text" placeholder="ZIP"&gt;
  &lt;select&gt;&lt;option&gt;Select Country&lt;/option&gt;&lt;/select&gt;
  &lt;input type="tel" placeholder="Phone"&gt;
  &lt;button class="form-btn"&gt;Save Address&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>



    <!-- New Form Components: Multi-file Upload, Searchable Select, Coupon Input, Rating Slider, Human Check -->
    <!-- Multi-file Upload -->
    <div class="form-component-card" data-name="file upload dropzone multiple preview">
      <div class="card-top">
        <span class="card-label">Multi-file Upload</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="form-preview">
        <div class="form-card dropzone-card">
          <h3>Upload Files</h3>
          <p class="form-sub">Drag & drop files or click to select</p>
          <label class="dropzone" for="multiUpload">
            <input id="multiUpload" type="file" multiple hidden onchange="previewFiles(this.files)">
            <div class="dz-inner">
              <i class="fa-solid fa-cloud-arrow-up"></i>
              <p>Drop files here or click to browse</p>
            </div>
          </label>
          <div class="dz-previews" id="dzPreviews"></div>
          <button class="form-btn">Upload</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc20', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc20', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc20" class="code-block"><code>&lt;label class="dropzone"&gt;&lt;input type="file" multiple hidden&gt;Drop files here&lt;/label&gt;</code></pre>
    </div>

    <!-- Searchable Select -->
    <div class="form-component-card" data-name="searchable select dropdown filter">
      <div class="card-top">
        <span class="card-label">Searchable Select</span>
        <span class="card-tag tag-new">New</span>
      </div>
      <div class="form-preview">
        <div class="form-card searchable-select-card">
          <h3>Choose Option</h3>
          <p class="form-sub">Type to filter options</p>
          <div class="searchable-select">
            <input type="text" placeholder="Search countries..." oninput="filterOptions(this)" aria-label="Search select">
            <select size="5">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Germany</option>
              <option>India</option>
              <option>Australia</option>
            </select>
          </div>
          <button class="form-btn">Choose</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc21', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc21', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc21" class="code-block"><code>&lt;div class="searchable-select"&gt;&lt;input&gt;&lt;select&gt;&lt;option&gt;...&lt;/option&gt;&lt;/select&gt;&lt;/div&gt;</code></pre>
    </div>

    <!-- Coupon Code Input -->
    <div class="form-component-card" data-name="coupon code promo input inline apply">
      <div class="card-top">
        <span class="card-label">Coupon Code</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="form-preview">
        <div class="form-card coupon-card">
          <h3>Apply Coupon</h3>
          <p class="form-sub">Enter promo code to redeem</p>
          <div class="coupon-row">
            <input type="text" placeholder="Enter coupon code" id="couponInput">
            <button class="form-btn outline-btn" onclick="applyCoupon()">Apply</button>
          </div>
          <p class="coupon-msg" id="couponMsg"></p>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc22', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc22', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc22" class="code-block"><code>&lt;div class="coupon-row"&gt;&lt;input type="text"&gt;&lt;button&gt;Apply&lt;/button&gt;&lt;/div&gt;</code></pre>
    </div>

    <!-- Rating Slider -->
    <div class="form-component-card" data-name="rating slider range feedback score">
      <div class="card-top">
        <span class="card-label">Rating Slider</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="form-preview">
        <div class="form-card rating-slider-card">
          <h3>Rate Experience</h3>
          <p class="form-sub">Drag to set a rating</p>
          <div class="slider-row">
            <input type="range" min="0" max="10" value="7" id="ratingRange" oninput="document.getElementById('ratingValue').textContent=this.value">
            <span id="ratingValue">7</span>
          </div>
          <button class="form-btn">Submit Rating</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc23', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc23', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc23" class="code-block"><code>&lt;input type="range" min="0" max="10" oninput="..."&gt;</code></pre>
    </div>

    <!-- Human Check (Simple CAPTCHA) -->
    <div class="form-component-card" data-name="human check captcha simple checkbox spam protection">
      <div class="card-top">
        <span class="card-label">Human Check</span>
        <span class="card-tag tag-essential">Essential</span>
      </div>
      <div class="form-preview">
        <div class="form-card captcha-card">
          <h3>Are you human?</h3>
          <p class="form-sub">Simple anti-bot checkbox</p>
          <label class="captcha-check"><input type="checkbox" id="humanCheck"> I'm not a robot</label>
          <button class="form-btn" onclick="if(!document.getElementById('humanCheck').checked){alert('Please confirm you are human.');}else{alert('Thanks!');}">Confirm</button>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('fc24', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc24', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc24" class="code-block"><code>&lt;label&gt;&lt;input type="checkbox"&gt; I'm not a robot&lt;/label&gt;</code></pre>
    </div>

  </div>

</main>
</template>

<script>
export default { name: 'Forms' }
</script>
