<template>
  <div class="wrapper">
    <div class="question">
      <span>{{ question.question }}</span>
      <div class="date">{{ question.date }}</div>
    </div>
    <div class="answer">
      <slot name="answer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerCom",
  props: {
    user: Object,
    question: Object
  }
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.question,
.answer {
  width: 85vw;
  border-radius: 4vw;
  box-shadow: 0 2px 4px #9c9c9c;
  position: relative;
  margin: 0 auto;
  background-color: #ffffff;
  font-family: "黑体";
}
.question {
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.question .date {
  position: absolute;
  top: 25vh;
  left: 5vw;
  font-size: 0.6em;
  color: #9c9c9c;
}
.answer {
  height: 50vh;
  overflow: hidden;
}
</style>
