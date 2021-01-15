<template>
  <div class="ask-wrapper">
    <div class="ask-title">
      <div>Ask me anything! 欢迎向我匿名提问！</div>
    </div>
    <div class="ask-tip">
      点击此处向我匿名提问
    </div>
  </div>
</template>

<script>
export default {
  name: "AskWrapper"
};
</script>

<style scoped>
.ask-wrapper {
  width: 80vw;
  height: 30vh;
  border-radius: 4vw;
  box-shadow: 0 0 5px #9c9c9c;
  position: relative;
  margin: 0 auto;
  background-color: #ffffff;
  cursor: pointer;
}
.ask-title {
  width: 80%;
  position: relative;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2em;
  font-weight: 600;
  color: #000000;
}
.ask-tip {
  position: relative;
  top: 45%;
  transform: translateY(-50%);
  color: #969696;
  font-family: "黑体";
  font-weight: 400;
}
</style>
