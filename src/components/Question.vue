<template>
  <div class="question">
    <div class="ask-time">{{ $getTime(question.date) }}</div>
    <div class="ask-text">
      <span>{{ question.question }}</span>
    </div>
    <div class="more-btn">&gt;</div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: Object
  }
};
</script>

<style scoped>
.question {
  width: 80vw;
  background-color: #ffffff;
  border-radius: 3vw;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.ask-time {
  height: 5vh;
  line-height: 5vh;
  margin-left: 5vw;
  color: #6b6b6b;
  font-size: 0.6em;
  user-select: none;
}
.ask-text {
  width: 70vw;
  min-height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f1f1f;
}
.more-btn {
  width: 4vw;
  height: 5vh;
  line-height: 4vh;
  color: #000000;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.4em;
  font-weight: 800;
  position: relative;
  left: 72vw;
  user-select: none;
}
</style>
