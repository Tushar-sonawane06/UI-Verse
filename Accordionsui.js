/* =====================================================
ACCORDIONS
===================================================== */

const accordionItems =
  document.querySelectorAll(
    ".accordion-item"
  );

accordionItems.forEach(item=>{

  const button =
    item.querySelector(
      ".accordion-btn"
    );

  if (button) {
    button.addEventListener(
      "click",
      ()=>{

        const isActive =
          item.classList.contains(
            "active"
          );

        accordionItems.forEach(i=>
          i.classList.remove(
            "active"
          )
        );

        if(!isActive){

          item.classList.add(
            "active"
          );

        }

      }
    );
  }

});

/* =====================================================
NAVBAR SCROLL
===================================================== */

const navbar =
  document.querySelector(
    ".navbar"
  );

if (navbar) {
  window.addEventListener(
    "scroll",
    ()=>{

      if(window.scrollY > 20){

        navbar.style.background =
          "rgba(5,8,22,.95)";

      }else{

        navbar.style.background =
          "rgba(5,8,22,.82)";
      }

    }
  );
}