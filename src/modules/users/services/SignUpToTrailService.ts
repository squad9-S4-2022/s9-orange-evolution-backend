// import { In } from "typeorm";
import { AppError } from "../../../utils/AppError";

import { datasource } from "../../../database";
import { Trail } from "../../../modules/trails/entities/Trail";
import { User } from "../entities/User";


interface IRequest {
    user_id: string;
    trail_id: string;
}

class SignUpToTrailService {
    async execute({ user_id, trail_id }: IRequest): Promise<User> {
        const trailsRrepository = datasource.getRepository(Trail);
        const usersRrepository = datasource.getRepository(User);

        // busca na tabela de usuários por id
        const user = await usersRrepository.findOne({
            where: {
                id: user_id
            },
            relations: {
                trails: true
            }
        });

        if (!user) {
            throw new AppError("Usuário não encontrado!", 404);
        }

        // busca na tabela de trilhas por ids, todas as ocorrências que corresponde o id
        // recebido como arg
        const trail = await trailsRrepository.findOneBy({ id: trail_id })

        if (!trail) {
            throw new AppError("Trilha não existe!", 404);
        }

        // faz um push da trilha adicionada às trilhas deste usuário encontrado
        user.trails.push(trail);

        // salva as trlhas assinaladas ao usuario na tabela de relacionamento users_trails
        await usersRrepository.save(user);

        delete user.password;

        return user;
    }
}

export { SignUpToTrailService }