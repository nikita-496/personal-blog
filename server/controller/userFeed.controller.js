const ForumTableExplorer = require("../utils/db_interection/ForumTableExplorer");
const PersonTableExplorer = require("../utils/db_interection/PersonTableExplorer");
const UserFeedTableExplorer = require("../utils/db_interection/UserFeedTableExplorer");

const handleUserFeed = async (req, res) => {
  if (req.method !== "GET" && req.method !== "DELETE") {
    var { idea, forum_id, id } = req.body[0];
  }

  const method = req.method;
  const handler = new UserFeedTableExplorer();

  let result;

  handler.idea = idea;
  handler.forumId = forum_id;

  method === "PUT" ? await update() : await get();

  return result;

  async function update() {
    handler.id = id;
    await handler.updateFeed();
    if (forum_id) {
      const followingForum = await getFollowingForum();
      const authorForum = await getAuthorForum(followingForum.user_id);
      result = res.json({
        ...followingForum,
        name: authorForum.name,
        surname: authorForum.surname,
        avatar: authorForum.avatar,
      });
    }
  }

  async function getFollowingForum() {
    const followingForum = await handler.joinWithForum();
    return followingForum;
  }

  async function getAuthorForum(userId) {
    const forumExplorer = new ForumTableExplorer();
    const personExplorer = new PersonTableExplorer();

    forumExplorer.userId = userId;
    const authorForumLogin = await forumExplorer.joinWithPersonLogin();

    personExplorer.loginForSelect = authorForumLogin.login;

    const authorForum = await personExplorer.joinWithProfile();

    return authorForum.rows[0];
  }
};

module.exports = { handleUserFeed };
