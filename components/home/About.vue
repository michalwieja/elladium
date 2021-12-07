<template>
  <div class="about">
    <div class="container">
      <SectionTitle dark subtitle="kim jestem" title="o mnie" />
      <div class="content">
        <div class="text">
          <p>
            Cześć, jestem Ela. Uwielbiam naturalną fotografię, psy i książki kucharskie.
            Najlepiej czuję się na łonie natury i w mojej kuchni.
          </p>
          <p>
            Fotografuję ludzi już od ponad 10 lat. Dziś wiem, że fotografia naturalna to moja
            specjalność. Naturalne
            światło, roześmiani ludzie, codzienność. Takie zdjęcia są mi najbliższe i wiem, że
            stanowią też
            największą wartość.
          </p>
          <p>
            Jeszcze na studiach dostałam od taty pierwszą lustrzankę. Zaczęłam fotografować psy
            oraz
            moich
            przyjaciół „psiarzy”. Potem były pierwsze próby sesji rodzinnych.
          </p>
          <p>
            Gdy w 2014 roku zostałam po raz pierwszy mamą, aparat towarzyszył mi właściwie zawsze.
            Codzienne
            emocje, drobne detale, ważne gesty, ciekawe perspektywy i światło, które maluje
            rzeczywistość. Dzięki
            zdjęciom staram się budować pamiętnik dla moich dzieci. W taki sam sposób podchodzę do
            sesji z
            klientami. Czas spędzony na sesji jest wycinkiem życia, który chcę dla Was zapisać na
            zawsze.
          </p>
        </div>
        <div class="img">
          <img :src="ela" alt="ela">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SectionTitle from './SectionTitle.vue'
import ela from '@/assets/img/ela.png'

export default {
  name: 'About',
  components: {
    SectionTitle
  },
  data () {
    return {
      ela
    }
  }
}
</script>
