import {
  CreateUserParams,
  IAuthUserRepository,
} from "@/application/interfaces/domain/entities/user/IauthUser";

import { IUser } from "@/domain/entities/User";

export class InMemoryAuthUserRepository implements IAuthUserRepository {
  private users: IUser[] = [];

  async createUser(params: CreateUserParams): Promise<IUser> {
    const newUser = { ...params };
    this.users.push(newUser);
    return newUser;
  }

  async findUserByEmail(email: string): Promise<IUser | null> {
    const user = this.users.find((user) => user.email === email);
    return user || null;
  }
}
