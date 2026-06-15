import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Password Recovery',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Password recovery and reset flows

### Info & Metadata
- **Category**: Forms
- **Tags**: <code>password</code>, <code>recovery</code>, <code>reset</code>, <code>auth</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home" id="main-content">

    <!-- PLATFORM JUMBOTRON HERO -->
    <section class="page-hero">
      <div class="page-hero-left">
        <div class="breadcrumb">
          <a href="index.html">Platform Foundations</a>
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          <span class="current-target">Identity Restoration Matrix</span>
        </div>
        <h1 class="page-title">Credential Recovery</h1>
        <p class="page-desc">High-fidelity responsive verification canvases configuring fluid token updates, cryptographic handshakes, multi-segmented OTP structures, and complex visual validation criteria loops.</p>
        <div class="page-meta">
          <span class="meta-badge"><i class="fa-solid fa-key" aria-hidden="true"></i> 5 Advanced Restoration Shells</span>
          <span class="meta-badge"><i class="fa-solid fa-sliders" aria-hidden="true"></i> Proportional Scale Grid</span>
          <span class="meta-badge"><i class="fa-solid fa-moon" aria-hidden="true"></i> Dark &amp; Light Adaptive Skin</span>
        </div>
      </div>
      <div class="page-hero-right">
        <div class="hero-btn-preview">
          <i class="fa-solid fa-key hero-key-icon" aria-hidden="true"></i>
        </div>
      </div>
    </section>

    <!-- CENTRAL DISPLAY SHOWCASE CONTAINER GRID -->
    <div class="rec-showcase-container">

      <!-- COMPONENT 1: GLASSMORPHIC DISPATCH FORM -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">1. Frosted Dispatch Vector Form</h2>
            <p class="card-desc">Translucent container elements featuring low-latency input floating wrappers optimized for routing single token restoration codes safely upstream.</p>
          </div>
          <span class="card-tag tag-premium">High-End Spec</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper">
            <div class="rec-card-header">
              <div class="rec-icon-box">
                <i class="fa-regular fa-envelope" aria-hidden="true"></i>
              </div>
              <h3>Restore Session Keys</h3>
              <p>Broadcast your registered identity parameter below to receive a transient synchronization path link.</p>
            </div>

            <form class="email-recovery-form" onsubmit="handleEmailRecovery(event)">
              <div class="rec-form-group">
                <input type="email" id="recovery-email" class="rec-input" placeholder=" " autocomplete="email" aria-label="Account Recovery Email Address" required>
                <label for="recovery-email">Operator Email Address</label>
              </div>

              <button type="submit" class="rec-submit-btn" id="email-rec-btn" aria-live="polite">
                <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Broadcast Reset Payload
              </button>
            </form>

            <div class="rec-meta-link">
              <a href="#" onclick="event.preventDefault(); alert('Routing focus frame upstream down login branches...');"><i class="fa-solid fa-arrow-left-long" aria-hidden="true"></i> Back to Core Portal</a>
            </div>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-email', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-email', this)"><i class="fa-solid fa-copy" aria-hidden="true"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-email"><code>&lt;div class="rec-card-wrapper"&gt;
  &lt;div class="rec-card-header"&gt;
    &lt;div class="rec-icon-box"&gt;&lt;i class="fa-regular fa-envelope"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;h3&gt;Restore Session Keys&lt;/h3&gt;
  &lt;/div&gt;
  &lt;form onsubmit="handleEmailRecovery(event)"&gt;
    &lt;input type="email" class="rec-input" aria-label="Account Recovery Email Address" required&gt;
    &lt;button type="submit" class="rec-submit-btn"&gt;Broadcast Reset Payload&lt;/button&gt;
  &lt;/form&gt;
