<template>
  <footer class="footer">
    copyright
    <mw-logo />
    {{ year }}
  </footer>
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
