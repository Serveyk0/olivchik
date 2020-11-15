<template>
  <div class="prodicts_page">
    <nuxt-link :to="`/products/${product.name}`">
      <p>{{ product.name}}</p>
    </nuxt-link>
    <!-- <img v-lazy="product.image.imgXL" /> -->
    <p>{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
