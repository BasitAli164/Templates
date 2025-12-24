import { DOMHelper } from "./DOMHelpers";

export class UserUI {
  constructor(userService) {
    this.userService = userService;

    this.initializeElement=initializeElement();
    this.binEvents=binEvents();
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

  }
  
}
