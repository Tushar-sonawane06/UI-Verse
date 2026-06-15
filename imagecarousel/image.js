const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  dots.forEach(dot => {
    dot.classList.remove("active-dot");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active-dot");
}

nextBtn.addEventListener("click", () => {

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
});

setInterval(() => {

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 3000);

// image.js

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const progress = document.querySelector(".progress");

let currentSlide = 0;
let autoSlide;

function showSlide(index){

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  dots.forEach((dot)=>{
    dot.classList.remove("active-dot");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active-dot");

  restartProgress();
}

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

nextBtn.addEventListener("click", ()=>{

  nextSlide();
  resetAutoSlide();

});

prevBtn.addEventListener("click", ()=>{

  prevSlide();
  resetAutoSlide();

});

dots.forEach((dot,index)=>{

  dot.addEventListener("click", ()=>{

    currentSlide = index;

    showSlide(currentSlide);

    resetAutoSlide();

  });

});

function startAutoSlide(){

  autoSlide = setInterval(()=>{

    nextSlide();

  },5000);

}

function resetAutoSlide(){

  clearInterval(autoSlide);

  startAutoSlide();

}

function restartProgress(){

  progress.style.animation = "none";

  void progress.offsetWidth;

  progress.style.animation = "progress 5s linear infinite";

}

showSlide(currentSlide);

startAutoSlide();