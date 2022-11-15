import { Response, NextFunction, Request } from "express";
import { datasource } from "../database";
import { User } from "../modules/users/entities/User";

import { AppError } from "../utils/AppError";

// middleware que garante que o usuário seja um admin
export async function ensureIsAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.user;

    // acessa o repositório de usuários e busca por id
    const usersRepository = datasource.getRepository(User);
    const user = await usersRepository.findOneByOrFail({ id });

    // verifica se a propriedade admin é false. Se sim, retorna um erro
    // se for true, segue para a próxima etapa
    if (!user.admin) {
        throw new AppError("Usuário não é um administrador", 401);
    }

    return next();
}