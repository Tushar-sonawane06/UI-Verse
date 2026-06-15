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

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // ELEMENTS
  // ===============================
  const searchInput = document.querySelector(".search-box input");
  const recipeCards = document.querySelectorAll(".recipe-card");
  const chips = document.querySelectorAll(".chip");
  const favoriteButtons = document.querySelectorAll(".icon-btn");

  // ===============================
  // LIVE SEARCH FILTER
  // ===============================
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();

    recipeCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const desc = card.querySelector("p").textContent.toLowerCase();

      if (title.includes(query) || desc.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // ===============================
  // CATEGORY CHIP FILTER
  // ===============================
  chips.forEach(chip => {
    chip.addEventListener("click", () => {

      // active state
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");

      const category = chip.textContent.trim().toLowerCase();

      recipeCards.forEach(card => {

        const tags = card.querySelector(".recipe-footer span")?.textContent.toLowerCase() || "";
        const miniMeta = card.querySelector(".mini-meta span:nth-child(2)")?.textContent.toLowerCase() || "";

        const match =
          category === "all" ||
          tags.includes(category) ||
          miniMeta.includes(category);

        card.style.display = match ? "block" : "none";
      });

    });
  });

  // ===============================
  // FAVORITES TOGGLE ❤️
  // ===============================
  favoriteButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      const icon = btn.querySelector("i");

      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");

      btn.classList.toggle("liked");
    });
  });

  // ===============================
  // SMOOTH CARD HOVER EFFECT (optional enhancement)
  // ===============================
  recipeCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0px)";
    });
  });

});