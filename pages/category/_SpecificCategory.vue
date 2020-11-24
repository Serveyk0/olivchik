<template>
  <div class="category">
    <h1>{{ category.name }}</h1>
    <div v-for="product in category.products" :key="product.id">
      <ProductsPage :product="product" />
    </div>
  </div>
</template>

<script>
import ProductsPage from '~~/components/products_page';
import { mapState } from "vuex";
export default {
  layout: "catalog",
  components: {
    ProductsPage
  },
  async asyncData({ app, params, route, error }) {
    try {
      await app.store.dispatch("getCurrentCategory", { route });
    } catch (err) {
      return error({
        statusCode: 404,
        message: "Категория не найдена или сервер не доступен",
      });
    }
  },
  computed: {
    ...mapState({
      category: "current_category",
    }),
  },
  head() {
    return {
      title: this.category.name,
      meta: [
        {
          hid: this.category.name,
          name: this.category.name,
          content: this.category.MetaDescription,
        },
      ],
    };
  },
};
</script>