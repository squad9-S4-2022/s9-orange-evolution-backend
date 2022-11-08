import { Request, Response, Router } from "express";
import { CreateUserController } from "../modules/users/controllers/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

// Rota padrão de usuário, que sempre começara com /user, conforme definido no routes > index.ts
// essa é a rota de cadastro
userRoutes.post("/", createUserController.handle);

userRoutes.get("/profile", (request: Request, response: Response) => {
    return response.send({ message: "Rota de usuários" });
});

export { userRoutes };