window.addEventListener("DOMContentLoaded", () => {
  // Get all elements

  const addTodo = document.getElementById("addTodoForm");
  const titleField = document.getElementById("todoTitle");
  const descriptionField = document.getElementById("todoDescription");
  let resultArea = document.getElementById("result");

  // create Data structure for saving data
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  console.log(todos);

  // Required function

  //! Utils Funcion

  //? for saving in localStoraeg
  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  //? for rendering all data on page
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
  //? for create element or tag for data inside the localStorage
  function createElements(todo) {
    const li = document.createElement("li");
    li.className = "values";
    li.dataset.id = todo.id;
    li.innerHTML = `
    <div class="box">
    <div class"boxInside">
    <input type="checkbox" class="checkBox" ${todo.complete ? "checked" : ""}/>
    <bold>${todo.title}</bold>    
    </div>
    <p>${todo.description}</p>
    <div>
    <button class="editBtn">Edit</button>
    <button class="delBtn">Delete</button>
    </div>
    </div>     
    `;

    return li;
  }
  //? bind all envent which are use in whole project
  function bindsAllEvent() {
    document
      .querySelector("#addTodoForm")
      .addEventListener("submit", addTodoFun);

    document
      .querySelectorAll(".editBtn")
      .forEach((btn) => btn.addEventListener("click", editTodo));
    document
      .querySelectorAll(".delBtn")
      .forEach((btn) => btn.addEventListener("click", delTodo));
    document
      .querySelectorAll(".checkBox")
      .forEach((chk) => chk.addEventListener("change", toggle));
  }

  // crud Functin

  //! create or add function
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
      addTodo.reset();
      titleField.focus();
      descriptionField.focus();
    } catch (error) {
      console.error("Error facing during adding the todo", error);
    }
  }
  function delTodo(e) {
    const id = e.target.closest(".values").dataset.id;
    todos = todos.filter((t) => t.id != id);
    console.log(todos);
    rendering();
  }
  function editTodo(e) {
    const id = parseInt(e.target.closest(".values").dataset.id);
    const todo = todos.find((t) => t.id === id);

    const editForm = document.createElement("div");
    editForm.innerHTML = `
    <div>
    <div>
    <input class="new" value="${todo.title}"/>
    <textarea>${todo.description}</textarea>
    </div>
    <div>
    <button class="save">save</button>
    <button class="cancel">cancel</button>
    </div>
    
    
    </div>

    `;

    function saveEdit() {
      const newTitle = editForm.querySelector("input").value.trim();
      const newDes = editForm.querySelector("textarea").value.trim();

      if (newTitle && newTitle !== todo.title) {
        todo.title = newTitle;
        saveToLocalStorage();
      }
      if (newDes && newDes !== todo.description) {
        todo.description = newDes;
        saveToLocalStorage();
      }
      rendering();
    }

    function cancelEdit() {
      rendering();
    }

    document.querySelector(".box").replaceWith(editForm);
    document.querySelector(".cancel").addEventListener("click", cancelEdit);
    document.querySelector(".save").addEventListener("click", saveEdit);
  }

  function toggle(e) {
    const id = parseInt(e.target.closest(".values").dataset.id);
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.complete = e.target.checked;
    }
    rendering();
  }

  rendering();
});
