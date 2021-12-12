<template>
  <div>
    <Hero />
    <About />
    <Testimonials />
    <Faq />
    <Contact />
  </div>
</template>
<script>

import Hero from '../components/home/Hero.vue'
import About from '../components/home/About.vue'
import Testimonials from '../components/home/Testimonials.vue'
import Faq from '../components/home/Faq.vue'
import Contact from '../components/home/Contact.vue'

export default {
  components: {
    Contact,
    Faq,
    Testimonials,
    About,
    Hero
  }
}
</script>
