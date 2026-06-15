  const btns = document.querySelectorAll('.nav-btn');
  const pill = document.getElementById('pill');
  const nav = document.getElementById('demoNav');
  const title = document.getElementById('page-title');

  function movePill(el) {
    pill.style.left = el.offsetLeft + 'px';
    pill.style.width = el.offsetWidth + 'px';
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      movePill(btn);
      title.textContent = btn.dataset.label;
    });
  });

  requestAnimationFrame(() => movePill(document.querySelector('.nav-btn.active')));
