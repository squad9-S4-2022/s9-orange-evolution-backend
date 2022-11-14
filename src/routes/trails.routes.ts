import { Router } from "express";
import { RemoveContentFromTrailController } from "../modules/contents/controllers/RemoveContentFromTrailController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

import { AddContentToTrailController } from "../modules/contents/controllers/AddContentToTrailController";
import { CreateTrailController } from "../modules/trails/controllers/CreateTrailController";
import { ListTrailsController } from "../modules/trails/controllers/ListTrailsController";

const trailRoutes = Router();

const createTrailController = new CreateTrailController();
const listTrailsController = new ListTrailsController();
const addContentToTrailController = new AddContentToTrailController();
const removeContentFromTrailController = new RemoveContentFromTrailController();

// Criar trilha
trailRoutes.post(
    "/new",
    ensureAuthenticated,
    ensureIsAdmin,
    createTrailController.handle);

// Rota de listagem de trilhas, que sempre começara com /trails, conforme definido no routes > index.ts
trailRoutes.get(
    "/list",
    ensureAuthenticated,
    listTrailsController.handle);

// adicionar conteúdo à trilha
trailRoutes.put(
    "/add-content/:trail_id",
    addContentToTrailController.handle);

// remover conteúdo da trilha
trailRoutes.delete(
    "/remove-content/:trail_id",
    removeContentFromTrailController.handle);

export { trailRoutes };