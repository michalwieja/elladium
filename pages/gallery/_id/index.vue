<template>
  <div class="gallery pt-10">
    <div class="container">
      <CoolLightBox
        :effect="'fade'"
        :full-screen="true"
        :index="index"
        :items="parsed || []"
        :use-zoom-bar="true"
        slideshow-color-bar="#ffffff"
        @close="index = null"
      />
      <SectionTitle
        :subtitle="singleGallery.type"
        :title="singleGallery.title"
        data-aos="fade-in"
        data-aos-duration="1000"
      />
      <div
        v-if="singleGallery && singleGallery.id"
        style="column-count: 3"
      >
        <div
          v-for="(element,idx) in singleGallery.files"
          :key="element"
          style="margin: 0 1rem 1rem 0; display: block;width: 100%;"
        >
          <img
            :src="`/gallery/${singleGallery.id}/${element}`"
            style="width: 100%;  object-fit: cover"
            @click="index=idx"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import SectionTitle from '../../../components/home/SectionTitle.vue'
import galleries from '../../../galleryConfig.json'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    SectionTitle,
    CoolLightBox
  },
  data () {
    return {
      index: null,
      parsed: null
    }
  },
  computed: {
    singleGallery () {
      return galleries.find(gallery => gallery.id === this.$route.params.id)
    }
  },
  mounted () {
    this.parsed = this.singleGallery.files.map(file => `/gallery/${this.singleGallery.id}/${file}`)
  }
}
</script>
