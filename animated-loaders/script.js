// Animated Loaders - UIverse
// Pause/Resume loader animation on click

document.querySelectorAll('.loader-card').forEach(card => {
  let paused = false;

  card.addEventListener('click', () => {
    const loaders = card.querySelectorAll(
      '.spinner-ring, .pulse-dot, .dot, .progress-bar-fill, ' +
      '.skeleton-avatar, .skeleton-line, .ripple div, ' +
      '.dual-ring, .flash-dot, .gradient-spinner, .bar'
    );

    paused = !paused;

    loaders.forEach(el => {
      el.style.animationPlayState = paused ? 'paused' : 'running';
    });

    card.style.borderColor = paused
      ? 'rgba(167,139,250,0.6)'
      : 'rgba(255,255,255,0.15)';
  });
});