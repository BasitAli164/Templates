export class DOMHelper {
  static getElementById(id) {
    const el = document.getElementById(id);
    if (!el) throw new Error(`Element with id "${id}" not found`);
    return el;
  }

  static createTodoElement(todo, editCallback, deleteCallback) {
    const li = document.createElement("li");
    li.id = todo.id;

    const span = document.createElement("span");
    span.textContent = `${todo.title} - ${todo.description}`;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editCallback(todo.id));

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteCallback(todo.id));

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    return li;
  }

  static clearElement(el) {
    el.innerHTML = "";
  }

  static appendElement(parent, child) {
    parent.appendChild(child);
  }
}
