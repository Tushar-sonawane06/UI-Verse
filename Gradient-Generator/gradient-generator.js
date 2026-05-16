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