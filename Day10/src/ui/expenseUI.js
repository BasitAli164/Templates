class ExpenseUI{


    constructor(userService,expenseService){
        this.userService=userService;
        this.expenseService=expenseService;


        this.initializeElements();
        this.bindEvents();
        this.initializeSelectBox(); 
    

    }

    initializeElements(){
        this.elements={
            addUserForm:document.getElementById("addUserForm")
        }
    }
}