import { PrismaClient } from "@prisma/client";
import { productData } from "../constants";
import { Product } from "../models/Product";
import { ICreateProductDto } from "../schemas/product.schema";
import BaseService from "./base.service";

class ProductService extends BaseService {
  private db: PrismaClient;

  constructor() {
    super();
    this.db = ProductService.db;
  }
  async create(product: ICreateProductDto) {
    return await this.db.product.create({
      data: product
    })
  }
  async getProducts() {
    return await this.db.product.findMany({
      where: {
        active: true
      }
    });
  }
}
const productService = new ProductService();
export default productService;
