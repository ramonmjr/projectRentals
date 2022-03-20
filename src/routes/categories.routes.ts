import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

// categoriesRoutes.get("/:name", (request, response) => {
//   const { name } = request.query;
//   const category = categoryRepository.findByName(name);

//   if (!category) {
//     return response.status(400).json({ message: "category not found!" })
//   }

//   return response.json(category);
// })

export { categoriesRoutes };
