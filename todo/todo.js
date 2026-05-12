const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask(){

  const taskText = taskInput.value.trim();

  if(taskText === ""){
    return;
  }

  const li = document.createElement("li");

  li.classList.add("task-item");

  li.innerHTML = `
    <span>${taskText}</span>

    <div class="task-buttons">
      <button class="complete-btn">Done</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  const completeBtn = li.querySelector(".complete-btn");
  const deleteBtn = li.querySelector(".delete-btn");
  const taskSpan = li.querySelector("span");

  completeBtn.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);

  taskInput.value = "";
}