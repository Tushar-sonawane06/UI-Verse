import re

css_content = """
/* =========================================================
   NEW PIXEL COMPONENTS
========================================================= */

/* TABS */
.pixel-tabs {
  display: flex;
  gap: 4px;
  border-bottom: 4px solid var(--border);
  padding-bottom: 4px;
}
.pixel-tab {
  padding: 8px 12px;
  background: #1d1d1d;
  color: #fff;
  border: 4px solid #1d1d1d;
  border-bottom: none;
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
  cursor: pointer;
}
.pixel-tab.active {
  background: var(--card);
  border-color: white;
  color: var(--green);
}

/* CHECKBOX */
.pixel-checkbox-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 12px;
}
.pixel-checkbox-container input {
  display: none;
}
.pixel-checkmark {
  width: 24px;
  height: 24px;
  background: #000;
  border: 4px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pixel-checkbox-container input:checked + .pixel-checkmark::after {
  content: "";
  width: 12px;
  height: 12px;
  background: var(--green);
}

/* RADIO */
.pixel-radio-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 12px;
}
.pixel-radio-container input {
  display: none;
}
.pixel-radio {
  width: 24px;
  height: 24px;
  background: #000;
  border: 4px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pixel-radio-container input:checked + .pixel-radio::after {
  content: "";
  width: 10px;
  height: 10px;
  background: var(--yellow);
  border-radius: 50%;
}

/* SLIDER */
.pixel-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #000;
  border: 2px solid white;
  outline: none;
}
.pixel-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 24px;
  background: var(--blue);
  border: 4px solid white;
  cursor: pointer;
}

/* SELECT / DROPDOWN */
.pixel-select {
  padding: 12px;
  background: #000;
  color: var(--green);
  border: 4px solid white;
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
  cursor: pointer;
  outline: none;
}

/* ACCORDION */
.pixel-accordion {
  width: 100%;
  border: 4px solid white;
}
.pixel-accordion-header {
  background: #1d1d1d;
  padding: 12px;
  font-size: 10px;
  cursor: pointer;
  border-bottom: 4px solid white;
  display: flex;
  justify-content: space-between;
}
.pixel-accordion-content {
  background: #000;
  padding: 12px;
  font-size: 10px;
  line-height: 1.6;
}

/* SKELETON */
.pixel-skeleton {
  width: 100%;
  height: 20px;
  background: #222;
  margin-bottom: 8px;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

/* BREADCRUMBS */
.pixel-breadcrumbs {
  display: flex;
  gap: 8px;
  font-size: 10px;
}
.pixel-breadcrumbs a {
  color: var(--blue);
  text-decoration: none;
}
.pixel-breadcrumbs span {
  color: white;
}

/* SPINNER */
.pixel-spinner {
  width: 32px;
  height: 32px;
  border: 4px solid var(--border);
  border-top: 4px solid var(--green);
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* TOAST */
.pixel-toast {
  padding: 16px;
  background: var(--green);
  color: black;
  border: 4px solid white;
  font-size: 10px;
  font-weight: bold;
}

/* STEPPER */
.pixel-stepper {
  display: flex;
  align-items: center;
  gap: 12px;
}
.pixel-step {
  width: 24px;
  height: 24px;
  background: #111;
  border: 4px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}
.pixel-step.completed {
  background: var(--green);
  color: black;
}
.pixel-step-line {
  flex: 1;
  height: 4px;
  background: white;
}

/* DIVIDER */
.pixel-divider {
  width: 100%;
  height: 4px;
  background: repeating-linear-gradient(
    90deg,
    white,
    white 8px,
    transparent 8px,
    transparent 16px
  );
}

/* PAGINATION */
.pixel-pagination {
  display: flex;
  gap: 8px;
}
.pixel-page {
  padding: 8px 12px;
  background: #111;
  border: 4px solid white;
  color: white;
  font-size: 10px;
  cursor: pointer;
}
.pixel-page.active {
  background: var(--yellow);
  color: black;
}

/* RATING */
.pixel-rating {
  display: flex;
  gap: 4px;
  color: var(--yellow);
  font-size: 20px;
}
.pixel-star {
  cursor: pointer;
}
.pixel-star.empty {
  color: #333;
}
"""

