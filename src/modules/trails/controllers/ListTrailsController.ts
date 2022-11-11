import { Request, Response } from "express";
import { ListTrailsService } from "../services/ListTrailsService";


class ListTrailsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listTrailsService = new ListTrailsService();

        // chama o service de listagem que retorna todas as trilhas do banco de dados
        const trails = await listTrailsService.execute();

        return response.status(200).json(trails);
    }
};

export { ListTrailsController };