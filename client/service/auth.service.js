import UserStorage from "../persistent/User";
import { postJSON, API } from "./http";

class AuthService {
  login(user) {
    return postJSON(API.auth, {
      login: user.login,
      password: user.password,
    }).then((res) => {
      if (res.data.accessToken) {
        UserStorage.setUser(res.data);
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
