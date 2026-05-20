/* =====================================================
ELEMENTS
===================================================== */

const overlay =
  document.getElementById(
    "spotlightOverlay"
  );

const openBtn =
  document.getElementById(
    "openSpotlight"
  );

const closeBtn =
  document.getElementById(
    "closeSpotlight"
  );

const spotlightInput =
  document.getElementById(
    "spotlightInput"
  );

/* =====================================================
OPEN MODAL
===================================================== */

function openSpotlight(){

  overlay.classList.add(
    "active"
  );

  spotlightInput.focus();
}

/* =====================================================
CLOSE MODAL
===================================================== */

function closeSpotlight(){

  overlay.classList.remove(
    "active"
  );
}

/* =====================================================
BUTTON EVENTS
===================================================== */

openBtn.addEventListener(
  "click",
  openSpotlight
);

closeBtn.addEventListener(
  "click",
  closeSpotlight
);

/* =====================================================
ESC CLOSE
===================================================== */

document.addEventListener(
  "keydown",
  (e)=>{

    if(
      e.key === "Escape"
    ){

      closeSpotlight();
    }

  }
);

/* =====================================================
CMD + K
===================================================== */

document.addEventListener(
  "keydown",
  (e)=>{

    if(
      (e.ctrlKey || e.metaKey)
      &&
      e.key.toLowerCase() === "k"
    ){

      e.preventDefault();

      openSpotlight();
    }

  }
);

/* =====================================================
OUTSIDE CLICK
===================================================== */

overlay.addEventListener(
  "click",
  (e)=>{

    if(
      e.target === overlay
    ){

      closeSpotlight();
    }

  }
);

/* =====================================================
ACTIVE RESULT
===================================================== */

const results =
  document.querySelectorAll(
    ".result-item"
  );

results.forEach(item=>{

  item.addEventListener(
    "click",
    ()=>{

      results.forEach(r=>
        r.classList.remove(
          "active-item"
        )
      );

      item.classList.add(
        "active-item"
      );

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