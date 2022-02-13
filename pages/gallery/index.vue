<template>
  <div class="gallery pt-10">
    <div class="container">
      <SectionTitle subtitle="zobacz przykładowe sesje" title="galeria" />
      <div class="gallery__grid">
        <div
          v-for="gallery in galleries"
          :key="gallery.id"
          class="gallery__card"
        >
          <NuxtLink :to="`/gallery/${gallery.id}`">
            <div class="img">
              <img
                :alt="gallery.title"
                :src="`/gallery/${gallery.id}/${gallery.cover}`"
              >
              <div class="more">
                zobacz wiecej
              </div>
            </div>
            <div class="text">
              <div class="title font-primary">
                {{ gallery.title }}
              </div>
              <div class="date">
                {{ gallery.date }}
              </div>
              <div class="type">
                {{ gallery.type }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import galleries from '../../galleryConfig.json'
import SectionTitle from '../../components/home/SectionTitle.vue'

export default {
  components: { SectionTitle },
  data () {
    return {
      galleries
    }
  }
}
</script>
