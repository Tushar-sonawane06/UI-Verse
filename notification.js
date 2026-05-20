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
MARK AS READ
===================================================== */

const markBtns =
  document.querySelectorAll(
    ".mark-read"
  );

const counter =
  document.getElementById(
    "counter"
  );

let count =
  parseInt(counter.innerText);

markBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      const item =
        btn.parentElement;

      if(
        item.classList.contains(
          "unread"
        )
      ){

        item.classList.remove(
          "unread"
        );

        count--;

        counter.innerText =
          count;

        btn.innerText =
          "Read";

        btn.style.opacity = ".6";

      }

    }
  );

});

/* =====================================================
TOASTS
===================================================== */

const toastBtns =
  document.querySelectorAll(
    ".toast-btn"
  );

const toastContainer =
  document.getElementById(
    "toastContainer"
  );

toastBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      createToast(btn);

    }
  );

});

function createToast(btn){

  const toast =
    document.createElement("div");

  toast.classList.add("toast");

  if(
    btn.classList.contains(
      "success-btn"
    )
  ){

    toast.classList.add("success");

  }else if(
    btn.classList.contains(
      "warning-btn"
    )
  ){

    toast.classList.add("warning");

  }else{

    toast.classList.add("error");

  }

  toast.innerText =
    btn.dataset.toast;

  toastContainer.appendChild(
    toast
  );

  setTimeout(()=>{

    toast.remove();

  },3000);

}

/* =====================================================
SEARCH
===================================================== */

const searchInput =
  document.getElementById(
    "searchInput"
  );

const cards =
  document.querySelectorAll(
    ".notification-card"
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
        "rgba(5,8,22,.82)";
    }

  }
);