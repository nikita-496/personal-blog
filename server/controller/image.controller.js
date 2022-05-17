const ImageController = require("../utils/db_interection/Image.controller");
const defineImageCategory = require("../utils/defineImageCategory");

const handleImage = (req, res) => {
  const imageInfo = defineImageCategory(req.files);
  ImageController.createImage(imageInfo.path).then(
    (response) => {
      res.status(201).json(response);
      return response;
    },
    (err) => res.status(500).json({ message: err.message })
  );
};

module.exports = handleImage;
