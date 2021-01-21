<template>
  <div id="background">
    <img :src="background_image_url" />
  </div>
</template>

<script>
export default {
  name: "BackGround",
  data() {
    return {
      background_image_url: this.$user.background_url
    };
  }
};
</script>

<style scoped>
#background {
  position: fixed;
  z-index: -1;
}

#background img {
  width: 100vw;
  height: auto;
  max-height: 100vh;
  object-fit: cover;
}
</style>
