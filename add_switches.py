import re

# Append CSS
css_to_append = """
/* 11. Minimal Dot Switch */
.minimal-dot-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}
.minimal-dot-switch input { opacity: 0; width: 0; height: 0; }
.minimal-dot-slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: transparent;
  border: 2px solid var(--border-color);
  border-radius: 24px;
  transition: .3s;
}
.minimal-dot-slider::before {
  position: absolute;
  content: "";
  height: 12px; width: 12px;
  left: 4px; bottom: 4px;
  background-color: var(--text-secondary);
  border-radius: 50%;
  transition: .3s;
}
.minimal-dot-switch input:checked + .minimal-dot-slider {
  border-color: #fff;
}
.minimal-dot-switch input:checked + .minimal-dot-slider::before {
  transform: translateX(26px);
  background-color: #fff;
  box-shadow: 0 0 10px rgba(255,255,255,0.8);
}

/* 12. Cyber Hex Switch */
.cyber-hex-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}
.cyber-hex-switch input { opacity: 0; width: 0; height: 0; }
.cyber-hex-slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #0d0d12;
  border: 1px solid #ff003c;
  clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%);
  transition: .3s;
}
.cyber-hex-slider::before {
  position: absolute;
  content: "";
  height: 18px; width: 18px;
  left: 6px; bottom: 5px;
  background-color: #ff003c;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: .3s;
}
.cyber-hex-switch input:checked + .cyber-hex-slider {
  background-color: rgba(255,0,60,0.1);
  box-shadow: 0 0 15px rgba(255,0,60,0.4);
}
.cyber-hex-switch input:checked + .cyber-hex-slider::before {
  transform: translateX(28px);
  background-color: #ff003c;
  box-shadow: 0 0 10px #ff003c;
}

/* 13. Glass Morphism Switch */
.glass-morph-switch {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
}
.glass-morph-switch input { opacity: 0; width: 0; height: 0; }
.glass-morph-slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: inset 0 0 10px rgba(255,255,255,0.05);
  transition: .4s;
}
.glass-morph-slider::before {
  position: absolute;
  content: "";
  height: 30px; width: 30px;
  left: 4px; bottom: 4px;
  background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.glass-morph-switch input:checked + .glass-morph-slider {
  background: rgba(123, 97, 255, 0.2);
  border-color: rgba(123, 97, 255, 0.5);
}
.glass-morph-switch input:checked + .glass-morph-slider::before {
  transform: translateX(40px);
  background: linear-gradient(135deg, #a78bfa, #7b61ff);
}

/* 14. Brutalist Block Switch */
.brutalist-block-switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
}
.brutalist-block-switch input { opacity: 0; width: 0; height: 0; }
.brutalist-slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #fff;
  border: 3px solid #000;
  box-shadow: 4px 4px 0px #000;
  transition: .1s;
}
.brutalist-slider::before {
  position: absolute;
  content: "";
  height: 24px; width: 24px;
  left: 2px; bottom: 2px;
  background-color: #000;
  transition: .2s cubic-bezier(0.25, 1, 0.5, 1);
}
.brutalist-block-switch input:checked + .brutalist-slider {
  background-color: #ffeb3b;
}
.brutalist-block-switch input:checked + .brutalist-slider::before {
  transform: translateX(34px);
}
.brutalist-block-switch input:active + .brutalist-slider {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #000;
}

/* 15. Magnetic Track Switch */
.magnetic-track-switch {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 20px;
  margin-top: 8px;
}
.magnetic-track-switch input { opacity: 0; width: 0; height: 0; }
.magnetic-slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #2a2a35;
  border-radius: 20px;
  transition: .3s;
}
.magnetic-slider::before {
  position: absolute;
  content: "";
  height: 32px; width: 32px;
  left: -4px; bottom: -6px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.magnetic-track-switch input:checked + .magnetic-slider {
  background-color: #10b981;
}
.magnetic-track-switch input:checked + .magnetic-slider::before {
  transform: translateX(40px);
}
"""

with open('e:/nsoc26/UI-Verse/switchess.css', 'a', encoding='utf-8') as f:
    f.write(css_to_append)

