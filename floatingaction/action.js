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

function initFAB(fabId, optionsId){

  const fab = document.getElementById(fabId);
  const options = document.getElementById(optionsId);

  fab.addEventListener("click", () => {

    options.classList.toggle("active");
    fab.classList.toggle("active");

  });

}

/* INITIALIZE ALL FLOATING BUTTONS */

initFAB("fab1", "fabOptions1");
initFAB("fab2", "fabOptions2");
initFAB("fab3", "fabOptions3");
initFAB("fab4", "fabOptions4");

for(let i = 1; i <= 10; i++){

  const fab = document.getElementById(`fab${i}`);
  const menu = document.getElementById(`fabOptions${i}`);

  if(fab && menu){

    fab.addEventListener("click", () => {

      menu.classList.toggle("active");

      fab.classList.toggle("open");

    });

  }

}