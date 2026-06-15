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

/* =========================
   CLOUD STORAGE UI JS
========================= */

const uploadBtn = document.querySelector(".upload-btn");
const primaryBtn = document.querySelector(".primary-btn");
const secondaryBtn = document.querySelector(".secondary-btn");

function showToast(message){

  const toast = document.createElement("div");

  toast.className = "toast";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    ${message}
  `;

  Object.assign(toast.style,{
    position:"fixed",
    bottom:"30px",
    right:"30px",
    background:"linear-gradient(135deg,#6d7cff,#8a63ff)",
    color:"#fff",
    padding:"16px 22px",
    borderRadius:"18px",
    display:"flex",
    alignItems:"center",
    gap:"10px",
    fontWeight:"600",
    zIndex:"999",
    boxShadow:"0 20px 50px rgba(0,0,0,0.4)",
    transform:"translateY(100px)",
    opacity:"0",
    transition:"0.4s ease"
  });

  document.body.appendChild(toast);

  setTimeout(()=>{
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  },100);

  setTimeout(()=>{
    toast.style.transform = "translateY(100px)";
    toast.style.opacity = "0";
  },2500);

  setTimeout(()=>{
    toast.remove();
  },3200);

}

uploadBtn.addEventListener("click",()=>{
  showToast("Uploading started successfully 🚀");
});

primaryBtn.addEventListener("click",()=>{
  showToast("Select files to upload 📁");
});

secondaryBtn.addEventListener("click",()=>{
  showToast("New folder created successfully 📂");
});

/* SEARCH */

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup",(e)=>{

  const value = e.target.value.toLowerCase();

  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row=>{

    const text = row.innerText.toLowerCase();

    row.style.display =
      text.includes(value)
      ? ""
      : "none";

  });

});

/* FOLDER HOVER GLOW */

const folders = document.querySelectorAll(".folder-card");

folders.forEach(card=>{

  card.addEventListener("mousemove",(e)=>{

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background =
      `radial-gradient(circle at ${x}px ${y}px,
      rgba(255,255,255,0.12),
      rgba(255,255,255,0.05))`;

  });

  card.addEventListener("mouseleave",()=>{

    card.style.background =
      "rgba(255,255,255,0.05)";

  });

});

/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

  const updateCounter = ()=>{

    const target =
      +counter.innerText.replace(/\D/g,'');

    let count = 0;

    const increment = target / 60;

    const interval = setInterval(()=>{

      count += increment;

      if(count >= target){

        counter.innerText =
          counter.innerText.includes("K")
          ? "2.4K"
          : counter.innerText.includes("%")
          ? "98%"
          : counter.innerText.includes("GB")
          ? "750GB"
          : "325";

        clearInterval(interval);

      }else{

        counter.innerText =
          Math.floor(count);

      }

    },20);

  };

  updateCounter();

});