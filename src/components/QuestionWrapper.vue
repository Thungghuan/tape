<template>
  <div class="question-wrapper">
    <div class="title"></div>
    <question />
    <question />
    <question />
    <question />
    <question />
    <question />
  </div>
</template>

<script>
import Question from "@/components/Question.vue";

export default {
  name: "QuestionWrapper",
  components: {
    Question
  }
};
</script>

<style scoped>
.question-wrapper {
  width: 80vw;
  margin: 0 auto;
  background-color: black;
  margin-top: 35vh;
}

.title {
  height: 200px;
  background-color: #ff0;
}
</style>
