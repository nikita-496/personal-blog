<template>
  <form class="form" @click.prevent>
    <h1 class="form_name">Регистрация</h1>
    <div class="form_field">
      <label for="name">Имя</label>
      <input id="name" />
      <label for="surname">Фамилия</label>
      <input id="surname" />
      <label for="login">Логин</label>
      <input id="login" />
      <label for="email">Email</label>
      <input id="email" />
      <label for="password">Пароль</label>
      <input id="password" />
    </div>
    <button @click="register">Зарегистрироваться</button>
  </form>
</template>

<script>
export default {
  name: "sign-up",
  data() {
    return {
      userInfo: [],
    };
  },
  methods: {
    register() {
      alert("Данные отправлены");
    },
  },
};
</script>
