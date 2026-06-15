// Animated Pricing Cards - UIverse
// Monthly / Annual toggle

const toggle = document.getElementById('billingToggle');
const monthlyAmounts = document.querySelectorAll('.amount.monthly');
const annualAmounts = document.querySelectorAll('.amount.annual');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    monthlyAmounts.forEach(el => el.classList.add('hidden'));
    annualAmounts.forEach(el => el.classList.remove('hidden'));
  } else {
    monthlyAmounts.forEach(el => el.classList.remove('hidden'));
    annualAmounts.forEach(el => el.classList.add('hidden'));
  }
});

// Button click feedback
document.querySelectorAll('.price-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const original = btn.textContent;
    btn.textContent = 'Processing...';
    setTimeout(() => {
      btn.textContent = original;
    }, 1500);
  });
});
const cards =
document.querySelectorAll('.floating-card');

document.addEventListener('mousemove',(e)=>{

  let x =
  (window.innerWidth/2 - e.clientX)/30;

  let y =
  (window.innerHeight/2 - e.clientY)/30;

  cards.forEach(card=>{
    card.style.transform =
    `translate(${x}px,${y}px)`;
  });

});
// Newsletter subscription simulation
document.getElementById("subscribeBtn").addEventListener("click", function() {
  const email = document.getElementById("newsletterEmail").value;
  const msg = document.getElementById("newsletterMsg");

  if (email && email.includes("@")) {
    msg.textContent = "✅ Thank you for subscribing!";
    msg.style.color = "limegreen";
  } else {
    msg.textContent = "❌ Please enter a valid email.";
    msg.style.color = "red";
  }
});
// Animate button clicks
document.querySelectorAll(".price-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 300);
  });
});
// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

