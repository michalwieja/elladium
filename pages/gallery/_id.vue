<template>
  <div class="gallery">
    <div class="container">
      <SectionTitle subtitle="zobacz przykładowe sesje" title="galeria" />
      info: {{ singleGalleryInfo }}
      <div v-for="img in singleGalleryFiles.files" :key="img.id">
        {{ `~/assets/${$route.params.id}/${img}` }}
        <!--        <img :src="require(`~/assets/${$route.params.id}/${img}`)" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../../components/home/SectionTitle.vue'
import galleries from '../../galleryConfig.json'
import { galleriesInfo } from '../../config/galleryConfig.js'

export default {
  components: { SectionTitle },
  computed: {
    singleGalleryFiles () {
      return galleries.find(el => el.gallery === this.$route.params.id)
    },
    singleGalleryInfo () {
      return galleriesInfo.find(el => el.id === this.$route.params.id)
    }
  }
}
</script>
