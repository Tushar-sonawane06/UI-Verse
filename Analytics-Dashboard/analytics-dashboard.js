/* ================= COUNTER ANIMATION ================= */

const counters =
document.querySelectorAll(
".stat-card h2"
);

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
    +counter.innerText
    .replace(/[^0-9]/g,"");

    let count = 0;

    const increment =
    target / 80;

    const interval =
    setInterval(() => {

      count += increment;

      if(count >= target){

        counter.innerText =
        counter.dataset.original ||
        counter.innerText;

        clearInterval(interval);

      } else {

        counter.innerText =
        Math.floor(count);

      }

    },20);

  };

  counter.dataset.original =
  counter.innerText;

  updateCounter();

});

/* ================= MENU BUTTON ================= */

const menuButtons =
document.querySelectorAll(
".menu-btn"
);

menuButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "Analytics menu opened"
    );

  });

});

/* ================= TABLE ROW HOVER ================= */

const rows =
document.querySelectorAll(
"tbody tr"
);

rows.forEach(row => {

  row.addEventListener(
  "mouseenter",
  () => {

    row.style.background =
    "rgba(255,255,255,0.04)";

  });

  row.addEventListener(
  "mouseleave",
  () => {

    row.style.background =
    "transparent";

  });

});