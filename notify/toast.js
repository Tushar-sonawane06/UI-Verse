function showToast(type){

  const container = document.getElementById("toastContainer");

  const toastData = {

    success:{
      title:"Success!",
      text:"Your action was completed successfully.",
      icon:"✔"
    },

    error:{
      title:"Error!",
      text:"Something went wrong. Please try again.",
      icon:"✖"
    },

    warning:{
      title:"Warning!",
      text:"Please review before continuing further.",
      icon:"⚠"
    },

    info:{
      title:"Information",
      text:"New updates are now available for your dashboard.",
      icon:"ℹ"
    }

  };

  const data = toastData[type];
  if (!data) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const header = document.createElement("div");
  header.className = "toast-header";

  const left = document.createElement("div");
  left.className = "toast-left";

  const icon = document.createElement("div");
  icon.className = "toast-icon";
  icon.textContent = data.icon;

  const content = document.createElement("div");
  content.className = "toast-content";

  const title = document.createElement("h4");
  title.textContent = data.title;

  const body = document.createElement("p");
  body.textContent = data.text;

  content.appendChild(title);
  content.appendChild(body);

  left.appendChild(icon);
  left.appendChild(content);

  const closeButton = document.createElement("button");
  closeButton.className = "toast-close";
  closeButton.type = "button";
  closeButton.textContent = "✕";

  header.appendChild(left);
  header.appendChild(closeButton);

  const progress = document.createElement("div");
  progress.className = "toast-progress";

  toast.appendChild(header);
  toast.appendChild(progress);

  container.appendChild(toast);

  // manual close

  closeButton.addEventListener("click", () => {
    removeToast(toast);
  });

  // auto remove

  setTimeout(() => {
    removeToast(toast);
  }, 4000);

}

function removeToast(toast){

  toast.style.animation = "slideOut 0.4s ease forwards";

  setTimeout(() => {
    toast.remove();
  }, 400);

}