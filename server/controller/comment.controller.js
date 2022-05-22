const CommentTableExplorer = require("../utils/db_interection/CommentTableExplorer");

const handleComment = async (req, res) => {
  if (req.method !== "GET" && req.method !== "DELETE") {
    var { content, post_id, forum_id, id } = req.body[0];
  }

  const method = req.method;
  const handler = new CommentTableExplorer();

  let result;

  handler.content = content;
  handler.postId = post_id;
  handler.forumId = forum_id;

  method === "POST" ? await create() 
  : method === "PUT" ? await update()
  : method === "DELETE" ? await remove()
  : (result = res.json(await handler.getComments()));

  return result;

  async function create() {
    result = res.json(await handler.createComment());
  }
  async function update() {
    handler.id = id;
    handler.updateComments();
    result = res.json(`Комментарий с id ${id} обновлен`)
  }
  async function remove() {
    handler.id = req.params.id;
    handler.deleteComment();
    result = res.json(`Комментарий с id ${req.params.id} удален`)
  }
};

module.exports = { handleComment };
