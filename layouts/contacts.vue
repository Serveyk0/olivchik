<template>
    <Contacts />
</template>

<style>
    html, body, #__nuxt, #__layout {
        width: 100%;
        min-height: 100vh;
    }
</style>

<style lang="sass" scoped>
 @import '../assets/styles/global'
</style>

<script>
import Contacts from "../components/contacts";
export default {
  components: {
      Contacts
  }
}
</script>
