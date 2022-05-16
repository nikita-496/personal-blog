const fs = require("fs");
const fsPromises = require("fs").promises;

const verifyFile = (req, res, next) => {
  const file = req.files ?? avatar ?? ["article-header"] ?? ["article-body"];

  let fileInfo;
  file["avatar"]
    ? (fileInfo = file["avatar"][0])
    : file["article-header"]
    ? (fileInfo = file["article-header"][0])
    : (fileInfo = file["article-body"][0]);

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

  createDir(`uploads/${fileInfo.fieldname}`).then(() =>
    fs.rename(
      fileInfo.path,
      `uploads/${fileInfo.fieldname}/${fileInfo.filename}`,
      (err) => {
        if (err) throw err; // не удалось переместить файл
        req.files[
          fileInfo.fieldname
        ][0].path = `uploads/${fileInfo.fieldname}/${fileInfo.filename}`;
        next();
      }
    )
  );
};

module.exports = verifyFile;