html_to_insert = """
    <div class="component-card" data-name="minimal dot switch toggle" data-cat="basic">
      <div class="card-top">
        <span class="card-label">Minimal Dot Switch</span>
        <span class="card-tag tag-popular">Basic</span>
      </div>
      <div class="card-preview">
        <label class="minimal-dot-switch">
          <input type="checkbox" checked />
          <span class="minimal-dot-slider"></span>
        </label>
      </div>
      <p class="card-desc">Extremely minimal and clean dot slider. Perfect for clean, unopinionated user interfaces.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('sc11', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('sc11', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="sc11" class="code-block"><code>&lt;label class="minimal-dot-switch"&gt;
  &lt;input type="checkbox" checked /&gt;
  &lt;span class="minimal-dot-slider"&gt;&lt;/span&gt;
&lt;/label&gt;</code></pre>
    </div>

    <div class="component-card" data-name="cyber hex sci-fi switch toggle" data-cat="pro">
      <div class="card-top">
        <span class="card-label">Cyber Hex Switch</span>
        <span class="card-tag tag-pro">Pro</span>
      </div>
      <div class="card-preview">
        <label class="cyber-hex-switch">
          <input type="checkbox" />
          <span class="cyber-hex-slider"></span>
        </label>
      </div>
      <p class="card-desc">Sci-fi themed hexagonal clipped toggle switch. Emits a neon red glow on activation.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('sc12', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('sc12', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="sc12" class="code-block"><code>&lt;label class="cyber-hex-switch"&gt;
  &lt;input type="checkbox" /&gt;
  &lt;span class="cyber-hex-slider"&gt;&lt;/span&gt;
&lt;/label&gt;</code></pre>
    </div>

    <div class="component-card" data-name="glass morphism switch toggle" data-cat="trending">
      <div class="card-top">
        <span class="card-label">Glass Morphism Switch</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview">
        <label class="glass-morph-switch">
          <input type="checkbox" checked />
          <span class="glass-morph-slider"></span>
        </label>
      </div>
      <p class="card-desc">Modern frosted glass effect with a smooth gradient thumb and backdrop blur interactions.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('sc13', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('sc13', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="sc13" class="code-block"><code>&lt;label class="glass-morph-switch"&gt;
  &lt;input type="checkbox" checked /&gt;
  &lt;span class="glass-morph-slider"&gt;&lt;/span&gt;
&lt;/label&gt;</code></pre>
    </div>

    <div class="component-card" data-name="brutalist block switch toggle" data-cat="pro">
      <div class="card-top">
        <span class="card-label">Brutalist Block</span>
        <span class="card-tag tag-pro">Pro</span>
      </div>
      <div class="card-preview">
        <label class="brutalist-block-switch">
          <input type="checkbox" />
          <span class="brutalist-slider"></span>
        </label>
      </div>
      <p class="card-desc">Bold neo-brutalist toggle with sharp borders and solid shadow offsets.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('sc14', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('sc14', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="sc14" class="code-block"><code>&lt;label class="brutalist-block-switch"&gt;
  &lt;input type="checkbox" /&gt;
  &lt;span class="brutalist-slider"&gt;&lt;/span&gt;
&lt;/label&gt;</code></pre>
    </div>

    <div class="component-card" data-name="magnetic track switch toggle" data-cat="popular">
      <div class="card-top">
        <span class="card-label">Magnetic Track</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <label class="magnetic-track-switch">
          <input type="checkbox" checked />
          <span class="magnetic-slider"></span>
        </label>
      </div>
      <p class="card-desc">Thumb spans beyond the track boundaries creating a magnetic snapping effect.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('sc15', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('sc15', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="sc15" class="code-block"><code>&lt;label class="magnetic-track-switch"&gt;
  &lt;input type="checkbox" checked /&gt;
  &lt;span class="magnetic-slider"&gt;&lt;/span&gt;
&lt;/label&gt;</code></pre>
    </div>
"""

with open('e:/nsoc26/UI-Verse/switchess.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# The grid ends at `</div>\n</main>`
html_content = html_content.replace('  </div>\n</main>', html_to_insert + '\n  </div>\n</main>')

# Update the count in the hero section from "10 Styles" to "15 Styles"
html_content = html_content.replace('10 Styles', '15 Styles')

with open('e:/nsoc26/UI-Verse/switchess.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Added 5 new switches successfully!")