html_cards = """
  <!-- CARD: TABS -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">TABS</span>
      <span class="pixel-level">LVL 15</span>
    </div>
    <h3>Pixel Tabs</h3>
    <p>Retro style tabbed navigation for organizing content menus.</p>
    <div class="preview-box">
      <div class="pixel-tabs">
        <div class="pixel-tab active">INV</div>
        <div class="pixel-tab">MAP</div>
        <div class="pixel-tab">SKILL</div>
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: CHECKBOX -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">INPUT</span>
      <span class="pixel-level">LVL 16</span>
    </div>
    <h3>Pixel Checkbox</h3>
    <p>Chunky 8-bit checkbox input for forms and settings.</p>
    <div class="preview-box">
      <label class="pixel-checkbox-container">
        <input type="checkbox" checked>
        <span class="pixel-checkmark"></span>
        ENABLE SOUND
      </label>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: RADIO -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">INPUT</span>
      <span class="pixel-level">LVL 17</span>
    </div>
    <h3>Pixel Radio</h3>
    <p>Classic circular retro radio button for multiple choice.</p>
    <div class="preview-box">
      <label class="pixel-radio-container">
        <input type="radio" name="difficulty" checked>
        <span class="pixel-radio"></span>
        HARD MODE
      </label>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: SLIDER -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">INPUT</span>
      <span class="pixel-level">LVL 18</span>
    </div>
    <h3>Pixel Slider</h3>
    <p>Blocky range slider input for adjusting values.</p>
    <div class="preview-box">
      <div style="width:80%;">
        <input type="range" min="1" max="100" value="50" class="pixel-slider">
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: SELECT -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">INPUT</span>
      <span class="pixel-level">LVL 19</span>
    </div>
    <h3>Pixel Select</h3>
    <p>Retro dropdown menu for choosing game options.</p>
    <div class="preview-box">
      <select class="pixel-select">
        <option>WARRIOR</option>
        <option>MAGE</option>
        <option>ROGUE</option>
      </select>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: ACCORDION -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">DATA</span>
      <span class="pixel-level">LVL 20</span>
    </div>
    <h3>Pixel Accordion</h3>
    <p>Expandable content panels styled like old dialogs.</p>
    <div class="preview-box">
      <div class="pixel-accordion">
        <div class="pixel-accordion-header">QUEST LOG <span>+</span></div>
        <div class="pixel-accordion-content">Defeat 10 Slimes in the Forest of Doom.</div>
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: SKELETON -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">FEEDBACK</span>
      <span class="pixel-level">LVL 21</span>
    </div>
    <h3>Pixel Skeleton</h3>
    <p>Retro animated skeleton loader for loading states.</p>
    <div class="preview-box">
      <div style="width:80%;">
        <div class="pixel-skeleton" style="width: 100%;"></div>
        <div class="pixel-skeleton" style="width: 70%;"></div>
        <div class="pixel-skeleton" style="width: 85%;"></div>
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: BREADCRUMBS -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">NAV</span>
      <span class="pixel-level">LVL 22</span>
    </div>
    <h3>Pixel Breadcrumbs</h3>
    <p>Navigation trail indicator for deep nested menus.</p>
    <div class="preview-box">
      <div class="pixel-breadcrumbs">
        <a href="#">WORLD</a> <span>></span>
        <a href="#">TOWN</a> <span>></span>
        <span>SHOP</span>
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: SPINNER -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">FEEDBACK</span>
      <span class="pixel-level">LVL 23</span>
    </div>
    <h3>Pixel Spinner</h3>
    <p>Blocky rotating loading spinner element.</p>
    <div class="preview-box">
      <div class="pixel-spinner"></div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: TOAST -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">ALERT</span>
      <span class="pixel-level">LVL 24</span>
    </div>
    <h3>Pixel Toast</h3>
    <p>Notification popup for temporary game messages.</p>
    <div class="preview-box">
      <div class="pixel-toast">
        ITEM SAVED
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: STEPPER -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">NAV</span>
      <span class="pixel-level">LVL 25</span>
    </div>
    <h3>Pixel Stepper</h3>
    <p>Progress indicator for multi-step retro flows.</p>
    <div class="preview-box">
      <div class="pixel-stepper">
        <div class="pixel-step completed">1</div>
        <div class="pixel-step-line"></div>
        <div class="pixel-step">2</div>
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: DIVIDER -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">LAYOUT</span>
      <span class="pixel-level">LVL 26</span>
    </div>
    <h3>Pixel Divider</h3>
    <p>Dashed separator line for UI sections.</p>
    <div class="preview-box">
      <div style="width:80%; padding: 20px 0;">
        <div class="pixel-divider"></div>
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: PAGINATION -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">NAV</span>
      <span class="pixel-level">LVL 27</span>
    </div>
    <h3>Pixel Pagination</h3>
    <p>Blocky page numbers for scrolling through items.</p>
    <div class="preview-box">
      <div class="pixel-pagination">
        <div class="pixel-page">&lt;</div>
        <div class="pixel-page active">1</div>
        <div class="pixel-page">2</div>
        <div class="pixel-page">&gt;</div>
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>

  <!-- CARD: RATING -->
  <div class="pixel-card">
    <div class="card-top">
      <span class="pixel-tag">DATA</span>
      <span class="pixel-level">LVL 28</span>
    </div>
    <h3>Pixel Rating</h3>
    <p>Star rating system with retro pixel stars.</p>
    <div class="preview-box">
      <div class="pixel-rating">
        <span class="pixel-star">★</span>
        <span class="pixel-star">★</span>
        <span class="pixel-star">★</span>
        <span class="pixel-star empty">★</span>
      </div>
    </div>
    <div class="card-actions">
      <button class="view-btn">VIEW</button>
      <button class="copy-btn">COPY</button>
    </div>
  </div>
"""

