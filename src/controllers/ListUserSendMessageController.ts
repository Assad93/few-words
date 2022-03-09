import { Request, Response } from "express";
import { ListUserSendMessageService } from "../services/ListUserSendMessageService";

export class ListUserSendMessageController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendMessageService = new ListUserSendMessageService();

    const messages = await listUserSendMessageService.execute(user_id);

    return response.json(messages);
  }
}
