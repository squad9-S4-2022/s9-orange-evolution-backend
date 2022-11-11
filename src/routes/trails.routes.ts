import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";
import { CreateTrailController } from "../modules/trails/controllers/CreateTrailController";
import { ListTrailsController } from "../modules/trails/controllers/ListTrailsController";

const trailRoutes = Router();

const createTrailController = new CreateTrailController();
const listTrailsController = new ListTrailsController();

// Criar trilha
trailRoutes.post("/new", ensureAuthenticated, ensureIsAdmin, createTrailController.handle);

// Rota de listagem de trilhas, que sempre começara com /trails, conforme definido no routes > index.ts
trailRoutes.get("/list", ensureAuthenticated, listTrailsController.handle);

export { trailRoutes };