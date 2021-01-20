<template>
  <loading-page v-show="is_loading"></loading-page>
  <admin-form :error_msg="error_msg" :is_error="is_error">
    <template #profile>
      <img :src="$user.profile_url" alt="" />
    </template>
    <template #text>
      请登录你的管理员账号
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
          @keyup.enter="keyUpLogin"
        />
      </div>
    </template>
    <template #button>
      <button :disabled="!username || !password" @click="login">
        登 录
      </button>
    </template>
  </admin-form>
</template>

<script>
import LoadingPage from "@/components/LoadingPage.vue";
import AdminForm from "@/components/AdminForm.vue";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error_msg: "",
      is_error: false,
      is_loading: false
    };
  },
  methods: {
    login() {
      this.is_loading = true;
      this.$axios({
        url: "/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(res => {
          console.log(res);
          this.is_loading = false;
          this.$router.replace("/admin");
        })
        .catch(err => {
          console.log(err);
          this.showError("用户名或密码错误");
        });
    },
    keyUpLogin() {
      if (this.username && this.password) {
        this.login();
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
.head .profile img {
  width: 100%;
  height: auto;
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
