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


<script>
const commandInput = document.getElementById("commandInput");
const commandItems = Array.from(document.querySelectorAll(".command-item"));
const overlay = document.getElementById("paletteOverlay");
const openBtn = document.getElementById("openPaletteBtn");

let activeIndex = 0;

/* ================= OPEN PALETTE ================= */
function openPalette(){
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  setTimeout(() => commandInput.focus(), 50);
  setActive(0);
}

function closePalette(){
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  commandInput.value = "";
  resetFilter();
}

/* ================= ACTIVE ITEM HANDLING ================= */
function setActive(index){
  commandItems.forEach((item,i)=>{
    item.classList.toggle("active", i === index && item.style.display !== "none");
  });
  activeIndex = index;
  scrollIntoView();
}

function getVisibleItems(){
  return commandItems.filter(item => item.style.display !== "none");
}

function scrollIntoView(){
  const visible = getVisibleItems();
  const el = visible[activeIndex];
  if(el){
    el.scrollIntoView({block:"nearest"});
  }
}

/* ================= SEARCH (DEBOUNCED) ================= */
let debounceTimer;

function filterCommands(value){
  let hasAny = false;

  commandItems.forEach(item=>{
    const text = item.innerText.toLowerCase();
    const match = text.includes(value);

    item.style.display = match ? "flex" : "none";
    if(match) hasAny = true;
  });

  activeIndex = 0;
  setActive(0);

  if(!hasAny){
    showNoResults();
  } else {
    removeNoResults();
  }
}

function showNoResults(){
  if(document.querySelector(".no-results")) return;

  const div = document.createElement("div");
  div.className = "no-results";
  div.textContent = "No commands found";
  document.getElementById("commandList").appendChild(div);
}

function removeNoResults(){
  const el = document.querySelector(".no-results");
  if(el) el.remove();
}

/* ================= EVENTS ================= */
commandInput.addEventListener("input", (e)=>{
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(()=>{
    filterCommands(e.target.value.toLowerCase());
  }, 80);
});

/* ================= KEYBOARD NAVIGATION ================= */
document.addEventListener("keydown", (e)=>{

  const isOpen = overlay.classList.contains("active");

  /* OPEN (Cmd/Ctrl + K) */
  if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k"){
    e.preventDefault();
    isOpen ? closePalette() : openPalette();
  }

  if(!isOpen) return;

  const visible = getVisibleItems();

  if(e.key === "ArrowDown"){
    e.preventDefault();
    activeIndex = (activeIndex + 1) % visible.length;
    setActive(activeIndex);
  }

  if(e.key === "ArrowUp"){
    e.preventDefault();
    activeIndex = (activeIndex - 1 + visible.length) % visible.length;
    setActive(activeIndex);
  }

  if(e.key === "Enter"){
    e.preventDefault();
    visible[activeIndex]?.click();
  }

  if(e.key === "Escape"){
    closePalette();
  }
});

/* ================= OPEN BUTTON ================= */
openBtn.onclick = openPalette;

/* ================= OUTSIDE CLICK ================= */
overlay.addEventListener("click", (e)=>{
  if(e.target === overlay){
    closePalette();
  }
});

/* ================= COMMAND CLICK ================= */
commandItems.forEach((item, index)=>{
  item.addEventListener("click", ()=>{
    alert(item.innerText.trim());
    closePalette();
  });
});


document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.getElementById("paletteOverlay");
  const openBtn = document.getElementById("openPaletteBtn");
  const commandInput = document.getElementById("commandInput");

  let visibleCommands = [];
  let selectedIndex = 0;

  /* ================= OPEN PALETTE ================= */

  function openPalette() {
    overlay.classList.add("active");

    setTimeout(() => {
      commandInput.focus();
      commandInput.select();
    }, 50);

    updateVisibleCommands();
  }

  function closePalette() {
    overlay.classList.remove("active");
    commandInput.value = "";
    filterCommands();
  }

  openBtn.addEventListener("click", openPalette);

  /* ================= KEYBOARD SHORTCUT ================= */

  document.addEventListener("keydown", (e) => {

    if ((e.ctrlKey || e.metaKey) &&
      e.key.toLowerCase() === "k") {

      e.preventDefault();

      if (overlay.classList.contains("active")) {
        closePalette();
      } else {
        openPalette();
      }
    }

    if (!overlay.classList.contains("active")) return;

    if (e.key === "Escape") {
      closePalette();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      selectedIndex =
        (selectedIndex + 1) % visibleCommands.length;

      updateSelection();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      selectedIndex =
        (selectedIndex - 1 + visibleCommands.length)
        % visibleCommands.length;

      updateSelection();
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (visibleCommands[selectedIndex]) {
        visibleCommands[selectedIndex].click();
      }
    }
  });

  /* ================= FILTER ================= */

  commandInput.addEventListener("input", filterCommands);

  function filterCommands() {

    const query =
      commandInput.value.toLowerCase().trim();

    const groups =
      document.querySelectorAll(".command-group");

    groups.forEach(group => {

      let visibleCount = 0;

      group.querySelectorAll(".command-item")
        .forEach(item => {

          const text =
            item.textContent.toLowerCase();

          const match =
            text.includes(query);

          item.style.display =
            match ? "flex" : "none";

          if (match) visibleCount++;
        });

      group.style.display =
        visibleCount ? "block" : "none";
    });

    updateVisibleCommands();
  }

  /* ================= COMMAND LIST ================= */

  function updateVisibleCommands() {

    visibleCommands =
      [...document.querySelectorAll(".command-item")]
      .filter(item =>
        item.style.display !== "none"
      );

    selectedIndex = 0;

    updateSelection();
    showNoResults();
  }

  /* ================= ACTIVE ITEM ================= */

  function updateSelection() {

    visibleCommands.forEach(item =>
      item.classList.remove("selected")
    );

    if (!visibleCommands.length) return;

    const selected =
      visibleCommands[selectedIndex];

    selected.classList.add("selected");

    selected.scrollIntoView({
      block: "nearest"
    });
  }

  /* ================= NO RESULTS ================= */

  function showNoResults() {

    let empty =
      document.getElementById("emptyState");

    if (!empty) {

      empty = document.createElement("div");

      empty.id = "emptyState";

      empty.innerHTML =
        "No matching commands found";

      empty.style.padding = "20px";
      empty.style.textAlign = "center";
      empty.style.opacity = "0.6";

      document
        .getElementById("commandList")
        .appendChild(empty);
    }

    empty.style.display =
      visibleCommands.length ? "none" : "block";
  }

  /* ================= OUTSIDE CLICK ================= */

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closePalette();
    }
  });

  /* ================= COMMAND ACTIONS ================= */

  document
    .querySelectorAll(".command-item")
    .forEach(item => {

      item.addEventListener("click", () => {

        const action =
          item.querySelector("span")
          .textContent.trim();

        switch(action) {

          case "Go to Dashboard":
            console.log("Dashboard");
            break;

          case "Open Profile":
            console.log("Profile");
            break;

          case "Create New Project":
            console.log("New Project");
            break;

          case "Toggle Dark Mode":
            document.body.classList.toggle("light-mode");
            break;

          case "Logout Account":
            console.log("Logout");
            break;

          case "Open Analytics":
            console.log("Analytics");
            break;

          case "Settings":
            console.log("Settings");
            break;
        }

        closePalette();
      });

    });

});
