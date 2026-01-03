window.addEventListener("DOMContentLoaded", () => {
  // Get all elements

  const addTodo = document.getElementById("addTodoForm");
  const titleField = document.getElementById("todoTitle");
  const descriptionField = document.getElementById("todoDescription");
  let resultArea = document.getElementById("result");

  // create Data structure for saving data
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  console.log(todos);

  // create function
  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addTodoFun(e) {
    try {
      e.preventDefault();
      const title = titleField.value.trim();
      const description = descriptionField.value.trim();
      console.log(description);
      if (!title) {
        throw new Error("Title is mendatory");
      }
      if (!description) {
        throw new Error("Description is mendatory");
      }

      const newData = {
        id: Date.now(),
        createAt: new Date(),
        title: title,
        description: description,
        complete: false,
      };

      todos.push(newData);
      rendering();
    } catch (error) {
      console.error("Error facing during adding the todo", error);
    }
  }

  function rendering() {
    let fragment = document.createDocumentFragment();
    if (todos.length === 0) {
      const li = document.createElement("li");
      li.className = "emptyDataList";
      li.textContent = "There is no data yet";
      fragment.appendChild(li);
    } else {
      todos.forEach((todo) => {
        const li = createElements(todo);
        fragment.appendChild(li);
      });
    }

    resultArea.innerHTML = "";
    resultArea.appendChild(fragment);
    saveToLocalStorage();
    bindsAllEvent();
  }

  function createElements(todo) {
    const li = document.createElement("li");
    li.className = "values";
    li.dataset.id = todos.id;
    li.innerHTML = `
    <div class="box">
    <div class"boxInside">
    <input type="checkbox" class="checkBox" ${todo.complete ? "checked" : ""}/>
    <bold>${todo.titel}</bold>    
    </div>
    <p>${todo.description}</p>
    </div>     
    `;
  }

  function bindsAllEvent() {
    document
      .querySelector("#addTodoForm")
      .addEventListener("submit", addTodoFun);
  }

  rendering();
});
