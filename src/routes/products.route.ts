import { Application, Router } from "express";
import productService from "../services/products.service";
import { CreateProductDto } from "../schemas/product.schema";
import { validate, validateOrReject } from "class-validator";
import RequestValidator from "../middlewares/validateBody";


const productsRouter = Router();

productsRouter.get('/', (req, res) => {
  const products = productService.getProducts();
  res.send({ products });
});

productsRouter.post('/', RequestValidator.validate(CreateProductDto), (req, res,next) => {
  try {
    const product = req.body as CreateProductDto;
    const result = productService.addProduct(product);
    res.send({ result });
  }
  catch(e){
    next(e)
  }

});

export default productsRouter;