&lt;/div&gt;</code></pre>
      </div>

      <!-- COMPONENT 2: INTERACTIVE password STRUCTURE ANALYZER -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">2. Algorithmic Key Complexity Monitor</h2>
            <p class="card-desc">Symmetrical real-time monitoring deck utilizing character verification vectors to evaluate password structure string resistance criteria.</p>
          </div>
          <span class="card-tag tag-trending">Entropy Tracking</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper">
            <div class="rec-card-header">
              <div class="rec-icon-box">
                <i class="fa-solid fa-lock-open" aria-hidden="true"></i>
              </div>
              <h3>Generate Complex Cipher</h3>
              <p>Rebuild an isolated cryptographic code structure to safeguard entry configurations down the database node cluster.</p>
            </div>

            <form onsubmit="handleResetPassword(event)">
              <div class="rec-form-group">
                <div class="rec-pass-wrapper">
                  <input type="password" id="reset-new-pwd" class="rec-input" placeholder=" " oninput="analyzeResetStrength(this.value)" aria-label="Enter new secure cipher string" required>
                  <label for="reset-new-pwd">New Cryptographic Cipher</label>
                  <button type="button" class="rec-pwd-toggle" onclick="togglePasswordVisibility('reset-new-pwd', this)" aria-label="Toggle baseline visibility masking factor over input data text fields">
                    <i class="fa-regular fa-eye" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <div class="pwd-strength-container">
                <div class="pwd-strength-header">
                  <span class="pwd-strength-title">Entropy Shifting Weight Factor:</span>
                  <span class="pwd-strength-indicator" id="strength-label">Awaiting Intake</span>
                </div>
                <div class="pwd-strength-track">
                  <div class="pwd-strength-fill" id="strength-fill"></div>
                </div>
                <div class="pwd-checklist">
                  <div class="pwd-checklist-item invalid" id="req-length">
                    <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> 8+ Array Segments
                  </div>
                  <div class="pwd-checklist-item invalid" id="req-number">
                    <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Numeric Variable Included
                  </div>
                  <div class="pwd-checklist-item invalid" id="req-capital">
                    <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Upper-Case Vector Node
                  </div>
                  <div class="pwd-checklist-item invalid" id="req-symbol">
                    <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Non-Alphanumeric Special Glyph
                  </div>
                </div>
              </div>

              <button type="submit" class="rec-submit-btn" id="reset-pwd-btn" aria-live="polite">
                <i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Enforce Structural Rebuild
              </button>
            </form>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-reset', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-reset', this)"><i class="fa-solid fa-copy" aria-hidden="true"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-reset"><code>&lt;div class="pwd-strength-container"&gt;
  &lt;div class="pwd-strength-track"&gt;
    &lt;div class="pwd-strength-fill" id="strength-fill"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="pwd-checklist"&gt;
    &lt;div class="pwd-checklist-item invalid" id="req-length"&gt;&lt;i class="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; 8+ Segments&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <!-- COMPONENT 3: TWIN SYMMETRIC VALIDATOR BLOCK -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">3. Twin-Channel Real-Time Comparator Panel</h2>
            <p class="card-desc">Active configuration panel monitoring string matching values synchronously across dual character streams via continuous tracking hooks.</p>
          </div>
          <span class="card-tag tag-new">Atomic Match</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper">
            <div class="rec-card-header">
              <div class="rec-icon-box">
                <i class="fa-solid fa-key" aria-hidden="true"></i>
              </div>
              <h3>Alter Active Key Credentials</h3>
              <p>Re-route session connection parameters. Valid verification of the current credential hash configuration is mandatory.</p>
            </div>

            <form onsubmit="handlePasswordUpdateSubmit(event)">
              <div class="rec-form-group">
                <input type="password" id="update-current-pwd" class="rec-input" placeholder=" " aria-label="Enter present authentic password string input token" required>
                <label for="update-current-pwd">Current Credential Cipher</label>
              </div>

              <div class="rec-form-group">
                <input type="password" id="update-new-pwd" class="rec-input" placeholder=" " oninput="verifyPasswordMatch()" aria-label="Enter brand new target cipher configuration string" required>
                <label for="update-new-pwd">Target New Cipher</label>
              </div>

              <div class="rec-form-group mb-05">
                <input type="password" id="update-confirm-pwd" class="rec-input" placeholder=" " oninput="verifyPasswordMatch()" aria-label="Confirm brand new target cipher configuration string match parameter" required>
                <label for="update-confirm-pwd">Confirm Target Cipher Matrix</label>
              </div>

              <div class="validation-match-badge" id="update-match-badge">
                <i class="fa-solid fa-circle-info" aria-hidden="true"></i> <span>Evaluating tracking alignments...</span>
              </div>

              <button type="submit" class="rec-submit-btn mt-15" id="update-pwd-btn" aria-live="polite">
                <i class="fa-solid fa-rotate" aria-hidden="true"></i> Re-commit Access Key Parameters
              </button>
            </form>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-update', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-update', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-update"><code>&lt;div class="validation-match-badge" id="update-match-badge"&gt;
  &lt;i class="fa-solid fa-circle-info"&gt;&lt;/i&gt; &lt;span&gt;Passwords match&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>

      <!-- COMPONENT 4: MULTI SEGMENTED INTERACTIVE OTP MATRIX -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">4. Multi-Segmented Two-Factor Discrete Input</h2>
            <p class="card-desc">Isolated numerical grid utilizing asynchronous cursor autofocus pipelines and ticking resend countdown controllers cleanly.</p>
          </div>
          <span class="card-tag tag-premium">Secure 2FA</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper rec-inline-style-center">
            <div class="otp-shield-header">
              <div class="rec-icon-box otp-pulse-shield">
                <i class="fa-solid fa-user-shield" aria-hidden="true"></i>
              </div>
              <h3>Verify Channel Identity Token</h3>
              <p>Provide the 4-digit localized token code dispatched down your primary physical communication link channels.</p>
            </div>

            <form onsubmit="handleOtpVerificationSubmit(event)">
              <div class="rec-otp-row">
                <input type="text" class="rec-input rec-otp-digit" aria-label="Verification Token Sequence Digit position 1" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
                <input type="text" class="rec-input rec-otp-digit" aria-label="Verification Token Sequence Digit position 2" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
                <input type="text" class="rec-input rec-otp-digit" aria-label="Verification Token Sequence Digit position 3" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
                <input type="text" class="rec-input rec-otp-digit" aria-label="Verification Token Sequence Digit position 4" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
              </div>

              <div class="otp-countdown-widget">
                <div id="otp-timer-container">
                  Re-dispatched window locks in <span id="otp-timer-lbl">00:45</span>
                </div>
                <a href="#" id="otp-resend-link" onclick="triggerOtpTimerReset(event)">Broadcast Secondary Security Token Payload</a>
              </div>

              <button type="submit" class="rec-submit-btn mt-24" id="otp-ver-btn" aria-live="polite">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i> Validate Handshake Token Stack
              </button>
            </form>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-otp', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-otp', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-otp"><code>&lt;div class="rec-otp-row"&gt;
  &lt;input type="text" class="rec-input rec-otp-digit" maxlength="1" oninput="handleOtpAutofocus(this)"&gt;
