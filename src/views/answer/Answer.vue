<template>
  <div class="wrapper">
    <div class="question">
      <span>{{ question.question }}</span>
      <div class="date">{{ question.date }}</div>
    </div>
    <div class="answer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: {},
      questions: [
        {
          id: 1,
          date: "3分钟前",
          question: "这是一个问题123456？",
          answer: "这是一个回答哦654321"
        },
        {
          id: 2,
          date: "3分钟前",
          question: "这是一个问题123456？",
          answer: "这是一个回答哦654321"
        },
        {
          id: 3,
          date: "3分钟前",
          question: "这是一个问题123456？",
          answer: "这是一个回答哦654321"
        },
        {
          id: 4,
          date: "3分钟前",
          question: "这是一个问题123456？",
          answer: "这是一个回答哦654321"
        }
      ]
    };
  },
  created() {
    // 模拟请求问题数据
    let id = this.$route.params.id;
    for (let index in this.questions) {
      if (this.questions[index].id == id) {
        this.question = this.questions[index];
      }
    }
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
}
.question {
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "黑体";
  position: relative;
}
.question .date {
  position: absolute;
  top: 25vh;
  left: 5vw;
  font-size: 0.6em;
  color: #9c9c9c;
}
.answer {
  height: 45vh;
}
</style>
