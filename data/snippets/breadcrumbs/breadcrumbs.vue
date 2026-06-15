<template>
<main class="page-shell">
    <section class="hero">
      <div class="hero-badge">🧭 Reusable Breadcrumb Navigation</div>
      <h1>Breadcrumb UI for dashboards, admin panels, ecommerce, and web apps.</h1>
      <p>Five flexible breadcrumb patterns for clean hierarchy and quick back navigation.</p>
      <div class="hero-meta">
        <span class="meta-pill">5 Components</span>
        <span class="meta-pill">HTML CSS JS</span>
        <span class="meta-pill">Responsive</span>
      </div>
    </section>

    <section class="related-pages">
      <a href="calendar-components.html">Calendar</a>
      <a href="notes-components.html">Notes</a>
      <a href="patterns.html">Patterns</a>
      <a href="tooltips.html">Tooltips</a>
      <a href="inputs.html">Inputs</a>
    </section>

    <section class="breadcrumb-grid">
      <article class="component-card" data-name="glass breadcrumb">
        <div class="card-preview glass-preview">
          <nav class="trail glass-trail" aria-label="Breadcrumb">
            <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <a href="dashboard.html">Dashboard</a>
            <i class="fa-solid fa-chevron-right"></i>
            <span>Analytics</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Glass Breadcrumb</h3>
          <p>Soft glassmorphism trail for modern dashboards and admin panels.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc1', this)">View code</button>
            <button onclick="copyCode('bc1', this)">Copy code</button>
          </div>
          <pre id="bc1" class="code-block"><code>&lt;nav class="trail glass-trail"&gt;
  &lt;a href="index.html"&gt;Home&lt;/a&gt;
  &lt;span&gt;Analytics&lt;/span&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="pill breadcrumb">
        <div class="card-preview pill-preview">
          <nav class="trail pill-trail" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <a href="ecommerce.html">Shop</a>
            <a href="product.html">Category</a>
            <span>Product Detail</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Pill Breadcrumb</h3>
          <p>Rounded breadcrumb chips for ecommerce and catalog flows.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc2', this)">View code</button>
            <button onclick="copyCode('bc2', this)">Copy code</button>
          </div>
          <pre id="bc2" class="code-block"><code>&lt;nav class="trail pill-trail"&gt;
  &lt;a href="ecommerce.html"&gt;Shop&lt;/a&gt;
  &lt;span&gt;Product Detail&lt;/span&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="underline breadcrumb">
        <div class="card-preview underline-preview">
          <nav class="trail underline-trail" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <a href="files.html">Assets</a>
            <i class="fa-solid fa-chevron-right"></i>
            <span>Uploads</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Underline Breadcrumb</h3>
          <p>Minimal links with hover underlines for lightweight layouts.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc3', this)">View code</button>
            <button onclick="copyCode('bc3', this)">Copy code</button>
          </div>
          <pre id="bc3" class="code-block"><code>&lt;a href="files.html"&gt;Assets&lt;/a&gt;
&lt;span&gt;Uploads&lt;/span&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="icon breadcrumb">
        <div class="card-preview icon-preview">
          <nav class="trail icon-trail" aria-label="Breadcrumb">
            <a href="index.html"><i class="fa-solid fa-house"></i></a>
            <i class="fa-solid fa-chevron-right"></i>
            <a href="settings.html"><i class="fa-solid fa-sliders"></i> Settings</a>
            <i class="fa-solid fa-chevron-right"></i>
            <span><i class="fa-solid fa-gear"></i> Preferences</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Icon Breadcrumb</h3>
          <p>Icon-led navigation for settings, app menus, and utility pages.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc4', this)">View code</button>
            <button onclick="copyCode('bc4', this)">Copy code</button>
          </div>
          <pre id="bc4" class="code-block"><code>&lt;a href="settings.html"&gt;Settings&lt;/a&gt;
&lt;span&gt;Preferences&lt;/span&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="step breadcrumb">
        <div class="card-preview step-preview">
          <nav class="trail step-trail" aria-label="Breadcrumb">
            <span class="step-item active"><span>1</span> Project</span>
            <span class="step-item active"><span>2</span> Build</span>
            <span class="step-item active"><span>3</span> Review</span>
            <span class="step-item"><span>4</span> Publish</span>
          </nav>
        </div>
        <div class="card-body">
          <h3>Step Breadcrumb</h3>
          <p>Process-style breadcrumb for flows, checkouts, and setup wizards.</p>
          <div class="card-actions">
            <button onclick="toggleCode('bc5', this)">View code</button>
            <button onclick="copyCode('bc5', this)">Copy code</button>
          </div>
          <pre id="bc5" class="code-block"><code>&lt;span class="step-item active"&gt;&lt;span&gt;3&lt;/span&gt; Review&lt;/span&gt;
&lt;span class="step-item"&gt;&lt;span&gt;4&lt;/span&gt; Publish&lt;/span&gt;</code></pre>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default { name: 'Breadcrumbs' }
</script>