&lt;/div&gt;</code></pre>
      </div>

      <!-- COMPONENT 5: SUCCESS STATE STADIA VIEWPORT -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">5. Concentric Success Completion Viewport</h2>
            <p class="card-desc">High-fidelity validation completion scene featuring continuous ambient ripple rings and bouncing vector check transformations.</p>
          </div>
          <span class="card-tag tag-essential">Nominal Resolve</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper rec-success-card">
            <div class="rec-success-illustration">
              <div class="success-pulse-ring"></div>
              <div class="success-pulse-ring"></div>
              <div class="success-check-circle">
                <i class="fa-solid fa-check" aria-hidden="true"></i>
              </div>
            </div>

            <h3 class="rec-success-title">Rebuild Phase Complete!</h3>
            <p class="rec-success-body-p">
              Platform parameter configurations updated nominal. Global user authentication registries have accepted the newly committed identity cipher signature perfectly down matching shards.
            </p>

            <button type="button" class="rec-submit-btn success-btn-glow" onclick="alert('Rerouting focus state back to core system node frames... [FIN]');">
              <i class="fa-solid fa-right-to-bracket" aria-hidden="true"></i> Re-enter Sandbox Arena
            </button>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-success', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-success', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-success"><code>&lt;div class="rec-success-illustration"&gt;
  &lt;div class="success-pulse-ring"&gt;&lt;/div&gt;
  &lt;div class="success-check-circle"&gt;&lt;i class="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

    </div>

  </main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/recovery.css\`

#### JavaScript Scripts:
None

### Accessibility (a11y) Checklist

- [x] Semantic HTML: appropriate tags are utilized.
- [x] Focus states: interactive elements show native or custom focus styling.
- [x] Color contrast: contrast ratios meet WCAG standard compliance.
- [x] Form inputs: linked to labels or use ARIA labelling.
- [x] Keyboard traversal: supports standard tab navigation and activation.


### Visual & Interactive Test Cases

- [x] Render check: component layout presents visual elements clearly.
- [x] Hover check: interactive elements trigger hover states and transitions.
- [x] Responsive layout: scales and nests correctly across viewports.

`
      }
    }
  }
};

