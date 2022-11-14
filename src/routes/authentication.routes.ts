import { Router } from "express";
import { AuthenticateUserController } from "../modules/users/controllers/AuthenticateUserController";

const authenticantionRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authenticantionRouter.post(
    "/",
    authenticateUserController.handle
);

export { authenticantionRouter };