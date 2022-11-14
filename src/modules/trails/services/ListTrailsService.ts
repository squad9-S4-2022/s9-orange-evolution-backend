import { Content } from "../../../modules/contents/entities/Content";
import { datasource } from "../../../database";
import { Trail } from "../entities/Trail";


class ListTrailsService {
    async execute(): Promise<Trail[]> {
        const trailsRepository = datasource.getRepository(Trail);
        const contentsRepository = datasource.getRepository(Content);

        // busca e retorna todas as trilhas exsistente no banco de dados,
        // junto com todos os conteúdos relacionados a ela
        const trails = await trailsRepository.find({
            relations: {
                contents: true
            }
        });

        // faz a somatória de todos os conteúdos pertencentes a trilha e atribui a duração total da trilha
        trails.forEach(trail => {
            let sum = (trail.contents.reduce((acc, elem) => acc + Number(elem.duration), 0));
            trail.duration += sum;
            // console.log(sum, typeof sum);
        });

        // retorna a trilha, com tempo de duração e todos seus conteúdos
        return trails;
    }
}

export { ListTrailsService };