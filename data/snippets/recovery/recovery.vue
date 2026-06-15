<template>
<main class="main-home">

  <!-- ================= PAGE HERO ================= -->
  <div class="page-hero">
    <div class="page-hero-left">
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        <span>Password Recovery</span>
      </div>
      <h1 class="page-title">Password Recovery</h1>
      <p class="page-desc">Premium, interactive HSL-powered password restoration showcases, email reset forms, dynamic requirements strength checklists, secure segment OTP components, and custom validation matching parameters.</p>
      <div class="page-meta">
        <span class="meta-badge"><i class="fa-solid fa-key" aria-hidden="true"></i> 5 Premium Recovery Components</span>
        <span class="meta-badge"><i class="fa-solid fa-sliders" aria-hidden="true"></i> Responsive Layout</span>
        <span class="meta-badge"><i class="fa-solid fa-moon" aria-hidden="true"></i> Dark &amp; Light support</span>
      </div>
    </div>
    <div class="page-hero-right">
      <div class="hero-btn-preview">
        <i class="fa-solid fa-key hero-key-icon" aria-hidden="true"></i>
      </div>
    </div>
  </div>

  <div class="rec-showcase-container">

    <!-- ================= 1. EMAIL RECOVERY FORM ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label">
            1. Email Recovery Form
          </h2>
          <p class="card-desc">
            Premium glass card designed to send password recovery links with custom loading spinners and float inputs.
          </p>
        </div>
        <span class="card-tag tag-premium">Premium</span>
      </div>

      <div class="component-preview rec-preview-area">

        <!-- Live Email Recovery Card -->
        <div class="rec-card-wrapper">
          <div class="rec-card-header">
            <div class="rec-icon-box">
              <i class="fa-regular fa-envelope" aria-hidden="true"></i>
            </div>
            <h3>Forgot Password</h3>
            <p>Enter your account email below to dispatch a secure password reset link.</p>
          </div>

          <form class="email-recovery-form" onsubmit="handleEmailRecovery(event)">
            <div class="rec-form-group">
              <input type="email" id="recovery-email" class="rec-input" placeholder=" " required>
              <label for="recovery-email">Email Address</label>
            </div>

            <button type="submit" class="rec-submit-btn" id="email-rec-btn">
              <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Send Reset Link
            </button>
          </form>

          <div class="rec-meta-link">
            <a href="#" onclick="event.preventDefault(); showToast('Redirect to login mock...');"><i class="fa-solid fa-arrow-left-long" aria-hidden="true"></i> Back to Login</a>
          </div>
        </div>

      </div>

      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('code-rec-email')"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('code-rec-email', this)"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
      </div>

      <textarea id="code-rec-email" class="code-block" style="display: none;" readonly>&lt;div class="rec-card-wrapper"&gt;
  &lt;div class="rec-card-header"&gt;
    &lt;div class="rec-icon-box"&gt;&lt;i class="fa-regular fa-envelope"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;h3&gt;Forgot Password&lt;/h3&gt;
    &lt;p&gt;Enter your account email below to dispatch a secure password reset link.&lt;/p&gt;
  &lt;/div&gt;
  &lt;form class="email-recovery-form" onsubmit="handleEmailRecovery(event)"&gt;
    &lt;div class="rec-form-group"&gt;
      &lt;input type="email" id="email" class="rec-input" placeholder=" " required&gt;
      &lt;label for="email"&gt;Email Address&lt;/label&gt;
    &lt;/div&gt;
    &lt;button type="submit" class="rec-submit-btn"&gt;
      &lt;i class="fa-solid fa-paper-plane"&gt;&lt;/i&gt; Send Reset Link
    &lt;/button&gt;
  &lt;/form&gt;
