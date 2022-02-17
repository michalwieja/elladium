<template>
  <div>
    <!--    <Hero />-->
    <About />
    <!--    <Testimonials />-->
    <Faq />
    <Contact />
  </div>
</template>
<script>

import About from '../components/home/About.vue'
import Faq from '../components/home/Faq.vue'
import Contact from '../components/home/ContactSection.vue'

export default {
  components: {
    Contact,
    Faq,
    // Testimonials,
    About
    // Hero
  },
  methods: {
    handleScroll (e) {
      console.log(e)
    }
  }
}
</script>
