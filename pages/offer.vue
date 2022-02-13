<template>
  <div class="container pt-10">
    <MainOffer />
    <AlbumsOffer />
    <WeddingsOffer />
    <OccasionalOffer />
    <CompanyOffer />
  </div>
</template>

<script>
import MainOffer from '../components/offer/MainOffer.vue'
import AlbumsOffer from '../components/offer/AlbumsOffer.vue'
import WeddingsOffer from '../components/offer/WeddingsOffer.vue'
import CompanyOffer from '../components/offer/CompanyOffer.vue'
import OccasionalOffer from '../components/offer/OccasionalOffer.vue'

export default {
  components: {
    OccasionalOffer,
    WeddingsOffer,
    AlbumsOffer,
    CompanyOffer,
    MainOffer
  }
}
</script>
