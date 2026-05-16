const toggle = document.getElementById("toggle");

const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("pro-price");
const enterprisePrice = document.getElementById("enterprise-price");

toggle.addEventListener("change", () => {

  if(toggle.checked){
    basicPrice.innerText = "$100/yr";
    proPrice.innerText = "$200/yr";
    enterprisePrice.innerText = "$400/yr";
  }
  else{
    basicPrice.innerText = "$10/mo";
    proPrice.innerText = "$20/mo";
    enterprisePrice.innerText = "$40/mo";
  }

});