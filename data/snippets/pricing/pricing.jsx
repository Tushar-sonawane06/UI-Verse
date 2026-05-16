import React from 'react';

export default function pricing(){
  return (
    <>
      <main className="main-home">
      
        {/* Page Hero */}
        <div className="pricing-page-hero">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <i className="fa-solid fa-chevron-right"></i>
            <span>Pricing</span>
          </div>
          <h1 className="page-title">Pricing Card Components</h1>
          <p className="page-desc">Ready-to-use SaaS pricing UI components — toggle between billing periods and copy the code instantly.</p>
          <div className="page-meta">
            <span className="meta-badge"><i className="fa-solid fa-layer-group"></i> 3 Plans</span>
            <span className="meta-badge"><i className="fa-solid fa-toggle-on"></i> Billing Toggle</span>
            <span className="meta-badge"><i className="fa-solid fa-code"></i> Pure HTML & CSS</span>
          </div>
        </div>
      
        {/* ===== COMPONENT CARD — PRICING TABLE ===== */}
        <div className="component-card pricing-component">
      
          <div className="card-top">
            <span className="card-label">Interactive Pricing Table</span>
            <span className="card-tag tag-popular">Popular</span>
          </div>
      
          <p className="card-desc">A full SaaS pricing table with three plans, a monthly/quarterly/yearly billing toggle, feature lists, and a highlighted recommended plan. Click a period to see prices update live.</p>
      
          {/* Billing Toggle */}
          <div className="billing-toggle-wrap">
            <div className="billing-toggle">
              <button className="toggle-btn active" data-period="month">Monthly</button>
              <button className="toggle-btn" data-period="quarter">Quarterly</button>
              <button className="toggle-btn" data-period="year">
                Yearly <span className="save-chip">Save 40%</span>
              </button>
            </div>
          </div>
      
          {/* Pricing Cards Preview */}
          <div className="pricing-grid-preview">
      
            {/* Free */}
            <div className="plan-card free-card">
              <div className="plan-name">Free</div>
              <p className="plan-tagline">For hobby projects</p>
              <div className="plan-price-wrap">
                <span className="plan-amount" data-month="$0" data-quarter="$0" data-year="$0">$0</span>
                <span className="plan-period">/ month</span>
              </div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> 3 projects</li>
                <li><i className="fa-solid fa-check"></i> Basic analytics</li>
                <li><i className="fa-solid fa-check"></i> Community support</li>
                <li className="muted"><i className="fa-solid fa-xmark"></i> Custom domains</li>
                <li className="muted"><i className="fa-solid fa-xmark"></i> Priority support</li>
              </ul>
              <button className="plan-btn plan-btn-outline">Get Started Free</button>
            </div>
      
            {/* Pro (highlighted) */}
            <div className="plan-card pro-card">
              <div className="recommended-badge"><i className="fa-solid fa-star"></i> Most Popular</div>
              <div className="plan-name">Pro</div>
              <p className="plan-tagline">Best for scaling teams</p>
              <div className="plan-price-wrap">
                <span className="plan-old" data-month="$49" data-quarter="$44" data-year="$39">$49</span>
                <span className="plan-amount" data-month="$29" data-quarter="$26" data-year="$19">$29</span>
                <span className="plan-period">/ month</span>
              </div>
                <div className="pricing-grid">
      
        {/* STARTER PLAN */}
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
      
            <button className="plan-btn">Choose Starter</button>
          </div>
        </div>
      
        {/* PRO PLAN */}
        <div className="pricing-card pro featured">
          <div className="popular-badge">Most Popular</div>
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
      
            <button className="plan-btn secondary">Choose Pro</button>
          </div>
        </div>
      
        {/* BUSINESS PLAN */}
        <div className="pricing-card business">
          <div className="card-glow"></div>
      
          <div className="pricing-card-content">
            <div className="plan-header">
              <h3>Business</h3>
              <p>For growing startups & teams</p>
            </div>
      
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
      
            <button className="plan-btn business-btn">Choose Business</button>
          </div>
        </div>
      
        {/* ENTERPRISE PLAN */}
        <div className="pricing-card enterprise">
          <div className="card-glow"></div>
      
          <div className="pricing-card-content">
            <div className="plan-header">
              <h3>Enterprise</h3>
              <p>Built for large organizations</p>
            </div>
      
            <div className="plan-price">
              <span className="old-price">$199</span>
              <span className="amount">$129</span>
            </div>
      
            <ul className="plan-features">
              <li><i className="fa-solid fa-check"></i> Custom integrations</li>
              <li><i className="fa-solid fa-check"></i> Enterprise security</li>
              <li><i className="fa-solid fa-check"></i> Dedicated servers</li>
              <li><i className="fa-solid fa-check"></i> Premium onboarding</li>
            </ul>
      
            <button className="plan-btn enterprise-btn">Contact Sales</button>
          </div>
        </div>
      
      </div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Unlimited projects</li>
                <li><i className="fa-solid fa-check"></i> Advanced analytics</li>
                <li><i className="fa-solid fa-check"></i> Priority support</li>
                <li><i className="fa-solid fa-check"></i> Custom domains</li>
                <li className="muted"><i className="fa-solid fa-xmark"></i> White-label</li>
              </ul>
              <button className="plan-btn plan-btn-accent">Choose Pro</button>
            </div>
      
            {/* Enterprise */}
            <div className="plan-card enterprise-card">
              <div className="plan-name">Enterprise</div>
              <p className="plan-tagline">For large organizations</p>
              <div className="plan-price-wrap">
                <span className="plan-old" data-month="$149" data-quarter="$134" data-year="$119">$149</span>
                <span className="plan-amount" data-month="$99" data-quarter="$89" data-year="$69">$99</span>
                <span className="plan-period">/ month</span>
              </div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Everything in Pro</li>
                <li><i className="fa-solid fa-check"></i> White-label</li>
                <li><i className="fa-solid fa-check"></i> Dedicated manager</li>
                <li><i className="fa-solid fa-check"></i> SLA guarantee</li>
                <li><i className="fa-solid fa-check"></i> Custom integrations</li>
              </ul>
              <button className="plan-btn plan-btn-outline">Contact Sales</button>
            </div>
      
          </div>{/* /pricing-grid-preview */}
      
          {/* Code Actions */}
          <div className="actions">
            <button className="action-btn view-btn" onclick="toggleCode('pc1', this)"><i className="fa-solid fa-code"></i> View Code</button>
            <button className="action-btn copy-btn" onclick="copyCode('pc1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
          </div>
      
          <footer className="footer">
            <div className="footer-card">
              <div className="footer-brand">
                <h2>UIverse</h2>
                <p>© 2026 UIverse. All rights reserved.</p>
                <div className="footer-socials">
                  <span>🌐</span>
                  <span>💼</span>
                </div>
              </div>
              <div className="footer-col">
                <h3>Pages</h3>
                <a href="pricing.html">Pricing</a>
                <a href="testimonials.html">Testimonials</a>
                <a href="alerts.html">Alerts</a>
              </div>
      
              <div className="simple-plan simple-plan-highlighted">
                <div className="simple-badge">Pro</div>
                <h4>Professional</h4>
                <div className="simple-price">$29<span>/mo</span></div>
                <ul>
                  <li><i className="fa-solid fa-check"></i> Unlimited projects</li>
                  <li><i className="fa-solid fa-check"></i> Priority support</li>
                  <li><i className="fa-solid fa-check"></i> Advanced analytics</li>
                </ul>
                <button className="simple-btn simple-accent">Choose Pro</button>
              </div>
      
            </div>
          </div>
      
          <div className="actions">
            <button className="action-btn view-btn" onclick="toggleCode('pc2', this)"><i className="fa-solid fa-code"></i> View Code</button>
            <button className="action-btn copy-btn" onclick="copyCode('pc2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
          </div>
          <pre id="pc2" className="code-block"><code>&lt;div className="pricing-row"&gt;
      
        &lt;div className="plan"&gt;
          &lt;h4&gt;Starter&lt;/h4&gt;
          &lt;div className="price"&gt;$12&lt;span&gt;/mo&lt;/span&gt;&lt;/div&gt;
          &lt;ul&gt;
            &lt;li&gt;✓ 3 projects&lt;/li&gt;
            &lt;li&gt;✓ Email support&lt;/li&gt;
          &lt;/ul&gt;
          &lt;button&gt;Get Started&lt;/button&gt;
        &lt;/div&gt;
      
        &lt;div className="plan highlighted"&gt;
          &lt;span className="badge"&gt;Pro&lt;/span&gt;
          &lt;h4&gt;Professional&lt;/h4&gt;
          &lt;div className="price"&gt;$29&lt;span&gt;/mo&lt;/span&gt;&lt;/div&gt;
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
    </>
  );
}
