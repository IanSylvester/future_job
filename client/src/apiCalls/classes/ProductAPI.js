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
    return fetchAllProductsByCategory(`${this.prefix}/category/${id}`);
  }
  getAllBySubCategory(id) {
    return fetchAllProductsBySubCategory(`${this.prefix}/subCategory/${id}`);
  }
  getAllByVendor(id) {
    return fetchAllProductsByVendor(`${this.prefix}/vendor/${id}`);
  }
  add(obj) {
    return createProduct(this.prefix, obj)
  }
}

export default new ProductAPI();
