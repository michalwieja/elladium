<template>
  <div>
    <div class="contact__title">
      Gdzie nas znajdziecie?
    </div>
    <div>
      <p>
        <uil-map-marker />
        Studio mieści się w Katowicach,
      </p>
      <p>Zarzecze niedaleko Mikołowa</p>
      <p>ul. Kopaniny Lewe 24a</p>
      <p>40-748 Katowice</p>
    </div>
  </div>
</template>

<script>
import { UilMapMarker } from '@iconscout/vue-unicons'

export default {
  name: 'WhereToFindUs',
  components: {
    UilMapMarker
  }
}
</script>
