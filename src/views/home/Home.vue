<template>
  <div id="background">
    <img
      src="https://pic1.zhimg.com/80/v2-6c5e3fcffd92c1149c28e1d075881043_720w.jpg?source=1940ef5c"
    />
  </div>
  <div id="wrapper">
    <ask-wrapper @click="pushAskRoute"></ask-wrapper>
    <question-wrapper />
  </div>
</template>

<script>
// @ is an alias to /src
import AskWrapper from "@/components/AskWrapper.vue";
import QuestionWrapper from "@/components/QuestionWrapper.vue";

export default {
  name: "Home",
  components: {
    AskWrapper,
    QuestionWrapper
  },
  methods: {
    pushAskRoute() {
      this.$router.push("/ask");
    }
  }
};
</script>

<style>
#background {
  position: fixed;
  z-index: -1;
}

#background img {
  width: 100vw;
  height: auto;
}

#wrapper {
  width: 90vw;
  margin: 0 auto;
  padding-top: 25vh;
}
</style>
