import UserStorage from "../persistent/User";
import TokenStorage from "../persistent/Token";
import { postJSON, API } from "./http";

class AuthService {
  login(user) {
    return postJSON(API.auth, {
      login: user.login,
      password: user.password,
    }).then((res) => {
      const data = res.data[0];
      if (data.accessToken) {
        const userData = { ...data };
        delete userData.accessToken;
        UserStorage.setUser(userData);
        TokenStorage.setToken(data.accessToken);
      }
      return res.data;
    });
  }

  logout() {
    UserStorage.removeUser();
  }

  register(user) {
    return postJSON(API.register, {
      name: user.name,
      surname: user.surname,
      login: user.login,
      password: user.password,
      email: user.email,
    });
  }
}

export default new AuthService();
