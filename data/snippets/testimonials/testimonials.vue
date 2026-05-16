<template>
<main class="main">

    <div class="page-header">

      <h1>Testimonials</h1>

      <p>
        Beautiful modern testimonial cards designed with
        glassmorphism, premium hover animations, gradient glow
        effects, and elegant typography.
      </p>

    </div>

    <!-- Testimonials -->

    <div class="testimonial-grid">

      <!-- Card 1 -->

      <div class="component-card">

        <h3>Customer Testimonial</h3>

        <div class="testimonial-card">

          <div class="blur-glow"></div>

          <div class="quote-icon">❝</div>

          <div class="stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <p>
            “UIverse helped us launch faster with polished
            UI components that were elegant, scalable,
            and incredibly easy to customize.”
          </p>

          <div class="testimonial-meta">

            <div class="avatar">
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt=""
              />
            </div>

            <div class="user-info">
              <strong>Maya Lee</strong>
              <span>Product Designer</span>
            </div>

          </div>

        </div>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('t1', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button class="action-btn copy-btn" onclick="copyCode('t1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
        </div>

<pre id="t1" class="code-block">
&lt;div class="testimonial-card"&gt;
  Modern glowing testimonial card
&lt;/div&gt;
</pre>

      </div>

      <!-- Card 2 -->

      <div class="component-card">

        <h3>Quote Panel</h3>

        <div class="testimonial-card">

          <div class="blur-glow"></div>

          <div class="quote-icon">❝</div>

          <div class="stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <p>
            “The component library is beginner friendly
            and made styling my app feel effortless,
            modern, and professional.”
          </p>

          <div class="testimonial-meta">

            <div class="avatar">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt=""
              />
            </div>

            <div class="user-info">
              <strong>Alex Chen</strong>
              <span>Frontend Developer</span>
            </div>

          </div>

        </div>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('t2', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button class="action-btn copy-btn" onclick="copyCode('t2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
        </div>

<pre id="t2" class="code-block">
&lt;div class="testimonial-card"&gt;
  Premium quote testimonial
&lt;/div&gt;
</pre>

      </div>

    </div>

  </main>
</template>

<script>
export default { name: 'Testimonials' }
</script>
