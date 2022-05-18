const router = require("express").Router();
const ImageExplorer = require("../utils/db_interection/ImageTabelExplorer");
const multer = require("multer");
const verifyFile = require("../middleware/verifyFile");
const ImageController = require("../controller/image.controller");

const static = multer({ dest: "../static" });

router
  .route("/")
  .post(
    static.fields([
      { name: "avatar" },
      { name: "article-header" },
      { name: "article-body" },
    ]),
    verifyFile,
    (req, res) => {
      ImageController.handleImage(req, res);
    }
  )
  .get(ImageExplorer.getImage);

router.route("/:id").delete(ImageExplorer.deleteImage);

module.exports = router;
