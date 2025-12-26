import { Todo } from "../models/todo";


export class TodoService{
    constructor(){
        this.todoStore=new Map();
        const save=localStorage.getItem('todo');
        if(save){
            JSON.parse(save).forEach(todo=>this.todoStore.set(todo.id,todo))
        }
    }

    saveToStorage(){
        localStorage.setItem('todo',JSON.stringify([...this.todoStore.values()]))
    }


    addTodo(title,description){
        if(!title){
            throw new Error("Title is mandatory")
        }

        const trimTitle=title.trim()
        const newTodo=new Todo(trimTitle,description)
        this.todoStore.set(newTodo.id,newTodo)
        this.saveToStorage()

        return newTodo
    }


    getAllTodo(){
        return JSON.parse(localStorage.getItem("todo"))
    }

    



}