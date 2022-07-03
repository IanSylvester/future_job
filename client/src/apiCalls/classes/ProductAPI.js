import {
  fetchAllProducts,
  fetchAllProductsByCategory,
  fetchAllProductsBySubCategory,
  fetchAllProductsByVendor,
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
    return fetchAllProductsByCategory(`${this.prefix}/${id}`);
  }
  getAllBySubCategory(id) {
    return fetchAllProductsBySubCategory(`${this.prefix}/${id}`);
  }
  getAllByVendor(id) {
    return fetchAllProductsByVendor(`${this.prefix}/${id}`);
  }
  add(obj) {
    return createProduct(this.prefix, obj)
  }
}

export default new ProductAPI();
