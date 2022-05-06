import TokenStorage from "../persistent/Token";
import authHeader from "./authHeader";
import { API, postJSON, postRefreshToken } from "./http";
import Token from "../persistent/Token";
import authService from "./auth.service";

export default async function fetchWithAuth(url, data, endpoint) {
  const loginUrl = "/sign/in";
  const cookieExpiresIn = Token.getRefreshTokenExpiresIn();
  if (!TokenStorage.getToken() || Date.now() >= cookieExpiresIn) {
    if (Date.now() >= cookieExpiresIn) {
      authService.logout();
    }
    return window.location.replace(loginUrl); // если токен отсутствует или срок жизни refresh токена в cookie истек, то перенаправляем пользователя на страницу авторизации
  }

  // проверяем не истек ли срок жизни токена
  if (Date.now() >= TokenStorage.getToken().expires_in) {
    // если истек, то обновляем токен
    await refreshToken();
  }
  endpoint === "POST"
    ? postJSON(url, data, { headers: authHeader() })
    : authService.logout();
}

function refreshToken() {
  return postRefreshToken(API.refresh).then((res) => {
    if (res.status === 200) {
      const tokenData = res.data.accessToken;
      TokenStorage.setToken({ token: tokenData });
      return Promise.resolve();
    }
    return Promise.reject();
  });
}
