<template>
    <div class="main_wrapper">
        <Header />
            <div class="content grid">
                <Menu />
                <Home />
            </div>
        <Footer />
    </div>
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
import Header from "../components/navigation/header";
import Menu from "../components/navigation/menu";
import Home from "../components/home";
import Footer from "../components/navigation/footer";
export default {
  components: {
      Header,
      Menu,
      Footer
  }
}
</script>
