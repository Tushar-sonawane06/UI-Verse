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

new Chart(document.getElementById("expenseChart"), {
    type: "doughnut",
    data: {
        labels: ["Food", "Bills", "Travel", "Shopping"],
        datasets: [{
            data: [5000, 3000, 2000, 4000]
        }]
    }
});

function saveTransactions() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

function loadTransactions() {
    const data = localStorage.getItem("transactions");

    if (data) {
        transactions = JSON.parse(data);
        renderTransactions();
    }
}