import { DOMHelopers } from "./DOMhelper";


export class ExpenseUI {
  constructor(userService, expenseService) {
    this.userService = userService;
    this.expenseService = expenseService;

    this.initializeElements();
    this.bindEvents();
    this.initializeSelectBox();
  }
  // initailize all the UI elements
  initializeElements() {
    this.elements = {
      addUserForm: DOMHelopers.getElementById("addUserForm"),
      userInput: DOMHelopers.getElementById("userInput"),
      expenseUserInput:DOMHelopers.getElementById("expenseUserInput"),
    };
  }

  // bind Event
  bindEvents() {
    this.elements.addUserForm.addEventListener("submit", (e) => {
      this.handleAddUser(e);
    });
  }

  // Initailize the select box

  initializeSelectBox(){
    const defaultOption=DOMHelopers.createOption("Select User ","")

    this.elements.expenseUserInput.add(defaultOption)
  }


  handleAddUser(e) {
    e.preventDefault();

    try {
      // Get the user name provide by the user

      const name = this.elements.userInput.value.trim();

      // check if user is given
      if (!name) {
        throw new Error("User name is mandatory");
      }
      // Use the user Service to add a user

      const user = this.userService.addUser(name);

      // add the use to the expense select box
      this.addUserToSelect(user.name)

      // Reset the form
      this.elements.addUserForm.reset();

      console.log(`User ${user.name} added`);
      console.log(`All user: ${this.userService.getUserCount()} added`);
    } catch (error) {
      console.log("Error adding user", error);
    }
  }

  addUserToSelect(userName){
    const option=DOMHelopers.createOption(userName,userName)
        this.elements.expenseUserInput.add(option)

  }
}
