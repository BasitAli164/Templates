// latest todo 
window.addEventListener("DOMContentLoaded", () => {
  /* =========================
     DOM ELEMENTS
  ========================== */
  const form = document.getElementById("addTodoForm");
  const titleField = document.getElementById("todoTitle");
  const descriptionField = document.getElementById("todoDescription");
  const resultArea = document.getElementById("result");

  /* =========================
     STATE
  ========================== */
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  /* =========================
     LOCAL STORAGE
  ========================== */
  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  /* =========================
     RENDER
  ========================== */
  function renderTodos() {
    resultArea.innerHTML = "";

    if (todos.length === 0) {
      const li = document.createElement("li");
      li.className = "emptyDataList";
      li.textContent = "There is no data yet";
      resultArea.appendChild(li);
      return;
    }

    const fragment = document.createDocumentFragment();

    todos.forEach((todo) => {
      fragment.appendChild(createTodoElement(todo));
    });

    resultArea.appendChild(fragment);
  }

  /* =========================
     CREATE TODO ELEMENT
  ========================== */
  function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = "values";
    li.dataset.id = todo.id;

    const box = document.createElement("div");
    box.className = "box";

    const top = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkBox";
    checkbox.checked = todo.complete;

    const title = document.createElement("strong");
    title.textContent = todo.title;

    top.appendChild(checkbox);
    top.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = todo.description;

    const actions = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.textContent = "Edit";

    const delBtn = document.createElement("button");
    delBtn.className = "delBtn";
    delBtn.textContent = "Delete";

    actions.append(editBtn, delBtn);

    box.append(top, desc, actions);
    li.appendChild(box);

    return li;
  }

  /* =========================
     ADD TODO
  ========================== */
  function addTodo(e) {
    e.preventDefault();

    const title = titleField.value.trim();
    const description = descriptionField.value.trim();

    if (!title) {
      alert("Title is required");
      return;
    }

    if (!description) {
      alert("Description is required");
      return;
    }

    todos.push({
      id: Date.now(),
      title,
      description,
      complete: false,
      createdAt: new Date(),
    });

    saveToLocalStorage();
    renderTodos();

    form.reset();
    titleField.focus();
  }

  /* =========================
     DELETE TODO
  ========================== */
  function deleteTodo(id) {
    todos = todos.filter((t) => t.id !== id);
    saveToLocalStorage();
    renderTodos();
  }

  /* =========================
     TOGGLE COMPLETE
  ========================== */
  function toggleTodo(id, checked) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.complete = checked;
      saveToLocalStorage();
    }
  }

  /* =========================
     EDIT TODO
  ========================== */
  function editTodo(li, todo) {
    const editBox = document.createElement("div");

    const input = document.createElement("input");
    input.value = todo.title;

    const textarea = document.createElement("textarea");
    textarea.value = todo.description;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";

    editBox.append(input, textarea, saveBtn, cancelBtn);

    li.querySelector(".box").replaceWith(editBox);

    saveBtn.addEventListener("click", () => {
      const newTitle = input.value.trim();
      const newDesc = textarea.value.trim();

      if (!newTitle || !newDesc) {
        alert("Fields cannot be empty");
        return;
      }

      todo.title = newTitle;
      todo.description = newDesc;

      saveToLocalStorage();
      renderTodos();
    });

    cancelBtn.addEventListener("click", renderTodos);
  }

  /* =========================
     EVENT DELEGATION
  ========================== */
  resultArea.addEventListener("click", (e) => {
    const li = e.target.closest(".values");
    if (!li) return;

    const id = Number(li.dataset.id);
    const todo = todos.find((t) => t.id === id);

    if (e.target.classList.contains("delBtn")) {
      deleteTodo(id);
    }

    if (e.target.classList.contains("editBtn")) {
      editTodo(li, todo);
    }
  });

  resultArea.addEventListener("change", (e) => {
    if (!e.target.classList.contains("checkBox")) return;

    const li = e.target.closest(".values");
    const id = Number(li.dataset.id);

    toggleTodo(id, e.target.checked);
  });

  /* =========================
     INIT
  ========================== */
  form.addEventListener("submit", addTodo);
  renderTodos();
});
