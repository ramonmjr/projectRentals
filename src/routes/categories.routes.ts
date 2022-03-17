import { request, response, Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';


const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository)

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});


categoriesRoutes.get("/", (request, response) => {
  const all = categoryRepository.list();
  return response.json(all);
});

categoriesRoutes.get("/:id", (request, response) => {
  const { id } = request.params;
  const category = categoryRepository.findById(id);

  if (!category) {
    return response.status(400).json({ message: "category not found!" })
  }

  return response.json(category);
});

categoriesRoutes.get("/:name", (request, response) => {
  const { name } = request.query;
  const category = CategoryRepository.findByName(name);

  if (!category) {
    return response.status(400).json({ message: "category not found!" })
  }

  return response.json(category);
})

export { categoriesRoutes }
