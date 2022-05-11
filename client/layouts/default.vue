<template>
  <div>
    <header class="flex justify-end pt-8">
      <div class="mr-60 w-68">
        <NuxtLink
          class="px-4 py-3.5 mr-2 button-shape-sign text-md font-medium bg-blue-300 text-main-dark hover:opacity-75"
          to="/sign/up"
          >ПРИСОЕДИНИТЬСЯ</NuxtLink
        >
        <NuxtLink
          class="border-2 rounded border-main-dark py-3 hover:text-main-lighthover:bg-main-dark"
          v-if="loggedIn"
          href="/"
          @click="logout"
          >Выйти</NuxtLink
        >

        <NuxtLink
          class="border-2 rounded-md border-main-dark px-3 py-3 hover:text-main-light hover:bg-main-dark"
          v-else
          to="/sign/in"
          >Войти</NuxtLink
        >
      </div>
    </header>
    <nav-bar />
    <main>
      <div class="wrapper-main flex justify-center ml-20 my-40">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
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
