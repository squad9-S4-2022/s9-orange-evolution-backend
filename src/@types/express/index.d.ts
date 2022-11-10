// subscrita de tipagem do express, de modo a inserir a propriedade user dentro da
// requisição, viablizando o uso de middlware

declare namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface Request {
        user: {
            id: string;
        };
    }
}

declare module "express-async-errors";
