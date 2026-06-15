const data = [
  { name: "Amit", score: 85 },
  { name: "Riya", score: 45 },
  { name: "John", score: 72 },
  { name: "Sara", score: 33 }
];

const tbody = document.getElementById("resultTable");

let passed = 0;
let failed = 0;

data.forEach(user => {
  const status = user.score >= 50 ? "Pass" : "Fail";

  if (status === "Pass") passed++;
  else failed++;

  tbody.innerHTML += `
    <tr>
      <td>${user.name}</td>
      <td>${user.score}</td>
      <td style="color:${status === 'Pass' ? '#22c55e' : '#ef4444'}">
        ${status}
      </td>
    </tr>
  `;
});

document.getElementById("passed").innerText = passed;
document.getElementById("failed").innerText = failed;
document.getElementById("total").innerText = data.length;

function sortHigh() {
  const sorted = [...results].sort((a, b) => b.score - a.score);
  renderTable(sorted);
  updateStats(sorted);
}

function sortLow() {
  const sorted = [...results].sort((a, b) => a.score - b.score);
  renderTable(sorted);
  updateStats(sorted);
}