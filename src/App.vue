<template>
  <Header />

  <RouterView />
  
  <PreFooter  v-if="$route.meta.preFooter" />
  <Footer />
</template>

<script>
  import Header from "./components/SiteHeader.vue";
  import PreFooter from "./components/PreFooter.vue";
  import Footer from "./components/SiteFooter.vue";

  export default {
    name: 'App',
    components: { Header, PreFooter, Footer }
  }
</script>
