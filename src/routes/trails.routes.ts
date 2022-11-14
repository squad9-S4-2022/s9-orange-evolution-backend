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

// Rota padrão de trilhas, que sempre começara com /trails, conforme definido no routes > index.ts

// Criar uma trilha
trailRoutes.post(
    "/new",
    ensureAuthenticated,
    ensureIsAdmin,
    createTrailController.handle);

// Rota de listagem de trilhas
trailRoutes.get(
    "/list",
    // ensureAuthenticated,
    listTrailsController.handle);

// adicionar conteúdo à uma trilha
trailRoutes.post(
    "/add-content/:trail_id",
    // ensureAuthenticated,
    // ensureIsAdmin,
    addContentToTrailController.handle);

// remover conteúdo de uma trilha
trailRoutes.delete(
    "/remove-content/:trail_id",
    // ensureAuthenticated,
    // ensureIsAdmin,
    removeContentFromTrailController.handle);

export { trailRoutes };