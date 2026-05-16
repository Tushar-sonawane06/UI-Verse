<template>
<main class="main-home">

  <!-- Page Hero -->
  <div class="pricing-page-hero">
    <div class="breadcrumb">
      <a href="index.html">Home</a>
      <i class="fa-solid fa-chevron-right"></i>
      <span>Pricing</span>
    </div>
    <h1 class="page-title">Pricing Card Components</h1>
    <p class="page-desc">Ready-to-use SaaS pricing UI components — toggle between billing periods and copy the code instantly.</p>
    <div class="page-meta">
      <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 3 Plans</span>
      <span class="meta-badge"><i class="fa-solid fa-toggle-on"></i> Billing Toggle</span>
      <span class="meta-badge"><i class="fa-solid fa-code"></i> Pure HTML & CSS</span>
    </div>
  </div>

  <!-- ===== COMPONENT CARD — PRICING TABLE ===== -->
  <div class="component-card pricing-component">

    <div class="card-top">
      <span class="card-label">Interactive Pricing Table</span>
      <span class="card-tag tag-popular">Popular</span>
    </div>

    <p class="card-desc">A full SaaS pricing table with three plans, a monthly/quarterly/yearly billing toggle, feature lists, and a highlighted recommended plan. Click a period to see prices update live.</p>

    <!-- Billing Toggle -->
    <div class="billing-toggle-wrap">
      <div class="billing-toggle">
        <button class="toggle-btn active" data-period="month">Monthly</button>
        <button class="toggle-btn" data-period="quarter">Quarterly</button>
        <button class="toggle-btn" data-period="year">
          Yearly <span class="save-chip">Save 40%</span>
        </button>
      </div>
    </div>

    <!-- Pricing Cards Preview -->
    <div class="pricing-grid-preview">

      <!-- Free -->
      <div class="plan-card free-card">
        <div class="plan-name">Free</div>
        <p class="plan-tagline">For hobby projects</p>
        <div class="plan-price-wrap">
          <span class="plan-amount" data-month="$0" data-quarter="$0" data-year="$0">$0</span>
          <span class="plan-period">/ month</span>
        </div>
        <ul class="plan-features">
          <li><i class="fa-solid fa-check"></i> 3 projects</li>
          <li><i class="fa-solid fa-check"></i> Basic analytics</li>
          <li><i class="fa-solid fa-check"></i> Community support</li>
          <li class="muted"><i class="fa-solid fa-xmark"></i> Custom domains</li>
          <li class="muted"><i class="fa-solid fa-xmark"></i> Priority support</li>
        </ul>
        <button class="plan-btn plan-btn-outline">Get Started Free</button>
      </div>

      <!-- Pro (highlighted) -->
      <div class="plan-card pro-card">
        <div class="recommended-badge"><i class="fa-solid fa-star"></i> Most Popular</div>
        <div class="plan-name">Pro</div>
        <p class="plan-tagline">Best for scaling teams</p>
        <div class="plan-price-wrap">
          <span class="plan-old" data-month="$49" data-quarter="$44" data-year="$39">$49</span>
          <span class="plan-amount" data-month="$29" data-quarter="$26" data-year="$19">$29</span>
          <span class="plan-period">/ month</span>
        </div>
          <div class="pricing-grid">

  <!-- STARTER PLAN -->
  <div class="pricing-card starter">
    <div class="card-glow"></div>
    <div class="pricing-card-content">
      <div class="plan-header">
        <h3>Starter</h3>
        <p>Perfect for personal projects</p>
      </div>

      <div class="plan-price">
        <span class="old-price">$19</span>
        <span class="amount">$12</span>
      </div>

      <ul class="plan-features">
        <li><i class="fa-solid fa-check"></i> Basic analytics</li>
        <li><i class="fa-solid fa-check"></i> Custom domains</li>
        <li><i class="fa-solid fa-check"></i> Email support</li>
      </ul>

      <button class="plan-btn">Choose Starter</button>
    </div>
  </div>

  <!-- PRO PLAN -->
  <div class="pricing-card pro featured">
    <div class="popular-badge">Most Popular</div>
    <div class="card-glow"></div>

    <div class="pricing-card-content">
      <div class="plan-header">
        <h3>Pro</h3>
        <p>Best for scaling your business</p>
      </div>

      <div class="plan-price">
        <span class="old-price">$49</span>
        <span class="amount">$29</span>
      </div>

      <ul class="plan-features">
        <li><i class="fa-solid fa-check"></i> Advanced analytics</li>
        <li><i class="fa-solid fa-check"></i> Unlimited projects</li>
        <li><i class="fa-solid fa-check"></i> Priority support</li>
        <li><i class="fa-solid fa-check"></i> Team collaboration</li>
      </ul>

      <button class="plan-btn secondary">Choose Pro</button>
    </div>
  </div>

  <!-- BUSINESS PLAN -->
  <div class="pricing-card business">
    <div class="card-glow"></div>

    <div class="pricing-card-content">
      <div class="plan-header">
        <h3>Business</h3>
        <p>For growing startups & teams</p>
      </div>

      <div class="plan-price">
        <span class="old-price">$99</span>
        <span class="amount">$59</span>
      </div>

      <ul class="plan-features">
        <li><i class="fa-solid fa-check"></i> AI-powered insights</li>
        <li><i class="fa-solid fa-check"></i> Unlimited storage</li>
        <li><i class="fa-solid fa-check"></i> Dedicated manager</li>
        <li><i class="fa-solid fa-check"></i> 24/7 live support</li>
      </ul>

      <button class="plan-btn business-btn">Choose Business</button>
    </div>
  </div>

  <!-- ENTERPRISE PLAN -->
  <div class="pricing-card enterprise">
    <div class="card-glow"></div>

    <div class="pricing-card-content">
      <div class="plan-header">
        <h3>Enterprise</h3>
        <p>Built for large organizations</p>
      </div>

      <div class="plan-price">
        <span class="old-price">$199</span>
        <span class="amount">$129</span>
      </div>

      <ul class="plan-features">
        <li><i class="fa-solid fa-check"></i> Custom integrations</li>
        <li><i class="fa-solid fa-check"></i> Enterprise security</li>
        <li><i class="fa-solid fa-check"></i> Dedicated servers</li>
        <li><i class="fa-solid fa-check"></i> Premium onboarding</li>
      </ul>

      <button class="plan-btn enterprise-btn">Contact Sales</button>
    </div>
  </div>

