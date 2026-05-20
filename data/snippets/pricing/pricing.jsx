import React from 'react';

export default function pricing(){
  return (
    <>
      <main className="main-home">
      
      
        {/* ================= PRICING HERO ================= */}
      
      <div className="pricing-page-hero">
      
        <div className="breadcrumb">
          <a href="index.html">Home</a>
          <i className="fa-solid fa-chevron-right"></i>
          <span>Pricing</span>
        </div>
      
        <h1 className="page-title">
          Pricing Card Components
        </h1>
      
        <p className="page-desc">
          Modern SaaS pricing UI components with billing toggles,
          glowing cards, feature lists, and responsive layouts.
        </p>
      
        <div className="page-meta">
      
          <span className="meta-badge">
            <i className="fa-solid fa-layer-group"></i>
            3 Plans
          </span>
      
          <span className="meta-badge">
            <i className="fa-solid fa-toggle-on"></i>
            Billing Toggle
          </span>
      
          <span className="meta-badge">
            <i className="fa-solid fa-code"></i>
            HTML + CSS
          </span>
      
        </div>
      
      </div>
      
      {/* ================= COMPONENT CARD ================= */}
      
      <div className="component-card">
      
        {/* TOP */}
      
        <div className="card-top">
      
          <div>
            <h2 className="card-label">
              Interactive Pricing Table
            </h2>
          </div>
      
          <span className="card-tag">
            Popular
          </span>
      
        </div>
      
        {/* DESCRIPTION */}
      
        <p className="card-desc">
          Fully responsive SaaS pricing section with
          monthly, quarterly, and yearly billing toggle.
        </p>
      
        {/* ================= TOGGLE ================= */}
      
        <div className="billing-toggle-wrap">
      
          <div className="billing-toggle">
      
            <button className="toggle-btn active"
              data-period="month">
      
              Monthly
      
            </button>
      
            <button className="toggle-btn"
              data-period="quarter">
      
              Quarterly
      
            </button>
      
            <button className="toggle-btn"
              data-period="year">
      
              Yearly
      
              <span className="save-chip">
                Save 40%
              </span>
      
            </button>
      
          </div>
      
        </div>
      
        {/* ================= PRICING GRID ================= */}
      
        <div className="pricing-grid-preview">
      
          {/* FREE */}
      
          <div className="plan-card free-card">
      
            <div className="plan-name">
              Free
            </div>
      
            <p className="plan-tagline">
              For hobby projects
            </p>
      
            <div className="plan-price-wrap">
      
              <span className="plan-amount"
                data-month="$0"
                data-quarter="$0"
                data-year="$0">
      
                $0
      
              </span>
      
              <span className="plan-period">
                / month
              </span>
      
            </div>
      
            <ul className="plan-features">
      
              <li>
                <i className="fa-solid fa-check"></i>
                3 Projects
              </li>
      
              <li>
                <i className="fa-solid fa-check"></i>
                Community Support
              </li>
      
              <li>
                <i className="fa-solid fa-check"></i>
                Basic Analytics
              </li>
      
              <li className="muted">
                <i className="fa-solid fa-xmark"></i>
                Custom Domains
              </li>
      
              <li className="muted">
                <i className="fa-solid fa-xmark"></i>
                Priority Support
              </li>
      
            </ul>
      
            <button className="plan-btn plan-btn-outline">
              Get Started
            </button>
      
          </div>
      
          {/* PRO */}
      
          <div className="plan-card pro-card">
      
            <div className="recommended-badge">
      
              <i className="fa-solid fa-star"></i>
      
              Most Popular
      
            </div>
      
            <div className="plan-name">
              Pro
            </div>
      
            <p className="plan-tagline">
              Best for growing startups
            </p>
      
            <div className="plan-price-wrap">
      
              <span className="plan-old"
                data-month="$49"
                data-quarter="$44"
                data-year="$39">
      
                $49
      
              </span>
      
              <span className="plan-amount"
                data-month="$29"
                data-quarter="$26"
                data-year="$19">
      
                $29
      
              </span>
      
              <span className="plan-period">
                / month
              </span>
      
            </div>
      
            <ul className="plan-features">
      
              <li>
                <i className="fa-solid fa-check"></i>
                Unlimited Projects
              </li>
      
              <li>
                <i className="fa-solid fa-check"></i>
                Team Collaboration
              </li>
      
              <li>
                <i className="fa-solid fa-check"></i>
                Priority Support
              </li>
      
              <li>
                <i className="fa-solid fa-check"></i>
                Custom Domains
              </li>
      
              <li className="muted">
                <i className="fa-solid fa-xmark"></i>
                White Label
              </li>
      
            </ul>
      
            <button className="plan-btn plan-btn-accent">
              Choose Pro
            </button>
      
          </div>
      
          {/* ENTERPRISE */}
      
          <div className="plan-card enterprise-card">
      
            <div className="plan-name">
              Enterprise
            </div>
      
            <p className="plan-tagline">
              For large organizations
            </p>
      
            <div className="plan-price-wrap">
      
              <span className="plan-old"
                data-month="$149"
                data-quarter="$134"
                data-year="$119">
      
                $149
      
              </span>
      
              <span className="plan-amount"
                data-month="$99"
                data-quarter="$89"
                data-year="$69">
      
                $99
      
              </span>
      
              <span className="plan-period">
                / month
              </span>
      
            </div>
      
            <ul className="plan-features">
      
              <li>
                <i className="fa-solid fa-check"></i>
                Dedicated Manager
              </li>
      
              <li>
                <i className="fa-solid fa-check"></i>
                White Label
              </li>
      
              <li>
                <i className="fa-solid fa-check"></i>
                SLA Guarantee
              </li>
      
              <li>
                <i className="fa-solid fa-check"></i>
                Custom Integrations
              </li>
      
              <li>
                <i className="fa-solid fa-check"></i>
                Unlimited Storage
              </li>
      
            </ul>
      
            <button className="plan-btn business-btn">
              Contact Sales
            </button>
      
          </div>
      
        </div>
      
        {/* ================= ACTION BUTTONS ================= */}
      
        <div className="actions">
      
          <button className="action-btn view-btn"
            onclick="toggleCode('pc1', this)">
      
            <i className="fa-solid fa-code"></i>
            View Code
      
          </button>
      
          <button className="action-btn copy-btn"
            onclick="copyCode('pc1', this)">
      
            <i className="fa-solid fa-copy"></i>
            Copy
      
          </button>
      
        </div>
      
        {/* ================= CODE BLOCK ================= */}
      
        <pre id="pc1" className="code-block"><code>
      
      &lt;div className="pricing-grid-preview"&gt;
      
        &lt;div className="plan-card free-card"&gt;&lt;/div&gt;
      
        &lt;div className="plan-card pro-card"&gt;&lt;/div&gt;
      
        &lt;div className="plan-card enterprise-card"&gt;&lt;/div&gt;
      
      &lt;/div&gt;
      
        </code></pre>
      
      </div>
        
      
        {/* ================= ACTION BUTTONS ================= */}
      
        <div className="actions">
      
          <button className="action-btn view-btn"
            onclick="toggleCode('pc1', this)">
      
            <i className="fa-solid fa-code"></i>
            View Code
      
          </button>
      
          <button className="action-btn copy-btn"
            onclick="copyCode('pc1', this)">
      
            <i className="fa-solid fa-copy"></i>
            Copy
      
          </button>
      
        </div>
      
        {/* ================= CODE BLOCK ================= */}
      
        <pre id="pc1" className="code-block"><code>
      
      &lt;div className="pricing-grid-preview"&gt;
      
        &lt;div className="plan-card free-card"&gt;
          ...
        &lt;/div&gt;
      
        &lt;div className="plan-card pro-card"&gt;
          ...
        &lt;/div&gt;
      
        &lt;div className="plan-card enterprise-card"&gt;
          ...
        &lt;/div&gt;
      
      &lt;/div&gt;
      
        </code></pre>
      
      </div>
      
      {/* ================= SECOND COMPONENT ================= */}
      
      <div className="component-card">
      
        <div className="pricing-grid">
      
          {/* STARTER */}
          <div className="pricing-card starter">
      
            <div className="card-glow"></div>
      
            <div className="pricing-card-content">
      
              <div className="plan-header">
                <h3>Starter</h3>
                <p>Perfect for personal projects</p>
              </div>
      
              <div className="plan-price">
                <span className="old-price">$19</span>
                <span className="amount">$12</span>
              </div>
      
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Basic analytics</li>
                <li><i className="fa-solid fa-check"></i> Custom domains</li>
                <li><i className="fa-solid fa-check"></i> Email support</li>
              </ul>
      
              <button className="plan-btn">
                Choose Starter
              </button>
      
            </div>
          </div>
      
          {/* PRO */}
          <div className="pricing-card pro featured">
      
            <div className="popular-badge">
              Most Popular
            </div>
      
            <div className="card-glow"></div>
      
            <div className="pricing-card-content">
      
              <div className="plan-header">
                <h3>Pro</h3>
                <p>Best for scaling your business</p>
              </div>
      
              <div className="plan-price">
                <span className="old-price">$49</span>
                <span className="amount">$29</span>
              </div>
      
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Advanced analytics</li>
                <li><i className="fa-solid fa-check"></i> Unlimited projects</li>
                <li><i className="fa-solid fa-check"></i> Priority support</li>
                <li><i className="fa-solid fa-check"></i> Team collaboration</li>
              </ul>
      
              <button className="plan-btn secondary">
                Choose Pro
              </button>
      
            </div>
          </div>
      
          {/* BUSINESS */}
          <div className="pricing-card business">
      
            <div className="card-glow"></div>
      
            <div className="pricing-card-content">
      
              <div className="plan-header">
                <h3>Business</h3>
                <p>For growing startups & teams</p>
          
      
              <div className="plan-price">
                <span className="old-price">$99</span>
                <span className="amount">$59</span>
              </div>
      
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> AI-powered insights</li>
                <li><i className="fa-solid fa-check"></i> Unlimited storage</li>
                <li><i className="fa-solid fa-check"></i> Dedicated manager</li>
                <li><i className="fa-solid fa-check"></i> 24/7 live support</li>
              </ul>
      
              <button className="plan-btn business-btn">
                Choose Business
              </button>
      
            </div>
          </div>
      
        </div>
      
        {/* ACTIONS */}
        <div className="actions">
      
          <button className="action-btn view-btn"
            onclick="toggleCode('pc2', this)">
      
            <i className="fa-solid fa-code"></i>
            View Code
      
          </button>
      
          <button className="action-btn copy-btn"
            onclick="copyCode('pc2', this)">
      
            <i className="fa-solid fa-copy"></i>
            Copy
      
          </button>
      
        </div>
      
        {/* CODE */}
        <pre id="pc2" className="code-block"><code>
      
      &lt;div className="pricing-grid"&gt;
      
        &lt;div className="pricing-card starter"&gt;
          ...
        &lt;/div&gt;
      
        &lt;div className="pricing-card pro"&gt;
          ...
        &lt;/div&gt;
      
        &lt;div className="pricing-card business"&gt;
          ...
        &lt;/div&gt;
      
      &lt;/div&gt;
      
        </code></pre>
      
      </div>
       {/* /pricing-grid-preview */}
      
          
        
      
      </main>
    </>
  );
}
