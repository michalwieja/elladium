<template>
  <div class="gallery">
    <div class="container">
      <SectionTitle subtitle="zobacz przykładowe sesje" title="galeria" />
      <div class="gallery__grid">
        <div
          v-for="card in galleriesInfo"
          :key="card.title"
          class="gallery__card"
        >
          <NuxtLink :to="`/gallery/${card.id}`">
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
                {{ card.date }}
              </div>
              <div class="type">
                {{ card.type }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { galleriesInfo } from '../../config/galleryConfig.js'
import SectionTitle from '../../components/home/SectionTitle.vue'

export default {
  components: { SectionTitle },
  data () {
    return {
      galleriesInfo
    }
  }
}
</script>
