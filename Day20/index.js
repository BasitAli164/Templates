window.addEventListener("DOMContentLoaded", () => {
  // elements
  const inputText = document.getElementById("textInput");
  const addBtn = document.getElementById("addBtn");
  const textList = document.getElementById("textList");

  // data
  let stores = JSON.parse(localStorage.getItem("todo")) || [];

  // events
  addBtn.addEventListener("click", addTask);
  inputText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  
  // utils
  function saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(stores));
  }

  function addTask() {
    const text = inputText.value.trim();
    if (!text) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };

    stores.unshift(newTask);
    saveToLocalStorage();
    renderTasks();

    inputText.value = "";
    inputText.focus();
  }

  function renderTasks() {
    const fragment = document.createDocumentFragment();

    if (stores.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No tasks yet";
      fragment.appendChild(li);
    } else {
      stores.forEach((task) => {
        const li = createTaskElement(task);
        fragment.appendChild(li);
      });
    }

    textList.innerHTML = "";
    textList.appendChild(fragment);

    attachTaskEventListeners();
  }

  function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "taskItem";
    li.dataset.id = task.id;

    li.innerHTML = `
      <div class="listItem">
        <div class="left">
          <input type="checkbox" class="task-checkbox" ${
            task.completed ? "checked" : ""
          }/>
          <p>${task.text}</p>
        </div>

        <div class="right">
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        </div>
      </div>
    `;

    return li;
  }

  function attachTaskEventListeners() {
    document.querySelectorAll(".deleteBtn").forEach((btn) =>
      btn.addEventListener("click", deleteTask)
    );

    document.querySelectorAll(".editBtn").forEach((btn) =>
      btn.addEventListener("click", editTask)
    );

    document.querySelectorAll(".task-checkbox").forEach((chk)=>
      chk.addEventListener("change",toggleTask)
    )
  }

  function deleteTask(e) {
    const id = parseInt(e.target.closest(".taskItem").dataset.id);
    console.log(id)
    stores = stores.filter((t) => t.id !== id);
    console.log(stores)

    saveToLocalStorage();
    renderTasks();
  }

  function editTask(e) {
    const item = e.target.closest(".taskItem");
    const id = parseInt(item.dataset.id);
    const task = stores.find((t) => t.id === id);

    if (!task) return;

    const editForm = document.createElement("div");
    editForm.className = "editForm";

    editForm.innerHTML = `
      <input 
        type="text" 
        value="${task.text}"
        class="editInput"
      />

      <div>
        <button class="saveEdit">Save changes</button>
        <button class="cancelEdit">Cancel</button>
      </div>
    `;

    item.querySelector(".listItem").replaceWith(editForm);

    const saveEdit = () => {
      const newText = editForm.querySelector("input").value.trim();
      if (newText &&(newText!==stores.text)) {
        task.text = newText;
        saveToLocalStorage();
      }
      renderTasks();
    };

    const cancelEdit = () => renderTasks();

    editForm.querySelector(".saveEdit").addEventListener("click", saveEdit);
    editForm.querySelector(".cancelEdit").addEventListener("click", cancelEdit);

    editForm.querySelector("input").addEventListener("keypress", (e) => {
      if (e.key === "Enter") saveEdit();
    });
  }

  function toggleTask(e){
    const item=e.target.closest(".taskItem")
    const id = parseInt(item.dataset.id);
    console.log(id)

    const task=stores.find((t)=>t.id===id);
    if(!task) return ;
    task.completed=e.target.checked;
    saveToLocalStorage();
    renderTasks();
    

  }
  renderTasks();
});