def update_css():
    with open(r'e:\nsoc26\UI-Verse\retroui.css', 'a', encoding='utf-8') as f:
        f.write(css_content)

def update_html():
    with open(r'e:\nsoc26\UI-Verse\retroui.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # The file has a section `<!-- KEEP ALL YOUR EXISTING PIXEL CARDS HERE -->`
    # or we can insert right before the first `</section>` that closes `.pixel-grid`.
    
    parts = html.split('</section>')
    
    # Let's find the sections.
    # The first `<section class="pixel-grid">` might end around part[2] or part[3].
    # A safer approach is to replace `</section>` after the last component in the grid.
    
    # We can inject right before the `</div>` that closes `.main-wrapper`
    # Or just replace `<!-- KEEP ALL YOUR EXISTING PIXEL CARDS HERE -->`
    
    if "<!-- KEEP ALL YOUR EXISTING PIXEL CARDS HERE -->" in html:
        html = html.replace("<!-- KEEP ALL YOUR EXISTING PIXEL CARDS HERE -->", html_cards + "\\n    <!-- KEEP ALL YOUR EXISTING PIXEL CARDS HERE -->")
    else:
        # Find all occurrences of `<section class="pixel-grid">`
        # and insert at the end of the first one.
        idx = html.find('<section class="pixel-grid">')
        if idx != -1:
            end_idx = html.find('</section>', idx)
            html = html[:end_idx] + html_cards + html[end_idx:]

        # If there are duplicates, also inject in the second one
        idx2 = html.find('<section class="pixel-grid">', idx + 1)
        if idx2 != -1:
            end_idx2 = html.find('</section>', idx2)
            html = html[:end_idx2] + html_cards + html[end_idx2:]

    with open(r'e:\nsoc26\UI-Verse\retroui.html', 'w', encoding='utf-8') as f:
        f.write(html)

update_css()
update_html()
print("Successfully added 14 new components to retroui!")
