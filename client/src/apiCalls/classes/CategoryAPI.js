import { fetchAllCategories } from "../queries/categoryQueries";

class CategoryAPI {
  constructor() {
    this.prefix = "http://localhost:5000/categories";
  }
  getAll() {
    return fetchAllCategories(this.prefix);
  }
}

export default new CategoryAPI();
