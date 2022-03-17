import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategory } from "./IcategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findById(id: string): Category {
    console.log(id);
    return null;
  }
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategory): void {
    console.log(name, description);
  }

}

export { PostgresCategoriesRepository }
