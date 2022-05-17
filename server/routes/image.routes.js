const router = require("express").Router();
const ImageController = require("../utils/db_interection/Image.controller");
const multer = require("multer");
const verifyFile = require("../middleware/verifyFile");
const defineImageCategory = require("../utils/defineImageCategory");
const handleImage = require("../controller/image.controller");
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
      handleImage(req, res);
    }
  )
  .get(ImageController.getImage);

router.route("/:id").delete(ImageController.deleteImage);

module.exports = router;
