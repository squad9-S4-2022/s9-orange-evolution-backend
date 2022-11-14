import { Request, response, Response } from "express";
import { RemoveContentFromTrailService } from "../services/RemoveContentFromTrailService";


class RemoveContentFromTrailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { trail_id } = request.params;
        const { content_id } = request.body;

        const removeContentFromTrailService = new RemoveContentFromTrailService();

        await removeContentFromTrailService.execute({ trail_id, content_id });

        return response.status(204).send();
    }
}

export { RemoveContentFromTrailController }