import { DOMHelopers } from "./DOMhelper";


export class ExpenseUI {
  constructor(userService, expenseService) {
    this.userService = userService;
    this.expenseService = expenseService;

    this.initializeElements();
    this.bindEvents();
    // this.initializeSelectBox();
  }
  // initailize all the UI elements
  initializeElements() {
    this.elements = {
      addUserForm: DOMHelopers.getElementById("addUserForm"),
      userInput: DOMHelopers.getElementById("userInput"),
    };
  }

  // bind Event
  bindEvents() {
    this.elements.addUserForm.addEventListener("submit", (e) => {
      this.handleAddUser(e);
    });
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

      // Reset the form
      this.elements.addUserForm.reset();

      console.log(`User ${user.name} added`);
      console.log(`All user: ${this.userService.getUserCount()} added`);
    } catch (error) {
      console.log("Error adding user", error);
    }
  }
}
