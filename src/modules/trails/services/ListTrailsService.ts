import { datasource } from "../../../database";
import { Trail } from "../entities/Trail";


class ListTrailsService {
    async execute(): Promise<Trail[]> {
        const trailsRepository = datasource.getRepository(Trail);

        // busca e retorna todas as trilhas exsistente no banco de dados,
        // junto com todos os conteúdos relacionados a ela
        const trails = await trailsRepository.find({
            relations: ["contents"]
        });
        // como um array de objetos
        return trails;
    }
}

export { ListTrailsService };