/* ================= SEARCH BUTTON ================= */

const searchBtn =
document.querySelector(
".search-btn"
);

searchBtn.addEventListener(
"click",
() => {

  alert(
    "🚘 Searching available rental cars..."
  );

});

/* ================= BOOK BUTTON ================= */

const bookButtons =
document.querySelectorAll(
".book-btn"
);

bookButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const car =
    btn.parentElement
    .querySelector("h3")
    .textContent;

    alert(
      `✅ ${car} booked successfully!`
    );

  });

});

/* ================= WISHLIST ================= */

const wishlistBtns =
document.querySelectorAll(
".wishlist-btn"
);

wishlistBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const icon =
    btn.querySelector("i");

    icon.classList.toggle(
    "fa-regular"
    );

    icon.classList.toggle(
    "fa-solid"
    );

    btn.classList.toggle(
    "active"
    );

  });

});

/* ================= HOVER EFFECT ================= */

const cards =
document.querySelectorAll(
".car-card"
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
    rgba(124,58,237,0.18),
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.06)";

  });

});

/* ================= BUTTON ANIMATION ================= */

const buttons =
document.querySelectorAll(
"button"
);

buttons.forEach(btn => {

  btn.addEventListener(
  "mouseenter",
  () => {

    btn.style.transform =
    "translateY(-3px)";

    btn.style.transition =
    "0.3s ease";

  });

  btn.addEventListener(
  "mouseleave",
  () => {

    btn.style.transform =
    "translateY(0px)";

  });

});

/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    navbar.classList.add("active-nav");

  } else {

    navbar.classList.remove("active-nav");

  }

});

/* ================= WISHLIST BUTTON ================= */

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    btn.classList.toggle("active");

    const icon = btn.querySelector("i");

    if (btn.classList.contains("active")) {

      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");

    } else {

      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");

    }

  });

});

/* ================= BOOK NOW BUTTON ================= */

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach((button) => {

  button.addEventListener("click", () => {

    button.innerHTML = `
      <i class="fa-solid fa-circle-check"></i>
      Booked
    `;

    button.classList.add("booked");

    setTimeout(() => {

      button.innerHTML = `Book Now`;
      button.classList.remove("booked");

    }, 2500);

  });

});

/* ================= SEARCH BUTTON ================= */

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {

  const locationInput =
    document.querySelector('input[type="text"]');

  const pickupDate =
    document.querySelectorAll('input[type="date"]')[0];

  const returnDate =
    document.querySelectorAll('input[type="date"]')[1];

  if (
    locationInput.value.trim() === "" ||
    pickupDate.value === "" ||
    returnDate.value === ""
  ) {

    alert("Please fill all booking details.");

    return;

  }

  searchBtn.innerHTML = `
    <i class="fa-solid fa-spinner fa-spin"></i>
  `;

  setTimeout(() => {

    searchBtn.innerHTML = `
      <i class="fa-solid fa-check"></i>
    `;

  }, 1500);

  setTimeout(() => {

    searchBtn.innerHTML = `
      <i class="fa-solid fa-magnifying-glass"></i>
    `;

    alert(
      `Cars available in ${locationInput.value}`
    );

  }, 2500);

});

/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
  ".car-card, .feature-card, .testimonial-card, .stat-card, .phone-card"
);

const revealOnScroll = () => {

  const triggerBottom =
    window.innerHeight * 0.85;

  revealElements.forEach((element) => {

    const boxTop =
      element.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {

      element.classList.add("show");

    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ================= HERO BUTTON EFFECT ================= */

const primaryButtons =
  document.querySelectorAll(".primary-btn");

primaryButtons.forEach((btn) => {

  btn.addEventListener("mouseenter", () => {

    btn.style.transform =
      "translateY(-4px) scale(1.02)";

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform =
      "translateY(0px) scale(1)";

  });

});

/* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll(".mini-stat h3");

let counterStarted = false;

const runCounter = () => {

  if (counterStarted) return;

  counters.forEach((counter) => {

    const target =
      parseInt(counter.innerText.replace(/\D/g, ""));

    let count = 0;

    const increment = target / 80;

    const updateCounter = () => {

      count += increment;

      if (count < target) {

        counter.innerText =
          Math.floor(count) + "+";

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText =
          target + "+";

      }

    };

    updateCounter();

  });

  counterStarted = true;

};

window.addEventListener("scroll", () => {

  const statsSection =
    document.querySelector(".mini-stats");

  const top =
    statsSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {

    runCounter();

  }

});

/* ================= TESTIMONIAL AUTO SLIDE ================= */

const testimonials =
  document.querySelectorAll(".testimonial-card");

let currentTestimonial = 0;

setInterval(() => {

  testimonials.forEach((card) => {

    card.classList.remove("active-testimonial");

  });

  currentTestimonial++;

  if (currentTestimonial >= testimonials.length) {

    currentTestimonial = 0;

  }

  testimonials[currentTestimonial]
    .classList.add("active-testimonial");

}, 3000);

/* ================= PARALLAX EFFECT ================= */

const heroImage =
  document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

  const x =
    (window.innerWidth / 2 - e.pageX) / 40;

  const y =
    (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform =
    `rotate(-2deg) translate(${x}px, ${y}px)`;

});

/* ================= LOADING ANIMATION ================= */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});

/* ================= MOBILE MENU ================= */

const mobileMenuBtn =
  document.createElement("button");

mobileMenuBtn.classList.add("mobile-menu-btn");

mobileMenuBtn.innerHTML = `
  <i class="fa-solid fa-bars"></i>
`;

document.querySelector(".navbar")
  .appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener("click", () => {

  document.querySelector(".nav-links")
    .classList.toggle("show-menu");

});

/* ================= SMOOTH BUTTON RIPPLE ================= */

const rippleButtons = document.querySelectorAll(
  "button"
);

rippleButtons.forEach((button) => {

  button.addEventListener("click", function (e) {

    const ripple =
      document.createElement("span");

    ripple.classList.add("ripple");

    const rect =
      button.getBoundingClientRect();

    ripple.style.left =
      e.clientX - rect.left + "px";

    ripple.style.top =
      e.clientY - rect.top + "px";

    this.appendChild(ripple);

    setTimeout(() => {

      ripple.remove();

    }, 600);

  });

});

/* ================= ACTIVE NAV LINK ================= */

const navLinks =
  document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.forEach((item) => {

      item.classList.remove("active-link");

    });

    link.classList.add("active-link");

  });

});

