/* =====================================================
SWITCH INTERACTIONS
===================================================== */

const switches =
  document.querySelectorAll(
    'input[type="checkbox"]'
  );

switches.forEach(toggle=>{

  toggle.addEventListener(
    "change",
    ()=>{

      const parent =
        toggle.closest(
          ".switch-card"
        );

      if(parent){

        parent.style.transform =
          "scale(0.98)";

        setTimeout(()=>{

          parent.style.transform =
            "translateY(-8px)";

          setTimeout(()=>{

            parent.style.transform =
              "";

          },150);

        },120);

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