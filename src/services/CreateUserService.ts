import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from "bcryptjs";

interface IUser {
  name: string;
  email: string;
  admin: boolean;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, admin = false, password }: IUser) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email incorreto!");
    }

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("Usuário já cadastrado no sistema!");
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await userRepository.save(user);

    return user;
  }
}
