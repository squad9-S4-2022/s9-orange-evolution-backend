import { In } from "typeorm";

import { datasource } from "../../../database";
import { AppError } from "../../../utils/AppError";
import { Trail } from "../../../modules/trails/entities/Trail";
import { Content } from "../entities/Content";

interface IRequest {
    trail_id: string;
    content_ids: string[];
}

class AddContentToTrailService {
    async execute({ content_ids, trail_id }: IRequest): Promise<Trail> {
        const contentsRepository = datasource.getRepository(Content);
        const trailsRepository = datasource.getRepository(Trail);

        const trail = await trailsRepository.findOneBy({ id: trail_id })

        if (!trail) {
            throw new AppError("Trilha não encontrada", 404);
        }

        const contents = await contentsRepository.findBy({
            id: In(content_ids)
        });

        trail.contents = contents;

        await trailsRepository.save(trail);

        return trail;
    }
}

export { AddContentToTrailService }