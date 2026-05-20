/* =====================================================
OPEN MODAL
===================================================== */

const openBtns =
  document.querySelectorAll(
    ".open-modal"
  );

openBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      const modalId =
        btn.dataset.modal;

      const modal =
        document.getElementById(
          modalId
        );

      modal.classList.add(
        "active"
      );

      document.body.style.overflow =
        "hidden";

    }
  );

});

/* =====================================================
CLOSE MODAL
===================================================== */

const closeBtns =
  document.querySelectorAll(
    ".close-modal"
  );

closeBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      closeAllModals();

    }
  );

});

/* =====================================================
CLICK OUTSIDE
===================================================== */

const overlays =
  document.querySelectorAll(
    ".modal-overlay"
  );

overlays.forEach(overlay=>{

  overlay.addEventListener(
    "click",
    e=>{

      if(e.target === overlay){

        closeAllModals();

      }

    }
  );

});

/* =====================================================
ESC KEY
===================================================== */

window.addEventListener(
  "keydown",
  e=>{

    if(e.key === "Escape"){

      closeAllModals();

    }

  }
);

/* =====================================================
FUNCTION
===================================================== */

function closeAllModals(){

  overlays.forEach(overlay=>{

    overlay.classList.remove(
      "active"
    );

  });

  document.body.style.overflow =
    "auto";
}

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