const ForumTableExplorer = require("../utils/db_interection/ForumTableExplorer");

const handleForum = async (req, res) => {
  if (req.method !== "GET" && req.method !== "DELETE") {
    var { title, content, user_id, id } = req.body[0];
  }
  const handler = new ForumTableExplorer();
  const method = req.method;

  let result;

  handler.title = title;
  handler.content = content;
  handler.userId = user_id;

  method === "POST"
    ? await create()
    : method === "PUT"
    ? await update()
    : method === "DELETE"
    ? await remove()
    : (result = res.json(await handler.getForums()));

  return result;

  async function create() {
    result = res.json(await handler.createForum());
  }
  async function update() {
    handler.id = id;
    handler.updateForum();
  }
  async function remove() {
    handler.id = req.params.id;
    handler.deleteForum();
    result = res.json(`Forum с id ${req.params.id} удален`);
  }
};

module.exports = { handleForum };
