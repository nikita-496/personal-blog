<template>
  <div>
    <div>
      <img :src="convert(getAvatar)" alt="user" />
    </div>
    <div>
      <h2>{{ getLogin }}</h2>
      <h3>{{ getName }}</h3>
      <h3>{{ getSurname }}</h3>
      <span>email: {{getEmail ? getEmail : "Не указан"}}</span>
    </div>
  </div>
</template>

<script>
import staticPathGeneration from "../utils/staticPathGeneration";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getName: "profile/getName",
      getSurname: "profile/getSurname",
      getLogin: "profile/getLogin",
      getEmail: "profile/getEmail",
      getAvatar: "profile/getAvatar",
    }),
  },
  methods: {
    convert(url) {
      if (url) {
        return staticPathGeneration(url);
      }
    },
  },
};
</script>
