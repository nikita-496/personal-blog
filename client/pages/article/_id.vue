<template>
  <div></div>
</template>

<script>
import { API, getJSON } from "../../service/http";
export default {
  data() {
    return {
      article: [],
    };
  },
  async asyncData(ctx) {
    let article;
    try {
      await getJSON(API.post + "/" + ctx.params.id).then(
        (res) => (article = res.data)
      );
      return { article };
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style lang="scss" scoped></style>
