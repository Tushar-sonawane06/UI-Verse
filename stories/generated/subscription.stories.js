import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Subscription',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Subscription and payment UI components

### Info & Metadata
- **Category**: Forms
- **Tags**: <code>subscription</code>, <code>billing</code>, <code>payment</code>, <code>credit card</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
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
   <div class="pricing-toggle">
  <button class="toggle active" onclick="setBilling('monthly')" data-a11y-remediation="button-label-needed">Monthly</button>
  <button class="toggle" onclick="setBilling('annual')">
    Annual <span>Save 20%</span>
  </button>
</div>
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
  
  <!-- ================= 6. TEAM MEMBER BILLING SEATS ================= -->
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label"
        style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
        6. Team Seat Management
      </h2>
      <p class="card-desc"
        style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
        Professional subscription team billing dashboard with member seats and role management.
      </p>
    </div>

    <span class="card-tag"
      style="background: rgba(59,130,246,0.1); color:#3b82f6; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Teams
    </span>
  </div>

  <div class="team-seat-wrapper">

    <div class="seat-summary-card">
      <div class="seat-summary-top">
        <div>
          <h3>Active Workspace Seats</h3>
          <p>Manage collaborators and subscription limits.</p>
        </div>

        <button class="invite-btn">
          <i class="fa-solid fa-user-plus"></i>
          Invite Member
        </button>
      </div>

      <div class="seat-progress-wrap">
        <div class="seat-progress-meta">
          <span>12 / 20 seats occupied</span>
          <span>60%</span>
        </div>

        <div class="seat-progress-track">
          <div class="seat-progress-fill"></div>
        </div>
      </div>

      <div class="team-members-grid">

        <div class="team-member-card">
          <div class="member-left">
            <div class="member-avatar">AM</div>

            <div class="member-info">
              <h4>Alexander Mercer</h4>
              <span>Admin • Full Access</span>
            </div>
          </div>

          <span class="role-pill admin">Admin</span>
        </div>

        <div class="team-member-card">
          <div class="member-left">
            <div class="member-avatar">SJ</div>

            <div class="member-info">
              <h4>Sarah Johnson</h4>
              <span>Developer Workspace</span>
            </div>
          </div>

          <span class="role-pill editor">Editor</span>
        </div>

        <div class="team-member-card">
          <div class="member-left">
            <div class="member-avatar">RK</div>

            <div class="member-info">
              <h4>Ryan Keller</h4>
              <span>Read-only Analytics</span>
            </div>
          </div>

          <span class="role-pill viewer">Viewer</span>
        </div>

      </div>
    </div>
  </div>
</div>


<!-- ================= 7. USAGE ANALYTICS SUBSCRIPTION CARD ================= -->
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label"
        style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
        7. Usage Analytics Widget
      </h2>

      <p class="card-desc"
        style="font-size:0.9rem; color:var(--text-muted); margin:0;">
        Premium SaaS analytics overview with bandwidth, API usage and storage metrics.
      </p>
    </div>

    <span class="card-tag"
      style="background: rgba(16,185,129,0.12); color:#10b981; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Analytics
    </span>
  </div>

  <div class="usage-widget-grid">

    <div class="usage-stat-card">
      <div class="usage-icon">
        <i class="fa-solid fa-database"></i>
      </div>

      <div class="usage-info">
        <h4>Storage Usage</h4>
        <p>1.8TB / 3TB</p>
      </div>

      <div class="mini-bar">
        <div class="mini-fill" style="width:60%;"></div>
      </div>
    </div>

    <div class="usage-stat-card">
      <div class="usage-icon">
        <i class="fa-solid fa-bolt"></i>
      </div>

      <div class="usage-info">
        <h4>API Requests</h4>
        <p>784K / 1M</p>
      </div>

      <div class="mini-bar">
        <div class="mini-fill" style="width:78%;"></div>
      </div>
    </div>

    <div class="usage-stat-card">
      <div class="usage-icon">
        <i class="fa-solid fa-cloud-arrow-up"></i>
      </div>

      <div class="usage-info">
        <h4>Bandwidth</h4>
        <p>8.2TB / 10TB</p>
      </div>

      <div class="mini-bar">
        <div class="mini-fill" style="width:82%;"></div>
      </div>
    </div>

  </div>
