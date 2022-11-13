import { Trail } from "../../../modules/trails/entities/Trail";

interface ICreateUserDTO {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    trails?: Trail[];
}

export { ICreateUserDTO }