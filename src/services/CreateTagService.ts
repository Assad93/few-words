import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

interface ITag {
  name: string;
}

export class CreateTagService {
  async execute({ name }: ITag) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new Error("Toda Tag deve ter um nome!");
    }

    const tagAlreadyExists = await tagRepository.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag já cadastrada no sistema!");
    }

    const tag = tagRepository.create({
      name,
    });

    await tagRepository.save(tag);

    return tag;
  }
}
