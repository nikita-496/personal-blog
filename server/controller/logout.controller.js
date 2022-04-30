const PersonTableExplorer = require("../utils/db_interection/PersonTableExplorer");

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(204); //No content
  }
  const refreshToken = cookies.jwt;

  //У пользователя имеется refreshToken в бд?
  const foundUser = await difineUser();
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return res.sendStatus(204);
  }
  //Удалить refreshToken из бд
  deleteToken();
  res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 1000 });
  res.sendStatus(204);

  async function difineUser() {
    const refresher = new PersonTableExplorer();
    refresher.columnValues = refreshToken;
    const queryResult = await refresher.getUserByToken();
    const foundUser = queryResult.rows[0];
    return foundUser;
  }

  async function deleteToken() {
    const handler = new PersonTableExplorer();
    handler.id = foundUser.id;
    handler.deleteToken();
  }
};

module.exports = { handleLogout };
