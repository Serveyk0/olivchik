<template>
  <div>
    <h1>{{ category.name }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  layout: "catalog",
    async asyncData({ app, params, route, error }) {
        try{
            await app.store.dispatch('getCurrentCategory', {route})
        } catch (err) {
            console.log(err);
            return error({
                statusCode: 404,
                message: 'Категория не найдена или сервер не доступен'
            })
        }
    },
    computed: {
        ...mapState({
            category: 'current_category'
        })
    },
    head () {
    return {
      title: this.category.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.MetaDescription
        }
      ]
    }
  }
}
</script>