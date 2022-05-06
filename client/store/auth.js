import TokenStorage from "../persistent/Token";
import AuthService from "../service/auth.service";
import { API, getJSON } from "../service/http";

const state = () => ({
  isLoggedIn: false,
  user: null,
});

const getters = {
  getLoggedIn: (state) => state.isLoggedIn,
  getLogin: (state) => {
    if (state.user) {
      return state.user.login;
    }
  },
  getRoles: (state) => {
    if (state.user) {
      return state.user.roles;
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
  async checkAuthUser({ commit }) {
    const accessToken = TokenStorage.getToken();
    commit("checkAuthUser", accessToken);
  },
  async setUser({ commit }, userId) {
    const user = await getJSON(API.user + userId);
    commit("setUser", user.data[0]);
  },
  /*register({ commit }, user) {
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
  },*/
};

const mutations = {
  loginSuccess(state, user) {
    state.isLoggedIn = true;
    state.user = user;
    TokenStorage.setRefreshTokenExpiresIn(Date.now() + 1209600000); // время жизни токена в мс
  },
  loginFailure(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
  logout(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
  checkAuthUser(state, accessToken) {
    accessToken ? (state.isLoggedIn = true) : (state.isLoggedIn = false);
  },
  setUser(state, user) {
    state.user = user;
  },
  /*registerSuccess(state) {
    state.isLoggedIn = false;
  },
  registerFailure(state) {
    state.isLoggedIn = false;
  },*/
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
