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
      background_image_url:
        "https://pic1.zhimg.com/80/v2-6c5e3fcffd92c1149c28e1d075881043_720w.jpg?source=1940ef5c"
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
}
</style>
