import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiverMessageController } from "./controllers/ListUserReceiveMessageController";
import { ListUserSendMessageController } from "./controllers/ListUserSendMessageController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

export const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();
const listUserReceiveMessageController =
  new ListUserReceiverMessageController();
const listUserSendMessageController = new ListUserSendMessageController();
const listTagController = new ListTagController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/messages", ensureAuthenticated, createMessageController.handle);
router.post("/login", authenticateUserController.handle);

router.get(
  "/users/messages/receive",
  ensureAuthenticated,
  listUserReceiveMessageController.handle
);
router.get(
  "/users/messages/send",
  ensureAuthenticated,
  listUserSendMessageController.handle
);
router.get("/tags", ensureAuthenticated, listTagController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle);
