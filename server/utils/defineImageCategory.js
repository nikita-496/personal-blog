const defineImageCategory = (image) => {
  const file = image ?? "avatar" ?? ["article-header"] ?? ["article-body"];

  return file["avatar"]
    ? file["avatar"][0]
    : file["article-header"]
    ? file["article-header"][0]
    : file["article-body"][0];
};

module.exports = defineImageCategory;
