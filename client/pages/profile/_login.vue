<template>
  <div>
    <!--https://stackoverflow.com/questions/47862591/vuejs-error-the-client-side-rendered-virtual-dom-tree-is-not-matching-server-re-->
    <client-only>
      <h1>Login: {{ getLogin }}</h1>
      <button>Создать статью</button>
    </client-only>
  </div>
</template>

<script>
import UserStorage from "../../persistent/User";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getLogin: "auth/getLogin",
    }),
  },
  methods: {
    ...mapActions({}),
    goCreateArticle() {
      UserStorage.setUser = {
        id: this.getProfile.id,
        name: this.getProfile.name,
        surname: this.getProfile.surname,
        login: this.getProfile.login,
      };
      this.$router.push("/create-article");
    },
  },
};
</script>

<style lang="scss" scoped></style>
