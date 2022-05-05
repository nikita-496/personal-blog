import UserStorage from "../persistent/User";
import TokenStorage from "../persistent/Token";

export default function authHeader() {
  const user = UserStorage.getUser();
  const token = TokenStorage.getToken();
  if (user && token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}
