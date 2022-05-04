import { postJSON, API } from "./http";

class SignService {
  signUp(userInfo) {
    return postJSON(API.register, userInfo);
  }
  async signIn(userInfo) {
    return await postJSON(API.auth, userInfo);
  }

  async getProfile(login) {
    return await postJSON(API.profile, login);
  }
}

export default new SignService();
