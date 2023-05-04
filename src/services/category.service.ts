import { PrismaClient } from "@prisma/client";
import { Category } from "../models/Category";
import BaseService from "./base.service";
import { ICreateCategoryDto } from "../schemas/category.schema";

class CategoryService extends BaseService {
  private db: PrismaClient;

  constructor() {
    super();
    this.db = CategoryService.db;
  }

  async get() {
    return await this.db.category.findMany({
      where: {
        active: true
      }
    });
  }
  async getById(id: number) {
    return await this.db.category.findUnique({
      where: { id: id }
    })
  }
  async create(category: ICreateCategoryDto) {
    return await this.db.category.create({
      data: category
    })
  }
}
const categoryService = new CategoryService();
export default categoryService
