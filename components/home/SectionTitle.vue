<template>
  <div class="section-title">
    <div class="section-title__title">
      {{ title }}
    </div>
    <div class="section-title__subtitle">
      {{ subtitle }}
    </div>
    <!--    <span :class="{dark}" class="section-title__border" />-->
    <div class="section-title__flower">
      <img :src="require('../../assets/flower/horizontal-pink.svg')" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
