<template>
  <div class="gallery">
    <div class="container">
      <SectionTitle subtitle="zobacz przykładowe sesje" title="galeria" />
      <div class="gallery__grid">
        <div v-for="card in heroSlides" :key="card.title" class="gallery__card">
          <div class="img">
            <img :alt="card.title" :src="card.path">
            <div class="more">
              zobacz wiecej
            </div>
          </div>
          <div class="text">
            <div class="title font-primary">
              {{ card.title }}
            </div>
            <div class="date">
              11-02-2021
            </div>
            <div class="type">
              Sesja naturalna
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../components/home/SectionTitle.vue'
import { heroSlides } from '../config/heroSLides.js'

export default {
  components: { SectionTitle },
  data () {
    return {
      heroSlides
    }
  }
}
</script>
