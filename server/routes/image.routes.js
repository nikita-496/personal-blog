const router = require("express").Router();
const ImageController = require("../controller/image.controller");

router
  .route("/")
  .post(ImageController.createImage)
  .get(ImageController.getImage);

router.route("/:id").delete(ImageController.deleteImage);

module.exports = router;
