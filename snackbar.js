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

payment: {
  icon: "fa-credit-card",
  title: "Payment Successful",
  text: "Your subscription has been activated."
},

ai: {
  icon: "fa-robot",
  title: "AI Assistant",
  text: "New insights generated successfully."
},

live: {
  icon: "fa-wave-square",
  title: "Live Activity",
  text: "A new user joined your workspace."
},

update: {
  icon: "fa-arrows-rotate",
  title: "Update Available",
  text: "Version 3.0 is ready to install."
},

invite: {
  icon: "fa-user-group",
  title: "Workspace Invite",
  text: "You've been invited to join a team."
},

reminder: {
  icon: "fa-calendar-days",
  title: "Meeting Reminder",
  text: "Design review starts in 15 minutes."
},

achievement: {
  icon: "fa-trophy",
  title: "Achievement Unlocked",
  text: "You reached a new productivity milestone."
},

order: {
  icon: "fa-box",
  title: "Order Shipped",
  text: "Your package is now on the way."
},

download: {
  icon: "fa-download",
  title: "Download Complete",
  text: "File saved successfully."
},

server: {
  icon: "fa-server",
  title: "Server Warning",
  text: "High CPU usage detected."
},

battery: {
  icon: "fa-battery-quarter",
  title: "Low Battery",
  text: "Please connect your charger."
},

premium: {
  icon: "fa-crown",
  title: "Premium Activated",
  text: "Welcome to the Pro experience."
}

const container = document.getElementById("snackbarContainer");

function createSnackbar(type, title, message, duration = 4000) {
  const snackbar = document.createElement("div");
  snackbar.classList.add("snackbar", type);

  const iconMap = {
    success: "fa-circle-check",
    error: "fa-circle-xmark",
    info: "fa-circle-info",
  };

  snackbar.innerHTML = `
    <div class="snackbar-icon">
      <i class="fa-solid ${iconMap[type]}"></i>
    </div>

    <div class="snackbar-content">
      <div class="snackbar-title">${title}</div>
      <div class="snackbar-message">${message}</div>
    </div>

    <div class="snackbar-close">
      <i class="fa-solid fa-xmark"></i>
    </div>

    <div class="snackbar-progress">
      <div class="snackbar-progress-bar"></div>
    </div>
  `;

  container.appendChild(snackbar);

  // Close button
  snackbar.querySelector(".snackbar-close").onclick = () => removeSnackbar(snackbar);

  // Auto remove
  const timeout = setTimeout(() => {
    removeSnackbar(snackbar);
  }, duration);

  function removeSnackbar(el) {
    clearTimeout(timeout);
    el.classList.add("hide");
    setTimeout(() => el.remove(), 300);
  }
}

// Button triggers
document.querySelectorAll(".show-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    if (type === "success") {
      createSnackbar("success", "Success", "Your action was completed successfully!");
    }

    if (type === "error") {
      createSnackbar("error", "Error", "Something went wrong. Try again.");
    }

    if (type === "info") {
      createSnackbar("info", "Info", "Here is some useful information.");
    }
  });
});