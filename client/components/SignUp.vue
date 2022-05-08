<template>
  <form class="form" @click.prevent>
    <h1 class="form_name">Регистрация</h1>
    <div class="form_field">
      <label for="name">Имя</label>
      <input id="name" v-model="user.name" />
      <label for="surname">Фамилия</label>
      <input id="surname" v-model="user.surname" />
      <label for="login">Логин</label>
      <input id="login" v-model="user.login" />
      <label for="email">Email</label>
      <input id="email" v-model="user.email" />
      <label for="password">Пароль</label>
      <input id="password" v-model="user.password" />
    </div>
    <button @click="handleRegister">Зарегистрироваться</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "sign-up",
  data() {
    return {
      user: {
        name: "",
        surname: "",
        login: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      register: "auth/register",
    }),
    async handleRegister() {
      await this.register(this.user).then((res) => {
        if (res) {
          this.$router.push(`/profile/${this.user.login}`);
        }
      });
    },
  },
};
</script>
