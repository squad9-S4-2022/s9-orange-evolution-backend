import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { datasource } from "../../../database";

import { User } from "../entities/User";
import { AppError } from "../../../utils/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const usersRepository = datasource.getRepository(User);

        const user = await usersRepository.findOneBy({ email });

        if (!user) {
            throw new AppError("Usuário ou senha incorretos", 400);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Usuário ou senha incorretos", 400);
        }

        const token = sign({}, "Hack4thon-squ4d9", {
            subject: user.id,
            expiresIn: "7d",
        });

        return { user, token };
    }
}

export default AuthenticateUserService;

