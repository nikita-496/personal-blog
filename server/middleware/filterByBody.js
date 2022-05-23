const PersonTableExplorer = require("../utils/db_interection/PersonTableExplorer");

function filterByBody() {
  return async (req, res, next) => {
    let result = [];
    handlerPerson = new PersonTableExplorer();
    const commenters = await mergeTables();

    const commentsByPostId = await getByBodyId();
    result = commentsByPostId;
    res.filterByBody = result;

    next();

    async function mergeTables() {
      const loginList = await handlerPerson.selectLogin();
      let result = await Promise.all(
        loginList.rows.map(async (item) => {
          item.login;
          const personExplorer = new PersonTableExplorer();
          personExplorer.loginForSelect = item.login;
          return await personExplorer.joinWithComment();
        })
      );
      return result;
    }

    async function getByBodyId() {
      let bodyId = null;
      let headers_body_id = null;
      if (req.headers.post) {
        bodyId = "post_id";
        headers_body_id = "post";
      } else {
        bodyId = "forum_id";
        headers_body_id = "forum";
      }
      return commenters.filter(
        (commentor) =>
          commentor[bodyId] === Number(req.headers[headers_body_id])
      );
    }
  };
}

module.exports = filterByBody;
