<template>
  <div>
    <div class="contact__title">
      Elladium
    </div>
    <div>
      <div>
        <uil-map-marker />
        ul. Kopaniny Lewe 24a
      </div>
      <p>40-748 Katowice</p>
      <p>NIP: 646-250-28-74</p>
      <small>Numer konta</small>
      <p>ING Bank Śląski: 33 1050 1634 1000 0091 4290 0340</p>
    </div>
  </div>
</template>

<script>
import { UilMapMarker } from '@iconscout/vue-unicons'

export default {
  name: 'RegisterData',
  components: {
    UilMapMarker
  }
}
</script>
