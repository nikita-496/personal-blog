<template>
  <div>
    <!--https://stackoverflow.com/questions/47862591/vuejs-error-the-client-side-rendered-virtual-dom-tree-is-not-matching-server-re-->
    <client-only>
      <h1>Login: {{ getLogin }}</h1>
      <button
        v-if="getRoles && getRoles.includes(2)"
        @click="goCreateArticle()"
      >
        Создать статью
      </button>
    </client-only>
  </div>
</template>

<script>
import UserStorage from "../../persistent/User";
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.checkAuthUser();
    //При обновлении страницы записывать в стор данные пользователяы
    this.setUser(UserStorage.getUser().id);
  },
  computed: {
    ...mapGetters({
      getLogin: "auth/getLogin",
      getRoles: "auth/getRoles",
    }),
  },
  methods: {
    ...mapActions({
      checkAuthUser: "auth/checkAuthUser",
      setUser: "auth/setUser",
    }),
    goCreateArticle() {
      this.$router.push("/create-article");
    },
  },
};
</script>

<style lang="scss" scoped></style>
