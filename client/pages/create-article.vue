<template>
  <div>
    <client-only>
      <label for="title">Заголовок</label>
      <VueEditor id="body" v-model="title" />
      <label for="title">Текст статьи</label>
      <VueEditor id="body" v-model="content" />
      <button @click="publick">Публиковать</button>
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
    publick() {
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
