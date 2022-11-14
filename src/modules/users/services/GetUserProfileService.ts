import { AppError } from "../../../utils/AppError";
import { datasource } from "../../../database";
import { User } from "../entities/User";

class GetUserProfileService {
    async execute(user_id: string): Promise<User> {
        const usersRepository = datasource.getRepository(User);

        const user = await usersRepository.findOne({
            where: {
                id: user_id,
            },
            relations: {
                trails: {
                    contents: true
                }
            },
        })

        if (!user) {
            throw new AppError("Usuário não existe", 400);
        }

        delete user.password;

        return user;
    }
}

export { GetUserProfileService };