<template>
  <div>
    <h1>Login: {{ userItem.login }}</h1>
  </div>
</template>

<script>
import SignService from "../../service/SignService";
export default {
  data() {
    return {
      userItem: {},
    };
  },
  mounted() {
    const pathName = document.location.pathname.split("/");
    const login = pathName[pathName.length - 1];
    this.fetchData(login);
  },
  methods: {
    async fetchData(login) {
      const handler = new SignService();
      this.userItem = await handler
        .renderProfile({ login })
        .then((res) => (this.userItem = res.data[0]));
    },
  },
};
</script>

<style lang="scss" scoped></style>
