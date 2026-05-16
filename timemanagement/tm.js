const addBtn = document.getElementById("addBtn");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

  const task = taskInput.value.trim();

  if(task === ""){
    return;
  }

  const taskItem = document.createElement("div");

  taskItem.textContent = task;

  taskList.appendChild(taskItem);

  taskInput.value = "";

});