const fs = require("fs");
const defineImageCategory = require("../utils/defineImageCategory");
const fsPromises = require("fs").promises;

require("dotenv").config();

const verifyFile = (req, res, next) => {
  const fileInfo = defineImageCategory(req.files);

  const fileName = fileInfo.originalname;
  const fileExtension = fileName.split(".")[1];

  const oldPath = fileInfo.path;
  const newPath = oldPath + "." + fileExtension;

  req.files[fileInfo.fieldname][0].filename =
    fileInfo.filename + "." + fileExtension;
  req.files[fileInfo.fieldname][0].path = newPath;

  const fileUrl = new Promise((resolve, reject) => {
    resolve(
      fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
      })
    );
  });

  async function createDir(dir) {
    try {
      await fsPromises.access(dir, fs.constants.F_OK);
    } catch (e) {
      await fsPromises.mkdir(dir);
    }
  }

  createDir(`${process.env.STATIC_PATH}/${fileInfo.fieldname}`).then(() => {
    fs.rename(
      fileInfo.path,
      `${process.env.STATIC_PATH}/${fileInfo.fieldname}/${fileInfo.filename}`,
      (err) => {
        if (err) throw err; // не удалось переместить файл
        req.files[
          fileInfo.fieldname
        ][0].path = `${process.env.STATIC_PATH}/${fileInfo.fieldname}/${fileInfo.filename}`;
        next();
      }
    );
  });
};

module.exports = verifyFile;
