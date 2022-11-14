import { Request, Response } from "express";
import { GetUserProfileService } from "../services/GetUserProfileService";

class GetUserProfileController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;

        const getUserProfileService = new GetUserProfileService();

        const user = await getUserProfileService.execute(user_id);

        return response.status(200).json(user);
    }
}

export { GetUserProfileController }