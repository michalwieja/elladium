<template>
  <div>
    <div class="contact__title">
      Rezerwacje terminów
    </div>
    <div>
      <button>
        <a href="tel:603 586 689">
          <uil-mobile-android />
          603 586 689</a>
      </button>
    </div>
    <div>
      <button>
        <a href="tel:695 917 995">
          <uil-mobile-android />
          695 917 995</a>
      </button>
    </div>
    <div>
      <button>
        <a href="mailto:elladiumplaza@gmail.com">
          <uil-envelope-alt />
          elladiumplaza@gmail.com</a>
      </button>
    </div>
  </div>
</template>

<script>
import { UilEnvelopeAlt, UilMobileAndroid } from '@iconscout/vue-unicons'

export default {
  name: 'Appointments',
  components: {
    UilMobileAndroid,
    UilEnvelopeAlt
  }
}
</script>
