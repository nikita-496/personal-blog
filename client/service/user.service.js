import authHeader from "./authHeader";
import { API, getJSON } from "./http";

class UserService {
  async getEditor() {
    return await getJSON(API.post, { headers: authHeader() });
  }
}

export default new UserService();
