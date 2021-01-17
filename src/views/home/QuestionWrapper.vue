<template>
  <div class="question-wrapper">
    <div class="question-head">
      <div class="profile">
        <img :src="user.profile_url" alt="" />
      </div>
      <div class="title" :style="titleFontSize">
        {{ user.username }}的其他回答（{{ questions.length }}）
      </div>
    </div>
    <question
      v-for="question in questions"
      :question="question"
      :key="question.id"
      @click="pushAnswerRoute(question)"
    />
  </div>
</template>

<script>
import Question from "@/components/Question.vue";

export default {
  name: "QuestionWrapper",
  data() {
    return {
      user: {
        username: "Huan",
        profile_url: "http://cdn.thungghuan.xyz/lzh-68888866.jpg"
      },
      questions: []
    };
  },
  components: {
    Question
  },
  created() {
    this.$axios.get("/question").then(res => {
      this.questions = res;
    });
  },
  computed: {
    titleFontSize() {
      return {
        "font-size": `${1.5 -
          Math.floor((this.user.username.length + 8) / 4) * 0.1}em`
      };
    }
  },
  methods: {
    pushAnswerRoute(question) {
      this.$router.push("/answer/" + question.id);
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
