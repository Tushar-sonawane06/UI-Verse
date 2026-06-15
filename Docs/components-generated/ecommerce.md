# E-commerce

Component ID: ecommerce

- Path: ecommerce.html
- Version: 0.0.1
- Documentation score: 100/100
- Tags: ecommerce, shop, product, cart, store
- Description: E-commerce UI components and layouts

## Assets

- CSS: dist/shared.css, ecommerce.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
- JS: dist/shared.js

## Headings

- H1: E-commerce UI
- H2: Product Card
- H3: Sony WH-1000XM5
- H2: Recently Viewed
- H3: Filters
- H1: Up To 80% OFF
- H3: Order Summary
- H2: Gift Card

## Usage Snippet

```html
<section class="ecom-grid">

    <!-- 1. PRODUCT CARD -->
    <div class="ecom-card">
      <div class="ecom-info">
        <h2>Product Card</h2>
        <p>A modern glassmorphic card with color selectors.</p>
      </div>
      <div class="component-preview" id="preview-1">
        <div class="product-card">
          <div class="pc-image">
            <span class="pc-badge">SALE</span>
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" alt="Red Sneakers">
          </div>
          <div class="pc-title">Nike Air Max 270</div>
          <div class="pc-price">$120.00</div>
          <div class="pc-options">
            <div class="pc-color c1 active"></div>
            <div class="pc-color c2"></div>
            <div class="pc-color c3"></div>
          </div>
          <button class="pc-add-btn" data-a11y-remediation="button-label-needed">Add to Cart</button>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-1">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <div class="quick-view-card">
  <div class="qv-image">
    <img src="product.jpg" alt="">
  </div>

  <div class="qv-content">
    <span class="qv-category">Headphones</span>

    <h3>Sony WH-1000XM5</h3>

    <div class="qv-rating">
      ★★★★★ <span>(2,394 Reviews)</span>
    </div>

    <div class="qv-price">
      $349
      <span>$399</span>
    </div>

    <p>
      Industry-leading noise cancellation with
      premium audio quality.
    </p>

    <button>View Details</button>
  </div>
</div>

<div class="recently-viewed">

  <h2>Recently Viewed</h2>

  <div class="recent-grid">

    <div class="recent-item">
      <img src="" alt="">
      <span>Gaming Mouse</span>
    </div>

    <div class="recent-item">
      <img src="" alt="">
      <span>Mechanical Keyboard</span>
    </div>

    <div class="recent-item">
      <img src="" alt="">
      <span>Monitor Arm</span>
    </div>

  </div>

</div>

<div class="filter-sidebar">

  <h3>Filters</h3>

  <div class="filter-group">
    <label>Price Range</label>
    <input type="range">
  </div>

  <div class="filter-group">
    <label>
      <input type="checkbox">
      Free Shipping
    </label>
  </div>

  <div class="filter-group">
    <label>
      <input type="checkbox">
      In Stock
    </label>
  </div>

</div>

<div class="shop-search">

  <input
    type="text"
    placeholder="Search products..."
  >

  <button>
    <i class="fa-solid fa-magnifying-glass"></i>
  </button>

</div>

<div class="mega-sale-banner">

  <span>BLACK FRIDAY</span>

  <h1>Up To 80% OFF</h1>

  <p>
    Biggest discounts of the year.
  </p>

  <button>Shop Now</button>

</div>

<div class="order-summary">

  <h3>Order Summary</h3>

  <div class="row">
    <span>Subtotal</span>
    <span>$499</span>
  </div>

  <div class="row">
    <span>Shipping</span>
    <span>$15</span>
  </div>

  <div class="row">
    <span>Tax</span>
    <span>$22</span>
  </div>

  <hr>

  <div class="total">
    <span>Total</span>
    <span>$536</span>
  </div>

</div>

<div class="shipping-methods">

  <label>
    <input type="radio" name="ship">
    Standard Delivery
  </label>

  <label>
    <input type="radio" name="ship">
    Express Delivery
  </label>

  <label>
    <input type="radio" name="ship">
    Same Day Delivery
  </label>

</div>

<div class="gift-card">

  <h2>Gift Card</h2>

  <div class="gift-amounts">
    <button>$25</button>
    <button>$50</button>
    <button>$100</button>
    <button>$250</button>
  </div>

</div>

<div class="loyalty-widget">

  <h3>Your Reward Points</h3>

  <div class="points">
    12,450
  </div>

  <button>
    Redeem Rewards
  </button>

</div>

<div class="stock-card">

  <h3>Availability</h3>

  <div class="stock-status success">
    ● In Stock
  </div>

  <div class="stock-progress">
    Only 7 left
  </div>

</div>

<div class="bundle-card">

  <h2>Frequently Bought Together</h2>

  <div class="bundle-products">
    Product A + Product B + Product C
  </div>

  <button>
    Add Bundle
  </button>

</div>

<div class="spec-table">

  <div class="spec-row">
    <span>Battery</span>
    <span>30 Hours</span>
  </div>

  <div class="spec-row">
    <span>Bluetooth</span>
    <span>5.3</span>
  </div>

  <div class="spec-row">
    <span>Weight</span>
    <span>250g</span>
  </div>

</div>
    <!-- 2. SHOPPING CART UI -->
    <div class="ecom-card">
      <div class="ecom-info">
        <h2>Shopping Cart Mini-UI</h2>
        <p>A dropdown or modal-style cart summary.</p>
      </div>
      <div class="component-preview" id="preview-2">
        <div class="cart-ui">
          <div class="cart-header">
            <h3>Your Cart</h3>
            <span class="cart-count">2 Items</span>
          </div>
          <div class="cart-item">
            <img class="ci-img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" alt="Headphones">
            <div class="ci-details">
              <div class="ci-title">Sony Noise Cancelling</div>
              <div class="ci-price">$299.00</div>
            </div>
            <div class="ci-qty">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <div class="cart-item">
            <img class="ci-img" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" alt="Watch">
            <div class="ci-details">
              <div class="ci-title">Apple Watch Series 8</div>
              <div class="ci-price">$399.00</div>
            </div>
            <div class="ci-qty">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <div class="cart-total">
            <span>Total</span>
            <span>$698.00</span>
          </div>
          <button class="cart-checkout-btn">Checkout</button>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-2">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 3. CHECKOUT FORM -->
    <div class="ecom-card">
      <div class="ecom-info">
        <h2>Checkout Form</h2>
        <p>Clean payment input layout.</p>
      </div>
      <div class="component-preview" id="preview-3">
        <div class="checkout-ui">
          <div class="co-section-title">
            <i class="fa-regular fa-credit-card"></i> Payment Details
          </div>
          <div class="co-grid full">
            <div class="co-input-group">
              <label>Cardholder Name</label>
              <input type="text" placeholder="John Doe" data-a11y-remediation="label-needed">
            </div>
          </div>
          <div class="co-grid full">
            <div class="co-input-group">
              <label>Card Number</label>
              <div class="co-card-wrapper">
                <input type="text" placeholder="0000 0000 0000 0000" style="width: 100%;">
                <i class="fa-brands fa-cc-visa co-card-icon"></i>
              </div>
            </div>
          </div>
          <div class="co-grid">
            <div class="co-input-group">
              <label>Expiry (MM/YY)</label>
              <input type="text" placeholder="12/24">
            </div>
            <div class="co-input-group">
              <label>CVC</label>
              <input type="text" placeholder="123">
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-3">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 4. PRODUCT GALLERY -->
    <div class="ecom-card">
      <div class="ecom-info">
        <h2>Product Gallery</h2>
        <p>Main image with selectable thumbnails.</p>
      </div>
      <div class="component-preview" id="preview-4">
        <div class="gallery-ui">
          <div class="gal-main">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" alt="Main">
          </div>
          <div class="gal-thumbs">
            <div class="gal-thumb active"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" alt="T1"></div>
            <div class="gal-thumb"><img src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop" alt="T2"></div>
            <div class="gal-thumb"><img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop" alt="T3"></div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <!-- 6. WISHLIST PRODUCT CARD -->
    <div class="ecom-card">
      <div class="ecom-info">
        <h2>Wishlist Product Card</h2>
        <p>An elegant, premium wishlist card with stock indicators.</p>
      </div>
      <div class="component-preview" id="preview-6">
        <div class="wishlist-card">
          <div class="wc-image-wrap">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" alt="Smart Watch">
            <button class="wc-remove-btn" title="Remove from Wishlist" onclick="this.querySelector('i').classList.toggle('fa-regular'); this.querySelector('i').classList.toggle('fa-solid');"><i class="fa-solid fa-heart"></i></button>
            <span class="wc-stock-badge"><span class="dot"></span> In Stock</span>
          </div>
          <div class="wc-details">
            <div class="wc-category">Wearables</div>
            <div class="wc-title">Minimalist Chronograph Watch</div>
            <div class="wc-price-row">
              <span class="wc-price">$189.00</span>
              <span class="wc-old-price">$249.00</span>
            </div>
            <button class="wc-add-cart-btn"><i class="fa-solid fa-cart-plus"></i> Move to Cart</button>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-6">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 7. ORDER TRACKING CARD -->
    <div class="ecom-card">
      <div class="ecom-info">
        <h2>Order Tracking Status Card</h2>
        <p>A visual progress tracker for user orders.</p>
      </div>
      <div class="component-preview" id="preview-7">
        <div class="tracking-card">
          <div class="tc-header">
            <div class="tc-order-info">
              <span class="tc-label">Order ID</span>
              <span class="tc-value">#UI-872951</span>
            </div>
            <span class="tc-status-badge">In Transit</span>
          </div>
          <div class="tc-delivery-estimate">
            <i class="fa-solid fa-truck-fast"></i>
            <div>
              <div class="tc-est-label">Estimated Delivery</div>
              <div class="tc-est-date">Thursday, May 21 by 8:00 PM</div>
            </div>
          </div>
          <div class="tc-stepper">
            <div class="tc-step completed">
              <div class="tc-step-icon"><i class="fa-solid fa-check"></i></div>
              <div class="tc-step-content">
                <div class="tc-step-title">Order Placed</div>
                <div class="tc-step-desc">May 15, 10:30 AM</div>
              </div>
            </div>
            <div class="tc-step completed">
              <div class="tc-step-icon"><i class="fa-solid fa-check"></i></div>
              <div class="tc-step-content">
                <div class="tc-step-title">Shipped</div>
                <div class="tc-step-desc">May 16, 04:15 PM</div>
              </div>
            </div>
            <div class="tc-step active">
              <div class="tc-step-icon"><i class="fa-solid fa-truck"></i></div>
              <div class="tc-step-content">
                <div class="tc-step-title">In Transit</div>
                <div class="tc-step-desc">En route to sorting facility</div>
              </div>
            </div>
            <div class="tc-step pending">
              <div class="tc-step-icon"><i class="fa-solid fa-house-chimney"></i></div>
              <div class="tc-step-content">
                <div class="tc-step-title">Out for Delivery</div>
                <div class="tc-step-desc">Pending arrival at local hub</div>
              </div>
            </div>
          </div>
          <div class="tc-footer">
            <div class="tc-carrier-info">
              <div class="tc-carrier-name">FedEx Express</div>
              <div class="tc-tracking-num">Tracking: <span>783920184920</span></div>
            </div>
            <button class="tc-action-btn" onclick="navigator.clipboard.writeText('783920184920'); alert('Tracking number copied!')"><i class="fa-regular fa-copy"></i></button>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-7">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 8. CUSTOMER REVIEW & RATING COMPONENT -->
    <div class="ecom-card">
      <div class="ecom-info">
        <h2>Customer Review Component</h2>
        <p>Interactive rating summary and featured feedback.</p>
      </div>
      <div class="component-preview" id="preview-8">
        <div class="review-component">
          <div class="rc-overview-row">
            <div class="rc-summary">
              <div class="rc-big-number">4.8</div>
              <div class="rc-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <div class="rc-count">1,248 Ratings</div>
            </div>
            <div class="rc-bars">
              <div class="rc-bar-row">
                <span class="rc-bar-label">5 <i class="fa-solid fa-star"></i></span>
                <div class="rc-progress-wrap"><div class="rc-progress-bar" style="width: 78%;"></div></div>
                <span class="rc-bar-pct">78%</span>
              </div>
              <div class="rc-bar-row">
                <span class="rc-bar-label">4 <i class="fa-solid fa-star"></i></span>
                <div class="rc-progress-wrap"><div class="rc-progress-bar" style="width: 14%;"></div></div>
                <span class="rc-bar-pct">14%</span>
              </div>
              <div class="rc-bar-row">
                <span class="rc-bar-label">3 <i class="fa-solid fa-star"></i></span>
                <div class="rc-progress-wrap"><div class="rc-progress-bar" style="width: 5%;"></div></div>
                <span class="rc-bar-pct">5%</span>
              </div>
              <div class="rc-bar-row">
                <span class="rc-bar-label">2 <i class="fa-solid fa-star"></i></span>
                <div class="rc-progress-wrap"><div class="rc-progress-bar" style="width: 2%;"></div></div>
                <span class="rc-bar-pct">2%</span>
              </div>
              <div class="rc-bar-row">
                <span class="rc-bar-label">1 <i class="fa-solid fa-star"></i></span>
                <div class="rc-progress-wrap"><div class="rc-progress-bar" style="width: 1%;"></div></div>
                <span class="rc-bar-pct">1%</span>
              </div>
            </div>
          </div>
          <hr class="rc-divider">
          <div class="rc-featured-review">
            <div class="rc-review-header">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica" alt="Jessica M." class="rc-avatar">
              <div class="rc-reviewer-details">
                <div class="rc-reviewer-name">Jessica M. <span class="verified-badge"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span></div>
                <div class="rc-review-meta">
                  <span class="rc-review-stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <span class="rc-review-date">2 days ago</span>
                </div>
              </div>
            </div>
            <div class="rc-review-title">Absolutely blown away by the quality!</div>
            <p class="rc-review-text">This exceeds all my expectations. The sound isolation is incredible, and the battery lasts for days. Best investment I've made this year. Highly recommend to everyone!</p>
            <div class="rc-review-footer">
              <span class="rc-helpful-text">Was this review helpful?</span>
              <div class="rc-helpful-actions">
                <button class="rc-helpful-btn active" onclick="this.classList.toggle('active')"><i class="fa-regular fa-thumbs-up"></i> <span>Yes (42)</span></button>
                <button class="rc-helpful-btn" onclick="this.classList.toggle('active')"><i class="fa-regular fa-thumbs-down"></i> <span>No (2)</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-8">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

  </section>
```
