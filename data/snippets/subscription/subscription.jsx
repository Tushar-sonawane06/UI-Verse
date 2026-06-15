import React from 'react';

export default function subscription(){
  return (
    <>
      <main className="main-home">
      
        {/* ================= HERO ================= */}
        <div className="sub-hero">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <i className="fa-solid fa-chevron-right"></i>
            <span>Subscription</span>
          </div>
          <h1 className="page-title">Subscription & Billing Components</h1>
          <p className="page-desc">
            Premium SaaS subscription plan comparisons, interactive billing panel states, checkouts, and upgrade widgets with smooth animations and complete Dark Mode styling.
          </p>
          <div className="page-meta">
            <span className="meta-badge"><i className="fa-solid fa-credit-card"></i> 5 Premium UI Components</span>
            <span className="meta-badge"><i className="fa-solid fa-sliders"></i> Fully Responsive</span>
            <span className="meta-badge"><i className="fa-solid fa-moon"></i> Dark & Light support</span>
          </div>
        </div>
      
        <div className="sub-showcase-container">
      
          {/* ================= 1. PRICING CARDS WITH BILLING TOGGLE ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
                  1. Premium Pricing Cards
                </h2>
                <p className="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
                  Responsive plan-tier card layout with a monthly/annually dynamic billing state toggle and glow effects.
                </p>
              </div>
              <span className="card-tag" style="background: rgba(123, 97, 255, 0.1); color: var(--primary-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Interactive</span>
            </div>
      
            <div className="sub-pricing-section" style="margin: 2rem 0;">
              <div className="sub-billing-toggle-wrap">
                <button className="sub-period-btn active" onclick="toggleBillingPeriod('monthly')">Monthly</button>
                <button className="sub-period-btn" onclick="toggleBillingPeriod('annual')">
                  Annually
                  <span className="discount-tag">Save 20%</span>
                </button>
              </div>
      
              <div className="sub-pricing-grid">
                {/* Card 1: Starter */}
                <div className="sub-plan-card">
                  <h3>Starter</h3>
                  <p className="tagline">Perfect for personal sandbox experiments.</p>
                  <div className="price-wrap">
                    <span className="price" id="price-starter" data-monthly="$19" data-annual="$15">$19</span>
                    <span className="period">/ month</span>
                  </div>
                  <ul className="features-list">
                    <li><i className="fa-solid fa-check"></i> 5 Projects sandbox</li>
                    <li><i className="fa-solid fa-check"></i> Standard community support</li>
                    <li><i className="fa-solid fa-check"></i> Basic analytics suite</li>
                    <li className="unsupported"><i className="fa-solid fa-xmark"></i> Custom branding layers</li>
                    <li className="unsupported"><i className="fa-solid fa-xmark"></i> Advanced multi-region databases</li>
                  </ul>
                  <button className="card-cta secondary">Get Started</button>
                </div>
      
                {/* Card 2: Pro (Featured) */}
                <div className="sub-plan-card featured">
                  <span className="featured-badge">Featured</span>
                  <h3>Professional</h3>
                  <p className="tagline">Ideal for growing teams and startups.</p>
                  <div className="price-wrap">
                    <span className="price" id="price-pro" data-monthly="$49" data-annual="$39">$49</span>
                    <span className="period">/ month</span>
                  </div>
                  <ul className="features-list">
                    <li><i className="fa-solid fa-check"></i> Unlimited active workspaces</li>
                    <li><i className="fa-solid fa-check"></i> 24/7 dedicated support</li>
                    <li><i className="fa-solid fa-check"></i> Enterprise analytics dashboards</li>
                    <li><i className="fa-solid fa-check"></i> Custom branding layers</li>
                    <li className="unsupported"><i className="fa-solid fa-xmark"></i> SLA 99.99% uptime guarantee</li>
                  </ul>
                  <button className="card-cta primary">Choose Professional</button>
                </div>
      
                {/* Card 3: Enterprise */}
                <div className="sub-plan-card">
                  <h3>Enterprise</h3>
                  <p className="tagline">Tailored solutions for major companies.</p>
                  <div className="price-wrap">
                    <span className="price" id="price-enterprise" data-monthly="$99" data-annual="$79">$99</span>
                    <span className="period">/ month</span>
                  </div>
                  <ul className="features-list">
                    <li><i className="fa-solid fa-check"></i> Multi-tenant governance</li>
                    <li><i className="fa-solid fa-check"></i> White glove dedicated engineer</li>
                    <li><i className="fa-solid fa-check"></i> Custom AI metrics engine</li>
                    <li><i className="fa-solid fa-check"></i> Custom branding layers</li>
                    <li><i className="fa-solid fa-check"></i> SLA 99.99% uptime guarantee</li>
                  </ul>
                  <button className="card-cta secondary">Request Custom Quote</button>
                </div>
              </div>
            </div>
      
            <div className="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
              <button className="action-btn view-btn" onclick="toggleCode('pc-code-1', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('pc-code-1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
      
            <pre id="pc-code-1" className="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div className="sub-pricing-section"&gt;
        &lt;div className="sub-billing-toggle-wrap"&gt;
          &lt;button className="sub-period-btn active" onclick="toggleBillingPeriod('monthly')"&gt;Monthly&lt;/button&gt;
          &lt;button className="sub-period-btn" onclick="toggleBillingPeriod('annual')"&gt;Annually &lt;span className="discount-tag"&gt;Save 20%&lt;/span&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;div className="sub-pricing-grid"&gt;
          &lt;div className="sub-plan-card"&gt;
            &lt;h3&gt;Starter&lt;/h3&gt;
            &lt;span className="price" id="price-starter" data-monthly="$19" data-annual="$15"&gt;$19&lt;/span&gt;
            ...
          &lt;/div&gt;
          &lt;div className="sub-plan-card featured"&gt;
            &lt;span className="featured-badge"&gt;Featured&lt;/span&gt;
            &lt;h3&gt;Professional&lt;/h3&gt;
            &lt;span className="price" id="price-pro" data-monthly="$49" data-annual="$39"&gt;$49&lt;/span&gt;
            ...
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* ================= 2. BILLING PANELS (DASHBOARD WIDGETS) ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
                  2. Dashboard Billing Panels
                </h2>
                <p className="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
                  Dashboard settings components displaying core subscription statuses, graphic credit cards, and invoice lists.
                </p>
              </div>
              <span className="card-tag" style="background: rgba(16, 185, 129, 0.1); color: var(--success-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Dashboard</span>
            </div>
      
            <div className="sub-billing-panel-grid" style="margin: 2rem 0;">
              {/* Left Side: Status & Usage */}
              <div className="sub-billing-card">
                <div>
                  <h3 className="panel-title"><i className="fa-solid fa-sliders"></i> Account Billing Overview</h3>
                  <p style="font-size: 0.85rem; color: var(--text-muted); margin: 4px 0 0 0;">Manage your renewal cycles, invoices, and api limit limits.</p>
                </div>
      
                <div className="panel-section">
                  <span className="section-header">Current Subscription Plan</span>
                  <div className="sub-current-plan-banner">
                    <div className="sub-current-plan-info">
                      <h4>Professional Plan <span style="font-size: 0.7rem; padding: 2px 8px; background: rgba(16, 185, 129, 0.12); color: #10b981; border-radius: 50px; font-weight: 700;">Active</span></h4>
                      <p>Next renewal payment auto-processes on <strong>June 18, 2026</strong> ($49.00/mo).</p>
                    </div>
                    <button className="card-cta secondary" style="width: auto; padding: 8px 16px; margin: 0; font-size: 0.85rem;">Change Cycle</button>
                  </div>
                </div>
      
                <div className="panel-section">
                  <span className="section-header">API Quota Limit</span>
                  <div className="sub-usage-bar-wrap">
                    <div className="sub-usage-bar-meta">
                      <span>Monthly Endpoint Requests</span>
                      <span><span className="highlight">78,412</span> / 100,000 requests</span>
                    </div>
                    <div className="sub-usage-track">
                      <div className="sub-usage-fill" style="width: 78.4%;"></div>
                    </div>
                  </div>
                </div>
      
                <div className="panel-section">
                  <span className="section-header">Billing & Transaction Invoices</span>
                  <div className="sub-invoice-container">
                    <table className="sub-invoice-table">
                      <thead>
                        <tr>
                          <th>Invoice ID</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>INV-2026-004</strong></td>
                          <td>May 18, 2026</td>
                          <td>$49.00</td>
                          <td><span className="status-pill success"><i className="fa-solid fa-circle-check"></i> Paid</span></td>
                          <td><button className="invoice-download-btn"><i className="fa-solid fa-download"></i> PDF</button></td>
                        </tr>
                        <tr>
                          <td><strong>INV-2026-003</strong></td>
                          <td>Apr 18, 2026</td>
                          <td>$49.00</td>
                          <td><span className="status-pill success"><i className="fa-solid fa-circle-check"></i> Paid</span></td>
                          <td><button className="invoice-download-btn"><i className="fa-solid fa-download"></i> PDF</button></td>
                        </tr>
                        <tr>
                          <td><strong>INV-2026-002</strong></td>
                          <td>Mar 18, 2026</td>
                          <td>$49.00</td>
                          <td><span className="status-pill success"><i className="fa-solid fa-circle-check"></i> Paid</span></td>
                          <td><button className="invoice-download-btn"><i className="fa-solid fa-download"></i> PDF</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
      
              {/* Right Side: Graphic Payment Card Manager */}
              <div className="sub-cc-side-panel">
                {/* Graphic Credit Card */}
                <div className="sub-credit-card-ui">
                  <div className="cc-brand-header">
                    <div className="cc-chip"></div>
                    <i className="fab fa-cc-visa" style="font-size: 2.2rem;"></i>
                  </div>
                  <div className="cc-number">•••• •••• •••• 9841</div>
                  <div className="cc-footer">
                    <div className="cc-holder-wrap">
                      <label>Cardholder Name</label>
                      <span>ALEXANDER MERCER</span>
                    </div>
                    <div className="cc-expiry-wrap">
                      <label>Expires</label>
                      <span>08/29</span>
                    </div>
                  </div>
                </div>
      
                {/* Payment Card options list */}
                <div className="payment-methods-list">
                  <div className="payment-method-item active">
                    <div className="payment-method-left">
                      <i className="fab fa-cc-visa card-icon"></i>
                      <div>
                        <span className="card-digits">Visa ending in 9841</span>
                        <span className="card-expiry">Primary</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-circle-check" style="color: var(--primary-color);"></i>
                  </div>
      
                  <div className="payment-method-item">
                    <div className="payment-method-left">
                      <i className="fab fa-cc-mastercard card-icon"></i>
                      <div>
                        <span className="card-digits">Mastercard ending in 3042</span>
                        <span className="card-expiry">Backup</span>
                      </div>
                    </div>
                    <i className="fa-regular fa-circle" style="color: var(--text-muted);"></i>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
              <button className="action-btn view-btn" onclick="toggleCode('pc-code-2', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('pc-code-2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
      
            <pre id="pc-code-2" className="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div className="sub-billing-panel-grid"&gt;
        &lt;!-- Credit Card UI --&gt;
        &lt;div className="sub-credit-card-ui"&gt;
          &lt;div className="cc-brand-header"&gt;
            &lt;div className="cc-chip"&gt;&lt;/div&gt;
            &lt;i className="fab fa-cc-visa"&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className="cc-number"&gt;•••• •••• •••• 9841&lt;/div&gt;
          &lt;div className="cc-footer"&gt;
            &lt;div className="cc-holder-wrap"&gt;
              &lt;label&gt;Cardholder Name&lt;/label&gt;
              &lt;span&gt;ALEXANDER MERCER&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* ================= 3. SUBSCRIPTION PLAN CARDS (LIST VIEW) ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
                  3. Inline Plan Selectors
                </h2>
                <p className="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
                  Dashboard settings radio card listing to quickly select or switch between core service plans.
                </p>
              </div>
              <span className="card-tag" style="background: rgba(123, 97, 255, 0.1); color: var(--primary-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Settings</span>
            </div>
      
            <div className="sub-plan-list" style="margin: 2rem 0;">
              {/* Plan List Item 1: Starter */}
              <div className="sub-plan-list-item" onclick="selectPlanListItem(this)">
                <div className="radio-indicator"></div>
                <div className="sub-plan-item-details">
                  <div className="sub-plan-item-main">
                    <h4>Starter Tier</h4>
                    <p>Great for single developers starting dashboard deployments.</p>
                  </div>
                  <div className="sub-plan-item-pricing">
                    <span className="price">$19</span>
                    <span className="period">/ month</span>
                  </div>
                </div>
              </div>
      
              {/* Plan List Item 2: Professional */}
              <div className="sub-plan-list-item active" onclick="selectPlanListItem(this)">
                <div className="radio-indicator"></div>
                <div className="sub-plan-item-details">
                  <div className="sub-plan-item-main">
                    <h4>Professional Plan <span className="current-plan-tag">Current Plan</span></h4>
                    <p>Unlimited projects, priority 24/7 technical customer support.</p>
                  </div>
                  <div className="sub-plan-item-pricing">
                    <span className="price">$49</span>
                    <span className="period">/ month</span>
                  </div>
                </div>
              </div>
      
              {/* Plan List Item 3: Enterprise */}
              <div className="sub-plan-list-item" onclick="selectPlanListItem(this)">
                <div className="radio-indicator"></div>
                <div className="sub-plan-item-details">
                  <div className="sub-plan-item-main">
                    <h4>Enterprise Tier</h4>
                    <p>Premium compliance security, fully custom deployment options.</p>
                  </div>
                  <div className="sub-plan-item-pricing">
                    <span className="price">$99</span>
                    <span className="period">/ month</span>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
              <button className="action-btn view-btn" onclick="toggleCode('pc-code-3', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('pc-code-3', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
      
            <pre id="pc-code-3" className="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div className="sub-plan-list"&gt;
        &lt;div className="sub-plan-list-item active" onclick="selectPlanListItem(this)"&gt;
          &lt;div className="radio-indicator"&gt;&lt;/div&gt;
          &lt;div className="sub-plan-item-details"&gt;
            &lt;div className="sub-plan-item-main"&gt;
              &lt;h4&gt;Professional Plan &lt;span className="current-plan-tag"&gt;Current Plan&lt;/span&gt;&lt;/h4&gt;
              &lt;p&gt;Unlimited projects, priority 24/7 technical customer support.&lt;/p&gt;
            &lt;/div&gt;
            &lt;div className="sub-plan-item-pricing"&gt;
              &lt;span className="price"&gt;$49&lt;/span&gt;
              &lt;span className="period"&gt;/ month&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* ================= 4. PAYMENT SUMMARY COMPONENTS (CHECKOUT CARD) ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
                  4. Checkout Payment Summary
                </h2>
                <p className="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
                  Highly conversion-optimized itemized price breakdowns with coupon fields and secure payments.
                </p>
              </div>
              <span className="card-tag" style="background: rgba(123, 97, 255, 0.1); color: var(--primary-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Checkout</span>
            </div>
      
            <div style="margin: 2rem 0;">
              <div className="sub-checkout-summary">
                <h3>Payment Checkout Summary</h3>
                <div className="checkout-items">
                  <div className="checkout-row">
                    <span className="label">Professional Subscription (Annual)</span>
                    <span>$468.00</span>
                  </div>
                  <div className="checkout-row">
                    <span className="label">Priority Dedicated Support Add-on</span>
                    <span>$120.00</span>
                  </div>
                  {/* Dynamic Coupon Row */}
                  <div className="checkout-row discount" id="coupon-row" style="display: none;">
                    <span className="label">Discount (Code: <span id="coupon-code-span">WELCOME20</span>)</span>
                    <span id="coupon-discount-val">-$117.60</span>
                  </div>
                  <div className="checkout-row">
                    <span className="label">Estimated Taxes (10%)</span>
                    <span id="tax-row-val">$58.80</span>
                  </div>
                  <div className="checkout-row total">
                    <span className="label">Total Checkout Price</span>
                    <span id="grand-total-val">$646.80</span>
                  </div>
                </div>
      
                <div className="coupon-input-wrap">
                  <input type="text" placeholder="Promo / Coupon Code (Try: WELCOME20)" id="coupon-text-field" />
                  <button onclick="applySummaryCoupon()">Apply</button>
                </div>
      
                <button className="card-cta primary" onclick="showToast('Initiating secure payment gateway... 💳')">
                  <i className="fa-solid fa-lock"></i> Securely Checkout Now
                </button>
      
                <div className="checkout-trust-badges">
                  <span><i className="fa-solid fa-shield-halved"></i> SSL Encrypted</span>
                  <span><i className="fa-solid fa-circle-check"></i> Money Back Guarantee</span>
                </div>
              </div>
            </div>
      
            <div className="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
              <button className="action-btn view-btn" onclick="toggleCode('pc-code-4', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('pc-code-4', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
      
            <pre id="pc-code-4" className="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div className="sub-checkout-summary"&gt;
        &lt;h3&gt;Payment Checkout Summary&lt;/h3&gt;
        &lt;div className="checkout-items"&gt;
          &lt;div className="checkout-row"&gt;
            &lt;span className="label"&gt;Subscription Subtotal&lt;/span&gt;
            &lt;span&gt;$468.00&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="checkout-row discount" id="coupon-row" style="display: none;"&gt;
            &lt;span className="label"&gt;Discount (Code: WELCOME20)&lt;/span&gt;
            &lt;span&gt;-$117.60&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="checkout-row total"&gt;
            &lt;span className="label"&gt;Total Checkout Price&lt;/span&gt;
            &lt;span&gt;$646.80&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="coupon-input-wrap"&gt;
          &lt;input type="text" placeholder="Promo Code" id="coupon-text-field" /&gt;
          &lt;button onclick="applySummaryCoupon()"&gt;Apply&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* ================= 5. UPGRADE PLAN SECTIONS ================= */}
          <div className="component-card">
            <div className="card-top">
              <div>
                <h2 className="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
                  5. Upgrade Callouts & Modals
                </h2>
                <p className="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
                  Dashboard promotional banners designed to trigger immersive glassmorphic modal comparisons.
                </p>
              </div>
              <span className="card-tag" style="background: rgba(235, 104, 53, 0.1); color: var(--secondary-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Promotional</span>
            </div>
      
            <div style="margin: 2rem 0;">
              <div className="sub-upgrade-section">
                <div className="sub-upgrade-left">
                  <h3>Accelerate with Pro Tiers <span className="badge">Recommended</span></h3>
                  <p>Your team is reaching the limit of the Starter Sandbox. Upgrade now to unlock massive multi-region active databases, AI-powered metric engines, and absolute priority engineer guidance.</p>
                </div>
                <div className="sub-upgrade-right">
                  <button className="sub-upgrade-btn" onclick="openUpgradeModal()">
                    <i className="fa-solid fa-rocket"></i> View Upgrade Tiers
                  </button>
                </div>
              </div>
            </div>
      
            <div className="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
              <button className="action-btn view-btn" onclick="toggleCode('pc-code-5', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('pc-code-5', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
      
            <pre id="pc-code-5" className="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div className="sub-upgrade-section"&gt;
        &lt;div className="sub-upgrade-left"&gt;
          &lt;h3&gt;Accelerate with Pro Tiers&lt;/h3&gt;
          &lt;p&gt;Unlock massive multi-region active databases...&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="sub-upgrade-btn" onclick="openUpgradeModal()"&gt;
          &lt;i className="fa-solid fa-rocket"&gt;&lt;/i&gt; View Upgrade Tiers
        &lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
        </div>
      
      </main>
    </>
  );
}
