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
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  mounted() {
    this.checkAuthUser();
    this.setUser(UserStorage.getUser().id);
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
