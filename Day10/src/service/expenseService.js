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
            const share=Math.floor(expense.ammount/userCount);

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

        const result=[]
        // Filter out Balanced Peopless
        const name=Object.keys(net).filter(
            (name)=>Math.abs(net[name])>0.01
        )

        // sort by balance
        name.sort((a,b)=>net[a]-net[b])


        // Tow pointer Technique
        let i=0
        let j=name.length-1

        while(i<j){
            const  creditor=name[j]
            const debtor=name[i];
            const settlement=Math.min(-net[debtor],net[creditor])


            if(settlement>0.01){
                net[debtor]+=settlement;
                net[creditor]-=settlement;

                result.push(
                    `${debtor} owes ${creditor} Rs./ ${settlement.toFixed(2)}`
                )
            }
            if(Math.abs(net[debtor])<0.01) i++;
            if(Math.abs(net[creditor])<0.01) j--;

        }
        return result
    }


}