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

    if (window.UIVERSE_DEBUG) {
      alert(
        "Analytics menu opened"
      );
    }

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

// ================= LOADING ANIMATION =================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ================= ACTIVE SIDEBAR =================

const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add("active");

  });

});

// ================= RANDOM COUNTER EFFECT =================

const statNumbers = document.querySelectorAll(".stat-card h2");

statNumbers.forEach(stat => {

  const finalText = stat.innerText;
  const number = parseInt(finalText.replace(/\D/g, ""));

  let count = 0;

  const interval = setInterval(() => {

    count += Math.ceil(number / 40);

    if (count >= number) {

      stat.innerText = finalText;
      clearInterval(interval);

    } else {

      if (finalText.includes("K")) {
        stat.innerText = count / 1000 + "K";
      }

      else if (finalText.includes("M")) {
        stat.innerText = (count / 1000000).toFixed(1) + "M";
      }

      else if (finalText.includes("%")) {
        stat.innerText = count + "%";
      }

      else {
        stat.innerText = count;
      }

    }

  }, 35);

});

// ================= SEARCH EFFECT =================

const searchInput =
  document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {

  document.querySelector(".search-box")
    .style.boxShadow =
      "0 0 0 4px rgba(139,92,246,0.25)";

});

searchInput.addEventListener("blur", () => {

  document.querySelector(".search-box")
    .style.boxShadow = "none";

});

// ================= FLOATING BOOK PARALLAX =================

document.addEventListener("mousemove", e => {

  const books =
    document.querySelectorAll(".book");

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  books.forEach((book, index) => {

    const moveX = (x - 0.5) * (index + 1) * 18;
    const moveY = (y - 0.5) * (index + 1) * 18;

    book.style.transform =
      `translate(${moveX}px, ${moveY}px)`;

  });

});

// ================= TABLE ROW ANIMATION =================

const rows = document.querySelectorAll("tbody tr");

rows.forEach((row, index) => {

  row.style.opacity = "0";
  row.style.transform = "translateY(20px)";

  setTimeout(() => {

    row.style.transition =
      "all 0.5s ease";

    row.style.opacity = "1";
    row.style.transform = "translateY(0)";

  }, index * 150);

});

// ================= LIVE CLOCK =================

const topbarTitle =
  document.querySelector(".topbar p");

function updateClock() {

  const now = new Date();

  const time =
    now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  topbarTitle.innerHTML =
    `Smart digital management • ${time}`;

}

setInterval(updateClock, 1000);
updateClock();