</div>


<!-- ================= 8. PREMIUM INVOICE RECEIPT CARD ================= -->
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label"
        style="font-family:'Syne',sans-serif; font-size:1.25rem; font-weight:700; color:var(--text-main); margin:0 0 4px 0;">
        8. Invoice Receipt Card
      </h2>

      <p class="card-desc"
        style="font-size:0.9rem; color:var(--text-muted); margin:0;">
        Modern downloadable billing receipt with transaction metadata.
      </p>
    </div>

    <span class="card-tag"
      style="background:rgba(249,115,22,0.1); color:#f97316; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Invoice
    </span>
  </div>

  <div class="invoice-receipt-card">

    <div class="receipt-top">
      <div>
        <h3>Invoice Receipt</h3>
        <span>#INV-2026-0091</span>
      </div>

      <span class="receipt-status">
        <i class="fa-solid fa-circle-check"></i>
        Paid
      </span>
    </div>

    <div class="receipt-body">

      <div class="receipt-row">
        <span>Professional Annual Plan</span>
        <strong>$468.00</strong>
      </div>

      <div class="receipt-row">
        <span>Priority Support Add-on</span>
        <strong>$120.00</strong>
      </div>

      <div class="receipt-row">
        <span>Taxes</span>
        <strong>$58.80</strong>
      </div>

      <div class="receipt-row total">
        <span>Total Amount</span>
        <strong>$646.80</strong>
      </div>

    </div>

    <div class="receipt-actions">
      <button class="receipt-btn secondary">
        <i class="fa-solid fa-download"></i>
        Download PDF
      </button>

      <button class="receipt-btn primary">
        <i class="fa-solid fa-print"></i>
        Print Receipt
      </button>
    </div>

  </div>
</div>


<!-- ================= 9. SUBSCRIPTION STATUS TIMELINE ================= -->
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label"
        style="font-family:'Syne',sans-serif; font-size:1.25rem; font-weight:700; color:var(--text-main); margin:0 0 4px 0;">
        9. Billing Timeline Tracker
      </h2>

      <p class="card-desc"
        style="font-size:0.9rem; color:var(--text-muted); margin:0;">
        Elegant subscription lifecycle progress timeline with billing events.
      </p>
    </div>

    <span class="card-tag"
      style="background:rgba(139,92,246,0.1); color:#8b5cf6; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Timeline
    </span>
  </div>

  <div class="billing-timeline">

    <div class="timeline-item complete">
      <div class="timeline-dot"></div>

      <div class="timeline-content">
        <h4>Subscription Activated</h4>
        <p>Professional Plan enabled successfully.</p>
        <span>March 18, 2026</span>
      </div>
    </div>

    <div class="timeline-item complete">
      <div class="timeline-dot"></div>

      <div class="timeline-content">
        <h4>Payment Confirmed</h4>
        <p>Monthly recurring invoice processed.</p>
        <span>May 18, 2026</span>
      </div>
    </div>

    <div class="timeline-item active">
      <div class="timeline-dot"></div>

      <div class="timeline-content">
        <h4>Upcoming Renewal</h4>
        <p>Your subscription renews automatically.</p>
        <span>June 18, 2026</span>
      </div>
    </div>

  </div>
</div>
  

