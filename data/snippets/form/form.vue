<template>
<<<<<<< HEAD
<main class="main">
    <div class="page-header">
      <h1>Forms</h1>
      <p>Explore reusable and ready-to-use form components</p>
    </div>
    <div class = "button group">
      <!--Login Form  -->
      <div class = "component-card">
        <h3>Login Form</h3>
        <form>
          <input type="email" placeholder="Email" class="form-input" required /><br><br>
          <input type="password" placeholder="Password" class="form-input" required /><br><br>
          <button type="submit" class="nav-btn">Login</button>
        </form>
        
        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('f1', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button class="action-btn copy-btn" onclick="copyCode('f1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="addToCollection('Login Form')">Add to My Collection</button>
        </div>
<pre id="f1" class="code-block">
&lt;form&gt;
=======
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
      <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 4 Forms</span>
      <span class="meta-badge"><i class="fa-solid fa-code"></i> Pure HTML & CSS</span>
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
        <button class="action-btn view-btn" onclick="toggleCode('fc1', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('fc1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="fc1" class="code-block"><code>&lt;div class="form-card"&gt;
  &lt;h3&gt;Welcome back&lt;/h3&gt;
>>>>>>> e2f342d ([Feature]: Create a snippet export pipeline that keeps HTML, JSX, and Vue examples in sync)
  &lt;input type="email" placeholder="Email"&gt;
  &lt;input type="password" placeholder="Password"&gt;
  &lt;div class="options"&gt;
    &lt;label&gt;&lt;input type="checkbox"&gt; Remember me&lt;/label&gt;
    &lt;a href="#"&gt;Forgot password?&lt;/a&gt;
  &lt;/div&gt;
  &lt;button&gt;Login&lt;/button&gt;
<<<<<<< HEAD
&lt;/form&gt;
</pre>
  </div>

  <!-- Multi Step Form -->
<div class="component-card multi-step-form-card">
  <div class="multi-step-inner-card">
    <form class="multi-step-form">
      <h3>MULTI STEP FORM</h3>

      <div class="step-indicator">
        <span class="active-step">1</span>
        <span>2</span>
        <span>3</span>
      </div>

      <label>First Name</label>
      <input type="text" class="input" placeholder="First Name" required>

      <label>Last Name</label>
      <input type="text" class="input" placeholder="Last Name" required>

      <label>Email</label>
      <input type="email" class="input" placeholder="Email Address" required>

      <button class="gradient-btn">NEXT STEP</button>
    </form>
  </div>

  <div class="actions">
    <button onclick="toggleCode('f11')">View Code</button>
    <button onclick="copyCode('f11',this)">Copy</button>
  </div>

<pre id="f11" class="code-block">
&lt;form class="multi-step-form"&gt;
  &lt;input type="text" placeholder="First Name"&gt;
  &lt;input type="text" placeholder="Last Name"&gt;
  &lt;input type="email" placeholder="Email"&gt;
  &lt;button&gt;NEXT STEP&lt;/button&gt;
&lt;/form&gt;
</pre>
</div>

<!-- Payment Form -->
<div class="component-card payment-form-card">
  <div class="payment-form-inner-card">
    <form class="payment-form">
      <h3>PAYMENT FORM</h3>

      <label>Card Holder</label>
      <input type="text" class="input" placeholder="John Doe" required>

      <label>Card Number</label>
      <input type="text" class="input" placeholder="1234 5678 9012 3456" required>

      <div class="form-row">
        <div>
          <label>Expiry Date</label>
          <input type="month" class="input" required>
        </div>

        <div>
          <label>CVV</label>
          <input type="password" class="input" placeholder="123" required>
        </div>
      </div>

      <button class="glass-btn">PAY NOW</button>
    </form>
  </div>

  <div class="actions">
    <button onclick="toggleCode('f12')">View Code</button>
    <button onclick="copyCode('f12',this)">Copy</button>
  </div>

<pre id="f12" class="code-block">
&lt;form class="payment-form"&gt;
  &lt;input type="text" placeholder="Card Holder"&gt;
  &lt;input type="text" placeholder="Card Number"&gt;
  &lt;input type="month"&gt;
  &lt;input type="password" placeholder="CVV"&gt;
  &lt;button&gt;PAY NOW&lt;/button&gt;
&lt;/form&gt;
</pre>
</div>

<!-- Survey Form -->
<div class="component-card survey-form-card">
  <div class="survey-form-inner-card">
    <form class="survey-form">
      <h3>SURVEY FORM</h3>

      <label>How satisfied are you?</label>
      <select class="input" required>
        <option value="">Choose</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Poor</option>
      </select>

      <label>Favorite Features</label>

      <label><input type="checkbox"> UI Design</label>
      <label><input type="checkbox"> Animations</label>
      <label><input type="checkbox"> Components</label>

      <label>Suggestions</label>
      <textarea class="input" placeholder="Write your feedback"></textarea>

      <button class="neon-btn">SUBMIT SURVEY</button>
    </form>
  </div>

  <div class="actions">
    <button onclick="toggleCode('f13')">View Code</button>
    <button onclick="copyCode('f13',this)">Copy</button>
  </div>

<pre id="f13" class="code-block">
&lt;form class="survey-form"&gt;
  &lt;select&gt;
    &lt;option&gt;Excellent&lt;/option&gt;
  &lt;/select&gt;
  &lt;label&gt;&lt;input type="checkbox"&gt; UI Design&lt;/label&gt;
  &lt;textarea&gt;&lt;/textarea&gt;
  &lt;button&gt;SUBMIT SURVEY&lt;/button&gt;
&lt;/form&gt;
</pre>
</div>

<!-- OTP Verification Form -->
<div class="component-card otp-form-card">
  <div class="otp-form-inner-card">
    <form class="otp-form">
      <h3>OTP VERIFICATION</h3>

      <label>Enter Verification Code</label>

      <div class="otp-boxes">
        <input type="text" maxlength="1" class="otp-input">
        <input type="text" maxlength="1" class="otp-input">
        <input type="text" maxlength="1" class="otp-input">
        <input type="text" maxlength="1" class="otp-input">
      </div>

      <button class="gradient-btn">VERIFY</button>
    </form>
  </div>

  <div class="actions">
    <button onclick="toggleCode('f14')">View Code</button>
    <button onclick="copyCode('f14',this)">Copy</button>
  </div>

<pre id="f14" class="code-block">
&lt;form class="otp-form"&gt;
  &lt;input maxlength="1"&gt;
  &lt;input maxlength="1"&gt;
  &lt;input maxlength="1"&gt;
  &lt;input maxlength="1"&gt;
  &lt;button&gt;VERIFY&lt;/button&gt;
&lt;/form&gt;
</pre>
</div>

<!-- Booking Form -->
<div class="component-card booking-form-card">
  <div class="booking-form-inner-card">
    <form class="booking-form">
      <h3>BOOK APPOINTMENT</h3>

      <label>Full Name</label>
      <input type="text" class="input" placeholder="Your Name" required>

      <label>Select Date</label>
      <input type="date" class="input" required>

      <label>Select Time</label>
      <input type="time" class="input" required>

      <label>Choose Service</label>
      <select class="input">
        <option>Consultation</option>
        <option>Meeting</option>
        <option>Support</option>
      </select>

      <button class="glass-btn">BOOK NOW</button>
    </form>
  </div>

  <div class="actions">
    <button onclick="toggleCode('f15')">View Code</button>
    <button onclick="copyCode('f15',this)">Copy</button>
  </div>

<pre id="f15" class="code-block">
&lt;form class="booking-form"&gt;
  &lt;input type="date"&gt;
  &lt;input type="time"&gt;
  &lt;select&gt;
    &lt;option&gt;Consultation&lt;/option&gt;
  &lt;/select&gt;
  &lt;button&gt;BOOK NOW&lt;/button&gt;
&lt;/form&gt;
</pre>
</div>

  <!-- Signup Form -->
  <div class="component-card">
    <h3>Signup Form</h3>

    <form>
      <input type="text" placeholder="Full Name" class="form-input"required ><br><br>
      <input type="email" placeholder="Email" class="form-input" required /><br><br>
      <input type="password" placeholder="Password" class="form-input" required /><br><br>
      <button type="submit" class="nav-btn">Signup</button>
    </form>

    <div class="actions">
      <button class="action-btn view-btn" onclick="toggleCode('f2', this)"><i class="fa-solid fa-code"></i> View Code</button>
      <button class="action-btn copy-btn" onclick="copyCode('f2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      <button onclick="addToCollection('Signup Form')">Add to My Collection</button>
    </div>

<pre id="f2" class="code-block">
&lt;form&gt;
  &lt;input type="text" placeholder="Full Name"&gt;
  &lt;input type="email" placeholder="Email"&gt;
  &lt;input type="password" placeholder="Password"&gt;
  &lt;button&gt;Signup&lt;/button&gt;
&lt;/form&gt;
</pre>
  </div>

  <!-- Contact Form -->
  <div class="component-card">
    <h3>Contact Form</h3>

    <form>
      <input type="text" placeholder="Name" class="form-input" required><br><br>
      <input type="email" placeholder="Email" class="form-input" required><br><br>
      <textarea placeholder="Message" class="form-input" required></textarea><br><br>
      <button type="submit" class="nav-btn">Send</button>
    </form>

    <div class="actions">
      <button class="action-btn view-btn" onclick="toggleCode('f3', this)"><i class="fa-solid fa-code"></i> View Code</button>
      <button class="action-btn copy-btn" onclick="copyCode('f3', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      <button onclick="addToCollection('Contact Form')">Add to My Collection</button>
    </div>

<pre id="f3" class="code-block">
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
=======
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

  </div><!-- /forms-grid -->

</main>
>>>>>>> e2f342d ([Feature]: Create a snippet export pipeline that keeps HTML, JSX, and Vue examples in sync)
</template>

<script>
export default { name: 'Form' }
</script>
