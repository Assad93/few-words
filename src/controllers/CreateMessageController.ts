import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

export class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, text } = request.body;
    const { user_id } = request;

    const createMessageService = new CreateMessageService();

    const message = await createMessageService.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      text,
    });

    return response.json(message);
  }
}
