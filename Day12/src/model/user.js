export class UserModel{
    constructor(userName,userAge,userBio){
        if(!userName || typeof userName!=="string"){
            throw new Error(`User name must be a string`)
        }
        if(!userAge || typeof userAge!=="number" || userAge<=0){
            throw new Error("User Age must be number and greater than 0")
        }
        
        this.userName=userName.trim();
        this.userAge=userAge;
        this.userBio=userBio.trim();
        this.id=this.generatedId();
    }

    generatedId(){
        return crypto.randomUUID();
    }
}