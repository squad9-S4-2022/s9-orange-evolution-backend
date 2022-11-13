import { AppError } from "../../../utils/AppError";
import { datasource } from "../../../database";
import { User } from "../entities/User";


class GetUserProfileService {
    async execute(id: string): Promise<User> {
        const usersRepository = datasource.getRepository(User);

        const user = await usersRepository.findOne({
            where: { id },
            relations: ["trails"]
        })

        if (!user) {
            throw new AppError("Usuário não existe", 400);
        }

        // console.log(user);

        delete user.password;

        return user;
    }
}

export { GetUserProfileService };