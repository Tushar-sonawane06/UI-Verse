// ================= NAVBAR SCROLL =================

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 40){
    navbar.classList.add("active-nav");
  }else{
    navbar.classList.remove("active-nav");
  }

});

// ================= PRODUCT LIKE =================

const hearts = document.querySelectorAll(".fa-heart");

hearts.forEach((heart) => {

  heart.addEventListener("click", () => {

    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");

    heart.classList.toggle("liked");

  });

});

// ================= CATEGORY HOVER =================

const cards = document.querySelectorAll(".category-card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

});

// ================= BUTTON RIPPLE EFFECT =================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("click", function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripple = document.createElement("span");

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });

});

// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
  ".category-card, .product-card, .floating-card"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

}, {
  threshold:0.1
});

revealElements.forEach((el) => {
  observer.observe(el);
});


const searchInput =
document.getElementById("search-products");

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  document
    .querySelectorAll(".product-card")
    .forEach(card => {
      const title =
      card.querySelector("h3")
      .textContent
      .toLowerCase();

      card.style.display =
      title.includes(value)
      ? "block"
      : "none";
    });
});
// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.background = "rgba(11, 15, 25, 0.95)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "rgba(11, 15, 25, 0.8)";
    navbar.style.boxShadow = "none";
  }
});


// ================= WISHLIST (HEART TOGGLE) =================
document.querySelectorAll(".fa-heart").forEach((heart) => {
  heart.style.cursor = "pointer";

  heart.addEventListener("click", () => {
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
    heart.style.color = heart.classList.contains("fa-solid")
      ? "#ff4d6d"
      : "#cbd5e1";
  });
});


// ================= PRODUCT SEARCH FILTER =================
const searchInput = document.querySelector(".search-box input");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  products.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    const desc = card.querySelector("p").innerText.toLowerCase();

    if (title.includes(value) || desc.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


// ================= BUTTON RIPPLE EFFECT =================
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    ripple.classList.add("ripple");
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});


// ================= HERO STATS ANIMATION =================
const counters = document.querySelectorAll(".hero-stats h2");

const animateCounter = (el) => {
  const target = parseInt(el.innerText.replace(/[^0-9]/g, ""));
  let count = 0;
  const speed = target / 60;

  const update = () => {
    count += speed;
    if (count < target) {
      el.innerText = Math.floor(count) + "+";
      requestAnimationFrame(update);
    } else {
      el.innerText = target + "+";
    }
  };

  update();
};

window.addEventListener("load", () => {
  counters.forEach(animateCounter);
});


// ================= SMOOTH CARD HOVER LIFT =================
products.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
