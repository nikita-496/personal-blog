<template>
  <form class="form" @click.prevent>
    <h1 class="form_name">Войти</h1>
    <div class="form_field">
      <label for="login">Логин</label>
      <input id="login" v-model="userInfo.login" />
      <label for="password">Пароль</label>
      <input id="password" v-model="userInfo.password" />
    </div>
    <button @click="processForm">Войти</button>
  </form>
</template>

<script>
import SignService from "../service/SignService";
export default {
  name: "login",
  data() {
    return {
      userInfo: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    async processForm() {
      const handler = new SignService();
      await handler.signIn(this.userInfo).then(() => {
        this.$router.push(`/profile/${this.userInfo.login}`);
      });
    },
  },
};
</script>
