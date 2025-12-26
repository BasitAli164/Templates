export class Todo {
  constructor(title, description) {
    if (!title || typeof title !== "string") {
      throw new Error("Title is not give");
    }
    if (!description || typeof description !== "string") {
      throw new Error("Description is not given");
    }

    this.title = title.trim();
    this.description = description;
    this.id = this.generateId();
  }

  generateId() {
    return crypto.randomUUID();
  }
}
