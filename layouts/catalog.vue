<template>
    <div class="catalog grid">
        <Header :header="header" />
        <Menu :menu="menu" />
        <div class="content align-normal grid">
            <Breadcrumbs />
            <Nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
import Menu from '~~/components/navigation/menu';
import Header from '~~/components/navigation/header';
import Footer from '~~/components/navigation/footer';
import Breadcrumbs from '~~/components/navigation/breadcrumbs'
import {
    mapState
} from 'vuex'
export default {
    components: {
        Menu,
        Header,
        Footer,
        Breadcrumbs
    },
    computed: {
        ...mapState({
            menu: 'menu_items',
            header: 'header_items'
        })
    }
}
</script>
