import { DOMHelopers } from "./DOMhelper";
// import { showErrorToast,showSuccessToast } from "../utils/toastUtils";

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
      addExpenseForm: DOMHelopers.getElementById("addExpenseForm"),
      expenseUserInput: DOMHelopers.getElementById("expenseUserInput"),
      expensAmountInput: DOMHelopers.getElementById("expensAmountInput"),
      expenseReasonInput: DOMHelopers.getElementById("expenseReasonInput"),
      paymentList: DOMHelopers.getElementById("Payment-list"),
      simplifyBtn: DOMHelopers.getElementById("simplifyBtn"),
      resultArea: DOMHelopers.getElementById("resultArea"),
    };
  }

  // bind Event
  bindEvents() {
    this.elements.addUserForm.addEventListener("submit", (e) => {
      this.handleAddUser(e);
    });

    this.elements.addExpenseForm.addEventListener("submit", (e) => {
      this.handleAddExpense(e);
    });

    this.elements.simplifyBtn.addEventListener("click", () => {
      this.handleSimplify();
    });
  }

  // Initailize the select box

  initializeSelectBox() {
    const defaultOption = DOMHelopers.createOption("Select User ", "");

    this.elements.expenseUserInput.add(defaultOption);
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
      this.addUserToSelect(user.name);

      // Reset the form
      this.elements.addUserForm.reset();

      // showSuccessToast(`User ${user.name} added`);
    } catch (error) {
      console.log("Error adding user", error);
      // showErrorToast(error.message)
    }
  }

  addUserToSelect(userName) {
    const option = DOMHelopers.createOption(userName, userName);
    this.elements.expenseUserInput.add(option);
  }

  handleAddExpense(e) {
    e.preventDefault();

    try {
      const paidBy = this.elements.expenseUserInput.value.trim();
      const ammount = this.elements.expensAmountInput.valueAsNumber;
      const description = this.elements.expenseReasonInput.value.trim();

      if (!paidBy) {
        throw new Error("Please Select a user");
      }

      if (!ammount || ammount <= 0) {
        throw new Error("Please enter an amount greater than zero");
      }

      const expense = this.expenseService.addExpense(
        paidBy,
        ammount,
        description
      );
      console.log("Expense is: ", expense);

      // Render the expense
      this.renderExpense(expense);

      // Reset the form
      this.elements.expensAmountInput.value = "";
      this.elements.expenseReasonInput.value = "";

      // show toast
      // showSuccessToast(`Expense added by ${paidBy}`)
    } catch (error) {
      console.error(`Error adding expense: ${error}`);
      // showErrorToast(error.message)
    }
  }

  renderExpense(expense) {
    const text =
      expense.description !== "No Description"
        ? `${expense.paidBy} paid Rs/-${expense.ammount} for ${expense.description}`
        : `${expense.paidBy} paid Rs/- ${expense.ammount}`;

    const listItem = DOMHelopers.createListItem(text, "expense-item");

    this.elements.paymentList.appendChild(listItem);
  }

  handleSimplify() {
    try {
      const results = this.expenseService.simplifyExpenses();
      this.displayResult(results);
    } catch (error) {
      // showErrorToast(`Error Simplifying expenses: ${error.message}`)
      console.error("Error Simplifying Expense: ", error);
    }
  }

  displayResult(results) {
    console.log("result: ", results);

    DOMHelopers.clearElement(this.elements.resultArea);

    if (results.length === 0) {
      const noResultsItem = DOMHelopers.createListItem(
        "All Expense are settled!",
        "no-results"
      );
      this.elements.resultArea.appendChild(noResultsItem);

      return;
    }

    DOMHelopers.appendFragment(this.elements.resultArea, results, (result) =>
      DOMHelopers.createListItem(result, "settlement-item")
    );
  }
}
