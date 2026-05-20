/* =========================================================
   PREMIUM ADMIN PANEL INTERACTIVE SCRIPT — admin-panel.js
========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  initGlobalFilters();
  initAnalyticsDefault();
});

// ==========================================
// 1. THEME TOGGLE SYSTEM
// ==========================================
function initThemeSystem() {
  const themeBtn = document.querySelector('.theme-btn');
  if (!themeBtn) return;
  if (themeBtn.dataset.initialized) return;
  themeBtn.dataset.initialized = 'true';

  const icon = themeBtn.querySelector('i');

  // Check saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    icon.className = 'fa-solid fa-sun';
  } else {
    document.body.classList.remove('light-mode');
    icon.className = 'fa-solid fa-moon';
  }

  themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if (typeof showLiveToast === 'function') showLiveToast(isLight ? 'Switched to Light Theme' : 'Switched to Premium Dark Theme', 'success');
  });
}

// ==========================================
// 2. COMPONENT CATEGORY FILTERS
// ==========================================
function initGlobalFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.component-card');

  filterTabs.forEach(tab => {
    if (tab.dataset.initialized) return;
    tab.dataset.initialized = 'true';
    tab.addEventListener('click', () => {
      // Toggle active filter style
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Sidebar header links redirection simulation
  const sidebarLinks = document.querySelectorAll('.sidebar-nav li a');
  sidebarLinks.forEach(link => {
    if (link.dataset.initialized) return;
    link.dataset.initialized = 'true';
    link.addEventListener('click', (e) => {
      // If it is same page anchor or just testing, we can simulate
      const href = link.getAttribute('href');
      if (href === 'admin-panel.html') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

// ==========================================
// 3. COMPONENT 1: DASHBOARD LAYOUT SWITCHER
// ==========================================
function switchMockLayout(layout) {
  const mockDesktop = document.getElementById('mockDesktop');
  if (!mockDesktop) return;

  mockDesktop.className = 'mock-desktop';
  mockDesktop.classList.add(`layout-${layout}`);

  // Update button active states
  const buttons = document.querySelectorAll('.layout-toggle-btn');
  buttons.forEach(btn => {
    const isTarget = btn.getAttribute('onclick').includes(layout);
    btn.classList.toggle('active', isTarget);
  });

  if (typeof showLiveToast === 'function') showLiveToast(`Switched framework layout to: ${layout.toUpperCase()}`, 'success');
}

function triggerLayoutGlow() {
  const mockDesktop = document.getElementById('mockDesktop');
  if (!mockDesktop) return;

  mockDesktop.style.boxShadow = '0 0 35px var(--color-orange)';
  setTimeout(() => {
    mockDesktop.style.boxShadow = '';
  }, 1000);
}

// ==========================================
// 4. COMPONENT 2: TELEMETRY ANALYTICS WIDGET
// ==========================================
const dataPeriodSet = {
  '24h': {
    doughnutVal: 85,
    bars: [60, 80, 45, 95],
    pathArea: 'M 0 100 L 0 50 Q 50 20 100 60 T 200 30 T 300 40 L 300 100 Z',
    pathLine: 'M 0 50 Q 50 20 100 60 T 200 30 T 300 40'
  },
  '7d': {
    doughnutVal: 54,
    bars: [30, 95, 75, 40],
    pathArea: 'M 0 100 L 0 80 Q 50 40 100 30 T 200 65 T 300 15 L 300 100 Z',
    pathLine: 'M 0 80 Q 50 40 100 30 T 200 65 T 300 15'
  },
  '30d': {
    doughnutVal: 92,
    bars: [95, 40, 85, 80],
    pathArea: 'M 0 100 L 0 20 Q 50 90 100 10 T 200 40 T 300 35 L 300 100 Z',
    pathLine: 'M 0 20 Q 50 90 100 10 T 200 40 T 300 35'
  }
};

function initAnalyticsDefault() {
  updateAnalyticsPeriod('24h');
}

function updateAnalyticsPeriod(period) {
  const dataset = dataPeriodSet[period];
  if (!dataset) return;

  // Toggle active period style
  const buttons = document.querySelectorAll('.period-btn');
  buttons.forEach(btn => {
    const isTarget = btn.getAttribute('onclick').includes(period);
    btn.classList.toggle('active', isTarget);
  });

  // Redraw SVG paths
  const chartAreaPath = document.getElementById('chartAreaPath');
  const chartLinePath = document.getElementById('chartLinePath');
  if (chartAreaPath) chartAreaPath.setAttribute('d', dataset.pathArea);
  if (chartLinePath) chartLinePath.setAttribute('d', dataset.pathLine);

  // Animate Bar heights
  dataset.bars.forEach((heightVal, idx) => {
    const bar = document.getElementById(`bar-metric-${idx + 1}`);
    if (bar) bar.style.height = `${heightVal}%`;
  });

  // Redraw Doughnut Percentage
  const doughnutCircle = document.getElementById('doughnutCircle');
  const doughnutValue = document.getElementById('doughnutValue');
  if (doughnutCircle) {
    doughnutCircle.style.strokeDasharray = `${dataset.doughnutVal}, 100`;
  }
  if (doughnutValue) {
    doughnutValue.textContent = `${dataset.doughnutVal}%`;
  }

  if (typeof showLiveToast === 'function') showLiveToast(`Updated metrics data for period: ${period.toUpperCase()}`, 'success');
}

function triggerMetricPulse() {
  const bars = document.querySelectorAll('.column-bar-group .col-bar');
  bars.forEach(bar => {
    bar.style.transform = 'scaleY(1.3)';
    setTimeout(() => {
      bar.style.transform = '';
    }, 400);
  });
}

// ==========================================
// 5. COMPONENT 3: ADMIN COLLAPSIBLE SIDEBARS
// ==========================================
function toggleMiniSidebarCollapse() {
  const sidebar = document.getElementById('miniSidebar');
  const chevron = document.getElementById('miniChevron');
  if (!sidebar) return;

  sidebar.classList.toggle('collapsed');
  const isCollapsed = sidebar.classList.contains('collapsed');

  if (chevron) {
    chevron.className = isCollapsed ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left';
  }

  if (typeof showLiveToast === 'function') showLiveToast(isCollapsed ? 'Sidebar Collapsed (Space-Saver)' : 'Sidebar Expanded', 'success');
}

function switchMiniSidebarLink(elem) {
  const links = document.querySelectorAll('.mini-sidebar-menu li');
  links.forEach(l => l.classList.remove('active'));
  elem.parentNode.classList.add('active');
  const txt = elem.querySelector('span').textContent;
  if (typeof showLiveToast === 'function') showLiveToast(`Opened section: ${txt}`, 'success');
}

// ==========================================
// 6. COMPONENT 4: KPI STATISTICS CARDS
// ==========================================
function kpiCardSpotlight(event, element) {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  element.style.setProperty('--x', `${x}px`);
  element.style.setProperty('--y', `${y}px`);
}

function simulateKpiBounce() {
  const counters = document.querySelectorAll('.kpi-card-value');
  counters.forEach(c => {
    const val = parseInt(c.textContent.replace(/[^0-9]/g, ''), 10);
    const floatVal = Math.floor(val * (0.95 + Math.random() * 0.1));
    c.style.transform = 'translateY(-5px)';
    setTimeout(() => {
      c.textContent = c.textContent.startsWith('$') ? `$${floatVal.toLocaleString()}` : floatVal.toLocaleString();
      c.style.transform = '';
    }, 300);
  });
  if (typeof showLiveToast === 'function') showLiveToast('KPI Telemetry Counters Refreshed', 'success');
}

// ==========================================
// 7. COMPONENT 5: USER DIRECTORY ACTIONS
// ==========================================
function filterUserDirectoryTable() {
  const query = document.getElementById('userTableSearch').value.toLowerCase();
  const rows = document.querySelectorAll('#user-directory-table tbody tr');
  let matchCount = 0;

  rows.forEach(row => {
    const name = row.querySelector('.td-profile-info strong').textContent.toLowerCase();
    const email = row.querySelector('.td-profile-info span').textContent.toLowerCase();
    const role = row.querySelector('.td-role-badge').textContent.toLowerCase();
    const isMatch = name.includes(query) || email.includes(query) || role.includes(query);

    row.style.display = isMatch ? '' : 'none';
    if (isMatch) matchCount++;
  });

  const badge = document.getElementById('tableRecordsCount');
  if (badge) {
    badge.textContent = `${matchCount} active records`;
  }
}

function toggleAllUserCheckboxes(masterCheckbox) {
  const checkboxes = document.querySelectorAll('.user-row-checkbox');
  checkboxes.forEach(chk => {
    chk.checked = masterCheckbox.checked;
  });
}

function toggleUserRowStatus(btn) {
  if (!btn) return;
  const tr = btn.closest('tr');
  if (!tr) return;
  
  const statusSpan = tr.querySelector('.td-status');
  if (!statusSpan) return;

  const isActive = statusSpan.classList.contains('active');
  if (isActive) {
    statusSpan.className = 'td-status paused';
    statusSpan.textContent = 'Paused';
    if (typeof showLiveToast === 'function') showLiveToast('User Account Suspended', 'warning');
  } else {
    statusSpan.className = 'td-status active';
    statusSpan.textContent = 'Active';
    if (typeof showLiveToast === 'function') showLiveToast('User Account Restored', 'success');
  }
}

function simulateUserAddition() {
  const tableBody = document.querySelector('#user-directory-table tbody');
  if (!tableBody) return;

  const names = ['Evelyn Reed', 'Daniel Craig', 'Klaus Mikaelson', 'Diana Prince'];
  const emails = ['ereed@uiverse.io', 'dcraig@uiverse.io', 'klaus@uiverse.io', 'diana@uiverse.io'];
  const roles = ['operator', 'reviewer'];
  const avatarIds = [44, 21, 62, 59];

  const randomIdx = Math.floor(Math.random() * names.length);
  const selectedRole = roles[Math.floor(Math.random() * roles.length)];

  const tr = document.createElement('tr');
  tr.className = 'user-row';
  tr.innerHTML = `
    <td>
      <div class="td-checkbox-wrap">
        <input type="checkbox" class="user-row-checkbox">
      </div>
    </td>
    <td>
      <div class="td-profile-box">
        <img src="https://i.pravatar.cc/100?img=${avatarIds[randomIdx]}" alt="avatar" class="td-avatar">
        <div class="td-profile-info">
          <strong>${names[randomIdx]}</strong>
          <span>${emails[randomIdx]}</span>
        </div>
      </div>
    </td>
    <td><span class="td-role-badge ${selectedRole}">${selectedRole.toUpperCase()}</span></td>
    <td><span class="td-status active">Active</span></td>
    <td>
      <button type="button" class="td-action-icon-btn" onclick="toggleUserRowStatus(this)"><i class="fa-solid fa-power-off"></i> Toggle</button>
    </td>
  `;

  tableBody.appendChild(tr);
  filterUserDirectoryTable();
  if (typeof showLiveToast === 'function') showLiveToast(`Added operator row: ${names[randomIdx]}`, 'success');
}

// ==========================================
// 8. CODE DISPLAY & CLIPBOARD UTILS
// ==========================================
function toggleCode(id) {
  const pre = document.getElementById(id);
  if (!pre) return;

  if (pre.style.display === 'none') {
    pre.style.display = 'block';
    pre.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    pre.style.display = 'none';
  }
}

function copyCode(id) {
  const pre = document.getElementById(id);
  if (!pre) return;

  const rawCode = pre.querySelector('code').textContent;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(rawCode).then(() => {
      if (typeof showLiveToast === 'function') showLiveToast('Source code copied to clipboard!', 'success');
    }).catch(() => {
      if (typeof showLiveToast === 'function') showLiveToast('Copy failed, please retry.', 'error');
    });
  } else {
    // Fallback for non-secure HTTP contexts
    try {
      const textarea = document.createElement('textarea');
      textarea.value = rawCode;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      
      if (successful) {
        if (typeof showLiveToast === 'function') showLiveToast('Source code copied to clipboard!', 'success');
      } else {
        if (typeof showLiveToast === 'function') showLiveToast('Copy failed, please retry.', 'error');
      }
    } catch (err) {
      if (typeof showLiveToast === 'function') showLiveToast('Copy failed, please retry.', 'error');
    }
  }
}

// ==========================================
// 9. PREMIUM FLOATING TOAST SYSTEM
// ==========================================
function showLiveToast(message, type = 'success') {
  let container = document.querySelector('.live-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'live-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `premium-toast ${type}`;

  const iconClass = type === 'success' 
    ? 'fa-solid fa-circle-check' 
    : (type === 'warning' ? 'fa-solid fa-circle-exclamation' : 'fa-solid fa-circle-xmark');

  toast.innerHTML = `
    <div class="toast-icon"><i class="${iconClass}"></i></div>
    <div class="toast-content">
      <div class="toast-title">${type.toUpperCase()} Notification</div>
      <div class="toast-desc">${message}</div>
    </div>
    <button type="button" class="toast-close-btn" onclick="this.parentNode.remove()"><i class="fa-solid fa-xmark"></i></button>
    <div class="toast-progress-bar"></div>
  `;

  container.appendChild(toast);

  // Autoremove after 4s
  setTimeout(() => {
    toast.style.animation = 'toastSlideOut 0.4s ease forwards';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

// ==========================================
// 10. COMPREHENSIVE SEQUENCED TEST
// ==========================================
function triggerAllShowcase() {
  if (typeof showLiveToast === 'function') showLiveToast('Commencing Sequenced Showcase Diagnostics...', 'success');
  
  // Step 1: Layout toggle
  setTimeout(() => {
    switchMockLayout('glass');
  }, 1000);

  // Step 2: Telemetry refresh
  setTimeout(() => {
    updateAnalyticsPeriod('7d');
  }, 2200);

  // Step 3: Sidebar toggle
  setTimeout(() => {
    toggleMiniSidebarCollapse();
  }, 3400);

  // Step 4: KPI Update
  setTimeout(() => {
    simulateKpiBounce();
  }, 4600);

  // Step 5: Table record insert
  setTimeout(() => {
    simulateUserAddition();
  }, 5800);
}

function resetAllPanels() {
  switchMockLayout('split');
  updateAnalyticsPeriod('24h');
  
  const miniSidebar = document.getElementById('miniSidebar');
  if (miniSidebar && miniSidebar.classList.contains('collapsed')) {
    toggleMiniSidebarCollapse();
  }
  
  if (typeof showLiveToast === 'function') showLiveToast('All premium dashboards reset to baseline.', 'success');
}
