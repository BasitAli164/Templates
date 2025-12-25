import { Todo } from "../model/Todo";

export class ServiceOfTodo {
  constructor() {
    this.todos = new Map();
    const save = localStorage.getItem("todo");
    if (save) {
      JSON.parse(save).forEach((todo) => {
        return this.todos.set(todo.id, todo);
      });
    }
  }

  saveToStorage() {
    localStorage.setItem("todo", JSON.stringify([...this.todos.values()]));
  }

  addTodo(title, description) {
    if(!title){
        throw new Error("Title is mandatory")
    }
    if(!description){
        throw new Error("Description is mandatory")
    }

    const trimTitle=title.trim();
    const trimDescription=description.trim();


    const newTodo=new Todo(trimTitle,trimDescription)
    this.todos.set(newTodo.id,newTodo)
    this.saveToStorage();
    return newTodo;
    
  }
}
