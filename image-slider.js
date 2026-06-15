/* ================= PARALLAX EFFECT ================= */

const parallaxCards = document.querySelectorAll(".parallax-card");

parallaxCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const img = card.querySelector("img");

    const rect = card.getBoundingClientRect();

    const y = e.clientY - rect.top;

    const move = (y / rect.height) * 30;

    img.style.transform = `translateY(-${move}px) scale(1.05)`;

  });

  card.addEventListener("mouseleave", () => {

    const img = card.querySelector("img");

    img.style.transform = "translateY(0px) scale(1)";

  });

});

/* ================= LIGHTBOX IMAGE PREVIEW ================= */

const allImages = document.querySelectorAll(
  ".masonry-item img, .pin-card img, .zoom-card img, .hover-card img"
);

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

lightbox.innerHTML = `
  <span class="lightbox-close">&times;</span>
  <img class="lightbox-image" src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector(".lightbox-image");
const closeLightbox = lightbox.querySelector(".lightbox-close");

allImages.forEach(img => {

  img.addEventListener("click", () => {

    lightbox.classList.add("show");
    lightboxImg.src = img.src;

  });

});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e) => {

  if(e.target === lightbox){
    lightbox.classList.remove("show");
  }

});


/* ================= AUTO IMAGE SHUFFLE ================= */

const shuffleGrid = document.querySelector(".pinterest-grid");

setInterval(() => {

  const cards = Array.from(shuffleGrid.children);

  cards.sort(() => Math.random() - 0.5);

  cards.forEach(card => {
    shuffleGrid.appendChild(card);
  });

}, 5000);


/* ================= IMAGE LAZY FADE-IN ================= */

const fadeImages = document.querySelectorAll(
  ".masonry-item img, .pin-card img, .zoom-card img"
);

const imageObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("show-image");

    }

  });

}, {
  threshold: 0.2
});

fadeImages.forEach(img => {

  img.classList.add("hidden-image");

  imageObserver.observe(img);

});


/* ================= RANDOM FLOAT ANIMATION ================= */

const floatingCards = document.querySelectorAll(".hover-card");

floatingCards.forEach(card => {

  let random = Math.random() * 10;

  card.style.animation = `
    floatCard ${4 + random}s ease-in-out infinite
  `;

});


/* ================= MOUSE FOLLOW EFFECT ================= */

const zoomCards = document.querySelectorAll(".zoom-card");

zoomCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const img = card.querySelector("img");

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 20;
    const moveY = (y / rect.height - 0.5) * 20;

    img.style.transform = `
      scale(1.15)
      translate(${moveX}px, ${moveY}px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    const img = card.querySelector("img");

    img.style.transform = "scale(1) translate(0,0)";

  });

});


/* ================= AUTO SCROLL GALLERY ================= */

const gallerySlider = document.querySelector(".gallery-slider");

let scrollAmount = 0;

function autoScrollGallery(){

  if(!gallerySlider) return;

  scrollAmount += 1;

  gallerySlider.scrollLeft = scrollAmount;

  if(scrollAmount >= gallerySlider.scrollWidth / 2){

    scrollAmount = 0;

  }

  requestAnimationFrame(autoScrollGallery);

}

autoScrollGallery();


/* ================= IMAGE RIPPLE EFFECT ================= */

allImages.forEach(img => {

  img.addEventListener("click", (e) => {

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const rect = img.getBoundingClientRect();

    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    img.parentElement.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 700);

  });

});



window.addEventListener("scroll", () => {

  const scroll =
    document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  document.getElementById("scrollProgress")
    .style.width =
      (scroll / height) * 100 + "%";

});
/* ================= KEYBOARD IMAGE NAVIGATION ================= */

let currentImageIndex = 0;

const imageArray = Array.from(allImages);

document.addEventListener("keydown", (e) => {

  if(!lightbox.classList.contains("show")) return;

  if(e.key === "ArrowRight"){

    currentImageIndex++;

    if(currentImageIndex >= imageArray.length){
      currentImageIndex = 0;
    }

    lightboxImg.src = imageArray[currentImageIndex].src;

  }

  if(e.key === "ArrowLeft"){

    currentImageIndex--;

    if(currentImageIndex < 0){
      currentImageIndex = imageArray.length - 1;
    }

    lightboxImg.src = imageArray[currentImageIndex].src;

  }

  if(e.key === "Escape"){

    lightbox.classList.remove("show");

  }

});


/* ================= COUNTER ANIMATION ================= */

const statNumbers = document.querySelectorAll(".grid-count");

statNumbers.forEach(counter => {

  let start = 0;

  const target = +counter.dataset.count;

  const updateCounter = () => {

    start += target / 100;

    if(start < target){

      counter.innerText = Math.floor(start);

      requestAnimationFrame(updateCounter);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});