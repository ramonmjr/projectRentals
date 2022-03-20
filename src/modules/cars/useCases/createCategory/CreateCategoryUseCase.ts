import { ICategoriesRepository } from "../../repositories/IcategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * [x] - Definir tipo de retorno
 * [x] - Alterar retorno do erro
 * [x] - Acessar o repositório
 * [x] - Retornar Algo
 */
class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("this category already exists!");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
