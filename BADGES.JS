function toggleCode(id){

  const block = document.getElementById(id);

  block.classList.toggle("show");
}

function copyCode(id){

  const text =
    document.getElementById(id).innerText;

  navigator.clipboard.writeText(text);

  const toast =
    document.getElementById("copyToast");

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  },2000);
}

/* SEARCH */

const searchInput =
  document.getElementById("searchInput");

searchInput.addEventListener("input",e=>{

  const value =
    e.target.value.toLowerCase();

  document
    .querySelectorAll(".badge-card")
    .forEach(card=>{

      const text =
        card.innerText.toLowerCase();

      card.style.display =
        text.includes(value)
        ? "block"
        : "none";

    });

});