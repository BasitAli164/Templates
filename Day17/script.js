// initalize all variable and get all that element which required to work

let newTask = document.getElementById("newTask");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("tasklist");

// initallize data strcuture to store data and set localStorage

const stores = new Map(JSON.parse(localStorage.getItem("todo")) || []);

function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify([...stores]));
}

// add data into local Storage

newTask.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (!text) {
    throw new Error("Task is mandatory");
  }
  const id = Math.random().toFixed(2) * 10;

  stores.set(id, { text });
  render();
  newTask.reset();
});

function render() {
  taskList.innerHTML = "";
  stores.forEach((todo, id) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div>
            <p>${todo.text}</p>
            <button  onclick="del(${id})">delete</button>
            <button  onclick="edit(${id})">edit</button>
        
        </div> 
            `;
    taskList.appendChild(listItem);
  });
  saveToLocalStorage();
}


function del(id){
    stores.delete(id)
    render()
}

function edit(id){
    let todo=stores.get(id)
    const editText=prompt("Do you want to update text",todo.text)
    console.log("edit text:",editText)
    if(editText){
        todo.text=editText.trim()
        render()
    }
}

render()
