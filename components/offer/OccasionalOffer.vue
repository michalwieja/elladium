<template>
  <div class="main-offer">
    <section-title
      subtitle="dotyczy reportażu komunijnego, chrztu, ślubu cywilnego, wszelkich jubileuszy"
      title="fotografia okolicznościowa"
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
              <img :src="dot" alt="" width="15px">
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
import flower1 from '../../assets/flower/flower1.svg'
import flower5 from '../../assets/flower/flower5.svg'
import dot from '../../assets/flower/flower-dot.svg'

const offerCards = [
  {
    id: 1,
    flower: flower1,
    title: 'PAKIET PODSTAWOWY 500 zł',
    count: 100,
    desc: ['Jestem z Wami przez 2 godziny', 'Pamiątkowe zdjęcia całej rodziny i gośći', 'Mini sesja jubilata, pary itd.', 'Autorska obróbka graficzna', 'Wydruk na jedwabnym papierze fotograficznym w formacie 10/15 cm', 'Pudełko na zdjęcia', 'Zdjęcia na płycie', 'Galeria On-line', 'Możliwość dokupienia : Mini albumu (100ł) , albumu w formacie 20/20 (150 zł) lub albumu w formacie 25/25 (240 zł)']
  },
  {
    id: 2,
    flower: flower5,
    title: 'PAKIET ZDJĘĆ PREMIUM 600 ZŁ',
    count: 200,
    desc: ['Jestem z Wami przez 3 godziny', 'Pamiątkowe zdjęcia całej rodziny i gości', 'Mini sesja jubilata, pary itd.', 'Autorska obróbka graficzna', 'Wydruk na jedwabnym papierze fotograficznym w formacie 10/15 cm', 'Pudełko na zdjęcia', 'Zdjęcia na płycie', 'Galeria On-line', 'Możliwość dokupienia : Mini albumu (100ł) , albumu w formacie 20/20 (150 zł) lub albumu w formacie 25/25 (240 zł)']
  }

]

export default {
  name: 'OccasionalOffer',
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
