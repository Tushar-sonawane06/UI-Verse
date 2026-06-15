const color1 =
document.getElementById("color1");

const color2 =
document.getElementById("color2");

const angleRange =
document.getElementById("angleRange");

const angleValue =
document.getElementById("angleValue");

const previewBox =
document.getElementById("previewBox");

const cssCode =
document.getElementById("cssCode");

const gradientType =
document.getElementById("gradientType");

const copyBtn =
document.getElementById("copyBtn");

/* ================= UPDATE GRADIENT ================= */

function updateGradient(){

  const c1 = color1.value;
  const c2 = color2.value;

  const angle =
  angleRange.value;

  const type =
  gradientType.value;

  angleValue.innerText =
  angle + "°";

  let gradient = "";

  if(type === "linear"){

    gradient =
    `linear-gradient(${angle}deg, ${c1}, ${c2})`;

  } else {

    gradient =
    `radial-gradient(circle, ${c1}, ${c2})`;

  }

  previewBox.style.background =
  gradient;

  cssCode.innerText =
`background:
${gradient};`;

}

/* ================= EVENTS ================= */

color1.addEventListener(
"input",
updateGradient
);

color2.addEventListener(
"input",
updateGradient
);

angleRange.addEventListener(
"input",
updateGradient
);

gradientType.addEventListener(
"change",
updateGradient
);

/* ================= COPY CSS ================= */

copyBtn.addEventListener(
"click",
() => {

  navigator.clipboard.writeText(
    cssCode.innerText
  );

  copyBtn.innerText =
  "Copied!";

  setTimeout(() => {

    copyBtn.innerText =
    "Copy CSS";

  },2000);

});

/* ================= PRESETS ================= */

const presets =
document.querySelectorAll(
".preset-card"
);

presets.forEach(card => {

  card.addEventListener(
  "click",
  () => {

    const gradient =
    card.dataset.gradient;

    previewBox.style.background =
    gradient;

    cssCode.innerText =
`background:
${gradient};`;

  });

});

/* ================= INIT ================= */

updateGradient();

/* ================= SEARCH ================= */

const searchInput = document.querySelector(".search-box input");
const presetCards = document.querySelectorAll(".preset-card");

searchInput.addEventListener("input", () => {

  const value = searchInput.value.toLowerCase();

  presetCards.forEach(card => {

    const text = card.textContent.toLowerCase();

    if(text.includes(value)){
      card.style.display = "flex";
    }else{
      card.style.display = "none";
    }

  });

});

/* ================= RANDOM SHUFFLE ================= */

const shuffleBtn = document.querySelector(".action-buttons button");

shuffleBtn.addEventListener("click", () => {

  const colors = [
    "#7c3aed",
    "#3b82f6",
    "#06b6d4",
    "#ff6b6b",
    "#feca57",
    "#00f260",
    "#0575e6",
    "#fc466b"
  ];

  const random1 =
  colors[Math.floor(Math.random()*colors.length)];

  const random2 =
  colors[Math.floor(Math.random()*colors.length)];

  previewBox.style.background =
  `linear-gradient(135deg,${random1},${random2})`;

  cssCode.textContent =
  `background: linear-gradient(135deg, ${random1}, ${random2});`;

});

/* ================= DIRECTION BUTTONS ================= */

const directionButtons =
document.querySelectorAll(".direction-grid button");

directionButtons.forEach(button => {

  button.addEventListener("click", () => {

    const degree = button.textContent;

    const c1 = color1.value;
    const c2 = color2.value;
    const c3 = color3.value;

    const gradient =
    `linear-gradient(${degree}, ${c1}, ${c2}, ${c3})`;

    previewBox.style.background = gradient;

    cssCode.textContent =
    `background: ${gradient};`;

  });

});

/* ================= EXPORT BUTTONS ================= */

const exportButtons =
document.querySelectorAll(".export-card button");

exportButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.innerHTML =
    `<i class="fa-solid fa-check"></i> Done`;

    setTimeout(() => {

      if(button.textContent.includes("Done")){

        button.textContent = "Export";

      }

    },2000);

  });

});

/* ================= NEWSLETTER ================= */

const newsletterForm =
document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  const button =
  newsletterForm.querySelector("button");

  button.textContent = "Subscribed ✨";

  setTimeout(()=>{

    button.textContent = "Subscribe";

  },3000);

});

/* ================= TRENDING CLICK ================= */

const trendingCards =
document.querySelectorAll(".trending-card");

trendingCards.forEach(card=>{

  card.addEventListener("click",()=>{

    const bg =
    window.getComputedStyle(
      card.querySelector(".gradient-thumb")
    ).backgroundImage;

    previewBox.style.background = bg;

    cssCode.textContent =
    `background: ${bg};`;

  });

});

/* ================= ACTIVITY ANIMATION ================= */

const activityItems =
document.querySelectorAll(".activity-item");

activityItems.forEach((item,index)=>{

  item.style.animation =
  `fadeIn 0.5s ease forwards ${index * 0.2}s`;

});

/* ================= SCROLL EFFECT ================= */

window.addEventListener("scroll",()=>{

  const cards =
  document.querySelectorAll(
    ".feature-card,.export-card,.trending-card"
  );

  cards.forEach(card=>{

    const top =
    card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }

  });

});

/* ================= DIRECTION PICKER ================= */

const directionButtons =
document.querySelectorAll(".direction-grid button");

directionButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    const angle =
    btn.textContent.replace("°","");

    angleRange.value = angle;

    angleValue.textContent =
    `${angle}°`;

    updateGradient();

  });

});

/* ================= SHUFFLE BUTTON ================= */

const shuffleBtn =
document.querySelector(".action-buttons button");

shuffleBtn.addEventListener("click", () => {

  const random1 =
  "#" + Math.floor(Math.random()*16777215)
  .toString(16);

  const random2 =
  "#" + Math.floor(Math.random()*16777215)
  .toString(16);

  color1.value = random1;
  color2.value = random2;

  updateGradient();

});

/* ================= COPY EXPORT ================= */

document.querySelectorAll(".export-card button")
.forEach((btn) => {

  btn.addEventListener("click", () => {

    navigator.clipboard.writeText(
      cssCode.innerText
    );

    btn.innerText = "Copied!";

    setTimeout(() => {

      btn.innerText = "Copy CSS";

    },1500);

  });

});

/* ================= PRESET ACTIVE EFFECT ================= */

const presetCards =
document.querySelectorAll(".preset-card");

presetCards.forEach((card) => {

  card.addEventListener("click", () => {

    presetCards.forEach(c =>
      c.classList.remove("active")
    );

    card.classList.add("active");

  });

});