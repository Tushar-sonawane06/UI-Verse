# Forms

Component ID: form

- Path: form.html
- Version: 0.1.0
- Documentation score: 100/100
- Tags: forms, inputs
- Description: Form controls, validation and layouts

## Assets

- CSS: css/main.css, form.css, forms.css, home.css
- JS: script.js

## Headings

- H1: Forms
- H3: Login Form
- H3: MULTI STEP FORM
- H3: PAYMENT FORM
- H3: SURVEY FORM
- H3: OTP VERIFICATION
- H3: BOOK APPOINTMENT
- H3: Signup Form

## Usage Snippet

```html
<section class="forms-section">

  <!-- Section Header -->
  <div class="section-header">
    <h1>Forms</h1>
    <p>Modern, reusable and responsive form components</p>
  </div>

  <!-- Grid Layout -->
  <div class="forms-grid">

    <!-- Login Form -->
    <div class="form-card">
      <h3>Login</h3>
      <form>
        <div class="form-group">
          <label for="login-email">Email</label>
          <input id="login-email" type="email" placeholder="Enter your email" required>
        </div>

        <div class="form-group">
          <label for="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Enter password" required>
        </div>

        <button type="submit" class="btn primary">Login</button>
      </form>
    </div>

    <!-- Signup Form -->
    <div class="form-card">
      <h3>Sign Up</h3>
      <form>
        <div class="form-group">
          <label for="signup-name">Full Name</label>
          <input id="signup-name" type="text" placeholder="Your name" required>
        </div>

        <div class="form-group">
          <label for="signup-email">Email</label>
          <input id="signup-email" type="email" placeholder="Your email" required>
        </div>

        <div class="form-group">
          <label for="signup-password">Password</label>
          <input id="signup-password" type="password" required>
        </div>

        <button class="btn gradient">Create Account</button>
      </form>
    </div>

    <!-- Contact Form -->
    <div class="form-card wide">
      <h3>Contact Us</h3>
      <form>
        <div class="form-row">
          <input type="text" placeholder="Name" required>
          <input type="email" placeholder="Email" required>
        </div>

        <textarea placeholder="Your message..." required></textarea>

        <button class="btn glass">Send Message</button>
      </form>
    </div>

    <!-- Newsletter -->
    <div class="form-card">
      <h3>Newsletter</h3>
      <form>
        <input type="email" placeholder="Enter your email">
        <button class="btn primary">Subscribe</button>
      </form>
    </div>

  </div>
</section>
```
