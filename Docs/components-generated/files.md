# Drag & Drop

Component ID: files

- Path: files.html
- Version: 0.0.1
- Documentation score: 100/100
- Tags: drag, drop, upload, files, interactive
- Description: Drag and drop file upload components

## Assets

- CSS: dist/shared.css, files.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css, playground.css
- JS: dist/shared.js

## Headings

- H1: File Uploads
- H3: Drag & Drop Files
- H3: Simple Upload
- H3: Glass Upload
- H3: Glass Upload
- H3: Gradient Upload
- H3: Gradient Upload
- H3: Neon Upload

## Usage Snippet

```html
<section class="upload-grid">

    <!-- CARD 1 -->

    <div class="upload-card" data-name="simple upload drag drop file input" data-cat="simple">

      <div class="card-preview">

        <div class="upload-box" id="uploadBox">

          <input type="file" id="fileInput" hidden multiple>

          <div class="upload-icon">⬆</div>

          <h3>Drag & Drop Files</h3>

          <p>or click to browse</p>

          <button>Select Files</button>

        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Simple Upload</h3>
          <span class="card-tag tag-essential">Popular</span>
        </div>

        <p>
          Clean upload component with drag-and-drop support and smooth hover effects.
        </p>

        <div class="actions">

          <button class="action-btn view-btn" onclick="toggleCode('code-simple-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-simple-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>

        </div>

        <pre class="code-block" id="code-simple-upload"><code>&lt;div class="upload-box" id="uploadBox"&gt;
  &lt;input type="file" id="fileInput" hidden multiple&gt;
  &lt;div class="upload-icon"&gt;⬆&lt;/div&gt;
  &lt;h3&gt;Drag &amp; Drop Files&lt;/h3&gt;
  &lt;p&gt;or click to browse&lt;/p&gt;
  &lt;button&gt;Select Files&lt;/button&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 2 -->

    <div class="upload-card glass-card" data-name="glass upload modern glassmorphism blur background frosted" data-cat="simple">

      <div class="card-preview">

        <div class="upload-box glass-upload">

          <div class="upload-icon">☁</div>

          <h3>Glass Upload</h3>

          <p>Modern glassmorphism style</p>

        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Glass Upload</h3>
          <span class="card-tag tag-trending">Trending</span>
        </div>

        <p>
          Frosted glass upload area with smooth blur background effects.
        </p>

        <div class="actions">

          <button class="action-btn view-btn" onclick="toggleCode('code-glass-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-glass-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>

        </div>

        <pre class="code-block" id="code-glass-upload"><code>&lt;div class="upload-box glass-upload"&gt;
  &lt;div class="upload-icon"&gt;☁&lt;/div&gt;
  &lt;h3&gt;Glass Upload&lt;/h3&gt;
  &lt;p&gt;Modern glassmorphism style&lt;/p&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 3 -->

    <div class="upload-card gradient-card" data-name="gradient upload vibrant animated border modern" data-cat="gradient">

      <div class="card-preview">

        <div class="upload-box gradient-upload">

          <div class="upload-icon">✦</div>

          <h3>Gradient Upload</h3>

          <p>Animated gradient border</p>

        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Gradient Upload</h3>
          <span class="card-tag tag-new">New</span>
        </div>

        <p>
          Vibrant upload component with animated modern gradients.
        </p>

        <div class="actions">

          <button class="action-btn view-btn" onclick="toggleCode('code-gradient-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-gradient-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>

        </div>

        <pre class="code-block" id="code-gradient-upload"><code>&lt;div class="upload-box gradient-upload"&gt;
  &lt;div class="upload-icon"&gt;✦&lt;/div&gt;
  &lt;h3&gt;Gradient Upload&lt;/h3&gt;
  &lt;p&gt;Animated gradient border&lt;/p&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 4 -->

    <div class="upload-card neon-card" data-name="neon upload cyberpunk glowing glow neon" data-cat="gradient">

      <div class="card-preview">

        <div class="upload-box neon-upload">
          <div class="upload-icon">⚡</div>
          <h3>Neon Upload</h3>
          <p>Cyberpunk glowing effect</p>
        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Neon Upload</h3>
          <span class="card-tag tag-trending">Hot</span>
        </div>

        <p>
          Futuristic glowing upload box with animated neon borders.
        </p>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('code-neon-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-neon-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <pre class="code-block" id="code-neon-upload"><code>&lt;div class="upload-box neon-upload"&gt;
  &lt;div class="upload-icon"&gt;⚡&lt;/div&gt;
  &lt;h3&gt;Neon Upload&lt;/h3&gt;
  &lt;p&gt;Cyberpunk glowing effect&lt;/p&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 5 -->

    <div class="upload-card" data-name="dashed upload minimal clean style lightweight" data-cat="simple">

      <div class="card-preview">

        <div class="upload-box dashed-upload">
          <div class="upload-icon">📁</div>
          <h3>Dashed Upload</h3>
          <p>Minimal clean style</p>
        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Dashed Upload</h3>
          <span class="card-tag tag-essential">Minimal</span>
        </div>

        <p>
          Lightweight upload area with modern dashed border styling.
        </p>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('code-dashed-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-dashed-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <pre class="code-block" id="code-dashed-upload"><code>&lt;div class="upload-box dashed-upload"&gt;
  &lt;div class="upload-icon"&gt;📁&lt;/div&gt;
  &lt;h3&gt;Dashed Upload&lt;/h3&gt;
  &lt;p&gt;Minimal clean style&lt;/p&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 6 -->

    <div class="upload-card floating-card" data-name="floating upload animation hover soft" data-cat="simple">

      <div class="card-preview">

        <div class="upload-box floating-upload">
          <div class="upload-icon">🪄</div>
          <h3>Floating Upload</h3>
          <p>Soft floating animation</p>
        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Floating Upload</h3>
          <span class="card-tag tag-new">Animated</span>
        </div>

        <p>
          Upload card with smooth floating hover animation effect.
        </p>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('code-floating-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-floating-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <pre class="code-block" id="code-floating-upload"><code>&lt;div class="upload-box floating-upload"&gt;
  &lt;div class="upload-icon"&gt;🪄&lt;/div&gt;
  &lt;h3&gt;Floating Upload&lt;/h3&gt;
  &lt;p&gt;Soft floating animation&lt;/p&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 7 -->

    <div class="upload-card dark-card" data-name="dark upload elegant interface dashboard theme" data-cat="premium">

      <div class="card-preview">

        <div class="upload-box dark-upload">
          <div class="upload-icon">🌙</div>
          <h3>Dark Upload</h3>
          <p>Elegant dark interface</p>
        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Dark Upload</h3>
          <span class="card-tag tag-essential">Dark UI</span>
        </div>

        <p>
          Professional dark themed upload component for dashboards.
        </p>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('code-dark-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-dark-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <pre class="code-block" id="code-dark-upload"><code>&lt;div class="upload-box dark-upload"&gt;
  &lt;div class="upload-icon"&gt;🌙&lt;/div&gt;
  &lt;h3&gt;Dark Upload&lt;/h3&gt;
  &lt;p&gt;Elegant dark interface&lt;/p&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 8 -->

    <div class="upload-card preview-card" data-name="image upload preview circular avatar gallery profile" data-cat="simple">

      <div class="card-preview">

        <div class="upload-box image-upload">
          <div class="preview-circle">🖼</div>
          <h3>Image Preview</h3>
          <p>Preview selected images</p>
        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Image Upload</h3>
          <span class="card-tag tag-essential">Useful</span>
        </div>

        <p>
          Upload component designed for profile and gallery images.
        </p>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('code-image-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-image-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <pre class="code-block" id="code-image-upload"><code>&lt;div class="upload-box image-upload"&gt;
  &lt;div class="preview-circle"&gt;🖼&lt;/div&gt;
  &lt;h3&gt;Image Preview&lt;/h3&gt;
  &lt;p&gt;Preview selected images&lt;/p&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 9 -->

    <div class="upload-card progress-card" data-name="progress upload animated status updates timeline indicator" data-cat="premium">

      <div class="card-preview">

        <div class="upload-box progress-upload">

          <div class="upload-icon">🚀</div>

          <h3>Progress Upload</h3>

          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>

          <p>Uploading files...</p>

        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Progress Upload</h3>
          <span class="card-tag tag-trending">Advanced</span>
        </div>

        <p>
          Upload UI with animated progress indicator and status updates.
        </p>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('code-progress-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-progress-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <pre class="code-block" id="code-progress-upload"><code>&lt;div class="upload-box progress-upload"&gt;
  &lt;div class="upload-icon"&gt;🚀&lt;/div&gt;
  &lt;h3&gt;Progress Upload&lt;/h3&gt;
  &lt;div class="progress-bar"&gt;
    &lt;div class="progress-fill"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;p&gt;Uploading files...&lt;/p&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 10 (NEW): Aurora Mesh Gradient Dropzone -->

    <div class="upload-card" data-name="aurora mesh gradient glassmorphism float upload dropzone" data-cat="gradient">

      <div class="card-preview">

        <div class="upload-box aurora-upload">
          <div class="aurora-bg"></div>
          <div class="aurora-content">
            <div class="upload-icon">🌈</div>
            <h3>Aurora Upload</h3>
            <p>Animated mesh background</p>
          </div>
        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Aurora Gradient</h3>
          <span class="card-tag tag-new">Brand New</span>
        </div>

        <p>
          Dynamic glowing mesh gradient behind frosted glass overlay with micro-interactions.
        </p>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('code-aurora-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-aurora-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <pre class="code-block" id="code-aurora-upload"><code>&lt;div class="upload-box aurora-upload"&gt;
  &lt;div class="aurora-bg"&gt;&lt;/div&gt;
  &lt;div class="aurora-content"&gt;
    &lt;div class="upload-icon"&gt;🌈&lt;/div&gt;
    &lt;h3&gt;Aurora Upload&lt;/h3&gt;
    &lt;p&gt;Animated mesh background&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 11 (NEW): Secure Biometric Upload -->

    <div class="upload-card" data-name="secure biometric scanning fingerprint shield laser encrypted" data-cat="premium">

      <div class="card-preview dark-preview">

        <div class="upload-box biometric-upload">
          <div class="scan-grid"></div>
          <div class="scan-laser"></div>
          <div class="upload-icon security-icon">🛡️</div>
          <h3>Secure Upload</h3>
          <p>AES-256 Encrypted Transfer</p>
        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>Secure Encrypted</h3>
          <span class="card-tag tag-new">Brand New</span>
        </div>

        <p>
          Cybersecurity-themed upload zone with active laser scanning overlay and neon accents.
        </p>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('code-biometric-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-biometric-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <pre class="code-block" id="code-biometric-upload"><code>&lt;div class="upload-box biometric-upload"&gt;
  &lt;div class="scan-grid"&gt;&lt;/div&gt;
  &lt;div class="scan-laser"&gt;&lt;/div&gt;
  &lt;div class="upload-icon security-icon"&gt;🛡️&lt;/div&gt;
  &lt;h3&gt;Secure Upload&lt;/h3&gt;
  &lt;p&gt;AES-256 Encrypted Transfer&lt;/p&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>

    <!-- CARD 12 (NEW): Minimalist Stack / List Upload -->

    <div class="upload-card" data-name="minimalist stack list folder documents item queue" data-cat="simple">

      <div class="card-preview">

        <div class="upload-box stack-upload">
          <div class="mini-dropzone">
            <span class="mini-dropzone-icon"><i class="fa-solid fa-cloud-arrow-up"></i></span>
            <span>Drag items here</span>
          </div>
          <div class="file-stack-list">
            <div class="file-stack-item">
              <span class="file-item-icon text-pdf"><i class="fa-solid fa-file-pdf"></i></span>
              <div class="file-item-details">
                <span class="file-item-name">invoice_may_2026.pdf</span>
                <span class="file-item-size">1.4 MB • Complete</span>
              </div>
              <span class="file-item-status status-check"><i class="fa-solid fa-circle-check"></i></span>
            </div>
            <div class="file-stack-item loading">
              <span class="file-item-icon text-img"><i class="fa-solid fa-file-image"></i></span>
              <div class="file-item-details">
                <span class="file-item-name">profile_photo.png</span>
                <span class="file-item-size">4.2 MB • 65% uploaded</span>
              </div>
              <span class="file-item-status spinner-ring-mini"></span>
            </div>
          </div>
        </div>

      </div>

      <div class="card-content">

        <div class="card-top">
          <h3>File Stack Queue</h3>
          <span class="card-tag tag-new">Brand New</span>
        </div>

        <p>
          A compact drag-and-drop widget showcasing file uploading states and completion marks.
        </p>

        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('code-stack-upload', this)">
            <i class="fa-solid fa-code"></i> View Code
          </button>
          <button class="action-btn copy-btn" onclick="copyCode('code-stack-upload', this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>

        <pre class="code-block" id="code-stack-upload"><code>&lt;div class="upload-box stack-upload"&gt;
  &lt;div class="mini-dropzone"&gt;
    &lt;span class="mini-dropzone-icon"&gt;&lt;i class="fa-solid fa-cloud-arrow-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;span&gt;Drag items here&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="file-stack-list"&gt;
    &lt;div class="file-stack-item"&gt;
      &lt;span class="file-item-icon text-pdf"&gt;&lt;i class="fa-solid fa-file-pdf"&gt;&lt;/i&gt;&lt;/span&gt;
      &lt;div class="file-item-details"&gt;
        &lt;span class="file-item-name"&gt;invoice_may_2026.pdf&lt;/span&gt;
        &lt;span class="file-item-size"&gt;1.4 MB • Complete&lt;/span&gt;
      &lt;/div&gt;
      &lt;span class="file-item-status status-check"&gt;&lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      </div>

    </div>
  
  </section>
```
