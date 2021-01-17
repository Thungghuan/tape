<template>
  <div id="wrapper">
    <ask-wrapper @click="pushAskRoute"></ask-wrapper>
    <question-wrapper />
  </div>
</template>

<script>
// @ is an alias to /src
import AskWrapper from "@/components/AskWrapper.vue";
import QuestionWrapper from "@/views/home/QuestionWrapper.vue";

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
#wrapper {
  width: 90vw;
  margin: 0 auto;
  padding-top: 25vh;
}
</style>
