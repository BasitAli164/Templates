export class Expense{
    constructor(paidBy,ammount,description="No Description"){
        if(!paidBy || typeof paidBy!=="string"){
            throw new Error ("PaidBy must be a non-empty string")
        }

        if(!ammount || typeof ammount!=="number" || ammount<=0){
            throw new Error ("Ammount must be a positive integer")
        }


        this.paidBy=paidBy.trim();
        this.ammount=parseFloat(ammount.toFixed(2));
        this.description=description;
        this.timeStamp=new Date().toISOString();
        this.id=generateId();

    }
    
    generateId(){
        return crypto.randomUUID()
    }

}