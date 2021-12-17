<template>
  <div class="main-offer">
    <section-title
      subtitle="dotyczy reportażu komunijnego, chrztu, ślubu cywilnego, wszelkich jubileuszy"
      title="fotografia okolicznościowa"
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
    title: 'PAKIET PODSTAWOWY 500 zł',
    count: 100,
    desc: ['Jestem z Wami przez 2 godziny', 'Pamiątkowe zdjęcia całej rodziny i gośći', 'Mini sesja jubilata, pary itd.', 'Autorska obróbka graficzna', 'Wydruk na jedwabnym papierze fotograficznym w formacie 10/15 cm', 'Pudełko na zdjęcia', 'Zdjęcia na płycie', 'Galeria On-line', 'Możliwość dokupienia : Mini albumu (100ł) , albumu w formacie 20/20 (150 zł) lub albumu w formacie 25/25 (240 zł)']
  },
  {
    id: 2,
    title: 'PAKIET ZDJĘĆ PREMIUM 600 ZŁ',
    count: 200,
    desc: ['Jestem z Wami przez 3 godziny', 'Pamiątkowe zdjęcia całej rodziny i gości', 'Mini sesja jubilata, pary itd.', 'Autorska obróbka graficzna', 'Wydruk na jedwabnym papierze fotograficznym w formacie 10/15 cm', 'Pudełko na zdjęcia', 'Zdjęcia na płycie', 'Galeria On-line', 'Możliwość dokupienia : Mini albumu (100ł) , albumu w formacie 20/20 (150 zł) lub albumu w formacie 25/25 (240 zł)']
  }

]

export default {
  name: 'OccasionalOffer',
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
