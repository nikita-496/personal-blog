const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PersonTableExplorer = require("../utils/PersonTableExplorer");

require("dotenv").config();

const handleLogin = async (req, res) => {
  const { login, password } = req.body[0];
  if (!login || !password) {
    return res.status(400).json({ message: "Логин и пароль обязательны" });
  }

  const authorizer = new PersonTableExplorer();
  const queryResult = await authorizer.selectLogin();
  const foundLogin = authCheck();

  if (!foundLogin) {
    //Unauthorized
    return res
      .status(401)
      .json({ message: "Пользователя с такими данными не существует" });
  }

  if (await validatePwd()) {
    const accessToken = createAccessJWTs();
    const refreshToken = createRefreshJWTs();
    //Сохранение значения refreshToken для пользователя, прошедшего аутентификацию
    assignTokenToUser();
    //Хранение токена
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });

    function createAccessJWTs() {
      const accessToken = jwt.sign(
        { login: foundLogin },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30s" }
      );
      return accessToken;
    }
    function createRefreshJWTs() {
      const refreshToken = jwt.sign(
        { login: foundLogin },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      return refreshToken;
    }

    async function assignTokenToUser() {
      authorizer.loginForSelect = foundLogin;
      const queryResult = await authorizer.getId();
      const currentUserId = queryResult.rows[0].id;
      authorizer.id = currentUserId;
      authorizer.columnValues = refreshToken;
      await authorizer.writeToken();
    }
  } else {
    return res
      .status(401)
      .json({ message: "Пользователя с такими данными не существует" });
  }

  function authCheck() {
    const foundLogin = queryResult.rows.find(
      (person) => person.login === login
    );
    if (!foundLogin) {
      return;
    }
    return foundLogin.login;
  }

  //валедировать пароль
  async function validatePwd() {
    authorizer.loginForSelect = foundLogin;
    const foundUserData = await authorizer.selectPwdByLogin();
    const foundUserRows = foundUserData.rows[0];
    const match = await bcrypt.compare(password, foundUserRows.password);
    return match;
  }
};

module.exports = { handleLogin };