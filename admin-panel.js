/* =========================================================
   PREMIUM ADMIN PANEL INTERACTIVE SCRIPT — admin-panel.js
   Unified Admin Dashboard System with Cross-Component State Sync,
   A11y Enhancements, and Advanced Data Management.
   ========================================================= */

// In-Memory Database for Operators
let USERS = [
  { id: 1, name: 'Marcus V.', email: 'marcus@uiverse.io', role: 'Lead Admin', status: 'Active', avatar: 'https://i.pravatar.cc/100?img=33' },
  { id: 2, name: 'Sarah Connor', email: 'sconnor@uiverse.io', role: 'Operator', status: 'Active', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: 3, name: 'Clara Jenkins', email: 'clara@uiverse.io', role: 'Reviewer', status: 'Paused', avatar: 'https://i.pravatar.cc/100?img=47' }
];

const ITEMS_PER_PAGE = 3;
let currentPage = 1;
let sortField = '';
let sortAsc = true;

document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  initGlobalFilters();
  initAnalyticsDefault();
  renderUserTable();

  // Escape key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeUserModal();
    }
  });
});

/* ==========================================
   1. THEME TOGGLE SYSTEM
   ========================================== */
function initThemeSystem() {
  const themeBtn = document.getElementById('darkModeToggle');
  if (!themeBtn) return;

  const icon = themeBtn.querySelector('i');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (icon) icon.className = 'fa-solid fa-sun';
  } else {
    document.body.classList.remove('light-mode');
    if (icon) icon.className = 'fa-solid fa-moon';
  }

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');

    if (icon) {
      icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    showLiveToast(
      isLight ? 'Switched to Light Theme' : 'Switched to Premium Dark Theme',
      'success'
    );
  });
}


function animateCounter(el, target) {
  let count = 0;

  const timer = setInterval(() => {
    count += Math.ceil(target / 60);

    if (count >= target) {
      count = target;
      clearInterval(timer);
    }

    el.textContent =
      "$" + count.toLocaleString();
  }, 20);
}

const toggle =
document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark")
      ? "dark"
      : "light"
  );
});

window.addEventListener("load", () => {

  const theme =
    localStorage.getItem("theme");

  if(theme === "dark"){
    document.body.classList.add("dark");
  }
});
/* ==========================================
   2. COMPONENT CATEGORY FILTERS
   ========================================== */
function initGlobalFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.component-card');

  filterTabs.forEach(tab => {
    if (tab.dataset.initialized) return;
    tab.dataset.initialized = 'true';
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        const shouldShow = filterVal === 'all' || category === filterVal;
        card.style.display = shouldShow ? 'block' : 'none';
      });

      announceToScreenReader(`Filtering dashboard layout: Showing ${tab.textContent}`);
    });
  });

  // Sidebar anchor links interception
  const sidebarLinks = document.querySelectorAll('.sidebar-nav li a');
  sidebarLinks.forEach(link => {
    if (link.dataset.initialized) return;
    link.dataset.initialized = 'true';
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === 'admin-panel.html') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================
   3. DASHBOARD LAYOUT SWITCHER
   ========================================== */
function switchMockLayout(layout) {
  const mockDesktop = document.getElementById('mockDesktop');
  if (!mockDesktop) return;

  mockDesktop.className = 'mock-desktop';
  mockDesktop.classList.add(`layout-${layout}`);

  const buttons = document.querySelectorAll('.layout-toggle-btn');
  buttons.forEach(btn => {
    const clickAttr = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', clickAttr.includes(layout));
  });

  showLiveToast(`Switched framework layout to: ${layout.toUpperCase()}`, 'success');
}

function triggerLayoutGlow() {
  const mockDesktop = document.getElementById('mockDesktop');
  if (!mockDesktop) return;

  mockDesktop.style.boxShadow = '0 0 35px var(--color-orange)';
  setTimeout(() => {
    mockDesktop.style.boxShadow = '';
  }, 1000);
}

/* ==========================================
   4. TELEMETRY ANALYTICS
   ========================================= */
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

  const buttons = document.querySelectorAll('.period-btn');
  buttons.forEach(btn => {
    const clickAttr = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', clickAttr.includes(period));
  });

  const chartAreaPath = document.getElementById('chartAreaPath');
  const chartLinePath = document.getElementById('chartLinePath');

  if (chartAreaPath) chartAreaPath.setAttribute('d', dataset.pathArea);
  if (chartLinePath) chartLinePath.setAttribute('d', dataset.pathLine);

  dataset.bars.forEach((heightVal, idx) => {
    const bar = document.getElementById(`bar-metric-${idx + 1}`);
    if (bar) bar.style.height = `${heightVal}%`;
  });

  const doughnutCircle = document.getElementById('doughnutCircle');
  const doughnutValue = document.getElementById('doughnutValue');

  if (doughnutCircle) doughnutCircle.style.strokeDasharray = `${dataset.doughnutVal}, 100`;
  if (doughnutValue) doughnutValue.textContent = `${dataset.doughnutVal}%`;

  showLiveToast(`Updated analytics metrics: ${period.toUpperCase()}`, 'success');
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

/* ==========================================
   5. MINI SIDEBAR NAVIGATION
   ========================================== */
function toggleMiniSidebarCollapse() {
  const sidebar = document.getElementById('miniSidebar');
  const chevron = document.getElementById('miniChevron');
  if (!sidebar) return;

  sidebar.classList.toggle('collapsed');
  const isCollapsed = sidebar.classList.contains('collapsed');

  if (chevron) {
    chevron.className = isCollapsed ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left';
  }

  showLiveToast(isCollapsed ? 'Sidebar Collapsed' : 'Sidebar Expanded', 'success');
}

function switchMiniSidebarLink(elem) {
  const links = document.querySelectorAll('.mini-sidebar-menu li');
  links.forEach(link => link.classList.remove('active'));

  if (elem.parentNode) {
    elem.parentNode.classList.add('active');
  }

  const text = elem.querySelector('span')?.textContent || 'Section';
  showLiveToast(`Opened section: ${text}`, 'success');
}

/* ==========================================
   6. KPI STATISTICS SPOTLIGHT
   ========================================== */
function kpiCardSpotlight(event, element) {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  element.style.setProperty('--x', `${x}px`);
  element.style.setProperty('--y', `${y}px`);
}

function simulateKpiBounce() {
  const counters = document.querySelectorAll('.kpi-card-value');
  counters.forEach(counter => {
    const numeric = parseInt(counter.textContent.replace(/[^0-9]/g, ''), 10);
    if (isNaN(numeric)) return;

    const updated = Math.floor(numeric * (0.95 + Math.random() * 0.1));
    counter.style.transform = 'translateY(-5px)';

    setTimeout(() => {
      counter.textContent = counter.textContent.startsWith('$')
        ? `$${updated.toLocaleString()}`
        : updated.toLocaleString();
      counter.style.transform = '';
    }, 300);
  });

  showLiveToast('KPI Telemetry Counters Refreshed', 'success');
}

/* ============================================================
   7. ADVANCED STATE DATA TABLE MANAGEMENT & VALIDATION
   ============================================================ */

function renderUserTable() {
  const tbody = document.querySelector('#user-directory-table tbody');
  if (!tbody) return;

  const searchQuery = document.getElementById('userTableSearch')?.value.toLowerCase() || '';

  // 7a. Filter User Directory
  let filtered = USERS.filter(user => {
    return user.name.toLowerCase().includes(searchQuery) ||
           user.email.toLowerCase().includes(searchQuery) ||
           user.role.toLowerCase().includes(searchQuery) ||
           user.status.toLowerCase().includes(searchQuery);
  });

  // 7b. Sort Columns alphabetically
  if (sortField) {
    filtered.sort((a, b) => {
      let valA = a[sortField].toLowerCase();
      let valB = b[sortField].toLowerCase();
      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });
  }

  // 7c. Table Pagination slices
  const totalRecords = filtered.length;
  const totalPages = Math.ceil(totalRecords / ITEMS_PER_PAGE) || 1;
  if (currentPage > totalPages) currentPage = totalPages;
  
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, totalRecords);
  const paginated = filtered.slice(startIdx, endIdx);

  // Render Rows
  tbody.innerHTML = '';
  paginated.forEach(user => {
    const tr = document.createElement('tr');
    tr.className = 'user-row';
    tr.innerHTML = `
      <td>
        <div class="td-checkbox-wrap">
          <input type="checkbox" class="user-row-checkbox" value="${user.id}" onchange="handleRowCheckboxChange()" aria-label="Select ${user.name}">
        </div>
      </td>
      <td>
        <div class="td-profile-box">
          <img src="${user.avatar}" alt="" class="td-avatar">
          <div class="td-profile-info">
            <strong>${user.name}</strong>
            <span>${user.email}</span>
          </div>
        </div>
      </td>
      <td><span class="td-role-badge ${getRoleBadgeClass(user.role)}">${user.role}</span></td>
      <td><span class="td-status ${user.status.toLowerCase()}">${user.status}</span></td>
      <td>
        <button type="button" class="td-action-icon-btn" onclick="toggleUserRowStatus(${user.id})" aria-label="Toggle status for ${user.name}">
          <i class="fa-solid fa-power-off"></i> Toggle
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Update Badge counter
  const badge = document.getElementById('tableRecordsCount');
  if (badge) {
    badge.textContent = `${totalRecords} active records`;
  }

  // Reset master checkbox
  const masterCheck = document.getElementById('userHeaderCheckbox');
  if (masterCheck) masterCheck.checked = false;
  handleRowCheckboxChange(); // update floating actions bar display

  // Render Page buttons
  renderPaginationControls(totalRecords, totalPages, startIdx, endIdx);

  // Sync with general metrics
  syncDashboardMetrics();
}

function getRoleBadgeClass(role) {
  const r = role.toLowerCase();
  if (r.includes('lead')) return 'lead';
  if (r.includes('operator')) return 'operator';
  return 'reviewer';
}

function renderPaginationControls(totalRecords, totalPages, startIdx, endIdx) {
  const paginationInfo = document.getElementById('paginationInfo');
  if (paginationInfo) {
    paginationInfo.textContent = `Showing ${totalRecords > 0 ? startIdx + 1 : 0} to ${endIdx} of ${totalRecords} records`;
  }

  const paginationControls = document.getElementById('paginationControls');
  if (paginationControls) {
    let html = `
      <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changeTablePage(${currentPage - 1})" aria-label="Previous Page">
        <i class="fa-solid fa-angle-left"></i>
      </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      html += `
        <button class="page-btn ${currentPage === i ? 'active' : ''}" onclick="changeTablePage(${i})" aria-label="Page ${i}">
          ${i}
        </button>
      `;
    }

    html += `
      <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changeTablePage(${currentPage + 1})" aria-label="Next Page">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    `;

    paginationControls.innerHTML = html;
  }
}

