// get all element to perform logic or action

let task = []; // create data structure to store task

let newTask = document.getElementById("newTask");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();

  if (!text) {
    throw new Error("There is not task you write ");
  }
  const id = crypto.randomUUID();
  task.push({ id: id, text: text, complete: false });
  updateTaskList();
}

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  task.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="taskItem ${task.complete?'completed':''}">
         <div class="task">
         <input type="checkbox" class="checkBox" ${task.complete?"checked":""}/>
         <p>Finish this project</p>
         </div>

         <div class="icons">
         <button>Edit</button>
         <button>Delete</button>
         
         
         </div>
        
        
        </div>

        `;
    listItem.addEventListener("change", () => toggleTaskComplete(task.id));
    taskList.appendChild(listItem);
  });
}

newTask.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
