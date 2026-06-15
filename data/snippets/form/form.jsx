import React from 'react';

export default function form(){
  return (
    <>
<<<<<<< HEAD
      <main className="main">
          <div className="page-header">
            <h1>Forms</h1>
            <p>Explore reusable and ready-to-use form components</p>
          </div>
          <div class = "button group">
            {/*Login Form  */}
            <div class = "component-card">
              <h3>Login Form</h3>
              <form>
                <input type="email" placeholder="Email" className="form-input" required /><br /><br />
                <input type="password" placeholder="Password" className="form-input" required /><br /><br />
                <button type="submit" className="nav-btn">Login</button>
              </form>
              
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('f1', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('f1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="addToCollection('Login Form')">Add to My Collection</button>
              </div>
      <pre id="f1" className="code-block">
      &lt;form&gt;
=======
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
            <span className="meta-badge"><i className="fa-solid fa-layer-group"></i> 4 Forms</span>
            <span className="meta-badge"><i className="fa-solid fa-code"></i> Pure HTML & CSS</span>
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
              <button className="action-btn view-btn" onclick="toggleCode('fc1', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('fc1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="fc1" className="code-block"><code>&lt;div className="form-card"&gt;
        &lt;h3&gt;Welcome back&lt;/h3&gt;
>>>>>>> e2f342d ([Feature]: Create a snippet export pipeline that keeps HTML, JSX, and Vue examples in sync)
        &lt;input type="email" placeholder="Email"&gt;
        &lt;input type="password" placeholder="Password"&gt;
        &lt;div className="options"&gt;
          &lt;label&gt;&lt;input type="checkbox"&gt; Remember me&lt;/label&gt;
          &lt;a href="#"&gt;Forgot password?&lt;/a&gt;
        &lt;/div&gt;
        &lt;button&gt;Login&lt;/button&gt;
<<<<<<< HEAD
      &lt;/form&gt;
      </pre>
        </div>
      
        {/* Multi Step Form */}
      <div className="component-card multi-step-form-card">
        <div className="multi-step-inner-card">
          <form className="multi-step-form">
            <h3>MULTI STEP FORM</h3>
      
            <div className="step-indicator">
              <span className="active-step">1</span>
              <span>2</span>
              <span>3</span>
            </div>
      
            <label>First Name</label>
            <input type="text" className="input" placeholder="First Name" required />
      
            <label>Last Name</label>
            <input type="text" className="input" placeholder="Last Name" required />
      
            <label>Email</label>
            <input type="email" className="input" placeholder="Email Address" required />
      
            <button className="gradient-btn">NEXT STEP</button>
          </form>
        </div>
      
        <div className="actions">
          <button onclick="toggleCode('f11')">View Code</button>
          <button onclick="copyCode('f11',this)">Copy</button>
        </div>
      
      <pre id="f11" className="code-block">
      &lt;form className="multi-step-form"&gt;
        &lt;input type="text" placeholder="First Name"&gt;
        &lt;input type="text" placeholder="Last Name"&gt;
        &lt;input type="email" placeholder="Email"&gt;
        &lt;button&gt;NEXT STEP&lt;/button&gt;
      &lt;/form&gt;
      </pre>
      </div>
      
      {/* Payment Form */}
      <div className="component-card payment-form-card">
        <div className="payment-form-inner-card">
          <form className="payment-form">
            <h3>PAYMENT FORM</h3>
      
            <label>Card Holder</label>
            <input type="text" className="input" placeholder="John Doe" required />
      
            <label>Card Number</label>
            <input type="text" className="input" placeholder="1234 5678 9012 3456" required />
      
            <div className="form-row">
              <div>
                <label>Expiry Date</label>
                <input type="month" className="input" required />
              </div>
      
              <div>
                <label>CVV</label>
                <input type="password" className="input" placeholder="123" required />
              </div>
            </div>
      
            <button className="glass-btn">PAY NOW</button>
          </form>
        </div>
      
        <div className="actions">
          <button onclick="toggleCode('f12')">View Code</button>
          <button onclick="copyCode('f12',this)">Copy</button>
        </div>
      
      <pre id="f12" className="code-block">
      &lt;form className="payment-form"&gt;
        &lt;input type="text" placeholder="Card Holder"&gt;
        &lt;input type="text" placeholder="Card Number"&gt;
        &lt;input type="month"&gt;
        &lt;input type="password" placeholder="CVV"&gt;
        &lt;button&gt;PAY NOW&lt;/button&gt;
      &lt;/form&gt;
      </pre>
      </div>
      
      {/* Survey Form */}
      <div className="component-card survey-form-card">
        <div className="survey-form-inner-card">
          <form className="survey-form">
            <h3>SURVEY FORM</h3>
      
            <label>How satisfied are you?</label>
            <select className="input" required>
              <option value="">Choose</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
              <option>Poor</option>
            </select>
      
            <label>Favorite Features</label>
      
            <label><input type="checkbox" /> UI Design</label>
            <label><input type="checkbox" /> Animations</label>
            <label><input type="checkbox" /> Components</label>
      
            <label>Suggestions</label>
            <textarea className="input" placeholder="Write your feedback"></textarea>
      
            <button className="neon-btn">SUBMIT SURVEY</button>
          </form>
        </div>
      
        <div className="actions">
          <button onclick="toggleCode('f13')">View Code</button>
          <button onclick="copyCode('f13',this)">Copy</button>
        </div>
      
      <pre id="f13" className="code-block">
      &lt;form className="survey-form"&gt;
        &lt;select&gt;
          &lt;option&gt;Excellent&lt;/option&gt;
        &lt;/select&gt;
        &lt;label&gt;&lt;input type="checkbox"&gt; UI Design&lt;/label&gt;
        &lt;textarea&gt;&lt;/textarea&gt;
        &lt;button&gt;SUBMIT SURVEY&lt;/button&gt;
      &lt;/form&gt;
      </pre>
      </div>
      
      {/* OTP Verification Form */}
      <div className="component-card otp-form-card">
        <div className="otp-form-inner-card">
          <form className="otp-form">
            <h3>OTP VERIFICATION</h3>
      
            <label>Enter Verification Code</label>
      
            <div className="otp-boxes">
              <input type="text" maxlength="1" className="otp-input" />
              <input type="text" maxlength="1" className="otp-input" />
              <input type="text" maxlength="1" className="otp-input" />
              <input type="text" maxlength="1" className="otp-input" />
            </div>
      
            <button className="gradient-btn">VERIFY</button>
          </form>
        </div>
      
        <div className="actions">
          <button onclick="toggleCode('f14')">View Code</button>
          <button onclick="copyCode('f14',this)">Copy</button>
        </div>
      
      <pre id="f14" className="code-block">
      &lt;form className="otp-form"&gt;
        &lt;input maxlength="1"&gt;
        &lt;input maxlength="1"&gt;
        &lt;input maxlength="1"&gt;
        &lt;input maxlength="1"&gt;
        &lt;button&gt;VERIFY&lt;/button&gt;
      &lt;/form&gt;
      </pre>
      </div>
      
      {/* Booking Form */}
      <div className="component-card booking-form-card">
        <div className="booking-form-inner-card">
          <form className="booking-form">
            <h3>BOOK APPOINTMENT</h3>
      
            <label>Full Name</label>
            <input type="text" className="input" placeholder="Your Name" required />
      
            <label>Select Date</label>
            <input type="date" className="input" required />
      
            <label>Select Time</label>
            <input type="time" className="input" required />
      
            <label>Choose Service</label>
            <select className="input">
              <option>Consultation</option>
              <option>Meeting</option>
              <option>Support</option>
            </select>
      
            <button className="glass-btn">BOOK NOW</button>
          </form>
        </div>
      
        <div className="actions">
          <button onclick="toggleCode('f15')">View Code</button>
          <button onclick="copyCode('f15',this)">Copy</button>
        </div>
      
      <pre id="f15" className="code-block">
      &lt;form className="booking-form"&gt;
        &lt;input type="date"&gt;
        &lt;input type="time"&gt;
        &lt;select&gt;
          &lt;option&gt;Consultation&lt;/option&gt;
        &lt;/select&gt;
        &lt;button&gt;BOOK NOW&lt;/button&gt;
      &lt;/form&gt;
      </pre>
      </div>
      
        {/* Signup Form */}
        <div className="component-card">
          <h3>Signup Form</h3>
      
          <form>
            <input type="text" placeholder="Full Name" className="form-input"required  /><br /><br />
            <input type="email" placeholder="Email" className="form-input" required /><br /><br />
            <input type="password" placeholder="Password" className="form-input" required /><br /><br />
            <button type="submit" className="nav-btn">Signup</button>
          </form>
      
          <div className="actions">
            <button className="action-btn view-btn" onclick="toggleCode('f2', this)"><i className="fa-solid fa-code"></i> View Code</button>
            <button className="action-btn copy-btn" onclick="copyCode('f2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            <button onclick="addToCollection('Signup Form')">Add to My Collection</button>
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
      
        {/* Contact Form */}
        <div className="component-card">
          <h3>Contact Form</h3>
      
          <form>
            <input type="text" placeholder="Name" className="form-input" required /><br /><br />
            <input type="email" placeholder="Email" className="form-input" required /><br /><br />
            <textarea placeholder="Message" className="form-input" required></textarea><br /><br />
            <button type="submit" className="nav-btn">Send</button>
          </form>
      
          <div className="actions">
            <button className="action-btn view-btn" onclick="toggleCode('f3', this)"><i className="fa-solid fa-code"></i> View Code</button>
            <button className="action-btn copy-btn" onclick="copyCode('f3', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            <button onclick="addToCollection('Contact Form')">Add to My Collection</button>
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
=======
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
      
        </div>{/* /forms-grid */}
      
      </main>
>>>>>>> e2f342d ([Feature]: Create a snippet export pipeline that keeps HTML, JSX, and Vue examples in sync)
    </>
  );
}
