const CommentTableExplorer = require("../utils/db_interection/CommentTableExplorer");

const handleComment = async (req, res) => {
  if (req.method !== "GET" && req.method !== "DELETE") {
    var { content, post_id, forum_id, user_id, id } = req.body[0];
  }

  const method = req.method;
  const handler = new CommentTableExplorer();

  let result;

  handler.content = content;
  handler.postId = post_id;
  handler.forumId = forum_id;
  handler.userId = user_id;

  method === "POST" ? await create() 
  : method === "PUT" ? await update()
  : method === "DELETE" ? await remove()
  : await get();

  return result;

  async function create() {
    result = res.json(await handler.createComment());
  }
  async function get() {
    if (req.params.id) {
      handler.id = req.params.id;
    }  
    result = res.json(await handler.getComment());
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
