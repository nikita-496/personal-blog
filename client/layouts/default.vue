<template>
  <div>
    <header class="flex justify-end pt-8">
      <div class="mr-40 w-64">
        <NuxtLink
          class="px-4 py-3 mr-2 button-shape-sign text-lg bg-blue-300 text-main-dark"
          to="/sign/up"
          >Присоединиться</NuxtLink
        >
        <span class="border-2 rounded border-main-dark py-3" v-if="loggedIn">
          <NuxtLink href="/" @click="logout">Выйти</NuxtLink>
        </span>
        <span class="border-2 rounded-md border-main-dark px-2 py-3" v-else>
          <NuxtLink to="/sign/in">Войти</NuxtLink>
        </span>
      </div>
    </header>
    <nav-bar />
    <main>
      <Nuxt />
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
