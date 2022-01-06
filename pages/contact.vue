<template>
  <div class="container">
    <SectionTitle subtitle="Gdzie nas znaleźć?" title="Kontakt" />
    <div class="contact-page">
      <div class="contact-page__map">
        mapa
      </div>
      <div class="contact-page__data">
        <RegisterData />
        <Appointments />
        <WhereToFindUs />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../components/home/SectionTitle.vue'
import Appointments from '../components/Appointments.vue'
import WhereToFindUs from '../components/WhereToFindUs.vue'
import RegisterData from '../components/RegisterData.vue'

export default {
  components: {
    RegisterData,
    WhereToFindUs,
    Appointments,
    SectionTitle
  }
}
</script>
