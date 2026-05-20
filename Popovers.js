/* =====================================================
BUTTON RIPPLE EFFECT
===================================================== */

const buttons =
  document.querySelectorAll(
    ".popover-btn"
  );

buttons.forEach(button=>{

  button.addEventListener(
    "click",
    ()=>{

      button.style.transform =
        "scale(.95)";

      setTimeout(()=>{

        button.style.transform =
          "scale(1)";

      },150);

    }
  );

});

/* =====================================================
ACTION ITEMS
===================================================== */

const actions =
  document.querySelectorAll(
    ".action-item"
  );

actions.forEach(item=>{

  item.addEventListener(
    "click",
    ()=>{

      item.style.background =
        "rgba(123,97,255,.15)";

      setTimeout(()=>{

        item.style.background =
          "rgba(255,255,255,0)";

      },300);

    }
  );

});

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