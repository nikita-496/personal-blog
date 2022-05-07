<template>
  <div class="error-404">
    <h1>Страница не найдена</h1>
    <a href="/">На главную </a>
  </div>
</template>
<script>
export default {
  name: "error-404",
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
