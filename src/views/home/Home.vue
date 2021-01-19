<template>
  <back-ground />
  <div id="wrapper">
    <ask-wrapper @click="pushAskRoute"></ask-wrapper>
    <question-wrapper :questions="questions" :pushAnswerRoute="pushAnswerRoute">
      <template #profile="{ user }">
        <img :src="user.profile_url" alt="" />
      </template>
      <template #title="{ user }">
        {{ user.username }}的其他回答（{{ questions.length }}）
      </template>
    </question-wrapper>
  </div>
</template>

<script>
// @ is an alias to /src
import BackGround from "@/components/BackGround.vue";
import AskWrapper from "@/components/AskWrapper.vue";
import QuestionWrapper from "@/components/QuestionWrapper.vue";

export default {
  name: "Home",
  data() {
    return {
      questions: []
    };
  },
  created() {
    this.$axios.get("/question").then(res => {
      this.questions = res;
    });
  },
  components: {
    BackGround,
    AskWrapper,
    QuestionWrapper
  },
  methods: {
    pushAskRoute() {
      this.$router.push("/ask");
    },
    pushAnswerRoute(question) {
      this.$router.push("/answer/" + question.id);
    }
  }
};
</script>

<style scoped>
#wrapper {
  width: 90vw;
  margin: 0 auto;
  padding-top: 25vh;
}
.question-wrapper {
  margin-top: 25vh;
}
.profile img {
  width: 100%;
  height: auto;
}
</style>
