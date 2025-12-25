export class Todo{
    constructor(todoTitle,todoDescription,todoStatus){
        this.todoTitle=this.todoTitle;
        this.todoDescription=this.todoDescription;
        this.todoStatus=this.todoStatus;
        this.id=this.generateId()        
    }

    generateId(){
        return crypto.randomUUID()
    }
}