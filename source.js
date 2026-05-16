// =========================================================
// FILTER ACTIVE
// =========================================================

const filterBtns =
  document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    filterBtns.forEach((b)=>{

      b.classList.remove("active");

    });

    btn.classList.add("active");

  });

});

// =========================================================
// SEARCH FILTER
// =========================================================

const searchInput =
  document.getElementById("searchInput");

const cards =
  document.querySelectorAll(".component-card");

searchInput.addEventListener("keyup",()=>{

  const value =
    searchInput.value.toLowerCase();

  cards.forEach((card)=>{

    const text =
      card.innerText.toLowerCase();

    if(text.includes(value)){

      card.style.display = "block";

    }else{

      card.style.display = "none";

    }

  });

});

// =========================================================
// COPY BUTTON
// =========================================================

const copyBtns =
  document.querySelectorAll(".copy-btn");

copyBtns.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    btn.innerText = "Copied!";

    setTimeout(()=>{

      btn.innerText = "Copy";

    },1500);

  });

});

// =========================================================
// TOGGLE ANIMATION
// =========================================================

const toggle =
  document.querySelector(".toggle-preview");

const toggleCircle =
  document.querySelector(".toggle-circle");

let active = false;

toggle.addEventListener("click",()=>{

  active = !active;

  if(active){

    toggleCircle.style.transform =
      "translateX(50px)";

  }else{

    toggleCircle.style.transform =
      "translateX(0px)";

  }

});