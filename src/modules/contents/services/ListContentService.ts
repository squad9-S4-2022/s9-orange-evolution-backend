import { datasource } from "../../../database";
import { Content } from "../entities/Content";

class ListContentService {
    async execute(): Promise<Content[]> {
        const contentsRepository = datasource.getRepository(Content);
        return await contentsRepository.find();
    }
}

export { ListContentService };