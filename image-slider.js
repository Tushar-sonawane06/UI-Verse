/* ================= PARALLAX EFFECT ================= */

const parallaxCards = document.querySelectorAll(".parallax-card");

parallaxCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const img = card.querySelector("img");

    const rect = card.getBoundingClientRect();

    const y = e.clientY - rect.top;

    const move = (y / rect.height) * 30;

    img.style.transform = `translateY(-${move}px) scale(1.05)`;

  });

  card.addEventListener("mouseleave", () => {

    const img = card.querySelector("img");

    img.style.transform = "translateY(0px) scale(1)";

  });

});

/* ================= LIGHTBOX IMAGE PREVIEW ================= */

const allImages = document.querySelectorAll(
  ".masonry-item img, .pin-card img, .zoom-card img, .hover-card img"
);

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

lightbox.innerHTML = `
  <span class="lightbox-close">&times;</span>
  <img class="lightbox-image" src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector(".lightbox-image");
const closeLightbox = lightbox.querySelector(".lightbox-close");

allImages.forEach(img => {

  img.addEventListener("click", () => {

    lightbox.classList.add("show");
    lightboxImg.src = img.src;

  });

});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e) => {

  if(e.target === lightbox){
    lightbox.classList.remove("show");
  }

});


/* ================= AUTO IMAGE SHUFFLE ================= */

const shuffleGrid = document.querySelector(".pinterest-grid");

setInterval(() => {

  const cards = Array.from(shuffleGrid.children);

  cards.sort(() => Math.random() - 0.5);

  cards.forEach(card => {
    shuffleGrid.appendChild(card);
  });

}, 5000);


/* ================= IMAGE LAZY FADE-IN ================= */

const fadeImages = document.querySelectorAll(
  ".masonry-item img, .pin-card img, .zoom-card img"
);

const imageObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("show-image");

    }

  });

}, {
  threshold: 0.2
});

fadeImages.forEach(img => {

  img.classList.add("hidden-image");

  imageObserver.observe(img);

});


/* ================= RANDOM FLOAT ANIMATION ================= */

const floatingCards = document.querySelectorAll(".hover-card");

floatingCards.forEach(card => {

  let random = Math.random() * 10;

  card.style.animation = `
    floatCard ${4 + random}s ease-in-out infinite
  `;

});


/* ================= MOUSE FOLLOW EFFECT ================= */

const zoomCards = document.querySelectorAll(".zoom-card");

zoomCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const img = card.querySelector("img");

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 20;
    const moveY = (y / rect.height - 0.5) * 20;

    img.style.transform = `
      scale(1.15)
      translate(${moveX}px, ${moveY}px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    const img = card.querySelector("img");

    img.style.transform = "scale(1) translate(0,0)";

  });

});


/* ================= AUTO SCROLL GALLERY ================= */

const gallerySlider = document.querySelector(".gallery-slider");

let scrollAmount = 0;

function autoScrollGallery(){

  if(!gallerySlider) return;

  scrollAmount += 1;

  gallerySlider.scrollLeft = scrollAmount;

  if(scrollAmount >= gallerySlider.scrollWidth / 2){

    scrollAmount = 0;

  }

  requestAnimationFrame(autoScrollGallery);

}

autoScrollGallery();


/* ================= IMAGE RIPPLE EFFECT ================= */

allImages.forEach(img => {

  img.addEventListener("click", (e) => {

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const rect = img.getBoundingClientRect();

    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    img.parentElement.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 700);

  });

});



window.addEventListener("scroll", () => {

  const scroll =
    document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  document.getElementById("scrollProgress")
    .style.width =
      (scroll / height) * 100 + "%";

});
/* ================= KEYBOARD IMAGE NAVIGATION ================= */

let currentImageIndex = 0;

const imageArray = Array.from(allImages);

document.addEventListener("keydown", (e) => {

  if(!lightbox.classList.contains("show")) return;

  if(e.key === "ArrowRight"){

    currentImageIndex++;

    if(currentImageIndex >= imageArray.length){
      currentImageIndex = 0;
    }

    lightboxImg.src = imageArray[currentImageIndex].src;

  }

  if(e.key === "ArrowLeft"){

    currentImageIndex--;

    if(currentImageIndex < 0){
      currentImageIndex = imageArray.length - 1;
    }

    lightboxImg.src = imageArray[currentImageIndex].src;

  }

  if(e.key === "Escape"){

    lightbox.classList.remove("show");

  }

});


