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
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import avatar1
  from '@/assets/img/Unsplash-Avatars_0004s_0005_laurence-cruz-P7yvmajPvkM-unsplash.png'
import avatar2
  from '@/assets/img/Unsplash-Avatars_0004s_0007_nathan-dumlao-Ju--S80ezyU-unsplash.png'
import avatar3 from '@/assets/img/Unsplash-Avatars_0004s_0027_caleb-george-FSsDeev6Ico-unsplash.png'

const testimonials = [
  {
    img: avatar1,
    quote: 'tetur adipisicing elit. Amet dolore eaque eos itaque labore laborum neque odio quam sed suscipit, temporibu',
    name: 'mike',
    company: 'mw.pl'
  }, {
    img: avatar2,
    quote: 'e odio porro qui quia quos reprehenderit similique sint, temporibus tenetur',
    name: 'edi',
    company: 'giligili.pl'
  }, {
    img: avatar3,
    quote: 'adipisicing elit. Amet dolore eaque eos itaque labore laborum neque odio quam sed',
    name: 'megi',
    company: 'warsztat.edu.pl'
  }
]
export default {
  name: 'Testimonials',
  components: { SectionTitle },
  data () {
    return {
      testimonials,
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 1
      }
    }
  }
}
</script>
