<template>
  <div class="main-offer">
    <section-title
      subtitle="dotyczy sesji rodzinnych, ciążowych, noworodkowych, narzeczeńskich, z psem"
      title="oferta"
    />
    <div class="cards">
      <div v-for="card in offerCards" :key="card.id" class="card">
        <div class="flower">
          <img :src="card.flower" alt="flower">
        </div>

        <div class="title">
          {{ card.title }}
        </div>
        <div class="count">
          {{ card.count }} ujęć
        </div>
        <div class="desc">
          <ul>
            <li v-for="(el, index) in card.desc" :key="index">
              <img :src="dot" alt="dot" width="15px">
              {{ el }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SectionTitle from '../home/SectionTitle.vue'
import flower4 from '../../assets/flower/flower4.svg'
import flower2 from '../../assets/flower/flower2.svg'
import flower3 from '../../assets/flower/flower3.svg'
import dot from '../../assets/flower/flower-dot.svg'

const offerCards = [
  {
    id: 1,
    flower: flower4,
    title: 'PAKIET ZDJĘĆ BASIC 500 ZŁ',
    count: 50,
    desc: ['Autorska obróbka graficzna', 'Wydruk 15 kadrów  na papierze Fine Art Print w formacie 15/23 cm', 'Pudełko na zdjęcia', 'Zdjęcia na płycie', 'Galeria On-line', 'Możliwość dokupienia wszystkich pozostałych kadrów na płycie (100 zł)']
  },
  {
    id: 2,
    flower: flower2,
    title: 'PAKIET ZDJĘĆ PREMIUM 700 ZŁ',
    count: 50,
    desc: ['Autorska obróbka graficzna', 'Mini album w formacie 20/20 cm', 'Zdjęcia na płycie', 'Galeria On-line', 'Możliwość dokupienia wszystkich pozostałych kadrów na płycie (100 zł)']
  },
  {
    id: 3,
    flower: flower3,
    title: 'PAKIET ZDJĘĆ DELUX 1000 ZŁ',
    count: 70,
    desc: ['Autorska obróbka graficzna', 'Profesjonalny album w formacie 25/25 cm.', 'Odbitki na jedwabnym papierze w formacie 15/23 cm.', 'Zdjęcia na płycie', 'Galeria On-line', 'Galeria On-line']
  }
]

export default {
  name: 'MainOffer',
  components: {
    SectionTitle
  },
  data () {
    return {
      offerCards,
      dot
    }
  }
}
</script>
