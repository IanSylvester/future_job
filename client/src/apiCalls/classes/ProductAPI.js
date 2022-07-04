import {
  fetchAllProducts,
  fetchAllProductsByCategory,
  createProduct,
} from "../queries/productQueries";

class ProductAPI {
  constructor() {
    this.prefix = "http://localhost:5000/products";
  }
  getAll() {
    return fetchAllProducts(this.prefix);
  }
  getAllByCategory(id) {
    return fetchAllProductsByCategory(`${this.prefix}/category/${id}`);
  }
  add(obj) {
    return createProduct(this.prefix, obj)
  }
}

export default new ProductAPI();
