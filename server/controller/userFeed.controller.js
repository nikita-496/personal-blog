const ForumTableExplorer = require("../utils/db_interection/ForumTableExplorer");
const ImageExplorer = require("../utils/db_interection/ImageTabelExplorer");
const PersonTableExplorer = require("../utils/db_interection/PersonTableExplorer");
const UserFeedTableExplorer = require("../utils/db_interection/UserFeedTableExplorer");
const postController = require("./post.controller");

const handleUserFeed = async (req, res) => {
  if (req.method !== "GET" && req.method !== "DELETE") {
    var { idea, forum_id, post_id, id } = req.body[0];
  }

  const method = req.method;
  const handler = new UserFeedTableExplorer();

  let result;

  handler.idea = idea;
  handler.forumId = forum_id;
  handler.postId = post_id;

  method ===  "PUT" ? await update() 
  : method === "DELETE" ? await remove() 
  : await get();

  return result;

  async function get() {
    handler.id = req.params.id;
    return res.json(await handler.getFeed());
  }

  async function update() {
    handler.id = id;
    await handler.updateFeed();
    forum_id ? await handleFollowedForum() : await handleCreatedPost();
  }

  async function remove() {
    handler.id = req.params.id;
    handler.deletefeed()
    result = res.json(`Лента пользователя с id ${req.params.id} удалена`)
  }

  /* FORUM */
  async function handleFollowedForum() {
    const followingForum = await getFollowingForum();
    const forumAuthor = await getForumAuthor(followingForum.user_id);
    result = res.json({
      ...followingForum,
      name: forumAuthor.name,
      surname: forumAuthor.surname,
      avatar: forumAuthor.avatar,
    });
  }
  async function getFollowingForum() {
    const followingForum = await handler.joinWithForum();
    return followingForum;
  }

  async function getForumAuthor(userId) {
    const forumExplorer = new ForumTableExplorer();
    const personExplorer = new PersonTableExplorer();

    forumExplorer.userId = userId;
    const forumAuthorLogin = await forumExplorer.joinWithPersonLogin();

    personExplorer.loginForSelect = forumAuthorLogin.login;

    const forumAuthor = await personExplorer.joinWithProfile();

    return forumAuthor.rows[0];
  }
  /* FORUM */

  /* POST */
  async function handleCreatedPost() {
    await getCreatedPost();
  }

  async function getCreatedPost() {
    const post = await handler.joinWithPost();
    const authorId = post.user_id;
    const postAuthorLogin = await getPostAuthor(authorId);

    personExplorer = new PersonTableExplorer();
    personExplorer.loginForSelect = postAuthorLogin;
    const postAuthorInfo = await personExplorer.joinWithProfile();

    ImageExplorer.postId = post_id;
    const headerImage = await ImageExplorer.getPostHeaaderImage();

    result = res.json({
      ...post,
      name: postAuthorInfo.rows[0].name,
      surname: postAuthorInfo.rows[0].surname,
      avatar: postAuthorInfo.rows[0].avatar,
      headerImage,
    });
  }

  async function getPostAuthor(authorId) {
    const postAuthorLogin = await postController.joinWithPersonLogin(authorId);
    const postAuthor = postAuthorLogin.login;
    return postAuthor;
  }
  /* POST */
};

module.exports = { handleUserFeed };
