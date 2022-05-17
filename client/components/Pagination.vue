<template>
  <nav aria-label="Page navigation example" class="flex justify-center">
    <ul class="flex">
      <li>
        <button
          class="py-3 px-3 mr-4 text-main-dark text-lg bg-blueGray-100 rounded-md border border-gray-100 hover:bg-blueGray-400 hover:text-main-light transition-all duration-300 ease-linear cursor-pointer"
          :disabled="currentPage === 1"
          :class="currentPage === 1 ? 'disabled' : ''"
          @click="sendNumberPage(currentPage - 1)"
        >
          Назад
        </button>
      </li>
      <li v-for="numberPage in totalPages" :key="numberPage">
        <button
          class="py-3 px-4 text-main-dark text-lg text-dark bg-blueGray-100 border border-gray-100 hover:text-main-light transition-all duration-300 ease-linear cursor-pointer"
          :class="
            currentPage === numberPage ? 'active-page' : 'hover:bg-blueGray-400'
          "
          @click="sendNumberPage(numberPage)"
        >
          {{ numberPage }}
        </button>
      </li>
      <li>
        <button
          class="py-3 px-4 ml-4 text-main-dark text-lg bg-blueGray-100 rounded-md border border-gray-100 hover:bg-blueGray-400 hover:text-main-light transition-all duration-300 ease-linear cursor-pointer"
          :disabled="currentPage === totalPages"
          :class="currentPage === totalPages ? 'disabled' : ''"
          @click="sendNumberPage(currentPage + 1)"
        >
          Вперед
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: { type: Number, required: true, default: 1 },
    totalPages: { type: Number, required: true },
  },
  methods: {
    sendNumberPage(clickedPage) {
      this.$emit("updatePage", clickedPage);
    },
  },
};
</script>

<style>
.active-page {
  @apply bg-blue-600  hover:opacity-75 text-main-light;
}
.disabled {
  @apply bg-gray-400 hover:text-main-dark hover:bg-gray-400 cursor-not-allowed;
}
</style>
