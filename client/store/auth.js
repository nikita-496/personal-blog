import TokenStorage from "../persistent/Token";
import AuthService from "../service/auth.service";

const state = () => ({
  isLoggedIn: false,
  user: null,
});

const getters = {
  getLoggedIn: (state) => state.isLoggedIn,

  getName: (state) => {
    if (state.user) {
      return state.user.name
    }
  },
  getSurname: (state) => {
    if (state.user) {
      return state.user.surname
    }
  },
  getLogin: (state) => {
    if (state.user) {
      return state.user.login
    }
  },
  getEmail: (state) => {
    if (state.user) {
      return state.user.email
    }
  },

  getAvatar: (state) => {
    if (state.user) {
      return state.user.avatar
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
        commit("failure");
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
  register({ commit }, user) {
    return AuthService.register(user).then(
      (res) => {
        commit("registerSuccess");
        return Promise.resolve(res);
      },
      (err) => {
        commit("failure");
        return Promise.reject(err);
      }
    );
  },
};

const mutations = {
  loginSuccess(state, user) {
    state.isLoggedIn = true;
    state.user = user;
    TokenStorage.setRefreshTokenExpiresIn(Date.now() + 1209600000); // время жизни токена в мс
  },
  logout(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
  checkAuthUser(state, accessToken) {
    accessToken ? (state.isLoggedIn = true) : (state.isLoggedIn = false);
  },
  registerSuccess(state, user) {
    state.isLoggedIn = true;
    state.user = user;
  },
  failure(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
