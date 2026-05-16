const fab = document.getElementById("fab");
const fabOptions = document.getElementById("fabOptions");

let isOpen = false;

fab.addEventListener("click", () => {
  
  isOpen = !isOpen;

  if(isOpen){
    fabOptions.style.display = "flex";
    fab.innerText = "×";
  } else {
    fabOptions.style.display = "none";
    fab.innerText = "+";
  }

});