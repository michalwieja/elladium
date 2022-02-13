<template>
  <div class="gallery pt-10">
    <div class="container">
      <SectionTitle :subtitle="singleGallery.type" :title="singleGallery.title" />
      <div v-if="singleGallery && singleGallery.id" class="column-wrapper">
        <div class="column">
          <img
            v-for="element in getPartOfGallery(1)"
            :key="element"
            :src="`/gallery/${singleGallery.id}/${element}`"
            @click="handleClick(singleGallery.id, element)"
          >
        </div>
        <div class="column">
          <img
            v-for="element in getPartOfGallery(2)"
            :key="element"
            :src="`/gallery/${singleGallery.id}/${element}`"
            @click="handleClick(singleGallery.id, element)"
          >
        </div>
        <div class="column">
          <img
            v-for="element in getPartOfGallery(3)"
            :key="element"
            :src="`/gallery/${singleGallery.id}/${element}`"
            @click="handleClick(singleGallery.id, element)"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../../../components/home/SectionTitle.vue'
import galleries from '../../../galleryConfig.json'

export default {
  components: {
    SectionTitle
  },
  computed: {
    singleGallery () {
      return galleries.find(gallery => gallery.id === this.$route.params.id)
    }
  },
  methods: {
    handleClick (id, filename) {
      console.log(id, filename)
      this.$router.push(`/gallery/${id}/${filename}`)
    },
    getPartOfGallery (part = 1) {
      return this.singleGallery?.files.filter((el, index) => {
        return (index + part) % 3 === 0
      })
    }
  }
}
</script>