function changeTablePage(page) {
  currentPage = page;
  renderUserTable();
}

function filterUserDirectoryTable() {
  currentPage = 1;
  renderUserTable();
}

// 7d. Sorting Column Click triggers
function sortTableByColumn(field) {
  if (sortField === field) {
    sortAsc = !sortAsc;
  } else {
    sortField = field;
    sortAsc = true;
  }

  // Update Column icons dynamically
  const headers = document.querySelectorAll('.sortable-header');
  headers.forEach(h => {
    const icon = h.querySelector('i');
    if (icon) {
      icon.className = 'fa-solid fa-sort';
    }
  });

  const activeHeader = document.querySelector(`.sortable-header[onclick*="${field}"]`);
  if (activeHeader) {
    const icon = activeHeader.querySelector('i');
    if (icon) {
      icon.className = sortAsc ? 'fa-solid fa-sort-up' : 'fa-solid fa-sort-down';
    }
  }

  renderUserTable();
  showLiveToast(`Sorted table by ${field.toUpperCase()} ${sortAsc ? 'ascending' : 'descending'}`, 'success');
}

// Toggle individual operator status
function toggleUserRowStatus(id) {
  const user = USERS.find(u => u.id === id);
  if (!user) return;

  user.status = user.status === 'Active' ? 'Paused' : 'Active';
  showLiveToast(`Operator "${user.name}" status switched to: ${user.status}`, 'success');
  renderUserTable();
}

// Checkbox selection triggers
function toggleAllUserCheckboxes(masterCheckbox) {
  const checkboxes = document.querySelectorAll('.user-row-checkbox');
  checkboxes.forEach(chk => {
    chk.checked = masterCheckbox.checked;
  });
  handleRowCheckboxChange();
}

