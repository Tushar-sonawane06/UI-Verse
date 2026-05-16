/* ================= BASIC DROPDOWNS ================= */

const dropdownButtons =
document.querySelectorAll(
".dropdown-btn"
);

dropdownButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const menu =
    btn.nextElementSibling;

    menu.classList.toggle(
    "active"
    );

  });

});

/* ================= PROFILE DROPDOWN ================= */

const profileBtn =
document.querySelector(
".profile-btn"
);

const profileMenu =
profileBtn.nextElementSibling;

profileBtn.addEventListener(
"click",
() => {

  profileMenu.classList.toggle(
  "active"
  );

});

/* ================= ICON DROPDOWN ================= */

const iconBtn =
document.querySelector(
".icon-btn"
);

const iconMenu =
iconBtn.nextElementSibling;

iconBtn.addEventListener(
"click",
() => {

  iconMenu.classList.toggle(
  "active"
  );

});

/* ================= NOTIFICATION DROPDOWN ================= */

const notifyBtn =
document.querySelector(
".notification-btn"
);

const notifyMenu =
notifyBtn.nextElementSibling;

notifyBtn.addEventListener(
"click",
() => {

  notifyMenu.classList.toggle(
  "active"
  );

});

/* ================= CLOSE OUTSIDE ================= */

window.addEventListener(
"click",
(e) => {

  document
  .querySelectorAll(
  ".dropdown-menu, .mega-menu, .notification-menu"
  )
  .forEach(menu => {

    if(
      !menu.parentElement.contains(e.target)
    ){

      menu.classList.remove(
      "active"
      );

    }

  });

});