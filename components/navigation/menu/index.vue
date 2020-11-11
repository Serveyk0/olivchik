<template>
<nav class="menu">
    <ul class="menu__list grid justify_normal">
        <li class="menu__list__item grid" v-for="category in categories" :key="category.name">
            <nuxt-link :to="`/${category.href}`">
                {{ category.name }}
            </nuxt-link>
        </li>
    </ul>
</nav>
</template>

<style lang="sass" scoped>
  @import '~~/assets/sass/menu'
</style>

<script>
export default {
    name: "Menu",
    props: {
        categories: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
