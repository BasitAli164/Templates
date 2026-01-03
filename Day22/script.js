window.addEventListener("DOMContentLoaded", () => {
  // Get all elements

  const addTodo = document.getElementById("addTodoForm");
  const titleField = document.getElementById("todoTitle");
  const descriptionField = document.getElementById("todoDescription");
  let resultArea = document.getElementById("result");

  // create Data structure for saving data
  let todos = JSON.parse(localStorage.getItem("todo")) || [];

  // create function

  function rendering() {
    const fragment = document.createDocumentFragment();
    if (todos.length === 0) {
      const li = document.createElement("li");
      li.className = "emptyDataList";
      li.textContent = "There is no data yet";
      fragment.appendChild(li);
    } else {
      todos.forEach((todo) => {
        const li = createElement(todo);
        fragment.appendChild(li);
      });
    }

    resultArea.innerHTML = "";
    resultArea.appendChild(fragment)
  }

  function createElement(todo){
    

  }

  rendering();
});
