<template>
    <div class="catalog">
      <Header />
        <Menu :menu="menu" />
        <Nuxt />
      <Footer />
    </div>
</template>

<script>
import Menu from '~~/components/navigation/menu';
import Header from '~~/components/navigation/header';
import Footer from '~~/components/navigation/footer';
import {
    mapState
} from 'vuex'
export default {
    components: {
        Menu,
        Header,
        Footer
    },
    computed: {
        ...mapState({
            menu: 'menu_items'
        })
    }
}
</script>
