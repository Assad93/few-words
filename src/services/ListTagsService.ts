import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

export class ListTagService {
  async execute() {
    const tagRepository = getCustomRepository(TagRepository);

    const tags = await tagRepository.find();

    return instanceToPlain(tags);
  }
}
