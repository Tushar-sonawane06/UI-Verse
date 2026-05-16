const addButtons = document.querySelectorAll(".add-btn");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

let total = 0;

addButtons.forEach(button => {

  button.addEventListener("click", () => {

    const card = button.parentElement.parentElement;

    const itemName =
      card.querySelector("h2").textContent;

    const itemPrice =
      parseInt(
        card.querySelector("span")
        .textContent.replace("₹", "")
      );

    const item = document.createElement("div");

    item.classList.add("cart-item");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = itemName;

    const priceStrong = document.createElement("strong");
    priceStrong.textContent = `₹${itemPrice}`;

    item.appendChild(nameSpan);
    item.appendChild(priceStrong);

    if(cartItems.innerHTML.includes("No items added")){
      cartItems.innerHTML = "";
    }

    cartItems.appendChild(item);

    total += itemPrice;

    totalPrice.textContent = `₹${total}`;
  });

});