/* ================= COUNTER ANIMATION ================= */

const statNumbers = document.querySelectorAll(".grid-count");

statNumbers.forEach(counter => {

  let start = 0;

  const target = +counter.dataset.count;

  const updateCounter = () => {

    start += target / 100;

    if(start < target){

      counter.innerText = Math.floor(start);

      requestAnimationFrame(updateCounter);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});
/* ============================================================
   THEME STYLING LOGIC (theme.js)
   - Checks and applies dark/light mode immediately (pre-render)
   - Binds event listeners to theme toggles on DOM ready
   - Ensures visual synchronization of all toggles on the page
   ============================================================ */

// 1. Immediate execution to prevent theme flashing
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
  } else {
    // Default to system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
})();

// 2. Binding events when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtnIds = ['darkModeToggle', 'theme-toggle', 'themeToggle'];
  const toggleClasses = ['theme-toggle', 'theme-toggle-sidebar', 'theme-toggle-floating'];

  // Helper to collect all toggle buttons on the page
  function getAllToggles() {
    const toggles = new Set();
    
    // Add by IDs
    toggleBtnIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) toggles.add(el);
    });

    // Add by classes
    toggleClasses.forEach(className => {
      document.querySelectorAll('.' + className).forEach(el => toggles.add(el));
    });

    return Array.from(toggles);
  }

  // Helper to update a button's visual state (text and icon)
  function updateToggleVisual(btn) {
    if (!btn) return;
    const isDark = document.body.classList.contains('dark-mode');
    
    // Check if it's a sidebar toggle or text-based toggle
    if (btn.classList.contains('theme-toggle-sidebar') || btn.innerText.includes('Theme')) {
      btn.innerHTML = isDark 
        ? '<i class="fa-solid fa-sun"></i> Light Theme' 
        : '<i class="fa-solid fa-moon"></i> Dark Theme';
    } else {
      // Icon-only toggle (like in navbar or floating)
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      } else {
        btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      }
    }
  }

  // Sync visual state of all toggles on page load
  function syncAllToggles() {
    getAllToggles().forEach(btn => updateToggleVisual(btn));
  }

  // Handle theme toggle action
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Sync all toggles on the page
    syncAllToggles();

    // Fire custom event so page components can adapt if needed
    const event = new CustomEvent('themeChanged', { detail: { theme: isDark ? 'dark' : 'light' } });
    document.dispatchEvent(event);
  }

  // Dynamic self-healing: if no toggle exists on the page, create one
  let pageToggles = getAllToggles();
  if (pageToggles.length === 0) {
    const navRight = document.querySelector('.nav-right');
    const navbar = document.querySelector('.navbar') || document.querySelector('header.navbar') || document.querySelector('nav.navbar');
    const sidebarList = document.querySelector('.sidebar ul') || document.querySelector('.sidebar-nav ul');
    const sidebar = document.querySelector('.sidebar') || document.querySelector('aside.sidebar');

    if (navRight) {
      // Insert in navbar right section
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      navRight.appendChild(btn);
    } else if (navbar) {
      // Append to navbar
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle';
      btn.style.marginLeft = 'auto';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      navbar.appendChild(btn);
    } else if (sidebarList) {
      // Append as sidebar link item
      const li = document.createElement('li');
      li.className = 'theme-toggle-item';
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle-sidebar';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Theme';
      li.appendChild(btn);
      sidebarList.appendChild(li);
    } else if (sidebar) {
      // Append directly to sidebar
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle-sidebar';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Theme';
      sidebar.appendChild(btn);
    } else {
      // Floating button in corner
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle theme-toggle-floating';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      document.body.appendChild(btn);
    }
    
    // Refresh toggle list
    pageToggles = getAllToggles();
  }

  // Attach click listener to all buttons
  pageToggles.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
    updateToggleVisual(btn);
  });
});