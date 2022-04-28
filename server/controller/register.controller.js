const db = require("../db/db");
const bcrypt = require("bcrypt");
const UserController = require("./user.controller");

const handleNewUser = async (req, res) => {
  const { name, surname, login, password } = req.body[0];
  if (!name || !login || !password) {
    return res.status(400).json({
      message: "Имя пользователя, логин и пароль являются обязательными",
    });
  }
  // проверить наличие дублирования логина пользователя в бд
  const queryResult = await db.query("SELECT login FROM person");

  if (countDuplicates()) {
    return res.sendStatus(409); //Conflict
  }

  try {
    //шифрование пароля
    const hashedPwd = await bcrypt.hash(password, 10);
    //создание и запись нового пользователя
    userCreation();
    function userCreation() {
      const newUser = { name, surname, login, password: hashedPwd };
      const result = UserController.createUser(newUser).then((response) => {
        res.status(201).json(response);
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  function countDuplicates() {
    const logins = queryResult.rows;
    const duplicate = logins.filter((item) => item.login === login);
    return duplicate.length;
  }
};

module.exports = { handleNewUser };
