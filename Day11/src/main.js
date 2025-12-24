import { UserService } from "./service/userService";
import { UserUI } from "./ui/UserUI";



class UserApp{
    constructor(){
        this.userService=UserService();
        this.ui=null;
    }

    init(){
        try {

            this.ui=new UserUI(this.userService)
            console.log("User App Initailize Successfully")

            
        } catch (error) {
            console.log("Failed To Initialize App: ",error)
            
        }
    }
}


let userApp;


document.addEventListener("DOMContentLoaded",()=>{
    userApp=new UserApp();
    userApp.init()
})