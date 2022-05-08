import UserStorage from "../persistent/User";
import TokenStorage from "../persistent/Token";
import { postJSON, API, logOut } from "./http";

class AuthService {
  login(user) {
    console.log(user);
    return postJSON(API.auth, {
      login: user.login,
      password: user.password,
    }).then((res) => {
      const data = res.data[0];
      if (data.accessToken) {
        UserStorage.setUser({ id: data.id });
        TokenStorage.setToken({ token: data.accessToken });
      }
      return res.data;
    });
  }

  async logout() {
    UserStorage.removeUser();
    TokenStorage.removeToken();
    TokenStorage.removeRefreshTokenExpiresIn();
    await logOut(API.logout);
  }

  register(user) {
    return postJSON(API.register, {
      name: user.name,
      surname: user.surname,
      login: user.login,
      password: user.password,
      email: user.email,
    }).then((res) => {
      if (res) {
        return this.login({ login: user.login, password: user.password });
      }
    });
  }
}

export default new AuthService();
