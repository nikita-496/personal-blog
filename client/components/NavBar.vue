<template>
  <header id="nav">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/article/all">Articles</NuxtLink>
    <span v-if="loggedIn">
      <a href="/" @click="logout">Logout</a>
    </span>
    <span v-else>
      <NuxtLink to="/sign/up">Register</NuxtLink>
      <NuxtLink to="/sign/in">Login</NuxtLink>
    </span>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "nav-bar",
  computed: {
    loggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
  methods: {
    ...mapActions({
      logoutAction: "auth/logout",
    }),
    logout() {
      this.logoutAction();
    },
  },
};
</script>

<style lang="scss" scoped></style>
