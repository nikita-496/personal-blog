class UserStorage {
  getUser() {
    if (typeof window != "undefined") {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
  getVuexUser() {
    if (typeof window != "undefined") {
      return JSON.parse(localStorage.getItem("vuex"));
    }
  }
  setUser(val) {
    if (typeof window != "undefined") {
      localStorage.setItem("user", JSON.stringify(val));
    }
  }
  removeUser() {
    if (typeof window != "undefined") {
      localStorage.removeItem("user");
    }
  }
}

export default new UserStorage();
