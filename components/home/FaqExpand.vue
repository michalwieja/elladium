<template>
  <div class="faq-row">
    <div @click="handleOpen">
      {{ question }}
    </div>
    <transition name="fade">
      <div v-show="open">
        {{ answear }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FaqExpand',
  props: {
    question: {
      type: String
    },
    answear: {
      type: String
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    handleOpen () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss">
.faq-row {
  border-left: 3px solid #3a3a3a;
  padding-left: 25px;
  cursor: pointer;
  margin-bottom: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  max-height: 100px;

}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
  max-height: 0;
}

</style>
