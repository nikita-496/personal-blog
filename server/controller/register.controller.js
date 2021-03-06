const bcrypt = require("bcrypt");
const PersonTableExplorer = require("../utils/db_interection/PersonTableExplorer");
const ProfilTableExplorer = require("../utils/db_interection/ProfileTableExplorer");
const RelationshipTableExplorer = require("../utils/db_interection/RelationshipExplorer");
const UserFeedTableExplorer = require("../utils/db_interection/UserFeedTableExplorer");
const UserRolesTableExplorer = require("../utils/db_interection/UserRolesTableExplorer");
const UserController = require("./user.controller");

const handleNewUser = async (req, res) => {
  const { name, surname, login, password, email } = req.body[0];
  if (!name || !login || !password || !email) {
    return res.status(400).json({
      message: "Имя пользователя, логин, пароль и email являются обязательными",
    });
  }
  // проверить наличие дублирования логина пользователя в бд
  const recorder = new PersonTableExplorer();
  const queryResult = await recorder.selectLogin();
  if (countDuplicates()) {
    return res.sendStatus(409); //Conflict
  }
  try {
    // шифрование пароля
    const hashedPwd = await bcrypt.hash(password, 10);
    // создание и запись нового пользователя
    userCreation();
    async function userCreation() {
      const newUser = { name, surname, login, password: hashedPwd, email };
      const registeredUser = await UserController.createUser(newUser).then(
        (response) => {
          res.status(201).json(response);
          return response;
        }
      );
      const userRolesExplorer = new UserRolesTableExplorer();
      const userProfileExplorer = new ProfilTableExplorer();
      userRolesExplorer.targetUserId = registeredUser.id;
      // Присвоить роль
      const userRole = await userRolesExplorer.createUserRole();
      // Присвоить профиль
      await userProfileExplorer.createProfile();
      const userProfile = await userProfileExplorer.getLastProfile();
      const profileExplorer = new ProfilTableExplorer();
      profileExplorer.id = userProfile.id;
      profileExplorer.foreignId = registeredUser.id;
      const personWithProfile = await profileExplorer.writeForeignId();
      // Присвоить взаимоотношения с обществом (подписки, подписчики)
      const relationshipExplorer = new RelationshipTableExplorer();
      relationshipExplorer.userId = registeredUser.id;
      relationshipExplorer.createRelationship();
      // Присвоить ленту
      const feedExplorer = new UserFeedTableExplorer();
      feedExplorer.userId = registeredUser.id;
      feedExplorer.createFeed()
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
