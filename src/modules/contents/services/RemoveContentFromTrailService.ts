import { AppError } from "../../../utils/AppError";
import { datasource } from "../../../database";
import { Trail } from "../../../modules/trails/entities/Trail";

class RemoveContentFromTrailService {
    async execute(content_id: string): Promise<void> {
        const trailsRepository = datasource.getRepository(Trail);

        await trailsRepository.createQueryBuilder("contents")
            .delete()
            .from("contents_trails")
            .where("content_id = :id", { id: content_id })
            .execute();

        // ! Funcionando
        // const contentTrail = await trailsRepository.findOne({
        //     where: {
        //         id: trail_id
        //     },
        //     relations: {
        //         contents: true
        //     }
        // });

        // contentTrail.contents = contentTrail.contents.filter(content => {
        //     content.id !== content_id
        // });

        // await trailsRepository.save(contentTrail);

    }
}

export { RemoveContentFromTrailService }