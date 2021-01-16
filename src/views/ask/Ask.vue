<template>
  <div class="wrapper">
    <div class="ask-window">
      <div class="ask-title">
        <div>Ask me anything! 欢迎向我匿名提问！</div>
      </div>
      <div class="question-input">
        <textarea
          placeholder="请在此处撰写您的问题"
          v-model="question"
        ></textarea>
      </div>
      <button
        class="post-btn"
        :disabled="!question.length"
        @click="postQuestion"
      >
        发 送
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: ""
    };
  },
  methods: {
    postQuestion() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ask-window {
  width: 80vw;
  height: 60vh;
  border-radius: 4vw;
  box-shadow: 0 0 5px #9c9c9c;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.ask-title {
  width: 80%;
  height: 20%;
  font-size: 1.2em;
  font-weight: 600;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.question-input {
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #e9e9e9;
  border-radius: 2vw;
}
.question-input textarea {
  width: 90%;
  height: 85%;
  outline: none;
  border: none;
  resize: none;
  background-color: transparent;
  font-size: 0.8em;
  font-family: "黑体";
}
.post-btn {
  width: 80%;
  height: 7vh;
  background-color: #000000;
  border-radius: 3.5vh;
  color: #ffffff;
  font-size: 1em;
  line-height: 5vh;
  cursor: pointer;
  user-select: none;
}
.post-btn[disabled] {
  background-color: #808080;
}
</style>
