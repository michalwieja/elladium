<template>
  <div class="app">
    <Header />
    <div class="site">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/scss/index.scss'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
