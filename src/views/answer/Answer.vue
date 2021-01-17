<template>
  <div class="wrapper">
    <div class="question">
      <span>{{ question.question }}</span>
      <div class="date">{{ question.date }}</div>
    </div>
    <div class="answer">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "Huan",
        profile_url: "http://cdn.thungghuan.xyz/lzh-68888866.jpg"
      },
      question: {}
    };
  },
  created() {
    this.$axios.get("/question/" + this.$route.params.id).then(res => {
      this.question = res;
      this.question.date = this.$getTime(this.question.date);
      this.question.answer_date = this.$getTime(this.question.answer_date);
    });
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
  font-family: "黑体";
}
.question {
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
