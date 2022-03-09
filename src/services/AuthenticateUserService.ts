import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IAuthenticate {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticate) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/Senha incorreto(a)!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Senha incorreto(a)!");
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}
