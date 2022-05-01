<template>
  <Tutorial :users="users" />
</template>

<script>
import { getJSON } from "../service/http";
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
      await getJSON("http://localhost:4000/api/v1/user").then(
        (res) => (users = res.data)
      );
      return { users };
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
