import {
    fetchAllSubCategories,
    fetchAllSubCategoriesByCategory,
   
} from "../../apiCalls/queries/subCategoryQueries";

class SubCategoryAPI {
    constructor() {
        this.prefix = "http://localhost:5000/subCategories";
    }

    getAll() {
        return fetchAllSubCategories(this.prefix);
    }

    getAllByCategory(id) {
        return fetchAllSubCategoriesByCategory(`${this.prefix}/${id}`);
    }
}
export default subCategoryAPI = new SubCategoryAPI();