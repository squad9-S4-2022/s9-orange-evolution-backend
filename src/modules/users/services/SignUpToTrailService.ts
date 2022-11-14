import { In } from "typeorm";
import { AppError } from "../../../utils/AppError";

import { datasource } from "../../../database";
import { Trail } from "../../../modules/trails/entities/Trail";
import { User } from "../entities/User";


interface IRequest {
    user_id: string;
    trails_id: string[];
}

class SignUpToTrailService {
    async execute({ user_id, trails_id }: IRequest): Promise<User> {
        const trailsRrepository = datasource.getRepository(Trail);
        const usersRrepository = datasource.getRepository(User);

        // busca na tabela de usuários por id
        const user = await usersRrepository.findOneBy({ id: user_id });

        if (!user) {
            throw new AppError("Usuário não encontrado!", 404)
        }

        // busca na tabela de trilhas por ids, todas as ocorrências que correspondem os ids
        // recebidos como arg (em forma de array de strings)
        const trails = await trailsRrepository.findBy({
            id: In(trails_id)
        })

        // atribui a propriedade trilhas do usuário todas as ocorrências encontradas
        user.trails = trails;

        // salva as trlhas assinaladas ao usuario na tabela de relacionamento users_trails
        await usersRrepository.save(user);

        delete user.password;

        return user;
    }
}

export { SignUpToTrailService }