/* portfolio-page.js — UIverse Mini-Project #1049 */

// ── Dark mode ─────────────────────────────────────
const themeBtn  = document.getElementById('themeBtn');
const themeIcon = themeBtn.querySelector('i');

if (localStorage.getItem('pf-theme') === 'dark') {
  document.body.classList.add('dark');
  themeIcon.className = 'fa-solid fa-sun';
}
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('pf-theme', isDark ? 'dark' : 'light');
});

// ── Navbar scroll ─────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});

// ── Mobile menu ───────────────────────────────────
const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Scroll to top ─────────────────────────────────
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Project filter ────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

// ── Skill bars animation ──────────────────────────
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.classList.add('animated');
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-group').forEach(el => barObserver.observe(el));

// ── Scroll reveal ─────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.project-card, .info-card, .skill-group, .chip, .section-head'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Contact form ──────────────────────────────────
document.getElementById('sendBtn').addEventListener('click', () => {
  const name    = document.getElementById('cName').value.trim();
  const email   = document.getElementById('cEmail').value.trim();
  const subject = document.getElementById('cSubject').value.trim();
  const message = document.getElementById('cMessage').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in Name, Email, and Message.');
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const success = document.getElementById('formSuccess');
  success.classList.remove('hidden');
  document.getElementById('cName').value    = '';
  document.getElementById('cEmail').value   = '';
  document.getElementById('cSubject').value = '';
  document.getElementById('cMessage').value = '';
  setTimeout(() => success.classList.add('hidden'), 4000);
});

// ── Active nav link on scroll ─────────────────────
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => sectionObserver.observe(s));