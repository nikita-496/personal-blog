class TokenStorage {
  getToken() {
    if (typeof window != "undefined") {
      return JSON.parse(localStorage.getItem("access_token"));
    }
  }
  setToken(val) {
    if (typeof window != "undefined") {
      const expiresIn = Date.now() + 7200000; // время жизни токена в мс
      localStorage.setItem(
        "access_token",
        JSON.stringify({ ...val, expires_in: expiresIn })
      );
    }
  }
  removeToken() {
    localStorage.removeItem("access_token");
  }
  getRefreshTokenExpiresIn() {
    return JSON.parse(localStorage.getItem("refresh_token_expires_in"));
  }
  setRefreshTokenExpiresIn(val) {
    localStorage.setItem("refresh_token_expires_in", JSON.stringify(val));
  }
  removeRefreshTokenExpiresIn() {
    localStorage.removeItem("refresh_token_expires_in");
  }
}

export default new TokenStorage();
