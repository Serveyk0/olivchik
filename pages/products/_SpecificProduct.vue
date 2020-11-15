<template>
  <div>
    <div>
      <div>
        <!-- <a :href="product.images.imgXL" target="_blank"> -->
          <!-- <img
            v-lazy="product.images.imgL"
          /> -->
        <!-- </a> -->
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
      product: 'currentProduct'
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