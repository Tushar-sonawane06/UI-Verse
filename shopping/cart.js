const cartItems = document.querySelectorAll(".cart-item");
const totalPriceElement = document.getElementById("totalPrice");

let total = 130;

cartItems.forEach(item => {

  const plusBtn = item.querySelector(".plus");
  const minusBtn = item.querySelector(".minus");
  const quantityElement = item.querySelector(".quantity");
  const removeBtn = item.querySelector(".remove-btn");

  let quantity = 1;

  const price = parseInt(
    item.querySelector(".product-details p")
    .textContent.replace("$","")
  );

  plusBtn.addEventListener("click", () => {

    quantity++;

    quantityElement.textContent = quantity;

    total += price;

    totalPriceElement.textContent = total;
  });

  minusBtn.addEventListener("click", () => {

    if(quantity > 1){

      quantity--;

      quantityElement.textContent = quantity;

      total -= price;

      totalPriceElement.textContent = total;
    }
  });

  removeBtn.addEventListener("click", () => {

    total -= price * quantity;

    totalPriceElement.textContent = total;

    item.remove();
  });

});