export const Default = {
  render: () => createShadowRootStory({
    title: 'Password Recovery',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/recovery.css"],
    content: `<main class="main-home" id="main-content">

    <!-- PLATFORM JUMBOTRON HERO -->
    <section class="page-hero">
      <div class="page-hero-left">
        <div class="breadcrumb">
          <a href="index.html">Platform Foundations</a>
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          <span class="current-target">Identity Restoration Matrix</span>
        </div>
        <h1 class="page-title">Credential Recovery</h1>
        <p class="page-desc">High-fidelity responsive verification canvases configuring fluid token updates, cryptographic handshakes, multi-segmented OTP structures, and complex visual validation criteria loops.</p>
        <div class="page-meta">
          <span class="meta-badge"><i class="fa-solid fa-key" aria-hidden="true"></i> 5 Advanced Restoration Shells</span>
          <span class="meta-badge"><i class="fa-solid fa-sliders" aria-hidden="true"></i> Proportional Scale Grid</span>
          <span class="meta-badge"><i class="fa-solid fa-moon" aria-hidden="true"></i> Dark &amp; Light Adaptive Skin</span>
        </div>
      </div>
      <div class="page-hero-right">
        <div class="hero-btn-preview">
          <i class="fa-solid fa-key hero-key-icon" aria-hidden="true"></i>
        </div>
      </div>
    </section>

    <!-- CENTRAL DISPLAY SHOWCASE CONTAINER GRID -->
    <div class="rec-showcase-container">

      <!-- COMPONENT 1: GLASSMORPHIC DISPATCH FORM -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">1. Frosted Dispatch Vector Form</h2>
            <p class="card-desc">Translucent container elements featuring low-latency input floating wrappers optimized for routing single token restoration codes safely upstream.</p>
          </div>
          <span class="card-tag tag-premium">High-End Spec</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper">
            <div class="rec-card-header">
              <div class="rec-icon-box">
                <i class="fa-regular fa-envelope" aria-hidden="true"></i>
              </div>
              <h3>Restore Session Keys</h3>
              <p>Broadcast your registered identity parameter below to receive a transient synchronization path link.</p>
            </div>

            <form class="email-recovery-form" onsubmit="handleEmailRecovery(event)">
              <div class="rec-form-group">
                <input type="email" id="recovery-email" class="rec-input" placeholder=" " autocomplete="email" aria-label="Account Recovery Email Address" required>
                <label for="recovery-email">Operator Email Address</label>
              </div>

              <button type="submit" class="rec-submit-btn" id="email-rec-btn" aria-live="polite">
                <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Broadcast Reset Payload
              </button>
            </form>

            <div class="rec-meta-link">
              <a href="#" onclick="event.preventDefault(); alert('Routing focus frame upstream down login branches...');"><i class="fa-solid fa-arrow-left-long" aria-hidden="true"></i> Back to Core Portal</a>
            </div>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-email', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-email', this)"><i class="fa-solid fa-copy" aria-hidden="true"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-email"><code>&lt;div class="rec-card-wrapper"&gt;
  &lt;div class="rec-card-header"&gt;
    &lt;div class="rec-icon-box"&gt;&lt;i class="fa-regular fa-envelope"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;h3&gt;Restore Session Keys&lt;/h3&gt;
  &lt;/div&gt;
  &lt;form onsubmit="handleEmailRecovery(event)"&gt;
    &lt;input type="email" class="rec-input" aria-label="Account Recovery Email Address" required&gt;
    &lt;button type="submit" class="rec-submit-btn"&gt;Broadcast Reset Payload&lt;/button&gt;
  &lt;/form&gt;
&lt;/div&gt;</code></pre>
      </div>

      <!-- COMPONENT 2: INTERACTIVE password STRUCTURE ANALYZER -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">2. Algorithmic Key Complexity Monitor</h2>
            <p class="card-desc">Symmetrical real-time monitoring deck utilizing character verification vectors to evaluate password structure string resistance criteria.</p>
          </div>
          <span class="card-tag tag-trending">Entropy Tracking</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper">
            <div class="rec-card-header">
              <div class="rec-icon-box">
                <i class="fa-solid fa-lock-open" aria-hidden="true"></i>
              </div>
              <h3>Generate Complex Cipher</h3>
              <p>Rebuild an isolated cryptographic code structure to safeguard entry configurations down the database node cluster.</p>
            </div>

            <form onsubmit="handleResetPassword(event)">
              <div class="rec-form-group">
                <div class="rec-pass-wrapper">
                  <input type="password" id="reset-new-pwd" class="rec-input" placeholder=" " oninput="analyzeResetStrength(this.value)" aria-label="Enter new secure cipher string" required>
                  <label for="reset-new-pwd">New Cryptographic Cipher</label>
                  <button type="button" class="rec-pwd-toggle" onclick="togglePasswordVisibility('reset-new-pwd', this)" aria-label="Toggle baseline visibility masking factor over input data text fields">
                    <i class="fa-regular fa-eye" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <div class="pwd-strength-container">
                <div class="pwd-strength-header">
                  <span class="pwd-strength-title">Entropy Shifting Weight Factor:</span>
                  <span class="pwd-strength-indicator" id="strength-label">Awaiting Intake</span>
                </div>
                <div class="pwd-strength-track">
                  <div class="pwd-strength-fill" id="strength-fill"></div>
                </div>
                <div class="pwd-checklist">
                  <div class="pwd-checklist-item invalid" id="req-length">
                    <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> 8+ Array Segments
                  </div>
                  <div class="pwd-checklist-item invalid" id="req-number">
                    <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Numeric Variable Included
                  </div>
                  <div class="pwd-checklist-item invalid" id="req-capital">
                    <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Upper-Case Vector Node
                  </div>
                  <div class="pwd-checklist-item invalid" id="req-symbol">
                    <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Non-Alphanumeric Special Glyph
                  </div>
                </div>
              </div>

              <button type="submit" class="rec-submit-btn" id="reset-pwd-btn" aria-live="polite">
                <i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Enforce Structural Rebuild
              </button>
            </form>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-reset', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-reset', this)"><i class="fa-solid fa-copy" aria-hidden="true"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-reset"><code>&lt;div class="pwd-strength-container"&gt;
  &lt;div class="pwd-strength-track"&gt;
    &lt;div class="pwd-strength-fill" id="strength-fill"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="pwd-checklist"&gt;
    &lt;div class="pwd-checklist-item invalid" id="req-length"&gt;&lt;i class="fa-solid fa-circle-xmark"&gt;&lt;/i&gt; 8+ Segments&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <!-- COMPONENT 3: TWIN SYMMETRIC VALIDATOR BLOCK -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">3. Twin-Channel Real-Time Comparator Panel</h2>
            <p class="card-desc">Active configuration panel monitoring string matching values synchronously across dual character streams via continuous tracking hooks.</p>
          </div>
          <span class="card-tag tag-new">Atomic Match</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper">
            <div class="rec-card-header">
              <div class="rec-icon-box">
                <i class="fa-solid fa-key" aria-hidden="true"></i>
              </div>
              <h3>Alter Active Key Credentials</h3>
              <p>Re-route session connection parameters. Valid verification of the current credential hash configuration is mandatory.</p>
            </div>

            <form onsubmit="handlePasswordUpdateSubmit(event)">
              <div class="rec-form-group">
                <input type="password" id="update-current-pwd" class="rec-input" placeholder=" " aria-label="Enter present authentic password string input token" required>
                <label for="update-current-pwd">Current Credential Cipher</label>
              </div>

              <div class="rec-form-group">
                <input type="password" id="update-new-pwd" class="rec-input" placeholder=" " oninput="verifyPasswordMatch()" aria-label="Enter brand new target cipher configuration string" required>
                <label for="update-new-pwd">Target New Cipher</label>
              </div>

              <div class="rec-form-group mb-05">
                <input type="password" id="update-confirm-pwd" class="rec-input" placeholder=" " oninput="verifyPasswordMatch()" aria-label="Confirm brand new target cipher configuration string match parameter" required>
                <label for="update-confirm-pwd">Confirm Target Cipher Matrix</label>
              </div>

              <div class="validation-match-badge" id="update-match-badge">
                <i class="fa-solid fa-circle-info" aria-hidden="true"></i> <span>Evaluating tracking alignments...</span>
              </div>

              <button type="submit" class="rec-submit-btn mt-15" id="update-pwd-btn" aria-live="polite">
                <i class="fa-solid fa-rotate" aria-hidden="true"></i> Re-commit Access Key Parameters
              </button>
            </form>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-update', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-update', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-update"><code>&lt;div class="validation-match-badge" id="update-match-badge"&gt;
  &lt;i class="fa-solid fa-circle-info"&gt;&lt;/i&gt; &lt;span&gt;Passwords match&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>

      <!-- COMPONENT 4: MULTI SEGMENTED INTERACTIVE OTP MATRIX -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">4. Multi-Segmented Two-Factor Discrete Input</h2>
            <p class="card-desc">Isolated numerical grid utilizing asynchronous cursor autofocus pipelines and ticking resend countdown controllers cleanly.</p>
          </div>
          <span class="card-tag tag-premium">Secure 2FA</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper rec-inline-style-center">
            <div class="otp-shield-header">
              <div class="rec-icon-box otp-pulse-shield">
                <i class="fa-solid fa-user-shield" aria-hidden="true"></i>
              </div>
              <h3>Verify Channel Identity Token</h3>
              <p>Provide the 4-digit localized token code dispatched down your primary physical communication link channels.</p>
            </div>

            <form onsubmit="handleOtpVerificationSubmit(event)">
              <div class="rec-otp-row">
                <input type="text" class="rec-input rec-otp-digit" aria-label="Verification Token Sequence Digit position 1" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
                <input type="text" class="rec-input rec-otp-digit" aria-label="Verification Token Sequence Digit position 2" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
                <input type="text" class="rec-input rec-otp-digit" aria-label="Verification Token Sequence Digit position 3" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
                <input type="text" class="rec-input rec-otp-digit" aria-label="Verification Token Sequence Digit position 4" maxlength="1" oninput="handleOtpAutofocus(this)" onkeydown="handleOtpAutobackspace(this, event)">
              </div>

              <div class="otp-countdown-widget">
                <div id="otp-timer-container">
                  Re-dispatched window locks in <span id="otp-timer-lbl">00:45</span>
                </div>
                <a href="#" id="otp-resend-link" onclick="triggerOtpTimerReset(event)">Broadcast Secondary Security Token Payload</a>
              </div>

              <button type="submit" class="rec-submit-btn mt-24" id="otp-ver-btn" aria-live="polite">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i> Validate Handshake Token Stack
              </button>
            </form>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-otp', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-otp', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-otp"><code>&lt;div class="rec-otp-row"&gt;
  &lt;input type="text" class="rec-input rec-otp-digit" maxlength="1" oninput="handleOtpAutofocus(this)"&gt;
&lt;/div&gt;</code></pre>
      </div>

      <!-- COMPONENT 5: SUCCESS STATE STADIA VIEWPORT -->
      <div class="component-card">
        <div class="card-top">
          <div>
            <h2 class="card-label">5. Concentric Success Completion Viewport</h2>
            <p class="card-desc">High-fidelity validation completion scene featuring continuous ambient ripple rings and bouncing vector check transformations.</p>
          </div>
          <span class="card-tag tag-essential">Nominal Resolve</span>
        </div>

        <div class="component-preview rec-preview-area">
          <div class="rec-card-wrapper rec-success-card">
            <div class="rec-success-illustration">
              <div class="success-pulse-ring"></div>
              <div class="success-pulse-ring"></div>
              <div class="success-check-circle">
                <i class="fa-solid fa-check" aria-hidden="true"></i>
              </div>
            </div>

            <h3 class="rec-success-title">Rebuild Phase Complete!</h3>
            <p class="rec-success-body-p">
              Platform parameter configurations updated nominal. Global user authentication registries have accepted the newly committed identity cipher signature perfectly down matching shards.
            </p>

            <button type="button" class="rec-submit-btn success-btn-glow" onclick="alert('Rerouting focus state back to core system node frames... [FIN]');">
              <i class="fa-solid fa-right-to-bracket" aria-hidden="true"></i> Re-enter Sandbox Arena
            </button>
          </div>
        </div>

        <div class="actions">
          <button type="button" class="action-btn view-btn" onclick="toggleCodeBlock('code-rec-success', this)"><i class="fa-solid fa-code" aria-hidden="true"></i> Inspect Sheet</button>
          <button type="button" class="action-btn copy-btn" onclick="copyCodePayload('code-rec-success', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="code-rec-success"><code>&lt;div class="rec-success-illustration"&gt;
  &lt;div class="success-pulse-ring"&gt;&lt;/div&gt;
  &lt;div class="success-check-circle"&gt;&lt;i class="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

    </div>

  </main>`
  })
};
