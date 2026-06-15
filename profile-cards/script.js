// Profile Cards - UIverse

// Follow button toggle
const followBtn = document.querySelector('.social-card .btn.primary');
if (followBtn) {
  followBtn.addEventListener('click', () => {
    if (followBtn.textContent === 'Follow') {
      followBtn.textContent = 'Following';
      followBtn.style.background = 'rgba(255,255,255,0.15)';
    } else {
      followBtn.textContent = 'Follow';
      followBtn.style.background = 'linear-gradient(135deg, #7c3aed, #a855f7)';
    }
  });
}

// Connect button feedback
const connectBtn = document.querySelector('.hover-back .btn');
if (connectBtn) {
  connectBtn.addEventListener('click', () => {
    connectBtn.textContent = 'Connected!';
    connectBtn.style.background = '#4ade80';
    connectBtn.style.color = '#000';
    setTimeout(() => {
      connectBtn.textContent = 'Connect';
      connectBtn.style.background = '#fff';
      connectBtn.style.color = '#7c3aed';
    }, 2000);
  });
}

// Get In Touch button feedback
const touchBtn = document.querySelector('.minimal-card .btn');
if (touchBtn) {
  touchBtn.addEventListener('click', () => {
    touchBtn.textContent = 'Message Sent!';
    setTimeout(() => {
      touchBtn.textContent = 'Get In Touch';
    }, 2000);
  });
}