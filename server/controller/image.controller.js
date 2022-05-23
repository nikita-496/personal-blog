const ImageExplorer = require("../utils/db_interection/ImageTabelExplorer");
const ProfileTableExplorer = require("../utils/db_interection/ProfileTableExplorer");
const defineImageCategory = require("../utils/defineImageCategory");

const handleImage = (req, res) => {
  const imageInfo = defineImageCategory(req.files);

  ImageExplorer.typeImage = req.body.type;
  ImageExplorer.postId = req.body.article;
  ImageExplorer.userId = req.body.user;

  ImageExplorer.createImage(imageInfo.path).then(
    async (response) => {
      if (req.body.type === "avatar") {
        await updateAvatar(response.user_id, response.url_avatar);
      }
      res.status(201).json(response);
      return response;
    },
    (err) => res.status(500).json({ message: err.message })
  );

  async function updateAvatar(userId, avatar) {
    const profileExplorer = new ProfileTableExplorer();
    profileExplorer.id = userId;
    return await profileExplorer.updateProfile(avatar);
  }
};

module.exports = { handleImage };
