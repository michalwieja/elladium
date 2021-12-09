<template>
  <div class="faq">
    <div class="container">
      <SectionTitle subtitle="najczęściej zadawane pytania" title="faq" />
      <div>
        <FaqExpand
          v-for="faq in faqList"
          :key="faq.id"
          :answear="faq.answear"
          :question="faq.question"
        />
      </div>
    </div>
  </div>
</template>

<script>

import SectionTitle from './SectionTitle.vue'
import FaqExpand from './FaqExpand.vue'

const faqList = [
  {
    id: 1,
    question: 'CZY SAMA WYBIERASZ MIEJSCE NA SESJE?',
    answear: 'Tak, mam wiele ładnych sprawdzonych miejscówek. Jestem jednak otwarta na Wasze propozycje.'
  }, {
    id: 2,
    question: 'CZY O GARDEROBĘ MUSIMY POSTARAĆ SIĘ SAMI?',
    answear: 'Posiadam mobilną garderobę dla przyszłych mam oraz dla dzieci w rozmiarze ( 54 cm. Do 130 cm)'
  }, {
    id: 3,
    question: 'W JAKIM STYLU NAJLEPIEJ UBRAĆ SIĘ NA SESJĘ?',
    answear: 'W takim, jaki nabradziej lubicie i w którym czujecie się sobą!\n' +
      'Przed sesją wysyłąm na maila informacje dotyczące stroju.'
  }, {
    id: 4,
    question: 'JAK PRZYGOTOWAĆ MIESZKANIE DO NOWORODKOWEJ SESJI DOMOWEJ?',
    answear: 'Wszystkie onformacje dostaniecie na maila.'
  }, {
    id: 5,
    question: 'CZY ORGANIZUJESZ SESJE STYLIZOWANE I MINI SESJE?',
    answear: 'Tak, organizuję sezonowe Mini Sesje (Boże Narodzenie, Wielkanoc, Jesienne)\n' +
      'Jeśli marzy Ci się stylizowana sesja z okazji urodzin dzieciaczka, to oczywiście taką przygotuję:)'
  },
  {
    id: 5,
    question: 'JAKIM APARATEM FOTOGRAFUJESZ?',
    answear: 'Pracuję na sprzęcie firmy Canon'
  },
  {
    id: 5,
    question: 'JAK DŁUGO CZEKA SIĘ NA ZDJĘCIA?',
    answear: 'Zdjęcia w galerii On-line dostaniecie ode mnie w przeciągu dwóch tygodni od wykonania sesji.'
  },
  {
    id: 5,
    question: 'CZY POSIADASZ STUDIO?',
    answear: 'Tak, mam małe domowe studio. Jest odpowienie na sesję dziecięce i portrtowe.'
  }
]

export default {
  name: 'Faq',
  components: {
    FaqExpand,
    SectionTitle
  },
  data () {
    return {
      faqList
    }
  }

}
</script>
