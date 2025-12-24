import { TodoUI } from "./ui/TodoUI.js";
import { TodoService } from "./service/TodoService.js";

class TodoApp {
  constructor() {
    this.todoService = new TodoService();
    this.ui = null;
  }

  init() {
    try {
      this.ui = new TodoUI(this.todoService);
      console.log("Todo App Initialized Successfully");
    } catch (error) {
      console.error("Failed to initialize Todo App:", error);
    }
  }
}

let todoApp;

document.addEventListener("DOMContentLoaded", () => {
  todoApp = new TodoApp();
  todoApp.init();
});

window.addEventListener("load", () => {
  if (!todoApp) {
    todoApp = new TodoApp();
    todoApp.init();
  }
});
