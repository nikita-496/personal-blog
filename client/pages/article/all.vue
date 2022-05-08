<template>
  <ul class="articles">
    <li class="articles__item" v-for="article in articles" :key="article.id">
      <div class="card">
        <div class="card__title" v-html="article.title"></div>
        <div class="card__content" v-html="article.content"></div>
        <nuxt-link
          :to="{ path: `${article.id}`, params: { articleId: article.id } }"
          >Читать</nuxt-link
        >
      </div>
    </li>
  </ul>
</template>

<script>
import { API, getJSON } from "../../service/http";
export default {
  data() {
    return {
      articles: [],
    };
  },
  async asyncData() {
    let articles;
    try {
      await getJSON(API.post).then((res) => (articles = res.data));
      return { articles };
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
