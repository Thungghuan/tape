<template>
  <back-ground></back-ground>
  <question-wrapper
    :questions="questions"
    :pushAnswerRoute="pushAnswerRoute"
    :isShowStatus="true"
  >
    <template #profile="{ user }">
      <img :src="user.profile_url" alt="" />
    </template>
    <template #title="{ user }">
      {{ user.username }}的所有问题（{{ questions.length }}）
    </template>
  </question-wrapper>
</template>

<script>
import BackGround from "@/components/BackGround.vue";
import QuestionWrapper from "@/components/QuestionWrapper.vue";

export default {
  name: "AllQuestions",
  data() {
    return {
      questions: []
    };
  },
  created() {
    this.$axios({
      url: "/all"
    }).then(res => {
      console.log(res);
      this.questions = res;
    });
  },
  components: {
    BackGround,
    QuestionWrapper
  },
  methods: {
    pushAnswerRoute(question) {
      this.$router.push("/admin/answer/" + question.id);
    }
  }
};
</script>

<style scoped>
.question-wrapper {
  padding-top: 2vh;
}
.profile img {
  width: 100%;
  height: auto;
}
</style>
