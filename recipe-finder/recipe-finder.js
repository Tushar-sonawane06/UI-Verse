/* ================= FAVORITE BUTTON ================= */

const heartButtons =
document.querySelectorAll(
".recipe-top button"
);

heartButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const icon =
    btn.querySelector("i");

    if(
      icon.classList.contains(
      "fa-regular"
      )
    ){

      icon.classList.remove(
      "fa-regular"
      );

      icon.classList.add(
      "fa-solid"
      );

      icon.style.color =
      "#fb7185";

    }

    else{

      icon.classList.remove(
      "fa-solid"
      );

      icon.classList.add(
      "fa-regular"
      );

      icon.style.color =
      "white";

    }

  });

});

/* ================= CHIP ACTIVE ================= */

const chips =
document.querySelectorAll(
".chip"
);

chips.forEach(chip => {

  chip.addEventListener(
  "click",
  () => {

    chips.forEach(c => {

      c.classList.remove(
      "active"
      );

    });

    chip.classList.add(
    "active"
    );

  });

});

/* ================= HERO BUTTON ================= */

const heroBtn =
document.querySelector(
".primary-btn"
);

heroBtn.addEventListener(
"click",
() => {

  heroBtn.innerHTML =
  `<i class="fa-solid fa-circle-check"></i>
   Playing Recipe`;

  setTimeout(() => {

    heroBtn.innerHTML =
    `<i class="fa-solid fa-play"></i>
     Watch Recipe`;

  },3000);

});

/* ================= SEARCH ================= */

const searchInput =
document.querySelector(
".search-box input"
);

searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "Searching for: " +
      searchInput.value
    );

  }

});