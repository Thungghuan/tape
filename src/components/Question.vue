<template>
  <div class="question">
    <div class="head">
      <div class="ask-time">{{ $getTime(question.date) }}</div>
      <div class="status">
        <div
          class="answer-status"
          v-show="isShowStatus"
          :style="answerStatus.style"
        >
          {{ answerStatus.text }}
        </div>
        <div
          class="public-status"
          v-show="isShowStatus"
          :style="publicStatus.style"
        >
          {{ publicStatus.text }}
        </div>
      </div>
    </div>
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
    question: Object,
    isShowStatus: Boolean
  },
  computed: {
    answerStatus() {
      return {
        style: {
          color: this.question.answer ? "green" : "red"
        },
        text: this.question.answer ? "已回答" : "未回答"
      };
    },
    publicStatus() {
      return {
        style: {
          color: this.question.public > 0 ? "blue" : "red"
        },
        text: this.question.public > 0 ? "公开" : "未公开"
      };
    }
  }
};
</script>

<style scoped>
.question {
  width: 80vw;
  max-width: 360px;
  background-color: #ffffff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
  border-radius: 3vw;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.head {
  width: 100%;
  height: 5vh;
  line-height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.head .ask-time {
  width: 20vw;
  max-width: 90px;
  height: 100%;
  color: #6b6b6b;
  font-size: 0.8em;
  user-select: none;
}
.head .status {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.answer-status,
.public-status {
  width: 50%;
  font-size: 0.9em;
}
.ask-text {
  width: 70vw;
  max-width: 315px;
  min-height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f1f1f;
}
.more-btn {
  width: 4vw;
  max-width: 18px;
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
@media (min-width: 450px) {
  .question {
    border-radius: 13.5px;
  }
  .more-btn {
    left: 324px;
  }
}
</style>
