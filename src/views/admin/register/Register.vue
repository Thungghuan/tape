<template>
  <loading-page v-show="is_loading"></loading-page>
  <admin-form :error_msg="error_msg" :is_error="is_error">
    <template #profile>
      <div class="default_avatar"></div>
    </template>
    <template #text>
      请注册你的管理员账号
    </template>
    <template #username>
      <div class="input">
        <label for="username">
          <img src="@/assets/user.png" alt="" />
        </label>
        <input
          type="text"
          placeholder="用户名"
          id="username"
          v-model="username"
        />
      </div>
    </template>
    <template #password>
      <div class="input">
        <label for="password">
          <img src="@/assets/password.png" alt="" />
        </label>
        <input
          type="password"
          placeholder="密码"
          id="password"
          v-model="password"
        />
      </div>
    </template>
    <template #confirmed>
      <div class="input">
        <label for="confirmed">
          <img src="@/assets/confirmed.png" alt="" />
        </label>
        <input
          type="password"
          placeholder="再次输入密码"
          id="confirmed"
          v-model="confirmed"
          @keyup.enter="keyUpRegister"
        />
      </div>
    </template>
    <template #button>
      <button
        :disabled="!username || !password || !confirmed"
        @click="register"
      >
        注 册
      </button>
    </template>
  </admin-form>
</template>

<script>
import AdminForm from "@/components/AdminForm.vue";
import LoadingPage from "@/components/LoadingPage.vue";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      confirmed: "",
      error_msg: "",
      is_error: false,
      is_loading: false
    };
  },
  methods: {
    register() {
      this.is_loading = true;
      if (this.password.length < 4) {
        this.showError("密码的长度过短");
      } else if (this.password != this.confirmed) {
        this.showError("两次输入的密码不一致");
      } else {
        this.$axios({
          url: "/register",
          method: "post",
          data: {
            username: this.username,
            password: this.password
          }
        })
          .then(res => {
            this.is_loading = false;
            console.log(res);
            alert("注册成功");
            this.$router.push("/admin");
          })
          .catch(err => {
            this.is_loading = false;
            console.log(err);
          });
      }
    },
    keyUpRegister() {
      if (this.username && this.password && this.confirmed) {
        this.register();
      }
    },
    showError(msg) {
      this.error_msg = msg;
      this.is_error = true;
      this.is_loading = false;
      setTimeout(() => {
        this.is_error = false;
      }, 3000);
    }
  },
  components: {
    LoadingPage,
    AdminForm
  }
};
</script>

<style scoped>
.head .profile .default_avatar {
  width: 100%;
  height: 100%;
  background-color: #a9b2c2;
  position: relative;
}
.head .profile .default_avatar::after {
  content: "T";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4em;
  font-weight: bold;
  color: #000000;
}
.content .input {
  width: 80%;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content .input label {
  width: 6vh;
  height: 6vh;
  line-height: 6vh;
}
.content .input label img {
  width: 100%;
  height: auto;
}
.content .input input {
  width: 80%;
  height: 100%;
  font-size: 1.2em;
  font-family: "宋体";
  border: none;
}
.content button {
  width: 60%;
  height: 6vh;
  border-radius: 3vh;
  border: none;
  outline: none;
  background-color: #000000;
  font-size: 1em;
  font-weight: 600;
  color: #ffffff;
}
.content button:disabled {
  background-color: #9b9b9b;
}
</style>
