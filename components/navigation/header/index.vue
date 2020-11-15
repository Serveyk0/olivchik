<template>
  <header class="header margin-auto grid justify-center align-center">
    <li class="header__item grid align-center" v-for="item in header" :key="item.href">
      <nuxt-link :to="`/${item.href}`">{{ item.name }}</nuxt-link>
    </li>
  </header>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/header'
</style>

<script>
export default {
  name: "Header",
  props: {
    header: {
      type: Array,
      default: () => []
    }
  }
};
</script>