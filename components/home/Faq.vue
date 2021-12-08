<template>
  <div class="about">
    <div class="container">
      <SectionTitle dark subtitle="najczęściej zadawane pytania" title="faq" />
      <FaqExpand />
    </div>
  </div>
</template>

<script>

import SectionTitle from './SectionTitle.vue'
import FaqExpand from './FaqExpand.vue'

export default {
  name: 'Faq',
  components: {
    FaqExpand,
    SectionTitle
  }

}
</script>
