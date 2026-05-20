/* =====================================================
DOCK ACTIVE EFFECT
===================================================== */

const dockItems =
  document.querySelectorAll(
    ".dock-item"
  );

dockItems.forEach(item=>{

  item.addEventListener(
    "click",
    ()=>{

      const parent =
        item.parentElement;

      parent
        .querySelectorAll(
          ".dock-item"
        )
        .forEach(el=>
          el.classList.remove(
            "active"
          )
        );

      item.classList.add(
        "active"
      );

    }
  );

});

/* =====================================================
GLOBAL DOCK
===================================================== */

const globalItems =
  document.querySelectorAll(
    ".global-item"
  );

globalItems.forEach(item=>{

  item.addEventListener(
    "click",
    ()=>{

      globalItems.forEach(el=>
        el.classList.remove(
          "active-global"
        )
      );

      item.classList.add(
        "active-global"
      );

    }
  );

});

/* =====================================================
COPY BUTTON
===================================================== */

const copyBtns =
  document.querySelectorAll(
    ".copy-btn"
  );

copyBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      btn.innerText =
        "Copied ✓";

      setTimeout(()=>{

        btn.innerText =
          "Copy";

      },2000);

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