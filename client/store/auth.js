import UserStorage from "../persistent/User";
import AuthService from "../service/auth.service";

const user = UserStorage.getUser();
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const getters = {
  getLogin: (state) => state.user,
  getLoggedIn: (state) => state.isLoggedIn,
};

const actions = {
  login({ commit }, user) {
    return AuthService.login(user).then(
      (res) => {
        commit("loginSuccess", res);
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
    state.isLoggedIn = true;
    state.user = user;
  },
  loginFailure(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
  logout(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
  registerSuccess(state) {
    state.isLoggedIn = false;
  },
  registerFailure(state) {
    state.isLoggedIn = false;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
