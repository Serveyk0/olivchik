<template>
  <nav class="menu">
    <nuxt-link v-for="item in categories" :key="item._id" :to="`/category/${item.href}`">{{ item.name }}</nuxt-link>
  </nav>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/menu'
</style>

<script>
import axios from "axios";
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3001/api/category")
    .then( res => this.categories = res.data)
  },
};
</script>
