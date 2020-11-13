<template>
<div class="container">
    <Menu :menu="menu" />
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
            await store.dispatch('getMenuItems') 
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
            menu: 'menu_items'
        })
    }
}
</script>
