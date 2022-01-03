<template>
  <div class="gallery">
    <div class="container">
      <SectionTitle subtitle="zobacz przykładowe sesje" title="galeria" />
      <div v-if="singleGallery && singleGallery.id">
        <div>{{ singleGallery.title }}</div>
        <div class="gallery__grid">
          <div v-for="file in singleGallery.files" :key="file" class="gallery__card">
            <div class="img">
              <img :src="`/gallery/${singleGallery.id}/${file}`" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../../components/home/SectionTitle.vue'
import galleries from '../../galleryConfig.json'

export default {
  components: {
    SectionTitle
  },
  computed: {
    singleGallery () {
      return galleries.find(gallery => gallery.id === this.$route.params.id)
    },
    path () {
      return require(`~/assets/${this.singleGallery().id}/${this.singleGallery().files[0]}}`)
    }
  }
}
</script>
