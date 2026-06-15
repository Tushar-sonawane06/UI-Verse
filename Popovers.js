/* =====================================================
BUTTON RIPPLE EFFECT
===================================================== */

const buttons =
  document.querySelectorAll(
    ".popover-btn"
  );

buttons.forEach(button=>{

  button.addEventListener(
    "click",
    ()=>{

      button.style.transform =
        "scale(.95)";

      setTimeout(()=>{

        button.style.transform =
          "scale(1)";

      },150);

    }
  );

});

/* =====================================================
ACTION ITEMS
===================================================== */

const actions =
  document.querySelectorAll(
    ".action-item"
  );

actions.forEach(item=>{

  item.addEventListener(
    "click",
    ()=>{

      item.style.background =
        "rgba(123,97,255,.15)";

      setTimeout(()=>{

        item.style.background =
          "rgba(255,255,255,0)";

      },300);

    }
  );

});

/* =====================================================
NAVBAR SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(
        ".navbar"
      );

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.82)";
    }

  }
);

// =====================================================
// SIDEBAR TOGGLE
// =====================================================

const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebarBackdrop");

function toggleSidebar() {

  sidebar.classList.toggle("active");
  backdrop.classList.toggle("active");

}

// =====================================================
// CLOSE SIDEBAR ON LINK CLICK (MOBILE)
// =====================================================

document
  .querySelectorAll(".sidebar-nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      if (window.innerWidth < 1100) {

        sidebar.classList.remove("active");
        backdrop.classList.remove("active");

      }

    });

  });

// =====================================================
// ESC CLOSE
// =====================================================

document.addEventListener("keydown", e => {

  if (e.key === "Escape") {

    sidebar.classList.remove("active");
    backdrop.classList.remove("active");

  }

});

// =====================================================
// FAKE SEARCH INTERACTION
// =====================================================

const searchInput =
  document.querySelector(".search-bar input");

searchInput.addEventListener("focus", () => {

  searchInput.parentElement.style.boxShadow =
    "0 0 0 4px rgba(139,92,246,0.15)";

});

searchInput.addEventListener("blur", () => {

  searchInput.parentElement.style.boxShadow = "none";

});

// =====================================================
// BUTTON RIPPLE EFFECT
// =====================================================

document
  .querySelectorAll("button")
  .forEach(button => {

    button.addEventListener("click", function (e) {

      const ripple =
        document.createElement("span");

      const rect =
        this.getBoundingClientRect();

      const size =
        Math.max(rect.width, rect.height);

      ripple.style.width = size + "px";
      ripple.style.height = size + "px";

      ripple.style.left =
        e.clientX - rect.left - size / 2 + "px";

      ripple.style.top =
        e.clientY - rect.top - size / 2 + "px";

      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);

    });

  });

// =====================================================
// CARD PARALLAX EFFECT
// =====================================================

document
  .querySelectorAll(".popover-card")
  .forEach(card => {

    card.addEventListener("mousemove", e => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const rotateY =
        ((x / rect.width) - 0.5) * 10;

      const rotateX =
        ((y / rect.height) - 0.5) * -10;

      card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "translateY(0px)";

    });

  });

// =====================================================
// DYNAMIC ACTIVE SIDEBAR
// =====================================================

document
  .querySelectorAll(".sidebar-nav li")
  .forEach(item => {

    item.addEventListener("click", () => {

      document
        .querySelectorAll(".sidebar-nav li")
        .forEach(el =>
          el.classList.remove("active")
        );

      item.classList.add("active");

    });

  });

// =====================================================
// ADD RIPPLE CSS
// =====================================================

const rippleStyle =
  document.createElement("style");

rippleStyle.innerHTML = `

button{
  position:relative;
  overflow:hidden;
}

.ripple{
  position:absolute;
  border-radius:50%;
  transform:scale(0);
  animation:ripple-animation .6s linear;
  background:rgba(255,255,255,0.35);
  pointer-events:none;
}

@keyframes ripple-animation{
  to{
    transform:scale(4);
    opacity:0;
  }
}

`;

document.head.appendChild(rippleStyle);

// =====================================================
// POPUP ENTRY ANIMATION
// =====================================================

const observer =
  new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.animate(
          [
            {
              opacity: 0,
              transform:
                "translateY(40px)"
            },
            {
              opacity: 1,
              transform:
                "translateY(0)"
            }
          ],
          {
            duration: 700,
            easing: "ease",
            fill: "forwards"
          }
        );

      }

    });

  }, {
    threshold: 0.15
  });

document
  .querySelectorAll(".popover-card")
  .forEach(card => observer.observe(card));
