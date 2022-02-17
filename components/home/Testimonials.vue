<template>
  <div class="container">
    <div class="testimonials">
      <SectionTitle subtitle="sa najwazniejsi" title="opinie moich klientow" />
      <VueSlickCarousel v-bind="settings">
        <TestimonialCard
          v-for="card in testimonials"
          :key="card.img"
          :company="card.company"
          :img="card.img"
          :name="card.name"
          :quote="card.quote"
        />
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import avatar1 from '@/assets/img/testimonial/paulina-malachowska.jpg'
import avatar2 from '@/assets/img/testimonial/ania-lempart.jpg'
import avatar3 from '@/assets/img/testimonial/gili.jpg'
import avatar4 from '@/assets/img/testimonial/gosia-milewska.jpg'

const testimonials = [
  {
    img: avatar1,
    quote: 'Polecam z całego serca Elę.' +
      ' Zdjęcia które nam zrobiła są śliczne, prawdziwe i pełne emocji!\n' +
      ' Mogłabym na nie patrzeć godzinami. Wszyscy jesteśmy na nich tacy piękni... A nasz synek taki malutki. Atmosfera na sesji jest nad wyraz ciepła i luźna.\n' +
      'Mamy super pamiątkę' +
      'Na pewno będziemy korzystali z usług Eli',
    name: 'Paulina Małachowska'

  }, {
    img: avatar2,
    quote: 'Sesja z Elą to niebywała przyjemność. Jej wprawne oko potrafi uchwycić nawet uśmiech noworodka. Miałam przyjemność mieć kilka sesji i każda z nich była bardziej spotkaniem towarzyskim niż pozowaniem w nienaturalnych pozach. Ela potrafi niesamowicie rozluźnić atmosferę sesji jednoczenie nie umyka jej ani sekunda. Polecam każdemu kto szuka naturalnej sesji w cudownym towarzystwie prawdziwej Profesjonalistki.  ',
    name: 'Ania Lempart'
  }, {
    img: avatar3,
    quote: 'Szczerze polecam współpracę z Elą. Za Nami wiele spotkań w różnych okolicznościach wszystkie owocne i satysfakcjonujące. Sesje biznesowe, które są dopasowane do potrzeb i genialnie sprawdzają się w promocji firmy i sesje rodzinne, na których czujemy zaopiekowanie o rozluźnieni przez co ujęcia są fantastyczne.  Pasja, serce i talent do fotografii muszą dać świetny efekt i tak właśnie działa Elladium',
    name: 'Edyta Staszowska',
    company: 'giligili.pl'
  },
  {
    img: avatar4,
    quote: 'Pierwsza sesja: ciążowa, magiczna. Później już w roli głównej nasze oczko w głowie, z rodzicami ewentualnie w tle. Mój syn tak polubił sesje u Eli, że nie wiem czy to się nie skończy jakimś tap model. Zdjęcia u Eli kojarzą mu się po prostu ze świetną zabawą. Dla nas to wspaniały dziennik jego dorastania. Polecam i jestem przekonana, że zostaniecie z Elą na lata, tak jak my.',
    name: 'Gosia Milewska'

  },
  {
    img: avatar1,
    quote: 'Polecam z całego serca Elę.' +
      ' Zdjęcia które nam zrobiła są śliczne, prawdziwe i pełne emocji!\n' +
      ' Mogłabym na nie patrzeć godzinami. Wszyscy jesteśmy na nich tacy piękni... A nasz synek taki malutki. Atmosfera na sesji jest nad wyraz ciepła i luźna.\n' +
      'Mamy super pamiątkę' +
      'Na pewno będziemy korzystali z usług Eli',
    name: 'Paulina Małachowska'

  }, {
    img: avatar2,
    quote: 'Sesja z Elą to niebywała przyjemność. Jej wprawne oko potrafi uchwycić nawet uśmiech noworodka. Miałam przyjemność mieć kilka sesji i każda z nich była bardziej spotkaniem towarzyskim niż pozowaniem w nienaturalnych pozach. Ela potrafi niesamowicie rozluźnić atmosferę sesji jednoczenie nie umyka jej ani sekunda. Polecam każdemu kto szuka naturalnej sesji w cudownym towarzystwie prawdziwej Profesjonalistki.  ',
    name: 'Ania Lempart'
  }, {
    img: avatar3,
    quote: 'Szczerze polecam współpracę z Elą. Za Nami wiele spotkań w różnych okolicznościach wszystkie owocne i satysfakcjonujące. Sesje biznesowe, które są dopasowane do potrzeb i genialnie sprawdzają się w promocji firmy i sesje rodzinne, na których czujemy zaopiekowanie o rozluźnieni przez co ujęcia są fantastyczne.  Pasja, serce i talent do fotografii muszą dać świetny efekt i tak właśnie działa Elladium',
    name: 'Edyta Staszowska',
    company: 'giligili.pl'
  },
  {
    img: avatar4,
    quote: 'Pierwsza sesja: ciążowa, magiczna. Później już w roli głównej nasze oczko w głowie, z rodzicami ewentualnie w tle. Mój syn tak polubił sesje u Eli, że nie wiem czy to się nie skończy jakimś tap model. Zdjęcia u Eli kojarzą mu się po prostu ze świetną zabawą. Dla nas to wspaniały dziennik jego dorastania. Polecam i jestem przekonana, że zostaniecie z Elą na lata, tak jak my.',
    name: 'Gosia Milewska'

  }
]
export default {
  name: 'Testimonials',
  components: { SectionTitle },
  data () {
    return {
      testimonials,
      settings: {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>
