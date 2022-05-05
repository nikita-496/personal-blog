import authHeader from "./authHeader";
import { postJSON, API } from "./http";

export default class PostBlogService {
  send(postData) {
    return postJSON(API.post, postData, { headers: authHeader() });
  }
}
