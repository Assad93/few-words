import { getCustomRepository } from "typeorm";
import { MessageRepository } from "../repositories/MessageRepository";

export class ListUserReceiverMessageService {
  async execute(user_id: string) {
    const messageRepository = getCustomRepository(MessageRepository);

    const messages = await messageRepository.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userReceiver"],
    });

    return messages;
  }
}