function handleRowCheckboxChange() {
  const checkboxes = document.querySelectorAll('.user-row-checkbox:checked');
  const count = checkboxes.length;
  
  const bulkBar = document.getElementById('bulkActionsPanel');
  const bulkCount = document.getElementById('bulkActionsCount');
  
  if (bulkBar && bulkCount) {
    if (count > 0) {
      bulkCount.textContent = `${count} selected`;
      bulkBar.classList.add('active');
    } else {
      bulkBar.classList.remove('active');
    }
  }
}

// Bulk Actions
function bulkChangeStatus(newStatus) {
  const checkboxes = document.querySelectorAll('.user-row-checkbox:checked');
  checkboxes.forEach(chk => {
    const id = parseInt(chk.value);
    const user = USERS.find(u => u.id === id);
    if (user) user.status = newStatus;
  });

  showLiveToast(`Bulk updated selected operator status to: ${newStatus}`, 'success');
  renderUserTable();
}

function bulkDeleteUsers() {
  const checkboxes = document.querySelectorAll('.user-row-checkbox:checked');
  const ids = Array.from(checkboxes).map(chk => parseInt(chk.value));

  USERS = USERS.filter(user => !ids.includes(user.id));
  showLiveToast(`Successfully deleted ${ids.length} operators`, 'warning');
  renderUserTable();
}

/* ============================================================
   8. GLASSMORPHIC FORM MODAL & ACCESS MANAGEMENT
   ============================================================ */

function simulateUserAddition() {
  // Triggers user modal validation
  openUserModal();
}

function openUserModal() {
  const modal = document.getElementById('addUserModal');
  if (modal) {
    modal.style.display = 'flex';
    modal.removeAttribute('hidden');
    document.getElementById('newUserName').focus();
    announceToScreenReader('Add Operator Modal dialog opened.');
  }
}

function closeUserModal() {
  const modal = document.getElementById('addUserModal');
  if (modal) {
    modal.style.display = 'none';
    modal.setAttribute('hidden', 'true');
    document.getElementById('addUserForm').reset();
    announceToScreenReader('Add Operator Modal dialog closed.');
  }
}

function handleUserFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('newUserName').value.trim();
  const email = document.getElementById('newUserEmail').value.trim();
  const role = document.getElementById('newUserRole').value;
  const status = document.getElementById('newUserStatus').value;

  if (!name || !email) {
    showLiveToast('Please fill out all mandatory inputs.', 'error');
    return;
  }

  // Select a mock avatar image
  const randNum = Math.floor(Math.random() * 70) + 1;
  const avatar = `https://i.pravatar.cc/100?img=${randNum}`;

  const nextId = USERS.length > 0 ? Math.max(...USERS.map(u => u.id)) + 1 : 1;

  USERS.push({
    id: nextId,
    name,
    email,
    role,
    status,
    avatar
  });

  showLiveToast(`Operator "${name}" registered successfully!`, 'success');
  closeUserModal();
  renderUserTable();

  // Highlight KPI card count visually
  const kpiVal = document.querySelector('#kpiCard1 .kpi-card-value');
  if (kpiVal) {
    kpiVal.style.color = '#10b981';
    kpiVal.style.transform = 'scale(1.1)';
    setTimeout(() => {
      kpiVal.style.color = '';
      kpiVal.style.transform = '';
    }, 1000);
  }
}

/* ============================================================
   9. CROSS-COMPONENT METRICS INTEGRATION & STATS
   ============================================================ */

function syncDashboardMetrics() {
  const totalCount = USERS.length;
  const activeCount = USERS.filter(u => u.status === 'Active').length;
  const healthPercent = totalCount > 0 ? Math.round((activeCount / totalCount) * 100) : 0;

  // 9a. Update Bento Grid Active Users Card
  const bentoCards = document.querySelectorAll('.bento-card');
  bentoCards.forEach(card => {
    const h3 = card.querySelector('h3');
    if (h3 && h3.textContent.includes('Active Users')) {
      const h1 = card.querySelector('h1');
      if (h1) h1.textContent = `${activeCount} / ${totalCount}`;
    }
    
    // 9b. Update Bento Grid Performance Health Card
    if (h3 && h3.textContent.includes('System Health')) {
      const p = card.querySelector('p');
      if (p) p.textContent = `All systems nominal. Operator network stability check is ${healthPercent}% stable.`;
    }
  });

  // 9c. Sync Telemetry SVG Doughnut values
  const doughnutCircle = document.getElementById('doughnutCircle');
  const doughnutValue = document.getElementById('doughnutValue');
  
  if (doughnutCircle) {
    doughnutCircle.style.strokeDasharray = `${healthPercent}, 100`;
  }
  if (doughnutValue) {
    doughnutValue.textContent = `${healthPercent}%`;
  }

  // 9d. Sync KPI Spotlights count
  const kpiVal1 = document.querySelector('#kpiCard1 .kpi-card-value');
  if (kpiVal1) {
    kpiVal1.textContent = (activeCount * 7120).toLocaleString();
  }

  // Sync progress chart visual metrics
  const bar3 = document.getElementById('bar-metric-3');
  if (bar3) {
    bar3.style.height = `${healthPercent}%`;
  }

  // Trigger screen reader audio announcements
  announceToScreenReader(`Dashboard telemetry synced. Active count is ${activeCount} out of ${totalCount}. Platform stability index is at ${healthPercent}%.`);
}

