<template>
  <nav class="menu">
    <ul class="menu__list grid justify_normal">
      <li class="menu__list__item grid" v-for="item in items" :key="item.name">
        <NuxtLink :to="'/' + item.href">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template> 

<style lang="sass" scoped>
 @import '../../../assets/styles/menu'
 @import '../../../assets/styles/global'
</style>

<script>
import { menu_items } from "./constants";
export default {
  name: 'Menu',
  data () {
    return {
      items: menu_items
    }
  }
}
</script> 