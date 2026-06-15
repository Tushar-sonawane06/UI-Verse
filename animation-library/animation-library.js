/* ================= COPY CSS ================= */

const copyButtons =
document.querySelectorAll(
".copy-btn"
);

copyButtons.forEach(button => {

  button.addEventListener(
  "click",
  () => {

    const css =
    button.dataset.copy;

    navigator.clipboard.writeText(
      css
    );

    button.innerText =
    "Copied!";

    setTimeout(() => {

      button.innerText =
      "Copy CSS";

    },2000);

  });

});

/* ================= FILTER ACTIVE ================= */

const filterButtons =
document.querySelectorAll(
".filter-btn"
);

filterButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    filterButtons.forEach(b => {

      b.classList.remove(
      "active"
      );

    });

    btn.classList.add(
    "active"
    );

  });

});

/* ================= SEARCH ================= */

const searchInput =
document.querySelector(
".search-bar input"
);

const cards =
document.querySelectorAll(
".animation-card"
);

searchInput.addEventListener(
"keyup",
() => {

  const value =
  searchInput.value.toLowerCase();

  cards.forEach(card => {

    const title =
    card.querySelector("h3")
    .innerText
    .toLowerCase();

    if(title.includes(value)){

      card.style.display =
      "block";

    } else {

      card.style.display =
      "none";

    }

  });

});