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
    question: 'Czy sama wybierasz miejsce na sesję?',
    answear: 'Tak, mam wiele ładnych sprawdzonych miejscówek. Jestem jednak otwarta na Wasze propozycje.'
  }, {
    id: 2,
    question: 'Czy o garderobę musimy postarać się sami?',
    answear: 'Posiadam mobilną garderobę dla przyszłych mam oraz dla dzieci w rozmiarze ( 54 cm. Do 130 cm)'
  }, {
    id: 3,
    question: 'W jakim stylu najlepiej ubrać się na sesję?',
    answear: 'W takim, jaki nabradziej lubicie i w którym czujecie się sobą!\n' +
      'Przed sesją wysyłąm na maila informacje dotyczące stroju.'
  }, {
    id: 4,
    question: 'Jak przygotować mieszkanie do noworodkowej sesji domowej?',
    answear: 'Wszystkie informacje dostaniecie na maila.'
  }, {
    id: 6,
    question: 'Czy organizujesz sesje stylizowane i mini sesje?',
    answear: 'Tak, organizuję sezonowe Mini Sesje (Boże Narodzenie, Wielkanoc, Jesienne)\n' +
      'Jeśli marzy Ci się stylizowana sesja z okazji urodzin dzieciaczka, to oczywiście taką przygotuję:)'
  },
  {
    id: 7,
    question: 'Jakim aparatem fotografujesz?',
    answear: 'Pracuję na sprzęcie firmy Canon'
  },
  {
    id: 8,
    question: 'Jak długo czeka sie na zdjęcia?',
    answear: 'Zdjęcia w galerii On-line dostaniecie ode mnie w przeciągu dwóch tygodni od wykonania sesji.'
  },
  {
    id: 9,
    question: 'Czy posiadasz studio?',
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
