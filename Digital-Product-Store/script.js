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