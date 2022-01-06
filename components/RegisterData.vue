<template>
  <div>
    <div class="contact__title">
      Elladium Rafał Płaza, Elżbieta Płaza Spółka Cywilna
    </div>
    <div>
      <div>
        <uil-map-marker />
        ul. Kopaniny Lewe 24a
      </div>
      <p>40-748 Katowice</p>
      <p>NIP: 954-280-50-70</p>
      <small>Numer konta</small>
      <p>ING Bank Śląski: 12 1050 1214 1000 0092 6751 7341</p>
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
