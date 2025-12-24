export class TodoModel {
  constructor(title, description) {
    if (!title || typeof title !== "string") {
      throw new Error("Title is required and must be a string");
    }
    this.title = title.trim();
    this.description = description ? description.trim() : "";
    this.id = crypto.randomUUID();
  }
}
