import React from 'react';

export default function alerts(){
  return (
    <>
      <main className="alerts-page">
      
            {/* ================= HERO ================= */}
            <section className="alerts-hero">
      
              <div className="hero-badge">
                🔔 15+ Alert Variants
              </div>
      
              <h1>
                Beautiful
                <span>alert components</span>
                for modern UI.
              </h1>
      
              <p>
                Responsive and reusable alert components
                designed with modern layouts and clean
                interactions.
              </p>
      
            </section>
      
            {/* ================= STATS ================= */}
            <section className="alert-stats">
      
              <div className="stats-card">
                <h3>15+</h3>
                <p>Alert Styles</p>
              </div>
      
              <div className="stats-card">
                <h3>100%</h3>
                <p>Responsive</p>
              </div>
      
              <div className="stats-card">
                <h3>Dark UI</h3>
                <p>Modern Theme</p>
              </div>
      
              <div className="stats-card">
                <h3>Pure</h3>
                <p>HTML CSS JS</p>
              </div>
      
            </section>
      
            {/* ================= FEATURED ================= */}
            <section className="featured-alert">
      
              <div className="featured-content">
              <div className="actions">
                <button onclick="toggleCode('a3')">View Code</button>
                
                <button onclick="copyCode('a3', this)">Copy</button>
              </div>
      
              <pre id="a3" className="code-block">
      &lt;div className="alert-box alert-error"&gt;
        &lt;strong&gt;Error&lt;/strong&gt;
        &lt;p&gt;There was an issue submitting the form. Please try again.&lt;/p&gt;
      &lt;/div&gt;
            </pre>
          </div>
          <div className="component-card">
        <h3>Confirmation Alert</h3>
        <div className="alert-box alert-confirmation">
          <div>
            <strong>Confirmation</strong>
            <p>Are you sure you want to delete this item?</p>
            <div className="alert-actions">
              <button className="btn-confirm">Yes</button>
              <button className="btn-cancel">No</button>
            </div>
          </div>
        </div>
      
        <div className="actions">
          <button onclick="toggleCode('a4')">View Code</button>
          <button onclick="copyCode('a4', this)">Copy</button>
        </div>
      
        <pre id="a4" className="code-block">
      &lt;div className="alert-box alert-confirmation"&gt;
        &lt;strong&gt;Confirmation&lt;/strong&gt;
        &lt;p&gt;Are you sure you want to delete this item?&lt;/p&gt;
        &lt;div className="alert-actions"&gt;
          &lt;button className="btn-confirm"&gt;Yes&lt;/button&gt;
          &lt;button className="btn-cancel"&gt;No&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
        </pre>
      </div>
      
      <div className="component-card">
        <h3>Loading/Progress Alert</h3>
        <div className="alert-box alert-loading">
          <div>
            <strong>Loading</strong>
            <p>Uploading your file, please wait…</p>
            <div className="spinner"></div>
          </div>
        </div>
      
        <div className="actions">
          <button onclick="toggleCode('a5-loading')">View Code</button>
          <button onclick="copyCode('a5-loading', this)">Copy</button>
        </div>
      
        <pre id="a5-loading" className="code-block">
      &lt;div className="alert-box alert-loading"&gt;
        &lt;strong&gt;Loading&lt;/strong&gt;
        &lt;p&gt;Uploading your file, please wait…&lt;/p&gt;
        &lt;div className="spinner"&gt;&lt;/div&gt;
      &lt;/div&gt;
        </pre>
      </div>
      
      
            
      
                <div className="featured-badge">
                  🚀 Featured Component
                </div>
      
                <h2>
                  Create stunning
                  <span>notification systems</span>
                </h2>
              <div className="actions">
                <button onclick="toggleCode('a5')">View Code</button>
                
                <button onclick="copyCode('a5', this)">Copy</button>
              </div>
      
                <p>
                  Flexible alert layouts with smooth hover
                  animations, gradients and glassmorphism UI.
                </p>
      
                <div className="featured-actions">
      
                  <button className="primary-demo-btn">
                    Explore Alerts
                  </button>
      
                  <button className="secondary-demo-btn">
                    Documentation
                  </button>
      
                </div>
      
              <div className="actions">
                <button onclick="toggleCode('a6')">View Code</button>
               
                <button onclick="copyCode('a6', this)">Copy</button>
              </div>
      
              <div className="featured-preview">
      
                <div className="mini-alert success-mini">
                  <i className="fa-solid fa-circle-check"></i>
                  Payment successful
                </div>
      
                <div className="mini-alert warning-mini">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  Storage almost full
                </div>
      
                <div className="mini-alert error-mini">
                  <i className="fa-solid fa-circle-xmark"></i>
                  Server connection failed
                </div>
      
              <div className="actions">
                <button onclick="toggleCode('a7')">View Code</button>
                
                <button onclick="copyCode('a7', this)">Copy</button>
              </div>
      
            </section>
      
            {/* ================= FILTERS ================= */}
            <section className="alert-toolbar">
      
              <button className="toolbar-btn active">
                All
              </button>
      
              <button className="toolbar-btn">
                Success
              </button>
      
              <button className="toolbar-btn">
                Warning
              </button>
      
              <button className="toolbar-btn">
                Error
              </button>
      
              <button className="toolbar-btn">
                Info
              </button>
      
            </section>
      
            {/* ================= ALERT GRID ================= */}
            <section className="alerts-grid">
      
              {/* SUCCESS */}
              <div className="component-card">
      
                <div className="card-top">
      
                  <h3>Success Alert</h3>
      
                  <span className="card-label success">
                    Success
                  </span>
      
                </div>
      
                <div className="alert-box alert-success">
      
                  <i className="fa-solid fa-circle-check"></i>
      
                  <div>
      
                    <strong>Success</strong>
      
                    <p>
                      Your order has been placed successfully.
                    </p>
      
                  </div>
      
                </div>
      
                <div className="actions">
      
                  <button onclick="toggleCode('a1')">
                    View Code
                  </button>
      
                  <button onclick="copyCode('a1', this)">
                    Copy
                  </button>
      
                </div>
              <div className="actions">
                <button onclick="toggleCode('a8')">View Code</button>
                
                <button onclick="copyCode('a8', this)">Copy</button>
              </div>
      
      <pre
        id="a1"
        className="code-block"
      >
      &lt;div className="alert-box alert-success"&gt;
        Success Alert
      &lt;/div&gt;
      </pre>
      
              </div>
      
              {/* WARNING */}
              <div className="component-card">
              <div className="actions">
                <button onclick="toggleCode('a9')">View Code</button>
                
                <button onclick="copyCode('a9', this)">Copy</button>
              </div>
      
                <div className="card-top">
      
                  <h3>Warning Alert</h3>
      
                  <span className="card-label warning">
                    Warning
                  </span>
      
                </div>
      
                <div className="alert-box alert-warning">
              <div className="actions">
                <button onclick="toggleCode('a10')">View Code</button>
               
                <button onclick="copyCode('a10', this)">Copy</button>
              </div>
      
                  <i className="fa-solid fa-triangle-exclamation"></i>
      
                  <div>
      
                    <strong>Warning</strong>
      
                    <p>
                      Please review your information carefully.
                    </p>
      
                  </div>
      
                </div>
      
                <div className="actions">
      
                  <button onclick="toggleCode('a2')">
                    View Code
                  </button>
      
                  <button onclick="copyCode('a2', this)">
                    Copy
                  </button>
      
                </div>
      
      <pre
        id="a2"
        className="code-block"
      >
      &lt;div className="alert-box alert-warning"&gt;
        Warning Alert
      &lt;/div&gt;
      </pre>
      
              <div className="actions">
                <button onclick="toggleCode('a11')">View Code</button>
                 <button onclick="copyCode('a11', this)">Copy</button>
              </div>
      
              {/* ERROR */}
              <div className="component-card">
      
                <div className="card-top">
      
                  <h3>Error Alert</h3>
      
                  <span className="card-label error">
                    Error
                  </span>
      
                </div>
      
                <div className="alert-box alert-error">
      
                  <i className="fa-solid fa-circle-xmark"></i>
      
                  <div>
      
                    <strong>Error</strong>
      
                    <p>
                      Something went wrong while submitting.
                    </p>
      
                  </div>
      
                </div>
      
                <div className="actions">
      
                  <button onclick="toggleCode('a3')">
                    View Code
                  </button>
      
                  <button onclick="copyCode('a3', this)">
                    Copy
                  </button>
      
                </div>
      
      <pre
        id="a3"
        className="code-block"
      >
      &lt;div className="alert-box alert-error"&gt;
        Error Alert
      &lt;/div&gt;
      </pre>
      
              </div>
      
            </section>
      
          </main>
    </>
  );
}
