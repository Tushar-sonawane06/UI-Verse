import React from 'react';

export default function recovery(){
  return (
    <>
      <main className="main-home">
      
        {/* ================= PAGE HERO ================= */}
        <div className="page-hero">
          <div className="page-hero-left">
            <div className="breadcrumb">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              <span>Password Recovery</span>
            </div>
            <h1 className="page-title">Password Recovery</h1>
            <p className="page-desc">Premium, interactive HSL-powered password restoration showcases, email reset forms, dynamic requirements strength checklists, secure segment OTP components, and custom validation matching parameters.</p>
            <div className="page-meta">
              <span className="meta-badge"><i className="fa-solid fa-key" aria-hidden="true"></i> 5 Premium Recovery Components</span>
              <span className="meta-badge"><i className="fa-solid fa-sliders" aria-hidden="true"></i> Responsive Layout</span>
              <span className="meta-badge"><i className="fa-solid fa-moon" aria-hidden="true"></i> Dark &amp; Light support</span>
            </div>
          </div>
          <div className="page-hero-right">
            <div className="hero-btn-preview">
              <i className="fa-solid fa-key hero-key-icon" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      
        <div className="rec-showcase-container">
      
          {/* ================= 1. EMAIL RECOVERY FORM ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label">
                  1. Email Recovery Form
                </h2>
                <p className="card-desc">
                  Premium glass card designed to send password recovery links with custom loading spinners and float inputs.
                </p>
              </div>
              <span className="card-tag tag-premium">Premium</span>
            </div>
      
            <div className="component-preview rec-preview-area">
      
              {/* Live Email Recovery Card */}
              <div className="rec-card-wrapper">
                <div className="rec-card-header">
                  <div className="rec-icon-box">
                    <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                  </div>
                  <h3>Forgot Password</h3>
                  <p>Enter your account email below to dispatch a secure password reset link.</p>
                </div>
      
                <form className="email-recovery-form" onsubmit="handleEmailRecovery(event)">
                  <div className="rec-form-group">
                    <input type="email" id="recovery-email" className="rec-input" placeholder=" " required />
                    <label for="recovery-email">Email Address</label>
                  </div>
      
                  <button type="submit" className="rec-submit-btn" id="email-rec-btn">
                    <i className="fa-solid fa-paper-plane" aria-hidden="true"></i> Send Reset Link
                  </button>
                </form>
      
                <div className="rec-meta-link">
                  <a href="#" onclick="event.preventDefault(); showToast('Redirect to login mock...');"><i className="fa-solid fa-arrow-left-long" aria-hidden="true"></i> Back to Login</a>
                </div>
              </div>
      
            </div>
      
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('code-rec-email')"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('code-rec-email', this)"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
            </div>
      
            <textarea id="code-rec-email" className="code-block" style="display: none;" readonly>&lt;div className="rec-card-wrapper"&gt;
        &lt;div className="rec-card-header"&gt;
          &lt;div className="rec-icon-box"&gt;&lt;i className="fa-regular fa-envelope"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;h3&gt;Forgot Password&lt;/h3&gt;
          &lt;p&gt;Enter your account email below to dispatch a secure password reset link.&lt;/p&gt;
        &lt;/div&gt;
        &lt;form className="email-recovery-form" onsubmit="handleEmailRecovery(event)"&gt;
          &lt;div className="rec-form-group"&gt;
            &lt;input type="email" id="email" className="rec-input" placeholder=" " required&gt;
            &lt;label for="email"&gt;Email Address&lt;/label&gt;
          &lt;/div&gt;
          &lt;button type="submit" className="rec-submit-btn"&gt;
            &lt;i className="fa-solid fa-paper-plane"&gt;&lt;/i&gt; Send Reset Link
          &lt;/button&gt;
        &lt;/form&gt;
      &lt;/div&gt;</textarea>
          </div>
      
      
          {/* ================= 2. RESET PASSWORD SCREEN WITH STRENGTH METER ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label">
                  2. Reset Password Interface
                </h2>
                <p className="card-desc">
                  New password entry panel loaded with a dynamic, real-time password strength analyzer checklist.
                </p>
              </div>
              <span className="card-tag tag-trending">Strength Check</span>
            </div>
      
            <div className="component-preview rec-preview-area">
      
              {/* Live Reset Card */}
              <div className="rec-card-wrapper">
                <div className="rec-card-header">
                  <div className="rec-icon-box">
                    <i className="fa-solid fa-lock-open" aria-hidden="true"></i>
                  </div>
                  <h3>Create New Password</h3>
                  <p>Choose a complex password to protect your user account database access.</p>
                </div>
      
                <form onsubmit="handleResetPassword(event)">
                  <div className="rec-form-group">
                    <div className="rec-pass-wrapper">
                      <input type="password" id="reset-new-pwd" className="rec-input" placeholder=" " oninput="analyzeResetStrength(this.value)" required />
                      <label for="reset-new-pwd">New Password</label>
                      <button type="button" className="rec-pwd-toggle" onclick="togglePasswordVisibility('reset-new-pwd', this)" aria-label="Toggle Password Visibility">
                        <i className="fa-regular fa-eye" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
      
                  <div className="pwd-strength-container">
                    <div className="pwd-strength-header">
                      <span className="pwd-strength-title">Password Security:</span>
                      <span className="pwd-strength-indicator" id="strength-label">None</span>
                    </div>
                    <div className="pwd-strength-track">
                      <div className="pwd-strength-fill" id="strength-fill"></div>
                    </div>
                    <div className="pwd-checklist">
                      <div className="pwd-checklist-item invalid" id="req-length">
                        <i className="fa-solid fa-circle-xmark" aria-hidden="true"></i> 8+ Characters
                      </div>
                      <div className="pwd-checklist-item invalid" id="req-number">
                        <i className="fa-solid fa-circle-xmark" aria-hidden="true"></i> One Number
                      </div>
                      <div className="pwd-checklist-item invalid" id="req-capital">
                        <i className="fa-solid fa-circle-xmark" aria-hidden="true"></i> One Capital
                      </div>
                      <div className="pwd-checklist-item invalid" id="req-symbol">
                        <i className="fa-solid fa-circle-xmark" aria-hidden="true"></i> One Symbol
                      </div>
                    </div>
                  </div>
      
                  <button type="submit" className="rec-submit-btn" id="reset-pwd-btn">
                    <i className="fa-solid fa-shield-halved" aria-hidden="true"></i> Reset &amp; Update
                  </button>
                </form>
              </div>
      
            </div>
      
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('code-rec-reset')"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('code-rec-reset', this)"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
            </div>
      
            <textarea id="code-rec-reset" className="code-block" style="display: none;" readonly>&lt;div className="rec-card-wrapper"&gt;
        &lt;div className="rec-card-header"&gt;
          &lt;div className="rec-icon-box"&gt;&lt;i className="fa-solid fa-lock-open"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;h3&gt;Create New Password&lt;/h3&gt;
          &lt;p&gt;Choose a complex password to protect your user account database access.&lt;/p&gt;
        &lt;/div&gt;
        &lt;form onsubmit="handleReset(event)"&gt;
          &lt;div className="rec-form-group"&gt;
            &lt;input type="password" id="new-pwd" className="rec-input" oninput="analyzeStrength(this.value)" placeholder=" " required&gt;
            &lt;label for="new-pwd"&gt;New Password&lt;/label&gt;
          &lt;/div&gt;
          &lt;div className="pwd-strength-container"&gt;
            &lt;div className="pwd-strength-header"&gt;
              &lt;span&gt;Password Security:&lt;/span&gt;
              &lt;span id="strength-label"&gt;None&lt;/span&gt;
            &lt;/div&gt;
            &lt;div className="pwd-strength-track"&gt;
              &lt;div className="pwd-strength-fill" id="strength-fill"&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;div className="pwd-checklist"&gt;
              &lt;div className="pwd-checklist-item invalid" id="req-length"&gt;&lt;i className="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; 8+ Characters&lt;/div&gt;
              &lt;div className="pwd-checklist-item invalid" id="req-number"&gt;&lt;i className="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; One Number&lt;/div&gt;
              &lt;div className="pwd-checklist-item invalid" id="req-capital"&gt;&lt;i className="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; One Capital&lt;/div&gt;
              &lt;div className="pwd-checklist-item invalid" id="req-symbol"&gt;&lt;i className="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; One Symbol&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;button type="submit" className="rec-submit-btn"&gt;Reset &amp;amp; Update&lt;/button&gt;
        &lt;/form&gt;
      &lt;/div&gt;</textarea>
          </div>
      
      
          {/* ================= 3. PASSWORD UPDATE FORM ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label">
                  3. Password Update Panel
                </h2>
                <p className="card-desc">
                  A user profile config settings form designed for active sessions with real-time text matching validation badges.
                </p>
              </div>
              <span className="card-tag tag-new">Match Validator</span>
            </div>
      
            <div className="component-preview rec-preview-area">
      
              {/* Live Update Card */}
              <div className="rec-card-wrapper">
                <div className="rec-card-header">
                  <div className="rec-icon-box">
                    <i className="fa-solid fa-key" aria-hidden="true"></i>
                  </div>
                  <h3>Change Password</h3>
                  <p>Update your active account password. Enter your current credentials first.</p>
                </div>
      
                <form onsubmit="handlePasswordUpdateSubmit(event)">
                  <div className="rec-form-group">
                    <input type="password" id="update-current-pwd" className="rec-input" placeholder=" " required />
                    <label for="update-current-pwd">Current Password</label>
                  </div>
      
                  <div className="rec-form-group">
                    <input type="password" id="update-new-pwd" className="rec-input" placeholder=" " oninput="verifyPasswordMatch()" required />
                    <label for="update-new-pwd">New Password</label>
                  </div>
      
                  <div className="rec-form-group mb-05">
                    <input type="password" id="update-confirm-pwd" className="rec-input" placeholder=" " oninput="verifyPasswordMatch()" required />
                    <label for="update-confirm-pwd">Confirm New Password</label>
                  </div>
      
                  <div className="validation-match-badge" id="update-match-badge">
                    <i className="fa-solid fa-circle-info" aria-hidden="true"></i> <span>Passwords match</span>
                  </div>
      
                  <button type="submit" className="rec-submit-btn mt-15" id="update-pwd-btn">
                    <i className="fa-solid fa-rotate" aria-hidden="true"></i> Update Credentials
                  </button>
                </form>
              </div>
      
            </div>
      
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('code-rec-update')"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('code-rec-update', this)"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
            </div>
      
            <textarea id="code-rec-update" className="code-block" style="display: none;" readonly>&lt;div className="rec-card-wrapper"&gt;
        &lt;div className="rec-card-header"&gt;
          &lt;div className="rec-icon-box"&gt;&lt;i className="fa-solid fa-key"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;h3&gt;Change Password&lt;/h3&gt;
          &lt;p&gt;Update your active account password.&lt;/p&gt;
        &lt;/div&gt;
        &lt;form onsubmit="handleUpdate(event)"&gt;
          &lt;div className="rec-form-group"&gt;
            &lt;input type="password" id="curr-pwd" className="rec-input" placeholder=" " required&gt;
            &lt;label for="curr-pwd"&gt;Current Password&lt;/label&gt;
          &lt;/div&gt;
          &lt;div className="rec-form-group"&gt;
            &lt;input type="password" id="new-pwd" className="rec-input" oninput="verifyMatch()" placeholder=" " required&gt;
            &lt;label for="new-pwd"&gt;New Password&lt;/label&gt;
          &lt;/div&gt;
          &lt;div className="rec-form-group"&gt;
            &lt;input type="password" id="conf-pwd" className="rec-input" oninput="verifyMatch()" placeholder=" " required&gt;
            &lt;label for="conf-pwd"&gt;Confirm Password&lt;/label&gt;
          &lt;/div&gt;
          &lt;div className="validation-match-badge" id="match-badge"&gt;
            &lt;i className="fa-solid fa-circle-info"&gt;&lt;/i&gt; &lt;span&gt;Passwords match&lt;/span&gt;
          &lt;/div&gt;
          &lt;button type="submit" className="rec-submit-btn"&gt;Update Credentials&lt;/button&gt;
        &lt;/form&gt;
      &lt;/div&gt;</textarea>
          </div>
      
      
          {/* ================= 4. OTP RECOVERY UI ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label">
                  4. OTP Recovery Interface
                </h2>
                <p className="card-desc">
                  Mobile-responsive segmented numeric 2FA input grid with dynamic countdown ticking resend handles.
                </p>
              </div>
              <span className="card-tag tag-premium">Two Factor OTP</span>
            </div>
      
            <div className="component-preview rec-preview-area">
      
              {/* Live OTP Recovery Card */}
              <div className="rec-card-wrapper rec-inline-style-center">
                <div className="otp-shield-header">
                  <div className="rec-icon-box otp-pulse-shield">
                    <i className="fa-solid fa-user-shield" aria-hidden="true"></i>
                  </div>
                  <h3>Verify Identity</h3>
                  <p>Enter the 4-digit security code received via your mobile device.</p>
                </div>
      
                <form onsubmit="handleOtpVerificationSubmit(event)">
                  <div className="rec-otp-row">
                    <input type="text" className="rec-input rec-otp-digit" aria-label="Digit 1" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)" />
                    <input type="text" className="rec-input rec-otp-digit" aria-label="Digit 2" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)" />
                    <input type="text" className="rec-input rec-otp-digit" aria-label="Digit 3" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)" />
                    <input type="text" className="rec-input rec-otp-digit" aria-label="Digit 4" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)" />
                  </div>
      
                  <div className="otp-countdown-widget">
                    <div id="otp-timer-container">
                      Resend verification code in <span id="otp-timer-lbl">00:45</span>
                    </div>
                    <a href="#" id="otp-resend-link" onclick="triggerOtpTimerReset(event)">Resend Verification Code</a>
                  </div>
      
                  <button type="submit" className="rec-submit-btn mt-24" id="otp-ver-btn">
                    <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Authenticate &amp; Access
                  </button>
                </form>
              </div>
      
            </div>
      
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('code-rec-otp')"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('code-rec-otp', this)"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
            </div>
      
            <textarea id="code-rec-otp" className="code-block" style="display: none;" readonly>&lt;div className="rec-card-wrapper rec-inline-style-center"&gt;
        &lt;div className="rec-card-header"&gt;
          &lt;div className="rec-icon-box"&gt;&lt;i className="fa-solid fa-user-shield"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;h3&gt;Verify Identity&lt;/h3&gt;
          &lt;p&gt;Enter the 4-digit code sent to your device.&lt;/p&gt;
        &lt;/div&gt;
        &lt;form onsubmit="handleOtpSubmit(event)"&gt;
          &lt;div className="rec-otp-row"&gt;
            &lt;input type="text" className="rec-input rec-otp-digit" maxlength="1" oninput="handleAutofocus(this)"&gt;
            &lt;input type="text" className="rec-input rec-otp-digit" maxlength="1" oninput="handleAutofocus(this)"&gt;
            &lt;input type="text" className="rec-input rec-otp-digit" maxlength="1" oninput="handleAutofocus(this)"&gt;
            &lt;input type="text" className="rec-input rec-otp-digit" maxlength="1" oninput="handleAutofocus(this)"&gt;
          &lt;/div&gt;
          &lt;button type="submit" className="rec-submit-btn"&gt;Authenticate &amp;amp; Access&lt;/button&gt;
        &lt;/form&gt;
      &lt;/div&gt;</textarea>
          </div>
      
      
          {/* ================= 5. SUCCESS CONFIRMATION SCREEN ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label">
                  5. Success Confirmation Layout
                </h2>
                <p className="card-desc">
                  High-fidelity workflow conclusion screen featuring pulsing concentric rings and a bouncing success checkmark.
                </p>
              </div>
              <span className="card-tag tag-essential">Success State</span>
            </div>
      
            <div className="component-preview rec-preview-area">
      
              {/* Live Success Card */}
              <div className="rec-card-wrapper rec-success-card">
                <div className="rec-success-illustration">
                  <div className="success-pulse-ring"></div>
                  <div className="success-pulse-ring"></div>
                  <div className="success-check-circle">
                    <i className="fa-solid fa-check" aria-hidden="true"></i>
                  </div>
                </div>
      
                <h3 className="rec-success-title">
                  Password Updated!
                </h3>
                <p className="rec-success-body-p">
                  Your account security keys were rebuilt successfully. You can now access all databases utilizing your brand-new credentials.
                </p>
      
                <button type="button" className="rec-submit-btn success-btn-glow" onclick="showToast('Rerouting user to authorization portal...');">
                  <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i> Return to Portal
                </button>
              </div>
      
            </div>
      
            <div className="actions">
              <button type="button" className="action-btn view-btn" onclick="toggleCode('code-rec-success')"><i className="fa-solid fa-code" aria-hidden="true"></i> View Code</button>
              <button type="button" className="action-btn copy-btn" onclick="copyCode('code-rec-success', this)"><i className="fa-solid fa-copy" aria-hidden="true"></i> Copy Code</button>
            </div>
      
            <textarea id="code-rec-success" className="code-block" style="display: none;" readonly>&lt;div className="rec-card-wrapper rec-success-card"&gt;
        &lt;div className="rec-success-illustration"&gt;
          &lt;div className="success-pulse-ring"&gt;&lt;/div&gt;
          &lt;div className="success-pulse-ring"&gt;&lt;/div&gt;
          &lt;div className="success-check-circle"&gt;
            &lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;h3 className="rec-success-title"&gt;Password Updated!&lt;/h3&gt;
        &lt;p className="rec-success-body-p"&gt;Your security keys were rebuilt successfully. You can now log in.&lt;/p&gt;
        &lt;button type="button" className="rec-submit-btn"&gt;Return to Portal&lt;/button&gt;
      &lt;/div&gt;</textarea>
          </div>
      
        </div>{/* /showcase-container */}
      
      </main>
    </>
  );
}
