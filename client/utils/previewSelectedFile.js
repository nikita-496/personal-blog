import PostBlogService from "../service/PostBlogService";

const previewSelectedFile =
  (handleEvent) =>
  (...args) => {
    const [file, Editor, cursorLocation, resetUploader] = args;
    const formData = handleEvent(file);

    const handlerPost = new PostBlogService();
    handlerPost
      .loadImage(formData)
      .then((res) => {
        const serverRootUrl = res.data.url.split("\\");
        const staticUrl = serverRootUrl[serverRootUrl.length - 1];
        const insideStatic = staticUrl.slice(staticUrl.indexOf("/") + 1);
        const url = `${process.env.VUE_APP_API_URL}${insideStatic}`;
        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
      })
      .catch((err) => {
        console.error(err);
      });
  };

export default previewSelectedFile;
