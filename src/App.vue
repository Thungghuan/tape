<template>
  <div id="background">
    <img
      src="https://pic1.zhimg.com/80/v2-6c5e3fcffd92c1149c28e1d075881043_720w.jpg?source=1940ef5c"
    />
  </div>
  <div id="wrapper">
    <ask-wrapper />
    <question-wrapper />
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
</template>

<script>
// @ is an alias to /src
import AskWrapper from "@/components/AskWrapper.vue";
import QuestionWrapper from "@/components/QuestionWrapper.vue";

export default {
  components: {
    AskWrapper,
    QuestionWrapper
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#background {
  position: fixed;
  z-index: -1;
}

#background img {
  width: 100vw;
  height: auto;
}

#wrapper {
  width: 90vw;
  margin: 0 auto;
  padding-top: 25vh;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
