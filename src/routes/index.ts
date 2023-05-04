import { Application, Router } from "express";
import productsRouter from "./products.route";
import categoriesRouter from "./category.route";


function routerApi(app: Application) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  // router.use('/users', usersRouter);
}

export default routerApi;
