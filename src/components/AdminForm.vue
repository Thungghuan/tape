<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <div class="head">
        <div class="profile">
          <slot name="profile"></slot>
        </div>
        <div class="text">
          <span>
            <slot name="text"></slot>
          </span>
        </div>
      </div>
      <div class="content">
        <slot name="username"></slot>
        <slot name="password"></slot>
        <slot name="confirmed"></slot>
        <span class="error" v-show="is_error">
          {{ error_msg }}
        </span>
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminForm",
  props: {
    error_msg: String,
    is_error: Boolean
  }
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-wrapper {
  width: 90vw;
  /* height: 60vh; */
  border-radius: 3vw;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  background-color: #ccc3c1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.head {
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.head .profile {
  width: 14vh;
  height: 14vh;
  border: 2px solid #535353;
  border-radius: calc(7vh + 2px);
  overflow: hidden;
}
.head .text {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: 600;
  font-family: "宋体";
  user-select: none;
}
.content {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.content .error {
  font-size: 0.8em;
  color: #ff0000;
}
</style>
