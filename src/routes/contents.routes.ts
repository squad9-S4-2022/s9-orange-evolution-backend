import { Router } from "express";

import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListContentController } from "../modules/contents/controllers/ListContentController";
import { CreateContentController } from "../modules/contents/controllers/CreateContentController";

const contentRoutes = Router();

const createContentController = new CreateContentController();

const listContentController = new ListContentController();

// criar novo conteúdo
contentRoutes.post(
    "/new",
    // ensureAuthenticated,
    // ensureIsAdmin,
    createContentController.handle);

//listar todos os conteúdos cadastrados
contentRoutes.get(
    "/list",
    // ensureAuthenticated,
    // ensureIsAdmin,
    listContentController.handle);

export { contentRoutes };