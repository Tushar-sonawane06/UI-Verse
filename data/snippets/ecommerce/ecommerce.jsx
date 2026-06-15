import React from 'react';

export default function ecommerce(){
  return (
    <>
      <main className="main-home">
      
        <header className="page-header">
          <h1>E-commerce UI</h1>
          <p>Reusable shopping and product UI layouts with modern interactive styling.</p>
        </header>
      
        <section className="ecom-grid">
      
          {/* 1. PRODUCT CARD */}
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Product Card</h2>
              <p>A modern glassmorphic card with color selectors.</p>
            </div>
            <div className="component-preview" id="preview-1">
              <div className="product-card">
                <div className="pc-image">
                  <span className="pc-badge">SALE</span>
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" alt="Red Sneakers" />
                </div>
                <div className="pc-title">Nike Air Max 270</div>
                <div className="pc-price">$120.00</div>
                <div className="pc-options">
                  <div className="pc-color c1 active"></div>
                  <div className="pc-color c2"></div>
                  <div className="pc-color c3"></div>
                </div>
                <button className="pc-add-btn">Add to Cart</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-1">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 2. SHOPPING CART UI */}
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Shopping Cart Mini-UI</h2>
              <p>A dropdown or modal-style cart summary.</p>
            </div>
            <div className="component-preview" id="preview-2">
              <div className="cart-ui">
                <div className="cart-header">
                  <h3>Your Cart</h3>
                  <span className="cart-count">2 Items</span>
                </div>
                <div className="cart-item">
                  <img className="ci-img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" alt="Headphones" />
                  <div className="ci-details">
                    <div className="ci-title">Sony Noise Cancelling</div>
                    <div className="ci-price">$299.00</div>
                  </div>
                  <div className="ci-qty">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="cart-item">
                  <img className="ci-img" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" alt="Watch" />
                  <div className="ci-details">
                    <div className="ci-title">Apple Watch Series 8</div>
                    <div className="ci-price">$399.00</div>
                  </div>
                  <div className="ci-qty">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="cart-total">
                  <span>Total</span>
                  <span>$698.00</span>
                </div>
                <button className="cart-checkout-btn">Checkout</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-2">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 3. CHECKOUT FORM */}
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Checkout Form</h2>
              <p>Clean payment input layout.</p>
            </div>
            <div className="component-preview" id="preview-3">
              <div className="checkout-ui">
                <div className="co-section-title">
                  <i className="fa-regular fa-credit-card"></i> Payment Details
                </div>
                <div className="co-grid full">
                  <div className="co-input-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div className="co-grid full">
                  <div className="co-input-group">
                    <label>Card Number</label>
                    <div className="co-card-wrapper">
                      <input type="text" placeholder="0000 0000 0000 0000" style="width: 100%;" />
                      <i className="fa-brands fa-cc-visa co-card-icon"></i>
                    </div>
                  </div>
                </div>
                <div className="co-grid">
                  <div className="co-input-group">
                    <label>Expiry (MM/YY)</label>
                    <input type="text" placeholder="12/24" />
                  </div>
                  <div className="co-input-group">
                    <label>CVC</label>
                    <input type="text" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-3">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 4. PRODUCT GALLERY */}
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Product Gallery</h2>
              <p>Main image with selectable thumbnails.</p>
            </div>
            <div className="component-preview" id="preview-4">
              <div className="gallery-ui">
                <div className="gal-main">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" alt="Main" />
                </div>
                <div className="gal-thumbs">
                  <div className="gal-thumb active"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" alt="T1" /></div>
                  <div className="gal-thumb"><img src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop" alt="T2" /></div>
                  <div className="gal-thumb"><img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop" alt="T3" /></div>
                </div>
              </div>
            </div>
            </div>
          </div>
      
          {/* 6. WISHLIST PRODUCT CARD */}
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Wishlist Product Card</h2>
              <p>An elegant, premium wishlist card with stock indicators.</p>
            </div>
            <div className="component-preview" id="preview-6">
              <div className="wishlist-card">
                <div className="wc-image-wrap">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" alt="Smart Watch" />
                  <button className="wc-remove-btn" title="Remove from Wishlist" onclick="this.querySelector('i').classList.toggle('fa-regular'); this.querySelector('i').classList.toggle('fa-solid');"><i className="fa-solid fa-heart"></i></button>
                  <span className="wc-stock-badge"><span className="dot"></span> In Stock</span>
                </div>
                <div className="wc-details">
                  <div className="wc-category">Wearables</div>
                  <div className="wc-title">Minimalist Chronograph Watch</div>
                  <div className="wc-price-row">
                    <span className="wc-price">$189.00</span>
                    <span className="wc-old-price">$249.00</span>
                  </div>
                  <button className="wc-add-cart-btn"><i className="fa-solid fa-cart-plus"></i> Move to Cart</button>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-6">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 7. ORDER TRACKING CARD */}
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Order Tracking Status Card</h2>
              <p>A visual progress tracker for user orders.</p>
            </div>
            <div className="component-preview" id="preview-7">
              <div className="tracking-card">
                <div className="tc-header">
                  <div className="tc-order-info">
                    <span className="tc-label">Order ID</span>
                    <span className="tc-value">#UI-872951</span>
                  </div>
                  <span className="tc-status-badge">In Transit</span>
                </div>
                <div className="tc-delivery-estimate">
                  <i className="fa-solid fa-truck-fast"></i>
                  <div>
                    <div className="tc-est-label">Estimated Delivery</div>
                    <div className="tc-est-date">Thursday, May 21 by 8:00 PM</div>
                  </div>
                </div>
                <div className="tc-stepper">
                  <div className="tc-step completed">
                    <div className="tc-step-icon"><i className="fa-solid fa-check"></i></div>
                    <div className="tc-step-content">
                      <div className="tc-step-title">Order Placed</div>
                      <div className="tc-step-desc">May 15, 10:30 AM</div>
                    </div>
                  </div>
                  <div className="tc-step completed">
                    <div className="tc-step-icon"><i className="fa-solid fa-check"></i></div>
                    <div className="tc-step-content">
                      <div className="tc-step-title">Shipped</div>
                      <div className="tc-step-desc">May 16, 04:15 PM</div>
                    </div>
                  </div>
                  <div className="tc-step active">
                    <div className="tc-step-icon"><i className="fa-solid fa-truck"></i></div>
                    <div className="tc-step-content">
                      <div className="tc-step-title">In Transit</div>
                      <div className="tc-step-desc">En route to sorting facility</div>
                    </div>
                  </div>
                  <div className="tc-step pending">
                    <div className="tc-step-icon"><i className="fa-solid fa-house-chimney"></i></div>
                    <div className="tc-step-content">
                      <div className="tc-step-title">Out for Delivery</div>
                      <div className="tc-step-desc">Pending arrival at local hub</div>
                    </div>
                  </div>
                </div>
                <div className="tc-footer">
                  <div className="tc-carrier-info">
                    <div className="tc-carrier-name">FedEx Express</div>
                    <div className="tc-tracking-num">Tracking: <span>783920184920</span></div>
                  </div>
                  <button className="tc-action-btn" onclick="navigator.clipboard.writeText('783920184920'); alert('Tracking number copied!')"><i className="fa-regular fa-copy"></i></button>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-7">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 8. CUSTOMER REVIEW & RATING COMPONENT */}
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Customer Review Component</h2>
              <p>Interactive rating summary and featured feedback.</p>
            </div>
            <div className="component-preview" id="preview-8">
              <div className="review-component">
                <div className="rc-overview-row">
                  <div className="rc-summary">
                    <div className="rc-big-number">4.8</div>
                    <div className="rc-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className="rc-count">1,248 Ratings</div>
                  </div>
                  <div className="rc-bars">
                    <div className="rc-bar-row">
                      <span className="rc-bar-label">5 <i className="fa-solid fa-star"></i></span>
                      <div className="rc-progress-wrap"><div className="rc-progress-bar" style="width: 78%;"></div></div>
                      <span className="rc-bar-pct">78%</span>
                    </div>
                    <div className="rc-bar-row">
                      <span className="rc-bar-label">4 <i className="fa-solid fa-star"></i></span>
                      <div className="rc-progress-wrap"><div className="rc-progress-bar" style="width: 14%;"></div></div>
                      <span className="rc-bar-pct">14%</span>
                    </div>
                    <div className="rc-bar-row">
                      <span className="rc-bar-label">3 <i className="fa-solid fa-star"></i></span>
                      <div className="rc-progress-wrap"><div className="rc-progress-bar" style="width: 5%;"></div></div>
                      <span className="rc-bar-pct">5%</span>
                    </div>
                    <div className="rc-bar-row">
                      <span className="rc-bar-label">2 <i className="fa-solid fa-star"></i></span>
                      <div className="rc-progress-wrap"><div className="rc-progress-bar" style="width: 2%;"></div></div>
                      <span className="rc-bar-pct">2%</span>
                    </div>
                    <div className="rc-bar-row">
                      <span className="rc-bar-label">1 <i className="fa-solid fa-star"></i></span>
                      <div className="rc-progress-wrap"><div className="rc-progress-bar" style="width: 1%;"></div></div>
                      <span className="rc-bar-pct">1%</span>
                    </div>
                  </div>
                </div>
                <hr className="rc-divider" />
                <div className="rc-featured-review">
                  <div className="rc-review-header">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica" alt="Jessica M." className="rc-avatar" />
                    <div className="rc-reviewer-details">
                      <div className="rc-reviewer-name">Jessica M. <span className="verified-badge"><i className="fa-solid fa-circle-check"></i> Verified Buyer</span></div>
                      <div className="rc-review-meta">
                        <span className="rc-review-stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span className="rc-review-date">2 days ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="rc-review-title">Absolutely blown away by the quality!</div>
                  <p className="rc-review-text">This exceeds all my expectations. The sound isolation is incredible, and the battery lasts for days. Best investment I've made this year. Highly recommend to everyone!</p>
                  <div className="rc-review-footer">
                    <span className="rc-helpful-text">Was this review helpful?</span>
                    <div className="rc-helpful-actions">
                      <button className="rc-helpful-btn active" onclick="this.classList.toggle('active')"><i className="fa-regular fa-thumbs-up"></i> <span>Yes (42)</span></button>
                      <button className="rc-helpful-btn" onclick="this.classList.toggle('active')"><i className="fa-regular fa-thumbs-down"></i> <span>No (2)</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-8">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
        </section>
      
        {/* =========================================================
           FLASH DEALS SECTION
      
      <section className="flash-sale-section">
      
        <div className="container">
      
          <div className="flash-sale-banner">
      
            <div className="flash-left">
      
              <span className="flash-badge">
                ⚡ Flash Deals
              </span>
      
              <h2>
                Limited Time Mega Discounts
              </h2>
      
              <p>
                Save up to 70% on premium UI kits,
                ecommerce layouts and modern components.
              </p>
      
            </div>
      
            <div className="countdown">
      
              <div className="count-box">
                <h3>12</h3>
                <span>Hours</span>
              </div>
      
              <div className="count-box">
                <h3>45</h3>
                <span>Minutes</span>
              </div>
      
              <div className="count-box">
                <h3>29</h3>
                <span>Seconds</span>
              </div>
      
            </div>
      
          </div>
      
        </div>
      
      </section>
      
      <!-- =========================================================
           CATEGORY CARDS
      
      <section className="category-section">
      
        <div className="container">
      
          <h2 className="section-title">
            🛒 Shop Categories
          </h2>
      
          <div className="category-grid">
      
            <div className="category-card">
      
              <div className="category-icon">
                👕
              </div>
      
              <h3>
                Fashion
              </h3>
      
            </div>
      
            <div className="category-card">
      
              <div className="category-icon">
                💻
              </div>
      
              <h3>
                Electronics
              </h3>
      
            </div>
      
            <div className="category-card">
      
              <div className="category-icon">
                🛋
              </div>
      
              <h3>
                Furniture
              </h3>
      
            </div>
      
            <div className="category-card">
      
              <div className="category-icon">
                🎧
              </div>
      
              <h3>
                Audio
              </h3>
      
            </div>
      
            <div className="category-card">
      
              <div className="category-icon">
                ⌚
              </div>
      
              <h3>
                Accessories
              </h3>
      
            </div>
      
          </div>
      
        </div>
      
      </section>
      
      <!-- =========================================================
           PRODUCT SHOWCASE
      
      <section className="showcase-section">
      
        <div className="container">
      
          <div className="showcase-grid">
      
            <div className="showcase-image">
              🖥
            </div>
      
            <div className="showcase-content">
      
              <span className="showcase-tag">
                Premium Product
              </span>
      
              <h2>
                Gaming Monitor Ultra HD
              </h2>
      
              <p>
                Experience immersive visuals with
                ultra-wide curved display and vibrant colors.
              </p>
      
              <div className="showcase-features">
      
                <div>
                  ✔ 165Hz Refresh Rate
                </div>
      
                <div>
                  ✔ Ultra-wide Display
                </div>
      
                <div>
                  ✔ HDR Technology
                </div>
      
              </div>
      
              <div className="showcase-price">
      
                <span className="new-price">
                  $499
                </span>
      
                <span className="old-price">
                  $699
                </span>
      
              </div>
      
              <button className="buy-btn">
                Buy Now
              </button>
      
            </div>
      
          </div>
      
        </div>
      
      </section>
      
      <!-- =========================================================
           TESTIMONIALS
      
      <section className="testimonial-section">
      
        <div className="container">
      
          <h2 className="section-title">
            ❤️ Customer Reviews
          </h2>
      
          <div className="testimonial-grid">
      
            <div className="testimonial-card">
      
              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>
      
              <p>
                “Beautiful ecommerce layouts with
                smooth interactions and premium styling.”
              </p>
      
              <div className="user">
      
                <div className="avatar">
                  A
                </div>
      
                <div>
                  <h4>Alex Morgan</h4>
                  <span>Frontend Developer</span>
                </div>
      
              </div>
      
            </div>
      
            <div className="testimonial-card">
      
              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>
      
              <p>
                “The best modern UI collection for
                building ecommerce experiences.”
              </p>
      
              <div className="user">
      
                <div className="avatar">
                  S
                </div>
      
                <div>
                  <h4>Sarah Lee</h4>
                  <span>UI Designer</span>
                </div>
      
              </div>
      
            </div>
      
            <div className="testimonial-card">
      
              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>
      
              <p>
                “Responsive, stylish and easy
                to customize for any store.”
              </p>
      
              <div className="user">
      
                <div className="avatar">
                  D
                </div>
      
                <div>
                  <h4>Daniel Ross</h4>
                  <span>Product Designer</span>
                </div>
      
              </div>
      
            </div>
      
          </div>
      
        </div>
      
      </section>
      
      <!-- =========================================================
           BRAND LOGOS
      
      <section className="brand-section">
      
        <div className="container">
      
          <h2 className="section-title">
            🤝 Trusted By Brands
          </h2>
      
          <div className="brand-grid">
      
            <div className="brand-item">
              Shopify
            </div>
      
            <div className="brand-item">
              Stripe
            </div>
      
            <div className="brand-item">
              Amazon
            </div>
      
            <div className="brand-item">
              eBay
            </div>
      
            <div className="brand-item">
              PayPal
            </div>
      
          </div>
      
        </div>
      
      </section>
      
      <!-- =========================================================
           NEWSLETTER
      
      <section className="newsletter-section">
      
        <div className="container">
      
          <div className="newsletter-box">
      
            <h2>
              📩 Join Our Newsletter
            </h2>
      
            <p>
              Get updates about new ecommerce components,
              UI kits and modern design resources.
            </p>
      
            <form className="newsletter-form">
      
              <input
                type="email"
                placeholder="Enter your email"
               />
      
              <button type="submit">
                Subscribe
              </button>
      
            </form>
      
          </div>
      
        </div>
      
      </section>
      
      <!-- =========================================================
           FOOTER
      
      <footer className="ecommerce-footer">
      
        <div className="container">
      
          <div className="footer-grid">
      
            <div>
      
              <h2 className="footer-logo">
                UIverse
              </h2>
      
              <p>
                Modern reusable ecommerce UI
                components for developers and designers.
              </p>
      
            </div>
      
            <div>
      
              <h3>
                Components
              </h3>
      
              <ul>
      
                <li>
                  Product Cards
                </li>
      
                <li>
                  Checkout Forms
                </li>
      
                <li>
                  Pricing Tables
                </li>
      
                <li>
                  Shopping Cart
                </li>
      
              </ul>
      
            </div>
      
            <div>
      
              <h3>
                Resources
              </h3>
      
              <ul>
      
                <li>
                  Documentation
                </li>
      
                <li>
                  Community
                </li>
      
                <li>
                  Support
                </li>
      
                <li>
                  Updates
                </li>
      
              </ul>
      
            </div>
      
            <div>
      
              <h3>
                Follow Us
              </h3>
      
              <div className="footer-socials">
      
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
      
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
      
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
      
              </div>
      
            </div>
      
          </div>
      
          
      
        </div>
      
        <!-- FEATURES */}
      
        <section>
      
          <div className="container">
      
            <h2 className="section-title">
              ✨ E-commerce Features
            </h2>
      
            <p className="section-subtitle">
              Beautiful reusable UI sections for shopping websites.
            </p>
      
            <div className="features-grid">
      
              <div className="feature-box">
                <i className="fa-solid fa-cart-shopping"></i>
                <h3>Shopping Cart</h3>
                <p>Modern cart drawer and checkout flow.</p>
              </div>
      
              <div className="feature-box">
                <i className="fa-solid fa-credit-card"></i>
                <h3>Payment UI</h3>
                <p>Clean payment and billing sections.</p>
              </div>
      
              <div className="feature-box">
                <i className="fa-solid fa-store"></i>
                <h3>Store Layouts</h3>
                <p>Responsive store homepage sections.</p>
        {/* 5. PRODUCT SHOWCASE */}
        <section className="ecom-grid wide">
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Product Showcase Hero</h2>
              <p>A full-width section to highlight a flagship product.</p>
            </div>
            <div className="component-preview" id="preview-5" style="padding: 0; min-height: 400px; border: none;">
              <div className="showcase-ui">
                <div className="sc-content">
                  <div className="sc-tag">New Arrival</div>
                  <h1 className="sc-title">Sony WH-1000XM4</h1>
                  <p className="sc-desc">Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.</p>
                  <div className="sc-price-row">
                    <span className="sc-price">$298.00</span>
                    <span className="sc-old-price">$348.00</span>
                  </div>
                  <div className="sc-btns">
                    <button className="sc-btn-primary">Buy Now</button>
                    <button className="sc-btn-secondary">Learn More</button>
                  </div>
                </div>
                <div className="sc-image"></div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-5">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
        </section>
      
        {/* WIDE E-COMMERCE COMPONENTS */}
        <section className="ecom-grid wide">
      
          {/* 9. PRODUCT COMPARISON TABLE */}
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Product Comparison Table</h2>
              <p>A detailed comparison matrix for side-by-side product evaluation.</p>
            </div>
            <div className="component-preview" id="preview-9" style="padding: 20px 10px; min-height: auto; border: none; background: transparent;">
              <div className="comparison-container">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Features</th>
                      <th>
                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop" alt="Model X" />
                        <div className="comp-name">AeroPhone Pro</div>
                        <div className="comp-price">$999</div>
                      </th>
                      <th className="highlighted">
                        <span className="table-badge">Best Value</span>
                        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop" alt="Model Y" />
                        <div className="comp-name">AeroPhone Ultra</div>
                        <div className="comp-price">$1,199</div>
                      </th>
                      <th>
                        <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1000&auto=format&fit=crop" alt="Model Z" />
                        <div className="comp-name">AeroPhone Lite</div>
                        <div className="comp-price">$699</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="feature-title">Display</td>
                      <td>6.1" OLED, 120Hz</td>
                      <td className="highlighted-cell">6.7" Super OLED, 120Hz</td>
                      <td>6.1" LCD, 60Hz</td>
                    </tr>
                    <tr>
                      <td className="feature-title">Processor</td>
                      <td>A15 Bionic Chip</td>
                      <td className="highlighted-cell">A16 Bionic Pro Chip</td>
                      <td>A14 Bionic Chip</td>
                    </tr>
                    <tr>
                      <td className="feature-title">Main Camera</td>
                      <td>Dual 12MP System</td>
                      <td className="highlighted-cell">Triple 48MP Pro System</td>
                      <td>Single 12MP System</td>
                    </tr>
                    <tr>
                      <td className="feature-title">Battery Life</td>
                      <td>Up to 20 hours</td>
                      <td className="highlighted-cell">Up to 29 hours</td>
                      <td>Up to 17 hours</td>
                    </tr>
                    <tr>
                      <td className="feature-title">Storage</td>
                      <td>128GB / 256GB</td>
                      <td className="highlighted-cell">256GB / 512GB / 1TB</td>
                      <td>64GB / 128GB</td>
                    </tr>
                    <tr className="action-row">
                      <td></td>
                      <td><button className="comp-buy-btn">Choose Pro</button></td>
                      <td className="highlighted-cell"><button className="comp-buy-btn primary">Choose Ultra</button></td>
                      <td><button className="comp-buy-btn">Choose Lite</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-9">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 10. DISCOUNT COUPON BANNER */}
          <div className="ecom-card">
            <div className="ecom-info">
              <h2>Discount Coupon Banner</h2>
              <p>A perforated ticket-style promotional coupon banner.</p>
            </div>
            <div className="component-preview" id="preview-10" style="padding: 0; min-height: auto; border: none; background: transparent;">
              <div className="coupon-banner">
                <div className="coupon-left">
                  <div className="coupon-badge">Special Offer</div>
                  <h2 className="coupon-discount">30% OFF</h2>
                  <p className="coupon-validity">Valid until May 31</p>
                </div>
                <div className="coupon-divider">
                  <div className="coupon-cut top"></div>
                  <div className="coupon-line"></div>
                  <div className="coupon-cut bottom"></div>
                </div>
                <div className="coupon-right">
                  <h3 className="coupon-title">Summer Kickoff Sale</h3>
                  <p className="coupon-desc">Get an extra 30% off all modern collection items. Use the code below at checkout.</p>
                  <div className="coupon-code-wrap">
                    <span className="coupon-code">SUMMER30</span>
                    <button className="coupon-copy-btn" onclick="navigator.clipboard.writeText('SUMMER30'); alert('Coupon code SUMMER30 copied!')">
                      <i className="fa-regular fa-copy"></i> <span>Copy</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-10">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
        </section>
      
        {/* ================= FOOTER ================= */}
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fa-solid fa-hexagon-nodes"></i>
                <span>UIverse</span>
              </div>
              <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
              <div className="footer-socials">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Explore</h4>
              <ul>
                <li><a href="button.html">Buttons</a></li>
                <li><a href="navbar.html">Navbars</a></li>
                <li><a href="cards.html">Cards</a></li>
                <li><a href="inputs.html">Inputs</a></li>
                <li><a href="forms.html">Forms</a></li>
              </ul>
            </div>
      
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">GitHub Repo</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
      
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">License</a></li>
              </ul>
            </div>
      
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Get notified when new components drop.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="your@email.com" />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 UIverse. Made with <i className="fa-solid fa-heart heart"></i> for developers worldwide.</p>
          </div>
        </footer>
      
      </main>
    </>
  );
}
