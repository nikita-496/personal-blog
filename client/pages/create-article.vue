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
        v-model="content"
        useCustomImageHandler
        @image-added="handleImageAdded"
      />

      <button @click="send">Публиковать</button>
    </client-only>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostBlogService from "../service/PostBlogService";
import UserStorage from "../persistent/User";
import UserService from "../service/user.service";
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
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("article-body", file);
      const handlerPost = new PostBlogService();
      handlerPost
        .loadImage(formData)
        .then((res) => {
          const url = res.data.url;
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    send() {
      const sendArticle = {
        user_id: UserStorage.getUser().id,
        title: this.title,
        content: this.content,
      };
      console.log(this.content);
      /*const handler = new PostBlogService();
      handler.send(sendArticle);*/
    },
  },
};
</script>
