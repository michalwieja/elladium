<template>
  <div class="main-offer">
    <section-title
      subtitle="dotyczy sesji rodzinnych, ciążowych, noworodkowych, narzeczeńskich, z psem"
      title="oferta"
    />
    <div class="cards">
      <div v-for="card in offerCards" :key="card.id" class="card">
        <uil-box color="white" size="75px" />
        <div class="title">
          {{ card.title }}
        </div>
        <div class="count">
          {{ card.count }} ujęć
        </div>
        <div class="desc">
          <ul>
            <li v-for="(el, index) in card.desc" :key="index">
              <uil-camera />
              {{ el }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UilBox, UilCamera } from '@iconscout/vue-unicons'
import SectionTitle from '../home/SectionTitle.vue'

const offerCards = [
  {
    id: 1,
    title: 'PAKIET ZDJĘĆ BASIC 400 ZŁ',
    count: 15,
    desc: ['Autorska obróbka graficzna', 'Wydruk na papierze Fine Art Print w formacie 15/23 cm', 'Pudełko na zdjęcia', 'Zdjęcia na płycie', 'Galeria On-line', 'Możliwość dokupienia wszystkich pozostałych kadrów na płycie (150 zł)']
  },
  {
    id: 2,
    title: 'PAKIET ZDJĘĆ PREMIUM 600 ZŁ',
    count: 35,
    desc: ['Autorska obróbka graficzna', 'Mini album w formacie 20/20 cm', 'Odbitki na jedwabnym papierze w formacie 15/23 cm.', 'Zdjęcia na płycie', 'Galeria On-line', 'Możliwość dokupienia wszystkich pozostałych kadrów na płycie (100 zł)']
  },
  {
    id: 3,
    title: 'PAKIET ZDJĘCIOWY DE LUX 1000 ZŁ',
    count: 60,
    desc: ['Autorska obróbka graficzna', 'Profesjonalny album w formacie 25/25 cm.', 'Odbitki na jedwabnym papierze w formacie 15/23 cm.', 'Zdjęcia na płycie', 'Galeria On-line', 'Galeria On-line']
  }
]

export default {
  name: 'MainOffer',
  components: {
    SectionTitle,
    UilBox,
    UilCamera
  },
  data () {
    return {
      offerCards

    }
  }
}
</script>
