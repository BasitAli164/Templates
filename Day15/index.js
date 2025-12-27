let textInput = document.getElementById("textInput");
let textList = document.querySelector("#textList");
const addBtn = document.getElementById("addBtn");

// Define the data structure for storing data
let todos = JSON.parse(localStorage.getItem("todo")) || [];

// how to save in local storage

function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(todos));
}

// how to add

addBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (!text) {
    alert("Title is not avaiable in input field");
    throw new Error("Title is not avaiable in input field ");
  }

  const id = Math.random();
  todos.push({ id, text, done: false });
  saveToLocalStorage();
  textInput.value = "";
  render();
});
function render() {
  textList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    li.innerHTML = `
    <div class="left">
    <input type="checkbox" ${
      todo.done ? "checked" : ""
    } onclick="toggle(${index})" />
    <span>${todo.text}</span>
    </div>
    <div class="right">
    <button class="editBtn" onclick="editTodo(${index})">Edit</button>
    <button class="deleteBtn" onclick="deleteTodo(${
      todo.id
    })">Delete</button>    
    </div>
    
    `;

    textList.appendChild(li);
  });

  saveToLocalStorage();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function editTodo(index) {
  const newText = prompt(todos[index].text);
  if (newText !== null && newText.trim() !== "") {
    todos[index].text = newText.trim();
    render();
  }
}

function toggle(index) {
  todos[index].done = !todos[index].done;
  render();
}

render();
