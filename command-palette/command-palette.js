/* ELEMENTS */

const paletteOverlay =
document.getElementById(
"paletteOverlay"
);

const openBtn =
document.getElementById(
"openPaletteBtn"
);

const commandInput =
document.getElementById(
"commandInput"
);

const commandItems =
document.querySelectorAll(
".command-item"
);

/* OPEN */

function openPalette(){

  paletteOverlay.classList.add(
    "active"
  );

  commandInput.focus();
}

/* CLOSE */

function closePalette(){

  paletteOverlay.classList.remove(
    "active"
  );
}

/* BUTTON */

openBtn.addEventListener(
"click",
openPalette
);

/* SHORTCUT */

document.addEventListener(
"keydown",
(e) => {

  const key =
  e.key.toLowerCase();

  /* CMD + K */

  if(
    (e.metaKey || e.ctrlKey)
    &&
    key === "k"
  ){

    e.preventDefault();

    openPalette();
  }

  /* ESC */

  if(key === "escape"){

    closePalette();
  }

});

/* CLOSE OUTSIDE */

paletteOverlay.addEventListener(
"click",
(e) => {

  if(
    e.target === paletteOverlay
  ){

    closePalette();
  }

});

/* FILTER COMMANDS */

commandInput.addEventListener(
"input",
() => {

  const value =
  commandInput.value
  .toLowerCase();

  commandItems.forEach(item => {

    const text =
    item.innerText.toLowerCase();

    if(text.includes(value)){

      item.style.display =
      "flex";

    }

    else{

      item.style.display =
      "none";
    }

  });

});

/* COMMAND ACTION */

commandItems.forEach(item => {

  item.addEventListener(
  "click",
  () => {

    const text =
    item.innerText;

    alert(
      "⚡ Executed: " +
      text
    );

    closePalette();
  });

});