&lt;/div&gt;</textarea>
    </div>


    <!-- ================= 2. RESET PASSWORD SCREEN WITH STRENGTH METER ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label">
            2. Reset Password Interface
          </h2>
          <p class="card-desc">
            New password entry panel loaded with a dynamic, real-time password strength analyzer checklist.
          </p>
        </div>
        <span class="card-tag tag-trending">Strength Check</span>
      </div>

      <div class="component-preview rec-preview-area">

        <!-- Live Reset Card -->
        <div class="rec-card-wrapper">
          <div class="rec-card-header">
            <div class="rec-icon-box">
              <i class="fa-solid fa-lock-open" aria-hidden="true"></i>
            </div>
            <h3>Create New Password</h3>
            <p>Choose a complex password to protect your user account database access.</p>
          </div>

          <form onsubmit="handleResetPassword(event)">
            <div class="rec-form-group">
              <div class="rec-pass-wrapper">
                <input type="password" id="reset-new-pwd" class="rec-input" placeholder=" " oninput="analyzeResetStrength(this.value)" required>
                <label for="reset-new-pwd">New Password</label>
                <button type="button" class="rec-pwd-toggle" onclick="togglePasswordVisibility('reset-new-pwd', this)" aria-label="Toggle Password Visibility">
                  <i class="fa-regular fa-eye" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <div class="pwd-strength-container">
              <div class="pwd-strength-header">
                <span class="pwd-strength-title">Password Security:</span>
                <span class="pwd-strength-indicator" id="strength-label">None</span>
              </div>
              <div class="pwd-strength-track">
                <div class="pwd-strength-fill" id="strength-fill"></div>
              </div>
              <div class="pwd-checklist">
                <div class="pwd-checklist-item invalid" id="req-length">
                  <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> 8+ Characters
                </div>
                <div class="pwd-checklist-item invalid" id="req-number">
                  <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> One Number
                </div>
                <div class="pwd-checklist-item invalid" id="req-capital">
                  <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> One Capital
                </div>
                <div class="pwd-checklist-item invalid" id="req-symbol">
                  <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> One Symbol
                </div>
              </div>
            </div>

            <button type="submit" class="rec-submit-btn" id="reset-pwd-btn">
              <i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Reset &amp; Update
            </button>
          </form>
        </div>

      </div>

      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('code-rec-reset')"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('code-rec-reset', this)"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
      </div>

      <textarea id="code-rec-reset" class="code-block" style="display: none;" readonly>&lt;div class="rec-card-wrapper"&gt;
  &lt;div class="rec-card-header"&gt;
    &lt;div class="rec-icon-box"&gt;&lt;i class="fa-solid fa-lock-open"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;h3&gt;Create New Password&lt;/h3&gt;
    &lt;p&gt;Choose a complex password to protect your user account database access.&lt;/p&gt;
  &lt;/div&gt;
  &lt;form onsubmit="handleReset(event)"&gt;
    &lt;div class="rec-form-group"&gt;
      &lt;input type="password" id="new-pwd" class="rec-input" oninput="analyzeStrength(this.value)" placeholder=" " required&gt;
      &lt;label for="new-pwd"&gt;New Password&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="pwd-strength-container"&gt;
      &lt;div class="pwd-strength-header"&gt;
        &lt;span&gt;Password Security:&lt;/span&gt;
        &lt;span id="strength-label"&gt;None&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="pwd-strength-track"&gt;
        &lt;div class="pwd-strength-fill" id="strength-fill"&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="pwd-checklist"&gt;
        &lt;div class="pwd-checklist-item invalid" id="req-length"&gt;&lt;i class="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; 8+ Characters&lt;/div&gt;
        &lt;div class="pwd-checklist-item invalid" id="req-number"&gt;&lt;i class="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; One Number&lt;/div&gt;
        &lt;div class="pwd-checklist-item invalid" id="req-capital"&gt;&lt;i class="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; One Capital&lt;/div&gt;
        &lt;div class="pwd-checklist-item invalid" id="req-symbol"&gt;&lt;i class="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; One Symbol&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type="submit" class="rec-submit-btn"&gt;Reset &amp;amp; Update&lt;/button&gt;
  &lt;/form&gt;
