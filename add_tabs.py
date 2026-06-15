import re

css_to_append = """
/* =========================================================
   TC-12 // 3D FLIP TABS
========================================================= */
.tab-3d-flip {
  display: flex;
  gap: 16px;
  perspective: 1000px;
}
.tab-3d-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 12px 24px;
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  transform-style: preserve-3d;
}
.tab-3d-item:hover {
  transform: translateY(-4px) rotateX(10deg);
  background: rgba(255, 255, 255, 0.1);
}
.tab-3d-item.active {
  background: linear-gradient(135deg, #f43f5e, #7b61ff);
  color: #fff;
  border-color: #f43f5e;
  transform: translateZ(20px);
  box-shadow: 0 10px 20px rgba(244, 63, 94, 0.3);
}

/* =========================================================
   TC-13 // RIPPLE TABS
========================================================= */
.tab-ripple-container {
  display: flex;
  gap: 4px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 4px;
  border-radius: 99px;
  overflow: hidden;
}
.tab-ripple-item {
  position: relative;
  background: transparent;
  border: none;
  color: #94a3b8;
  padding: 12px 28px;
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: 99px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s;
}
.tab-ripple-item::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(235, 104, 53, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s ease-out, height 0.5s ease-out, opacity 0.5s;
  opacity: 0;
}
.tab-ripple-item.active {
  color: #eb6835;
}
.tab-ripple-item.active::after {
  width: 150px;
  height: 150px;
  opacity: 1;
}

/* =========================================================
   TC-14 // DIAL SELECTOR
========================================================= */
.dial-selector-container {
  position: relative;
  width: 200px;
  height: 200px;
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dial-node {
  position: absolute;
  width: 32px;
  height: 32px;
  background: #1e1e2d;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}
.dial-node:nth-child(1) { top: -16px; left: calc(50% - 16px); }
.dial-node:nth-child(2) { right: -16px; top: calc(50% - 16px); }
.dial-node:nth-child(3) { bottom: -16px; left: calc(50% - 16px); }
.dial-node:nth-child(4) { left: -16px; top: calc(50% - 16px); }
.dial-node.active {
  background: linear-gradient(135deg, #f43f5e, #7b61ff);
  border-color: #f43f5e;
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(123, 97, 255, 0.5);
}

/* =========================================================
   TC-15 // ANALYTICS DASHBOARD TABS
========================================================= */
.tab-analytics {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.tab-analytics-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: transparent;
  border: 1px solid transparent;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  cursor: pointer;
  text-align: left;
  transition: 0.3s;
}
.tab-analytics-item i {
  margin-top: 4px;
}
.tab-analytics-item h4 {
  font-family: var(--font-heading);
  color: #fff;
  font-size: 16px;
  margin-bottom: 6px;
  transition: 0.3s;
}
.tab-analytics-item p {
  font-family: var(--font-body);
  font-size: 13px;
  line-height: 1.5;
}
.tab-analytics-item.active {
  border-left-color: #eb6835;
  background: rgba(235, 104, 53, 0.05);
}
.tab-analytics-item.active h4 {
  color: #eb6835;
}

/* =========================================================
   TC-16 // MAGNETIC LIQUID TABS
========================================================= */
.tab-liquid-container {
  display: flex;
  gap: 20px;
  position: relative;
}
.tab-liquid-item {
  background: none;
  border: none;
  color: #94a3b8;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  padding: 12px 0;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;
  z-index: 2;
}
.tab-liquid-item.active {
  color: #10b981;
}
.tab-liquid-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 40px;
  background: #10b981;
  border-radius: 4px;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), width 0.3s;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
}
"""

with open('e:/nsoc26/UI-Verse/tabs-components.css', 'a', encoding='utf-8') as f:
    f.write(css_to_append)

