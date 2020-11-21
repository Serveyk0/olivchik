<template>
  <nav class="menu">
    <nuxt-link v-for="item in categories" :key="item.href" :to="`/category/${item._id}`">{{ item.name }}</nuxt-link>
  </nav>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/menu'
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [1],
    };
  },
  mounted() {
    axios.get("http://localhost:3001/api/category")
    .then( res => this.categories = res.data)
  },
};
</script>
