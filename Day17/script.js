// get all element to perform logic or action

let task = []; // create data structure to store task

let newTask = document.getElementById("newTask");
let taskList = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");

console.log(taskList)

function addTask() {
  const text = taskInput.value.trim();

  if (!text) {
    throw new Error("There is not task you write ");
  }
  let id = crypto.randomUUID();
  task.push({ id: id, text: text, complete: false });
  updateTaskList();
}

function updateTaskList() {
  taskList.innerHTML = "";

  task.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="taskItem ${task.complete ? "completed" : ""}">
         <div class="task">
         <input type="checkbox" class="checkBox" ${
           task.complete ? "checked" : ""
         }/>
         <p>${task.text}</p>
         </div>

         <div class="icons">
         <button onClick="editTask(${task.id})">Edit</button>
         <button onClick="deleteTask(${task.id})">Delete</button>
         
         
         </div>        
        </div>

        `;
    taskList.appendChild(listItem);
    listItem.addEventListener("change", () => toggleTaskComplete(task.id));
  });
}

newTask.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function deleteTask(id) {
  console.log(id);
}
function editTask() {
  console.log(id);
}
function toggleTaskComplete(id) {
  console.log(id);
}
