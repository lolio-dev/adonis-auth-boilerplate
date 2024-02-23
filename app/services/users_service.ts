import User from "#models/user";
import { Infer } from "@vinejs/vine/types";
import { createUserValidator } from "#validators/user_validator";

export default class UsersService {
  async createUser(newUser: Infer<typeof createUserValidator>) {
    const user = await User.create(newUser)

    return user.id
  }

  async getAllUsers() {
    return User.all();
  }

  async getUser(userId: number) {
    return User.find(userId);
  }
}
