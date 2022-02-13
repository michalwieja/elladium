<template>
  <div>
    <div class="card">
      <div class="img">
        <img :alt="img" :src="img">
      </div>
      <div class="quote">
        "{{ quote }}"
      </div>
      <div class="name">
        {{ name }}<span v-if="company">, {{ company }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    quote: { type: String },
    name: { type: String },
    company: { type: String },
    img: {
      default: null
    }
  }
}
</script>
