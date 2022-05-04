<template>
  <div>
    <!--https://stackoverflow.com/questions/47862591/vuejs-error-the-client-side-rendered-virtual-dom-tree-is-not-matching-server-re-->
    <client-only>
      <h1>Login: {{ login }}</h1>
      <button>Создать статью</button>
    </client-only>
  </div>
</template>

<script>
import UserStorage from "../../persistent/User";
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    //const pathName = document.location.pathname.split("/");
    //const login = pathName[pathName.length - 1];
    //this.fetch(login);
  },
  computed: {
    ...mapGetters({
      getLogin: "auth/getLogin",
      // getProfile: "profile/getProfile",
      //isEditor: "profile/isEditor",
    }),
    /*profile: {
      get() {
        return this.getProfile;
      },
    },*/
    login: {
      get() {
        return this.getLogin;
      },
    },
    /*editor: {
      get() {
        return this.isEditor;
      },
    },*/
  },
  methods: {
    ...mapActions({
      /* fetchProfile: "profile/fetchProfile",
      checkRole: "profile/checkRole",*/
    }),
    /* async fetch(login) {
      await this.fetchProfile(login);
      await this.checkRole(this.profile);
    },*/
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
