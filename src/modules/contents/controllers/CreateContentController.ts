import { Request, Response } from "express";
import { CreateContentService } from "../services/CreateContentService";

class CreateContentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, url, duration, source, category } = request.body;
        const createContentService = new CreateContentService();
        const content = await createContentService.execute({
            name, description, url, duration, source, category
        });

        return response.status(201).json(content);
    }
}

export { CreateContentController };