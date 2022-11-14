import { Request, Response, Router } from "express";
import { ListContentController } from "../modules/contents/controllers/ListContentController";
import { CreateContentController } from "../modules/contents/controllers/CreateContentController";

const contentRoutes = Router();

const createContentController = new CreateContentController();

const listContentController = new ListContentController();

contentRoutes.post(
    "/new",
    createContentController.handle);

contentRoutes.get(
    "/list",
    listContentController.handle);

export { contentRoutes };