<template>
  <div class="flex-wrapper-sign flex-layout-sign mb-10">
    <h1 class="font-regular text-main-dark text-4xl">Регистрация</h1>
    <form
      class="flex-wrapper-sign form-shape-sign form-layout-sign w-3/12 mt-10 py-6"
      @click.prevent
    >
      <div class="flex-wrapper-sign w-full">
        <label class="text-lg mb-3 w-10/12" for="name"
          >Имя
          <input class="w-full mt-1 py-1 px-4" id="name" v-model="user.name" />
        </label>
        <label class="text-lg mb-3 w-10/12" for="surname"
          >Фамилия
          <input
            class="w-full mt-1 py-1 px-4"
            id="surname"
            v-model="user.surname"
          />
        </label>
        <label class="text-lg mb-3 w-10/12" for="login"
          >Логин
          <input
            class="w-full mt-1 py-1 px-4"
            id="login"
            v-model="user.login"
          />
        </label>
        <label class="text-lg mb-3 w-10/12" for="email"
          >Email
          <input
            class="w-full mt-1 py-1 px-4"
            id="email"
            v-model="user.email"
          />
        </label>
        <label class="text-lg mb-6 w-10/12" for="password"
          >Пароль
          <input
            class="w-full mt-1 py-1 px-4"
            id="password"
            v-model="user.password"
          />
        </label>
      </div>
      <button
        class="bg-blue-400 button-shape-sign text-lg"
        @click="handleRegister"
      >
        Зарегистрироваться
      </button>
    </form>
    <div class="mt-10 border-2 rounded-md border-blueGray-400 px-14 py-5">
      <span
        >Уже есть аккаунт?
        <NuxtLink class="text-blue-400" to="/sign/in"
          >Можете войти.</NuxtLink
        ></span
      >
    </div>
  </div>
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
