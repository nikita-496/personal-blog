<template>
  <div>
    <ul
      class="grid grid-rows-12 sm:grid-rows-6 lg:grid-rows-4 grid-flow-col gap-x-6 gap-y-6 mb-20"
    >
      <li class="w-72 rounded-md" v-for="article in articles" :key="article.id">
        <div>
          <img
            class="rounded-md h-48 w-full"
            src="../../assets/img/mountains.jpg"
            alt="Горы"
          />
          <div class="text-xl font-bold pt-4" v-html="article.title"></div>
          <div class="py-4 text-main-dark">
            <span class="font-bold">
              Аннотация.
              <span class="font-normal">
                Аннотация - краткое точное изложение содержания статьи,
                включающее основные фактические сведения и выводы описываемой
                работы. Цель аннотации – дать читателю представление о
                содержании статьи без ознакомления с полным текстом.
              </span>
            </span>
          </div>
          <div class="pb-4 font-raleway font-medium text-blueGray-400">
            <span
              class="after:content-['●'] after:px-4 after:text-base after:text-gray-300"
            >
              20 июл, 2021</span
            >
            <span>JavaScript</span>
            <span>Функциональное программирование</span>
          </div>
          <nuxt-link
            class="text-blue-800 font-medium hover:opacity-75"
            :to="{ path: `${article.id}`, params: { articleId: article.id } }"
            >Читать</nuxt-link
          >
        </div>
      </li>
    </ul>
    <pagination
      :totalPages="Math.floor(pagination.totalPages / 12)"
      :currentPage="pagination.currentPage"
      @updatePage="changePage"
    />
  </div>
</template>

<script>
import { API, getJSON } from "../../service/http";
export default {
  data() {
    return {
      articles: [],
      pagination: {
        totalPosts: null,
        currentPage: null,
      },
    };
  },
  async asyncData() {
    let articles;
    let pagination = {};
    try {
      await getJSON(`${API.post}?page=1&limit=12`).then((res) => {
        articles = res.data.results;
        pagination.totalPages = res.data.total;
        pagination.currentPage = res.data.next.page - 1;
      });
      return { articles, pagination };
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    async changePage(pageForActivation) {
      await getJSON(`${API.post}?page=${pageForActivation}&limit=12`).then(
        (res) => {
          this.articles = res.data.results;
          this.pagination.totalPages = res.data.total;
          this.pagination.currentPage = res.data.next.page - 1;
        }
      );
    },
  },
};
</script>
