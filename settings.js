/* =====================================================
THEME SELECT
===================================================== */

const themeCards =
  document.querySelectorAll(
    ".theme-card"
  );

themeCards.forEach(card=>{

  card.addEventListener(
    "click",
    ()=>{

      themeCards.forEach(c=>
        c.classList.remove(
          "active-theme"
        )
      );

      card.classList.add(
        "active-theme"
      );

    }
  );

});

/* =====================================================
SAVE BUTTON
===================================================== */

const saveBtn =
  document.querySelector(
    ".primary-btn"
  );

saveBtn.addEventListener(
  "click",
  ()=>{

    saveBtn.innerText =
      "Saved ✓";

    setTimeout(()=>{

      saveBtn.innerText =
        "Save Changes";

    },2000);

  }
);

/* =====================================================
SECURITY BUTTONS
===================================================== */

const securityBtns =
  document.querySelectorAll(
    ".security-btn"
  );

securityBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      btn.style.opacity = ".7";

      setTimeout(()=>{

        btn.style.opacity = "1";

      },300);

    }
  );

});

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
        "rgba(5,8,22,.82)";
    }

  }
);