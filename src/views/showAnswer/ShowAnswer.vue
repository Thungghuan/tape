<template>
  <back-ground />
  <answer-com :user="user" :question="question">
    <template #answer>
      <div class="head">
        <div class="profile">
          <img :src="user.profile_url" alt="" />
        </div>
        <div class="text">
          <div class="username">{{ user.username }}</div>
          <div class="answer-date">{{ question.answer_date }}</div>
        </div>
      </div>
      <div class="content">
        {{ question.answer }}
      </div>
    </template>
  </answer-com>
</template>

<script>
import BackGround from "@/components/BackGround.vue";
import AnswerCom from "@/components/AnswerCom.vue";

export default {
  name: "ShowAnswer",
  components: {
    BackGround,
    AnswerCom
  },
  data() {
    return {
      user: this.$user,
      question: {}
    };
  },
  created() {
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

<style scoped>
.head {
  width: 100%;
  height: 20%;
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.head .profile {
  width: 10vw;
  height: 10vw;
  border-radius: calc(5vw + 2px);
  border: 2px solid #000000;
  overflow: hidden;
}
.head .profile img {
  width: 100%;
  height: auto;
}
.head .text {
  width: 70%;
  height: 10vh;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.head .username {
  color: #000000;
  font-size: 1.2em;
}
.head .answer-date {
  color: #9c9c9c;
  font-size: 0.4em;
}
.content {
  width: 100%;
  height: 32vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 450px) {
  .head .profile {
    width: 45px;
    height: 45px;
  }
}
</style>
