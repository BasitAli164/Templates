// get all element to perform logic or action

let task = []; // create data structure to store task

let newTask = document.getElementById("newTask");
let taskList = document.getElementById("tasklist");
let taskInput = document.getElementById("taskInput");


console.log(taskList)

function addTask() {
  const text = taskInput.value.trim();

  if (!text) {
    throw new Error("There is not task you write ");
  }
  
  task.push({  text: text, complete: false });
  updateTaskList();
  newTask.reset();
}

function updateTaskList() {
  taskList.innerHTML = "";

  task.forEach((task,index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="taskItem ">
         <div class="task ${task.complete ? 'complete' : ''}">
         <input type="checkbox" class="checkBox" ${
           task.complete ? "checked" : ""
         }/>
         <p>${task.text}</p>
         </div>

         <div class="icons">
         <button onclick="editTask(${index})">Edit</button>
         <button onclick="deleteTask(${index})">Delete</button>
         
         
         </div>        
        </div>

        `;
    taskList.appendChild(listItem);
    listItem.addEventListener("change", () => toggleTaskComplete(index));
  });
}

newTask.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function deleteTask(id) {
    task.splice(id,1)
    updateTaskList()


    }
function editTask(id) {
    const text=task[id].text;
    task.splice(id,1)
    updateTaskList()
    console.log(text)
  
}
function toggleTaskComplete(id) {
  task[id].complete=!task[id].complete
      console.log(task)

}
