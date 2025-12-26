import { DOMHeloper } from "./DOMHelper";

export class TodoUI {
  constructor(todoService) {
    this.todoService = todoService;

    this.initailizeElements();
    this.bindEvents()
  }

  initailizeElements() {
    this.element = {
      todoTitle: DOMHeloper.getElementById("todoTitle"),
      todoDescription: DOMHeloper.getElementById("todoDescription"),
      addTodoForm: DOMHeloper.getElementById("addTodoForm")
    };
    // console.log(" Elements inside the initailizeEelemtn",element)
  }

  bindEvents(){
    this.element.addTodoForm.addEventListener('submit',(e)=>{
      this.handleAddTodo(e)
    })
  }
   
  

  handleAddTodo(e) {
    e.preventDefault();

    try {
      // get value form elements
      const title = this.element.todoTitle.value.trim();
      const desc = this.element.todoDescription.value.trim();

      if (!title) {
        throw new Error("Title is mandatory");
      }
      if (!desc) {
        throw new Error("Description is mandatory");
      }

      // add value in model or store in model through todoService

      const newlyAddedToda = this.todoService.addTodo(title, desc);

      console.log("New Todo Added ", newlyAddedToda);
    } catch (error) {
      console.error("Error face during add new todo", error);
    }
  }

}
