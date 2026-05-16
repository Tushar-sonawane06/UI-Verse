const addBtn = document.getElementById("addBtn");
const transactions = document.querySelector(".transactions");

if (!addBtn || !transactions) {
  // Page does not include the expense tracker widget.
} else {
  addBtn.addEventListener("click", () => {

  const expenseName =
    document.getElementById("expenseName").value;

  const expenseAmount =
    document.getElementById("expenseAmount").value;

  if(expenseName === "" || expenseAmount === ""){
    if (window.UIVERSE_DEBUG) alert("Please fill all fields");
    return;
  }

  const newTransaction = document.createElement("div");

  newTransaction.classList.add("transaction");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = expenseName;

  const amountParagraph = document.createElement("p");
  amountParagraph.textContent = `- ₹${expenseAmount}`;

  newTransaction.appendChild(nameSpan);
  newTransaction.appendChild(amountParagraph);

    transactions.appendChild(newTransaction);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
  });
}