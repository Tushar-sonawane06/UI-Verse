

/* SEARCH */

const searchInput =
document.querySelector(
".search-box input"
);

searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "📚 Searching Books: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const readBtn =
document.querySelector(
".read-btn"
);

const saveBtn =
document.querySelector(
".save-btn"
);

readBtn.addEventListener(
"click",
() => {

  alert(
    "📖 Opening Reading Experience..."
  );

});

saveBtn.addEventListener(
"click",
() => {

  alert(
    "📚 Exploring Digital Library..."
  );

});

/* BOOK BUTTONS */

const bookBtns =
document.querySelectorAll(
".book-btn"
);

bookBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📖 Opening Selected Book..."
    );

  });

});

/* RESUME */

const resumeBtn =
document.querySelector(
".resume-btn"
);

resumeBtn.addEventListener(
"click",
() => {

  alert(
    "▶ Resuming Your Reading..."
  );

});

/* CARD GLOW EFFECT */

const cards =
document.querySelectorAll(
".book-card"
);

cards.forEach(card => {

  card.addEventListener(
  "mousemove",
  (e) => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    card.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(139,92,246,0.25),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* SIDEBAR ACTIVE LINK */

const links =
document.querySelectorAll(
".sidebar-nav a"
);

links.forEach(link => {

  link.addEventListener(
  "click",
  () => {

    links.forEach(l =>
      l.classList.remove("active")
    );

    link.classList.add(
      "active"
    );

  });

});