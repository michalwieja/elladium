<template>
  <div class="section-title">
    <div class="section-title__title">
      {{ title }}
    </div>
    <div class="section-title__subtitle">
      {{ subtitle }}
    </div>
    <span class="section-title__border" />
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
    }
  }
}
</script>
