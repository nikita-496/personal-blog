const router = require("express").Router();
const PostController = require("../controller/post.controller");

router.post("/post", PostController.createPost);
router.get("/post", PostController.getPosts);
router.get("/post/:id", PostController.getPosts);
router.put("/post", PostController.updatePost);
router.delete("/post/:id", PostController.deletePost);

module.exports = router;
