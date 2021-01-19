<template>
  <div class="question-wrapper">
    <div class="question-head">
      <div class="profile">
        <slot name="profile" :user="user"></slot>
      </div>
      <div class="title" :style="titleFontSize">
        <slot name="title" :user="user"></slot>
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
      user: this.$user
    };
  },
  props: {
    questions: Array,
    pushAnswerRoute: Function
  },
  components: {
    Question
  },
  computed: {
    titleFontSize() {
      return {
        "font-size": `${1.5 -
          Math.floor((this.user.username.length + 8) / 4) * 0.1}em`
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
  /* margin-top: 25vh; */
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
.title {
  width: 60vw;
  color: black;
  font-weight: 600;
}
</style>