&lt;/div&gt;</textarea>
    </div>


    <!-- ================= 3. PASSWORD UPDATE FORM ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label">
            3. Password Update Panel
          </h2>
          <p class="card-desc">
            A user profile config settings form designed for active sessions with real-time text matching validation badges.
          </p>
        </div>
        <span class="card-tag tag-new">Match Validator</span>
      </div>

      <div class="component-preview rec-preview-area">

        <!-- Live Update Card -->
        <div class="rec-card-wrapper">
          <div class="rec-card-header">
            <div class="rec-icon-box">
              <i class="fa-solid fa-key" aria-hidden="true"></i>
            </div>
            <h3>Change Password</h3>
            <p>Update your active account password. Enter your current credentials first.</p>
          </div>

          <form onsubmit="handlePasswordUpdateSubmit(event)">
            <div class="rec-form-group">
              <input type="password" id="update-current-pwd" class="rec-input" placeholder=" " required>
              <label for="update-current-pwd">Current Password</label>
            </div>

            <div class="rec-form-group">
              <input type="password" id="update-new-pwd" class="rec-input" placeholder=" " oninput="verifyPasswordMatch()" required>
              <label for="update-new-pwd">New Password</label>
            </div>

            <div class="rec-form-group mb-05">
              <input type="password" id="update-confirm-pwd" class="rec-input" placeholder=" " oninput="verifyPasswordMatch()" required>
              <label for="update-confirm-pwd">Confirm New Password</label>
            </div>

            <div class="validation-match-badge" id="update-match-badge">
              <i class="fa-solid fa-circle-info" aria-hidden="true"></i> <span>Passwords match</span>
            </div>

            <button type="submit" class="rec-submit-btn mt-15" id="update-pwd-btn">
              <i class="fa-solid fa-rotate" aria-hidden="true"></i> Update Credentials
            </button>
          </form>
        </div>

      </div>

      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('code-rec-update')"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('code-rec-update', this)"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
      </div>

      <textarea id="code-rec-update" class="code-block" style="display: none;" readonly>&lt;div class="rec-card-wrapper"&gt;
  &lt;div class="rec-card-header"&gt;
    &lt;div class="rec-icon-box"&gt;&lt;i class="fa-solid fa-key"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;h3&gt;Change Password&lt;/h3&gt;
    &lt;p&gt;Update your active account password.&lt;/p&gt;
  &lt;/div&gt;
  &lt;form onsubmit="handleUpdate(event)"&gt;
    &lt;div class="rec-form-group"&gt;
      &lt;input type="password" id="curr-pwd" class="rec-input" placeholder=" " required&gt;
      &lt;label for="curr-pwd"&gt;Current Password&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="rec-form-group"&gt;
      &lt;input type="password" id="new-pwd" class="rec-input" oninput="verifyMatch()" placeholder=" " required&gt;
      &lt;label for="new-pwd"&gt;New Password&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="rec-form-group"&gt;
      &lt;input type="password" id="conf-pwd" class="rec-input" oninput="verifyMatch()" placeholder=" " required&gt;
      &lt;label for="conf-pwd"&gt;Confirm Password&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="validation-match-badge" id="match-badge"&gt;
      &lt;i class="fa-solid fa-circle-info"&gt;&lt;/i&gt; &lt;span&gt;Passwords match&lt;/span&gt;
    &lt;/div&gt;
    &lt;button type="submit" class="rec-submit-btn"&gt;Update Credentials&lt;/button&gt;
  &lt;/form&gt;
