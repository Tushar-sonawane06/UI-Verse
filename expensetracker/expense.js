const addBtn = document.getElementById("addBtn");
const transactions = document.querySelector(".transactions");

addBtn.addEventListener("click", () => {

  const expenseName =
    document.getElementById("expenseName").value;

  const expenseAmount =
    document.getElementById("expenseAmount").value;

  if(expenseName === "" || expenseAmount === ""){
    alert("Please fill all fields");
    return;
  }

  const newTransaction = document.createElement("div");

  newTransaction.classList.add("transaction");

  newTransaction.innerHTML = `
    <span>${expenseName}</span>
    <p>- ₹${expenseAmount}</p>
  `;

  transactions.appendChild(newTransaction);

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
});