html_to_append = """
      <!-- VARIANT 12: 3D FLIP TABS -->
      <div class="component-card" id="card-model-12">
        <div class="card-header">
          <span class="card-badge">MODEL TC-12 // 3D FLIP TABS</span>
          <div class="card-icon red"><i class="fa-solid fa-cube"></i></div>
        </div>
        <h2 class="card-title">3D Flip Tabs</h2>
        <p class="card-desc">Interactive perspective layouts. Tabs tilt and rotate in 3D coordinate space when hovered or selected.</p>
        
        <div class="preview-box">
          <nav class="tab-3d-flip" data-tab-group="group12">
            <button type="button" class="tab-3d-item tab-item-js active" onclick="runtimeSwitchTab(this)">Database</button>
            <button type="button" class="tab-3d-item tab-item-js" onclick="runtimeSwitchTab(this)">Server</button>
            <button type="button" class="tab-3d-item tab-item-js" onclick="runtimeSwitchTab(this)">Frontend</button>
          </nav>
        </div>

        <div class="card-actions">
          <button type="button" class="btn btn-secondary"><i class="fa-solid fa-code"></i><span>Inspect Codebase</span></button>
          <button type="button" class="btn btn-primary"><i class="fa-solid fa-copy"></i><span>Harvest Blueprint</span></button>
        </div>
      </div>

      <!-- VARIANT 13: RIPPLE TABS -->
      <div class="component-card" id="card-model-13">
        <div class="card-header">
          <span class="card-badge">MODEL TC-13 // RIPPLE WAVE</span>
          <div class="card-icon orange"><i class="fa-solid fa-water"></i></div>
        </div>
        <h2 class="card-title">Ripple Tabs</h2>
        <p class="card-desc">Google Material style. Propagates a glowing ripple wave expanding outward from the cursor click point.</p>
        
        <div class="preview-box">
          <nav class="tab-ripple-container" data-tab-group="group13">
            <button type="button" class="tab-ripple-item tab-item-js active" onclick="runtimeSwitchTab(this)">Analytics</button>
            <button type="button" class="tab-ripple-item tab-item-js" onclick="runtimeSwitchTab(this)">Audience</button>
            <button type="button" class="tab-ripple-item tab-item-js" onclick="runtimeSwitchTab(this)">Campaigns</button>
          </nav>
        </div>

        <div class="card-actions">
          <button type="button" class="btn btn-secondary"><i class="fa-solid fa-code"></i><span>Inspect Codebase</span></button>
          <button type="button" class="btn btn-primary"><i class="fa-solid fa-copy"></i><span>Harvest Blueprint</span></button>
        </div>
      </div>

      <!-- VARIANT 14: DIAL SELECTOR -->
      <div class="component-card" id="card-model-14">
        <div class="card-header">
          <span class="card-badge">MODEL TC-14 // RADIAL DIAL</span>
          <div class="card-icon purple"><i class="fa-solid fa-compass"></i></div>
        </div>
        <h2 class="card-title">Dial Selector</h2>
        <p class="card-desc">Radial dialing system. Click rotations spin the dashed border wheel and reveal targeted panel messages.</p>
        
        <div class="preview-box">
          <div class="dial-selector-container" data-tab-group="group14">
            <button type="button" class="dial-node tab-item-js active" onclick="runtimeSwitchTab(this)"><i class="fa-solid fa-chart-pie"></i></button>
            <button type="button" class="dial-node tab-item-js" onclick="runtimeSwitchTab(this)"><i class="fa-solid fa-bell"></i></button>
            <button type="button" class="dial-node tab-item-js" onclick="runtimeSwitchTab(this)"><i class="fa-solid fa-gear"></i></button>
            <button type="button" class="dial-node tab-item-js" onclick="runtimeSwitchTab(this)"><i class="fa-solid fa-clock"></i></button>
          </div>
        </div>

        <div class="card-actions">
          <button type="button" class="btn btn-secondary"><i class="fa-solid fa-code"></i><span>Inspect Codebase</span></button>
          <button type="button" class="btn btn-primary"><i class="fa-solid fa-copy"></i><span>Harvest Blueprint</span></button>
        </div>
      </div>

      <!-- VARIANT 15: ANALYTICS DASHBOARD -->
      <div class="component-card" id="card-model-15">
        <div class="card-header">
          <span class="card-badge">MODEL TC-15 // VERTICAL DASHBOARD</span>
          <div class="card-icon blue"><i class="fa-solid fa-chart-line"></i></div>
        </div>
        <h2 class="card-title">Analytics Dashboard</h2>
        <p class="card-desc">Extensive vertical tab sections that combine bold typography, icons, and long-form descriptions for heavy dashboards.</p>
        
        <div class="preview-box">
          <nav class="tab-analytics" data-tab-group="group15">
            <button type="button" class="tab-analytics-item tab-item-js active" onclick="runtimeSwitchTab(this)">
              <i class="fa-solid fa-chart-column"></i>
              <div>
                <h4>Analytics Dashboard</h4>
                <p>Track real-time user activity, engagement metrics, bounce rates, and performance insights.</p>
              </div>
            </button>
            <button type="button" class="tab-analytics-item tab-item-js" onclick="runtimeSwitchTab(this)">
              <i class="fa-solid fa-bolt"></i>
              <div>
                <h4>Workflow Automation</h4>
                <p>Create intelligent automations, schedule workflows, and optimize productivity pipelines.</p>
              </div>
            </button>
            <button type="button" class="tab-analytics-item tab-item-js" onclick="runtimeSwitchTab(this)">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h4>Security Center</h4>
                <p>Enable advanced threat monitoring, access policies, encrypted sessions, and audit reports.</p>
              </div>
            </button>
          </nav>
        </div>

        <div class="card-actions">
          <button type="button" class="btn btn-secondary"><i class="fa-solid fa-code"></i><span>Inspect Codebase</span></button>
          <button type="button" class="btn btn-primary"><i class="fa-solid fa-copy"></i><span>Harvest Blueprint</span></button>
        </div>
      </div>

      <!-- VARIANT 16: MAGNETIC LIQUID TABS -->
      <div class="component-card" id="card-model-16">
        <div class="card-header">
          <span class="card-badge">MODEL TC-16 // MAGNETIC LIQUID</span>
          <div class="card-icon green"><i class="fa-solid fa-magnet"></i></div>
        </div>
        <h2 class="card-title">Magnetic Liquid Tabs</h2>
        <p class="card-desc">Sleek underline indicator that snaps magnetically to the selected tab with an elastic transition and glowing aura.</p>
        
        <div class="preview-box">
          <nav class="tab-liquid-container" data-tab-group="group16">
            <button type="button" class="tab-liquid-item tab-item-js active" data-index="0" onclick="switchLiquidTab(this)">Overview</button>
            <button type="button" class="tab-liquid-item tab-item-js" data-index="1" onclick="switchLiquidTab(this)">Metrics</button>
            <button type="button" class="tab-liquid-item tab-item-js" data-index="2" onclick="switchLiquidTab(this)">Logs</button>
            <div class="tab-liquid-indicator" style="transform: translateX(0px);"></div>
          </nav>
        </div>

        <div class="card-actions">
          <button type="button" class="btn btn-secondary"><i class="fa-solid fa-code"></i><span>Inspect Codebase</span></button>
          <button type="button" class="btn btn-primary"><i class="fa-solid fa-copy"></i><span>Harvest Blueprint</span></button>
        </div>
      </div>
"""

js_to_append = """
    function switchLiquidTab(clickedElement) {
      const groupContainer = clickedElement.closest('[data-tab-group]');
      if (!groupContainer) return;
      
      const siblingTabs = groupContainer.querySelectorAll('.tab-item-js');
      siblingTabs.forEach(tab => tab.classList.remove('active'));
      clickedElement.classList.add('active');
      
      const index = parseInt(clickedElement.getAttribute('data-index') || '0', 10);
      const indicator = groupContainer.querySelector('.tab-liquid-indicator');
      
      if (indicator) {
        const offsetLeft = clickedElement.offsetLeft;
        const width = clickedElement.offsetWidth;
        indicator.style.transform = `translateX(${offsetLeft}px)`;
        indicator.style.width = `${width}px`;
      }
    }
"""

with open('e:/nsoc26/UI-Verse/tabs-components.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Insert the HTML just before </section> which closes the cards-grid
html_content = html_content.replace('    </section>', html_to_append + '    </section>')

# Insert JS before </body>
html_content = html_content.replace('</body>', js_to_append + '</body>')

with open('e:/nsoc26/UI-Verse/tabs-components.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Added 5 new tabs components successfully!")
