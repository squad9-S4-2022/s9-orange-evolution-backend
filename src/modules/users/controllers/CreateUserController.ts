import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        // recebe os dados pelo corpo da requisição
        const { first_name, last_name, email, password, trails } = request.body;

        // cria uma instancia do serviço
        const createUserService = new CreateUserService();

        //executa o serviço e retorna uma resposta ao cliente com status code
        const user = await createUserService.execute({ first_name, last_name, email, password, trails });
        return response.status(201).json(user);
    }
}

export { CreateUserController }