&lt;/div&gt;</textarea>
    </div>


    <!-- ================= 4. OTP RECOVERY UI ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label">
            4. OTP Recovery Interface
          </h2>
          <p class="card-desc">
            Mobile-responsive segmented numeric 2FA input grid with dynamic countdown ticking resend handles.
          </p>
        </div>
        <span class="card-tag tag-premium">Two Factor OTP</span>
      </div>

      <div class="component-preview rec-preview-area">

        <!-- Live OTP Recovery Card -->
        <div class="rec-card-wrapper rec-inline-style-center">
          <div class="otp-shield-header">
            <div class="rec-icon-box otp-pulse-shield">
              <i class="fa-solid fa-user-shield" aria-hidden="true"></i>
            </div>
            <h3>Verify Identity</h3>
            <p>Enter the 4-digit security code received via your mobile device.</p>
          </div>

          <form onsubmit="handleOtpVerificationSubmit(event)">
            <div class="rec-otp-row">
              <input type="text" class="rec-input rec-otp-digit" aria-label="Digit 1" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
              <input type="text" class="rec-input rec-otp-digit" aria-label="Digit 2" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
              <input type="text" class="rec-input rec-otp-digit" aria-label="Digit 3" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
              <input type="text" class="rec-input rec-otp-digit" aria-label="Digit 4" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
            </div>

            <div class="otp-countdown-widget">
              <div id="otp-timer-container">
                Resend verification code in <span id="otp-timer-lbl">00:45</span>
              </div>
              <a href="#" id="otp-resend-link" onclick="triggerOtpTimerReset(event)">Resend Verification Code</a>
            </div>

            <button type="submit" class="rec-submit-btn mt-24" id="otp-ver-btn">
              <i class="fa-solid fa-circle-check" aria-hidden="true"></i> Authenticate &amp; Access
            </button>
          </form>
        </div>

      </div>

      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('code-rec-otp')"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('code-rec-otp', this)"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
      </div>

      <textarea id="code-rec-otp" class="code-block" style="display: none;" readonly>&lt;div class="rec-card-wrapper rec-inline-style-center"&gt;
  &lt;div class="rec-card-header"&gt;
    &lt;div class="rec-icon-box"&gt;&lt;i class="fa-solid fa-user-shield"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;h3&gt;Verify Identity&lt;/h3&gt;
    &lt;p&gt;Enter the 4-digit code sent to your device.&lt;/p&gt;
  &lt;/div&gt;
  &lt;form onsubmit="handleOtpSubmit(event)"&gt;
    &lt;div class="rec-otp-row"&gt;
      &lt;input type="text" class="rec-input rec-otp-digit" maxlength="1" oninput="handleAutofocus(this)"&gt;
      &lt;input type="text" class="rec-input rec-otp-digit" maxlength="1" oninput="handleAutofocus(this)"&gt;
      &lt;input type="text" class="rec-input rec-otp-digit" maxlength="1" oninput="handleAutofocus(this)"&gt;
      &lt;input type="text" class="rec-input rec-otp-digit" maxlength="1" oninput="handleAutofocus(this)"&gt;
    &lt;/div&gt;
    &lt;button type="submit" class="rec-submit-btn"&gt;Authenticate &amp;amp; Access&lt;/button&gt;
  &lt;/form&gt;
&lt;/div&gt;</textarea>
    </div>


    <!-- ================= 5. SUCCESS CONFIRMATION SCREEN ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label">
            5. Success Confirmation Layout
          </h2>
          <p class="card-desc">
            High-fidelity workflow conclusion screen featuring pulsing concentric rings and a bouncing success checkmark.
          </p>
        </div>
        <span class="card-tag tag-essential">Success State</span>
      </div>

      <div class="component-preview rec-preview-area">

        <!-- Live Success Card -->
        <div class="rec-card-wrapper rec-success-card">
          <div class="rec-success-illustration">
            <div class="success-pulse-ring"></div>
            <div class="success-pulse-ring"></div>
            <div class="success-check-circle">
              <i class="fa-solid fa-check" aria-hidden="true"></i>
            </div>
          </div>

          <h3 class="rec-success-title">
            Password Updated!
          </h3>
          <p class="rec-success-body-p">
            Your account security keys were rebuilt successfully. You can now access all databases utilizing your brand-new credentials.
          </p>

          <button type="button" class="rec-submit-btn success-btn-glow" onclick="showToast('Rerouting user to authorization portal...');">
            <i class="fa-solid fa-right-to-bracket" aria-hidden="true"></i> Return to Portal
          </button>
        </div>

      </div>

      <div class="actions">
        <button type="button" class="action-btn view-btn" onclick="toggleCode('code-rec-success')"><i class="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
        <button type="button" class="action-btn copy-btn" onclick="copyCode('code-rec-success', this)"><i class="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
      </div>

      <textarea id="code-rec-success" class="code-block" style="display: none;" readonly>&lt;div class="rec-card-wrapper rec-success-card"&gt;
  &lt;div class="rec-success-illustration"&gt;
    &lt;div class="success-pulse-ring"&gt;&lt;/div&gt;
    &lt;div class="success-pulse-ring"&gt;&lt;/div&gt;
    &lt;div class="success-check-circle"&gt;
      &lt;i class="fa-solid fa-check"&gt;&lt;/i&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;h3 class="rec-success-title"&gt;Password Updated!&lt;/h3&gt;
  &lt;p class="rec-success-body-p"&gt;Your security keys were rebuilt successfully. You can now log in.&lt;/p&gt;
  &lt;button type="button" class="rec-submit-btn"&gt;Return to Portal&lt;/button&gt;
&lt;/div&gt;</textarea>
    </div>

  </div><!-- /showcase-container -->

</main>
</template>

<script>
export default { name: 'Recovery' }
</script>
