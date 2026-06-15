// Counter Animation
const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach((counter) => {
  const animate = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(animate, 15);
    } else {
      counter.innerText = target;
    }
  };

  animate();
});


// Card Hover Glow Effect
const cards = document.querySelectorAll(".stat-card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });

});


document.addEventListener('click', e => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;

  // copy logic
});
if (!navigator.clipboard) {
  console.error('Clipboard API unavailable');
  return;
}
// Scroll Reveal Animation
const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.2,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});


// Button Ripple Effect
const button = document.querySelector(".stats-btn");

button.addEventListener("click", function (e) {

  e.preventDefault();

  const ripple = document.createElement("span");

  ripple.classList.add("ripple");

  const rect = this.getBoundingClientRect();

  ripple.style.left = `${e.clientX - rect.left}px`;
  ripple.style.top = `${e.clientY - rect.top}px`;

  this.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);

});