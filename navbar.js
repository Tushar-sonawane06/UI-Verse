const scrollTopBtn = document.getElementById('scrollTopBtn');
const navbar = document.getElementById('navbar');

if (scrollTopBtn) {

  window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    if (navbar) {
      navbar.classList.toggle(
        'scrolled',
        window.scrollY > 40
      );
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

    // Focus Trap and body scroll blocking for mobile drawer
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            document.body.classList.toggle('nav-open');
        });
    }
    