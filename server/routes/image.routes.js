const router = require("express").Router();
const ImageController = require("../controller/image.controller");
const multer = require("multer");
const verifyFile = require("../middleware/verifyFile");
const upload = multer({ dest: "uploads/" });

router
  .route("/")
  .post(
    upload.fields([
      { name: "avatar" },
      { name: "article-header" },
      { name: "article-body" },
    ]),
    verifyFile,
    (req, res) => {
      console.log(req.files.path);
      ImageController.createImage(req.files.path);
    }
  )
  .get(ImageController.getImage);

router.route("/:id").delete(ImageController.deleteImage);

module.exports = router;
