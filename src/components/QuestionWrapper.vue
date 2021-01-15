<template>
  <div class="question-wrapper">
    <div class="question-head">
      <div class="profile">
        <img src="http://cdn.thungghuan.xyz/lzh-68888866.jpg" alt="" />
      </div>
      <div class="title" :style="titleFontSize">{{ username }}的其他回答</div>
    </div>
    <question />
    <question />
    <question />
    <question />
    <question />
    <question />
  </div>
</template>

<script>
import Question from "@/components/Question.vue";

export default {
  name: "QuestionWrapper",
  data() {
    return {
      username: "Huan"
    };
  },
  components: {
    Question
  },
  computed: {
    titleFontSize() {
      return {
        "font-size": `${1.3 - Math.floor(this.username.length / 4) * 0.1}em`
      };
    }
  }
};
</script>

<style scoped>
.question-wrapper {
  width: 80vw;
  margin: 0 auto;
  /* background-color: black; */
  margin-top: 25vh;
}

.question-head {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.profile {
  width: 20vw;
  height: 20vw;
  box-shadow: 0 0 3px #000000;
  border-radius: 50%;
  overflow: hidden;
}
.profile img {
  width: 100%;
  height: auto;
}
.title {
  width: 50vw;
  color: black;
  font-size: 1.2em;
  font-weight: 600;
}
</style>
