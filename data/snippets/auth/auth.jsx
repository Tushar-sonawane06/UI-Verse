import React from 'react';

export default function auth(){
  return (
    <>
      <main className="main-content">
      
          <div className="top-bar">
            <div className="search-wrapper">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" className="search-input" placeholder="Search components… (Press ⌘K)" />
            </div>
            <div className="header-actions">
              <button className="btn-header primary"><i className="fa-solid fa-plus"></i> Add Component</button>
              <button className="btn-header"><i className="fa-solid fa-bookmark"></i> My Collection</button>
              <button className="btn-header-icon" id="mode-toggle-btn" title="Toggle Theme"><i className="fa-solid fa-moon"></i></button>
            </div>
          </div>
      
          <header className="hero-section">
            <div className="breadcrumbs">Home <i className="fa-solid fa-chevron-right"></i> Authentication</div>
            <h1>Authentication Components</h1>
            <p>Premium onboarding registration structures, validation login portals, password-strength analytics, social grids, and horizontal form switcher slider containers with full light/dark responsiveness.</p>
            <div className="meta-badges">
              <div className="badge"><i className="fa-solid fa-layer-group"></i> 10 Premium UI Components</div>
              <div className="badge"><i className="fa-solid fa-mobile-screen-button"></i> Fully Responsive</div>
              <div className="badge"><i className="fa-solid fa-circle-half-stroke"></i> Dark &amp; Light support</div>
            </div>
          </header>
      
          <section className="components-grid">
      
            {/* Component 1 */}
            <div className="component-card" data-id="google-github-sso" data-label="Google & GitHub SSO Buttons">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper">
                  <button className="sso-pill-button">
                    <img src="https://img.icons8.com/?size=100&id=439&format=png" width="16" alt="Google" />
                    Google SSO
                  </button>
                  <button className="sso-pill-button">
                    <i className="fa-brands fa-github"></i> GitHub Core
                  </button>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
      
            {/* Component 2 */}
            <div className="component-card" data-id="apple-twitter-pass" data-label="Apple & Twitter X Auth">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper">
                  <button className="sso-pill-button">
                    <i className="fa-brands fa-apple"></i> Apple Pass
                  </button>
                  <button className="sso-pill-button">
                    <i className="fa-brands fa-x-twitter"></i> Twitter X
                  </button>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
      
            {/* Component 3 */}
            <div className="component-card" data-id="secure-password-input" data-label="Secure Password Input">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper">
                  <div className="input-field-group">
                    <label className="custom-field-label">Password</label>
                    <div className="input-with-icon">
                      <i className="fa-solid fa-lock left-icon"></i>
                      <input type="password" className="auth-text-input" placeholder="••••••••" />
                      <i className="fa-solid fa-eye eye-toggle-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
      
            {/* Component 4 */}
            <div className="component-card" data-id="split-image-login" data-label="Split Image Login">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper mini-split-preview">
                  <div className="split-side-graphic"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                  <div className="split-side-form">
                    <h5>Welcome Back</h5>
                    <button className="submit-action-btn">Proceed</button>
                  </div>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
      
            {/* Component 5 */}
            <div className="component-card" data-id="two-factor-otp" data-label="Two-Factor OTP Input">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper">
                  <div className="otp-fields-row">
                    <input type="text" className="otp-box-input" value="4" maxlength="1" />
                    <input type="text" className="otp-box-input" value="8" maxlength="1" />
                    <input type="text" className="otp-box-input" placeholder="•" maxlength="1" />
                    <input type="text" className="otp-box-input" placeholder="•" maxlength="1" />
                  </div>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
      
            {/* Component 6 */}
            <div className="component-card" data-id="minimalist-magic-link" data-label="Magic Link Email Input">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper">
                  <div className="input-field-group">
                    <input type="email" className="auth-text-input" placeholder="name@domain.com" style="margin-bottom:8px;padding-left:14px;" />
                    <button className="submit-action-btn"><i className="fa-solid fa-paper-plane"></i> Send Magic Link</button>
                  </div>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
      
            {/* Component 7 */}
            <div className="component-card" data-id="sliding-auth-panel" data-label="Sliding Auth Panel Toggle">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper">
                  <div className="segmented-form-toggle">
                    <button className="toggle-tab-btn active">Sign In</button>
                    <button className="toggle-tab-btn">Register</button>
                  </div>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
      
            {/* Component 8 */}
            <div className="component-card" data-id="biometric-fingerprint" data-label="Biometric Fingerprint Auth">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper biometric-center">
                  <div className="fingerprint-scanner-trigger" id="fingerprintBtn">
                    <i className="fa-solid fa-fingerprint"></i>
                  </div>
                  <span className="biometric-status-label" id="biometricLabel">Tap to scan biometrics</span>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
      
            {/* Component 9 */}
            <div className="component-card" data-id="multi-tenant-gate" data-label="Multi-Tenant Workspace Gate">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper">
                  <div className="input-with-icon">
                    <input type="text" className="auth-text-input" placeholder="workspace-subdomain" style="text-align:right;padding-right:96px;padding-left:14px;" />
                    <span className="input-suffix-tag">.uiverse.dev</span>
                  </div>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
      
            {/* Component 10 */}
            <div className="component-card" data-id="social-grid-container" data-label="Social Auth Icon Grid">
              <div className="preview-canvas">
                <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
                <div className="auth-demo-wrapper social-icon-matrix">
                  <button className="square-matrix-btn"><i className="fa-brands fa-google"></i></button>
                  <button className="square-matrix-btn"><i className="fa-brands fa-github"></i></button>
                  <button className="square-matrix-btn"><i className="fa-brands fa-apple"></i></button>
                  <button className="square-matrix-btn"><i className="fa-brands fa-discord"></i></button>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
                <button className="card-btn btn-icon-zip" title="Download ZIP"><i className="fa-solid fa-file-zipper"></i></button>
              </div>
            </div>
            <div className="component-card" data-id="qr-code-login" data-label="QR Code Login">
        <div className="preview-canvas">
          <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
          <div className="auth-demo-wrapper qr-login-preview">
            <div className="qr-box"><i className="fa-solid fa-qrcode"></i></div>
            <span className="qr-instruction">Scan with mobile app</span>
          </div>
        </div>
        <div className="card-footer-actions">
          <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
          <button className="card-btn btn-icon-zip"><i className="fa-solid fa-file-zipper"></i></button>
        </div>
      </div>
      <div className="component-card" data-id="captcha-check" data-label="Captcha Verification">
        <div className="preview-canvas">
          <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
          <div className="auth-demo-wrapper captcha-box">
            
            <img src="https://www.fastly.com/documentation/static/6f264d2bd8d6e0d81155d8c4b93e1533/captcha.png" alt="Captcha" className="captcha-img" width="120" height="90" />
            <input type="text" className="auth-text-input" placeholder="Enter Captcha" />
          </div>
      
        </div>
        <div className="card-footer-actions">
          <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
          <button className="card-btn btn-icon-zip"><i className="fa-solid fa-file-zipper"></i></button>
        </div>
      </div>
      <div className="component-card" data-id="security-question" data-label="Security Question Prompt">
        <div className="preview-canvas">
          <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
          <div className="auth-demo-wrapper">
            <label className="custom-field-label">What is your pet’s name?</label>
            <input type="text" className="auth-text-input" placeholder="Answer here" />
          </div>
        </div>
        <div className="card-footer-actions">
          <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
          <button className="card-btn btn-icon-zip"><i className="fa-solid fa-file-zipper"></i></button>
        </div>
      </div>
      <div className="component-card" data-id="social-auth-carousel" data-label="Social Auth Carousel">
        <div className="preview-canvas">
          <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
          <div className="auth-demo-wrapper social-carousel">
            <button className="carousel-btn"><i className="fa-brands fa-facebook"></i></button>
            <button className="carousel-btn"><i className="fa-brands fa-linkedin"></i></button>
            <button className="carousel-btn"><i className="fa-brands fa-instagram"></i></button>
          </div>
        </div>
        <div className="card-footer-actions">
          <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
          <button className="card-btn btn-icon-zip"><i className="fa-solid fa-file-zipper"></i></button>
        </div>
      </div>
      <div className="component-card" data-id="email-otp" data-label="Email OTP Verification">
        <div className="preview-canvas">
          <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
          <div className="auth-demo-wrapper">
            <p className="custom-field-label">Enter OTP sent to your email</p>
            <div className="otp-fields-row">
              <input type="text" className="otp-box-input" maxlength="1" />
              <input type="text" className="otp-box-input" maxlength="1" />
              <input type="text" className="otp-box-input" maxlength="1" />
              <input type="text" className="otp-box-input" maxlength="1" />
            </div>
          </div>
        </div>
        <div className="card-footer-actions">
          <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
          <button className="card-btn btn-icon-zip"><i className="fa-solid fa-file-zipper"></i></button>
        </div>
      </div>
      <div className="component-card" data-id="pin-pad-login" data-label="PIN Pad Login">
        <div className="preview-canvas">
          <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
          <div className="auth-demo-wrapper pin-pad">
            <div className="pin-row">
              <button className="pin-btn">1</button>
              <button className="pin-btn">2</button>
              <button className="pin-btn">3</button>
            </div>
            <div className="pin-row">
              <button className="pin-btn">4</button>
              <button className="pin-btn">5</button>
              <button className="pin-btn">6</button>
            </div>
            <div className="pin-row">
              <button className="pin-btn">7</button>
              <button className="pin-btn">8</button>
              <button className="pin-btn">9</button>
            </div>
            <div className="pin-row">
              <button className="pin-btn">0</button>
            </div>
          </div>
        </div>
        <div className="card-footer-actions">
          <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
          <button className="card-btn btn-icon-zip"><i className="fa-solid fa-file-zipper"></i></button>
        </div>
      </div>
      <div className="component-card" data-id="face-id-auth" data-label="Face ID Authentication">
        <div className="preview-canvas">
          <button className="favorite-toggle"><i className="fa-regular fa-star"></i></button>
          <div className="auth-demo-wrapper face-id">
            <i className="fa-regular fa-face-smile" style="font-size:48px;color:#2563eb;"></i>
            <p className="biometric-status-label">Align your face to verify</p>
          </div>
        </div>
        <div className="card-footer-actions">
          <button className="card-btn btn-main-view"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="card-btn btn-secondary-copy"><i className="fa-regular fa-copy"></i> Copy</button>
          <button className="card-btn btn-icon-zip"><i className="fa-solid fa-file-zipper"></i></button>
        </div>
      </div>
      
          </section>
        </main>
    </>
  );
}
