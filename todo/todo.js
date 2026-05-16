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
    span.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  taskList.appendChild(li);

  taskInput.value = "";
}