import { DOMHelper } from "./DOMHelpers";

export class TodoUI {
  constructor(todoService) {
    this.todoService = todoService;
    this.elements = {
      form: DOMHelper.getElementById("todoForm"),
      title: DOMHelper.getElementById("todoTitle"),
      desc: DOMHelper.getElementById("todoDesc"),
      list: DOMHelper.getElementById("todoList")
    };

    this.bindEvents();
    this.renderTodos();
  }

  bindEvents() {
    this.elements.form.addEventListener("submit", e => this.handleAdd(e));
  }

  handleAdd(e) {
    e.preventDefault();
    const title = this.elements.title.value;
    const desc = this.elements.desc.value;

    if (!title) return alert("Title is required");

    const todo = this.todoService.addTodo(title, desc);
    this.addTodoToDOM(todo);

    this.elements.form.reset();
  }

  handleEdit(id) {
    const todo = this.todoService.todos.get(id);
    if (!todo) return;

    const newTitle = prompt("Edit Title", todo.title);
    const newDesc = prompt("Edit Description", todo.description);

    if (newTitle !== null && newTitle.trim() !== "") {
      this.todoService.updateTodo(id, newTitle, newDesc || "");
      this.renderTodos();
    }
  }

  handleDelete(id) {
    if (confirm("Are you sure?")) {
      this.todoService.deleteTodo(id);
      this.renderTodos();
    }
  }

  renderTodos() {
    DOMHelper.clearElement(this.elements.list);
    const todos = this.todoService.getAllTodos();
    todos.forEach(todo => this.addTodoToDOM(todo));
  }

  addTodoToDOM(todo) {
    const li = DOMHelper.createTodoElement(todo, id => this.handleEdit(id), id => this.handleDelete(id));
    DOMHelper.appendElement(this.elements.list, li);
  }
}
