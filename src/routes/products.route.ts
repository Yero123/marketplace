import { Application, Router } from "express";
import productService from "../services/products.service";
import { CreateProductDto } from "../schemas/product.schema";
import { validate, validateOrReject } from "class-validator";
import RequestValidator from "../middlewares/validateBody";


const productsRouter = Router();

productsRouter.get('/', async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.status(200).send({
      message: 'Products listed',
      data: products
    });
  } catch {
    next('Error getting products');
  }

});

productsRouter.post('/', RequestValidator.validate(CreateProductDto), async (req, res, next) => {
  try {
    const product = req.body as CreateProductDto;
    const result = await productService.create(product);
    res.status(200).send({
      message: 'Product created',
      data: result
    });
  }
  catch (e) {
    next('Error creating product');
  }

});

export default productsRouter;
