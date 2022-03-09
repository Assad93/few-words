import { getCustomRepository } from "typeorm";
import { MessageRepository } from "../repositories/MessageRepository";

export class ListUserSendMessageService {
  async execute(user_id: string) {
    const messageRepository = getCustomRepository(MessageRepository);

    const messages = await messageRepository.find({
      where: {
        user_sender: user_id,
      },
      relations: ["userSender"],
    });

    return messages;
  }
}
