<template>
  <div class="contact">
    <div class="container">
      <SectionTitle dark subtitle="tu nas znajdziesz" title="kontakt" />
      <div class="content">
        <div>
          <div class="contact__title">
            rezerwacje terminow
          </div>
          <div>603 586 689</div>
          <div>695 917 995</div>
          <div>elladiumplaza@gmail.com</div>
        </div>
        <div>
          <div class="contact__title">
            gdzie nas znajdziecie
          </div>
          <div>
            <p>Studio mieści się w Katowicach,</p>
            <p>Zarzecze niedaleko Mikołowa</p>
            <p>ul. Kopaniny Lewe 24a</p>
            <p>40-748 Katowice</p>
          </div>
        </div>
        <div>
          <div class="contact__title">
            menu
          </div>
          <div v-for="menu in menuLinks" :key="menu.path">
            {{ menu }}
          </div>
        </div>
        <div>
          <div class="contact__title">
            soocials
          </div>
          <div>fb</div>
          <div>insta</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import menuLinks from '@/config/menu.js'

export default {
  name: 'Contact',
  components: { SectionTitle },
  data () {
    return {
      menuLinks
    }
  }
}
</script>
