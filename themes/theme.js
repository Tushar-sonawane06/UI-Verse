const toggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    localStorage.setItem("theme", "light");
  }
  else{
    localStorage.setItem("theme", "dark");
  }

});