import UserStorage from "../persistent/User";
import TokenStorage from "../persistent/Token";

export default function authHeader() {
  const user = UserStorage.getUser();
  if (user) {
    const token = TokenStorage.getToken().token;
    if (user && token) {
      return { Authorization: "Bearer " + token };
    } else {
      return {};
    }
  }
}
