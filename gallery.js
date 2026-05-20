/* =====================================================
FILTER BUTTONS
===================================================== */

const filterButtons =
  document.querySelectorAll(
    ".filter-btn"
  );

filterButtons.forEach(button=>{

  button.addEventListener(
    "click",
    ()=>{

      filterButtons.forEach(btn=>{

        btn.classList.remove(
          "active"
        );

      });

      button.classList.add(
        "active"
      );

    }
  );

});

/* =====================================================
LIGHTBOX
===================================================== */

const galleryCards =
  document.querySelectorAll(
    ".gallery-card img"
  );

const lightbox =
  document.getElementById(
    "lightbox"
  );

const lightboxImage =
  document.getElementById(
    "lightboxImage"
  );

const closeLightbox =
  document.getElementById(
    "closeLightbox"
  );

galleryCards.forEach(image=>{

  image.addEventListener(
    "click",
    ()=>{

      lightbox.classList.add(
        "active"
      );

      lightboxImage.src =
        image.src;

    }
  );

});

/* CLOSE */

closeLightbox.addEventListener(
  "click",
  ()=>{

    lightbox.classList.remove(
      "active"
    );

  }
);

/* CLICK OUTSIDE */

lightbox.addEventListener(
  "click",
  (e)=>{

    if(e.target === lightbox){

      lightbox.classList.remove(
        "active"
      );

    }

  }
);

/* =====================================================
TOPBAR SCROLL EFFECT
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const topbar =
      document.querySelector(
        ".topbar"
      );

    if(window.scrollY > 20){

      topbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      topbar.style.background =
        "rgba(5,8,22,.82)";
    }

  }
);

/* =====================================================
BUTTON INTERACTION
===================================================== */

const primaryBtn =
  document.querySelector(
    ".primary-btn"
  );

primaryBtn.addEventListener(
  "click",
  ()=>{

    primaryBtn.innerText =
      "Uploading...";

    setTimeout(()=>{

      primaryBtn.innerText =
        "Upload UI";

    },2000);

  }
);