const commandInput = document.getElementById("commandInput");
const consoleBody = document.getElementById("consoleBody");

commandInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const command = commandInput.value.trim();

    if (command !== "") {
      const commandLine = document.createElement("p");
      commandLine.textContent = `>> ${command}`;

      const responseLine = document.createElement("p");

      switch (command.toLowerCase()) {
        case "help":
          responseLine.textContent =
            "Available commands: help, clear, status";
          break;

        case "status":
          responseLine.textContent =
            "System Status: ONLINE";
          break;

        case "clear":
          consoleBody.innerHTML = "";
          commandInput.value = "";
          return;

        default:
          responseLine.textContent =
            "Unknown command detected.";
      }

      consoleBody.appendChild(commandLine);
      consoleBody.appendChild(responseLine);

      consoleBody.scrollTop = consoleBody.scrollHeight;

      commandInput.value = "";
    }
  }
});