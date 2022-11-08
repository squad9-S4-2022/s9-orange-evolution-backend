import { AppError } from "../../../utils/AppError";
import { datasource } from "../../../database";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

class CreateUserService {
    async execute({ first_name, last_name, email, password }: ICreateUserDTO): Promise<User | AppError> {
        const usersRepository = datasource.getRepository(User);

        // busca no banco um usuario existente por email, se existir, retorna um erro
        const userExists = await usersRepository.findOneBy({ email });
        if (userExists) {
            return new AppError("Usuário já cadastrado", 400);
        }

        // cria usuario
        const user = usersRepository.create({
            first_name, last_name, email, password
        });

        // salva
        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };