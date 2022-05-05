class TokenStorage {
  getToken() {
    if (typeof window != "undefined") {
      return JSON.parse(localStorage.getItem("token"));
    }
  }
  setToken(val) {
    if (typeof window != "undefined") {
      localStorage.setItem("token", JSON.stringify(val));
    }
  }
}

export default new TokenStorage();
