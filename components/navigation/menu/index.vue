<template>
<nav class="menu">
    <ul class="menu__list grid justify-center padding-0 margin-0">
        <li class="menu__list__item grid" v-for="category in data" :key="category.name">
            <nuxt-link :to="`/category/${category.href}`">
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
        menu: {
            type: Array,
            default: () => [],
        },
    },
    async asyncData() {
        const { data } = await axios.get("localhost:3005/api/category");
        return { data : data }
    }
};
</script>
