import { TodoService } from "./service/todoService";
import { TodoUI } from "./ui/TodoUI";


class TodoApp{
    constructor(){
        this.todoService=new TodoService()
        this.ui=null;
        

    }
    init(){
        try {
            this.ui=new TodoUI(this.todoService)
            console.log("Todo App successfully initalize")
            
        } catch (error) {
            
            console.error("App is not initailize")
        }


    }
}



let todoApp;
document.addEventListener("DOMContentLoaded",()=>{
    todoApp=new TodoApp()
    todoApp.init()
})