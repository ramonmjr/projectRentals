import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "../listSpecifications/ListSpecificationsUseCase"
import { ListSpecificationsController } from "../listSpecifications/listSpecificationsController"

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository);
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController }
