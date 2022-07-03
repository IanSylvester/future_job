import {
  fetchAllProducts,
  fetchAllProductsByCategory,
} from "../queries/productQueries";

class ProductAPI {
  constructor() {
    this.prefix = "http://localhost:5000/products";
  }
  getAll() {
    return fetchAllProducts(this.prefix);
  }
  getAllByCategory(id) {
    return fetchAllProductsByCategory(`${this.prefix}/${id}`);
  }
}

export default new ProductAPI();
