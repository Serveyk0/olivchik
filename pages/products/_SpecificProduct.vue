<template>
  <div>
    <div>
      <div>
      </div>
      <div>
        <h1>{{ product.name }}</h1>
      </div>
    </div>
    <h2>Описание</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: "catalog",
  async asyncData ({ app, params, route, error }) {
    try {
      await app.store.dispatch('getCurrentProduct', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Товар не найдена или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState({
      product: 'current_product'
    })
  },
  head () {
    return {
      title: this.product.pTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.pMetaDescription
        }
      ]
    }
  }
}
</script>