// Notification Badge - UIverse

// Click bell icon to increase count
document.querySelectorAll('.icon-btn.fa-bell').forEach(bell => {
  const wrap = bell.closest('.icon-wrap');
  if (!wrap) return;
  const badge = wrap.querySelector('.count-badge');
  if (!badge) return;

  bell.addEventListener('click', () => {
    let count = parseInt(badge.textContent) || 0;
    count++;
    badge.textContent = count > 99 ? '99+' : count;
  });
});

// Click avatar to toggle status
const statuses = ['online', 'offline', 'busy'];
document.querySelectorAll('.avatar-wrap').forEach(wrap => {
  const badge = wrap.querySelector('.status-badge');
  let current = 0;

  wrap.addEventListener('click', () => {
    badge.classList.remove(...statuses);
    current = (current + 1) % statuses.length;
    badge.classList.add(statuses[current]);
  });
});