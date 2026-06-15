/* ================= BOOK BUTTON ================= */

const bookButtons =
document.querySelectorAll(
".destination-footer button"
);

bookButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const original =
    btn.innerText;

    btn.innerText =
    "Booked ✓";

    btn.style.opacity =
    "0.8";

    setTimeout(() => {

      btn.innerText =
      original;

      btn.style.opacity =
      "1";

    },2500);

  });

});

/* ================= HERO BUTTON ================= */

const heroBtn =
document.querySelector(
".primary-btn"
);

heroBtn.addEventListener(
"click",
() => {

  heroBtn.innerHTML =
  `<i class="fa-solid fa-check"></i>
   Trip Added`;

  setTimeout(() => {

    heroBtn.innerHTML =
    `<i class="fa-solid fa-plane"></i>
     Start Planning`;

  },3000);

});

/* ================= CARD HOVER EFFECT ================= */

const cards =
document.querySelectorAll(
".destination-card"
);

cards.forEach(card => {

  card.addEventListener(
  "mousemove",
  (e) => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    card.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(37,99,235,0.18),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* ================= SEARCH ================= */

const search =
document.querySelector(
".search-box input"
);

search.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "Searching for: " +
      search.value
    );

  }

});

/* ===============================
   Travel Dashboard Interactions
================================== */

// Sidebar Active Navigation

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add("active");

  });

});

// Smooth Reveal Animation

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

},{
  threshold:0.15
});

document.querySelectorAll(
  ".hero,.stat-card,.destination-card,.itinerary"
).forEach(el => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all .8s ease";

  observer.observe(el);

});

// Search Interaction

const searchInput =
document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {

  document.querySelector(".search-box")
  .style.boxShadow =
  "0 0 0 4px rgba(110,231,255,0.15)";

});

searchInput.addEventListener("blur", () => {

  document.querySelector(".search-box")
  .style.boxShadow = "none";

});

// Floating Hero Animation

const heroImage =
document.querySelector(".hero-image img");

let rotate = 0;

setInterval(() => {

  rotate += 0.2;

  heroImage.style.transform =
  `scale(1.05) rotate(${Math.sin(rotate)*1.2}deg)`;

},40);

// Destination Button Ripple

document.querySelectorAll(
  ".destination-footer button"
).forEach(btn => {

  btn.addEventListener("click", e => {

    const ripple =
    document.createElement("span");

    ripple.classList.add("ripple");

    ripple.style.left =
    `${e.offsetX}px`;

    ripple.style.top =
    `${e.offsetY}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    },600);

  });

});

// Dynamic Greeting

const hour = new Date().getHours();

const heading =
document.querySelector(".topbar h1");

if(hour < 12){

  heading.innerHTML =
  "Good Morning, Alex ☀️";

}else if(hour < 18){

  heading.innerHTML =
  "Good Afternoon, Alex ✈";

}else{

  heading.innerHTML =
  "Good Evening, Alex 🌙";

}