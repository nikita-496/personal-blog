const { postJSON, API } = require("./http");

class AuthService {
  login(user) {
    return postJSON(API.auth, {
      login: user.login,
      password: user.password,
    }).then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    });
  }

  logout() {
    localStorage.removeItem("user");
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

module.exports = new AuthService();
