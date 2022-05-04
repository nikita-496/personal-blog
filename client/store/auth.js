import UserStorage from "../persistent/userStorage";
import AuthService from "../service/auth.service";

const user = UserStorage.getUser();
const initialState = user
  ? { loggedIn: true, user }
  : { loggedIn: false, user: null };

const actions = {
  login({ commit }, user) {
    return AuthService.login(user).then(
      (res) => {
        commit("loginSucces", res);
        return Promise.resolve(res);
      },
      (err) => {
        commit("loginFailure");
        return Promise.reject(err);
      }
    );
  },
  logout({ commit }) {
    AuthService.logout();
    commit("logout");
  },
  register({ commit }, user) {
    return AuthService.register(user).then(
      (res) => {
        commit("registerSuccess");
        return Promise.resolve(res);
      },
      (err) => {
        commit("registerFailure");
        return Promise.reject(err);
      }
    );
  },
};

const mutations = {
  loginSuccess(state, user) {
    state.loggedIn = true;
    state.user = user;
  },
  loginFailure(state) {
    state.loggedIn = false;
    state.user = null;
  },
  logout(state) {
    state.loggedIn = false;
    state.user = null;
  },
  registerSuccess(state) {
    state.loggedIn = false;
  },
  registerFailure(state) {
    state.loggedIn = false;
  },
};

export default {
  initialState,
  getters,
  actions,
  mutations,
};
