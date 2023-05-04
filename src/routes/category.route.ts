import { Router } from "express";
import categoryService from "../services/category.service";
import RequestValidator from "../middlewares/validateBody";
import { CreateCategoryDto, ICreateCategoryDto } from "../schemas/category.schema";

const categoriesRouter = Router();
categoriesRouter.get('/', async (req, res, next) => {
  try {
    const categories = await categoryService.get();
    res.status(200).send({
      message: 'Categories listed',
      data: categories
    });
  } catch {
    next('Error getting categories');
  }
});
categoriesRouter.post('/', RequestValidator.validate(CreateCategoryDto), async (req, res, next) => {
  try {
    const data: ICreateCategoryDto = req.body;
    const category = await categoryService.create(data);
    res.status(200).json({
      message: 'Category created',
      data: category,
    });
  } catch (error) {
    next('Error creating category');
  }
});

export default categoriesRouter;
