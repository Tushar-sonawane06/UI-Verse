// Dark Mode Toggle - UIverse

// Toggle 1,2,3,4,6 - change body background on any toggle
document.querySelectorAll('.toggle-input').forEach(input => {
  input.addEventListener('change', () => {
    const anyChecked = [...document.querySelectorAll('.toggle-input')]
      .some(i => i.checked);
    document.body.classList.toggle('light-mode', anyChecked);
  });
});

// Toggle 5 - Minimal Icon Toggle
const minimalToggle = document.getElementById('minimalToggle');
const icons = minimalToggle.querySelectorAll('.minimal-icon');
let minimalActive = 0;

icons[0].classList.add('active-icon');

minimalToggle.addEventListener('click', () => {
  icons.forEach(i => i.classList.remove('active-icon'));
  minimalActive = minimalActive === 0 ? 1 : 0;
  icons[minimalActive].classList.add('active-icon');
  document.body.classList.toggle('light-mode');
});