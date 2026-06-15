// Toggle individual exercises
const rows = document.querySelectorAll('.exercise-row');
rows.forEach(row => {
  row.addEventListener('click', () => {
    row.classList.toggle('done');
  });
});

// Mark all complete
const completeBtn = document.getElementById('completeBtn');
const message = document.getElementById('message');
const ringFill = document.getElementById('ringFill');
const ringPct = document.getElementById('ringPct');
const progressTag = document.getElementById('progressTag');

let completed = false;

completeBtn.addEventListener('click', () => {
  if (completed) return;
  completed = true;

  // Check off all exercises
  rows.forEach(row => row.classList.add('done'));

  // Update button state
  completeBtn.innerHTML = '<i class="ti ti-circle-check"></i>Completed!';
  completeBtn.classList.add('done');

  // Show message
  message.innerHTML = '<i class="ti ti-sparkles" style="font-size:14px"></i>Great work — you crushed it today!';
  message.classList.add('show');

  // Animate ring to 100%
  // stroke-dasharray = 282.7; offset 0 = 100%
  ringFill.style.strokeDashoffset = '0';
  ringPct.textContent = '100%';
  progressTag.textContent = '100%';
});