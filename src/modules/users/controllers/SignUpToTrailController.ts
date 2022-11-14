import { Request, Response } from "express";
import { SignUpToTrailService } from "../services/SignUpToTrailService";


class SignUpToTrailController {
    async handle(request: Request, response: Response): Promise<Response> {
        // id vem pelo parametro da rota /user/signup-to-trail/<id>
        const { id } = request.params;
        // recebe um id de trilha pelo corpo da requisição em forma de string
        const { trail_id } = request.body;

        const signUpToTrailService = new SignUpToTrailService();

        const user = await signUpToTrailService.execute({ user_id: id, trail_id });

        return response.status(200).json(user);
    }
}

export { SignUpToTrailController }