function announceToScreenReader(message) {
  const announcer = document.getElementById('a11y-announcer');
  if (announcer) {
    announcer.textContent = message;
  }
}

/* ==========================================
   10. CODE & CLIPBOARD PREVIEWS
   ========================================== */
function toggleCode(id) {
  const pre = document.getElementById(id);
  if (!pre) return;

  const isHidden = pre.style.display === 'none' || pre.style.display === '';
  pre.style.display = isHidden ? 'block' : 'none';

  if (isHidden) {
    pre.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

async function copyCode(id) {
  const pre = document.getElementById(id);
  if (!pre) return;

  const code = pre.querySelector('code');
  if (!code) {
    showLiveToast('Code block not found.', 'error');
    return;
  }

  const rawCode = code.textContent;

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(rawCode);
      showLiveToast('Source code copied to clipboard!', 'success');
    } catch {
      showLiveToast('Copy failed, please retry.', 'error');
    }
  } else {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = rawCode;
      textarea.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      showLiveToast(
        ok ? 'Source code copied to clipboard!' : 'Copy failed, please retry.',
        ok ? 'success' : 'error'
      );
    } catch {
      showLiveToast('Copy failed, please retry.', 'error');
    }
  }
}

/* ==========================================
   11. PREMIUM TOAST SYSTEM
   ========================================== */
function showLiveToast(message, type = 'success') {
  let container = document.querySelector('.live-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'live-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `premium-toast ${type}`;
  toast.setAttribute('role', 'alert');

  const iconClass = type === 'success'
    ? 'fa-solid fa-circle-check'
    : (type === 'warning' ? 'fa-solid fa-circle-exclamation' : 'fa-solid fa-circle-xmark');

  toast.innerHTML = `
    <div class="toast-icon">
      <i class="${iconClass}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${type.toUpperCase()} Notification</div>
      <div class="toast-desc">${message}</div>
    </div>
    <button type="button" class="toast-close-btn" aria-label="Close Toast">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="toast-progress-bar"></div>
  `;

  const closeBtn = toast.querySelector('.toast-close-btn');
  closeBtn?.addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastSlideOut 0.4s ease forwards';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ==========================================
   12. SEQUENCE DIAGNOSTICS & RESETS
   ========================================== */
function triggerAllShowcase() {
  showLiveToast('Commencing Sequenced Showcase Diagnostics...', 'success');

  setTimeout(() => {
    switchMockLayout('glass');
  }, 1000);

  setTimeout(() => {
    updateAnalyticsPeriod('7d');
  }, 2200);

  setTimeout(() => {
    toggleMiniSidebarCollapse();
  }, 3400);

  setTimeout(() => {
    simulateKpiBounce();
  }, 4600);

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

  currentPage = 1;
  USERS = [
    { id: 1, name: 'Marcus V.', email: 'marcus@uiverse.io', role: 'Lead Admin', status: 'Active', avatar: 'https://i.pravatar.cc/100?img=33' },
    { id: 2, name: 'Sarah Connor', email: 'sconnor@uiverse.io', role: 'Operator', status: 'Active', avatar: 'https://i.pravatar.cc/100?img=12' },
    { id: 3, name: 'Clara Jenkins', email: 'clara@uiverse.io', role: 'Reviewer', status: 'Paused', avatar: 'https://i.pravatar.cc/100?img=47' }
  ];
  renderUserTable();

  showLiveToast('All premium dashboards reset to baseline.', 'success');
}