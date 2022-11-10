import { Request, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";


class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const { user, token } = await authenticateUserService.execute({ email, password });

        delete user.password;

        return response.status(200).json({ user, token });
    }
}

export { AuthenticateUserController }