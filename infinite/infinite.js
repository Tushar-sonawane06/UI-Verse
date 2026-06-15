const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function updateCarousel(){

  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= slides.length){
    currentIndex = 0;
  }

  updateCarousel();
});

prevBtn.addEventListener("click", () => {

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = slides.length - 1;
  }

  updateCarousel();
});

setInterval(() => {

  currentIndex++;

  if(currentIndex >= slides.length){
    currentIndex = 0;
  }

  updateCarousel();

}, 3000);

// infinite.js

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 1;
const slideWidth = slides[0].clientWidth;

track.style.transform = `translateX(-${slideWidth * index}px)`;

// Update dots
function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));

  let dotIndex = index - 1;

  if (index === 0) {
    dotIndex = dots.length - 1;
  }

  if (index === slides.length - 1) {
    dotIndex = 0;
  }

  dots[dotIndex].classList.add("active");
}

// Next Slide
nextBtn.addEventListener("click", () => {
  if (index >= slides.length - 1) return;

  index++;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * index}px)`;

  updateDots();
});

// Prev Slide
prevBtn.addEventListener("click", () => {
  if (index <= 0) return;

  index--;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * index}px)`;

  updateDots();
});

// Infinite Loop
track.addEventListener("transitionend", () => {

  // Last clone -> first real slide
  if (slides[index].classList.contains("clone") && index === slides.length - 1) {
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  // First clone -> last real slide
  if (slides[index].classList.contains("clone") && index === 0) {
    track.style.transition = "none";
    index = slides.length - 2;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

});

// Dot navigation
dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    index = dotIndex + 1;

    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${slideWidth * index}px)`;

    updateDots();
  });
});

// Auto slide
setInterval(() => {
  nextBtn.click();
}, 3000);