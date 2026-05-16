// =========================================================
// FILTER ACTIVE
// =========================================================

const filterBtns =
  document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    filterBtns.forEach((b)=>{

      b.classList.remove("active");

    });

    btn.classList.add("active");

  });

});

// =========================================================
// COPY BUTTON
// =========================================================

const copyBtns =
  document.querySelectorAll(".copy-btn");

copyBtns.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    btn.innerText = "COPIED!";

    setTimeout(()=>{

      btn.innerText = "COPY";

    },1500);

  });

});

// =========================================================
// ARCADE BUTTON SOUND EFFECT
// =========================================================

const arcadeBtn =
  document.querySelector(".arcade-btn");

arcadeBtn.addEventListener("click",()=>{

  arcadeBtn.innerText = "LOADING";

  setTimeout(()=>{

    arcadeBtn.innerText = "PLAY";

  },1200);

});

// =========================================================
// RANDOM ALERT BLINK
// =========================================================

const alertBox =
  document.querySelector(".pixel-alert");

setInterval(()=>{

  alertBox.style.opacity =
    Math.random() > 0.5 ? "1" : ".5";

},700);