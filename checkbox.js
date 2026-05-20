/* =====================================================
CHECKBOX INTERACTIONS
===================================================== */

const checkboxes =
  document.querySelectorAll(
    'input[type="checkbox"]'
  );

checkboxes.forEach(box=>{

  box.addEventListener(
    "change",
    ()=>{

      const card =
        box.closest(
          ".checkbox-card"
        );

      if(card){

        card.style.transform =
          "scale(.98)";

        setTimeout(()=>{

          card.style.transform =
            "scale(1)";

        },180);

      }

    }
  );

});

/* =====================================================
PRIMARY BUTTON
===================================================== */

const exploreBtn =
  document.querySelector(
    ".primary-btn"
  );

exploreBtn.addEventListener(
  "click",
  ()=>{

    exploreBtn.innerText =
      "Loaded ✓";

    setTimeout(()=>{

      exploreBtn.innerText =
        "Explore UI";

    },1800);

  }
);

/* =====================================================
NAVBAR SCROLL
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
        "rgba(5,8,22,.82)";
    }

  }
);