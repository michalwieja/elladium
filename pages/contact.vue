<template>
  <div class="container">
    <SectionTitle subtitle="Gdzie nas znaleźć?" title="Kontakt" />
    <div class="contact-page">
      <div class="contact-page__map">
        <GmapMap
          :center="{ lat: 50.18101,
                     lng: 18.93926 }"
          :options="mapStyle"
          :zoom="12"
          style="width:100%;  height: 400px;"
        >
          <GmapMarker
            v-for="(m, index) in markers"
            :key="index"
            :clickable="true"
            :draggable="true"
            :position="getPosition(m)"
            @click="center=m.position"
          />
        </GmapMap>
      </div>
      <div class="contact-page__data">
        <RegisterData />
        <Appointments />
        <WhereToFindUs />
      </div>
    </div>
  </div>
</template>

<script>import mapComponentConfig from '../config/mapComponentConfig'

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
  },
  data () {
    return {
      mapStyle: mapComponentConfig,
      markers: {
        0: {
          full_name: 'Elladium',
          lat: 50.18101,
          lng: 18.93926
        }
      }
    }
  },
  methods: {
    getPosition (marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    }
  }
}
</script>
