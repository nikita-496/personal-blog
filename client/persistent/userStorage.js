class UserStorage {
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  setUser(val) {
    localStorage.setItem("user", JSON.stringify(val));
  }
  removeUser() {
    localStorage.removeItem("auth");
  }
}

module.exports = new UserStorage();
