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

    item.innerHTML = `
      <span>${itemName}</span>
      <strong>₹${itemPrice}</strong>
    `;

    if(cartItems.innerHTML.includes("No items added")){
      cartItems.innerHTML = "";
    }

    cartItems.appendChild(item);

    total += itemPrice;

    totalPrice.textContent = `₹${total}`;
  });

});