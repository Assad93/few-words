import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

export class ListUsersService {
  async execute() {
    const listUserService = getCustomRepository(UserRepository);

    const users = await listUserService.find();

    return instanceToPlain(users);
  }
}
