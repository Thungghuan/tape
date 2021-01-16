<template>
  <div class="question-wrapper">
    <div class="question-head">
      <div class="profile">
        <img :src="profile_url" alt="" />
      </div>
      <div class="title" :style="titleFontSize">
        {{ username }}的其他回答（{{ questions.length }}）
      </div>
    </div>
    <question
      v-for="(question, key) in questions"
      :question="question"
      :key="key"
    />
  </div>
</template>

<script>
import Question from "@/components/Question.vue";

export default {
  name: "QuestionWrapper",
  data() {
    return {
      username: "Huan",
      profile_url: "http://cdn.thungghuan.xyz/lzh-68888866.jpg",
      questions: [
        {
          ask_time: "3分钟前",
          question_text: "这是一个问题123456？"
        },
        {
          ask_time: "3分钟前",
          question_text: "这是一个问题？"
        },
        {
          ask_time: "3分钟前",
          question_text: "这是一个问题？"
        },
        {
          ask_time: "3分钟前",
          question_text: "这是一个问题？"
        }
      ]
    };
  },
  components: {
    Question
  },
  computed: {
    titleFontSize() {
      return {
        "font-size": `${1.5 -
          Math.floor((this.username.length + 8) / 4) * 0.1}em`
      };
    }
  }
};
</script>

<style scoped>
.question-wrapper {
  width: 90vw;
  margin: 0 auto;
  /* background-color: black; */
  margin-top: 25vh;
  margin-bottom: 5vh;
}

.question-head {
  width: 85vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2vh;
}
.profile {
  width: 18vw;
  height: 18vw;
  box-shadow: 0 0 3px #000000;
  border-radius: 50%;
  overflow: hidden;
}
.profile img {
  width: 100%;
  height: auto;
}
.title {
  width: 60vw;
  color: black;
  font-weight: 600;
}
</style>
