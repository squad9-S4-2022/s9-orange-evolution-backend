import { Request, Response } from "express";
import { AddContentToTrailService } from "../services/AddContentToTrailService";


class AddContentToTrailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { trail_id } = request.params;
        const { content_ids } = request.body;

        const addContentToTrailService = new AddContentToTrailService();

        const trailWithContents = await addContentToTrailService.execute({ content_ids, trail_id });

        return response.status(200).json(trailWithContents);
    }
}

export { AddContentToTrailController };