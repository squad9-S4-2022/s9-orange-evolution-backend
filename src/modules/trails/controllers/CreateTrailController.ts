import { Request, Response } from "express";
import { CreateTrailService } from "../services/CreateTrailService";


class CreateTrailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createUseTrailService = new CreateTrailService();

        createUseTrailService.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateTrailController };