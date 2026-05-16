/* =======================================================
SEARCH
======================================================= */

const searchInput =
  document.getElementById("searchInput");

const cards =
  document.querySelectorAll(".blog-card");

searchInput.addEventListener("input",e=>{

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

});

/* =======================================================
FILTERS
======================================================= */

const filterBtns =
  document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn=>{

  btn.addEventListener("click",()=>{

    filterBtns.forEach(b=>
      b.classList.remove("active")
    );

    btn.classList.add("active");

  });

});

/* =======================================================
SCROLL ANIMATION
======================================================= */

window.addEventListener("scroll",()=>{

  const navbar =
    document.querySelector(".navbar");

  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 20
  );

});