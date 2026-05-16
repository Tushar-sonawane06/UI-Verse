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