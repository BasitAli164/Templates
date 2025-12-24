import { UserModel } from "../model/user";

export class UserService {
  constructor() {
    this.users = new Map();
  }

  addUser(userName, userAge, userBio = "Not give the bio of user") {
    if (!userName) {
      throw new Error("Username is required");
    }
    if (!userAge) {
      throw new Error("Age is required");
    }

    const trimUserName = userName.trim();

    if (this.users.has(trimUserName)) {
      throw new Error("User is already exist");
    }

    const newUser = new UserModel(trimUserName, userAge, userBio);
    console.log("New user is:", newUser);

    return newUser;
  }
}
