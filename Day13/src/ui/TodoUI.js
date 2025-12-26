import { DOMHeloper } from "./DOMHelper";

export class TodoUI {
  constructor(todoService) {
    this.todoService = todoService;

    this.initailizeElements();
    this.bindEvents();
  }

  initailizeElements() {
    this.elements = {
      addTodoForm: DOMHeloper.getElementById("addTodoForm"),
      todoTitle: DOMHeloper.getElementById("todoTitle"),
      todoDescription: DOMHeloper.getElementById("todoDescription"),
    };
  }

  bindEvents(){

    this.elements.addTodoForm.addEventListener('submit',(e)=>{
      this.handleAddTodo(e)
    });

  }
   
  

  handleAddTodo(e) {
    e.preventDefault();

    try {
      // get value form elements
      const title = this.elements.todoTitle.value.trim();
      const desc = this.elements.todoDescription.value;

      if (!title) {
        throw new Error("Title is mandatory");
      }
      if (!desc) {
        throw new Error("Description is mandatory");
      }

      // add value in model or store in model through todoService

      const newlyAddedToda = this.todoService.addTodo(title, desc);


      this.elements.addTodoForm.reset()

      console.log("New Todo Added ", newlyAddedToda);
    } catch (error) {
      console.error("Error face during add new todo", error);
    }
  }

}
