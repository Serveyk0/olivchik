<template>
    <div class="prodicts_page">
    <nuxt-link :to="`/product/${product.name}`">
         <p>{{ product.name}}</p>
    </nuxt-link>
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
}
</script>
