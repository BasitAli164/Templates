export class Todo {
  constructor(todoTitle, todoDescription) {
    if (!todoTitle || typeof todoTitle !== "string" || todoTitle.length <= 0) {
      throw new Error("Enter the todo title");
    }

    if (
      !todoDescription ||
      typeof todoDescription !== "string" ||
      todoDescription.length <= 5
    ) {
      throw new Error(
        "Write the description of todo.The length of description must be greater than 5 word "
      );
    }

    

    this.todoTitle = this.todoTitle;
    this.todoDescription = this.todoDescription;
    this.id = this.generateId();
  }

  generateId() {
    return crypto.randomUUID();
  }
}
