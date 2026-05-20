document.addEventListener('DOMContentLoaded', () => {
  const dropdownWrappers = document.querySelectorAll('.dropdown-wrapper');

  dropdownWrappers.forEach(wrapper => {
    const btn = wrapper.querySelector('.dropdown-btn');
    if (!btn) return;

    // Toggle dropdown
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Close other dropdowns
      dropdownWrappers.forEach(other => {
        if (other !== wrapper) {
          other.classList.remove('active');
        }
      });

      wrapper.classList.toggle('active');
    });

    // Handle selection and close
    const items = wrapper.querySelectorAll('.dropdown-menu .dropdown-item');
    items.forEach(item => {
      // Avoid selecting submenus triggers directly
      if (item.querySelector('.dropdown-submenu') || item.closest('.dropdown-submenu')) {
        if (item.closest('.dropdown-submenu')) {
          item.addEventListener('click', (e) => {
            e.stopPropagation();
            const btnSpan = btn.querySelector('span');
            if (btnSpan) {
              const itemSpan = item.querySelector('span');
              btnSpan.textContent = itemSpan ? itemSpan.textContent : item.textContent.trim();
            }
            wrapper.classList.remove('active');
          });
        }
        return;
      }

      item.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Update button text if there is a span
        const btnSpan = btn.querySelector('span');
        if (btnSpan && !btn.classList.contains('actions-btn') && !btn.classList.contains('notification-btn')) {
          const itemTextElement = item.querySelector('span:not(.lang-flag)');
          const flagElement = item.querySelector('.lang-flag, .flag');
          
          let selectedHTML = '';
          if (flagElement) {
            selectedHTML += `<span class="${flagElement.className}">${flagElement.textContent}</span> `;
          }
          selectedHTML += itemTextElement ? itemTextElement.textContent : item.textContent.trim();
          btnSpan.innerHTML = selectedHTML;
        }

        // Handle language active visual checks
        if (wrapper.classList.contains('language-wrap')) {
          wrapper.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active-lang'));
          item.classList.add('active-lang');
          wrapper.querySelectorAll('.check-icon').forEach(icon => {
            icon.className = 'fa-solid fa-circle check-icon empty';
          });
          const activeCheck = item.querySelector('.check-icon');
          if (activeCheck) {
            activeCheck.className = 'fa-solid fa-circle-check check-icon';
          }
        }

        // Close dropdown
        wrapper.classList.remove('active');
      });
    });

    // Search filter logic
    const searchInput = wrapper.querySelector('.dropdown-search-input');
    if (searchInput) {
      searchInput.addEventListener('click', (e) => {
        e.stopPropagation(); // Avoid closing dropdown when clicking inside input
      });
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const searchItems = wrapper.querySelectorAll('.dropdown-items-list .dropdown-item');
        searchItems.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (text.includes(query)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    dropdownWrappers.forEach(wrapper => {
      wrapper.classList.remove('active');
    });
  });
});

// Expand/Collapse Code Block
let toastTimer;
window.toggleCode = function(id, btn) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;
  codeBlock.classList.toggle('open');
  if (codeBlock.classList.contains('open')) {
    btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Hide Code';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-code"></i> View Code';
  }
};

// Copy Code Snippet
window.copyCode = function(id, btn) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;
  const code = codeBlock.innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
      btn.classList.add('copied');
      
      const toast = document.getElementById("copyToast");
      if (toast) {
        toast.classList.add("show");
      }

      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        if (toast) {
          toast.classList.remove("show");
        }
        btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
        btn.classList.remove('copied');
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
};
