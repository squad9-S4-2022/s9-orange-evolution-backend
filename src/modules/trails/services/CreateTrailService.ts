import { datasource } from "../../../database";
import { Trail } from "../entities/Trail";


interface ICreateTrailDTO {
    name: string;
    description: string;
}

class CreateTrailService {
    async execute({ name, description }: ICreateTrailDTO): Promise<void> {
        const trailsRepository = datasource.getRepository(Trail);

        const trail = trailsRepository.create({
            name,
            description,
            duration: 0,
        });

        trailsRepository.save(trail);
    }
}

export { CreateTrailService };