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
          <button class="primary-button">
            zobacz moje prace
          </button>
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

import codziennosc from '../../assets/img/hero/codziennosc.jpg'
import naturalnie from '../../assets/img/hero/naturalnie.jpg'
import gesty from '../../assets/img/hero/gesty.jpg'
import zycie from '../../assets/img/hero/zycie.jpg'
import bliskosc from '../../assets/img/hero/bliskosc.jpg'
import piekno from '../../assets/img/hero/piekno.jpg'
import chwile from '../../assets/img/hero/chwile.jpg'

const heroSlides = [
  {
    path: codziennosc,
    title: 'Codzienność',
    subtitle: 'Najpiękniej pokazana'
  },
  {
    path: naturalnie,
    title: 'Naturalnie',
    subtitle: 'najlepiej'
  }, {
    path: gesty,
    title: 'Gesty',
    subtitle: 'Znaczą tak wiele...'
  }, {
    path: zycie,
    title: 'Celebrowanie życia',
    subtitle: ''
  }, {
    path: bliskosc,
    title: 'Liczy się Wasza bliskość',
    subtitle: ''
  }, {
    path: piekno,
    title: 'Piękno',
    subtitle: 'Twojej historii'
  }, {
    path: chwile,
    title: 'Beztroskie chwile',
    subtitle: 'do których lubicie wracać'
  }
]

export default {
  name: 'Hero',
  data () {
    return {
      codziennosc,
      naturalnie,

      heroSlides,
      settings: {
        autoplay: false,
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
