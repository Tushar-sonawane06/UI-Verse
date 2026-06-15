let balance = 125000;
let modalMode = 'add';
const balanceEl = document.getElementById('balance');
const txnList = document.getElementById('transaction-list');
let isEmptyTxn = false;
const toastEl = document.getElementById('toast');
let toastTimer;

function fmt(n) { return '₹' + n.toLocaleString('en-IN'); }
function updateBalance() { balanceEl.textContent = fmt(balance); }

function showToast(msg, type = 'success') {
  clearTimeout(toastTimer);
  toastEl.className = 'toast ' + type;
  toastEl.innerHTML = `<i class="ti ti-${type === 'success' ? 'circle-check' : 'alert-circle'}"></i> ${msg}`;
  toastEl.classList.add('show');
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800);
}

function addTxn(name, amount, type) {
  const icon = type === 'income' ? 'arrow-down-circle' : 'arrow-up-circle';
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = 'txn';
  div.innerHTML = `
    <div class="txn-icon ${type}"><i class="ti ti-${icon}"></i></div>
    <div class="txn-body"><div class="txn-name">${name}</div><div class="txn-date">Today, ${time}</div></div>
    <div class="txn-amount ${type}">${type === 'income' ? '+' : '-'}${fmt(amount)}</div>`;
  if (isEmptyTxn) {
    txnList.innerHTML = '';
    isEmptyTxn = false;
  }
  txnList.prepend(div);
}

function openModal(mode) {
  modalMode = mode;
  document.getElementById('modal-title').textContent = mode === 'add' ? 'Add Money' : 'Send Money';
  document.getElementById('modal-confirm').textContent = mode === 'add' ? 'Add' : 'Send';
  document.getElementById('modal-input').value = '';
  document.getElementById('modal-overlay').classList.add('open');
  setTimeout(() => document.getElementById('modal-input').focus(), 200);
}
new Chart(document.getElementById("expenseChart"), {
  type: "doughnut",
  data: {
    labels: [
      "Food",
      "Shopping",
      "Bills",
      "Entertainment"
    ],
    datasets: [{
      data: [15000, 12000, 8000, 5000]
    }]
  }
});

document
.getElementById("searchTxn")
.addEventListener("input", e => {

  const value = e.target.value.toLowerCase();

  document.querySelectorAll(".txn")
  .forEach(txn => {

    txn.style.display =
      txn.innerText.toLowerCase()
      .includes(value)
      ? "flex"
      : "none";
  });
});

function closeModal(e) { if (e.target.id === 'modal-overlay') closeModalDirect(); }
function closeModalDirect() { document.getElementById('modal-overlay').classList.remove('open'); }

function confirmModal() {
  const amount = Number(document.getElementById('modal-input').value);
  if (!amount || amount <= 0) { showToast('Enter a valid amount', 'error'); return; }
  if (modalMode === 'add') {
    balance += amount; updateBalance(); addTxn('Money Added', amount, 'income');
    showToast(`${fmt(amount)} added successfully`);
  } else {
    if (amount > balance) { showToast('Insufficient balance', 'error'); return; }
    balance -= amount; updateBalance(); addTxn('Money Sent', amount, 'expense');
    showToast(`${fmt(amount)} sent successfully`);
  }
  closeModalDirect();
}

function payBills() {
  const amount = 2500;
  if (balance < amount) { showToast('Insufficient balance', 'error'); return; }
  balance -= amount; updateBalance(); addTxn('Bill Payment', amount, 'expense');
  showToast('Bill paid - ₹2,500 debited');
}

function recharge() {
  const amount = 399;
  if (balance < amount) { showToast('Insufficient balance', 'error'); return; }
  balance -= amount; updateBalance(); addTxn('Mobile Recharge', amount, 'expense');
  showToast('Recharge successful - ₹399 debited');
}

function clearTransactions() {
  isEmptyTxn = true;
  txnList.innerHTML = '<div class="empty"><i class="ti ti-receipt-off"></i>No transactions yet</div>';
  showToast('Transaction history cleared');
}

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelectorAll('nav a').forEach(x => x.classList.remove('active'));
    a.classList.add('active');
    document.getElementById('page-title').textContent = a.dataset.page;
  });
});

document.getElementById('modal-input').addEventListener('keydown', e => { if (e.key === 'Enter') confirmModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });