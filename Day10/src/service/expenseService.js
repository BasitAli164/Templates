import { Expense } from "../model/expense";
import { UserService } from "./userService";

class ExpenseService{
    constructor(UserService){
        this.expense=[];
        // this.UserService=new UserService() // one way to create a new instance of userService
        this.userService=UserService
    }

    addExpense(paidBy,ammount,description){

        if(!this.userService.hasUser(paidBy)){
            throw new Error("User does not exits")
        }
        const expense=new Expense(paidBy,ammount,description)
        this.expense.push(expense)

        return expense;
    }

    getAllExpenses(){
        return [...this.expense]
    }

    getExpenseByUser(userName){
        return this.expense.filter((exp)=>exp.paidBy===userName)

    }

    clear(){
        this.expense=[];
    }

    simplifyExpenses(){
        
    }


}