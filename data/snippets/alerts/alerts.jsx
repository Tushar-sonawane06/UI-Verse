import React from 'react';

export default function alerts(){
  return (
    <>
      <main className="main-home">
      
        
        <div className="page-hero">
          <div className="page-hero-left">
            <div className="breadcrumb">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right"></i>
              <span>Alerts</span>
            </div>
            <h1 className="page-title">Alert Components</h1>
            <p className="page-desc">Accessible and responsive alert banners for important messages.</p>
            <div className="page-meta">
              <span className="meta-badge"><i className="fa-solid fa-layer-group"></i> 20 Alerts</span>
              <span className="meta-badge"><i className="fa-solid fa-code"></i> HTML & CSS</span>
            </div>
          </div>
          <div className="page-hero-right">
            <div className="alert-hero-preview">
              <div className="ahp-alert ahp-success">
                <i className="fa-solid fa-circle-check"></i>
                <span>Your changes were saved successfully.</span>
              </div>
              <div className="ahp-alert ahp-warning">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>You are running low on storage.</span>
              </div>
              <div className="ahp-alert ahp-error">
                <i className="fa-solid fa-circle-xmark"></i>
                <span>Connection failed. Please retry.</span>
              </div>
            </div>
          </div>
        </div>
      
        
        <div className="filter-bar">
          <button className="filter-btn active" onclick="filterCards('all', this)">All</button>
          <button className="filter-btn" onclick="filterCards('basic', this)">Basic</button>
          <button className="filter-btn" onclick="filterCards('outlined', this)">Outlined</button>
          <button className="filter-btn" onclick="filterCards('filled', this)">Filled</button>
          <button className="filter-btn" onclick="filterCards('toast', this)">Toast</button>
          <button className="filter-btn" onclick="filterCards('banner', this)">Banner</button>
          <div className="filter-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Filter alerts..." oninput="liveFilter(this.value)" />
          </div>
        </div>
      
        
        <div className="alerts-grid" id="alertsGrid">
      
      <div className="component-card" data-name="glass blur modern transparent alert" data-cat="filled">
        <div className="card-top">
          <span className="card-label">Glassmorphism Alerts</span>
          <span className="card-tag tag-trending">Modern</span>
        </div>
      
        <div className="card-preview">
          <div className="demo-alert-stack">
            <div className="al al-glass-success">
              <i className="fa-solid fa-circle-check al-icon"></i>
              <div className="al-body">Payment processed successfully.</div>
            </div>
      
            <div className="al al-glass-error">
              <i className="fa-solid fa-circle-xmark al-icon"></i>
              <div className="al-body">Unable to connect to server.</div>
            </div>
          </div>
        </div>
      </div>
      
          
          <div className="component-card" data-name="dismissible closeable close button alert" data-cat="basic">
            <div className="card-top">
              <span className="card-label">Dismissible Alerts</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <div className="demo-alert-stack" id="dismissStack">
                <div className="al al-success al-dismissible" id="dis1">
                  <i className="fa-solid fa-circle-check al-icon"></i>
                  <div className="al-body">Payment completed successfully!</div>
                  <button className="al-close" onclick="dismissAlert('dis1')" aria-label="Dismiss alert"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="al al-warning al-dismissible" id="dis2">
                  <i className="fa-solid fa-triangle-exclamation al-icon"></i>
                  <div className="al-body">Your session will expire in 5 minutes.</div>
                  <button className="al-close" onclick="dismissAlert('dis2')" aria-label="Dismiss alert"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="al al-info al-dismissible" id="dis3">
                  <i className="fa-solid fa-circle-info al-icon"></i>
                  <div className="al-body">Version 2.0 is now available. <a className="al-link" href="#">Update now →</a></div>
                  <button className="al-close" onclick="dismissAlert('dis3')" aria-label="Dismiss alert"><i className="fa-solid fa-xmark"></i></button>
                </div>
              </div>
              <button className="reset-btn" onclick="resetDismiss()" aria-label="Reset alerts"><i className="fa-solid fa-rotate-left"></i> Reset</button>
            </div>
            <p className="card-desc">Alerts with an × dismiss button — click to slide them away. Works with a tiny JS snippet.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('al2', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('al2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="al2" className="code-block"><code>&lt;div className="alert success dismissible" id="myAlert"&gt;
        &lt;i className="fa-solid fa-circle-check"&gt;&lt;/i&gt;
        &lt;span&gt;Payment processed successfully.&lt;/span&gt;
      &lt;/div&gt;
      
      .alert.glass {
        backdrop-filter: blur(18px);
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.15);
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      }
      
      .alert.glass.success {
        color: #00d68f;
        border-left: 4px solid #00d68f;
      }
      
      .alert.glass.error {
        color: #ff5c5c;
        border-left: 4px solid #ff5c5c;
      }</code></pre>
      </div>
      
      <div className="component-card" data-name="neon cyberpunk glowing alert futuristic" data-cat="filled">
        <div className="card-top">
          <span className="card-label">Neon Glow Alerts</span>
          <span className="card-tag tag-trending">Cyberpunk</span>
        </div>
      
        <div className="card-preview dark-preview">
          <div className="demo-alert-stack">
            <div className="al al-neon-pink">
              <i className="fa-solid fa-bolt al-icon"></i>
              <div className="al-body">Realtime sync enabled.</div>
            </div>
      
            <div className="al al-neon-cyan">
              <i className="fa-solid fa-wifi al-icon"></i>
              <div className="al-body">Connected to network node.</div>
            </div>
          </div>
        </div>
      
        <p className="card-desc">Futuristic glowing neon alerts inspired by cyberpunk interfaces.</p>
      
        <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('al16', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('al16', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
        <pre id="al16" className="code-block"><code>&lt;div className="alert neon-pink"&gt;
        &lt;i className="fa-solid fa-bolt"&gt;&lt;/i&gt;
        &lt;span&gt;Realtime sync enabled.&lt;/span&gt;
      &lt;/div&gt;
      
      .alert.neon-pink {
        background: #120014;
        color: #ff4dff;
        border: 1px solid #ff4dff;
        box-shadow:
          0 0 10px #ff4dff,
          0 0 30px rgba(255,77,255,0.4);
      }
      
      .alert.neon-cyan {
        background: #00141a;
        color: #00e5ff;
        border: 1px solid #00e5ff;
        box-shadow:
          0 0 10px #00e5ff,
          0 0 30px rgba(0,229,255,0.4);
      }</code></pre>
      </div>
      
      <div className="component-card" data-name="progress upload loading alert" data-cat="basic">
        <div className="card-top">
          <span className="card-label">Progress Alerts</span>
          <span className="card-tag tag-popular">Interactive</span>
        </div>
      
        <div className="card-preview">
          <div className="demo-alert-stack">
      
            <div className="progress-alert">
              <div className="progress-alert-top">
                <span>Uploading Assets...</span>
                <span>72%</span>
              </div>
      
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill" style="width:72%;"></div>
              </div>
            </div>
      
            <div className="progress-alert success">
              <div className="progress-alert-top">
                <span>Deployment Complete</span>
                <i className="fa-solid fa-circle-check"></i>
              </div>
      
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill success-fill" style="width:100%;"></div>
              </div>
            </div>
      
          </div>
        </div>
      </div>
      
          
          <div className="component-card" data-name="toast notification popup bottom corner" data-cat="toast">
            <div className="card-top">
              <span className="card-label">Toast Notifications</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview">
              <div className="demo-toast-grid">
                <div className="toast toast-success" role="status" aria-live="polite">
                  <div className="toast-icon-wrap"><i className="fa-solid fa-circle-check"></i></div>
                  <div className="toast-body">
                    <div className="toast-title">Saved!</div>
                    <div className="toast-msg">Your draft was saved.</div>
                  </div>
                  <button className="toast-close" aria-label="Dismiss notification"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="toast toast-error" role="status" aria-live="polite">
                  <div className="toast-icon-wrap"><i className="fa-solid fa-circle-xmark"></i></div>
                  <div className="toast-body">
                    <div className="toast-title">Upload Failed</div>
                    <div className="toast-msg">File size exceeds 10MB limit.</div>
                  </div>
                  <button className="toast-close" aria-label="Dismiss notification"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="toast toast-info" role="status" aria-live="polite">
                  <div className="toast-icon-wrap"><i className="fa-solid fa-circle-info"></i></div>
                  <div className="toast-body">
                    <div className="toast-title">New Message</div>
                    <div className="toast-msg">Alex sent you a message.</div>
                  </div>
                  <button className="toast-close" aria-label="Dismiss notification"><i className="fa-solid fa-xmark"></i></button>
                </div>
              </div>
      
        <pre id="al17" className="code-block"><code>&lt;div className="progress-alert"&gt;
        &lt;div className="progress-alert-top"&gt;
          &lt;span&gt;Uploading Assets...&lt;/span&gt;
          &lt;span&gt;72%&lt;/span&gt;
        &lt;/div&gt;
      
        &lt;div className="progress-bar-wrap"&gt;
          &lt;div className="progress-bar-fill"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      .progress-alert {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: 16px;
        padding: 16px;
      }
      
      .progress-bar-wrap {
        width: 100%;
        height: 8px;
        background: rgba(255,255,255,0.08);
        border-radius: 999px;
        overflow: hidden;
        margin-top: 12px;
      }
      
      .progress-bar-fill {
        height: 100%;
        width: 72%;
        background: linear-gradient(90deg,#6c5ce7,#00cec9);
        border-radius: inherit;
      }</code></pre>
      </div>
      
          
          <div className="component-card" data-name="top banner strip alert announcement" data-cat="banner">
            <div className="card-top">
              <span className="card-label">Top Banner</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview" style="padding:0;overflow:hidden;border-radius:var(--radius-sm);">
              <div className="demo-banners">
                <div className="banner banner-accent">
                  <i className="fa-solid fa-rocket"></i>
                  <span>UIverse v2.0 is live! <a className="banner-link" href="#">See what's new →</a></span>
                  <button className="banner-close" aria-label="Dismiss banner"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="banner banner-warning">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <span>Scheduled maintenance on Sunday 2 AM UTC.</span>
                  <button className="banner-close" aria-label="Dismiss banner"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="banner banner-error">
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>Service disruption detected. Our team is working on a fix.</span>
                  <button className="banner-close" aria-label="Dismiss banner"><i className="fa-solid fa-xmark"></i></button>
                </div>
              </div>
            </div>
      
            <div className="ai-alert ai-alert-purple">
              <div className="ai-alert-icon">
                <i className="fa-solid fa-robot"></i>
              </div>
      
              <div className="ai-alert-body">
                <div className="ai-alert-title">AI Auto Fix</div>
                <div className="ai-alert-msg">
                  Accessibility issues were detected and fixed automatically.
                </div>
              </div>
            </div>
      
          </div>
      
        <p className="card-desc">AI-inspired smart assistant notifications with futuristic gradients and soft glow.</p>
      
        <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('al18', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('al18', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
        <pre id="al18" className="code-block"><code>&lt;div className="ai-alert"&gt;
        &lt;div className="ai-alert-icon"&gt;
          &lt;i className="fa-solid fa-sparkles"&gt;&lt;/i&gt;
        &lt;/div&gt;
      
        &lt;div className="ai-alert-body"&gt;
          &lt;div className="ai-alert-title"&gt;AI Suggestion&lt;/div&gt;
          &lt;div className="ai-alert-msg"&gt;
            Improve spacing between cards.
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      .ai-alert {
        display: flex;
        gap: 14px;
        padding: 18px;
        border-radius: 18px;
        background:
          linear-gradient(
            135deg,
            rgba(108,92,231,0.15),
            rgba(0,206,201,0.1)
          );
        border: 1px solid rgba(255,255,255,0.08);
      }
      
      .ai-alert-icon {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg,#6c5ce7,#00cec9);
        color: #fff;
      }</code></pre>
      </div>
      
      <div className="component-card">
              <h3>Success Alert</h3>
              <div className="alert-box alert-success" role="alert" aria-live="polite">
                <div>
                  <strong>Success</strong>
                  <p>Your order has been placed successfully.</p>
                </div>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a1', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a1', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a1" className="code-block">
      &lt;div className="alert-box alert-success"&gt;
        &lt;strong&gt;Success&lt;/strong&gt;
        &lt;p&gt;Your order has been placed successfully.&lt;/p&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Warning Alert</h3>
              <div className="alert-box alert-warning" role="alert" aria-live="polite">
                <div>
                  <strong>Warning</strong>
                  <p>Don't forget to save your work before closing the browser.</p>
                </div>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a2', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a2', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a2" className="code-block">
      &lt;div className="alert-box alert-warning"&gt;
        &lt;strong&gt;Warning&lt;/strong&gt;
        &lt;p&gt;Don’t forget to save your work before closing the browser.&lt;/p&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Error Alert</h3>
              <div className="alert-box alert-error" role="alert" aria-live="assertive">
                <div>
                  <strong>Error</strong>
                  <p>There was an issue submitting the form. Please try again.</p>
                </div>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a3', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a3', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a3" className="code-block">
      &lt;div className="alert-box alert-error"&gt;
        &lt;strong&gt;Error&lt;/strong&gt;
        &lt;p&gt;There was an issue submitting the form. Please try again.&lt;/p&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Info Alert</h3>
              <div className="alert-box alert-info">
                <div>
                  <strong>Info</strong>
                  <p>This is an informational message. Learn more about our new features.</p>
                </div>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a4', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a4', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a4" className="code-block">
      &lt;div className="alert-box alert-info"&gt;
        &lt;strong&gt;Info&lt;/strong&gt;
        &lt;p&gt;This is an informational message. Learn more about our new features.&lt;/p&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Critical Alert</h3>
              <div className="alert-box alert-critical">
                <div>
                  <strong>Critical</strong>
                  <p>Immediate action required! Your account has been locked due to suspicious activity.</p>
                </div>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a5', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a5', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a5" className="code-block">
      &lt;div className="alert-box alert-critical"&gt;
        &lt;strong&gt;Critical&lt;/strong&gt;
        &lt;p&gt;Immediate action required! Your account has been locked due to suspicious activity.&lt;/p&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Pending Alert</h3>
              <div className="alert-box alert-pending">
                <div>
                  <strong>Pending</strong>
                  <p>Your request is being processed. You'll be notified once it's complete.</p>
                </div>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a6', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a6', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a6" className="code-block">
      &lt;div className="alert-box alert-pending"&gt;
        &lt;strong&gt;Pending&lt;/strong&gt;
        &lt;p&gt;Your request is being processed. You'll be notified once it's complete.&lt;/p&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Dismissible Alert</h3>
              <div className="alert-box alert-success alert-dismissible" id="dismissibleAlert">
                <div>
                  <strong>Success</strong>
                  <p>Your changes have been saved successfully!</p>
                </div>
                <button className="alert-close" onclick="closeAlert('dismissibleAlert')" aria-label="Dismiss alert">✕</button>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a7', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a7', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a7" className="code-block">
      &lt;div className="alert-box alert-success alert-dismissible"&gt;
        &lt;div&gt;
          &lt;strong&gt;Success&lt;/strong&gt;
          &lt;p&gt;Your changes have been saved successfully!&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="alert-close" onclick="closeAlert(this)"&gt;✕&lt;/button&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Alert with Icon</h3>
              <div className="alert-box alert-warning alert-with-icon">
                <span className="alert-icon">⚠️</span>
                <div>
                  <strong>Warning</strong>
                  <p>Please review your input before proceeding.</p>
                </div>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a8', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a8', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a8" className="code-block">
      &lt;div className="alert-box alert-warning alert-with-icon"&gt;
        &lt;span className="alert-icon"&gt;⚠️&lt;/span&gt;
        &lt;div&gt;
          &lt;strong&gt;Warning&lt;/strong&gt;
          &lt;p&gt;Please review your input before proceeding.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Compact Alert</h3>
              <div className="alert-box alert-info alert-compact">
                <strong>Info:</strong> New updates are available.
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a9', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a9', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a9" className="code-block">
      &lt;div className="alert-box alert-info alert-compact"&gt;
        &lt;strong&gt;Info:&lt;/strong&gt; New updates are available.
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Left Border Alert</h3>
              <div className="alert-box alert-success alert-left-border">
                <div>
                  <strong>Success</strong>
                  <p>Transaction completed successfully!</p>
                </div>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a10', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a10', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a10" className="code-block">
      &lt;div className="alert-box alert-success alert-left-border"&gt;
        &lt;div&gt;
          &lt;strong&gt;Success&lt;/strong&gt;
          &lt;p&gt;Transaction completed successfully!&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card">
              <h3>Outlined Alert</h3>
              <div className="alert-box alert-warning alert-outlined">
                <div>
                  <strong>Warning</strong>
                  <p>This action cannot be undone.</p>
                </div>
              </div>
      
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a11', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a11', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
      
              <pre id="a11" className="code-block">
      &lt;div className="alert-box alert-warning alert-outlined"&gt;
        &lt;div&gt;
          &lt;strong&gt;Warning&lt;/strong&gt;
          &lt;p&gt;This action cannot be undone.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
            </pre>
            </div>
      
      <div className="component-card" data-name="success alert banner premium green" data-cat="banner">
              <h3>Success Alert Banner</h3>
              <div className="alert-box alert-success-banner">
                <div className="banner-icon-wrap">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="banner-body">
                  <strong>Action Completed!</strong>
                  <p>Your payment of $120.00 was processed successfully.</p>
                </div>
                <div className="banner-actions">
                  <button className="banner-btn primary">Receipt</button>
                  <button className="banner-btn outline">Dismiss</button>
                </div>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a12', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a12', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a12" className="code-block">
      &lt;div className="alert-box alert-success-banner"&gt;
        &lt;div className="banner-icon-wrap"&gt;&lt;i className="fa-solid fa-circle-check"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="banner-body"&gt;
          &lt;strong&gt;Action Completed!&lt;/strong&gt;
          &lt;p&gt;Payment of $120.00 processed successfully.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="banner-actions"&gt;
          &lt;button className="banner-btn primary"&gt;Receipt&lt;/button&gt;
          &lt;button className="banner-btn outline"&gt;Dismiss&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      <div className="component-card" data-name="warning notification alert yellow pulsing" data-cat="basic">
              <h3>Warning Notification Alert</h3>
              <div className="alert-box alert-warning-notify">
                <i className="fa-solid fa-triangle-exclamation warning-pulse-icon"></i>
                <div className="notify-body">
                  <strong>Security Warning</strong>
                  <p>Unrecognized login attempt detected from IP 192.168.1.102.</p>
                </div>
                <button className="notify-close" onclick="this.parentElement.style.display='none'">✕</button>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a13', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a13', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a13" className="code-block">
      &lt;div className="alert-box alert-warning-notify"&gt;
        &lt;i className="fa-solid fa-triangle-exclamation warning-pulse-icon"&gt;&lt;/i&gt;
        &lt;div className="notify-body"&gt;
          &lt;strong&gt;Security Warning&lt;/strong&gt;
          &lt;p&gt;Unrecognized login attempt detected.&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="notify-close"&gt;✕&lt;/button&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      <div className="component-card" data-name="error toast alert red progress load" data-cat="toast">
              <h3>Error Toast Alert</h3>
              <div className="alert-box error-toast">
                <div className="toast-main">
                  <i className="fa-solid fa-circle-xmark error-icon"></i>
                  <div className="toast-body">
                    <strong>Upload Failed</strong>
                    <p>File size exceeds the 10MB limit.</p>
                  </div>
                  <button className="toast-close" onclick="this.closest('.error-toast').style.display='none'">✕</button>
                </div>
                <div className="toast-progress"></div>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a14', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a14', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a14" className="code-block">
      &lt;div className="alert-box error-toast"&gt;
        &lt;div className="toast-main"&gt;
          &lt;i className="fa-solid fa-circle-xmark error-icon"&gt;&lt;/i&gt;
          &lt;div className="toast-body"&gt;
            &lt;strong&gt;Upload Failed&lt;/strong&gt;
            &lt;p&gt;File size exceeds limit.&lt;/p&gt;
          &lt;/div&gt;
          &lt;button className="toast-close"&gt;✕&lt;/button&gt;
        &lt;/div&gt;
        &lt;div className="toast-progress"&gt;&lt;/div&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      <div className="component-card" data-name="glassmorphism alert box premium frosted" data-cat="filled">
              <h3>Glassmorphism Alert Box</h3>
              <div className="alert-box glass-alert-box">
                <div className="glass-alert-indicator"></div>
                <i className="fa-solid fa-wand-magic-sparkles glass-alert-icon"></i>
                <div className="glass-alert-body">
                  <strong>Premium Feature Unlocked</strong>
                  <p>Enjoy unlimited active projects, cloud synchronization, and smart CSS generator tools.</p>
                </div>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a15', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a15', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a15" className="code-block">
      &lt;div className="alert-box glass-alert-box"&gt;
        &lt;div className="glass-alert-indicator"&gt;&lt;/div&gt;
        &lt;i className="fa-solid fa-wand-magic-sparkles glass-alert-icon"&gt;&lt;/i&gt;
        &lt;div className="glass-alert-body"&gt;
          &lt;strong&gt;Premium Feature Unlocked&lt;/strong&gt;
          &lt;p&gt;Enjoy unlimited active projects and cloud synchronization.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      <div className="component-card" data-name="dismissible floating alert interactive action" data-cat="toast">
              <h3>Dismissible Floating Alert</h3>
              <div className="alert-box floating-alert-component" id="floatingAlertPageContainer">
                <i className="fa-solid fa-bell bell-ring-icon"></i>
                <div className="floating-alert-body">
                  <strong>New Update Available</strong>
                  <p>Version 2.4.0 is now live. Check out the release notes.</p>
                </div>
                <button className="floating-alert-close" onclick="closeAlert('floatingAlertPageContainer')">Dismiss</button>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a16', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a16', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a16" className="code-block">
      &lt;div className="alert-box floating-alert-component" id="floatingAlert"&gt;
        &lt;i className="fa-solid fa-bell bell-ring-icon"&gt;&lt;/i&gt;
        &lt;div className="floating-alert-body"&gt;
          &lt;strong&gt;New Update Available&lt;/strong&gt;
          &lt;p&gt;Version 2.4.0 is now live.&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="floating-alert-close" onclick="closeAlert('floatingAlert')"&gt;Dismiss&lt;/button&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      <div className="component-card" data-name="success alert banner premium green" data-cat="banner">
              <h3>Success Alert Banner</h3>
              <div className="alert-box alert-success-banner">
                <div className="banner-icon-wrap">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="banner-body">
                  <strong>Action Completed!</strong>
                  <p>Your payment of $120.00 was processed successfully.</p>
                </div>
                <div className="banner-actions">
                  <button className="banner-btn primary">Receipt</button>
                  <button className="banner-btn outline">Dismiss</button>
                </div>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a12', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a12', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a12" className="code-block">
      &lt;div className="alert-box alert-success-banner"&gt;
        &lt;div className="banner-icon-wrap"&gt;&lt;i className="fa-solid fa-circle-check"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="banner-body"&gt;
          &lt;strong&gt;Action Completed!&lt;/strong&gt;
          &lt;p&gt;Payment of $120.00 processed successfully.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="banner-actions"&gt;
          &lt;button className="banner-btn primary"&gt;Receipt&lt;/button&gt;
          &lt;button className="banner-btn outline"&gt;Dismiss&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      <div className="component-card" data-name="warning notification alert yellow pulsing" data-cat="basic">
              <h3>Warning Notification Alert</h3>
              <div className="alert-box alert-warning-notify">
                <i className="fa-solid fa-triangle-exclamation warning-pulse-icon"></i>
                <div className="notify-body">
                  <strong>Security Warning</strong>
                  <p>Unrecognized login attempt detected from IP 192.168.1.102.</p>
                </div>
                <button className="notify-close" onclick="this.parentElement.style.display='none'">✕</button>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a13', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a13', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a13" className="code-block">
      &lt;div className="alert-box alert-warning-notify"&gt;
        &lt;i className="fa-solid fa-triangle-exclamation warning-pulse-icon"&gt;&lt;/i&gt;
        &lt;div className="notify-body"&gt;
          &lt;strong&gt;Security Warning&lt;/strong&gt;
          &lt;p&gt;Unrecognized login attempt detected.&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="notify-close"&gt;✕&lt;/button&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      <div className="component-card" data-name="error toast alert red progress load" data-cat="toast">
              <h3>Error Toast Alert</h3>
              <div className="alert-box error-toast">
                <div className="toast-main">
                  <i className="fa-solid fa-circle-xmark error-icon"></i>
                  <div className="toast-body">
                    <strong>Upload Failed</strong>
                    <p>File size exceeds the 10MB limit.</p>
                  </div>
                  <button className="toast-close" onclick="this.closest('.error-toast').style.display='none'">✕</button>
                </div>
                <div className="toast-progress"></div>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a14', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a14', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a14" className="code-block">
      &lt;div className="alert-box error-toast"&gt;
        &lt;div className="toast-main"&gt;
          &lt;i className="fa-solid fa-circle-xmark error-icon"&gt;&lt;/i&gt;
          &lt;div className="toast-body"&gt;
            &lt;strong&gt;Upload Failed&lt;/strong&gt;
            &lt;p&gt;File size exceeds limit.&lt;/p&gt;
          &lt;/div&gt;
          &lt;button className="toast-close"&gt;✕&lt;/button&gt;
        &lt;/div&gt;
        &lt;div className="toast-progress"&gt;&lt;/div&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      <div className="component-card" data-name="glassmorphism alert box premium frosted" data-cat="filled">
              <h3>Glassmorphism Alert Box</h3>
              <div className="alert-box glass-alert-box">
                <div className="glass-alert-indicator"></div>
                <i className="fa-solid fa-wand-magic-sparkles glass-alert-icon"></i>
                <div className="glass-alert-body">
                  <strong>Premium Feature Unlocked</strong>
                  <p>Enjoy unlimited active projects, cloud synchronization, and smart CSS generator tools.</p>
                </div>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a15', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a15', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a15" className="code-block">
      &lt;div className="alert-box glass-alert-box"&gt;
        &lt;div className="glass-alert-indicator"&gt;&lt;/div&gt;
        &lt;i className="fa-solid fa-wand-magic-sparkles glass-alert-icon"&gt;&lt;/i&gt;
        &lt;div className="glass-alert-body"&gt;
          &lt;strong&gt;Premium Feature Unlocked&lt;/strong&gt;
          &lt;p&gt;Enjoy unlimited active projects and cloud synchronization.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      <div className="component-card" data-name="dismissible floating alert interactive action" data-cat="toast">
              <h3>Dismissible Floating Alert</h3>
              <div className="alert-box floating-alert-component" id="floatingAlertPageContainer">
                <i className="fa-solid fa-bell bell-ring-icon"></i>
                <div className="floating-alert-body">
                  <strong>New Update Available</strong>
                  <p>Version 2.4.0 is now live. Check out the release notes.</p>
                </div>
                <button className="floating-alert-close" onclick="closeAlert('floatingAlertPageContainer')">Dismiss</button>
              </div>
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('a16', this)">
                  <i className="fa-solid fa-code"></i> View Code
                </button>
                <button className="action-btn copy-btn" onclick="copyCode('a16', this)">
                  <i className="fa-solid fa-copy"></i> Copy
                </button>
              </div>
              <pre id="a16" className="code-block">
      &lt;div className="alert-box floating-alert-component" id="floatingAlert"&gt;
        &lt;i className="fa-solid fa-bell bell-ring-icon"&gt;&lt;/i&gt;
        &lt;div className="floating-alert-body"&gt;
          &lt;strong&gt;New Update Available&lt;/strong&gt;
          &lt;p&gt;Version 2.4.0 is now live.&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="floating-alert-close" onclick="closeAlert('floatingAlert')"&gt;Dismiss&lt;/button&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
      
      <div className="component-card" data-cat="filled" data-name="glassmorphism success alert green">
        <h3>Glass Success Alert</h3>
        <div className="alert-box alert-glass-success" role="alert">
          <div className="ag-icon"><i className="fa-solid fa-check"></i></div>
          <div className="ag-content">
            <strong>Action Completed</strong>
            <p>Your profile has been updated successfully.</p>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new1', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new1" className="code-block"><code>&lt;div className="alert-box alert-glass-success" role="alert"&gt;
        &lt;div className="ag-icon"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="ag-content"&gt;
          &lt;strong&gt;Action Completed&lt;/strong&gt;
          &lt;p&gt;Your profile has been updated successfully.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      
      <div className="component-card" data-cat="outlined" data-name="gradient border warning alert pulse">
        <h3>Gradient Warning Alert</h3>
        <div className="alert-box alert-gradient-warning" role="alert">
          <div className="ag-icon"><i className="fa-solid fa-bolt"></i></div>
          <div className="ag-content">
            <strong>Low Battery</strong>
            <p>Your device is at 10%. Please plug in charger.</p>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new2', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new2" className="code-block"><code>&lt;div className="alert-box alert-gradient-warning" role="alert"&gt;
        &lt;div className="ag-icon"&gt;&lt;i className="fa-solid fa-bolt"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="ag-content"&gt;
          &lt;strong&gt;Low Battery&lt;/strong&gt;
          &lt;p&gt;Your device is at 10%. Please plug in charger.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      
      <div className="component-card" data-cat="filled" data-name="cyber dark mode info alert">
        <h3>Cyber Info Alert</h3>
        <div className="alert-box alert-cyber-info" role="alert">
          <div className="ag-icon"><i className="fa-solid fa-satellite-dish"></i></div>
          <div className="ag-content">
            <strong>Signal Acquired</strong>
            <p>Connection established with orbital satellite.</p>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new3', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new3', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new3" className="code-block"><code>&lt;div className="alert-box alert-cyber-info" role="alert"&gt;
        &lt;div className="ag-icon"&gt;&lt;i className="fa-solid fa-satellite-dish"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="ag-content"&gt;
          &lt;strong&gt;Signal Acquired&lt;/strong&gt;
          &lt;p&gt;Connection established with orbital satellite.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      
      <div className="component-card" data-cat="toast" data-name="notification badge alert message">
        <h3>Notification Alert</h3>
        <div className="alert-box alert-badge-notify" role="alert">
          <div className="abn-avatar">
            <img src="https://i.pravatar.cc/150?img=68" alt="User" />
            <span className="abn-badge">3</span>
          </div>
          <div className="ag-content">
            <strong>New Messages</strong>
            <p>You have 3 unread messages from Sarah.</p>
          </div>
          <button className="abn-close">✕</button>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new4', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new4', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new4" className="code-block"><code>&lt;div className="alert-box alert-badge-notify" role="alert"&gt;
        &lt;div className="abn-avatar"&gt;
          &lt;img src="https://i.pravatar.cc/150?img=68" alt="User"&gt;
          &lt;span className="abn-badge"&gt;3&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="ag-content"&gt;
          &lt;strong&gt;New Messages&lt;/strong&gt;
          &lt;p&gt;You have 3 unread messages from Sarah.&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="abn-close"&gt;✕&lt;/button&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      
      <div className="component-card" data-cat="basic" data-name="simple stripe error alert red">
        <h3>Stripe Error Alert</h3>
        <div className="alert-box alert-stripe-error" role="alert">
          <div className="ag-content">
            <strong>Authentication Failed</strong>
            <p>The password you entered is incorrect.</p>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new5', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new5', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new5" className="code-block"><code>&lt;div className="alert-box alert-stripe-error" role="alert"&gt;
        &lt;div className="ag-content"&gt;
          &lt;strong&gt;Authentication Failed&lt;/strong&gt;
          &lt;p&gt;The password you entered is incorrect.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      
      <div className="component-card" data-cat="basic" data-name="neumorphic interactive action confirm alert box">
        <h3>Neumorphic Confirm Alert</h3>
        <div className="alert-box alert-neumorphic-confirm">
          <div className="nc-icon"><i className="fa-solid fa-trash-can"></i></div>
          <div className="nc-body">
            <strong>Delete Project?</strong>
            <p>This action is irreversible and will purge all repository assets.</p>
            <div className="nc-actions">
              <button className="nc-btn-cancel">Cancel</button>
              <button className="nc-btn-confirm">Delete</button>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new6', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new6', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new6" className="code-block"><code>&lt;div className="alert-box alert-neumorphic-confirm"&gt;
        &lt;div className="nc-icon"&gt;&lt;i className="fa-solid fa-trash-can"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="nc-body"&gt;
          &lt;strong&gt;Delete Project?&lt;/strong&gt;
          &lt;p&gt;This action is irreversible and will purge all repository assets.&lt;/p&gt;
          &lt;div className="nc-actions"&gt;
            &lt;button className="nc-btn-cancel"&gt;Cancel&lt;/button&gt;
            &lt;button className="nc-btn-confirm"&gt;Delete&lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      <div className="component-card" data-cat="filled" data-name="mac console terminal alert system developer logs">
        <h3>Console Terminal Alert</h3>
        <div className="alert-box alert-terminal-log">
          <div className="tl-header">
            <span className="tl-dot red"></span>
            <span className="tl-dot yellow"></span>
            <span className="tl-dot green"></span>
            <span className="tl-title">bash - system_monitor.sh</span>
          </div>
          <div className="tl-console">
            <div className="tl-line"><span className="tl-prompt">guest@uiverse:~$</span> ./check_db.sh</div>
            <div className="tl-line error"><span className="tl-status">[FATAL]</span> Database pool overflowed! 152 active connections.</div>
            <div className="tl-line warning"><span className="tl-status">[WARN]</span> Re-routing traffic to secondary cluster... <span className="tl-cursor"></span></div>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new7', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new7', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new7" className="code-block"><code>&lt;div className="alert-box alert-terminal-log"&gt;
        &lt;div className="tl-header"&gt;
          &lt;span className="tl-dot red"&gt;&lt;/span&gt;
          &lt;span className="tl-dot yellow"&gt;&lt;/span&gt;
          &lt;span className="tl-dot green"&gt;&lt;/span&gt;
          &lt;span className="tl-title"&gt;bash - system_monitor.sh&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="tl-console"&gt;
          &lt;div className="tl-line"&gt;&lt;span className="tl-prompt"&gt;guest@uiverse:~$&lt;/span&gt; ./check_db.sh&lt;/div&gt;
          &lt;div className="tl-line error"&gt;&lt;span className="tl-status"&gt;[FATAL]&lt;/span&gt; Database pool overflowed! 152 active connections.&lt;/div&gt;
          &lt;div className="tl-line warning"&gt;&lt;span className="tl-status"&gt;[WARN]&lt;/span&gt; Re-routing traffic to secondary cluster... &lt;span className="tl-cursor"&gt;&lt;/span&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      <div className="component-card" data-cat="filled" data-name="pulsing radar threat intrusion hack alert crimson glowing animate">
        <h3>Radar Intrusion Alert</h3>
        <div className="alert-box alert-radar-threat">
          <div className="rt-radar-wrap">
            <div className="rt-radar-circle circle1"></div>
            <div className="rt-radar-circle circle2"></div>
            <div className="rt-radar-circle circle3"></div>
            <i className="fa-solid fa-circle-exclamation rt-threat-icon"></i>
          </div>
          <div className="rt-body">
            <strong>Intrusion Detected</strong>
            <p>Node 0x4F-A9 bypassed firewall port 8080. Immediate isolation sequence initiated.</p>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new8', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new8', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new8" className="code-block"><code>&lt;div className="alert-box alert-radar-threat"&gt;
        &lt;div className="rt-radar-wrap"&gt;
          &lt;div className="rt-radar-circle circle1"&gt;&lt;/div&gt;
          &lt;div className="rt-radar-circle circle2"&gt;&lt;/div&gt;
          &lt;div className="rt-radar-circle circle3"&gt;&lt;/div&gt;
          &lt;i className="fa-solid fa-circle-exclamation rt-threat-icon"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;div className="rt-body"&gt;
          &lt;strong&gt;Intrusion Detected&lt;/strong&gt;
          &lt;p&gt;Node 0x4F-A9 bypassed firewall port 8080. Immediate isolation sequence initiated.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      <div className="component-card" data-cat="basic" data-name="retro 8bit pixel game alert box arcade yellow magenta font">
        <h3>Retro Pixel Alert</h3>
        <div className="alert-box alert-retro-pixel">
          <div className="rp-icon">👾</div>
          <div className="rp-body">
            <strong>STAGE 4 LOCKED</strong>
            <p>Defeat the giant alien boss to acquire additional credits!</p>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new9', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new9', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new9" className="code-block"><code>&lt;div className="alert-box alert-retro-pixel"&gt;
        &lt;div className="rp-icon"&gt;👾&lt;/div&gt;
        &lt;div className="rp-body"&gt;
          &lt;strong&gt;STAGE 4 LOCKED&lt;/strong&gt;
          &lt;p&gt;Defeat the giant alien boss to acquire additional credits!&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      <div className="component-card" data-cat="toast" data-name="glassmorphic timer toast notification countdown progress bar automatic dismiss">
        <h3>Glassmorphic Timer Toast</h3>
        <div className="alert-box alert-glass-timer-toast">
          <div className="gt-icon-wrap"><i className="fa-solid fa-hourglass-half"></i></div>
          <div className="gt-body">
            <strong>Session Expiring</strong>
            <p>Automatic logout in 30 seconds due to inactivity. <a href="#" className="gt-link">Extend</a></p>
          </div>
          <button className="gt-close">✕</button>
          <div className="gt-progress-track">
            <div className="gt-progress-bar"></div>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new10', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new10', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new10" className="code-block"><code>&lt;div className="alert-box alert-glass-timer-toast"&gt;
        &lt;div className="gt-icon-wrap"&gt;&lt;i className="fa-solid fa-hourglass-half"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="gt-body"&gt;
          &lt;strong&gt;Session Expiring&lt;/strong&gt;
          &lt;p&gt;Automatic logout in 30 seconds due to inactivity.&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="gt-close"&gt;✕&lt;/button&gt;
        &lt;div className="gt-progress-track"&gt;
          &lt;div className="gt-progress-bar"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
      <div className="component-card" data-cat="banner" data-name="multi action expandable accordion system alert debugger details error">
        <h3>Expandable Details Alert</h3>
        <div className="alert-box alert-expandable-details" id="expAlertBox">
          <div className="ed-main">
            <i className="fa-solid fa-bug ed-bug-icon"></i>
            <div className="ed-body">
              <strong>Runtime Exception</strong>
              <p>Unhandled dynamic linker lookup error in libc.so.6.</p>
            </div>
            <button className="ed-toggle-btn" onclick="document.getElementById('expAlertBox').classList.toggle('expanded')">Details</button>
          </div>
          <div className="ed-details">
            <div className="ed-details-inner">
              <div className="ed-log-line">Fatal: load_library: could not locate symbol "__pthread_cleanup_push"</div>
              <div className="ed-log-line">Stack trace: at ld-linux.so.2 (line 1208)</div>
              <div className="ed-log-line">Stack trace: at libc.so.6 (line 442)</div>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="action-btn view-btn" onclick="toggleCode('new11', this)"><i className="fa-solid fa-code"></i> View Code</button>
          <button className="action-btn copy-btn" onclick="copyCode('new11', this)"><i className="fa-solid fa-copy"></i> Copy</button>
        </div>
        <pre id="new11" className="code-block"><code>&lt;div className="alert-box alert-expandable-details" id="myExpandableAlert"&gt;
        &lt;div className="ed-main"&gt;
          &lt;i className="fa-solid fa-bug ed-bug-icon"&gt;&lt;/i&gt;
          &lt;div className="ed-body"&gt;
            &lt;strong&gt;Runtime Exception&lt;/strong&gt;
            &lt;p&gt;Unhandled dynamic linker lookup error in libc.so.6.&lt;/p&gt;
          &lt;/div&gt;
          &lt;button className="ed-toggle-btn" onclick="document.getElementById('myExpandableAlert').classList.toggle('expanded')"&gt;Details&lt;/button&gt;
        &lt;/div&gt;
        &lt;div className="ed-details"&gt;
          &lt;div className="ed-details-inner"&gt;
            &lt;div className="ed-log-line"&gt;Fatal: load_library: could not locate symbol "__pthread_cleanup_push"&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      </div>
      
        </div>
      
      </main>
    </>
  );
}
