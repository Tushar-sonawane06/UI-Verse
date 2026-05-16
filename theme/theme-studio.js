const root = document.documentElement;

const primaryPicker =
document.getElementById("primaryPicker");

const secondaryPicker =
document.getElementById("secondaryPicker");

const primaryValue =
document.getElementById("primaryValue");

const secondaryValue =
document.getElementById("secondaryValue");

const radiusRange =
document.getElementById("radiusRange");

const blurRange =
document.getElementById("blurRange");

const radiusValue =
document.getElementById("radiusValue");

const blurValue =
document.getElementById("blurValue");

const themeToggle =
document.getElementById("themeToggle");

if (!primaryPicker || !secondaryPicker || !primaryValue || !secondaryValue || !radiusRange || !blurRange || !radiusValue || !blurValue || !themeToggle) {
  // Page does not include the theme studio widget.
} else {
  /* ================= COLORS ================= */

  primaryPicker.addEventListener("input", () => {

  root.style.setProperty(
    "--primary",
    primaryPicker.value
  );

  primaryValue.innerText =
  primaryPicker.value;

  });

  secondaryPicker.addEventListener("input", () => {

  root.style.setProperty(
    "--secondary",
    secondaryPicker.value
  );

  secondaryValue.innerText =
  secondaryPicker.value;

  });

  /* ================= RADIUS ================= */

  radiusRange.addEventListener("input", () => {

  const value =
  radiusRange.value + "px";

  root.style.setProperty(
    "--radius",
    value
  );

  radiusValue.innerText =
  value;

  });

  /* ================= BLUR ================= */

  blurRange.addEventListener("input", () => {

  const value =
  blurRange.value + "px";

  root.style.setProperty(
    "--blur",
    value
  );

  blurValue.innerText =
  value;

  });

  /* ================= DARK MODE ================= */

  themeToggle.addEventListener("change", () => {

  document.body.classList.toggle(
    "light-mode"
  );

  });

  /* ================= MENU ACTIVE ================= */

  const links =
  document.querySelectorAll(".studio-link");

  links.forEach(link => {

  link.addEventListener("click", () => {

    links.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

  });
}