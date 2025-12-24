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
  }
  
}
