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
SEARCH
===================================================== */

const searchInput =
  document.getElementById(
    "searchInput"
  );

const tableCards =
  document.querySelectorAll(
    ".table-card"
  );

searchInput.addEventListener(
  "input",
  e=>{

    const value =
      e.target.value.toLowerCase();

    tableCards.forEach(card=>{

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
COUNTER ANIMATION
===================================================== */

function animateValue(
  id,
  start,
  end,
  duration
){

  let range = end - start;

  let current = start;

  let increment =
    end > start ? 1 : -1;

  let stepTime =
    Math.abs(
      Math.floor(duration / range)
    );

  const obj =
    document.getElementById(id);

  const timer =
    setInterval(()=>{

      current += increment;

      if(id === "growthCount"){

        obj.innerHTML =
          current + "%";

      }else{

        obj.innerHTML =
          current.toLocaleString();

      }

      if(current == end){

        clearInterval(timer);
      }

    },stepTime);

}

animateValue(
  "viewsCount",
  0,
  98450,
  1200
);

animateValue(
  "usersCount",
  0,
  12420,
  1200
);

animateValue(
  "salesCount",
  0,
  842,
  1200
);

animateValue(
  "growthCount",
  0,
  78,
  1200
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
        "rgba(5,8,22,.8)";
    }

  }
);