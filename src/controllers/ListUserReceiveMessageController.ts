import { Request, Response } from "express";
import { ListUserReceiverMessageService } from "../services/ListUserReceiveMessageService";

export class ListUserReceiverMessageController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiveMessageService = new ListUserReceiverMessageService();

    const messages = await listUserReceiveMessageService.execute(user_id);

    return response.json(messages);
  }
}