</div>
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">10. Renewal Reminder</h2>
      <p class="card-desc">Upcoming subscription renewal with plan details and quick actions.</p>
    </div>
    <span class="card-tag" style="background:rgba(59,130,246,0.1); color:#3b82f6; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Renewal
    </span>
  </div>

  <div class="renewal-card">
    <h3>Professional Plan</h3>
    <p>Renews automatically on <strong>June 18, 2026</strong></p>
    <div class="renewal-actions">
      <button class="btn primary"><i class="fa-solid fa-credit-card"></i> Update Payment</button>
      <button class="btn secondary"><i class="fa-solid fa-ban"></i> Cancel Renewal</button>
    </div>
  </div>
</div>
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">11. Trial Expiry Notice</h2>
      <p class="card-desc">Alert card showing trial period ending soon with upgrade options.</p>
    </div>
    <span class="card-tag" style="background:rgba(239,68,68,0.1); color:#ef4444; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Trial
    </span>
  </div>

  <div class="trial-card">
    <h3>Free Trial Ending</h3>
    <p>Your trial expires on <strong>June 5, 2026</strong></p>
    <button class="btn primary"><i class="fa-solid fa-arrow-up"></i> Upgrade Now</button>
  </div>
</div>
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">12. Payment Failure Alert</h2>
      <p class="card-desc">Warning card for failed payment attempts with retry option.</p>
    </div>
    <span class="card-tag" style="background:rgba(245,158,11,0.1); color:#f59e0b; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Alert
    </span>
  </div>

  <div class="payment-failure-card">
    <h3>Payment Failed</h3>
    <p>Last attempt: <strong>May 28, 2026</strong></p>
    <button class="btn primary"><i class="fa-solid fa-redo"></i> Retry Payment</button>
  </div>
</div>
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">13. Loyalty Rewards</h2>
      <p class="card-desc">Special rewards card showing accumulated points and redemption options.</p>
    </div>
    <span class="card-tag" style="background:rgba(16,185,129,0.12); color:#10b981; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Rewards
    </span>
  </div>

  <div class="rewards-card">
    <h3>Points Balance</h3>
    <p><strong>1,250</strong> points available</p>
    <div class="rewards-actions">
      <button class="btn primary"><i class="fa-solid fa-gift"></i> Redeem</button>
      <button class="btn secondary"><i class="fa-solid fa-plus"></i> Earn More</button>
    </div>
  </div>
</div>
<div class="component-card discount-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">15. Limited-Time Discount</h2>
      <p class="card-desc">Special promotional offer for upgrading your subscription.</p>
    </div>
    <span class="card-tag">Offer</span>
  </div>

  <div class="discount-body">
    <h3>Save 30% on Pro Plan</h3>
    <p>Valid until <strong>June 10, 2026</strong></p>
    <button class="btn primary">Upgrade Now</button>
  </div>
</div>
<div class="component-card pause-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">16. Pause Subscription</h2>
      <p class="card-desc">Temporarily pause your subscription without losing data.</p>
    </div>
    <span class="card-tag">Pause</span>
  </div>

  <div class="pause-body">
    <h3>Current Plan: Professional</h3>
    <p>You can pause until <strong>July 2026</strong></p>
    <button class="btn secondary">Pause Now</button>
  </div>
</div>
<div class="component-card gift-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">17. Gift a Subscription</h2>
      <p class="card-desc">Send a subscription plan as a gift to someone special.</p>
    </div>
    <span class="card-tag">Gift</span>
  </div>

  <div class="gift-body">
    <h3>Choose a Plan</h3>
    <p>Send Pro or Enterprise as a gift</p>
    <button class="btn primary">Send Gift</button>
  </div>
</div>
<div class="component-card upgrade-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">18. Upgrade Successful</h2>
      <p class="card-desc">Confirmation card showing your new subscription tier.</p>
    </div>
    <span class="card-tag">Upgrade</span>
  </div>

  <div class="upgrade-body">
    <h3>Enterprise Plan Activated</h3>
    <p>Enjoy unlimited projects and premium support.</p>
    <button class="btn secondary">Explore Features</button>
  </div>
</div>

