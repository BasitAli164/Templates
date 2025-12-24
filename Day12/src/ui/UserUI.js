import { DOMHelper } from "./DOMHelpers";

export class UserUI {
  constructor(userService) {
    this.userService = userService;

    this.initializeElement=this.initializeElement();
    this.binEvents=this.binEvents();
  }
  // Initailize all ui elements

  initializeElement(){
    this.elements={
        addUserForm:DOMHelper.getElementById("addUserForm"),
        userName:DOMHelper.getElementById("userName"),
        userAge:DOMHelper.getElementById("userAge"),
        userBio:DOMHelper.getElementById("userBio")
        

    }

  }
  //binEvents
  binEvents(){


    this.elements.addUserForm.addEventListener('submit',(e)=>{
      this.handleAddUser(e)
    })
  }


  handleAddUser(e){
    e.preventDefault();
    try {
      
      let userName=this.elements.userName.value.trim();
      if(!userName){
        throw new Error("user name is mandatory");
      }

      let userAge=this.elements.userAge.valueAsNumber;
      if(!userAge || userAge<=0){
        throw new Error("user age is mandatory");
      }

      let userBio=this.elements.userBio.value.trim();


      const newAddUser=this.userService.addUser(userName,userAge,userBio)
      console.log(newAddUser)
    } catch (error) {
      console.error("Error Adding User:",error)
      
    }

    
  }
  
}
