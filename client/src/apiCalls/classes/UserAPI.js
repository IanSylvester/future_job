import { fetchAllUsers } from "../queries/userQueries";

class UserAPI {
  constructor() {
    this.prefix = "http://localhost:5000/users";
  }

  getAll() {
    return fetchAllUsers(this.prefix);
  }
}

export default new UserAPI();
