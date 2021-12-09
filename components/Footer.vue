<template>
  <div class="container">
    <footer class="footer">
      copyright
      <mw-logo />
      {{ year }}
    </footer>
  </div>
</template>

<script>
import MwLogo from './mw-logo.vue'

export default {
  name: 'Footer',
  components: { MwLogo },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
