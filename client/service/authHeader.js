import UserStorage from "../persistent/User";

export default function authHeader() {
  const user = UserStorage.getVuexUser().auth.user;
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
