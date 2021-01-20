<template>
  <back-ground />
  <answer-com :user="user" :question="question">
    <template #answer>
      <div class="answer-wrapper">
        <div class="head">
          <div class="profile">
            <img :src="user.profile_url" alt="" />
          </div>
          <div class="btn-wrapper">
            <div class="text" :style="{ color: publicTextColor }">
              {{ publicStatus }}
            </div>
            <input type="checkbox" id="public" v-model="isPublic" />
            <label for="public">
              <div class="label-btn"></div>
            </label>
          </div>
        </div>
        <div class="text-area">
          <textarea
            placeholder="请在此处撰写您的回答"
            v-model="question.answer"
          ></textarea>
        </div>
        <div class="post-btn-wrapper">
          <button class="post-btn" :disabled="!isChanged" @click="post">
            发送
          </button>
        </div>
      </div>
    </template>
  </answer-com>
</template>

<script>
import BackGround from "@/components/BackGround.vue";
import AnswerCom from "@/components/AnswerCom.vue";

export default {
  name: "AdminAnswer",
  data() {
    return {
      id: this.$route.params.id,
      user: this.$user,
      question: {
        public: 1
      },
      oldAnswer: "",
      isPublic: false
    };
  },
  created() {
    this.$axios({
      url: "/all/" + this.id
    }).then(res => {
      this.question = res;
      this.question.date = this.$getTime(this.question.date);
      if (this.question.answer_date) {
        this.question.answer_date = this.$getTime(this.question.answer_date);
      }
      this.isPublic = this.question.public ? true : false;
      this.oldAnswer = this.question.answer;
    });
  },
  computed: {
    isChanged() {
      if (!this.question.answer) {
        return false;
      } else {
        if (
          this.isPublic !== this.currentPublicStatus ||
          this.question.answer !== this.oldAnswer
        ) {
          return true;
        } else {
          return false;
        }
      }
    },
    currentPublicStatus() {
      return this.question.public ? true : false;
    },
    publicStatus() {
      return this.isPublic ? "公开" : "未公开";
    },
    publicTextColor() {
      return this.isPublic ? "blue" : "red";
    }
  },
  methods: {
    post() {
      this.$axios({
        url: "/answer/" + this.id,
        method: "post",
        data: {
          public: this.isPublic ? 1 : 0,
          answer: this.question.answer
        }
      }).then(res => {
        console.log(res);
        this.$router.replace("/admin");
      });
    }
  },
  components: {
    BackGround,
    AnswerCom
  }
};
</script>

<style scoped>
.answer-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.head {
  width: 100%;
  height: 25%;
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.head .profile {
  width: 14vw;
  height: 14vw;
  border-radius: 7vw;
  overflow: hidden;
}
.head .profile img {
  width: 100%;
  height: auto;
}
.head .username {
  color: #000000;
  font-size: 1.2em;
}
.text-area {
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #e9e9e9;
  border-radius: 2vw;
}
.text-area textarea {
  width: 90%;
  height: 85%;
  outline: none;
  border: none;
  resize: none;
  background-color: transparent;
  font-size: 0.8em;
  font-family: "黑体";
}
.post-btn-wrapper {
  width: 60%;
}
.post-btn {
  width: 60%;
  height: 6vh;
  background-color: #000000;
  border: none;
  border-radius: 3vh;
  color: #ffffff;
  font-size: 1em;
  line-height: 5vh;
  cursor: pointer;
  outline: none;
  user-select: none;
}
.post-btn[disabled] {
  background-color: #808080;
}
.btn-wrapper {
  width: 80px;
  max-width: 30vw;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.btn-wrapper > .text {
  font-family: "宋体";
  font-size: 14px;
}
.label-btn {
  width: 54px;
  height: 30px;
  border-radius: 25px;
  background-color: #e9e9e9;
  position: relative;
}
.label-btn::after {
  content: "";
  width: 24px;
  height: 24px;
  border-radius: 12px;
  position: absolute;
  background-color: #ffffff;
  top: 50%;
  transform: translate(-24px, -50%);
}
.btn-wrapper input {
  display: none;
}
.btn-wrapper input:checked + label .label-btn {
  background-color: #30d158;
}
.btn-wrapper input:checked + label .label-btn::after {
  transform: translate(0px, -50%);
}
</style>
