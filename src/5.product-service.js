import { getAllProducts, getProductById } from "./5.database";

export class ProductService {
  static findById(id) {
    return getProductById(id);
  }

  static findAll() {
    return getAllProducts();
  }
}
