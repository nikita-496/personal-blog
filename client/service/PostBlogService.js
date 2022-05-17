import { API, postFormData } from "./http";
import fetchWithAuth from "./refreshToken.service";

export default class PostBlogService {
  async send(postData) {
    await fetchWithAuth(API.post, postData, "POST");
  }
  loadImage(postData) {
    return postFormData(API.image, postData);
  }
}
