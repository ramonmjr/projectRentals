import { Request, Response } from "Express"
import { ListSpecificationsUseCase } from "../listSpecifications/ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {
  }

  handle(request: Request, response: Response): Response {
    const all = this.listSpecificationsUseCase.execute();
    return response.json(all);
  }
}


export { ListSpecificationsController }
