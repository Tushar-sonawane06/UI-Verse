/* =====================================================
BUTTONS
===================================================== */

const buttons =
  document.querySelectorAll(
    ".show-btn"
  );

const container =
  document.getElementById(
    "snackbarContainer"
  );

/* =====================================================
SHOW SNACKBAR
===================================================== */

buttons.forEach(button=>{

  button.addEventListener(
    "click",
    ()=>{

      const type =
        button.dataset.type;

      createSnackbar(type);

    }
  );

});

/* =====================================================
CREATE SNACKBAR
===================================================== */

function createSnackbar(type){

  const snackbar =
    document.createElement(
      "div"
    );

  snackbar.classList.add(
    "snackbar",
    type
  );

  let icon = "";
  let title = "";
  let message = "";

  if(type === "success"){

    icon =
      "fa-circle-check";

    title =
      "Success";

    message =
      "Component added successfully.";

  }

  if(type === "error"){

    icon =
      "fa-circle-xmark";

    title =
      "Error";

    message =
      "Something went wrong.";

  }

  if(type === "info"){

    icon =
      "fa-circle-info";

    title =
      "Information";

    message =
      "New UI update available.";

  }

  snackbar.innerHTML = `

    <div class="snackbar-left">

      <i class="fa-solid ${icon}"></i>

      <div>

        <strong>${title}</strong>

        <p>${message}</p>

      </div>

    </div>

    <i class="fa-solid fa-xmark close-snackbar"></i>

  `;

  container.appendChild(
    snackbar
  );

  /* AUTO REMOVE */

  setTimeout(()=>{

    snackbar.remove();

  },4000);

  /* CLOSE */

  snackbar
    .querySelector(
      ".close-snackbar"
    )
    .addEventListener(
      "click",
      ()=>{

        snackbar.remove();

      }
    );

}

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