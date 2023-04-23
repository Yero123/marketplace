import { Router } from "express";
import categoryService from "../services/category.service";

const categoriesRouter = Router();
categoriesRouter.get('/', (req, res) => {
    const categories = categoryService.getCategories();
    res.send({ categories });
});
// categoriesRouter.post('/', (req, res) => {
//     const { name } = req.body;
//     const category = categoryService.addCategory({ name });
//     res.send({ category });
// });

export default categoriesRouter;