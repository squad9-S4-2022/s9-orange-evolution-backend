import { datasource } from "../database";
import { Request, Response, NextFunction } from "express";

import { verify } from "jsonwebtoken";
// import { User } from "../modules/users/entities/User";
import { AppError } from "../utils/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Falta o token!")
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "Hack4thon-squ4d9"
        ) as IPayload;

        // colocando o id do usuário dentro do request
        request.user = { id: user_id };

        next();

    } catch {
        throw new AppError("Token inválido", 401);
    }
}