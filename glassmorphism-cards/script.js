// Glassmorphism Cards - UIverse
// Hover ripple effect on cards

document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = 'rgba(255, 255, 255, 0.4)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.borderColor = 'rgba(255, 255, 255, 0.2)';
  });
});

// Login button feedback
const loginBtn = document.querySelector('.login-card .glass-btn');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    loginBtn.textContent = 'Logging in...';
    setTimeout(() => {
      loginBtn.textContent = 'Login';
    }, 1500);
  });
}