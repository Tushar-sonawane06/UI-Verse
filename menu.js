// =========================================================
// FILTER BUTTON ACTIVE
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
// DROPDOWN MENU
// =========================================================

const dropdownBtn =
  document.querySelector(".dropdown-btn");

const dropdownContent =
  document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click",()=>{

  if(
    dropdownContent.style.display === "flex"
  ){

    dropdownContent.style.display = "none";

  }else{

    dropdownContent.style.display = "flex";

  }

});

// =========================================================
// SEARCH FILTER
// =========================================================

const searchInput =
  document.getElementById("menuSearch");

const menuCards =
  document.querySelectorAll(".menu-card");

searchInput.addEventListener("keyup",()=>{

  const value =
    searchInput.value.toLowerCase();

  menuCards.forEach((card)=>{

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
// MOBILE MENU ANIMATION
// =========================================================

const hamburger =
  document.querySelector(".hamburger");

hamburger.addEventListener("click",()=>{

  hamburger.classList.toggle("active");

});