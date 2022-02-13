<template>
  <div class="photo">
    <div class="close" @click="$router.back()">
      X
    </div>
    <img
      :alt="Photography"
      :src="`/gallery/${$route.params.id}/${$route.params.photo}`"
      class="img"
    >
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
.photo {
  position: fixed;
  inset: 0;
  z-index: 500000;
  background: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vh;

  .wrapper {
    width: 100%;
    height: 100%;

  }

  .img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

</style>
