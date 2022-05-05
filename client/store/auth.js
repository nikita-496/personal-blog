import AuthService from "../service/auth.service";

export const state = () => ({
  isLoggedIn: false,
  user: null,
});

const getters = {
  getLoggedIn: (state) => state.isLoggedIn,
  getUserId: (state) => state.user.id,
  getLogin: (state) => {
    if (state.user) {
      return state.user.login;
    }
  },
};

const actions = {
  login({ commit }, user) {
    return AuthService.login(user).then(
      (res) => {
        commit("loginSuccess", res[0]);
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
  state,
  getters,
  actions,
  mutations,
};
