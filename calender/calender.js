const monthYear = document.getElementById("monthYear");
const datesContainer = document.getElementById("dates");

const months = [
  "January","February","March","April",
  "May","June","July","August",
  "September","October","November","December"
];

const currentDate = new Date();

let month = currentDate.getMonth();
let year = currentDate.getFullYear();

function renderCalendar(){

  if (!monthYear || !datesContainer) {
    return;
  }

  datesContainer.innerHTML = "";

  monthYear.textContent = `${months[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();

  const totalDays = new Date(year, month + 1, 0).getDate();

  for(let i = 0; i < firstDay; i++){

    const emptyDiv = document.createElement("div");
    datesContainer.appendChild(emptyDiv);
  }

  for(let day = 1; day <= totalDays; day++){

    const dateDiv = document.createElement("div");

    dateDiv.textContent = day;

    if(
      day === currentDate.getDate() &&
      month === currentDate.getMonth() &&
      year === currentDate.getFullYear()
    ){
      dateDiv.classList.add("current-date");
    }

    datesContainer.appendChild(dateDiv);
  }
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (prevBtn) {
  prevBtn.addEventListener("click", () => {

    month--;

    if(month < 0){
      month = 11;
      year--;
    }

    renderCalendar();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {

  month++;

  if(month > 11){
    month = 0;
    year++;
  }

  renderCalendar();
  });
}

renderCalendar();