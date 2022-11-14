import { AppError } from "../../../utils/AppError";
import { datasource } from "../../../database";
import { Trail } from "../../../modules/trails/entities/Trail";

interface IRequest {
    trail_id: string;
    content_id: string;
}

class RemoveContentFromTrailService {
    async execute({ trail_id, content_id }: IRequest): Promise<void> {
        const trailsRepository = datasource.getRepository(Trail);

        const contentTrail = await trailsRepository.findOne({
            where: {
                id: trail_id
            },
            relations: {
                contents: true,

            }
        });

        if (!contentTrail) {
            throw new AppError("Conteúdo da trilha não encontrado!", 404)
        }

        // remove a relação many to many entre o conteúdo e a trilha
        contentTrail.contents = contentTrail.contents.filter(content => {
            content.id !== content_id
        });

        await trailsRepository.save(contentTrail);
    }
}

export { RemoveContentFromTrailService }