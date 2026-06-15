/* ==========================================================================
   TIMELINE COMPONENTS PAGE CORE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollTop();
  initSearch();
});

/* --------------------------------------------------------------------------
   1. CODE SNIPPET VISIBILITY TOGGLING
   -------------------------------------------------------------------------- */
window.toggleCode = function(id) {
  const snippet = document.getElementById(id);
  if (snippet) {
    snippet.classList.toggle('open');
    
    // Smooth scroll to view snippet if expanded
    if (snippet.classList.contains('open')) {
      snippet.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
};

/* --------------------------------------------------------------------------
   2. COPY CODE TO CLIPBOARD & ANIMATED TOAST
   -------------------------------------------------------------------------- */
window.copyCode = function(preId, buttonElement) {
  const pre = document.getElementById(preId);
  if (!pre) return;
  
  const text = pre.innerText || pre.textContent;
  
  navigator.clipboard.writeText(text).then(() => {
    // Show success toast
    showToast('Code copied to clipboard successfully!');
    
    // Temporarily update button state
    const originalContent = buttonElement.innerHTML;
    buttonElement.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    buttonElement.style.backgroundColor = 'var(--tl-success)';
    
    setTimeout(() => {
      buttonElement.innerHTML = originalContent;
      buttonElement.style.backgroundColor = '';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy code: ', err);
    showToast('Error: Failed to copy code.');
  });
};

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--tl-success)"></i> ${message}`;
  
  container.appendChild(toast);
  
  // Fade out and remove toast after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

/* --------------------------------------------------------------------------
   3. HORIZONTAL STEP INTERACTION
   -------------------------------------------------------------------------- */
window.setStep = function(stepIndex) {
  const steps = document.querySelectorAll('.h-timeline-step');
  const progressBar = document.querySelector('.h-timeline-bar');
  
  if (!steps.length || !progressBar) return;
  
  // Calculate width percentage based on index (0 to length-1)
  const percent = (stepIndex / (steps.length - 1)) * 100;
  progressBar.style.width = `${percent}%`;
  
  steps.forEach((step, idx) => {
    step.classList.remove('completed', 'active');
    
    if (idx < stepIndex) {
      step.classList.add('completed');
      step.querySelector('.h-timeline-node').innerHTML = '<i class="fa-solid fa-check"></i>';
    } else if (idx === stepIndex) {
      step.classList.add('active');
      step.querySelector('.h-timeline-node').innerHTML = idx + 1;
    } else {
      step.querySelector('.h-timeline-node').innerHTML = idx + 1;
    }
  });
};

/* --------------------------------------------------------------------------
   4. SIDEBAR MOBILE SLIDEOUT DRAWER
   -------------------------------------------------------------------------- */
window.toggleSidebar = function() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar && backdrop) {
    sidebar.classList.toggle('open');
    backdrop.classList.toggle('visible');
  }
};

/* --------------------------------------------------------------------------
   5. LIGHT / DARK THEME SYNCHRONIZER
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('darkModeToggle');
  if (!themeToggle) return;
  
  // Check user preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.body.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
  
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
}

/* --------------------------------------------------------------------------
   6. SCROLL TO TOP TRACKER
   -------------------------------------------------------------------------- */
function initScrollTop() {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (!scrollBtn) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   7. NAVBAR SEARCH FILTER
   -------------------------------------------------------------------------- */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  // Command + K shortcut
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

window.handleSearch = function(event) {
  if (event.key === 'Enter') {
    const query = event.target.value.trim().toLowerCase();
    if (query) {
      // Find standard category links
      const links = {
        'button': 'button.html',
        'navbar': 'navbar.html',
        'card': 'cards.html',
        'input': 'inputs.html',
        'form': 'forms.html',
        'badge': 'badges.html',
        'timeline': 'timeline.html',
        'color': 'color.html',
        'loader': 'loaders.html',
        'pricing': 'pricing.html',
        'span': 'span.html',
        'table': 'table.html',
        'tab': 'tabs.html',
        'toggle': 'toggles.html',
        'faq': 'faq.html',
        'contact': 'contact.html'
      };
      
      let redirectUrl = 'index.html';
      for (const [key, value] of Object.entries(links)) {
        if (query.includes(key)) {
          redirectUrl = value;
          break;
        }
      }
      
      window.location.href = redirectUrl;
    }
  }
};

/* ========================================= */
/* Interactive Timeline Hover Effects */
/* ========================================= */

document.querySelectorAll(
  '.career-content, .release-card, .zigzag-card, .funding-item, .roadmap-content'
).forEach(card => {

  card.addEventListener('mousemove', e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(123,97,255,0.18),
        rgba(17,24,39,1) 60%
      )
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = '#111827';
  });

});
