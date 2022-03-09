import { getCustomRepository } from "typeorm";
import { MessageRepository } from "../repositories/MessageRepository";
import { UserRepository } from "../repositories/UserRepository";

interface IMessage {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  text: string;
}

export class CreateMessageService {
  async execute({ user_sender, user_receiver, tag_id, text }: IMessage) {
    const messageRepository = getCustomRepository(MessageRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (user_sender === user_receiver) {
      throw new Error("O usuário não pode criar uma mensagem para si!");
    }

    const userReceiverExists = userRepository.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("O usuário recebedor não existe!");
    }

    const message = messageRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      text,
    });

    await messageRepository.save(message);

    return message;
  }
}
