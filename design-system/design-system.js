// ================= COPY TOKENS =================

const copyBtn =
document.querySelector(".copy-btn");

copyBtn.addEventListener("click", () => {

  const tokens = `
:root {
  --primary: #7c3aed;
  --secondary: #3b82f6;
  --radius-lg: 24px;
  --shadow-soft: 0 10px 30px rgba(0,0,0,0.2);
}
`;

  navigator.clipboard.writeText(tokens);

  copyBtn.innerText =
  "Copied!";

  setTimeout(() => {

    copyBtn.innerText =
    "Copy Tokens";

  }, 2000);

});

// ================= ACTIVE NAVIGATION =================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
    section.offsetTop;

    if(scrollY >= sectionTop - 200){

      current =
      section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href")
    .includes(current)){

      link.classList.add("active");

    }

  });

});

// ================= SMOOTH SCROLL =================

navLinks.forEach(link => {

  link.addEventListener("click", e => {

    e.preventDefault();

    const target =
    document.querySelector(
      link.getAttribute("href")
    );

    target.scrollIntoView({

      behavior:"smooth"

    });

  });

});