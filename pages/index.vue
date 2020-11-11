<template>
<div class="container">
    <h1>title</h1>
    <Menu :categories="categories" />
</div>
</template>

<script>
import Menu from '~~/components/navigation/menu';
import {
    mapState
} from 'vuex'
export default {
    components: {
        Menu
    },
    async asyncData({
        app,
        route,
        params,
        error,
        store
    }) {
        try {
            await store.dispatch('getCategoriesList')
        } catch (err) {
            console.log(err)
            return error({
                statusCode: 404,
                message: 'Категории не найдены или сервер не доступен'
            })
        }
    },
    computed: {
        ...mapState({
            categories: 'categoriesList'
        })
    }
}
</script>
