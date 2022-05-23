const staticPathGeneration = (urlToConvert) => {
  console.log(urlToConvert)
  const serverRootUrl = urlToConvert.split("\\");
  const staticUrl = serverRootUrl[serverRootUrl.length - 1];
  const insideStatic = staticUrl.slice(staticUrl.indexOf("/") + 1);
  const url = `${process.env.VUE_APP_API_URL}${insideStatic}`;
  return url
}

export default staticPathGeneration;

