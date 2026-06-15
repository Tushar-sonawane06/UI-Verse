/* =====================================================
FILTER BUTTONS
===================================================== */

const filterBtns =
  document.querySelectorAll(
    ".filter-btn"
  );

filterBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      filterBtns.forEach(b=>
        b.classList.remove("active")
      );

      btn.classList.add("active");

    }
  );

});

/* =====================================================
SEARCH
===================================================== */

const searchInput =
  document.getElementById(
    "searchInput"
  );

const tableCards =
  document.querySelectorAll(
    ".table-card"
  );

searchInput.addEventListener(
  "input",
  e=>{

    const value =
      e.target.value.toLowerCase();

    tableCards.forEach(card=>{

      const text =
        card.innerText.toLowerCase();

      card.style.display =
        text.includes(value)
        ? "block"
        : "none";

    });

  }
);

function exportTable(button, type) {
  const table = button.closest(".section").querySelector("table");
  const rows = Array.from(table.querySelectorAll("tr"));
  const data = rows.map(row =>
    Array.from(row.querySelectorAll("th, td")).map(cell => cell.innerText)
  );

  if (type === "csv") {
    const csvContent = data.map(e => e.join(",")).join("\n");
    downloadFile(csvContent, "table.csv", "text/csv");
  }

  if (type === "excel") {
    const excelContent = data.map(e => e.join("\t")).join("\n");
    downloadFile(excelContent, "table.xls", "application/vnd.ms-excel");
  }

  if (type === "pdf") {
    const pdfWindow = window.open("", "_blank");
    pdfWindow.document.write("<pre>" + data.map(e => e.join(" | ")).join("\n") + "</pre>");
    pdfWindow.document.close();
    pdfWindow.print();
  }

  alert(`✅ Table exported as ${type.toUpperCase()}!`);
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}


/* =====================================================
COUNTER ANIMATION
===================================================== */

function animateValue(
  id,
  start,
  end,
  duration
){

  let range = end - start;

  let current = start;

  let increment =
    end > start ? 1 : -1;

  let stepTime =
    Math.abs(
      Math.floor(duration / range)
    );

  const obj =
    document.getElementById(id);

  const timer =
    setInterval(()=>{

      current += increment;

      if(id === "growthCount"){

        obj.innerHTML =
          current + "%";

      }else{

        obj.innerHTML =
          current.toLocaleString();

      }

      if(current == end){

        clearInterval(timer);
      }

    },stepTime);

}

animateValue(
  "viewsCount",
  0,
  98450,
  1200
);

animateValue(
  "usersCount",
  0,
  12420,
  1200
);

animateValue(
  "salesCount",
  0,
  842,
  1200
);

animateValue(
  "growthCount",
  0,
  78,
  1200
);

/* =====================================================
NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(
        ".navbar"
      );

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.8)";
    }

  }
);

/* ================= SEARCHABLE TABLE ================= */

const searchInputs = document.querySelectorAll(".search-bar input");

searchInputs.forEach(input => {
  input.addEventListener("keyup", () => {

    const filter = input.value.toLowerCase();

    const table =
      input.closest(".table-card")
      ?.querySelector("table");

    if (!table) return;

    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(row => {

      const text =
        row.innerText.toLowerCase();

      row.style.display =
        text.includes(filter)
        ? ""
        : "none";

    });

  });
});

/* ================= SORTABLE TABLE ================= */

document.querySelectorAll(".sortable-table th")
.forEach((header, index) => {

  header.addEventListener("click", () => {

    const table =
      header.closest("table");

    const tbody =
      table.querySelector("tbody");

    const rows =
      [...tbody.querySelectorAll("tr")];

    const sortedRows = rows.sort((a, b) => {

      const aText =
        a.children[index].innerText;

      const bText =
        b.children[index].innerText;

      return aText.localeCompare(
        bText,
        undefined,
        { numeric: true }
      );

    });

    tbody.innerHTML = "";

    sortedRows.forEach(row =>
      tbody.appendChild(row)
    );

  });

});

/* ================= TABLE ANIMATIONS ================= */

const animatedRows =
  document.querySelectorAll(".ui-table tbody tr");

animatedRows.forEach((row, index) => {

  row.style.opacity = "0";
  row.style.transform = "translateY(20px)";

  setTimeout(() => {

    row.style.transition =
      "all 0.5s ease";

    row.style.opacity = "1";
    row.style.transform =
      "translateY(0)";

  }, index * 80);

});