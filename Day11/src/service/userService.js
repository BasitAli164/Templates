


export class UserService{
    constructor(){
        this.users=new Map();
    }


    addUser(userName,userAge,userBio){
        if(!userName){
            throw new Error("Username is required")
        }
        if(!userAge){
            throw new Error("Age is required")
        }

        


    }
}