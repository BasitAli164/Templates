import { Expense } from "../model/expense";

export class ExpenseService{
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
        // console.log("Simplifying Expense",this.expense)
        const userCount=this.userService.getUserCount();
        if(userCount===0){
            return [];
        }

        const net={};
        const userNames=this.userService.getUserNames()


        userNames.forEach(name=>{
            net[name]=0;
        })

        this.expense.forEach(expense=>{
            const share=Math.floor(expense/userCount);

            userNames.forEach((name)=>{
                if(name===expense.paidBy){
                    net[name]+=(expense.ammount-share)
                }else{
                    net[name]-=share
                }
            })
        })
        return this.calculateSettlements(net);

    }


    calculateSettlements(net){
        console.log(net)
    }


}