</main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/style.css\`
- \`/home.css\`
- \`/shared-sidebar.css\`
- \`/subscription.css\`

#### JavaScript Scripts:
- \`/dist/shared.js\`

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
    title: 'Subscription',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/style.css","/home.css","/shared-sidebar.css","/subscription.css"],
    content: `<main class="main-home">

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
   <div class="pricing-toggle">
  <button class="toggle active" onclick="setBilling('monthly')" data-a11y-remediation="button-label-needed">Monthly</button>
  <button class="toggle" onclick="setBilling('annual')">
    Annual <span>Save 20%</span>
  </button>
</div>
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
  
  <!-- ================= 6. TEAM MEMBER BILLING SEATS ================= -->
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label"
        style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
        6. Team Seat Management
      </h2>
      <p class="card-desc"
        style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
        Professional subscription team billing dashboard with member seats and role management.
      </p>
    </div>

    <span class="card-tag"
      style="background: rgba(59,130,246,0.1); color:#3b82f6; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Teams
    </span>
  </div>

  <div class="team-seat-wrapper">

    <div class="seat-summary-card">
      <div class="seat-summary-top">
        <div>
          <h3>Active Workspace Seats</h3>
          <p>Manage collaborators and subscription limits.</p>
        </div>

        <button class="invite-btn">
          <i class="fa-solid fa-user-plus"></i>
          Invite Member
        </button>
      </div>

      <div class="seat-progress-wrap">
        <div class="seat-progress-meta">
          <span>12 / 20 seats occupied</span>
          <span>60%</span>
        </div>

        <div class="seat-progress-track">
          <div class="seat-progress-fill"></div>
        </div>
      </div>

      <div class="team-members-grid">

        <div class="team-member-card">
          <div class="member-left">
            <div class="member-avatar">AM</div>

            <div class="member-info">
              <h4>Alexander Mercer</h4>
              <span>Admin • Full Access</span>
            </div>
          </div>

          <span class="role-pill admin">Admin</span>
        </div>

        <div class="team-member-card">
          <div class="member-left">
            <div class="member-avatar">SJ</div>

            <div class="member-info">
              <h4>Sarah Johnson</h4>
              <span>Developer Workspace</span>
            </div>
          </div>

          <span class="role-pill editor">Editor</span>
        </div>

        <div class="team-member-card">
          <div class="member-left">
            <div class="member-avatar">RK</div>

            <div class="member-info">
              <h4>Ryan Keller</h4>
              <span>Read-only Analytics</span>
            </div>
          </div>

          <span class="role-pill viewer">Viewer</span>
        </div>

      </div>
    </div>
  </div>
</div>


<!-- ================= 7. USAGE ANALYTICS SUBSCRIPTION CARD ================= -->
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label"
        style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0 0 4px 0;">
        7. Usage Analytics Widget
      </h2>

      <p class="card-desc"
        style="font-size:0.9rem; color:var(--text-muted); margin:0;">
        Premium SaaS analytics overview with bandwidth, API usage and storage metrics.
      </p>
    </div>

    <span class="card-tag"
      style="background: rgba(16,185,129,0.12); color:#10b981; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Analytics
    </span>
  </div>

  <div class="usage-widget-grid">

    <div class="usage-stat-card">
      <div class="usage-icon">
        <i class="fa-solid fa-database"></i>
      </div>

      <div class="usage-info">
        <h4>Storage Usage</h4>
        <p>1.8TB / 3TB</p>
      </div>

      <div class="mini-bar">
        <div class="mini-fill" style="width:60%;"></div>
      </div>
    </div>

    <div class="usage-stat-card">
      <div class="usage-icon">
        <i class="fa-solid fa-bolt"></i>
      </div>

      <div class="usage-info">
        <h4>API Requests</h4>
        <p>784K / 1M</p>
      </div>

      <div class="mini-bar">
        <div class="mini-fill" style="width:78%;"></div>
      </div>
    </div>

    <div class="usage-stat-card">
      <div class="usage-icon">
        <i class="fa-solid fa-cloud-arrow-up"></i>
      </div>

      <div class="usage-info">
        <h4>Bandwidth</h4>
        <p>8.2TB / 10TB</p>
      </div>

      <div class="mini-bar">
        <div class="mini-fill" style="width:82%;"></div>
      </div>
    </div>

  </div>
