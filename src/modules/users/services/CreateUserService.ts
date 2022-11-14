import { hash } from "bcrypt";
import { datasource } from "../../../database";
import { AppError } from "../../../utils/AppError";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

class CreateUserService {
    async execute({ first_name, last_name, email, password, trails }: ICreateUserDTO): Promise<User | AppError> {
        const usersRepository = datasource.getRepository(User);

        // busca no banco um usuario existente por email, se existir, retorna um erro
        const userExists = await usersRepository.findOneBy({ email });
        if (userExists) {
            return new AppError("Usuário já cadastrado", 400);
        }

        // criptografia de senha
        const encryptedPassword = await hash(password, 8);

        // cria usuario atribuindo o campo com senha criptografada
        const user = usersRepository.create({
            first_name,
            last_name,
            email,
            password: encryptedPassword,
            trails
        });

        delete user.password;

        // salva no banco de dados
        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };