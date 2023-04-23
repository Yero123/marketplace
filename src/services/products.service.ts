import { productData } from "../constants";
import { Product } from "../models/Product";
import { ICreateProductDto } from "../schemas/product.schema";

class ProductService {
  private products: Product[] = productData

  getProducts() {
    return this.products;
  }
  addProduct(product: ICreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      ...product
    }
    this.products.push(newProduct);
    return newProduct;
  }
}
const productService = new ProductService();
export default productService;