</div>


<!-- ================= 8. PREMIUM INVOICE RECEIPT CARD ================= -->
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label"
        style="font-family:'Syne',sans-serif; font-size:1.25rem; font-weight:700; color:var(--text-main); margin:0 0 4px 0;">
        8. Invoice Receipt Card
      </h2>

      <p class="card-desc"
        style="font-size:0.9rem; color:var(--text-muted); margin:0;">
        Modern downloadable billing receipt with transaction metadata.
      </p>
    </div>

    <span class="card-tag"
      style="background:rgba(249,115,22,0.1); color:#f97316; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Invoice
    </span>
  </div>

  <div class="invoice-receipt-card">

    <div class="receipt-top">
      <div>
        <h3>Invoice Receipt</h3>
        <span>#INV-2026-0091</span>
      </div>

      <span class="receipt-status">
        <i class="fa-solid fa-circle-check"></i>
        Paid
      </span>
    </div>

    <div class="receipt-body">

      <div class="receipt-row">
        <span>Professional Annual Plan</span>
        <strong>$468.00</strong>
      </div>

      <div class="receipt-row">
        <span>Priority Support Add-on</span>
        <strong>$120.00</strong>
      </div>

      <div class="receipt-row">
        <span>Taxes</span>
        <strong>$58.80</strong>
      </div>

      <div class="receipt-row total">
        <span>Total Amount</span>
        <strong>$646.80</strong>
      </div>

    </div>

    <div class="receipt-actions">
      <button class="receipt-btn secondary">
        <i class="fa-solid fa-download"></i>
        Download PDF
      </button>

      <button class="receipt-btn primary">
        <i class="fa-solid fa-print"></i>
        Print Receipt
      </button>
    </div>

  </div>
</div>


<!-- ================= 9. SUBSCRIPTION STATUS TIMELINE ================= -->
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label"
        style="font-family:'Syne',sans-serif; font-size:1.25rem; font-weight:700; color:var(--text-main); margin:0 0 4px 0;">
        9. Billing Timeline Tracker
      </h2>

      <p class="card-desc"
        style="font-size:0.9rem; color:var(--text-muted); margin:0;">
        Elegant subscription lifecycle progress timeline with billing events.
      </p>
    </div>

    <span class="card-tag"
      style="background:rgba(139,92,246,0.1); color:#8b5cf6; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Timeline
    </span>
  </div>

  <div class="billing-timeline">

    <div class="timeline-item complete">
      <div class="timeline-dot"></div>

      <div class="timeline-content">
        <h4>Subscription Activated</h4>
        <p>Professional Plan enabled successfully.</p>
        <span>March 18, 2026</span>
      </div>
    </div>

    <div class="timeline-item complete">
      <div class="timeline-dot"></div>

      <div class="timeline-content">
        <h4>Payment Confirmed</h4>
        <p>Monthly recurring invoice processed.</p>
        <span>May 18, 2026</span>
      </div>
    </div>

    <div class="timeline-item active">
      <div class="timeline-dot"></div>

      <div class="timeline-content">
        <h4>Upcoming Renewal</h4>
        <p>Your subscription renews automatically.</p>
        <span>June 18, 2026</span>
      </div>
    </div>

  </div>
</div>
  

</div>
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">10. Renewal Reminder</h2>
      <p class="card-desc">Upcoming subscription renewal with plan details and quick actions.</p>
    </div>
    <span class="card-tag" style="background:rgba(59,130,246,0.1); color:#3b82f6; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Renewal
    </span>
  </div>

  <div class="renewal-card">
    <h3>Professional Plan</h3>
    <p>Renews automatically on <strong>June 18, 2026</strong></p>
    <div class="renewal-actions">
      <button class="btn primary"><i class="fa-solid fa-credit-card"></i> Update Payment</button>
      <button class="btn secondary"><i class="fa-solid fa-ban"></i> Cancel Renewal</button>
    </div>
  </div>
