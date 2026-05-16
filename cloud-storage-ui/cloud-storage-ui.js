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
      "🔍 Searching file: " +
      searchInput.value
    );

  }

});

/* UPLOAD BUTTON */

const uploadBtn =
document.querySelector(
".upload-btn"
);

uploadBtn.addEventListener(
"click",
() => {

  alert(
    "☁️ Opening Upload Manager..."
  );

});

/* HERO BUTTONS */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "📤 Upload Files Started..."
  );

});

const secondaryBtn =
document.querySelector(
".secondary-btn"
);

secondaryBtn.addEventListener(
"click",
() => {

  alert(
    "📁 Creating New Folder..."
  );

});

/* STORAGE BUTTON */

const storageBtn =
document.querySelector(
".storage-card button"
);

storageBtn.addEventListener(
"click",
() => {

  alert(
    "🚀 Redirecting to Upgrade Plans..."
  );

});

/* FOLDER HOVER EFFECT */

const folderCards =
document.querySelectorAll(
".folder-card"
);

folderCards.forEach(card => {

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
    rgba(59,130,246,0.18),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* TABLE ROW INTERACTION */

const tableRows =
document.querySelectorAll(
"tbody tr"
);

tableRows.forEach(row => {

  row.addEventListener(
  "click",
  () => {

    const fileName =
    row.children[0].innerText;

    alert(
      "📄 Opening File: " +
      fileName
    );

  });

});