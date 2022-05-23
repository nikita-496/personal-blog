const ImageExplorer = require("../utils/db_interection/ImageTabelExplorer");
const defineImageCategory = require("../utils/defineImageCategory");

const handleImage = (req, res) => {
  const imageInfo = defineImageCategory(req.files);


  ImageExplorer.typeImage = req.body.type 
  ImageExplorer.postId = req.body.article

  ImageExplorer.createImage(imageInfo.path).then(
    (response) => {
      res.status(201).json(response);
      return response;
    },
    (err) => res.status(500).json({ message: err.message })
  );
};

module.exports = { handleImage };
