// =========================================================
// STAR RATING
// =========================================================

const stars =
  document.querySelectorAll(".star-rating i");

stars.forEach((star,index)=>{

  star.addEventListener("click",()=>{

    stars.forEach((s,i)=>{

      if(i <= index){

        s.classList.add("active");

      }else{

        s.classList.remove("active");

      }

    });

  });

});

// =========================================================
// RANGE SLIDER
// =========================================================

const range =
  document.getElementById("ratingRange");

const value =
  document.getElementById("rangeValue");

range.addEventListener("input",()=>{

  value.innerText =
    range.value + "%";

});

// =========================================================
// FILTER ACTIVE STATE
// =========================================================

const filters =
  document.querySelectorAll(".filter-btn");

filters.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    filters.forEach((b)=>{

      b.classList.remove("active");

    });

    btn.classList.add("active");

  });

});

// Emoji Rating
document.querySelectorAll('.emoji-rating button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`You selected: ${btn.textContent}`);
  });
});

// Numeric Rating
const numericInput = document.querySelector('.numeric-rating input');
numericInput.addEventListener('change', () => {
  if (numericInput.value < 1 || numericInput.value > 10) {
    alert("Please enter a number between 1 and 10");
    numericInput.value = 5;
  }
});

// Bar Graph Rating Example
const bars = document.querySelectorAll('.bar-rating div');
function setBarRating(value) {
  bars.forEach((bar, index) => {
    bar.classList.toggle('active', index < value);
  });
}
setBarRating(3); // Example default
