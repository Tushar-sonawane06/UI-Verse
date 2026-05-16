/* =====================================================
FILTER BUTTONS
===================================================== */

const filterBtns =
  document.querySelectorAll(
    ".filter-btn"
  );

filterBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      filterBtns.forEach(b=>
        b.classList.remove("active")
      );

      btn.classList.add("active");

    }
  );

});

/* =====================================================
SEARCH
===================================================== */

const searchInput =
  document.getElementById(
    "searchInput"
  );

const cards =
  document.querySelectorAll(
    ".section-card"
  );

searchInput.addEventListener(
  "input",
  e=>{

    const value =
      e.target.value.toLowerCase();

    cards.forEach(card=>{

      const text =
        card.innerText.toLowerCase();

      card.style.display =
        text.includes(value)
        ? "block"
        : "none";

    });

  }
);

/* =====================================================
NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(
        ".navbar"
      );

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.8)";
    }

  }
);