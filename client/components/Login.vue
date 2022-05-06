<template>
  <form class="form" @click.prevent>
    <h1 class="form_name">Войти</h1>
    <div class="form_field">
      <label for="login">Логин</label>
      <input id="login" v-model="user.login" />
      <label for="password">Пароль</label>
      <input id="password" v-model="user.password" />
    </div>
    <button @click="handleLogin">Войти</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import User from "../models/User";
export default {
  name: "login",
  computed: {
    loggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
  data() {
    return {
      user: new User(undefined, undefined, "", "", undefined),
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async handleLogin() {
      await this.login(this.user).then((res) => {
        if (res) {
          this.$router.push(`/profile/${this.user.login}`);
        }
      });
    },
  },
};
</script>
