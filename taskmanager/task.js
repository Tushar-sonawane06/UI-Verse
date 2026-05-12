const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

addTaskBtn.addEventListener("click", addTask);

function addTask(){

  const taskText = taskInput.value.trim();

  if(taskText === ""){
    return;
  }

  const taskCard = document.createElement("div");

  taskCard.classList.add("task-card");

  taskCard.innerHTML = `
    <span>${taskText}</span>

    <div class="task-buttons">
      <button class="complete-btn">Done</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  const completeBtn = taskCard.querySelector(".complete-btn");
  const deleteBtn = taskCard.querySelector(".delete-btn");

  completeBtn.addEventListener("click", () => {

    completeBtn.remove();

    completedTasks.appendChild(taskCard);

  });

  deleteBtn.addEventListener("click", () => {

    taskCard.remove();

  });

  pendingTasks.appendChild(taskCard);

  taskInput.value = "";
}