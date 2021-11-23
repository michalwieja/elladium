<template>
  <VueSlickCarousel v-bind="settings">
    <div v-for="img in heroImg" :key="img.path" class="img">
      <img :alt="img.path" :src="img.path">
    </div>
  </VueSlickCarousel>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import hero1 from '@/assets/img/hero1.jpg'
import hero2 from '@/assets/img/hero2.jpg'
import hero3 from '@/assets/img/hero3.jpg'

const heroImg = [
  { path: hero1 }, { path: hero2 }, { path: hero3 }
]

export default {
  name: 'Hero',
  data () {
    return {
      hero1,
      hero2,
      hero3,
      heroImg,
      settings: {
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  }
}
</script>

<style scoped>

</style>
