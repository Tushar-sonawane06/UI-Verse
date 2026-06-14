import re

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

with open('e:/nsoc26/UI-Verse/tabs.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the first occurrence of `</div>\n</main>` OR `    </section>\n\n  </main>` depending on tabs.html
# Let's just insert it before the first `<!DOCTYPE html>` inside if possible to fix duplication
if '<!DOCTYPE html>' in content[100:]:
    index = content.find('<!DOCTYPE html>', 100)
    # The first document ends around index. We just replace that document entirely by truncating.
    content = content[:index]

# Now append html_to_append before `</div>\n  </div>\n</main>` if it exists, otherwise `</main>` or `</section>`
if '<div class="tabs-comp-grid" id="tabsGrid">' in content:
    # It's like the grid we saw
    grid_end = content.find('  </div>\n</main>')
    if grid_end != -1:
        content = content[:grid_end] + html_to_append + content[grid_end:]
elif '    </section>\n\n  </main>' in content:
    section_end = content.find('    </section>\n\n  </main>')
    content = content[:section_end] + html_to_append + content[section_end:]

# Ensure js is added
if 'function switchLiquidTab' not in content:
    js_to_append = """
<script>
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
</script>
</body>
"""
    if '</body>' in content:
        content = content.replace('</body>', js_to_append)
    else:
        content += js_to_append + '</html>'

with open('e:/nsoc26/UI-Verse/tabs.html', 'w', encoding='utf-8') as f:
    f.write(content)
