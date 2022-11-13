import { Request, Response, Router } from "express";
import { GetUserProfileController } from "../modules/users/controllers/GetUserProfileController";
import { CreateUserController } from "../modules/users/controllers/CreateUserController";
import { SignUpToTrailController } from "../modules/users/controllers/SignUpToTrailController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const createUserController = new CreateUserController();
const getUserProfileController = new GetUserProfileController();
const signUpToTrailController = new SignUpToTrailController();

// Rota padrão de usuário, que sempre começara com /user, conforme definido no routes > index.ts
// rota de cadastro
userRoutes.post("/", createUserController.handle);

// Rota de inscrever um usuário a uma trilha
userRoutes.put("/signup-to-trail/:id", ensureAuthenticated, signUpToTrailController.handle)

// rota para exibir o perfil de usuário
userRoutes.get("/profile/:id", ensureAuthenticated, getUserProfileController.handle);

export { userRoutes };