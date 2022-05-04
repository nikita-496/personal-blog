import UserStorage from "../persistent/userStorage";

export default function authHeader() {
  const user = UserStorage.getUser();
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
