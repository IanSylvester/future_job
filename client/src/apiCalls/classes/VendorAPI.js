import { fetchAllVendors } from "../queries/vendorQueries";

class VendorAPI {
  constructor() {
    this.prefix = "http://localhost:5000/vendors";
  }

  getAll() {
    return fetchAllVendors(this.prefix);
  }
}

export default new VendorAPI();
