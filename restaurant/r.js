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

let cart = [];

const cartContainer = document.querySelector(".cart-items");
const totalBox = document.querySelector(".total strong");

document.querySelectorAll(".food-card button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".food-card");
    const name = card.querySelector("h2").innerText;
    const price = parseInt(card.querySelector(".price")?.innerText?.replace("₹", "") || 0);

    addToCart(name, price);
  });
});

function addToCart(name, price) {
  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  renderCart();
}

function renderCart() {
  cartContainer.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>No items added yet.</p>";
    totalBox.innerText = "₹0";
    return;
  }

  cart.forEach(item => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <span>₹${item.price * item.qty}</span>
    `;

    cartContainer.appendChild(div);
  });

  totalBox.innerText = "₹" + total;
}

/* Checkout */
document.querySelector(".checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order placed successfully 🎉");
  cart = [];
  renderCart();
});

document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const count = document.querySelector(".cart-count");
    count.textContent = Number(count.textContent) + 1;
  });
});
const searchInput =
document.querySelector(".search-box input");

const cards =
document.querySelectorAll(".food-card");

searchInput.addEventListener("keyup", e => {

  const value =
  e.target.value.toLowerCase();

  cards.forEach(card => {

    const title =
    card.querySelector("h3")
    .textContent
    .toLowerCase();

    card.style.display =
      title.includes(value)
      ? "block"
      : "none";
  });
});
