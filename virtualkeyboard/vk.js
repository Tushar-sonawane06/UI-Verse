const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

keys.forEach(key => {

  key.addEventListener("click", () => {

    const value = key.innerText;

    if(value === "⌫"){
      display.value = display.value.slice(0, -1);
    }
    else if(value === "Space"){
      display.value += " ";
    }
    else{
      display.value += value;
    }

  });

});