/* ================= FAKE LIVE USERS ================= */

const liveUsers =
  document.createElement("div");

liveUsers.classList.add("live-users");

liveUsers.innerHTML = `
  🔥 128 people are booking cars right now
`;

document.body.appendChild(liveUsers);

setInterval(() => {

  const randomUsers =
    Math.floor(Math.random() * 200) + 50;

  liveUsers.innerHTML =
    `🔥 ${randomUsers} people are booking cars right now`;

}, 4000);

/* ================= BACK TO TOP BUTTON ================= */

const topBtn =
  document.createElement("button");

topBtn.classList.add("top-btn");

topBtn.innerHTML = `
  <i class="fa-solid fa-arrow-up"></i>
`;

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {

    topBtn.classList.add("show-top-btn");

  } else {

    topBtn.classList.remove("show-top-btn");

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,
    behavior: "smooth"

  });

});

/* ================= CURRENT YEAR ================= */

const footerYear =
  document.querySelector(".footer-bottom p");

if (footerYear) {

  footerYear.innerHTML =
    `© ${new Date().getFullYear()} DriveX. All rights reserved.`;

}

// ============================
// NAVBAR SCROLL EFFECT
// ============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    navbar.style.background = "rgba(5,8,22,.92)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

  }else{

    navbar.style.background = "rgba(5,8,22,.72)";
    navbar.style.boxShadow = "none";

  }

});

// ============================
// WISHLIST BUTTON
// ============================

const wishlistButtons =
document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

  button.addEventListener("click", () => {

    const icon = button.querySelector("i");

    if(icon.classList.contains("fa-regular")){

      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");

      button.style.background =
      "linear-gradient(135deg,#ff416c,#ff4b2b)";

      button.style.transform = "scale(1.1)";

    }else{

      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");

      button.style.background =
      "rgba(255,255,255,.18)";

      button.style.transform = "scale(1)";

    }

  });

});

// ============================
// BOOK NOW BUTTONS
// ============================

const bookButtons =
document.querySelectorAll(".book-btn");

bookButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    btn.innerHTML =
    `<i class="fa-solid fa-circle-check"></i> Reserved`;

    btn.style.background =
    "linear-gradient(135deg,#16a34a,#22c55e)";

    btn.disabled = true;

  });

});

// ============================
// SEARCH BUTTON
// ============================

const searchBtn =
document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {

  const location =
  document.querySelector(
    'input[type="text"]'
  ).value;

  if(location.trim() === ""){

    alert("Please enter pickup location");

    return;

  }

  searchBtn.innerHTML =
  `<i class="fa-solid fa-spinner fa-spin"></i>`;

  setTimeout(() => {

    searchBtn.innerHTML =
    `<i class="fa-solid fa-check"></i>`;

    setTimeout(() => {

      searchBtn.innerHTML =
      `<i class="fa-solid fa-magnifying-glass"></i>`;

    },1500);

  },1800);

});

// ============================
// REVEAL ANIMATION
// ============================

const revealElements =
document.querySelectorAll(
  ".car-card,.feature-card,.testimonial-card,.mini-stat,.brand"
);

const revealOnScroll = () => {

  revealElements.forEach(el => {

    const top =
    el.getBoundingClientRect().top;

    if(top < window.innerHeight - 80){

      el.style.opacity = "1";
      el.style.transform = "translateY(0)";

    }

  });

};

revealElements.forEach(el => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = ".7s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ============================
// FLOATING HERO IMAGE
// ============================

const heroCar =
document.querySelector(".hero-image img");

let floating = 0;

setInterval(() => {

  floating += 0.03;

  heroCar.style.transform =
  `translateY(${Math.sin(floating) * 10}px)
   rotate(-2deg)`;

},30);