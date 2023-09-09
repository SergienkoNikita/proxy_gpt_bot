import {UserSchema} from "@/models/user/user.model";
import {User} from "@/models/user/types/user";

class UserService {
  getUserById (id: number): Promise<User | null> {
    return UserSchema.findOne({where: { id }})
  }

  async saveNewUser (user: User): Promise<User> {
    return UserSchema.create(user)
  }

  async saveIfNeed(user: User): Promise<User> {
    const userInDb = await this.getUserById(user.id)

    if (userInDb) return userInDb;

    return this.saveNewUser(user)
  }
}

export const userService = new UserService();