</div>
        <ul class="plan-features">
          <li><i class="fa-solid fa-check"></i> Unlimited projects</li>
          <li><i class="fa-solid fa-check"></i> Advanced analytics</li>
          <li><i class="fa-solid fa-check"></i> Priority support</li>
          <li><i class="fa-solid fa-check"></i> Custom domains</li>
          <li class="muted"><i class="fa-solid fa-xmark"></i> White-label</li>
        </ul>
        <button class="plan-btn plan-btn-accent">Choose Pro</button>
      </div>

      <!-- Enterprise -->
      <div class="plan-card enterprise-card">
        <div class="plan-name">Enterprise</div>
        <p class="plan-tagline">For large organizations</p>
        <div class="plan-price-wrap">
          <span class="plan-old" data-month="$149" data-quarter="$134" data-year="$119">$149</span>
          <span class="plan-amount" data-month="$99" data-quarter="$89" data-year="$69">$99</span>
          <span class="plan-period">/ month</span>
        </div>
        <ul class="plan-features">
          <li><i class="fa-solid fa-check"></i> Everything in Pro</li>
          <li><i class="fa-solid fa-check"></i> White-label</li>
          <li><i class="fa-solid fa-check"></i> Dedicated manager</li>
          <li><i class="fa-solid fa-check"></i> SLA guarantee</li>
          <li><i class="fa-solid fa-check"></i> Custom integrations</li>
        </ul>
        <button class="plan-btn plan-btn-outline">Contact Sales</button>
      </div>

    </div><!-- /pricing-grid-preview -->

    <!-- Code Actions -->
    <div class="actions">
      <button class="action-btn view-btn" onclick="toggleCode('pc1', this)"><i class="fa-solid fa-code"></i> View Code</button>
      <button class="action-btn copy-btn" onclick="copyCode('pc1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
    </div>

    <footer class="footer">
      <div class="footer-card">
        <div class="footer-brand">
          <h2>UIverse</h2>
          <p>© 2026 UIverse. All rights reserved.</p>
          <div class="footer-socials">
            <span>🌐</span>
            <span>💼</span>
          </div>
        </div>
        <div class="footer-col">
          <h3>Pages</h3>
          <a href="pricing.html">Pricing</a>
          <a href="testimonials.html">Testimonials</a>
          <a href="alerts.html">Alerts</a>
        </div>

        <div class="simple-plan simple-plan-highlighted">
          <div class="simple-badge">Pro</div>
          <h4>Professional</h4>
          <div class="simple-price">$29<span>/mo</span></div>
          <ul>
            <li><i class="fa-solid fa-check"></i> Unlimited projects</li>
            <li><i class="fa-solid fa-check"></i> Priority support</li>
            <li><i class="fa-solid fa-check"></i> Advanced analytics</li>
          </ul>
          <button class="simple-btn simple-accent">Choose Pro</button>
        </div>

      </div>
    </div>

    <div class="actions">
      <button class="action-btn view-btn" onclick="toggleCode('pc2', this)"><i class="fa-solid fa-code"></i> View Code</button>
      <button class="action-btn copy-btn" onclick="copyCode('pc2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
    </div>
    <pre id="pc2" class="code-block"><code>&lt;div class="pricing-row"&gt;

  &lt;div class="plan"&gt;
    &lt;h4&gt;Starter&lt;/h4&gt;
    &lt;div class="price"&gt;$12&lt;span&gt;/mo&lt;/span&gt;&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;✓ 3 projects&lt;/li&gt;
      &lt;li&gt;✓ Email support&lt;/li&gt;
    &lt;/ul&gt;
    &lt;button&gt;Get Started&lt;/button&gt;
  &lt;/div&gt;

  &lt;div class="plan highlighted"&gt;
    &lt;span class="badge"&gt;Pro&lt;/span&gt;
    &lt;h4&gt;Professional&lt;/h4&gt;
    &lt;div class="price"&gt;$29&lt;span&gt;/mo&lt;/span&gt;&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;✓ Unlimited projects&lt;/li&gt;
      &lt;li&gt;✓ Priority support&lt;/li&gt;
    &lt;/ul&gt;
    &lt;button&gt;Choose Pro&lt;/button&gt;
  &lt;/div&gt;

&lt;/div&gt;

.pricing-row { display: flex; gap: 20px; }
.plan {
  flex: 1; background: #fff; border: 1px solid #ebebeb;
  border-radius: 16px; padding: 28px 24px; text-align: center;
}
.plan.highlighted {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border-color: rgba(108,92,231,0.4); color: #fff;
}
.price { font-size: 32px; font-weight: 800; color: #eb6835; }
.highlighted .price { color: #a29bfe; }</code></pre>
  </div>
  

</main>
</template>

<script>
export default { name: 'Pricing' }
</script>
