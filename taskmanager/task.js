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

  const span = document.createElement('span');
  span.textContent = taskText;

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'task-buttons';

  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete-btn';
  completeBtn.textContent = 'Done';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';

  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);

  completeBtn.addEventListener('click', () => {
    completeBtn.remove();
    completedTasks.appendChild(taskCard);
  });

  deleteBtn.addEventListener('click', () => taskCard.remove());

  taskCard.appendChild(span);
  taskCard.appendChild(buttonsDiv);

  pendingTasks.appendChild(taskCard);

  taskInput.value = "";
}