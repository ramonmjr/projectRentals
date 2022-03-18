import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {
  }

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();
    return specifications;
  }
}

export { ListSpecificationsUseCase }
