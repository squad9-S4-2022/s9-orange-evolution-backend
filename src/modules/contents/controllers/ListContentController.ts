import { Request, Response } from "express";
import { ListContentService } from "../services/ListContentService";

class ListContentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listContentService = new ListContentService();
        const contents = await listContentService.execute();
        return response.status(200).json(contents);
    }
}

export { ListContentController };