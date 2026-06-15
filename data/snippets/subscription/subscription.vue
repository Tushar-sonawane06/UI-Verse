<template>
<main class="main-home">

  <!-- ================= HERO ================= -->
  <div class="sub-hero">
    <div class="breadcrumb">
      <a href="index.html">Home</a>
      <i class="fa-solid fa-chevron-right"></i>
      <span>Subscription</span>
    </div>
    <h1 class="page-title">Subscription & Billing Components</h1>
    <p class="page-desc">
      Premium SaaS subscription plan comparisons, interactive billing panel states, checkouts, and upgrade widgets with smooth animations and complete Dark Mode styling.
    </p>
    <div class="page-meta">
      <span class="meta-badge"><i class="fa-solid fa-credit-card"></i> 5 Premium UI Components</span>
      <span class="meta-badge"><i class="fa-solid fa-sliders"></i> Fully Responsive</span>
      <span class="meta-badge"><i class="fa-solid fa-moon"></i> Dark & Light support</span>
    </div>
  </div>

  <div class="sub-showcase-container">

    <!-- ================= 1. PRICING CARDS WITH BILLING TOGGLE ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
            1. Premium Pricing Cards
          </h2>
          <p class="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
            Responsive plan-tier card layout with a monthly/annually dynamic billing state toggle and glow effects.
          </p>
        </div>
        <span class="card-tag" style="background: rgba(123, 97, 255, 0.1); color: var(--primary-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Interactive</span>
      </div>

      <div class="sub-pricing-section" style="margin: 2rem 0;">
        <div class="sub-billing-toggle-wrap">
          <button class="sub-period-btn active" onclick="toggleBillingPeriod('monthly')">Monthly</button>
          <button class="sub-period-btn" onclick="toggleBillingPeriod('annual')">
            Annually
            <span class="discount-tag">Save 20%</span>
          </button>
        </div>

        <div class="sub-pricing-grid">
          <!-- Card 1: Starter -->
          <div class="sub-plan-card">
            <h3>Starter</h3>
            <p class="tagline">Perfect for personal sandbox experiments.</p>
            <div class="price-wrap">
              <span class="price" id="price-starter" data-monthly="$19" data-annual="$15">$19</span>
              <span class="period">/ month</span>
            </div>
            <ul class="features-list">
              <li><i class="fa-solid fa-check"></i> 5 Projects sandbox</li>
              <li><i class="fa-solid fa-check"></i> Standard community support</li>
              <li><i class="fa-solid fa-check"></i> Basic analytics suite</li>
              <li class="unsupported"><i class="fa-solid fa-xmark"></i> Custom branding layers</li>
              <li class="unsupported"><i class="fa-solid fa-xmark"></i> Advanced multi-region databases</li>
            </ul>
            <button class="card-cta secondary">Get Started</button>
          </div>

          <!-- Card 2: Pro (Featured) -->
          <div class="sub-plan-card featured">
            <span class="featured-badge">Featured</span>
            <h3>Professional</h3>
            <p class="tagline">Ideal for growing teams and startups.</p>
            <div class="price-wrap">
              <span class="price" id="price-pro" data-monthly="$49" data-annual="$39">$49</span>
              <span class="period">/ month</span>
            </div>
            <ul class="features-list">
              <li><i class="fa-solid fa-check"></i> Unlimited active workspaces</li>
              <li><i class="fa-solid fa-check"></i> 24/7 dedicated support</li>
              <li><i class="fa-solid fa-check"></i> Enterprise analytics dashboards</li>
              <li><i class="fa-solid fa-check"></i> Custom branding layers</li>
              <li class="unsupported"><i class="fa-solid fa-xmark"></i> SLA 99.99% uptime guarantee</li>
            </ul>
            <button class="card-cta primary">Choose Professional</button>
          </div>

          <!-- Card 3: Enterprise -->
          <div class="sub-plan-card">
            <h3>Enterprise</h3>
            <p class="tagline">Tailored solutions for major companies.</p>
            <div class="price-wrap">
              <span class="price" id="price-enterprise" data-monthly="$99" data-annual="$79">$99</span>
              <span class="period">/ month</span>
            </div>
            <ul class="features-list">
              <li><i class="fa-solid fa-check"></i> Multi-tenant governance</li>
              <li><i class="fa-solid fa-check"></i> White glove dedicated engineer</li>
              <li><i class="fa-solid fa-check"></i> Custom AI metrics engine</li>
              <li><i class="fa-solid fa-check"></i> Custom branding layers</li>
              <li><i class="fa-solid fa-check"></i> SLA 99.99% uptime guarantee</li>
            </ul>
            <button class="card-cta secondary">Request Custom Quote</button>
          </div>
        </div>
      </div>

      <div class="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
        <button class="action-btn view-btn" onclick="toggleCode('pc-code-1', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('pc-code-1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>

      <pre id="pc-code-1" class="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div class="sub-pricing-section"&gt;
  &lt;div class="sub-billing-toggle-wrap"&gt;
    &lt;button class="sub-period-btn active" onclick="toggleBillingPeriod('monthly')"&gt;Monthly&lt;/button&gt;
    &lt;button class="sub-period-btn" onclick="toggleBillingPeriod('annual')"&gt;Annually &lt;span class="discount-tag"&gt;Save 20%&lt;/span&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="sub-pricing-grid"&gt;
    &lt;div class="sub-plan-card"&gt;
      &lt;h3&gt;Starter&lt;/h3&gt;
      &lt;span class="price" id="price-starter" data-monthly="$19" data-annual="$15"&gt;$19&lt;/span&gt;
      ...
    &lt;/div&gt;
    &lt;div class="sub-plan-card featured"&gt;
      &lt;span class="featured-badge"&gt;Featured&lt;/span&gt;
      &lt;h3&gt;Professional&lt;/h3&gt;
      &lt;span class="price" id="price-pro" data-monthly="$49" data-annual="$39"&gt;$49&lt;/span&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ================= 2. BILLING PANELS (DASHBOARD WIDGETS) ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
            2. Dashboard Billing Panels
          </h2>
          <p class="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
            Dashboard settings components displaying core subscription statuses, graphic credit cards, and invoice lists.
          </p>
        </div>
        <span class="card-tag" style="background: rgba(16, 185, 129, 0.1); color: var(--success-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Dashboard</span>
      </div>

      <div class="sub-billing-panel-grid" style="margin: 2rem 0;">
        <!-- Left Side: Status & Usage -->
        <div class="sub-billing-card">
          <div>
            <h3 class="panel-title"><i class="fa-solid fa-sliders"></i> Account Billing Overview</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin: 4px 0 0 0;">Manage your renewal cycles, invoices, and api limit limits.</p>
          </div>

          <div class="panel-section">
            <span class="section-header">Current Subscription Plan</span>
            <div class="sub-current-plan-banner">
              <div class="sub-current-plan-info">
                <h4>Professional Plan <span style="font-size: 0.7rem; padding: 2px 8px; background: rgba(16, 185, 129, 0.12); color: #10b981; border-radius: 50px; font-weight: 700;">Active</span></h4>
                <p>Next renewal payment auto-processes on <strong>June 18, 2026</strong> ($49.00/mo).</p>
              </div>
              <button class="card-cta secondary" style="width: auto; padding: 8px 16px; margin: 0; font-size: 0.85rem;">Change Cycle</button>
            </div>
          </div>

          <div class="panel-section">
            <span class="section-header">API Quota Limit</span>
            <div class="sub-usage-bar-wrap">
              <div class="sub-usage-bar-meta">
                <span>Monthly Endpoint Requests</span>
                <span><span class="highlight">78,412</span> / 100,000 requests</span>
              </div>
              <div class="sub-usage-track">
                <div class="sub-usage-fill" style="width: 78.4%;"></div>
              </div>
            </div>
          </div>

          <div class="panel-section">
            <span class="section-header">Billing & Transaction Invoices</span>
            <div class="sub-invoice-container">
              <table class="sub-invoice-table">
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
                    <td><span class="status-pill success"><i class="fa-solid fa-circle-check"></i> Paid</span></td>
                    <td><button class="invoice-download-btn"><i class="fa-solid fa-download"></i> PDF</button></td>
                  </tr>
                  <tr>
                    <td><strong>INV-2026-003</strong></td>
                    <td>Apr 18, 2026</td>
                    <td>$49.00</td>
                    <td><span class="status-pill success"><i class="fa-solid fa-circle-check"></i> Paid</span></td>
                    <td><button class="invoice-download-btn"><i class="fa-solid fa-download"></i> PDF</button></td>
                  </tr>
                  <tr>
                    <td><strong>INV-2026-002</strong></td>
                    <td>Mar 18, 2026</td>
                    <td>$49.00</td>
                    <td><span class="status-pill success"><i class="fa-solid fa-circle-check"></i> Paid</span></td>
                    <td><button class="invoice-download-btn"><i class="fa-solid fa-download"></i> PDF</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Right Side: Graphic Payment Card Manager -->
        <div class="sub-cc-side-panel">
          <!-- Graphic Credit Card -->
          <div class="sub-credit-card-ui">
            <div class="cc-brand-header">
              <div class="cc-chip"></div>
              <i class="fab fa-cc-visa" style="font-size: 2.2rem;"></i>
            </div>
            <div class="cc-number">•••• •••• •••• 9841</div>
            <div class="cc-footer">
              <div class="cc-holder-wrap">
                <label>Cardholder Name</label>
                <span>ALEXANDER MERCER</span>
              </div>
              <div class="cc-expiry-wrap">
                <label>Expires</label>
                <span>08/29</span>
              </div>
            </div>
          </div>

          <!-- Payment Card options list -->
          <div class="payment-methods-list">
            <div class="payment-method-item active">
              <div class="payment-method-left">
                <i class="fab fa-cc-visa card-icon"></i>
                <div>
                  <span class="card-digits">Visa ending in 9841</span>
                  <span class="card-expiry">Primary</span>
                </div>
              </div>
              <i class="fa-solid fa-circle-check" style="color: var(--primary-color);"></i>
            </div>

            <div class="payment-method-item">
              <div class="payment-method-left">
                <i class="fab fa-cc-mastercard card-icon"></i>
                <div>
                  <span class="card-digits">Mastercard ending in 3042</span>
                  <span class="card-expiry">Backup</span>
                </div>
              </div>
              <i class="fa-regular fa-circle" style="color: var(--text-muted);"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
        <button class="action-btn view-btn" onclick="toggleCode('pc-code-2', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('pc-code-2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>

      <pre id="pc-code-2" class="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div class="sub-billing-panel-grid"&gt;
  &lt;!-- Credit Card UI --&gt;
  &lt;div class="sub-credit-card-ui"&gt;
    &lt;div class="cc-brand-header"&gt;
      &lt;div class="cc-chip"&gt;&lt;/div&gt;
      &lt;i class="fab fa-cc-visa"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="cc-number"&gt;•••• •••• •••• 9841&lt;/div&gt;
    &lt;div class="cc-footer"&gt;
      &lt;div class="cc-holder-wrap"&gt;
        &lt;label&gt;Cardholder Name&lt;/label&gt;
        &lt;span&gt;ALEXANDER MERCER&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ================= 3. SUBSCRIPTION PLAN CARDS (LIST VIEW) ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
            3. Inline Plan Selectors
          </h2>
          <p class="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
            Dashboard settings radio card listing to quickly select or switch between core service plans.
          </p>
        </div>
        <span class="card-tag" style="background: rgba(123, 97, 255, 0.1); color: var(--primary-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Settings</span>
      </div>

      <div class="sub-plan-list" style="margin: 2rem 0;">
        <!-- Plan List Item 1: Starter -->
        <div class="sub-plan-list-item" onclick="selectPlanListItem(this)">
          <div class="radio-indicator"></div>
          <div class="sub-plan-item-details">
            <div class="sub-plan-item-main">
              <h4>Starter Tier</h4>
              <p>Great for single developers starting dashboard deployments.</p>
            </div>
            <div class="sub-plan-item-pricing">
              <span class="price">$19</span>
              <span class="period">/ month</span>
            </div>
          </div>
        </div>

        <!-- Plan List Item 2: Professional -->
        <div class="sub-plan-list-item active" onclick="selectPlanListItem(this)">
          <div class="radio-indicator"></div>
          <div class="sub-plan-item-details">
            <div class="sub-plan-item-main">
              <h4>Professional Plan <span class="current-plan-tag">Current Plan</span></h4>
              <p>Unlimited projects, priority 24/7 technical customer support.</p>
            </div>
            <div class="sub-plan-item-pricing">
              <span class="price">$49</span>
              <span class="period">/ month</span>
            </div>
          </div>
        </div>

        <!-- Plan List Item 3: Enterprise -->
        <div class="sub-plan-list-item" onclick="selectPlanListItem(this)">
          <div class="radio-indicator"></div>
          <div class="sub-plan-item-details">
            <div class="sub-plan-item-main">
              <h4>Enterprise Tier</h4>
              <p>Premium compliance security, fully custom deployment options.</p>
            </div>
            <div class="sub-plan-item-pricing">
              <span class="price">$99</span>
              <span class="period">/ month</span>
            </div>
          </div>
        </div>
      </div>

      <div class="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
        <button class="action-btn view-btn" onclick="toggleCode('pc-code-3', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('pc-code-3', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>

      <pre id="pc-code-3" class="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div class="sub-plan-list"&gt;
  &lt;div class="sub-plan-list-item active" onclick="selectPlanListItem(this)"&gt;
    &lt;div class="radio-indicator"&gt;&lt;/div&gt;
    &lt;div class="sub-plan-item-details"&gt;
      &lt;div class="sub-plan-item-main"&gt;
        &lt;h4&gt;Professional Plan &lt;span class="current-plan-tag"&gt;Current Plan&lt;/span&gt;&lt;/h4&gt;
        &lt;p&gt;Unlimited projects, priority 24/7 technical customer support.&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="sub-plan-item-pricing"&gt;
        &lt;span class="price"&gt;$49&lt;/span&gt;
        &lt;span class="period"&gt;/ month&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ================= 4. PAYMENT SUMMARY COMPONENTS (CHECKOUT CARD) ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
            4. Checkout Payment Summary
          </h2>
          <p class="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
            Highly conversion-optimized itemized price breakdowns with coupon fields and secure payments.
          </p>
        </div>
        <span class="card-tag" style="background: rgba(123, 97, 255, 0.1); color: var(--primary-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Checkout</span>
      </div>

      <div style="margin: 2rem 0;">
        <div class="sub-checkout-summary">
          <h3>Payment Checkout Summary</h3>
          <div class="checkout-items">
            <div class="checkout-row">
              <span class="label">Professional Subscription (Annual)</span>
              <span>$468.00</span>
            </div>
            <div class="checkout-row">
              <span class="label">Priority Dedicated Support Add-on</span>
              <span>$120.00</span>
            </div>
            <!-- Dynamic Coupon Row -->
            <div class="checkout-row discount" id="coupon-row" style="display: none;">
              <span class="label">Discount (Code: <span id="coupon-code-span">WELCOME20</span>)</span>
              <span id="coupon-discount-val">-$117.60</span>
            </div>
            <div class="checkout-row">
              <span class="label">Estimated Taxes (10%)</span>
              <span id="tax-row-val">$58.80</span>
            </div>
            <div class="checkout-row total">
              <span class="label">Total Checkout Price</span>
              <span id="grand-total-val">$646.80</span>
            </div>
          </div>

          <div class="coupon-input-wrap">
            <input type="text" placeholder="Promo / Coupon Code (Try: WELCOME20)" id="coupon-text-field" />
            <button onclick="applySummaryCoupon()">Apply</button>
          </div>

          <button class="card-cta primary" onclick="showToast('Initiating secure payment gateway... 💳')">
            <i class="fa-solid fa-lock"></i> Securely Checkout Now
          </button>

          <div class="checkout-trust-badges">
            <span><i class="fa-solid fa-shield-halved"></i> SSL Encrypted</span>
            <span><i class="fa-solid fa-circle-check"></i> Money Back Guarantee</span>
          </div>
        </div>
      </div>

      <div class="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
        <button class="action-btn view-btn" onclick="toggleCode('pc-code-4', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('pc-code-4', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>

      <pre id="pc-code-4" class="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div class="sub-checkout-summary"&gt;
  &lt;h3&gt;Payment Checkout Summary&lt;/h3&gt;
  &lt;div class="checkout-items"&gt;
    &lt;div class="checkout-row"&gt;
      &lt;span class="label"&gt;Subscription Subtotal&lt;/span&gt;
      &lt;span&gt;$468.00&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="checkout-row discount" id="coupon-row" style="display: none;"&gt;
      &lt;span class="label"&gt;Discount (Code: WELCOME20)&lt;/span&gt;
      &lt;span&gt;-$117.60&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="checkout-row total"&gt;
      &lt;span class="label"&gt;Total Checkout Price&lt;/span&gt;
      &lt;span&gt;$646.80&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="coupon-input-wrap"&gt;
    &lt;input type="text" placeholder="Promo Code" id="coupon-text-field" /&gt;
    &lt;button onclick="applySummaryCoupon()"&gt;Apply&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ================= 5. UPGRADE PLAN SECTIONS ================= -->
    <div class="component-card">
      <div class="card-top">
        <div>
          <h2 class="card-label" style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
            5. Upgrade Callouts & Modals
          </h2>
          <p class="card-desc" style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
            Dashboard promotional banners designed to trigger immersive glassmorphic modal comparisons.
          </p>
        </div>
        <span class="card-tag" style="background: rgba(235, 104, 53, 0.1); color: var(--secondary-color); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;">Promotional</span>
      </div>

      <div style="margin: 2rem 0;">
        <div class="sub-upgrade-section">
          <div class="sub-upgrade-left">
            <h3>Accelerate with Pro Tiers <span class="badge">Recommended</span></h3>
            <p>Your team is reaching the limit of the Starter Sandbox. Upgrade now to unlock massive multi-region active databases, AI-powered metric engines, and absolute priority engineer guidance.</p>
          </div>
          <div class="sub-upgrade-right">
            <button class="sub-upgrade-btn" onclick="openUpgradeModal()">
              <i class="fa-solid fa-rocket"></i> View Upgrade Tiers
            </button>
          </div>
        </div>
      </div>

      <div class="actions" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: flex-end;">
        <button class="action-btn view-btn" onclick="toggleCode('pc-code-5', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('pc-code-5', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>

      <pre id="pc-code-5" class="code-block" style="display: none; background: #0f172a; color: #f1f5f9; padding: 1.2rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 1rem; overflow-x: auto;"><code>&lt;div class="sub-upgrade-section"&gt;
  &lt;div class="sub-upgrade-left"&gt;
    &lt;h3&gt;Accelerate with Pro Tiers&lt;/h3&gt;
    &lt;p&gt;Unlock massive multi-region active databases...&lt;/p&gt;
  &lt;/div&gt;
  &lt;button class="sub-upgrade-btn" onclick="openUpgradeModal()"&gt;
    &lt;i class="fa-solid fa-rocket"&gt;&lt;/i&gt; View Upgrade Tiers
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

  </div>

</main>
</template>

<script>
export default { name: 'Subscription' }
</script>
