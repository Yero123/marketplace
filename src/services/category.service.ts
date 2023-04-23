import { Category } from "../models/Category";

class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];
  getCategories() {
    return this.categories;
  }
}
const categoryService = new CategoryService();
export default categoryService