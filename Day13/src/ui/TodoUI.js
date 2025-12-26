import { DOMHeloper } from "./DOMHelper";



export class TodoUI{
    constructor(todoService){
        this.todoService=todoService;

        this.initailizeElements=this.initailizeElements();
        this.bindEvent=this.bindEvent()
    }

    initailizeElements(){
         this.element={
            todoTitle:DOMHeloper.getElementById("todoTitle"),
            todoDescription:DOMHeloper.getElementById("todoDescriptions"),
            addTodoBtn:DOMHeloper.getElementById("addTodoBtn"),
            
        }
        // console.log(" Elements inside the initailizeEelemtn",element)
    }


    bindEvent(){
        this.element.addTodoBtn.addEventListner('submit',(e)=>{
           this.handleAddTodo(e)
        })
       
    }


    handleAddTodo(e){
        e.preventDefault();
        

        try {

            // get value form elements
            const title=this.element.todoTitle.value.trim();
            const desc=this.element.todoDescription.value.trim();

            if(!title){
                throw new Error("Title is mandatory")
            }
            if(!desc){
                throw new Error("Description is mandatory")
            }


            // add value in model or store in model through todoService

           const newlyAddedToda=this.todoService.addTodo(title,desc)

           console.log("New Todo Added ",newlyAddedToda)

            
        } catch (error) {
            console.error("Error face during add new todo",error)
            
        }
    }
}