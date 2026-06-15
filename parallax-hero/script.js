document.addEventListener('DOMContentLoaded', () => {
  const layerBack = document.querySelector('.layer-back');
  const layerMid = document.querySelector('.layer-mid');
  const heroContent = document.querySelector('.hero-content');

  // Listen to scroll events to create the parallax effect
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Apply different translate offsets based on scroll position
    // Back layer moves slower (0.2x speed)
    if(layerBack) {
      layerBack.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
    
    // Mid layer moves medium speed (0.4x speed)
    if(layerMid) {
      layerMid.style.transform = `translateY(${scrollY * 0.4}px)`;
    }

    // Text content moves up and fades out
    if(heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.6}px)`;
      heroContent.style.opacity = 1 - (scrollY / 500);
    }
  });
});
