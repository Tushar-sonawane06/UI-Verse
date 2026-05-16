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