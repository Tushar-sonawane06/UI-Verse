const reminderBtn =
  document.getElementById("setReminderBtn");

const bedtimeInput =
  document.getElementById("bedtimeInput");

const message =
  document.getElementById("message");

reminderBtn.addEventListener("click", () => {

  const bedtime = bedtimeInput.value;

  if(bedtime === ""){
    message.textContent =
      "Please select a bedtime.";
    return;
  }

  message.textContent =
    `Bedtime reminder set for ${bedtime}`;

});