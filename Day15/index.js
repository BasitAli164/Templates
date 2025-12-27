let textInput = document.getElementById("textInput");
let textList = document.querySelector("#textList");
const addBtn = document.getElementById("addBtn");

const todos = JSON.parse(localStorage.getItem("todo")) || [];

function saveTodos() {
  localStorage.setItem("todo", JSON.stringify(todos));
}

addBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (!text) {
    throw new Error("Title is mandatory");
  }

  todos.push({ text, done: false });
  textInput.value = "";
  render();
});

function render() {
  textList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <h1>Hello: ${todo.text}</h1>

        <button onclick="deleteTask(${index})">Delete</button>
        `;

    textList.appendChild(li);
  });
  saveTodos();
}

window.deleteTask = function (index) {
  todos.splice(index, 1);
  render();
};

render();
