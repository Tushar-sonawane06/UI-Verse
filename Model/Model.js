// modals.js

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {

  const modals = document.querySelectorAll(".modal-overlay");

  modals.forEach((modal) => {

    if (event.target === modal) {
      modal.style.display = "none";
    }

  });

};