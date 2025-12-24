import { ExpenseUI } from "./ui/expenseUI";
import { UserService } from "./service/userService";
import { ExpenseService } from "./service/expenseService";
class ExpenseApp{
  constructor(){
    this.UserService=new UserService();
    this.ExpenseService=new ExpenseService(this.UserService);
    this.ui=null;

  }

  init(){
    console.log("object")
    try {
      this.ui=new ExpenseUI(this.UserService,this.ExpenseService)
      console.log("Splitter App Initialized Successfully")
      } catch (error) {
      console.log("Failed to Initialized App:",error)      
    }
  }
}


// new ExpenseApp() // It work but we use many


let expenseApp;

document.addEventListener("DOMContentLoaded",()=>{
  expenseApp=new ExpenseApp;
  expenseApp.init()
})


window.addEventListener('load',()=>{
  if(!ExpenseApp){
    expenseApp=new ExpenseApp;
    expenseApp.init()
  }
})