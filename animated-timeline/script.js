// Animated Timeline - UIverse

// Horizontal timeline dot click
document.querySelectorAll('.h-dot').forEach((dot, index, dots) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

// Scroll animation for vertical timeline items
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.tl-item').forEach(item => {
  item.style.animationPlayState = 'paused';
  observer.observe(item);
});