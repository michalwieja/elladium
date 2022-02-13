<template>
  <VueSlickCarousel v-bind="settings">
    <div v-for="slide in heroSlides" :key="slide.path" class="hero">
      <div class="container">
        <div class="hero__text">
          <div class="hero__title">
            {{ slide.title }}
          </div>
          <div class="hero__subtitle">
            {{ slide.subtitle }}
          </div>
          <NuxtLink to="/offer">
            <button class="primary-button">
              zobacz moje prace
            </button>
          </NuxtLink>
        </div>
      </div>
      <img :alt="slide.path" :src="slide.path" class="hero__img">
    </div>
  </VueSlickCarousel>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { heroSlides } from '../../config/heroSLides.js'

export default {
  name: 'Hero',
  data () {
    return {
      heroSlides,
      settings: {
        autoplay: true,
        autoplaySpeed: 10000,
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
