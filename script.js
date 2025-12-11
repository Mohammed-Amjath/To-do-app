let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 1. Display tasks on page load
function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleTask(${index})" class="${task.completed ? 'completed' : ''}">
        ${task.text}
      </span>
      <button onclick="deleteTask(${index})">❌</button>
    `;
    taskList.appendChild(li);
  });
}
displayTasks();

// 2. Add Task
addBtn.addEventListener("click", () => {
  if (taskInput.value.trim() === "") return;

  tasks.push({ text: taskInput.value, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  displayTasks();
});

// 3. Toggle Task Complete
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

// 4. Delete Task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

