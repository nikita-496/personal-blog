<template>
  <div class="flex-wrapper-sign flex-layout-sign">
    <h1 class="font-regular text-main-dark text-4xl">Авторизация</h1>
    <form
      class="flex-wrapper-sign form-shape-sign form-layout-sign"
      @click.prevent
    >
      <div class="flex-wrapper-sign w-full">
        <label class="text-lg mb-3 w-10/12" for="login"
          >Логин
          <input
            class="w-full mt-1 py-1 px-4"
            id="login"
            v-model="user.login"
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
        @click="handleLogin"
      >
        Войти
      </button>
    </form>
    <div class="mt-10 border-2 rounded-md border-blueGray-400 px-4 py-5">
      <span
        >Новый пользователь?
        <NuxtLink class="text-blue-400" to="/sign/up"
          >Можете создать аккаунт.</NuxtLink
        ></span
      >
    </div>
  </div>
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

<style>
.flex-wrapper-sign {
  @apply flex-1 flex flex-col items-center;
}

.flex-layout-sign {
  @apply mt-20;
}

.form-layout-sign {
  @apply w-96 mt-6 py-6;
}

.form-shape-sign {
  @apply rounded-md bg-blueGray-100 shadow-lg;
}

.button-shape-sign {
  @apply py-2 px-6 rounded-lg w-10/12;
}
</style>
