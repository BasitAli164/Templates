import { TodoModel } from "../model/TodoModel.js";

export class TodoService {
  constructor() {
    this.todos = new Map();
    const saved = localStorage.getItem("todos");
    if (saved) {
      JSON.parse(saved).forEach(todo => this.todos.set(todo.id, todo));
    }
  }

  saveToStorage() {
    localStorage.setItem("todos", JSON.stringify([...this.todos.values()]));
  }

  addTodo(title, description) {
    const todo = new TodoModel(title, description);
    this.todos.set(todo.id, todo);
    this.saveToStorage();
    return todo;
  }

  updateTodo(id, newTitle, newDesc) {
    const todo = this.todos.get(id);
    if (!todo) throw new Error("Todo not found");
    todo.title = newTitle.trim();
    todo.description = newDesc.trim();
    this.saveToStorage();
    return todo;
  }

  deleteTodo(id) {
    this.todos.delete(id);
    this.saveToStorage();
  }

  getAllTodos() {
    return [...this.todos.values()];
  }
}
