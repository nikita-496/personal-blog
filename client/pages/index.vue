<template>
  <Tutorial :users="users" />
</template>

<script>
import { API, getJSON } from "../service/http";
export default {
  name: "IndexPage",
  data() {
    return {
      users: [],
    };
  },
  async asyncData() {
    let users;
    try {
      await getJSON(API.user).then((res) => (users = res.data));
      return { users };
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
