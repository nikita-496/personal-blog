<template>
  <div>
    <client-only>
      <label for="title">Заголовок</label>
      <VueEditor class="mx-auto w-[60rem]" id="title" v-model="title" />

      <label for="content">Текст статьи</label>
      <VueEditor
        class="mx-auto w-[60rem]"
        id="content"
        ref="articleBody"
        useCustomImageHandler
        @image-added="wrapper"
        v-model="content"
      />

      <button @click="send">Публиковать</button>
    </client-only>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import UserStorage from "../persistent/User";
import UserService from "../service/user.service";
import PostBlogService from "../service/PostBlogService";
import previewSelectedFile from "../utils/previewSelectedFile";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  mounted() {
    if (!UserStorage.getUser()) {
      console.log(UserStorage.getUser());
      this.$router.push("sign/in");
      return;
    }
    UserService.getEditor().then(
      (res) => {
        return;
      },
      (err) => {
        if (err.response.status === 401) {
          this.$router.push("error/401");
        }
        this.$router.push("error/500");
      }
    );
    this.checkAuthUser();
    if (UserStorage.getUser()) {
      this.setUser(UserStorage.getUser().id);
    }
  },
  methods: {
    ...mapActions({
      checkAuthUser: "auth/checkAuthUser",
      setUser: "auth/setUser",
    }),
    wrapper(file, Editor, cursorLocation, resetUploader) {
      const handle = this.handleImageAdded;
      const wrapped = previewSelectedFile(handle);
      wrapped(file, Editor, cursorLocation, resetUploader);
    },
    handleImageAdded(file) {
      const formData = new FormData();
      formData.append("article-body", file);
      return formData;
    },
    send() {
      const sendArticle = {
        user_id: UserStorage.getUser().id,
        title: this.title,
        content: this.content,
      };
      const handler = new PostBlogService();
      handler.send(sendArticle);
    },
  },
};
</script>
