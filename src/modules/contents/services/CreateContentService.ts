import { AppError } from "../../../utils/AppError";
import { datasource } from "../../../database";
import { Content } from "../entities/Content";

interface ICreateContentDTO {
    name: string;
    description: string;
    url: string;
    duration: number;
    source: string;
    category: string;
}

class CreateContentService {
    async execute({ name, description, url, duration, source, category }: ICreateContentDTO): Promise<Content | AppError> {
        const contentsRepository = datasource.getRepository(Content);

        const contentExist = await contentsRepository.findOneBy({ name });

        if (contentExist) {
            return new AppError("Curso já cadastrado", 400)
        }

        const content = contentsRepository.create({
            name,
            description,
            url,
            duration,
            source,
            category
        });

        await contentsRepository.save(content);

        return content;
    };
};

export { CreateContentService };
