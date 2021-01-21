<template>
  <div class="loading-wrapper">
    <img src="@/assets/loading.png" />
  </div>
</template>

<script>
export default {
  name: "LoadingPage"
};
</script>

<style scoped>
.loading-wrapper {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.loading-wrapper img {
  width: 20vw;
  max-width: 90px;
  height: auto;
  max-height: 90px;
  transform: rotate(0deg);
  animation: loading linear infinite 1s;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
