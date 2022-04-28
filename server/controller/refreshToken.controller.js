const jwt = require("jsonwebtoken");
const PersonTableExplorer = require("../utils/PersonTableExplorer");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(400);
  }
  const refreshToken = cookies.jwt;
  const foundUser = await difineUser();
  if (!foundUser) {
    return res.sendStatus(403); //Forbidden
  }

  //валедировать jwt
  verifyJWT();

  async function difineUser() {
    const refresher = new PersonTableExplorer();
    refresher.columnValues = refreshToken;
    const queryResult = await refresher.getUserByToken();
    const foundUser = queryResult.rows[0];
    return foundUser;
  }

  function verifyJWT() {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err || foundUser.login !== decoded.login) {
          return res.sendStatus(403);
        }
        const accessToken = jwt.sign(
          { login: decoded.login },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "30s" }
        );
        res.json({ accessToken });
      }
    );
  }
};

module.exports = { handleRefreshToken };
