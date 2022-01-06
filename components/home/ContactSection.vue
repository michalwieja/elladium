<template>
  <div class="contact">
    <div class="container">
      <SectionTitle dark subtitle="tu nas znajdziesz" title="kontakt" />
      <div class="content">
        <div class="contact__col">
          <Appointments />
        </div>
        <div class="contact__col">
          <WhereToFindUs />
        </div>
        <div class="desktop-only contact__col">
          <div class="contact__title">
            Menu
          </div>
          <div v-for="menu in menuLinks" :key="menu.path">
            <NuxtLink :to="menu.path">
              {{ menu.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="contact__col">
          <div class="contact__title">
            Socials
          </div>
          <SocialIcons with-name />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Appointments from '../Appointments.vue'
import WhereToFindUs from '../WhereToFindUs.vue'
import SocialIcons from '../SocialIcons.vue'
import SectionTitle from './SectionTitle.vue'
import menuLinks from '@/config/menu.js'

export default {
  name: 'ContactSection',
  components: {
    SocialIcons,
    WhereToFindUs,
    Appointments,
    SectionTitle
  },
  data () {
    return {
      menuLinks
    }
  }
}
</script>
