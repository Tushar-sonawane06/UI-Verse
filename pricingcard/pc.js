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

const toggle = document.getElementById("toggle");

const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("pro-price");
const enterprisePrice = document.getElementById("enterprise-price");

toggle.addEventListener("change", () => {

  const prices = document.querySelectorAll(".card h3");

  prices.forEach(price => {
    price.style.transform = "scale(0)";
    price.style.opacity = "0";
  });

  setTimeout(() => {

    if(toggle.checked){
      basicPrice.textContent = "$96/yr";
      proPrice.textContent = "$192/yr";
      enterprisePrice.textContent = "$384/yr";
    }else{
      basicPrice.textContent = "$10/mo";
      proPrice.textContent = "$20/mo";
      enterprisePrice.textContent = "$40/mo";
    }

    prices.forEach(price => {
      price.style.transform = "scale(1)";
      price.style.opacity = "1";
      price.style.transition = "0.35s ease";
    });

  }, 250);
});