<template>
  <back-ground />
  <answer :user="user" :question="question"></answer>
</template>

<script>
import BackGround from "@/components/BackGround.vue";
import Answer from "@/components/Answer.vue";

export default {
  name: "ShowAnswer",
  components: {
    BackGround,
    Answer
  },
  data() {
    return {
      user: this.$user,
      question: {}
    };
  },
  mounted() {
    this.$axios({
      url: "/question/" + this.$route.params.id
    }).then(res => {
      this.question = res;
      this.question.date = this.$getTime(this.question.date);
      this.question.answer_date = this.$getTime(this.question.answer_date);
    });
  }
};
</script>

<style scoped></style>
