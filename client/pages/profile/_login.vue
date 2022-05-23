<template>
  <div>
    <profile />
  </div>
</template>

<script>
import UserStorage from "../../persistent/User";
import { mapActions, mapGetters } from "vuex";
export default {
   mounted() {
    this.checkAuthUser();
    this.setUserProfile(UserStorage.getUser().id);
  },
  computed: {
    ...mapGetters({
      getRoles: "auth/getRoles"
    }),
  },
  methods: {
    ...mapActions({
      checkAuthUser: "auth/checkAuthUser",
      setUserProfile: "profile/setUserProfile",
    }),
    goCreateArticle() {
      this.$router.push("/create-article");
    },
  },
};
</script>

<style lang="scss" scoped></style>