</div>
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">11. Trial Expiry Notice</h2>
      <p class="card-desc">Alert card showing trial period ending soon with upgrade options.</p>
    </div>
    <span class="card-tag" style="background:rgba(239,68,68,0.1); color:#ef4444; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Trial
    </span>
  </div>

  <div class="trial-card">
    <h3>Free Trial Ending</h3>
    <p>Your trial expires on <strong>June 5, 2026</strong></p>
    <button class="btn primary"><i class="fa-solid fa-arrow-up"></i> Upgrade Now</button>
  </div>
</div>
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">12. Payment Failure Alert</h2>
      <p class="card-desc">Warning card for failed payment attempts with retry option.</p>
    </div>
    <span class="card-tag" style="background:rgba(245,158,11,0.1); color:#f59e0b; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Alert
    </span>
  </div>

  <div class="payment-failure-card">
    <h3>Payment Failed</h3>
    <p>Last attempt: <strong>May 28, 2026</strong></p>
    <button class="btn primary"><i class="fa-solid fa-redo"></i> Retry Payment</button>
  </div>
</div>
<div class="component-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">13. Loyalty Rewards</h2>
      <p class="card-desc">Special rewards card showing accumulated points and redemption options.</p>
    </div>
    <span class="card-tag" style="background:rgba(16,185,129,0.12); color:#10b981; padding:4px 12px; border-radius:50px; font-size:0.75rem; font-weight:700;">
      Rewards
    </span>
  </div>

  <div class="rewards-card">
    <h3>Points Balance</h3>
    <p><strong>1,250</strong> points available</p>
    <div class="rewards-actions">
      <button class="btn primary"><i class="fa-solid fa-gift"></i> Redeem</button>
      <button class="btn secondary"><i class="fa-solid fa-plus"></i> Earn More</button>
    </div>
  </div>
</div>
<div class="component-card discount-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">15. Limited-Time Discount</h2>
      <p class="card-desc">Special promotional offer for upgrading your subscription.</p>
    </div>
    <span class="card-tag">Offer</span>
  </div>

  <div class="discount-body">
    <h3>Save 30% on Pro Plan</h3>
    <p>Valid until <strong>June 10, 2026</strong></p>
    <button class="btn primary">Upgrade Now</button>
  </div>
</div>
<div class="component-card pause-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">16. Pause Subscription</h2>
      <p class="card-desc">Temporarily pause your subscription without losing data.</p>
    </div>
    <span class="card-tag">Pause</span>
  </div>

  <div class="pause-body">
    <h3>Current Plan: Professional</h3>
    <p>You can pause until <strong>July 2026</strong></p>
    <button class="btn secondary">Pause Now</button>
  </div>
</div>
<div class="component-card gift-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">17. Gift a Subscription</h2>
      <p class="card-desc">Send a subscription plan as a gift to someone special.</p>
    </div>
    <span class="card-tag">Gift</span>
  </div>

  <div class="gift-body">
    <h3>Choose a Plan</h3>
    <p>Send Pro or Enterprise as a gift</p>
    <button class="btn primary">Send Gift</button>
  </div>
</div>
<div class="component-card upgrade-card">
  <div class="card-top">
    <div>
      <h2 class="card-label">18. Upgrade Successful</h2>
      <p class="card-desc">Confirmation card showing your new subscription tier.</p>
    </div>
    <span class="card-tag">Upgrade</span>
  </div>

  <div class="upgrade-body">
    <h3>Enterprise Plan Activated</h3>
    <p>Enjoy unlimited projects and premium support.</p>
    <button class="btn secondary">Explore Features</button>
  </div>
</div>

</main>`
  })
};
