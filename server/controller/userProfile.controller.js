const PersonTableExplorer = require("../utils/db_interection/PersonTableExplorer");

const handleUserProfile = async (req, res) => {
  const login = req.body.login;
  const personExplorer = new PersonTableExplorer();
  personExplorer.loginForSelect = login;
  const queryResult = await personExplorer.joinWithUserProfile();
  return res.json(queryResult.rows);
};

module.exports = { handleUserProfile };
