const { postJSON, API } = require("./http");

class SignService {
  signUp(userInfo) {
    return postJSON(API.register, userInfo);
  }
  async signIn(userInfo) {
    return await postJSON(API.auth, userInfo);
  }

  async renderProfile(login) {
    return await postJSON(API.profile, login);
  }
}

module.exports = SignService;
