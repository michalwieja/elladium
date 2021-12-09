<template>
  <div class="contact">
    <div class="container">
      <SectionTitle dark subtitle="tu nas znajdziesz" title="kontakt" />
      <div class="content">
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
        <div>
          <div class="contact__title">
            Menu
          </div>
          <div v-for="menu in menuLinks" :key="menu.path">
            {{ menu.name }}
          </div>
        </div>
        <div>
          <div class="contact__title">
            Socials
          </div>
          <div>
            <uil-facebook />
            facebook
          </div>
          <div>
            <uil-instagram />
            instagram
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UilEnvelopeAlt,
  UilFacebook,
  UilInstagram,
  UilMapMarker,
  UilMobileAndroid
} from '@iconscout/vue-unicons'
import SectionTitle from './SectionTitle.vue'
import menuLinks from '@/config/menu.js'

export default {
  name: 'Contact',
  components: {
    SectionTitle,
    UilMobileAndroid,
    UilEnvelopeAlt,
    UilMapMarker,
    UilFacebook,
    UilInstagram
  },
  data () {
    return {
      menuLinks
    }
  }
}
</script>
